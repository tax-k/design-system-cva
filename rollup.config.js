// import resolve from '@rollup/plugin-node-resolve';
// import commonjs from '@rollup/plugin-commonjs';
// import typescript from '@rollup/plugin-typescript';
// import dts from 'rollup-plugin-dts';
// import { terser } from 'rollup-plugin-terser';
// import peerDepsExternal from 'rollup-plugin-peer-deps-external';

// const packageJson = require('./package.json');

// export default [
//   {
//     input: 'src/index.ts',
//     output: [
//       {
//         file: packageJson.main,
//         format: 'cjs',
//         sourcemap: true,
//       },
//       {
//         file: packageJson.module,
//         format: 'esm',
//         sourcemap: true,
//       },
//     ],
//     plugins: [
//       peerDepsExternal(),
//       resolve(),
//       commonjs(),
//       typescript({ tsconfig: './tsconfig.json' }),
//       terser(),
//     ],
//     external: ['react', 'react-dom', 'styled-components'],
//   },
//   {
//     input: 'src/index.ts',
//     output: [{ file: 'dist/types.d.ts', format: 'es' }],
//     plugins: [dts.default()],
//   },
// ];
import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

process.env.BABEL_ENV = 'production';

function setUpRollup({ input, output }) {
  return {
    input,
    exports: 'named',
    output,
    watch: {
      include: '*',
    },
    plugins: [
      peerDepsExternal(),
      json(),
      resolve({ extensions }),
      commonjs({
        include: 'node_modules/**',
      }),
      typescript({ useTsconfigDeclarationDir: true }),
    ],
    external: ['react', 'react-dom'],
  };
}

export default [
  setUpRollup({
    input: './src/index.ts',
    output: {
      file: 'dist/cjs.js',
      sourceMap: true,
      format: 'cjs',
    },
  }),
  setUpRollup({
    input: './src/index.ts',
    output: {
      file: 'dist/esm.js',
      sourceMap: true,
      format: 'esm',
    },
  }),
];
