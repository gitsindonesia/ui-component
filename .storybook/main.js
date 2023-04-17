module.exports = {
  stories: [
    '../packages/*/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-mdx-gfm',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  features: {
    storyStoreV7: true,
  },
  viteFinal: (config) => {
    return {
      ...config,
      build: {
        ...config.build,
        sourcemap: false,
        // target: ['es2020'],
      },
    };
  },
  docs: {
    autodocs: true,
  },
};
