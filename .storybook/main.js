import { dirname, join } from "path";
// const { mergeConfig } = require('vite');
// const vuePlugin = require('@vitejs/plugin-vue')

module.exports = {
  stories: [
    '../packages/*/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],

  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-mdx-gfm")
  ],

  framework: {
    name: getAbsolutePath("@storybook/vue3-vite"),
    options: {}
  },

  features: {
    storyStoreV7: true,
    legacyMdx1: true, // 👈 Enables MDX v1 support
  },

  docs: {
    autodocs: true
  }
};

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}
