import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss';

const extensions = ['.js', '.jsx', '.ts', '.tsx', '.css'];

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
      postcss({
        config: {
          path: './postcss.config.cjs',
        },
        extensions: ['.css'],
        minimize: true,
        inject: {
          insertAt: 'top',
        },
      }),
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
