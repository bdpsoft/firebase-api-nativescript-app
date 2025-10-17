import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@nativescript/core': path.resolve(__dirname, 'shims/@nativescript/core/index.js')
    }
  }
});