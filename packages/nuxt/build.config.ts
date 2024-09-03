import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  failOnWarn: false,
  externals: [
    '@nuxt/devtools-kit',
    'floating-vue',
    '@floating-ui/dom',
    '@floating-ui/core',
    '@floating-ui/utils'
  ],
});
