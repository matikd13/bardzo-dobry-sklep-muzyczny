import fs from 'fs';
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcss from './postcss.config.js';

const directories = fs.readdirSync(path.resolve(__dirname, 'src')).filter(function (file) {
  return fs.statSync(path.resolve(__dirname, 'src', file)).isDirectory();
});

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: directories.map((directory) => ({
      find: new RegExp(`@${directory}`),
      replacement: path.resolve(path.resolve(__dirname), 'src', directory),
    })),
  },
  server: {
    port: 3000,
  },
  build: {
    outDir: 'build',
    assetsDir: 'static',
  },
  plugins: [react()],
  css: { postcss },
});
