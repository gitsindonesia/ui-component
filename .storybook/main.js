import { dirname, join } from "path";
// const { mergeConfig } = require('vite');
// const vuePlugin = require('@vitejs/plugin-vue')

module.exports = {
  stories: [
    // Only include stories from the consolidated UI package and packages that have stories
    '../packages/ui/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../packages/primitives/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../packages/layouts/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../packages/blocks/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../packages/pages/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../packages/iconsax/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../packages/quill-editor/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../packages/multi-select/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],

  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-mdx-gfm"),
    "@chromatic-com/storybook"
  ],

  framework: {
    name: getAbsolutePath("@storybook/vue3-vite"),
    options: {}
  },

  // viteFinal: (config) => {
  //   return mergeConfig(config, {
  //     plugins: [
  //       vuePlugin({
  //         script: {
  //           defineModel: true,
  //           propsDestructure: true,
  //         },
  //       }),
  //     ]
  //   });
  // },
  features: {
  },

  docs: {}
};

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}
