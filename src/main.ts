import * as ort from 'onnxruntime-web/all';

type Provider = 'webgpu' | 'wasm' | 'webnn';
type Mode = 'v1' | 'v2' | 'v3';

type BenchResult = {
  provider: Provider;
  ok: boolean;
  initMs?: number;
  firstRunMs?: number;
  avgRunMs?: number;
  p95RunMs?: number;
  error?: string;
};

type StressRow = {
  provider: Provider;
  workload: number;
  totalMs: number;
  perInferMs: number;
};

type BenchConfig = {
  name: Mode;
  description: string;
  modelUrl: string;
  inputFallbackDims: number[];
  warmupRuns: number;
  measuredRuns: number;
  createTimeoutMs: number;
  runTimeoutMs: number;
  providers: Provider[];
};

const V1_CONFIG: BenchConfig = {
  name: 'v1',
  description: 'Smoke benchmark (MNIST tiny model)',
  modelUrl: '/mnist-8.onnx',
  inputFallbackDims: [1, 1, 28, 28],
  warmupRuns: 0,
  measuredRuns: 20,
  createTimeoutMs: 12000,
  runTimeoutMs: 10000,
  providers: ['webgpu', 'wasm', 'webnn']
};

const V2_CONFIG: BenchConfig = {
  name: 'v2',
  description: 'Extended benchmark (SqueezeNet medium model + warmup + p95)',
  modelUrl: '/squeezenet1.1-7.onnx',
  inputFallbackDims: [1, 3, 224, 224],
  warmupRuns: 3,
  measuredRuns: 30,
  createTimeoutMs: 25000,
  runTimeoutMs: 15000,
  providers: ['webgpu', 'wasm', 'webnn']
};

const V3_CONFIG: BenchConfig = {
  name: 'v3',
  description: 'Practical stress benchmark (same model, scaled workload)',
  modelUrl: '/squeezenet1.1-7.onnx',
  inputFallbackDims: [1, 3, 224, 224],
  warmupRuns: 3,
  measuredRuns: 10,
  createTimeoutMs: 30000,
  runTimeoutMs: 20000,
  providers: ['webgpu', 'wasm', 'webnn']
};

const V3_WORKLOADS = [1, 4, 8, 16];

function getModeFromPath(): Mode {
  const path = window.location.pathname.toLowerCase();
  if (path.includes('/v3')) return 'v3';
  if (path.includes('/v2')) return 'v2';
  return 'v1';
}

function getConfig(mode: Mode): BenchConfig {
  if (mode === 'v2') return V2_CONFIG;
  if (mode === 'v3') return V3_CONFIG;
  return V1_CONFIG;
}

const mode = getModeFromPath();
const config = getConfig(mode);

ort.env.wasm.wasmPaths = 'https://cdn.jsdelivr.net/npm/onnxruntime-web/dist/';

const app = document.querySelector<HTMLDivElement>('#app')!;
const baseUrl = (import.meta as any).env?.BASE_URL ?? '/';

function resolveModelUrl(url: string): string {
  if (/^https?:\/\//i.test(url)) return url;
  if (url.startsWith('/')) return `${baseUrl}${url.slice(1)}`;
  return `${baseUrl}${url}`;
}

const modelUrl = resolveModelUrl(config.modelUrl);

app.innerHTML = `
  <h1>WebAI Client Inference PoC (${config.name.toUpperCase()})</h1>
  <p>${config.description}</p>
  <p>Model: ${modelUrl}</p>
  <p>Providers: ${config.providers.join(' → ')}</p>
  <p>Warmup: ${config.warmupRuns}, Measured runs: ${config.measuredRuns}</p>
  ${mode === 'v3' ? `<p>V3 workloads (sequential inferences per sample): ${V3_WORKLOADS.join(', ')}</p>` : ''}
  <p>
    <a href="${baseUrl}v1">/v1</a> |
    <a href="${baseUrl}v2">/v2</a> |
    <a href="${baseUrl}v3">/v3</a> |
    <a href="${window.location.pathname}?autorun=1">autorun</a>
  </p>
  <button id="run">Run Benchmark (${config.name.toUpperCase()})</button>
  <pre id="out"></pre>
`;

const out = document.querySelector<HTMLPreElement>('#out')!;
const runBtn = document.querySelector<HTMLButtonElement>('#run')!;

function log(msg: string) {
  out.textContent += `${msg}\n`;
}

function now() {
  return performance.now();
}

function percentile(values: number[], p: number): number {
  if (values.length === 0) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const idx = Math.min(sorted.length - 1, Math.max(0, Math.ceil((p / 100) * sorted.length) - 1));
  return sorted[idx];
}

function normalizeDims(dims: readonly (number | string)[] | undefined, fallbackDims: number[]): number[] {
  if (!dims || dims.length === 0) return fallbackDims;
  const normalized = dims.map((d, i) => (typeof d === 'number' && d > 0 ? d : fallbackDims[i] ?? 1));
  return normalized.some((v) => !Number.isFinite(v) || v <= 0) ? fallbackDims : normalized;
}

function makeRandomTensor(meta: ort.TensorMetadata | undefined, fallbackDims: number[]): ort.Tensor {
  const dims = normalizeDims(meta?.dimensions, fallbackDims);
  const size = dims.reduce((a, b) => a * b, 1);
  const type = meta?.type;

  if (type === 'int64') {
    const data = new BigInt64Array(size);
    for (let i = 0; i < size; i++) data[i] = BigInt(1);
    return new ort.Tensor('int64', data, dims);
  }

  const data = new Float32Array(size);
  for (let i = 0; i < size; i++) data[i] = Math.random();
  return new ort.Tensor('float32', data, dims);
}

async function withTimeout<T>(p: Promise<T>, ms: number, label: string): Promise<T> {
  let timer: ReturnType<typeof setTimeout> | undefined;
  const timeout = new Promise<T>((_, reject) => {
    timer = setTimeout(() => reject(new Error(`${label} timed out after ${ms}ms`)), ms);
  });
  try {
    return await Promise.race([p, timeout]);
  } finally {
    if (timer) clearTimeout(timer);
  }
}

async function createSession(provider: Provider) {
  return withTimeout(
    ort.InferenceSession.create(modelUrl, {
      executionProviders: [provider],
      graphOptimizationLevel: 'all'
    }),
    config.createTimeoutMs,
    `${provider} session create`
  );
}

async function benchProvider(provider: Provider): Promise<BenchResult> {
  try {
    const t0 = now();
    const session = await createSession(provider);
    const initMs = now() - t0;

    const inputName = session.inputNames[0];
    if (!inputName) throw new Error('No input name found in model');
    const inputMeta = session.inputMetadata?.[inputName];
    const inputTensor = makeRandomTensor(inputMeta, config.inputFallbackDims);
    const feeds: Record<string, ort.Tensor> = { [inputName]: inputTensor };

    const firstT0 = now();
    await withTimeout(session.run(feeds), config.runTimeoutMs, `${provider} first run`);
    const firstRunMs = now() - firstT0;

    for (let i = 0; i < config.warmupRuns; i++) {
      await withTimeout(session.run(feeds), config.runTimeoutMs, `${provider} warmup ${i + 1}`);
    }

    const runSamples: number[] = [];
    for (let i = 0; i < config.measuredRuns; i++) {
      const t = now();
      await withTimeout(session.run(feeds), config.runTimeoutMs, `${provider} run ${i + 1}`);
      runSamples.push(now() - t);
    }

    return {
      provider,
      ok: true,
      initMs,
      firstRunMs,
      avgRunMs: runSamples.reduce((a, b) => a + b, 0) / runSamples.length,
      p95RunMs: percentile(runSamples, 95)
    };
  } catch (err) {
    return {
      provider,
      ok: false,
      error: err instanceof Error ? err.message : String(err)
    };
  }
}

async function runV3Stress(provider: Provider): Promise<StressRow[] | { error: string }> {
  try {
    const session = await createSession(provider);
    const inputName = session.inputNames[0];
    if (!inputName) throw new Error('No input name found in model');
    const inputMeta = session.inputMetadata?.[inputName];
    const inputTensor = makeRandomTensor(inputMeta, config.inputFallbackDims);
    const feeds: Record<string, ort.Tensor> = { [inputName]: inputTensor };

    // warmup
    for (let i = 0; i < config.warmupRuns; i++) {
      await withTimeout(session.run(feeds), config.runTimeoutMs, `${provider} warmup ${i + 1}`);
    }

    const rows: StressRow[] = [];
    for (const workload of V3_WORKLOADS) {
      const t0 = now();
      for (let i = 0; i < workload; i++) {
        await withTimeout(session.run(feeds), config.runTimeoutMs, `${provider} workload ${workload} run ${i + 1}`);
      }
      const totalMs = now() - t0;
      rows.push({ provider, workload, totalMs, perInferMs: totalMs / workload });
    }

    return rows;
  } catch (err) {
    return { error: err instanceof Error ? err.message : String(err) };
  }
}

function printSummaryTable(rows: StressRow[]) {
  log('---');
  log('V3 Stress Summary (provider | workload | totalMs | perInferMs)');
  for (const r of rows) {
    log(`${r.provider.padEnd(6)} | ${String(r.workload).padStart(2)} | ${r.totalMs.toFixed(2).padStart(8)} | ${r.perInferMs.toFixed(3).padStart(8)}`);
  }
}

async function runBenchmark() {
  out.textContent = '';
  log(`Mode: ${config.name}`);
  log(`UA: ${navigator.userAgent}`);
  log(`WebGPU API: ${'gpu' in navigator ? 'yes' : 'no'}`);
  log(`WebNN API: ${'ml' in navigator ? 'maybe (navigator.ml)' : 'no'}`);
  log('ORT loaded: onnxruntime-web/all');
  log(`Model URL: ${modelUrl}`);
  log(`Warmup runs: ${config.warmupRuns}, Measured runs: ${config.measuredRuns}`);
  if (mode === 'v3') log(`Workloads: ${V3_WORKLOADS.join(', ')}`);
  log('---');

  const results: BenchResult[] = [];
  for (const p of config.providers) {
    log(`Running ${p} ...`);
    const r = await benchProvider(p);
    results.push(r);
    if (!r.ok) {
      log(`❌ ${p}: ${r.error}`);
      continue;
    }
    log(`✅ ${p}: init=${r.initMs!.toFixed(1)}ms, first=${r.firstRunMs!.toFixed(1)}ms, avg=${r.avgRunMs!.toFixed(2)}ms, p95=${r.p95RunMs!.toFixed(2)}ms`);
  }

  if (mode === 'v3') {
    log('---');
    log('Running V3 stress test ...');
    const stressRows: StressRow[] = [];
    for (const p of config.providers) {
      const rows = await runV3Stress(p);
      if ('error' in rows) {
        log(`❌ stress ${p}: ${rows.error}`);
      } else {
        log(`✅ stress ${p}: ${rows.length} rows`);
        stressRows.push(...rows);
      }
    }
    if (stressRows.length > 0) printSummaryTable(stressRows);
  }

  log('---');
  log('Summary (JSON)');
  log(JSON.stringify(results, null, 2));
}

runBtn.addEventListener('click', () => {
  runBenchmark().catch((e) => log(`error: ${String(e)}`));
});

const params = new URLSearchParams(window.location.search);
if (params.get('autorun') === '1') {
  runBenchmark().catch((e) => log(`error: ${String(e)}`));
}
