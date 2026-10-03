@"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Zynora-26/',
  plugins: [react()],
})
"@ | Out-File -Encoding utf8 vite.config.js