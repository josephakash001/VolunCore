import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       // If you want to add global SCSS variables or imports
  //       additionalData: `@import "./custom.scss";`,
  //     },
  //   },
  // },
})
