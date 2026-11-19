import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'
import { defineConfig } from 'vitest/config'

const imageProfiles: Record<string, Record<string, string>> = {
  responsive: { w: '400;800;1200', format: 'webp', quality: '75', as: 'picture' },
  icon: { w: '128;256', format: 'webp', quality: '80', as: 'picture' },
}

export default defineConfig({
  base: process.env.BASE_PATH ?? '/',
  plugins: [
    react(),
    imagetools({
      defaultDirectives: (url) => {
        const profile = Object.keys(imageProfiles).find((name) => url.searchParams.has(name))
        return new URLSearchParams(profile ? imageProfiles[profile] : {})
      },
    }),
  ],
  server: {
    host: true,
    port: 5173,
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    css: { modules: { classNameStrategy: 'non-scoped' } },
    restoreMocks: true,
  },
})
