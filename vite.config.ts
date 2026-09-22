import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // سایت زیرِ پوشهٔ نامِ ریپو سرو می‌شود: …github.io/ham-ghadam/
  // اگر دامنهٔ اختصاصی وصل شد، این باید به '/' برگردد.
  base: '/ham-ghadam/',
  plugins: [react(), tailwindcss()],
})
