import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    resolve: {
        alias: {
            '@aegis/shared': path.resolve(__dirname, '../shared/src/index.ts'),
        },
    },
    plugins: [react()],
    server: {
        port: 3000,
    },
});
