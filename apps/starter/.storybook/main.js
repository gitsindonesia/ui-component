const Pages = require('vite-plugin-pages').default;
const Layouts = require('vite-plugin-vue-layouts').default;
// const Vue = require('@vitejs/plugin-vue').default;

module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    // dev only
    // '../packages/ui/src/**/*.stories.mdx',
    // '../packages/ui/src/**/*.stories.@(js|jsx|ts|tsx)',
    // prod
    '../node_modules/@frontend/ui/src/**/*.stories.mdx',
    '../node_modules/@frontend/ui/src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    // '@storybook/addon-postcss/register',
  ],
  core: {
    builder: 'storybook-builder-vite',
  },
  async viteFinal(config, {configType}) {
    // customize the Vite config here
    // config.resolve.alias.foo = 'bar';

    config.plugins = [
      ...config.plugins,
      // Vue(),
      Pages({
        exclude: ['**/parts/*.vue'],
        nuxtStyle: true,
      }),
      Layouts(),
    ];

    // return the customized config
    return config;
  },
};
