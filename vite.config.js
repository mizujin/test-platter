import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    base: '/test-platter',
    plugins: [
        tailwindcss(),
    ],
})