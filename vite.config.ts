import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/RKT-Cats',
  plugins: [react()],
  build: {
    outDir: './dist/RKT-Cats',
  },
})
