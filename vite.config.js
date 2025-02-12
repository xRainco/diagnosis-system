import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import less from 'less'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
})
