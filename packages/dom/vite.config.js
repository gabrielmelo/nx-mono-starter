import { defineConfig } from 'vite'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  build: { 
    lib: { 
      entry: resolve(__dirname, 'main.js'), formats: ['es', ] 
    } 
  },
  resolve: { 
    alias: { 
      src: resolve('src/') 
    } 
  },
})