// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// If you deploy to a custom domain (e.g., https://05122006.xyz), keep base: '/'.
// If you deploy under a repo path (e.g., https://username.github.io/REPO), set base to '/REPO/'.
const BASE = '/';

export default defineConfig({
  base: BASE,
  plugins: [
    react(),
    // Removed Replit plugins so this builds cleanly on GitHub Actions/Pages
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'client', 'src'),
      '@shared': path.resolve(__dirname, 'shared'),
      '@assets': path.resolve(__dirname, 'attached_assets'),
    },
  },
  root: path.resolve(__dirname, 'client'),
  build: {
    // Output to client/dist so Actions can upload that folder directly
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ['**/.*'],
    },
  },
});
