import { resolve } from 'path'
import { defineConfig } from 'vite'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

// https://vitejs.dev/config/
export default defineConfig({
    root,
    build: {
        outDir,
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(root, 'main', 'index.html'),
                about: resolve(root, 'empty', 'index.html'),
            }
        }
    },
    server: {
        watch: {
            usePolling: true
        },
        hmr: true,
    }
})