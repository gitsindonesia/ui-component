import {HomeIcon, ChipIcon} from '@heroicons/vue/solid';

const componentRoute = (title: string, to: string) => ({
  title,
  to,
  icon: ChipIcon,
});

export const menus = [
  {
    title: 'Home',
    to: '/components',
    icon: HomeIcon,
  },
  {
    title: 'Components',
    children: [
      componentRoute('Alerts', '/components/alerts'),
      componentRoute('Breadcrumbs', '/components/breadcrumbs'),
      componentRoute('Buttons', '/components/buttons'),
      componentRoute('Data Table', '/components/tables'),
      componentRoute('Radio', '/components/Radios'),
      componentRoute('Input', '/components/inputs'),
      componentRoute('Modal', '/components/modals'),
      componentRoute('Pagination', '/components/paginations'),
      componentRoute('Select', '/components/selects'),
      componentRoute('Textarea', '/components/textareas'),
      componentRoute('Dropdown', '/components/dropdowns'),
      componentRoute('Switch', '/components/switches'),
      componentRoute('Tabs', '/components/tabs'),
      componentRoute('Progressbar', '/components/progressbars'),
      componentRoute('Tooltip', '/components/tooltips'),
      componentRoute('Label', '/components/Labels'),
    ],
  },
];
