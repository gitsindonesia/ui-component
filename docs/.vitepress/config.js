import {defineConfig} from 'vitepress';

export default defineConfig({
  title: 'GITS UI',
  description: 'GITS UI Component Library',
  ignoreDeadLinks: true,
  base: '/ui-component/',
  themeConfig: {
    logo: 'https://gits.id/wp-content/uploads/2022/06/Logo-Main-1.png',
    nav: [
      {text: 'Guide', link: '/guide/getting-started'},
      {text: 'Storybook', link: 'https://gits-ui.web.app'},
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
          {text: 'Default Theme', link: '/guide/theme'},
          {text: 'Starter', link: '/guide/starter'},
          {text: 'Migration', link: '/guide/migration'},
          {text: 'Changelog', link: '/guide/changelog'},
        ],
      },
      {
        text: 'Components',
        items: [
          {text: 'Alert', link: '/components/alert'},
          {text: 'AppBar', link: '/components/app-bar'},
          {text: 'Autocomplete', link: '/components/autocomplete'},
          {text: 'Avatar', link: '/components/avatar'},
          {text: 'Badge', link: '/components/badge'},
          {text: 'Breadcrumbs', link: '/components/breadcrumbs'},
          {text: 'Card', link: '/components/card'},
          {text: 'Collapsible', link: '/components/collapsible'},
          {text: 'DataTable', link: '/components/data-table'},
          {
            text: 'DataTablePagination',
            link: '/components/data-table-pagination',
          },
          {
            text: 'Dropdown',
            link: '/components/dropdown',
          },
          {
            text: 'Icon',
            link: '/components/icon',
          },
          {
            text: 'List',
            link: '/components/list',
          },
          {
            text: 'Logo',
            link: '/components/logo',
          },
          {
            text: 'Tabs',
            link: '/components/tabs',
          },
          {
            text: 'Tooltip',
            link: '/components/tooltip',
          },
        ],
      },
    ],
    socialLinks: [
      {icon: 'github', link: 'https://github.com/gitsindonesia/ui-component'},
    ],
  },
});
