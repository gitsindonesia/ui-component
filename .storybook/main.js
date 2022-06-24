module.exports = {
  stories: [
    '../packages/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/vue3',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  // async viteFinal(config, {configType}) {
  // config.resolve.dedupe = ['@storybook/client-api']; // config.optimizeDeps.include = [...config.optimizeDeps.include, 'hoist-non-react-statics', 'fast-deep-equal', 'lodash']
  // return config;
  // },
};
