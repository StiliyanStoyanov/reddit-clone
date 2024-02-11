import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'node:path'

// https://stackoverflow.com/questions/66043612/vue3-vite-project-alias-src-to-not-working
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@assets': path.resolve(__dirname, './src/assets/'),
      '@common': path.resolve(__dirname, './src/common/')
    }
  },
  plugins: [react()]
})
