import typescript from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
	input: './public/main.ts',
	output: {
		file: './public/main.js',
		format: 'cjs',
	},
	plugins: [
		commonjs(),
		resolve(),
		typescript(),
	],
};
