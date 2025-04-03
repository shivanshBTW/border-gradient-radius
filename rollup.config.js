const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const { readFileSync } = require('fs');

// Parse package.json manually
const packageJson = JSON.parse(readFileSync('./package.json', 'utf-8'));

module.exports = {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
      inlineDynamicImports: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
      exports: 'named',
      inlineDynamicImports: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      preferBuiltins: false,
    }),
    commonjs({
      include: ['node_modules/**'],
      exclude: ['**/*.stories.js', '**/*.test.js'],
    }),
    typescript({
      tsconfig: './tsconfig.json',
      exclude: ['**/__tests__/**', '**/*.test.ts', '**/*.test.tsx'],
      outputToFilesystem: true,
      compilerOptions: {
        sourceMap: true,
        declaration: true,
        jsx: 'react',
      },
    }),
  ],
  external: ['react', 'react-dom'],
  preserveModules: false,
};
