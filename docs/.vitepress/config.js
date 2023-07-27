import {defineConfig} from 'vitepress';

export default defineConfig({
  title: 'Morpheme UI',
  description:
    'A free and open-source Vue UI Library based on Morpheme Design System',
  ignoreDeadLinks: true,
  base: '/ui-component/',
  themeConfig: {
    search: {
      provider: 'local',
    },
    logo: '/morpheme-logo.png',
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
        text: 'Getting Started',
        collapsed: false,
        items: [
          {text: 'Introduction', link: '/guide/introduction'},
          {text: 'Quick Start', link: '/guide/getting-started'},
          {text: 'Installation', link: '/guide/installation'},
          {text: 'Vue Usage', link: '/guide/vue'},
          {text: 'Nuxt Usage', link: '/guide/nuxt'},
          {text: 'Starter', link: '/guide/starter'},
        ],
      },
      {
        text: 'Releases',
        collapsed: false,
        items: [
          {text: 'Migration', link: '/guide/migration'},
          {text: 'Changelog', link: '/guide/changelog'},
          {text: 'Roadmap', link: '/roadmap'},
        ],
      },
      {
        text: 'Customization',
        collapsed: false,
        items: [
          {text: 'Themes', link: '/guide/themes'},
          {text: 'Default Theme', link: '/guide/theme'},
          {text: 'Dark Mode', link: '/guide/dark-mode'},
          {text: 'Customization', link: '/guide/customization'},
        ],
      },
      {
        text: 'Tools',
        collapsed: false,
        items: [{text: 'CLI', link: '/tools/cli'}],
      },
      {
        text: 'Themes',
        collapsed: false,
        items: [
          {text: 'nuxt-auth', link: '/themes/nuxt-auth'},
          {text: 'nuxt-admin', link: '/themes/nuxt-admin'},
        ],
      },
      {
        text: 'Components',
        collapsed: false,
        items: [
          {text: 'Alert', link: '/components/alert'},
          {text: 'AppBar', link: '/components/app-bar'},
          {text: 'AppShell', link: '/components/app-shell'},
          {text: 'Autocomplete', link: '/components/autocomplete'},
          {text: 'Avatar', link: '/components/avatar'},
          {text: 'Badge', link: '/components/badge'},
          {text: 'Banner', link: '/components/banner'},
          {text: 'BottomNavigation', link: '/components/bottom-navigation'},
          {text: 'BottomSheet', link: '/components/bottom-sheet'},
          {text: 'Breadcrumbs', link: '/components/breadcrumbs'},
          {text: 'Card', link: '/components/card'},
          {text: 'Collapse', link: '/components/collapse'},
          {text: 'Collapsible', link: '/components/collapsible'},
          {text: 'Command', link: '/components/command'},
          {text: 'Container', link: '/components/container'},
          {text: 'DataTable', link: '/components/data-table'},
          {
            text: 'DataTablePagination',
            link: '/components/data-table-pagination',
          },
          {
            text: 'Divider',
            link: '/components/divider',
          },
          {
            text: 'Dropdown',
            link: '/components/dropdown',
          },
          {
            text: 'Grid',
            link: '/components/grid',
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
            text: 'Popover',
            link: '/components/popover',
          },
          {
            text: 'Progress Bar',
            link: '/components/progress-bar',
          },
          {
            text: 'Progress Circular',
            link: '/components/progress-circular',
          },
          {
            text: 'Rating',
            link: '/components/rating',
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
            text: 'Timeline',
            link: '/components/timeline',
          },
          {
            text: 'Toast',
            link: '/components/toast',
          },
          {
            text: 'Text',
            link: '/components/text',
          },
          {
            text: 'Tooltip',
            link: '/components/tooltip',
          },
        ],
      },
      {
        text: 'Forms',
        collapsed: false,
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
          {
            text: 'Standalone Components',
            link: '/components/standalone-form-components',
          },
        ],
      },
      {
        text: 'Deprecated',
        collapsed: true,
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
