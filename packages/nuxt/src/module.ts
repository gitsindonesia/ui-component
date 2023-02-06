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
  '@gits-id/bottom-sheet',
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
    filePath: '@gits-id/alert/src/VAlert.vue',
  },
  {
    name: 'VAppBar',
    filePath: '@gits-id/app-bar/src/VAppBar.vue',
  },
  {
    name: 'VAutocomplete',
    filePath: '@gits-id/autocomplete/src/VAutocomplete.vue',
  },
  {
    name: 'VAvatar',
    filePath: '@gits-id/avatar/src/Avatar.vue',
  },
  {
    name: 'VBadge',
    filePath: '@gits-id/badge/src/VBadge.vue',
  },
  {
    name: 'VBreadcrumbs',
    filePath: '@gits-id/breadcrumbs/src/VBreadcrumbs.vue',
  },
  {
    name: 'VBtn',
    filePath: '@gits-id/button/src/VBtn.vue',
  },
  {
    name: 'VBtnGroup',
    filePath: '@gits-id/button/src/VBtnGroup.vue',
  },
  {
    name: 'VBtnToolbar',
    filePath: '@gits-id/button/src/VBtnToolbar.vue',
  },
  {
    name: 'VCard',
    filePath: '@gits-id/card/src/VCard.vue',
  },
  {
    name: 'VCollapsible',
    filePath: '@gits-id/collapsible/src/VCollapsible.vue',
  },
  {
    name: 'VCollapse',
    filePath: '@gits-id/collapsible/src/VCollapse.vue',
  },
  /**
   * @deprecated
   */
  {
    name: 'VContainer',
    filePath: '@gits-id/container/src/VContainer.vue',
  },
  {
    name: 'VDropdown',
    filePath: '@gits-id/dropdown/src/Dropdown.vue',
  },
  {
    name: 'VDropdownButton',
    filePath: '@gits-id/dropdown/src/DropdownButton.vue',
  },
  {
    name: 'VDropdownItem',
    filePath: '@gits-id/dropdown/src/DropdownItem.vue',
  },
  {
    name: 'VEditor',
    filePath: '@gits-id/editor/src/VEditor.vue',
  },
  {
    name: 'VInput',
    filePath: '@gits-id/forms/src/input/VInput.vue',
  },
  /**
   * @deprecated
   */
  {
    name: 'VInputGroup',
    filePath: '@gits-id/forms/src/input/VInputGroup.vue',
  },
  {
    name: 'VInputRange',
    filePath: '@gits-id/forms/src/input/VInputRange.vue',
  },
  {
    name: 'VCheckbox',
    filePath: '@gits-id/forms/src/checkbox/VCheckbox.vue',
  },
  {
    name: 'VFileUpload',
    filePath: '@gits-id/forms/src/file-input/VFileUpload.vue',
  },
  {
    name: 'VFileUploadActions',
    filePath: '@gits-id/forms/src/file-input/VFileUploadActions.vue',
  },
  {
    name: 'VFileUploadButtonTheme',
    filePath: '@gits-id/forms/src/file-input/VFileUploadButtonTheme.vue',
  },
  {
    name: 'VFileUploadDefaultTheme',
    filePath: '@gits-id/forms/src/file-input/VFileUploadDefaultTheme.vue',
  },
  {
    name: 'VFileUploadDropzoneTheme',
    filePath: '@gits-id/forms/src/file-input/VFileUploadDropzoneTheme.vue',
  },
  {
    name: 'VFileUploadImageTheme',
    filePath: '@gits-id/forms/src/file-input/VFileUploadImageTheme.vue',
  },
  {
    name: 'VFormGroup',
    filePath: '@gits-id/forms/src/from-group/VFormGroup.vue',
  },
  {
    name: 'VFormSelect',
    filePath: '@gits-id/forms/src/form-select/VFormSelect.vue',
  },
  {
    name: 'VRadio',
    filePath: '@gits-id/forms/src/radio/VRadio.vue',
  },
  {
    name: 'VRadioGroup',
    filePath: '@gits-id/forms/src/radio/VRadioGroup.vue',
  },
  {
    name: 'VTextarea',
    filePath: '@gits-id/forms/src/textarea/Textarea.vue',
  },
  {
    name: 'VIcon',
    filePath: '@gits-id/icon/src/Icon.vue',
  },
  {
    name: 'VLogo',
    filePath: '@gits-id/logo/src/VLogo.vue',
  },
  {
    name: 'VList',
    filePath: '@gits-id/list/src/List.vue',
  },
  {
    name: 'VListItem',
    filePath: '@gits-id/list/src/ListItem.vue',
  },
  {
    name: 'VListCollapse',
    filePath: '@gits-id/list/src/ListCollapse.vue',
  },
  {
    name: 'VListItemDivider',
    filePath: '@gits-id/list/src/ListItemDivider.vue',
  },
  {
    name: 'VListItemHeader',
    filePath: '@gits-id/list/src/ListItemHeader.vue',
  },
  {
    name: 'VMenu',
    filePath: '@gits-id/menu/src/VMenu.vue',
  },
  {
    name: 'VMenuItem',
    filePath: '@gits-id/menu/src/VMenuItem.vue',
  },
  {
    name: 'VMenuIcon',
    filePath: '@gits-id/menu/VMenuItem.vue',
  },
  {
    name: 'VMenuTooltip',
    filePath: '@gits-id/menu/src/VMenuTooltip.vue',
  },
  {
    name: 'VMenus',
    filePath: '@gits-id/menus/src/VMenus.vue',
  },
  {
    name: 'VMenusItem',
    filePath: '@gits-id/menus/src/VMenusItem.vue',
  },
  {
    name: 'VModal',
    filePath: '@gits-id/modal/src/VModal.vue',
  },
  {
    name: 'VMultiSelect',
    filePath: '@gits-id/multi-select/src/VMultiSelect.vue',
  },
  {
    name: 'VNavDrawer',
    filePath: '@gits-id/nav-drawer/src/NavDrawer.vue',
  },
  /**
   * @deprecated
   */
  {
    name: 'VNavbar',
    filePath: '@gits-id/navbar/src/VNavbar.vue',
  },
  {
    name: 'VPagination',
    filePath: '@gits-id/pagination/src/VPagination.vue',
  },
  {
    name: 'VPaginationItem',
    filePath: '@gits-id/pagination/src/VPaginationItem.vue',
  },
  {
    name: 'VProgressBar',
    filePath: '@gits-id/progress-bar/src/VProgressBar.vue',
  },
  {
    name: 'VSelect',
    filePath: '@gits-id/select/src/VSelect.vue',
  },
  {
    name: 'VShimmer',
    filePath: '@gits-id/shimmer/src/Shimmer.vue',
  },
  {
    name: 'VSpinner',
    filePath: '@gits-id/spinner/src/VSpinner.vue',
  },
  {
    name: 'VSwitch',
    filePath: '@gits-id/switch/src/VSwitch.vue',
  },
  {
    name: 'VDataTable',
    filePath: '@gits-id/table/src/VDataTable.vue',
  },
  {
    name: 'VDataTablePagination',
    filePath: '@gits-id/table/src/VDataTablePagination.vue',
  },
  {
    name: 'VTabs',
    filePath: '@gits-id/tabs/src/VTabs.vue',
  },
  {
    name: 'VTab',
    filePath: '@gits-id/tabs/src/VTab.vue',
  },
  {
    name: 'VTabsSlider',
    filePath: '@gits-id/tabs/src/VTabSlider.vue',
  },
  {
    name: 'VToast',
    filePath: '@gits-id/toast/src/VToast.vue',
  },
  {
    name: 'VTooltip',
    filePath: '@gits-id/tooltip/src/VTooltip.vue',
  },
  {
    name: 'VRating',
    filePath: '@gits-id/rating/src/VRating.vue',
  },
  {
    name: 'VBottomSheet',
    filePath: '@gits-id/bottom-sheet/src/BottomSheet.vue',
  },
  {
    name: 'VBottomSheetBody',
    filePath: '@gits-id/bottom-sheet/src/BottomSheetBody.vue',
  },
  {
    name: 'VBottomSheetFooter',
    filePath: '@gits-id/bottom-sheet/src/BottomSheetFooter.vue',
  },
  {
    name: 'VBottomSheetHeader',
    filePath: '@gits-id/bottom-sheet/src/BottomSheetHeader.vue',
  },
  {
    name: 'VBottomSheetMenus',
    filePath: '@gits-id/bottom-sheet/src/BottomSheetMenus.vue',
  },
  {
    name: 'VBottomSheetOverlay',
    filePath: '@gits-id/bottom-sheet/src/BottomSheetOverlay.vue',
  },
  {
    name: 'VBottomSheetHandle',
    filePath: '@gits-id/bottom-sheet/src/BottomSheetHandle.vue',
  },
];

export interface ModuleOptions {
  /**
   * Determine whether to load the css bundle.
   *
   * @default false
   * @example
   * // nuxt.config.ts
   * export default defineConfig({
   *  gitsUi: {
   *   css: true
   * })
   */
  css?: boolean;
  /**
   * Determine whether to load the sass bundle.
   *
   * @default false
   * @example
   * // nuxt.config.ts
   * export default defineConfig({
   *  gitsUi: {
   *   sass: true
   * })
   */
  sass?: boolean;
  /**
   * Determine whether to auto-imports the components.
   *
   * @default true
   * @example
   * // nuxt.config.ts
   * export default defineConfig({
   *  gitsUi: {
   *   components: true
   * })
   */
  components?: boolean;
  /**
   * Determine whether to transpile dependencies.
   *
   * @default true
   * @example
   * // nuxt.config.ts
   * export default defineConfig({
   *  gitsUi: {
   *   transpileDeps: true
   * })
   */
  transpileDeps?: boolean;
  /**
   * Determine whether to load floating vue styles.
   *
   * @default true
   * @example
   * // nuxt.config.ts
   * export default defineConfig({
   *  gitsUi: {
   *   loadFloatingVueStyles: true
   * })
   */
  loadFloatingVueStyles?: boolean;
  /**
   * Determine whether to load default styles.
   * Only works when `css` and `scss` is `false`.
   *
   * @default true
   * @example
   * // nuxt.config.ts
   * export default defineConfig({
   *  gitsUi: {
   *   loadDefaultStyles: false
   * })
   */
  loadDefaultStyles?: boolean;
  /**
   * Determine whether to load dark mode styles.
   *
   * @default false
   * @example
   * // nuxt.config.ts
   * export default defineConfig({
   *  gitsUi: {
   *   darkMode: true
   * })
   */
  darkMode?: boolean;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'gits-ui',
    configKey: 'gitsUi',
  },
  defaults: {
    css: false,
    sass: false,
    components: true,
    transpileDeps: true,
    loadFloatingVueStyles: true,
    loadDefaultStyles: true,
    darkMode: false,
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
      nuxt.options.css.push('@gits-id/ui/styles.scss');
    }

    // load required styles when not using css bundle and not using sass bundle
    if (!options.css && !options.sass && options.loadDefaultStyles) {
      nuxt.options.css.push('@gits-id/menu/dist/style.css');
      nuxt.options.css.push('@gits-id/tooltip/dist/style.css');
      nuxt.options.css.push('@gits-id/theme/transition.css');
    }

    // load floating-vue styles
    if (options.loadFloatingVueStyles) {
      nuxt.options.css.push('floating-vue/dist/style.css');
    }

    // load dark mode styles
    if (options.darkMode) {
      nuxt.options.css.push('@gits-id/ui/styles.dark');
    }

    // register components
    if (options.components) {
      components.forEach((component) => {
        addComponent(component);
      });
    }
  },
});
