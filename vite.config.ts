import react from '@vitejs/plugin-react'
import { config } from 'dotenv'
import { defineConfig } from 'vite'

config()

export default defineConfig({
  plugins: [react()],
  server: { port: 3001 },
  build: {
    outDir: process.env.OUTDIR,
    emptyOutDir: false,
    lib: {
      entry: 'src/index.tsx',
      name: 'Mini CSS',
    },
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
      },
    },
  },
})
