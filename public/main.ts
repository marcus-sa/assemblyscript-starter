import * as ASLoader from 'assemblyscript/lib/loader';

let stream;

export type WrapperFunc = (module: ASLoader.ASUtil, ...args: any[]) => any;

function streamWrapper(cb: WrapperFunc) {
	return async (...args: any[]) => {
		const module = await stream;

		cb(module, ...args);
	}
}

stream = ASLoader.instantiateStreaming(
	fetch('../build/optimized.wasm'),
	{
		console: {
			log: streamWrapper((module, pointer: number) => {
				console.log(module.getString(pointer));
			}),
		},
		env: {},
	},
);
