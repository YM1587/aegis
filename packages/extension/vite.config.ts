import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { crx, defineManifest } from '@crxjs/vite-plugin';
import manifest from './manifest.json';
import path from 'path';

export default defineConfig({
    resolve: {
        alias: {
            '@aegis/shared': path.resolve(__dirname, '../shared/src/index.ts'),
            '@aegis/ai-core': path.resolve(__dirname, '../ai-core/src/index.ts'),
        },
    },
    plugins: [
        react(),
        crx({ manifest }),
    ],
    build: {
        rollupOptions: {
            input: {
                offscreen: path.resolve(__dirname, 'src/offscreen.html'),
            },
        },
    },
    server: {
        port: 5173,
        strictPort: true,
        hmr: {
            port: 5173,
        },
    },
});
