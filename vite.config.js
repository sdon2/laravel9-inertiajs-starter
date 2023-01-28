import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            ssr: 'resources/js/ssr.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    build: {
        rollupOptions: {
            output: {
                assetFileNames: () => {
                    return `[ext]/[name]-[hash][extname]`;
                },
                entryFileNames: (chunkInfo) => {
                    return `js/${chunkInfo.name.toLowerCase()}-[hash].js`;
                },
                chunkFileNames: (chunkInfo) => {
                    return `js/${chunkInfo.name.toLowerCase()}-[hash].js`;
                },
            }
        }
    }
});
