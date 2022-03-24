import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';
import Components from 'unplugin-vue-components/vite';
import vueSvgPlugin from 'vite-plugin-vue-svg';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Jsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
      '@/': `${path.resolve(__dirname, 'src')}/`,
      '@modules/': `${path.resolve(__dirname, 'modules')}/`,
    },
  },
  plugins: [
    vue(),
    Jsx(),
    Pages({
      exclude: ['**/components/*.vue', '**/partials/*.vue', '**/__*'],
      nuxtStyle: true,
      pagesDir: [
        {dir: 'src/pages', baseRoute: ''},
        {dir: 'modules/shop/pages', baseRoute: 'shop'},
        {dir: 'modules/blog/pages', baseRoute: 'blog'},
      ],
    }),
    Layouts(),
    Components({
      dts: 'src/components.d.ts',
      // custom resolvers
      resolvers: [
        // auto import icons
        // https://github.com/antfu/unplugin-icons
        IconsResolver({
          componentPrefix: '',
          // enabledCollections: ['carbon']
        }),
      ],
    }),
    vueSvgPlugin({
      // defaultExport: 'url',
    }),
    // https://github.com/antfu/unplugin-icons
    Icons({
      /* options */
      compiler: 'vue3',
      autoInstall: true,
    }),
  ],
  optimizeDeps: {
    include: [
      'yup',
      'lodash',
      'lodash/get',
      'lodash/merge',
      'jwt-decode',
      'secure-ls',
      'js-cookie',
      'axios',
      '@ckeditor/ckeditor5-build-classic',
      '@ckeditor/ckeditor5-vue',
    ],
  },

  server: {
    fs: {
      strict: true,
    },
  },

  test: {
    globals: true,
    environment: 'happy-dom',
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
});
