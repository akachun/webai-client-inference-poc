import * as ort from 'onnxruntime-web/all';

type Provider = 'webgpu' | 'wasm' | 'webnn';
type Mode = 'v1' | 'v2' | 'v3' | 'v4';

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

const V4_CONFIG: BenchConfig = {
  name: 'v4',
  description: 'Fast Style Transfer demo + provider benchmark',
  modelUrl: '/mosaic-9.onnx',
  inputFallbackDims: [1, 3, 224, 224],
  warmupRuns: 1,
  measuredRuns: 1,
  createTimeoutMs: 30000,
  runTimeoutMs: 30000,
  providers: ['webgpu', 'wasm', 'webnn']
};

const V3_WORKLOADS = [1, 4, 8, 16];

function getModeFromPath(): Mode {
  const path = window.location.pathname.toLowerCase();
  if (path.includes('/v4')) return 'v4';
  if (path.includes('/v3')) return 'v3';
  if (path.includes('/v2')) return 'v2';
  return 'v1';
}

function getConfig(mode: Mode): BenchConfig {
  if (mode === 'v2') return V2_CONFIG;
  if (mode === 'v3') return V3_CONFIG;
  if (mode === 'v4') return V4_CONFIG;
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

const v4Extra =
  mode === 'v4'
    ? `
  <div style="margin: 12px 0; padding: 10px; border: 1px solid #ddd; border-radius: 8px;">
    <p><strong>V4 Demo:</strong> Upload an image and apply style transfer with each provider.</p>
    <input id="imageInput" type="file" accept="image/*" />
    <div style="display:flex; gap:12px; flex-wrap:wrap; margin-top:10px;">
      <div><p>Input (resized)</p><canvas id="inputCanvas" width="224" height="224" style="border:1px solid #ccc;"></canvas></div>
      <div><p>WebGPU</p><canvas id="out-webgpu" width="224" height="224" style="border:1px solid #ccc;"></canvas></div>
      <div><p>WASM</p><canvas id="out-wasm" width="224" height="224" style="border:1px solid #ccc;"></canvas></div>
      <div><p>WebNN</p><canvas id="out-webnn" width="224" height="224" style="border:1px solid #ccc;"></canvas></div>
    </div>
  </div>
`
    : '';

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
    <a href="${baseUrl}v4">/v4</a> |
    <a href="${window.location.pathname}?autorun=1">autorun</a>
  </p>
  ${v4Extra}
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

function tensorFromCanvas(canvas: HTMLCanvasElement): ort.Tensor {
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('canvas context not available');
  const { width, height } = canvas;
  const imageData = ctx.getImageData(0, 0, width, height).data;

  const data = new Float32Array(1 * 3 * height * width);
  const plane = width * height;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      const idx = y * width + x;
      data[idx] = imageData[i];
      data[plane + idx] = imageData[i + 1];
      data[plane * 2 + idx] = imageData[i + 2];
    }
  }
  return new ort.Tensor('float32', data, [1, 3, height, width]);
}

function renderTensorToCanvas(tensor: ort.Tensor, canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('canvas context not available');

  const dims = tensor.dims;
  if (dims.length !== 4) throw new Error(`Unexpected output dims: ${dims.join('x')}`);
  const [, c, h, w] = dims;
  if (c !== 3) throw new Error(`Expected 3 channels output, got ${c}`);

  canvas.width = w;
  canvas.height = h;

  const data = tensor.data as Float32Array;
  const img = ctx.createImageData(w, h);
  const plane = w * h;

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = y * w + x;
      const out = idx * 4;
      const r = Math.max(0, Math.min(255, Math.round(data[idx])));
      const g = Math.max(0, Math.min(255, Math.round(data[plane + idx])));
      const b = Math.max(0, Math.min(255, Math.round(data[plane * 2 + idx])));
      img.data[out] = r;
      img.data[out + 1] = g;
      img.data[out + 2] = b;
      img.data[out + 3] = 255;
    }
  }

  ctx.putImageData(img, 0, 0);
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

async function runStyleTransferV4() {
  out.textContent = '';
  log(`Mode: ${config.name}`);
  log(`UA: ${navigator.userAgent}`);
  log(`WebGPU API: ${'gpu' in navigator ? 'yes' : 'no'}`);
  log(`WebNN API: ${'ml' in navigator ? 'maybe (navigator.ml)' : 'no'}`);
  log(`Model URL: ${modelUrl}`);
  log('---');

  const inputCanvas = document.querySelector<HTMLCanvasElement>('#inputCanvas');
  if (!inputCanvas) throw new Error('V4 input canvas not found');

  const inputTensor = tensorFromCanvas(inputCanvas);

  for (const provider of config.providers) {
    log(`Running ${provider} ...`);
    try {
      const outCanvas = document.querySelector<HTMLCanvasElement>(`#out-${provider}`);
      if (!outCanvas) throw new Error(`Output canvas missing for ${provider}`);

      const tInit0 = now();
      const session = await createSession(provider);
      const initMs = now() - tInit0;

      const feedName = session.inputNames[0];
      const tRun0 = now();
      const outputs = await withTimeout(
        session.run({ [feedName]: inputTensor }),
        config.runTimeoutMs,
        `${provider} style run`
      );
      const runMs = now() - tRun0;

      const outName = session.outputNames[0];
      const outTensor = outputs[outName] as ort.Tensor;
      renderTensorToCanvas(outTensor, outCanvas);

      log(`✅ ${provider}: init=${initMs.toFixed(1)}ms, styleRun=${runMs.toFixed(1)}ms`);
    } catch (e) {
      log(`❌ ${provider}: ${e instanceof Error ? e.message : String(e)}`);
    }
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

if (mode === 'v4') {
  const imageInput = document.querySelector<HTMLInputElement>('#imageInput');
  const inputCanvas = document.querySelector<HTMLCanvasElement>('#inputCanvas');
  if (imageInput && inputCanvas) {
    const ctx = inputCanvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#f0f0f0';
      ctx.fillRect(0, 0, inputCanvas.width, inputCanvas.height);
      ctx.fillStyle = '#333';
      ctx.font = '14px sans-serif';
      ctx.fillText('Upload image', 60, 112);
    }

    imageInput.addEventListener('change', () => {
      const file = imageInput.files?.[0];
      if (!file || !inputCanvas) return;
      const url = URL.createObjectURL(file);
      const img = new Image();
      img.onload = () => {
        const c = inputCanvas.getContext('2d');
        if (!c) return;
        c.clearRect(0, 0, inputCanvas.width, inputCanvas.height);
        c.drawImage(img, 0, 0, inputCanvas.width, inputCanvas.height);
        URL.revokeObjectURL(url);
      };
      img.src = url;
    });
  }
}

runBtn.addEventListener('click', () => {
  const fn = mode === 'v4' ? runStyleTransferV4 : runBenchmark;
  fn().catch((e) => log(`error: ${String(e)}`));
});

const params = new URLSearchParams(window.location.search);
if (params.get('autorun') === '1' && mode !== 'v4') {
  runBenchmark().catch((e) => log(`error: ${String(e)}`));
}
