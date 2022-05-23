import { defineConfig, loadEnv } from 'vite';
import { minifyHtml, injectHtml } from 'vite-plugin-html';

import vue from '@vitejs/plugin-vue';
const path = require('path');

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    plugins: [
      vue(),
      minifyHtml(),
      injectHtml({
        injectData: {
          CROSS_APP_URL: process.env.VITE_CROSS_APP_URL,
        },
      }),
    ],
    define: {
      'process.env': process.env,
    },
  });
};
