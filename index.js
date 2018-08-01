const fs = require('fs');

const optimizedWasm = fs.readFileSync(__dirname + '/build/optimized.wasm');
const wasmModule = new WebAssembly.Module(optimizedWasm);

module.exports = new WebAssembly.Instance(wasmModule).exports;
