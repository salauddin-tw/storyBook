

// export default [
//   {
//     input: 'src/stories/index.ts',
//     output: [
//       {
//         file: packageJson.main,
//         format: 'cjs',
//         sourcemap: true,
//       },
//       {
//         file: packageJson.module,
//         format: 'esm',
//         exports: 'named',
//         sourcemap: true,
//       },
//     ],
//     plugins: [
//     typescript() ,
//       peerDepsExternal(),
//       resolve({
//         extensions: ['.js', '.jsx'],
//       }),
//       commonjs(),
//       terser(),
//       babel({
//         extensions: ['.js', '.jsx'],
//         exclude: 'node_modules/**',
//       }),
//     ],
//     external: ['react', 'react-dom', '@emotion/react', '@emotion/styled'],
//   },
// ];

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { babel } from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
// This is required to read package.json file when
// using Native ES modules in Node.js
// https://rollupjs.org/command-line-interface/#importing-package-json
import { createRequire } from 'node:module';
const requireFile = createRequire(import.meta.url);
const packageJson = requireFile('./package.json');

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }),
    babel({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
    postcss(),
    terser(),
  ],
  external: ['react', 'react-dom'],
};

