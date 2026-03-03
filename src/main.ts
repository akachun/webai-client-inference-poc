import * as ort from 'onnxruntime-web/all';

type BenchResult = {
  provider: string;
  ok: boolean;
  initMs?: number;
  firstRunMs?: number;
  avgRunMs?: number;
  error?: string;
};

const MODEL_URL = '/mnist-8.onnx';

ort.env.wasm.wasmPaths = 'https://cdn.jsdelivr.net/npm/onnxruntime-web/dist/';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <h1>WebAI Client Inference PoC</h1>
  <p>Model: mnist-8.onnx (local /public)</p>
  <p>Benchmark providers: webgpu → wasm → webnn(optional)</p>
  <button id="run">Run Benchmark</button>
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

function normalizeDims(dims: readonly (number | string)[] | undefined): number[] {
  if (!dims || dims.length === 0) return [1, 1, 28, 28];
  return dims.map((d, i) => {
    if (typeof d === 'number' && d > 0) return d;
    // fallback for symbolic dims
    if (i === 0) return 1;
    if (i === 1) return 1;
    if (i === 2 || i === 3) return 28;
    return 1;
  });
}

function makeRandomTensor(meta?: ort.TensorMetadata): ort.Tensor {
  const dims = normalizeDims(meta?.dimensions);
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

async function benchProvider(provider: 'webgpu' | 'wasm' | 'webnn'): Promise<BenchResult> {
  try {
    const t0 = now();
    const session = await withTimeout(
      ort.InferenceSession.create(MODEL_URL, {
        executionProviders: [provider],
        graphOptimizationLevel: 'all'
      }),
      12000,
      `${provider} session create`
    );
    const initMs = now() - t0;

    const inputName = session.inputNames[0];
    if (!inputName) throw new Error('No input name found in model');
    const inputMeta = session.inputMetadata?.[inputName];
    const inputTensor = makeRandomTensor(inputMeta);

    const feeds: Record<string, ort.Tensor> = { [inputName]: inputTensor };

    const r0 = now();
    await withTimeout(session.run(feeds), 10000, `${provider} first run`);
    const firstRunMs = now() - r0;

    const runs = 20;
    const tRuns = now();
    for (let i = 0; i < runs; i++) {
      await withTimeout(session.run(feeds), 10000, `${provider} run ${i + 1}`);
    }
    const avgRunMs = (now() - tRuns) / runs;

    return {
      provider,
      ok: true,
      initMs,
      firstRunMs,
      avgRunMs
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
  log(`UA: ${navigator.userAgent}`);
  log(`WebGPU API: ${'gpu' in navigator ? 'yes' : 'no'}`);
  log(`WebNN API: ${'ml' in navigator ? 'maybe (navigator.ml)' : 'no'}`);
  log('ORT loaded: onnxruntime-web/all');
  log(`Model URL: ${MODEL_URL}`);
  log('---');

  const providers: Array<'webgpu' | 'wasm' | 'webnn'> = ['webgpu', 'wasm', 'webnn'];
  const results: BenchResult[] = [];

  for (const p of providers) {
    log(`Running ${p} ...`);
    const r = await benchProvider(p);
    results.push(r);
    if (!r.ok) {
      log(`❌ ${p}: ${r.error}`);
      continue;
    }
    log(`✅ ${p}: init=${r.initMs!.toFixed(1)}ms, first=${r.firstRunMs!.toFixed(1)}ms, avg=${r.avgRunMs!.toFixed(1)}ms`);
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
