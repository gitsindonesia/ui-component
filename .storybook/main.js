module.exports = {
  stories: [
    '../packages/*/src/**/*.@(mdx|stories.@(js|jsx|ts|tsx))',
    '../stories/**/*.@(mdx|stories.@(js|jsx|ts|tsx))',
    // '../packages/!(/node_modules)/**/*?(.stories).@(js|jsx|ts|tsx|mdx)',
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
