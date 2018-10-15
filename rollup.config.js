import replace from 'rollup-plugin-replace';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import scss from 'rollup-plugin-scss';

const NODE_ENV = process.env.NODE_ENV || 'development';

export default {
	input: 'src/index.js',
	output: {
		file: 'dist/bundle.js',
		globals: { 'styled-components': 'styled' },
		format: 'es'
	},
	external: [ 'react', 'styled-components' ],
	plugins: [
		replace({
			'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
		}),
		scss({
			output: './dist/bundle.css'
		}),
		babel({
			exclude: 'node_modules/**'
		}),
		resolve()
	]
};
