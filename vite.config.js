// vite.config.js

// import types for vitest config autocomplete
/// <reference types="vitest" />

import { configDefaults, defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

import { entries } from './scripts/aliases.js';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: entries
  },
  build: {
    target: ['es2022', 'edge112', 'firefox112', 'chrome112', 'safari16.4', 'ios16.4']
  },
  test: {
    // globals: true,
    // disable threads on GH actions to speed it up
    threads: !process.env.GITHUB_ACTIONS,
    setupFiles: ['./scripts/vitest-setup.js'],
    sequence: {
      hooks: 'list'
    }
  }
});
