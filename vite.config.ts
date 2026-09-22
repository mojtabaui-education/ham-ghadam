import { resolve } from 'node:path'

import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // سایت روی ریشهٔ دامنهٔ اختصاصی سرو می‌شود: hamghadamproject.ir/
  // اگر دامنه برداشته شود و به …github.io/ham-ghadam/ برگردیم،
  // این باید دوباره '/ham-ghadam/' شود.
  base: '/',
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      // دو صفحهٔ مستقل. کیس‌استادی روی /case-study/ می‌نشیند و چون فایلِ
      // index.html خودش را دارد، روی GitHub Pages بدونِ روتر کار می‌کند.
      input: {
        main: resolve(__dirname, 'index.html'),
        caseStudy: resolve(__dirname, 'case-study/index.html'),
      },
    },
  },
})
