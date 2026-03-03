import * as ort from 'onnxruntime-web';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <h1>WebAI Client Inference PoC</h1>
  <p>Provider order: webgpu → wasm (→ webnn experimental, optional)</p>
  <button id="run">Run Environment Check</button>
  <pre id="out"></pre>
`;

const out = document.querySelector<HTMLPreElement>('#out')!;
const runBtn = document.querySelector<HTMLButtonElement>('#run')!;

function log(msg: string) {
  out.textContent += `${msg}\n`;
}

async function checkProviders() {
  out.textContent = '';
  log(`UA: ${navigator.userAgent}`);

  const hasWebGPU = 'gpu' in navigator;
  log(`WebGPU API: ${hasWebGPU ? 'yes' : 'no'}`);

  // WebNN detection is still unstable across browsers
  const hasWebNN = 'ml' in navigator;
  log(`WebNN API: ${hasWebNN ? 'maybe (navigator.ml)' : 'no'}`);

  log(`ORT version: ${ort.version}`);
  log('\nNext step: plug model + benchmark harness.');
}

runBtn.addEventListener('click', () => {
  checkProviders().catch((e) => log(`error: ${String(e)}`));
});
