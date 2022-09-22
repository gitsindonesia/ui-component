import {defineConfig} from 'vitepress';

export default defineConfig({
  title: 'GITS UI',
  description: 'GITS UI Component Library',
  ignoreDeadLinks: true,
  base: '/ui-component/',
  themeConfig: {
    logo: 'https://gits.id/wp-content/uploads/2022/06/Logo-Main-1.png',
    nav: [
      {text: 'Guide', link: '/guide/introduction'},
      // {
      //   text: 'Ecosystem',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' }
      //   ]
      // }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          {text: 'Getting Started', link: '/guide/getting-started'},
          {text: 'Customization', link: '/guide/customization'},
        ],
      },
      {
        text: 'Components',
        items: [{text: 'Alert', link: '/components/alerts'}],
      },
    ],
    socialLinks: [
      {icon: 'github', link: 'https://github.com/gitsindonesia/ui-component'},
    ],
  },
});
