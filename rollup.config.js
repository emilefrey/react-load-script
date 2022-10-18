import typescript from '@rollup/plugin-typescript'

const config = [{
  input: 'src/index.ts',
  output: [
    {
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false
    }
  ],
  plugins: [
    typescript({
      declarationDir: 'dist',
      declaration: true,
    }),
  ],
  external: ['react', 'react-dom']
}]

export default config