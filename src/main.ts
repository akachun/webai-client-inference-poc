import * as ort from 'onnxruntime-web/all';

type Provider = 'webgpu' | 'wasm' | 'webnn';
type Mode = 'v1' | 'v2' | 'v3' | 'v4' | 'v5' | 'v6' | 'v7' | 'v8' | 'v9';

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

const V5_CONFIG: BenchConfig = {
  name: 'v5',
  description: 'YOLO Tiny webcam object detection + realtime performance',
  modelUrl: 'https://raw.githubusercontent.com/microsoft/onnxruntime-web-demo/main/public/yolo.onnx',
  inputFallbackDims: [1, 3, 416, 416],
  warmupRuns: 1,
  measuredRuns: 1,
  createTimeoutMs: 45000,
  runTimeoutMs: 45000,
  providers: ['webgpu', 'wasm', 'webnn']
};

const V6_CONFIG: BenchConfig = {
  name: 'v6',
  description: 'Chrome Built-in AI (Gemini Nano) probe + latency PoC',
  modelUrl: '/mnist-8.onnx',
  inputFallbackDims: [1, 1, 28, 28],
  warmupRuns: 0,
  measuredRuns: 1,
  createTimeoutMs: 12000,
  runTimeoutMs: 12000,
  providers: ['wasm']
};

const V7_CONFIG: BenchConfig = {
  name: 'v7',
  description: 'Unified comparison: ONNX runtime paths + Built-in AI',
  modelUrl: '/mnist-8.onnx',
  inputFallbackDims: [1, 1, 28, 28],
  warmupRuns: 0,
  measuredRuns: 10,
  createTimeoutMs: 12000,
  runTimeoutMs: 12000,
  providers: ['wasm', 'webgpu', 'webnn']
};

const V8_CONFIG: BenchConfig = {
  name: 'v8',
  description: 'Tokenizer + ONNX summarization vs Built-in AI summarization',
  modelUrl: '/mnist-8.onnx',
  inputFallbackDims: [1, 1, 28, 28],
  warmupRuns: 0,
  measuredRuns: 10,
  createTimeoutMs: 12000,
  runTimeoutMs: 12000,
  providers: ['wasm']
};

const V9_CONFIG: BenchConfig = {
  name: 'v9',
  description: 'Built-in AI use-case bundle: summarize, prompt, detect+translate',
  modelUrl: '/mnist-8.onnx',
  inputFallbackDims: [1, 1, 28, 28],
  warmupRuns: 0,
  measuredRuns: 1,
  createTimeoutMs: 12000,
  runTimeoutMs: 12000,
  providers: ['wasm']
};

const V3_WORKLOADS = [1, 4, 8, 16];

const YOLO_CLASSES = [
  'aeroplane',
  'bicycle',
  'bird',
  'boat',
  'bottle',
  'bus',
  'car',
  'cat',
  'chair',
  'cow',
  'diningtable',
  'dog',
  'horse',
  'motorbike',
  'person',
  'pottedplant',
  'sheep',
  'sofa',
  'train',
  'tvmonitor'
];

const YOLO_ANCHORS = [1.08, 1.19, 3.42, 4.41, 6.63, 11.38, 9.42, 5.11, 16.62, 10.52];

type Detection = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  score: number;
  cls: number;
};

function getModeFromPath(): Mode {
  const path = window.location.pathname.toLowerCase();
  if (path.includes('/v9')) return 'v9';
  if (path.includes('/v8')) return 'v8';
  if (path.includes('/v7')) return 'v7';
  if (path.includes('/v6')) return 'v6';
  if (path.includes('/v5')) return 'v5';
  if (path.includes('/v4')) return 'v4';
  if (path.includes('/v3')) return 'v3';
  if (path.includes('/v2')) return 'v2';
  return 'v1';
}

function getConfig(mode: Mode): BenchConfig {
  if (mode === 'v2') return V2_CONFIG;
  if (mode === 'v3') return V3_CONFIG;
  if (mode === 'v4') return V4_CONFIG;
  if (mode === 'v5') return V5_CONFIG;
  if (mode === 'v6') return V6_CONFIG;
  if (mode === 'v7') return V7_CONFIG;
  if (mode === 'v8') return V8_CONFIG;
  if (mode === 'v9') return V9_CONFIG;
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

const v5Extra =
  mode === 'v5'
    ? `
  <div style="margin: 12px 0; padding: 10px; border: 1px solid #ddd; border-radius: 8px;">
    <p><strong>V5 Demo:</strong> Webcam YOLO detection (choose provider, then start).</p>
    <p style="margin:4px 0 8px; color:#444;">Try: person, bottle, chair, dog, cat, car, bus, train, tvmonitor (VOC classes).</p>
    <label>Provider:
      <select id="v5Provider">
        <option value="webgpu">webgpu</option>
        <option value="wasm">wasm</option>
        <option value="webnn">webnn</option>
      </select>
    </label>
    <label style="margin-left:8px;">Conf
      <input id="v5Conf" type="range" min="0.05" max="0.8" step="0.01" value="0.3" />
      <span id="v5ConfVal">0.30</span>
    </label>
    <label style="margin-left:8px;">IoU
      <input id="v5Iou" type="range" min="0.1" max="0.8" step="0.01" value="0.35" />
      <span id="v5IouVal">0.35</span>
    </label>
    <label style="margin-left:8px;">MaxBox
      <input id="v5Max" type="number" min="1" max="50" step="1" value="10" style="width:56px;" />
    </label>
    <button id="v5StartCam">Start Camera</button>
    <button id="v5StartDetect">Start Detection</button>
    <button id="v5StopDetect">Stop</button>
    <div style="margin-top:8px; font-family:monospace;" id="v5Metrics">fps: -, infer: -ms</div>
    <div style="position:relative; width:416px; height:416px; margin-top:10px; border:1px solid #ccc;">
      <video id="v5Video" width="416" height="416" autoplay muted playsinline style="position:absolute; left:0; top:0; object-fit:cover;"></video>
      <canvas id="v5Overlay" width="416" height="416" style="position:absolute; left:0; top:0;"></canvas>
    </div>
  </div>
`
    : '';

const v6Extra =
  mode === 'v6'
    ? `
  <div style="margin: 12px 0; padding: 10px; border: 1px solid #ddd; border-radius: 8px;">
    <p><strong>V6 Demo:</strong> Chrome Built-in AI (Gemini Nano) probe.</p>
    <p style="margin:4px 0 8px; color:#444;">Runs a simple Korean summary task and reports latency/availability.</p>
    <textarea id="v6Input" rows="4" style="width:100%;">클라이언트 사이드 AI PoC를 통해 WebGPU, WASM, WebNN 성능을 비교했습니다. 초기 지연은 WebGPU와 WebNN이 더 클 수 있지만, 반복 추론에서는 유리할 수 있습니다.</textarea>
    <button id="v6Run">Run Built-in AI Test</button>
    <button id="v6Batch" style="margin-left:8px;">Run 10-case Batch Test</button>
  </div>
`
    : '';

const v7Extra =
  mode === 'v7'
    ? `
  <div style="margin: 12px 0; padding: 10px; border: 1px solid #ddd; border-radius: 8px;">
    <p><strong>V7 Demo:</strong> Unified test (ONNX runtime paths + Built-in AI).</p>
    <p style="margin:4px 0 8px; color:#444;">ONNX paths use same ONNX model runtime probe; Built-in AI uses summarization task.</p>
    <button id="v7Run">Run Unified Comparison</button>
  </div>
`
    : '';

const v8Extra =
  mode === 'v8'
    ? `
  <div style="margin: 12px 0; padding: 10px; border: 1px solid #ddd; border-radius: 8px;">
    <p><strong>V8 Demo:</strong> Tokenizer+ONNX summarization vs Built-in AI summarization.</p>
    <p style="margin:4px 0 8px; color:#444;">English summary model for fast setup: Xenova/distilbart-cnn-6-6</p>
    <textarea id="v8Input" rows="5" style="width:100%;">Client-side AI allows inference directly in browser, improving privacy and responsiveness. However, runtime compatibility and model size can affect startup latency. Teams should evaluate both raw latency and operational complexity when choosing between ONNX runtime paths and built-in browser AI APIs.</textarea>
    <button id="v8OnnxRun">Run ONNX Summary</button>
    <button id="v8BuiltInRun" style="margin-left:8px;">Run Built-in Summary</button>
    <button id="v8CompareRun" style="margin-left:8px;">Run 10-case Unified Compare</button>
  </div>
`
    : '';

const v9Extra =
  mode === 'v9'
    ? `
  <div style="margin: 12px 0; padding: 10px; border: 1px solid #ddd; border-radius: 8px;">
    <p><strong>V9 Demo:</strong> Built-in AI practical bundle (3 use cases)</p>
    <textarea id="v9Input" rows="8" style="width:100%;">Meeting Minutes (English)
Date: 2026-03-14
Topic: Mobile shopping app checkout performance review

Discussion Summary:
- The team reviewed increased checkout drop-offs on mobile devices during peak hours.
- Backend logs indicate intermittent payment API latency spikes above 2.5 seconds.
- UX recordings show users abandoning the flow when address validation takes too long.

Planned Action Items:
1) Run load tests for payment and address services under 3x peak traffic.
2) Add client-side timeout handling and user-friendly retry messages.
3) Prioritize caching for shipping options and coupon validation responses.
4) Define KPI targets: checkout completion rate, p95 response time, and error rate.

Decisions:
- Launch a two-week optimization sprint with daily KPI monitoring.
- Share a weekly status update with product, engineering, and operations teams.</textarea>
    <div style="margin-top:8px;">
      <button id="v9Summarize">1) Summarize Minutes</button>
      <button id="v9Prompt" style="margin-left:8px;">2) Generate Action Plan</button>
      <button id="v9Translate" style="margin-left:8px;">3) Translate Minutes (KO)</button>
      <button id="v9RunAll" style="margin-left:8px;">Run All</button>
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
    <a href="${baseUrl}v5">/v5</a> |
    <a href="${baseUrl}v6">/v6</a> |
    <a href="${baseUrl}v7">/v7</a> |
    <a href="${baseUrl}v8">/v8</a> |
    <a href="${baseUrl}v9">/v9</a> |
    <a href="${window.location.pathname}?autorun=1">autorun</a>
  </p>
  ${v4Extra}
  ${v5Extra}
  ${v6Extra}
  ${v7Extra}
  ${v8Extra}
  ${v9Extra}
  <button id="run">Run Benchmark (${config.name.toUpperCase()})</button>
  <pre id="out" style="margin-top:10px; padding:12px; background:#111; color:#eaeaea; border-radius:8px; white-space:pre-wrap; overflow-wrap:anywhere; word-break:break-word; max-height:420px; overflow:auto; line-height:1.45;"></pre>
`;

const out = document.querySelector<HTMLPreElement>('#out')!;
const runBtn = document.querySelector<HTMLButtonElement>('#run')!;

function log(msg: string) {
  out.textContent += `${msg}\n`;
}

function prettyText(text: string): string {
  if (!text) return text;
  return text
    .replace(/\s*•\s*/g, '\n• ')
    .replace(/\s*-\s+/g, '\n- ')
    .replace(/\s*(\d+\.)\s+/g, '\n$1 ')
    .replace(/\.\s+(?=[A-Z])/g, '.\n')
    .trim();
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
      const outIdx = idx * 4;
      const r = Math.max(0, Math.min(255, Math.round(data[idx])));
      const g = Math.max(0, Math.min(255, Math.round(data[plane + idx])));
      const b = Math.max(0, Math.min(255, Math.round(data[plane * 2 + idx])));
      img.data[outIdx] = r;
      img.data[outIdx + 1] = g;
      img.data[outIdx + 2] = b;
      img.data[outIdx + 3] = 255;
    }
  }

  ctx.putImageData(img, 0, 0);
}

function sigmoid(x: number): number {
  return 1 / (1 + Math.exp(-x));
}

function softmax(arr: number[]): number[] {
  const max = Math.max(...arr);
  const exps = arr.map((v) => Math.exp(v - max));
  const sum = exps.reduce((a, b) => a + b, 0);
  return exps.map((v) => v / sum);
}

function iou(a: Detection, b: Detection): number {
  const x1 = Math.max(a.x1, b.x1);
  const y1 = Math.max(a.y1, b.y1);
  const x2 = Math.min(a.x2, b.x2);
  const y2 = Math.min(a.y2, b.y2);
  const w = Math.max(0, x2 - x1);
  const h = Math.max(0, y2 - y1);
  const inter = w * h;
  const union = (a.x2 - a.x1) * (a.y2 - a.y1) + (b.x2 - b.x1) * (b.y2 - b.y1) - inter;
  return union > 0 ? inter / union : 0;
}

function nms(dets: Detection[], iouTh = 0.35): Detection[] {
  const outDets: Detection[] = [];
  const byScore = [...dets].sort((a, b) => b.score - a.score);
  while (byScore.length) {
    const best = byScore.shift()!;
    outDets.push(best);
    for (let i = byScore.length - 1; i >= 0; i--) {
      if (best.cls === byScore[i].cls && iou(best, byScore[i]) > iouTh) {
        byScore.splice(i, 1);
      }
    }
  }
  return outDets;
}

function decodeTinyYoloV2(output: ort.Tensor, scoreTh = 0.3, iouTh = 0.35, maxBoxes = 10): Detection[] {
  const data = output.data as Float32Array;
  const dims = output.dims;
  if (dims.length !== 4) return [];

  // support both NCHW [1,125,13,13] and NHWC [1,13,13,125]
  let C = 0;
  let H = 0;
  let W = 0;
  let at: (c: number, y: number, x: number) => number;

  if (dims[1] === 125) {
    C = dims[1];
    H = dims[2];
    W = dims[3];
    at = (c: number, y: number, x: number) => data[c * H * W + y * W + x];
  } else if (dims[3] === 125) {
    H = dims[1];
    W = dims[2];
    C = dims[3];
    at = (c: number, y: number, x: number) => data[(y * W + x) * C + c];
  } else {
    return [];
  }

  const classes = 20;
  const numAnchors = 5;
  const stride = classes + 5;
  const dets: Detection[] = [];

  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      for (let a = 0; a < numAnchors; a++) {
        const base = a * stride;
        const tx = at(base + 0, y, x);
        const ty = at(base + 1, y, x);
        const tw = at(base + 2, y, x);
        const th = at(base + 3, y, x);
        const to = at(base + 4, y, x);

        const classLogits: number[] = [];
        for (let c = 0; c < classes; c++) classLogits.push(at(base + 5 + c, y, x));
        const classProb = softmax(classLogits);

        let bestCls = 0;
        let bestProb = classProb[0];
        for (let c = 1; c < classes; c++) {
          if (classProb[c] > bestProb) {
            bestProb = classProb[c];
            bestCls = c;
          }
        }

        const obj = sigmoid(to);
        const score = obj * bestProb;
        if (score < scoreTh) continue;

        const bx = (x + sigmoid(tx)) / W;
        const by = (y + sigmoid(ty)) / H;
        const bw = (Math.exp(tw) * YOLO_ANCHORS[a * 2]) / W;
        const bh = (Math.exp(th) * YOLO_ANCHORS[a * 2 + 1]) / H;

        dets.push({
          x1: Math.max(0, (bx - bw / 2) * 416),
          y1: Math.max(0, (by - bh / 2) * 416),
          x2: Math.min(416, (bx + bw / 2) * 416),
          y2: Math.min(416, (by + bh / 2) * 416),
          score,
          cls: bestCls
        });
      }
    }
  }

  return nms(dets, iouTh).slice(0, maxBoxes);
}

function drawDetections(canvas: HTMLCanvasElement, dets: Detection[]) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.lineWidth = 2;
  ctx.font = '12px sans-serif';

  for (const d of dets) {
    ctx.strokeStyle = '#00ff90';
    ctx.fillStyle = 'rgba(0,255,144,0.15)';
    const w = d.x2 - d.x1;
    const h = d.y2 - d.y1;
    ctx.fillRect(d.x1, d.y1, w, h);
    ctx.strokeRect(d.x1, d.y1, w, h);

    const label = `${YOLO_CLASSES[d.cls] ?? d.cls} ${(d.score * 100).toFixed(1)}%`;
    ctx.fillStyle = '#00ff90';
    ctx.fillRect(d.x1, Math.max(0, d.y1 - 16), ctx.measureText(label).width + 8, 16);
    ctx.fillStyle = '#000';
    ctx.fillText(label, d.x1 + 4, Math.max(11, d.y1 - 4));
  }
}

function frameToYoloTensor(video: HTMLVideoElement): ort.Tensor {
  const temp = document.createElement('canvas');
  temp.width = 416;
  temp.height = 416;
  const tctx = temp.getContext('2d');
  if (!tctx) throw new Error('temp canvas ctx failed');
  tctx.drawImage(video, 0, 0, 416, 416);

  const pixels = tctx.getImageData(0, 0, 416, 416).data;
  const chw = new Float32Array(1 * 3 * 416 * 416);
  const plane = 416 * 416;

  for (let i = 0; i < plane; i++) {
    const p = i * 4;
    // tiny-yolov2 model here expects raw 0..255 RGB values
    chw[i] = pixels[p];
    chw[plane + i] = pixels[p + 1];
    chw[plane * 2 + i] = pixels[p + 2];
  }

  return new ort.Tensor('float32', chw, [1, 3, 416, 416]);
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
      const outputs = await withTimeout(session.run({ [feedName]: inputTensor }), config.runTimeoutMs, `${provider} style run`);
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

async function runYoloV5() {
  const video = document.querySelector<HTMLVideoElement>('#v5Video');
  const overlay = document.querySelector<HTMLCanvasElement>('#v5Overlay');
  const metrics = document.querySelector<HTMLDivElement>('#v5Metrics');
  const providerSel = document.querySelector<HTMLSelectElement>('#v5Provider');
  const confInput = document.querySelector<HTMLInputElement>('#v5Conf');
  const iouInput = document.querySelector<HTMLInputElement>('#v5Iou');
  const maxInput = document.querySelector<HTMLInputElement>('#v5Max');
  const confVal = document.querySelector<HTMLSpanElement>('#v5ConfVal');
  const iouVal = document.querySelector<HTMLSpanElement>('#v5IouVal');
  if (!video || !overlay || !metrics || !providerSel || !confInput || !iouInput || !maxInput || !confVal || !iouVal) throw new Error('V5 UI not found');

  let session: ort.InferenceSession | null = null;
  let running = false;
  let lastInferMs = 0;
  let fps = 0;
  let frameCount = 0;
  let lastFpsTs = performance.now();
  let confTh = Number(confInput.value) || 0.3;
  let iouTh = Number(iouInput.value) || 0.35;
  let maxBoxes = Number(maxInput.value) || 10;

  const syncParamsUI = () => {
    confVal.textContent = confTh.toFixed(2);
    iouVal.textContent = iouTh.toFixed(2);
  };
  syncParamsUI();

  confInput.addEventListener('input', () => {
    confTh = Number(confInput.value) || confTh;
    syncParamsUI();
  });
  iouInput.addEventListener('input', () => {
    iouTh = Number(iouInput.value) || iouTh;
    syncParamsUI();
  });
  maxInput.addEventListener('input', () => {
    maxBoxes = Math.max(1, Math.min(50, Number(maxInput.value) || maxBoxes));
  });

  const startCamBtn = document.querySelector<HTMLButtonElement>('#v5StartCam');
  const startDetBtn = document.querySelector<HTMLButtonElement>('#v5StartDetect');
  const stopDetBtn = document.querySelector<HTMLButtonElement>('#v5StopDetect');

  async function ensureCamera() {
    if (video.srcObject) return;
    const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' }, audio: false });
    video.srcObject = stream;
    await video.play();
  }

  async function ensureSession(provider: Provider) {
    const t0 = now();
    session = await createSession(provider);
    const initMs = now() - t0;
    log(`✅ v5 ${provider} session ready in ${initMs.toFixed(1)}ms`);
  }

  async function loop(provider: Provider) {
    if (!running || !session) return;

    const tensor = frameToYoloTensor(video);
    const inputName = session.inputNames[0];
    const t0 = now();
    const outputs = await withTimeout(session.run({ [inputName]: tensor }), config.runTimeoutMs, `v5 ${provider} frame run`);
    lastInferMs = now() - t0;

    const outName = session.outputNames[0];
    const outTensor = outputs[outName] as ort.Tensor;
    const dets = decodeTinyYoloV2(outTensor, confTh, iouTh, maxBoxes);
    drawDetections(overlay, dets);

    frameCount += 1;
    const t = now();
    if (t - lastFpsTs >= 1000) {
      fps = (frameCount * 1000) / (t - lastFpsTs);
      frameCount = 0;
      lastFpsTs = t;
      const top = dets.length > 0 ? dets[0] : null;
      const topLabel = top ? `${YOLO_CLASSES[top.cls] ?? top.cls}:${(top.score * 100).toFixed(1)}%` : '-';
      metrics.textContent = `fps: ${fps.toFixed(1)}, infer: ${lastInferMs.toFixed(1)}ms, dets: ${dets.length}, top: ${topLabel}, conf:${confTh.toFixed(2)}, iou:${iouTh.toFixed(2)}, max:${maxBoxes}, outShape: [${outTensor.dims.join(',')}]`;
    }

    requestAnimationFrame(() => {
      loop(provider).catch((e) => {
        running = false;
        log(`❌ v5 loop error: ${e instanceof Error ? e.message : String(e)}`);
      });
    });
  }

  startCamBtn?.addEventListener('click', async () => {
    try {
      await ensureCamera();
      log('✅ v5 camera started');
    } catch (e) {
      log(`❌ v5 camera error: ${e instanceof Error ? e.message : String(e)}`);
    }
  });

  startDetBtn?.addEventListener('click', async () => {
    try {
      await ensureCamera();
      const provider = providerSel.value as Provider;
      await ensureSession(provider);
      running = true;
      lastFpsTs = now();
      frameCount = 0;
      log(`▶️ v5 detection started (${provider})`);
      await loop(provider);
    } catch (e) {
      running = false;
      log(`❌ v5 start error: ${e instanceof Error ? e.message : String(e)}`);
    }
  });

  stopDetBtn?.addEventListener('click', () => {
    running = false;
    metrics.textContent = 'fps: -, infer: -ms';
    log('⏹️ v5 detection stopped');
  });

  log('V5 ready. Click Start Camera, then Start Detection.');
}

type V6RunResult = {
  apiPath: string;
  createMs: number;
  inferMs: number;
  totalMs: number;
  output: string;
};

function getV6ApiSurface(w: any) {
  return {
    LanguageModel: typeof w.LanguageModel !== 'undefined',
    Summarizer: typeof w.Summarizer !== 'undefined',
    Writer: typeof w.Writer !== 'undefined',
    Rewriter: typeof w.Rewriter !== 'undefined',
    Proofreader: typeof w.Proofreader !== 'undefined',
    'window.ai': typeof w.ai !== 'undefined',
    'ai.languageModel': !!w.ai?.languageModel,
    'ai.summarizer': !!w.ai?.summarizer
  };
}

async function runBuiltInAISingle(input: string, verbose = true): Promise<V6RunResult> {
  const w = window as any;
  const summarizePrompt = `다음 문장을 한국어로 2문장 이내로 요약해 주세요.\n\n${input}`;

  if (w.Summarizer?.create) {
    if (w.Summarizer.availability) {
      const avail = await w.Summarizer.availability();
      if (verbose) log(`Summarizer.availability: ${avail}`);
      if (avail === 'unavailable') throw new Error('Summarizer is unavailable on this device/profile');
    }
    const t0 = now();
    const summarizer = await w.Summarizer.create({ type: 'tldr', format: 'plain-text', length: 'short' });
    const t1 = now();
    const output = await summarizer.summarize(input);
    const t2 = now();
    return { apiPath: 'Summarizer', createMs: t1 - t0, inferMs: t2 - t1, totalMs: t2 - t0, output };
  }

  if (w.LanguageModel?.create) {
    const t0 = now();
    const session = await w.LanguageModel.create();
    const t1 = now();
    const output = await session.prompt(summarizePrompt);
    const t2 = now();
    return { apiPath: 'LanguageModel', createMs: t1 - t0, inferMs: t2 - t1, totalMs: t2 - t0, output };
  }

  if (w.Writer?.create) {
    const t0 = now();
    const writer = await w.Writer.create({ tone: 'neutral', format: 'plain-text' });
    const t1 = now();
    const output = await writer.write(`다음 내용을 한국어 2문장으로 요약해 주세요: ${input}`);
    const t2 = now();
    return { apiPath: 'Writer', createMs: t1 - t0, inferMs: t2 - t1, totalMs: t2 - t0, output };
  }

  if (w.ai?.summarizer?.create) {
    const t0 = now();
    const summarizer = await w.ai.summarizer.create({ type: 'tldr', format: 'plain-text', length: 'short' });
    const t1 = now();
    const output = await summarizer.summarize(input);
    const t2 = now();
    return { apiPath: 'legacy ai.summarizer', createMs: t1 - t0, inferMs: t2 - t1, totalMs: t2 - t0, output };
  }

  if (w.ai?.languageModel?.create) {
    const t0 = now();
    const session = await w.ai.languageModel.create();
    const t1 = now();
    const output = await session.prompt(summarizePrompt);
    const t2 = now();
    return { apiPath: 'legacy ai.languageModel', createMs: t1 - t0, inferMs: t2 - t1, totalMs: t2 - t0, output };
  }

  throw new Error('API surface is partially exposed, but no callable create() path found.');
}

async function runBuiltInAIV6() {
  out.textContent = '';
  const input = document.querySelector<HTMLTextAreaElement>('#v6Input')?.value?.trim() || '';

  log('Mode: v6');
  log(`UA: ${navigator.userAgent}`);
  log('Experiment: Built-in AI API availability + latency probe');
  log('Task: Korean short summarization (2 sentences)');
  log(`Input length: ${input.length} chars`);
  log('Note: This is API-level PoC (not direct WASM/WebGPU/WebNN backend comparison).');
  log('--- Built-in AI capability probe (new API surface first) ---');

  const w = window as any;

  const apiSurface = getV6ApiSurface(w);

  for (const [k, v] of Object.entries(apiSurface)) {
    log(`${k}: ${v ? 'yes' : 'no'}`);
  }

  const hasAny = Object.values(apiSurface).some(Boolean);
  if (!hasAny) {
    log('❌ Built-in AI API not available in this environment.');
    log('Tip: Chrome channel/rollout, flags, and policy can affect API exposure.');
    return;
  }

  try {
    const result = await runBuiltInAISingle(input, true);

    log('--- V6 Result (Built-in AI) ---');
    log(`API path: ${result.apiPath}`);
    log(`create latency: ${result.createMs.toFixed(1)}ms`);
    log(`inference latency: ${result.inferMs.toFixed(1)}ms`);
    log(`total latency: ${result.totalMs.toFixed(1)}ms`);

    log('--- Output ---');
    log(result.output || '(empty)');

    log('--- Comparison Hint ---');
    log('- Compare this V6 latency with V2/V3 summary-like tasks manually.');
    log('- V6 is API-level benchmark (Built-in AI), V2/V3 are runtime/backend-level benchmark (ORT).');
  } catch (e) {
    log(`❌ Built-in AI execution failed: ${e instanceof Error ? e.message : String(e)}`);
  }
}

async function runBuiltInAIV6Batch() {
  out.textContent = '';
  const cases = [
    '클라이언트 AI는 네트워크 없이도 일부 추론이 가능해 프라이버시와 응답성을 개선할 수 있습니다. 다만 기기 성능과 브라우저 지원 편차를 고려해야 합니다.',
    'WASM은 호환성이 높고 안정적이지만 대규모 반복 추론에서는 GPU 계열 대비 한계가 나타날 수 있습니다.',
    'WebGPU는 초기 준비 비용이 있지만 반복 추론에서 지연시간을 낮출 수 있는 가능성이 큽니다.',
    'WebNN은 플랫폼 의존성이 존재하지만 일부 환경에서 매우 빠른 추론 경로를 제공할 수 있습니다.',
    'Built-in AI는 구현 속도가 빠르지만 API 노출 여부와 기능 롤아웃 상태를 먼저 확인해야 합니다.',
    '온디바이스 추론은 서버 비용 절감에 도움이 되지만, 모델 배포 크기와 업데이트 전략이 중요합니다.',
    '프론트엔드 팀은 정확도뿐 아니라 지연시간, 실패율, 지원 범위를 함께 측정해야 합니다.',
    'PoC 단계에서는 단일 성능 수치보다 재현 가능한 측정 절차를 먼저 확립하는 것이 좋습니다.',
    '요약 태스크 비교에서는 출력 형식 제약을 동일하게 맞춰야 실사용 관점 해석이 가능합니다.',
    '최종 도입 판단은 모델 성능보다도 운영 난이도와 사용자 경험을 함께 고려해야 합니다.'
  ];

  log('Mode: v6-batch');
  log('Experiment: Built-in AI 10-case summarization batch');

  const rows: Array<{ ok: boolean; totalMs?: number; path?: string; err?: string }> = [];
  for (let i = 0; i < cases.length; i++) {
    const text = cases[i];
    try {
      const r = await runBuiltInAISingle(text, false);
      rows.push({ ok: true, totalMs: r.totalMs, path: r.apiPath });
      log(`✅ case ${i + 1}: ${r.totalMs.toFixed(1)}ms (${r.apiPath})`);
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      rows.push({ ok: false, err: msg });
      log(`❌ case ${i + 1}: ${msg}`);
    }
  }

  const okRows = rows.filter((r) => r.ok && typeof r.totalMs === 'number') as Array<{ ok: true; totalMs: number; path?: string }>;
  const successRate = (okRows.length / rows.length) * 100;
  const avgMs = okRows.length ? okRows.reduce((a, b) => a + b.totalMs, 0) / okRows.length : 0;
  const sorted = okRows.map((r) => r.totalMs).sort((a, b) => a - b);
  const p95 = sorted.length ? sorted[Math.max(0, Math.ceil(sorted.length * 0.95) - 1)] : 0;
  const path = okRows[0]?.path ?? '-';

  log('--- V6 Batch Summary ---');
  log(`cases: ${rows.length}`);
  log(`success: ${okRows.length}/${rows.length} (${successRate.toFixed(1)}%)`);
  log(`api path: ${path}`);
  log(`avg total latency: ${avgMs.toFixed(1)}ms`);
  log(`p95 total latency: ${p95.toFixed(1)}ms`);
}

async function runUnifiedV7() {
  out.textContent = '';
  log('Mode: v7');
  log('Experiment: Unified comparison across ONNX runtime paths and Built-in AI');
  log('Note: ONNX and Built-in AI are different model/API layers, so interpret as practical-path comparison.');
  log('--- ONNX runtime path probe ---');

  const onnxProviders: Provider[] = ['wasm', 'webgpu', 'webnn'];
  const onnxRows: Array<{ provider: string; ok: boolean; latency?: number; error?: string }> = [];
  for (const p of onnxProviders) {
    const r = await benchProvider(p);
    if (r.ok) {
      onnxRows.push({ provider: p, ok: true, latency: r.avgRunMs });
      log(`✅ ONNX ${p}: avg=${(r.avgRunMs ?? 0).toFixed(2)}ms`);
    } else {
      onnxRows.push({ provider: p, ok: false, error: r.error });
      log(`❌ ONNX ${p}: ${r.error}`);
    }
  }

  log('--- Built-in AI 10-case batch ---');
  const cases = [
    '클라이언트 AI는 네트워크 없이도 일부 추론이 가능해 프라이버시와 응답성을 개선할 수 있습니다. 다만 기기 성능과 브라우저 지원 편차를 고려해야 합니다.',
    'WASM은 호환성이 높고 안정적이지만 대규모 반복 추론에서는 GPU 계열 대비 한계가 나타날 수 있습니다.',
    'WebGPU는 초기 준비 비용이 있지만 반복 추론에서 지연시간을 낮출 수 있는 가능성이 큽니다.',
    'WebNN은 플랫폼 의존성이 존재하지만 일부 환경에서 매우 빠른 추론 경로를 제공할 수 있습니다.',
    'Built-in AI는 구현 속도가 빠르지만 API 노출 여부와 기능 롤아웃 상태를 먼저 확인해야 합니다.',
    '온디바이스 추론은 서버 비용 절감에 도움이 되지만, 모델 배포 크기와 업데이트 전략이 중요합니다.',
    '프론트엔드 팀은 정확도뿐 아니라 지연시간, 실패율, 지원 범위를 함께 측정해야 합니다.',
    'PoC 단계에서는 단일 성능 수치보다 재현 가능한 측정 절차를 먼저 확립하는 것이 좋습니다.',
    '요약 태스크 비교에서는 출력 형식 제약을 동일하게 맞춰야 실사용 관점 해석이 가능합니다.',
    '최종 도입 판단은 모델 성능보다도 운영 난이도와 사용자 경험을 함께 고려해야 합니다.'
  ];

  const builtRows: Array<{ ok: boolean; totalMs?: number; path?: string; err?: string }> = [];
  for (let i = 0; i < cases.length; i++) {
    try {
      const r = await runBuiltInAISingle(cases[i], false);
      builtRows.push({ ok: true, totalMs: r.totalMs, path: r.apiPath });
      log(`✅ Built-in case ${i + 1}: ${r.totalMs.toFixed(1)}ms (${r.apiPath})`);
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      builtRows.push({ ok: false, err: msg });
      log(`❌ Built-in case ${i + 1}: ${msg}`);
    }
  }

  const okBuilt = builtRows.filter((r) => r.ok && typeof r.totalMs === 'number') as Array<{ ok: true; totalMs: number; path?: string }>;
  const builtAvg = okBuilt.length ? okBuilt.reduce((a, b) => a + b.totalMs, 0) / okBuilt.length : 0;
  const builtSorted = okBuilt.map((r) => r.totalMs).sort((a, b) => a - b);
  const builtP95 = builtSorted.length ? builtSorted[Math.max(0, Math.ceil(builtSorted.length * 0.95) - 1)] : 0;

  log('--- V7 Unified Summary ---');
  for (const row of onnxRows) {
    if (row.ok) log(`ONNX-${row.provider}: success, avg=${(row.latency ?? 0).toFixed(2)}ms`);
    else log(`ONNX-${row.provider}: fail, reason=${row.error}`);
  }
  log(`Built-in AI: success=${okBuilt.length}/${builtRows.length}, avg=${builtAvg.toFixed(1)}ms, p95=${builtP95.toFixed(1)}ms, path=${okBuilt[0]?.path ?? '-'}`);
  log('Interpretation: ONNX rows compare runtime backends on one model, Built-in row compares API-level summarization path.');
}

let v8OnnxSummarizer: any = null;

async function getV8OnnxSummarizer() {
  if (v8OnnxSummarizer) return v8OnnxSummarizer;
  const t = await import('@xenova/transformers');
  t.env.allowLocalModels = false;
  t.env.useBrowserCache = true;
  v8OnnxSummarizer = await t.pipeline('summarization', 'Xenova/distilbart-cnn-6-6');
  return v8OnnxSummarizer;
}

async function runV8OnnxSingle(input: string) {
  const t0 = now();
  const pipe = await getV8OnnxSummarizer();
  const t1 = now();
  const out = await pipe(input, { max_new_tokens: 60, min_new_tokens: 15 });
  const t2 = now();
  const text = Array.isArray(out) ? out[0]?.summary_text ?? '' : out?.summary_text ?? '';
  return { createMs: t1 - t0, inferMs: t2 - t1, totalMs: t2 - t0, output: text };
}

async function runV8OnnxSummary() {
  out.textContent = '';
  const input = document.querySelector<HTMLTextAreaElement>('#v8Input')?.value?.trim() || '';
  log('Mode: v8 (ONNX summarization)');
  log(`Input length: ${input.length} chars`);
  try {
    const r = await runV8OnnxSingle(input);
    log('--- Result ---');
    log('Path: Tokenizer + ONNX (transformers.js + ORT)');
    log(`create latency: ${r.createMs.toFixed(1)}ms`);
    log(`inference latency: ${r.inferMs.toFixed(1)}ms`);
    log(`total latency: ${r.totalMs.toFixed(1)}ms`);
    log('--- Output ---');
    log(r.output || '(empty)');
  } catch (e) {
    log(`❌ ONNX summarization failed: ${e instanceof Error ? e.message : String(e)}`);
  }
}

async function runV8BuiltInSummary() {
  out.textContent = '';
  const input = document.querySelector<HTMLTextAreaElement>('#v8Input')?.value?.trim() || '';
  log('Mode: v8 (Built-in AI summarization)');
  log(`Input length: ${input.length} chars`);
  try {
    const r = await runBuiltInAISingle(input, true);
    log('--- Result ---');
    log(`Path: Built-in AI (${r.apiPath})`);
    log(`create latency: ${r.createMs.toFixed(1)}ms`);
    log(`inference latency: ${r.inferMs.toFixed(1)}ms`);
    log(`total latency: ${r.totalMs.toFixed(1)}ms`);
    log('--- Output ---');
    log(r.output || '(empty)');
  } catch (e) {
    log(`❌ Built-in summarization failed: ${e instanceof Error ? e.message : String(e)}`);
  }
}

async function runV8UnifiedCompare() {
  out.textContent = '';
  log('Mode: v8 unified compare');
  log('Task: 10-case summarization comparison (ONNX tokenizer+runtime vs Built-in AI)');

  const cases = [
    'Client-side AI can improve privacy by processing text locally, but model size and device capability strongly affect startup and runtime latency.',
    'WebGPU often has initialization overhead, while repeated inference can become efficient once the pipeline is warmed up.',
    'WASM is widely compatible and stable, but may show slower throughput on larger generation workloads.',
    'Built-in AI APIs can reduce implementation complexity, though API availability may vary by browser channel and policy.',
    'Teams should compare not only latency but also reproducibility, fallback strategy, and deployment complexity.',
    'A practical benchmark should fix the same prompt style and output constraints across all paths.',
    'Operational reliability often matters more than peak speed in user-facing browser applications.',
    'Hybrid design can combine built-in AI for convenience and ONNX paths for deterministic control.',
    'Performance interpretation must separate backend-level tests from API-level product tests.',
    'Final architecture decisions should include quality, cost, latency, and platform coverage.'
  ];

  const onnxTimes: number[] = [];
  let onnxOk = 0;
  for (let i = 0; i < cases.length; i++) {
    try {
      const r = await runV8OnnxSingle(cases[i]);
      onnxOk++;
      onnxTimes.push(r.totalMs);
      log(`✅ ONNX case ${i + 1}: ${r.totalMs.toFixed(1)}ms`);
    } catch (e) {
      log(`❌ ONNX case ${i + 1}: ${e instanceof Error ? e.message : String(e)}`);
    }
  }

  const builtTimes: number[] = [];
  let builtOk = 0;
  let builtPath = '-';
  for (let i = 0; i < cases.length; i++) {
    try {
      const r = await runBuiltInAISingle(cases[i], false);
      builtOk++;
      builtTimes.push(r.totalMs);
      builtPath = r.apiPath;
      log(`✅ Built-in case ${i + 1}: ${r.totalMs.toFixed(1)}ms (${r.apiPath})`);
    } catch (e) {
      log(`❌ Built-in case ${i + 1}: ${e instanceof Error ? e.message : String(e)}`);
    }
  }

  const stat = (arr: number[]) => {
    if (!arr.length) return { avg: 0, p95: 0 };
    const avg = arr.reduce((a, b) => a + b, 0) / arr.length;
    const s = [...arr].sort((a, b) => a - b);
    const p95 = s[Math.max(0, Math.ceil(s.length * 0.95) - 1)];
    return { avg, p95 };
  };

  const onnxStat = stat(onnxTimes);
  const builtStat = stat(builtTimes);

  log('--- V8 Unified Summary ---');
  log(`ONNX summarization: success=${onnxOk}/${cases.length}, avg=${onnxStat.avg.toFixed(1)}ms, p95=${onnxStat.p95.toFixed(1)}ms`);
  log(`Built-in summarization: success=${builtOk}/${cases.length}, avg=${builtStat.avg.toFixed(1)}ms, p95=${builtStat.p95.toFixed(1)}ms, path=${builtPath}`);
  log('Note: Same task, different model/API layers. Use as practical-path comparison, not absolute model benchmark.');
}

async function runV9Summarize(input: string) {
  const r = await runBuiltInAISingle(input, true);
  log('--- V9 Summarize ---');
  log(`path: ${r.apiPath}`);
  log(`latency(total): ${r.totalMs.toFixed(1)}ms`);
  log(prettyText(r.output || '(empty)'));
}

async function runV9Prompt(input: string) {
  const w = window as any;
  const prompt = `Based on the following meeting minutes, generate a practical action plan with 5 bullet points. Each bullet must include: owner role, task, and expected outcome.\n\n${input}`;
  log('--- V9 Action Plan (Prompt/Write) ---');

  try {
    if (w.LanguageModel?.create) {
      const t0 = now();
      const session = await w.LanguageModel.create();
      const t1 = now();
      const output = await session.prompt(prompt);
      const t2 = now();
      log(`path: LanguageModel`);
      log(`latency(total): ${(t2 - t0).toFixed(1)}ms`);
      log(prettyText(output || '(empty)'));
      return;
    }

    if (w.Writer?.create) {
      const t0 = now();
      const writer = await w.Writer.create({ tone: 'neutral', format: 'plain-text' });
      const t1 = now();
      const output = await writer.write(prompt);
      const t2 = now();
      log(`path: Writer`);
      log(`latency(total): ${(t2 - t0).toFixed(1)}ms`);
      log(prettyText(output || '(empty)'));
      return;
    }

    throw new Error('LanguageModel/Writer API not available');
  } catch (e) {
    log(`❌ prompt/write failed: ${e instanceof Error ? e.message : String(e)}`);
  }
}

function pickDetectedLanguage(item: any): string {
  return item?.detectedLanguage || item?.language || item?.lang || 'unknown';
}

async function runV9DetectTranslate(input: string) {
  const w = window as any;
  log('--- V9 Detect + Translate ---');

  try {
    if (!w.LanguageDetector?.create || !w.Translator?.create) {
      throw new Error('LanguageDetector/Translator API not available');
    }

    const t0 = now();
    const detector = await w.LanguageDetector.create();
    const detections = await detector.detect(input);
    const top = Array.isArray(detections) ? detections[0] : detections;
    const sourceLang = pickDetectedLanguage(top);

    const translator = await w.Translator.create({
      sourceLanguage: sourceLang,
      targetLanguage: 'ko'
    });
    const translated = await translator.translate(input);
    const t1 = now();

    log(`detected language: ${sourceLang}`);
    log(`latency(total): ${(t1 - t0).toFixed(1)}ms`);
    log(prettyText(translated || '(empty)'));
  } catch (e) {
    log(`❌ detect+translate failed: ${e instanceof Error ? e.message : String(e)}`);
  }
}

async function runV9All() {
  out.textContent = '';
  const input = document.querySelector<HTMLTextAreaElement>('#v9Input')?.value?.trim() || '';
  log('Mode: v9');
  log(`Input length: ${input.length} chars`);
  log('Use cases: summarize / prompt-write / detect-translate');

  await runV9Summarize(input);
  await runV9Prompt(input);
  await runV9DetectTranslate(input);
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

if (mode === 'v5') {
  runYoloV5().catch((e) => log(`error: ${String(e)}`));
}

if (mode === 'v6') {
  const v6RunBtn = document.querySelector<HTMLButtonElement>('#v6Run');
  const v6BatchBtn = document.querySelector<HTMLButtonElement>('#v6Batch');
  v6RunBtn?.addEventListener('click', () => {
    runBuiltInAIV6().catch((e) => log(`error: ${String(e)}`));
  });
  v6BatchBtn?.addEventListener('click', () => {
    runBuiltInAIV6Batch().catch((e) => log(`error: ${String(e)}`));
  });
}

if (mode === 'v7') {
  const v7RunBtn = document.querySelector<HTMLButtonElement>('#v7Run');
  v7RunBtn?.addEventListener('click', () => {
    runUnifiedV7().catch((e) => log(`error: ${String(e)}`));
  });
}

if (mode === 'v8') {
  const v8OnnxBtn = document.querySelector<HTMLButtonElement>('#v8OnnxRun');
  const v8BuiltBtn = document.querySelector<HTMLButtonElement>('#v8BuiltInRun');
  const v8CompareBtn = document.querySelector<HTMLButtonElement>('#v8CompareRun');
  v8OnnxBtn?.addEventListener('click', () => runV8OnnxSummary().catch((e) => log(`error: ${String(e)}`)));
  v8BuiltBtn?.addEventListener('click', () => runV8BuiltInSummary().catch((e) => log(`error: ${String(e)}`)));
  v8CompareBtn?.addEventListener('click', () => runV8UnifiedCompare().catch((e) => log(`error: ${String(e)}`)));
}

if (mode === 'v9') {
  const inputEl = document.querySelector<HTMLTextAreaElement>('#v9Input');
  const getInput = () => inputEl?.value?.trim() || '';

  document.querySelector<HTMLButtonElement>('#v9Summarize')?.addEventListener('click', () => {
    out.textContent = '';
    runV9Summarize(getInput()).catch((e) => log(`error: ${String(e)}`));
  });
  document.querySelector<HTMLButtonElement>('#v9Prompt')?.addEventListener('click', () => {
    out.textContent = '';
    runV9Prompt(getInput()).catch((e) => log(`error: ${String(e)}`));
  });
  document.querySelector<HTMLButtonElement>('#v9Translate')?.addEventListener('click', () => {
    out.textContent = '';
    runV9DetectTranslate(getInput()).catch((e) => log(`error: ${String(e)}`));
  });
  document.querySelector<HTMLButtonElement>('#v9RunAll')?.addEventListener('click', () => {
    runV9All().catch((e) => log(`error: ${String(e)}`));
  });
}

runBtn.addEventListener('click', () => {
  if (mode === 'v4') {
    runStyleTransferV4().catch((e) => log(`error: ${String(e)}`));
    return;
  }
  if (mode === 'v5') {
    log('Use V5 camera controls (Start Camera / Start Detection).');
    return;
  }
  if (mode === 'v6') {
    runBuiltInAIV6().catch((e) => log(`error: ${String(e)}`));
    return;
  }
  if (mode === 'v7') {
    runUnifiedV7().catch((e) => log(`error: ${String(e)}`));
    return;
  }
  if (mode === 'v8') {
    runV8UnifiedCompare().catch((e) => log(`error: ${String(e)}`));
    return;
  }
  if (mode === 'v9') {
    runV9All().catch((e) => log(`error: ${String(e)}`));
    return;
  }
  runBenchmark().catch((e) => log(`error: ${String(e)}`));
});

const params = new URLSearchParams(window.location.search);
if (params.get('autorun') === '1' && mode !== 'v4' && mode !== 'v5' && mode !== 'v6' && mode !== 'v7' && mode !== 'v8' && mode !== 'v9') {
  runBenchmark().catch((e) => log(`error: ${String(e)}`));
}
