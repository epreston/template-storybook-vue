import sharedConfig from '@epreston/eslint-config';
import pluginStorybook from 'eslint-plugin-storybook';
import pluginVue from 'eslint-plugin-vue';

/** @type { import('eslint').Linter.FlatConfig[] } */
export default [
  ...sharedConfig,
  ...pluginVue.configs['flat/essential'],
  ...pluginStorybook.configs['flat/recommended'],
  {
    name: 'project/ignores',
    ignores: ['storybook-static']
  }
];
