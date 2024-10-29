import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const ghRepoName = '/smart-bookmarks';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: ghRepoName,
    define: {
        'process.env': {
            PUBLIC_URL: ghRepoName,
        },
    },
});
