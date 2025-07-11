// ESLint disabled for build compatibility// import eslintPlugin from 'vite-plugin-eslint';
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
})
