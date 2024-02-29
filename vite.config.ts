import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import react from '@vitejs/plugin-react-swc'
import path from 'node:path'

// https://stackoverflow.com/questions/66043612/vue3-vite-project-alias-src-to-not-working
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@app': path.resolve(__dirname, './src/app/'),
      '@common': path.resolve(__dirname, './src/common/'),
      '@features': path.resolve(__dirname, './src/features/'),
      '@hooks': path.resolve(__dirname, './src/hooks/'),
      '@config': path.resolve(__dirname, './src/config/'),
      '@types': path.resolve(__dirname, './src/types/'),
      '@assets': path.resolve(__dirname, './src/assets/'),
      '@styles': path.resolve(__dirname, './src/styles/'),
    }
  },
  plugins: [svgr(), react()]
})
