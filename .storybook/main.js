import { mergeConfig } from 'vite';

/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  core: { disableTelemetry: true },
  docs: {
    autodocs: 'tag'
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      build: {
        chunkSizeWarningLimit: 800
      }
    });
  }
};

export default config;
