import {resolve} from 'path';
import {fileURLToPath} from 'url';
import {
  defineNuxtModule,
  addPlugin,
  addComponent,
  AddComponentOptions,
} from '@nuxt/kit';

const transpile = [
  '@headlessui/vue',
  '@heroicons/vue',
  '@gits-id/ui',
  '@gits-id/alert',
  '@gits-id/app-bar',
  '@gits-id/badge',
  '@gits-id/breadcrumbs',
  '@gits-id/button',
  '@gits-id/card',
  '@gits-id/collapsible',
  '@gits-id/container',
  '@gits-id/dropdown',
  '@gits-id/editor',
  '@gits-id/forms',
  '@gits-id/icon',
  '@gits-id/layouts',
  '@gits-id/list',
  '@gits-id/logo',
  '@gits-id/menu',
  '@gits-id/menus',
  '@gits-id/modal',
  '@gits-id/multi-select',
  '@gits-id/nav-drawer',
  '@gits-id/navbar',
  '@gits-id/pages',
  '@gits-id/pagination',
  '@gits-id/progress-bar',
  '@gits-id/select',
  '@gits-id/services',
  '@gits-id/spinner',
  '@gits-id/stats',
  '@gits-id/switch',
  '@gits-id/table',
  '@gits-id/tabs',
  '@gits-id/textarea',
  '@gits-id/theme',
  '@gits-id/toast',
  '@gits-id/tooltip',
  '@gits-id/utils',
  'floating-vue',
];

const components: AddComponentOptions[] = [
  {
    name: 'VAlert',
    filePath: '@gits-id/alert',
  },
  {
    name: 'VAppBar',
    filePath: '@gits-id/app-bar',
  },
  {
    name: 'VAutocomplete',
    filePath: '@gits-id/autocomplete',
  },
  {
    name: 'VAvatar',
    filePath: '@gits-id/avatar',
  },
  {
    name: 'VBadge',
    filePath: '@gits-id/badge',
  },
  {
    name: 'VBreadcrumbs',
    filePath: '@gits-id/breadcrumbs',
  },
  {
    name: 'VBtn',
    filePath: '@gits-id/button',
  },
  {
    name: 'VBtnGroup',
    export: 'VBtnGroup',
    filePath: '@gits-id/button',
  },
  {
    name: 'VBtnToolbar',
    export: 'VBtnToolbar',
    filePath: '@gits-id/button',
  },
  {
    name: 'VCard',
    filePath: '@gits-id/card',
  },
  {
    name: 'VCollapsible',
    filePath: '@gits-id/collapsible',
  },
  {
    name: 'VContainer',
    filePath: '@gits-id/container',
  },
  {
    name: 'VDropdown',
    filePath: '@gits-id/dropdown',
  },
  {
    name: 'VDropdownButton',
    export: 'DropdownButton',
    filePath: '@gits-id/dropdown',
  },
  {
    name: 'VDropdownItem',
    export: 'DropdownItem',
    filePath: '@gits-id/dropdown',
  },
  {
    name: 'VEditor',
    filePath: '@gits-id/editor',
  },
  {
    name: 'VInput',
    export: 'VInput',
    filePath: '@gits-id/forms',
  },
  {
    name: 'VInputGroup',
    export: 'VInputGroup',
    filePath: '@gits-id/forms',
  },
  {
    name: 'VInputRange',
    export: 'VInputRange',
    filePath: '@gits-id/forms',
  },
  {
    name: 'VCheckbox',
    export: 'VCheckbox',
    filePath: '@gits-id/forms',
  },
  {
    name: 'VFileUpload',
    export: 'VFileUpload',
    filePath: '@gits-id/forms',
  },
  {
    name: 'VFileUploadActions',
    export: 'VFileUploadActions',
    filePath: '@gits-id/forms',
  },
  {
    name: 'VFileUploadButtonTheme',
    export: 'VFileUploadButtonTheme',
    filePath: '@gits-id/forms',
  },
  {
    name: 'VFileUploadDefaultTheme',
    export: 'VFileUploadDefaultTheme',
    filePath: '@gits-id/forms',
  },
  {
    name: 'VFileUploadDropzoneTheme',
    export: 'VFileUploadDropzoneTheme',
    filePath: '@gits-id/forms',
  },
  {
    name: 'VFileUploadImageTheme',
    export: 'VFileUploadImageTheme',
    filePath: '@gits-id/forms',
  },
  {
    name: 'VFormGroup',
    export: 'VFormGroup',
    filePath: '@gits-id/forms',
  },
  {
    name: 'VFormSelect',
    export: 'VFormSelect',
    filePath: '@gits-id/forms',
  },
  {
    name: 'VRadio',
    export: 'VRadio',
    filePath: '@gits-id/forms',
  },
  {
    name: 'VRadioGroup',
    export: 'VRadioGroup',
    filePath: '@gits-id/forms',
  },
  {
    name: 'VTextarea',
    export: 'VTextarea',
    filePath: '@gits-id/forms',
  },
  {
    name: 'VIcon',
    filePath: '@gits-id/icon',
  },
  {
    name: 'VLogo',
    filePath: '@gits-id/logo',
  },
  {
    name: 'VList',
    export: 'List',
    filePath: '@gits-id/list',
  },
  {
    name: 'VListItem',
    export: 'ListItem',
    filePath: '@gits-id/list',
  },
  {
    name: 'VListCollapse',
    export: 'ListCollapse',
    filePath: '@gits-id/list',
  },
  {
    name: 'VListItemDivider',
    export: 'ListItemDivider',
    filePath: '@gits-id/list',
  },
  {
    name: 'VListItemHeader',
    export: 'ListItemHeader',
    filePath: '@gits-id/list',
  },
  {
    name: 'VMenu',
    filePath: '@gits-id/menu',
  },
  {
    name: 'VMenuItem',
    export: 'VMenuItem',
    filePath: '@gits-id/menu',
  },
  {
    name: 'VMenuIcon',
    export: 'VMenuIcon',
    filePath: '@gits-id/menu',
  },
  {
    name: 'VMenuTooltip',
    export: 'VMenuTooltip',
    filePath: '@gits-id/menu',
  },
  {
    name: 'VMenus',
    filePath: '@gits-id/menus',
  },
  {
    name: 'VMenusItem',
    export: 'VMenusItem',
    filePath: '@gits-id/menus',
  },
  {
    name: 'VModal',
    filePath: '@gits-id/modal',
  },
  {
    name: 'VMultiSelect',
    filePath: '@gits-id/multi-select',
  },
  {
    name: 'VNavDrawer',
    export: 'NavDrawer',
    filePath: '@gits-id/nav-drawer',
  },
  {
    name: 'VNavbar',
    filePath: '@gits-id/navbar',
  },
  {
    name: 'VPagination',
    filePath: '@gits-id/pagination',
  },
  {
    name: 'VPaginationItem',
    export: 'VPaginationItem',
    filePath: '@gits-id/pagination',
  },
  {
    name: 'VProgressBar',
    filePath: '@gits-id/progress-bar',
  },
  {
    name: 'VSelect',
    filePath: '@gits-id/select',
  },
  {
    name: 'VShimmer',
    filePath: '@gits-id/shimmer',
  },
  {
    name: 'VSpinner',
    filePath: '@gits-id/spinner',
  },
  {
    name: 'VSwitch',
    filePath: '@gits-id/switch',
  },
  {
    name: 'VDataTable',
    filePath: '@gits-id/table',
  },
  {
    name: 'VDataTablePagination',
    export: 'VDataTablePagination',
    filePath: '@gits-id/table',
  },
  {
    name: 'VTabs',
    filePath: '@gits-id/tabs',
  },
  {
    name: 'VTab',
    export: 'VTab',
    filePath: '@gits-id/tabs',
  },
  {
    name: 'VTabsSlider',
    export: 'VTabsSlider',
    filePath: '@gits-id/tabs',
  },
  {
    name: 'VToast',
    filePath: '@gits-id/toast',
  },
  {
    name: 'VTooltip',
    filePath: '@gits-id/tooltip',
  },
];
export interface ModuleOptions {
  css?: boolean;
  sass?: boolean;
  components?: boolean;
  transpileDeps?: boolean;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'gits-ui',
    configKey: 'gitsUi',
  },
  defaults: {
    css: false,
    sass: true,
    components: true,
    transpileDeps: true,
  },
  setup(options, nuxt) {
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url));
    nuxt.options.build.transpile.push(runtimeDir);
    addPlugin(resolve(runtimeDir, 'plugin'));

    // transpile deps
    if (options.transpileDeps) {
      nuxt.options.build.transpile = [
        ...nuxt.options.build.transpile,
        ...transpile,
      ];
    }

    // use css bundle
    if (options.css) {
      nuxt.options.css.push('@gits-id/ui/styles');
    }

    // use sass bundle
    if (options.sass) {
      nuxt.options.css.push('@gits-id/ui/src/style.scss');
    }

    // register components
    if (options.components) {
      components.forEach((component) => {
        addComponent(component);
      });
    }
  },
});
