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
        collapsible: true,
        items: [
          {text: 'Introduction', link: '/guide/introduction'},
          {text: 'Getting Started', link: '/guide/getting-started'},
          {text: 'Customization', link: '/guide/customization'},
          {text: 'Default Theme', link: '/guide/theme'},
          {text: 'Starter', link: '/guide/starter'},
          {text: 'Migration', link: '/guide/migration'},
          {text: 'Changelog', link: '/guide/changelog'},
          {text: 'Usage with Nuxt 3', link: '/guide/nuxt'},
          {text: 'Roadmap', link: '/roadmap'},
        ],
      },
      {
        text: 'Components',
        collapsible: true,
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
            text: 'Menu',
            link: '/components/menu',
          },
          {
            text: 'Menus',
            link: '/components/menus',
          },
          {
            text: 'Modal',
            link: '/components/modal',
          },
          {
            text: 'Navigation Drawer',
            link: '/components/navigation-drawer',
          },
          {
            text: 'Pagination',
            link: '/components/pagination',
          },
          {
            text: 'Progress Bar',
            link: '/components/progress-bar',
          },
          {
            text: 'Select',
            link: '/components/select',
          },
          {
            text: 'Shimmer',
            link: '/components/shimmer',
          },
          {
            text: 'Spinner',
            link: '/components/spinner',
          },
          {
            text: 'Stepper',
            link: '/components/stepper',
          },
          {
            text: 'Switch',
            link: '/components/switch',
          },
          {
            text: 'Tabs',
            link: '/components/tabs',
          },
          {
            text: 'Toast',
            link: '/components/toast',
          },
          {
            text: 'Tooltip',
            link: '/components/tooltip',
          },
        ],
      },
      {
        text: 'Forms',
        collapsible: true,
        items: [
          {
            text: 'Button',
            link: '/components/button',
          },
          {
            text: 'Checkbox',
            link: '/components/checkbox',
          },
          {
            text: 'Editor',
            link: '/components/editor',
          },
          {
            text: 'FileInput',
            link: '/components/file-input',
          },
          {
            text: 'FormSelect',
            link: '/components/form-select',
          },
          {
            text: 'Input',
            link: '/components/input',
          },
          {
            text: 'Input Range',
            link: '/components/input-range',
          },
          {
            text: 'Multi Select',
            link: '/components/multi-select',
          },
          {
            text: 'QuillEditor',
            link: '/components/quill-editor',
          },
          {
            text: 'Radio',
            link: '/components/radio',
          },
          {
            text: 'RadioGroup',
            link: '/components/radio-group',
          },
          {
            text: 'TextArea',
            link: '/components/textarea',
          },
        ],
      },
      {
        text: 'Deprecated',
        collapsible: true,
        items: [
          {
            text: 'Navbar',
            link: '/components/navbar',
          },
          {
            text: 'Nav Drawer',
            link: '/components/nav-drawer',
          },
        ],
      },
    ],
    socialLinks: [
      {icon: 'github', link: 'https://github.com/gitsindonesia/ui-component'},
    ],
  },
});
