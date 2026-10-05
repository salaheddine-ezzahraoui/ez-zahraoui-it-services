import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves the production site under /ez-zahraoui-it-services/.
// Keep "/" for local development so the site stays at the root of localhost.
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/ez-zahraoui-it-services/' : '/',
  plugins: [react()],
}))
