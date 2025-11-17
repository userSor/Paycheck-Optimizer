import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  base: '/paycheck-optimizer/', 
  build: {
    outDir: '../docs', // Output to a 'docs' folder in the root
  },
})
