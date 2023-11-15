module.exports = {
  extends: [
    '@epreston/eslint-config',
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:storybook/recommended',
    'plugin:mdx/recommended'
  ],
  ignorePatterns: ['storybook-static']
};
