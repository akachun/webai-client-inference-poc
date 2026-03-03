import * as ort from 'onnxruntime-web/all';

type Provider = 'webgpu' | 'wasm' | 'webnn';

type BenchResult = {
  provider: Provider;
  ok: boolean;
  initMs?: number;
  firstRunMs?: number;
  avgRunMs?: number;
  p95RunMs?: number;
  error?: string;
};

type BenchConfig = {
  name: string;
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

function getConfigFromPath(): BenchConfig {
  const path = window.location.pathname.toLowerCase();
  if (path.startsWith('/v2')) return V2_CONFIG;
  return V1_CONFIG;
}

const config = getConfigFromPath();

ort.env.wasm.wasmPaths = 'https://cdn.jsdelivr.net/npm/onnxruntime-web/dist/';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <h1>WebAI Client Inference PoC (${config.name.toUpperCase()})</h1>
  <p>${config.description}</p>
  <p>Model: ${config.modelUrl}</p>
  <p>Providers: ${config.providers.join(' → ')}</p>
  <p>Warmup: ${config.warmupRuns}, Measured runs: ${config.measuredRuns}</p>
  <p>
    <a href="/v1">/v1</a> |
    <a href="/v2">/v2</a> |
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

function normalizeDims(
  dims: readonly (number | string)[] | undefined,
  fallbackDims: number[]
): number[] {
  if (!dims || dims.length === 0) return fallbackDims;

  const normalized = dims.map((d, i) => {
    if (typeof d === 'number' && d > 0) return d;
    return fallbackDims[i] ?? 1;
  });

  if (normalized.some((v) => !Number.isFinite(v) || v <= 0)) {
    return fallbackDims;
  }

  return normalized;
}

function makeRandomTensor(meta: ort.TensorMetadata | undefined, fallbackDims: number[]): ort.Tensor {
  const dims = normalizeDims(meta?.dimensions, fallbackDims);
  const size = dims.reduce((a, b) => a * b, 1);

  const type = meta?.type;
  if (type === 'float16' || type === 'float32' || !type) {
    const data = new Float32Array(size);
    for (let i = 0; i < size; i++) data[i] = Math.random();
    return new ort.Tensor('float32', data, dims);
  }

  if (type === 'int64') {
    const data = new BigInt64Array(size);
    for (let i = 0; i < size; i++) data[i] = BigInt(1);
    return new ort.Tensor('int64', data, dims);
  }

  const data = new Float32Array(size);
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

async function benchProvider(provider: Provider): Promise<BenchResult> {
  try {
    const t0 = now();
    const session = await withTimeout(
      ort.InferenceSession.create(config.modelUrl, {
        executionProviders: [provider],
        graphOptimizationLevel: 'all'
      }),
      config.createTimeoutMs,
      `${provider} session create`
    );
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

    const avgRunMs = runSamples.reduce((a, b) => a + b, 0) / runSamples.length;
    const p95RunMs = percentile(runSamples, 95);

    return {
      provider,
      ok: true,
      initMs,
      firstRunMs,
      avgRunMs,
      p95RunMs
    };
  } catch (err) {
    return {
      provider,
      ok: false,
      error: err instanceof Error ? err.message : String(err)
    };
  }
}

async function runBenchmark() {
  out.textContent = '';
  log(`Mode: ${config.name}`);
  log(`UA: ${navigator.userAgent}`);
  log(`WebGPU API: ${'gpu' in navigator ? 'yes' : 'no'}`);
  log(`WebNN API: ${'ml' in navigator ? 'maybe (navigator.ml)' : 'no'}`);
  log('ORT loaded: onnxruntime-web/all');
  log(`Model URL: ${config.modelUrl}`);
  log(`Warmup runs: ${config.warmupRuns}, Measured runs: ${config.measuredRuns}`);
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
    log(
      `✅ ${p}: init=${r.initMs!.toFixed(1)}ms, first=${r.firstRunMs!.toFixed(1)}ms, avg=${r.avgRunMs!.toFixed(2)}ms, p95=${r.p95RunMs!.toFixed(2)}ms`
    );
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
