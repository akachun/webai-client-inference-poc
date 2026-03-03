# webai-client-inference-poc

WebGPU / Wasm / WebNN client-side inference benchmark PoC for column research.

## Goals
- Compare runtime paths in-browser: `webgpu`, `wasm`, `webnn` (if available)
- Measure:
  - model init time
  - first-run latency (TTFT-like)
  - avg inference latency (N runs)
- Provide progressive fallback strategy

## Stack
- Vite + TypeScript
- ONNX Runtime Web

## Quick Start
```bash
pnpm install
pnpm dev
```

## Benchmark Plan
1. Use same model and input across providers.
2. Run warm-up once.
3. Measure 5 runs and calculate avg.
4. Capture browser + OS + device notes.

## Fallback
- preferred: WebGPU
- fallback: WASM
- optional/experimental: WebNN



## Current App
- Runs same ONNX model on `webgpu`, `wasm`, `webnn` (best effort).
- Prints init / first run / average latency metrics.
