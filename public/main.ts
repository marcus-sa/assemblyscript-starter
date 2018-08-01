import * as ASLoader from 'assemblyscript/lib/loader';

ASLoader.instantiateStreaming(
	fetch('../build/optimized.wasm') as any, // Declaration should be Promise<Response> and not Response
	{
		console,
		document,
		env: {} // <-- should be optional property
	},
).then(() =>
	console.log('Initialized...')
);
