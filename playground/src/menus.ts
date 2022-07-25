import {ChipIcon} from '@heroicons/vue/solid';

const componentRoute = (title: string, to: string) => ({
  title,
  to,
  icon: ChipIcon,
});

const componentSubMenus = [
  componentRoute('Alerts', '/components/alerts'),
  componentRoute('AppBar', '/components/app-bar'),
  componentRoute('Bagdes', '/components/badges'),
  componentRoute('Breadcrumbs', '/components/breadcrumbs'),
  componentRoute('Buttons', '/components/buttons'),
  componentRoute('Card', '/components/card'),
  componentRoute('Data Table', '/components/tables'),
  componentRoute('Modal', '/components/modals'),
  componentRoute('Pagination', '/components/paginations'),
  componentRoute('Dropdown', '/components/dropdowns'),
  componentRoute('Tabs', '/components/tabs'),
  componentRoute('ProgressBar', '/components/progress-bars'),
  componentRoute('Tooltip', '/components/tooltips'),
  componentRoute('Collapsible', '/components/collapsible'),
  componentRoute('Container', '/components/container'),
  componentRoute('Logo', '/components/logo'),
  componentRoute('Switch', '/components/switch'),
  componentRoute('QuillEditor', '/components/quill-editor'),
];

const formChildren = [
  componentRoute('Radio', '/components/Radios'),
  componentRoute('Input', '/components/inputs'),
  componentRoute('Select', '/components/selects'),
  componentRoute('Textarea', '/components/textareas'),
  componentRoute('Forms', '/components/forms'),
  componentRoute('Editor', '/components/editor'),
  componentRoute('File Input', '/components/file-input'),
  componentRoute('Form Select', '/components/form-select'),
  componentRoute('Checkbox', '/components/checkbox'),
];

const getSortedChildren = (items: any[]) => {
  items.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
  return items;
};

export const menus = [
  {
    title: 'Forms',
    children: getSortedChildren(formChildren),
  },
  {
    title: 'Components',
    children: getSortedChildren(componentSubMenus),
  },
];
