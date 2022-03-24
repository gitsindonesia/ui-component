import {ChipIcon} from '@heroicons/vue/solid';

const componentRoute = (title: string, to: string) => ({
  title,
  to,
  icon: ChipIcon,
});

const componentSubMenus = [
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
  componentRoute('Switch', '/components/switch'),
  componentRoute('Tabs', '/components/tabs'),
  componentRoute('ProgressBar', '/components/progress-bars'),
  componentRoute('Tooltip', '/components/tooltips'),
  componentRoute('Bagdes', '/components/badges'),
  componentRoute('Card', '/components/card'),
  componentRoute('Checkbox', '/components/checkbox'),
  componentRoute('Collapsible', '/components/collapsible'),
  componentRoute('Forms', '/components/forms'),
  componentRoute('AppBar', '/components/app-bar'),
  componentRoute('Container', '/components/container'),
  componentRoute('Editor', '/components/editor'),
  componentRoute('File Input', '/components/file-input'),
  componentRoute('Form Select', '/components/form-select'),
  componentRoute('Logo', '/components/logo'),
];

const getComponentChildren = () => {
  componentSubMenus.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
  return componentSubMenus;
};

export const menus = [
  {
    title: 'Components',
    children: getComponentChildren(),
  },
];
