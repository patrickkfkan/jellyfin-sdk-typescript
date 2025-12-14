const path = require('node:path');

const typescript = require('@rollup/plugin-typescript');
const { glob } = require('glob');

/** @type {import('rollup').RollupOptions} */
module.exports = {
	// This is adapted from the sample config: https://www.rollupjs.org/configuration-options/#input
	input: Object.fromEntries(
		// Only looking for index files since they should be the only entry points
		glob.sync('src/**/index.ts', { ignore: 'src/**/__{helpers,tests}__/*' }).map(file => [
			// This remove `src/` as well as the file extension from each
			// file, so e.g. src/nested/foo.js becomes nested/foo
			path.relative(
				'src',
				file.slice(0, file.length - path.extname(file).length)
			),
			// This expands the relative paths to absolute paths, so e.g.
			// src/nested/foo becomes /project/src/nested/foo.js
			path.resolve(__dirname, file)
		])
	),
	output: {
		dir: 'lib',
		format: 'cjs',
		preserveModules: true,
		preserveModulesRoot: 'src'
	},
	external: [
		'axios'
	],
	plugins: [ typescript() ]
};
