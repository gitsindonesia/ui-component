import {resolve} from 'path';
import {fileURLToPath} from 'url';
import {
  defineNuxtModule,
  addPlugin,
  addComponent,
  AddComponentOptions,
} from '@nuxt/kit';
import {addCustomTab} from '@nuxt/devtools-kit';

const transpile = [
  '@headlessui/vue',
  '@heroicons/vue',
  '@morpheme/ui',
  '@morpheme/alert',
  '@morpheme/app-bar',
  '@morpheme/badge',
  '@morpheme/breadcrumbs',
  '@morpheme/button',
  '@morpheme/bottom-sheet',
  '@morpheme/card',
  '@morpheme/collapsible',
  '@morpheme/container',
  '@morpheme/dropdown',
  '@morpheme/editor',
  '@morpheme/forms',
  '@morpheme/icon',
  '@morpheme/layouts',
  '@morpheme/list',
  '@morpheme/logo',
  '@morpheme/menu',
  '@morpheme/menus',
  '@morpheme/modal',
  '@morpheme/multi-select',
  '@morpheme/nav-drawer',
  '@morpheme/navbar',
  '@morpheme/pages',
  '@morpheme/pagination',
  '@morpheme/progress-bar',
  '@morpheme/select',
  '@morpheme/services',
  '@morpheme/spinner',
  '@morpheme/stats',
  '@morpheme/switch',
  '@morpheme/table',
  '@morpheme/tabs',
  '@morpheme/theme',
  '@morpheme/toast',
  '@morpheme/tooltip',
  '@morpheme/utils',
  '@morpheme/text',
  '@morpheme/app-shell',
  '@morpheme/progress-circular',
  '@morpheme/design-tokens',
  '@morpheme/banner',
  '@morpheme/divider',
  '@morpheme/bottom-navigation',
  'floating-vue',
];

const optimizeDeps = ['yup', '@morpheme/design-tokens'];

const components: AddComponentOptions[] = [
  {
    name: 'VAlert',
    filePath: '@morpheme/alert/src/VAlert.vue',
  },
  {
    name: 'VAlertTitle',
    filePath: '@morpheme/alert/src/VAlertTitle.vue',
  },
  {
    name: 'VAppBar',
    filePath: '@morpheme/app-bar/src/VAppBar.vue',
  },
  {
    name: 'VAutocomplete',
    filePath: '@morpheme/autocomplete/src/VAutocomplete.vue',
  },
  {
    name: 'VAvatar',
    filePath: '@morpheme/avatar/src/Avatar.vue',
  },
  {
    name: 'VAvatarGroup',
    filePath: '@morpheme/avatar/src/AvatarGroup.vue',
  },
  {
    name: 'VBadge',
    filePath: '@morpheme/badge/src/VBadge.vue',
  },
  {
    name: 'VBreadcrumbs',
    filePath: '@morpheme/breadcrumbs/src/VBreadcrumbs.vue',
  },
  {
    name: 'VBtn',
    filePath: '@morpheme/button/src/VBtn.vue',
  },
  {
    name: 'VBtnGroup',
    filePath: '@morpheme/button/src/VBtnGroup.vue',
  },
  {
    name: 'VBtnToolbar',
    filePath: '@morpheme/button/src/VBtnToolbar.vue',
  },
  {
    name: 'VCard',
    filePath: '@morpheme/card/src/VCard.vue',
  },
  {
    name: 'VCollapsible',
    filePath: '@morpheme/collapsible/src/VCollapsible.vue',
  },
  {
    name: 'VCollapse',
    filePath: '@morpheme/collapsible/src/VCollapse.vue',
  },
  /**
   * @deprecated
   */
  {
    name: 'VContainer',
    filePath: '@morpheme/container/src/VContainer.vue',
  },
  {
    name: 'VDropdown',
    filePath: '@morpheme/dropdown/src/Dropdown.vue',
  },
  {
    name: 'VDropdownButton',
    filePath: '@morpheme/dropdown/src/DropdownButton.vue',
  },
  {
    name: 'VDropdownItem',
    filePath: '@morpheme/dropdown/src/DropdownItem.vue',
  },
  {
    name: 'VEditor',
    filePath: '@morpheme/editor/src/VEditor.vue',
  },
  {
    name: 'VQuillEditor',
    filePath: '@morpheme/quill-editor/src/VQuillEditor.vue',
  },
  {
    name: 'VInput',
    filePath: '@morpheme/forms/src/input/VInput.vue',
  },
  /**
   * @deprecated
   */
  {
    name: 'VInputGroup',
    filePath: '@morpheme/forms/src/input/VInputGroup.vue',
  },
  {
    name: 'VInputRange',
    filePath: '@morpheme/forms/src/input/VInputRange.vue',
  },
  {
    name: 'VCheckbox',
    filePath: '@morpheme/forms/src/checkbox/VCheckbox.vue',
  },
  {
    name: 'VFileUpload',
    filePath: '@morpheme/forms/src/file-input/VFileUpload.vue',
  },
  {
    name: 'VFileUploadActions',
    filePath: '@morpheme/forms/src/file-input/VFileUploadActions.vue',
  },
  {
    name: 'VFileUploadButtonTheme',
    filePath: '@morpheme/forms/src/file-input/VFileUploadButtonTheme.vue',
  },
  {
    name: 'VFileUploadDefaultTheme',
    filePath: '@morpheme/forms/src/file-input/VFileUploadDefaultTheme.vue',
  },
  {
    name: 'VFileUploadDropzoneTheme',
    filePath: '@morpheme/forms/src/file-input/VFileUploadDropzoneTheme.vue',
  },
  {
    name: 'VFileUploadImageTheme',
    filePath: '@morpheme/forms/src/file-input/VFileUploadImageTheme.vue',
  },
  {
    name: 'VFormGroup',
    filePath: '@morpheme/forms/src/form-group/VFormGroup.vue',
  },
  {
    name: 'VFormSelect',
    filePath: '@morpheme/forms/src/form-select/VFormSelect.vue',
  },
  {
    name: 'VRadio',
    filePath: '@morpheme/forms/src/radio/VRadio.vue',
  },
  {
    name: 'VRadioGroup',
    filePath: '@morpheme/forms/src/radio/VRadioGroup.vue',
  },
  {
    name: 'VTextarea',
    filePath: '@morpheme/forms/src/textarea/Textarea.vue',
  },
  {
    name: 'VIcon',
    filePath: '@morpheme/icon/src/Icon.vue',
  },
  {
    name: 'VLogo',
    filePath: '@morpheme/logo/src/VLogo.vue',
  },
  {
    name: 'VList',
    filePath: '@morpheme/list/src/List.vue',
  },
  {
    name: 'VListItem',
    filePath: '@morpheme/list/src/ListItem.vue',
  },
  {
    name: 'VListCollapse',
    filePath: '@morpheme/list/src/ListCollapse.vue',
  },
  {
    name: 'VListItemDivider',
    filePath: '@morpheme/list/src/ListItemDivider.vue',
  },
  {
    name: 'VListItemHeader',
    filePath: '@morpheme/list/src/ListItemHeader.vue',
  },
  {
    name: 'VMenu',
    filePath: '@morpheme/menu/src/VMenu.vue',
  },
  {
    name: 'VMenuItem',
    filePath: '@morpheme/menu/src/VMenuItem.vue',
  },
  {
    name: 'VMenuIcon',
    filePath: '@morpheme/menu/src/VMenuIcon.vue',
  },
  {
    name: 'VMenuTooltip',
    filePath: '@morpheme/menu/src/VMenuTooltip.vue',
  },
  {
    name: 'VMenus',
    filePath: '@morpheme/menus/src/VMenus.vue',
  },
  {
    name: 'VMenusItem',
    filePath: '@morpheme/menus/src/VMenusItem.vue',
  },
  {
    name: 'VModal',
    filePath: '@morpheme/modal/src/VModal.vue',
  },
  {
    name: 'VMultiSelect',
    filePath: '@morpheme/multi-select/src/VMultiSelect.vue',
  },
  {
    name: 'VNavDrawer',
    filePath: '@morpheme/nav-drawer/src/NavDrawer.vue',
  },
  /**
   * @deprecated
   */
  {
    name: 'VNavbar',
    filePath: '@morpheme/navbar/src/VNavbar.vue',
  },
  {
    name: 'VPagination',
    filePath: '@morpheme/pagination/src/VPagination.vue',
  },
  {
    name: 'VPaginationItem',
    filePath: '@morpheme/pagination/src/VPaginationItem.vue',
  },
  {
    name: 'VProgressBar',
    filePath: '@morpheme/progress-bar/src/VProgressBar.vue',
  },
  {
    name: 'VSelect',
    filePath: '@morpheme/select/src/VSelect.vue',
  },
  {
    name: 'VShimmer',
    filePath: '@morpheme/shimmer/src/Shimmer.vue',
  },
  {
    name: 'VSpinner',
    filePath: '@morpheme/spinner/src/VSpinner.vue',
  },
  {
    name: 'VSwitch',
    filePath: '@morpheme/switch/src/VSwitch.vue',
  },
  {
    name: 'VDataTable',
    filePath: '@morpheme/table/src/VDataTable.vue',
  },
  {
    name: 'VDataTablePagination',
    filePath: '@morpheme/table/src/VDataTablePagination.vue',
  },
  {
    name: 'VTabs',
    filePath: '@morpheme/tabs/src/VTabs.vue',
  },
  {
    name: 'VTab',
    filePath: '@morpheme/tabs/src/VTab.vue',
  },
  {
    name: 'VTabsSlider',
    filePath: '@morpheme/tabs/src/VTabsSlider.vue',
  },
  {
    name: 'VTabGroup',
    filePath: '@morpheme/tabs/src/VTabGroup.vue',
  },
  {
    name: 'VTabList',
    filePath: '@morpheme/tabs/src/VTabList.vue',
  },
  {
    name: 'VTabItem',
    filePath: '@morpheme/tabs/src/VTabItem.vue',
  },
  {
    name: 'VTabPanels',
    filePath: '@morpheme/tabs/src/VTabPanels.vue',
  },
  {
    name: 'VTabPanel',
    filePath: '@morpheme/tabs/src/VTabPanel.vue',
  },
  {
    name: 'VToast',
    filePath: '@morpheme/toast/src/VToast.vue',
  },
  {
    name: 'VTooltip',
    filePath: '@morpheme/tooltip/src/VTooltip.vue',
  },
  {
    name: 'VRating',
    filePath: '@morpheme/rating/src/Rating.vue',
  },
  {
    name: 'VBottomSheet',
    filePath: '@morpheme/bottom-sheet/src/BottomSheet.vue',
  },
  {
    name: 'VBottomSheetBody',
    filePath: '@morpheme/bottom-sheet/src/BottomSheetBody.vue',
  },
  {
    name: 'VBottomSheetFooter',
    filePath: '@morpheme/bottom-sheet/src/BottomSheetFooter.vue',
  },
  {
    name: 'VBottomSheetHeader',
    filePath: '@morpheme/bottom-sheet/src/BottomSheetHeader.vue',
  },
  {
    name: 'VBottomSheetMenus',
    filePath: '@morpheme/bottom-sheet/src/BottomSheetMenus.vue',
  },
  {
    name: 'VBottomSheetOverlay',
    filePath: '@morpheme/bottom-sheet/src/BottomSheetOverlay.vue',
  },
  {
    name: 'VBottomSheetHandle',
    filePath: '@morpheme/bottom-sheet/src/BottomSheetHandle.vue',
  },
  {
    name: 'VText',
    filePath: '@morpheme/text/src/VText.vue',
  },
  {
    name: 'VAppShell',
    filePath: '@morpheme/app-shell/src/VAppShell.vue',
  },
  {
    name: 'VMain',
    filePath: '@morpheme/app-shell/src/VMain.vue',
  },
  {
    name: 'VProgressCircular',
    filePath: '@morpheme/progress-circular/src/VProgressCircular.vue',
  },
  {
    name: 'VTimeline',
    filePath: '@morpheme/timeline/src/VTimeline.vue',
  },
  {
    name: 'VTimelineDivider',
    filePath: '@morpheme/timeline/src/VTimelineDivider.vue',
  },
  {
    name: 'VTimelineItem',
    filePath: '@morpheme/timeline/src/VTimelineItem.vue',
  },
  {
    name: 'VTimelineItemDot',
    filePath: '@morpheme/timeline/src/VTimelineItemDot.vue',
  },
  {
    name: 'VTimelineItemContent',
    filePath: '@morpheme/timeline/src/VTimelineItemContent.vue',
  },
  {
    name: 'VBanner',
    filePath: '@morpheme/banner/src/VBanner.vue',
  },
  {
    name: 'VBannerText',
    filePath: '@morpheme/banner/src/VBannerText.vue',
  },
  {
    name: 'VDivider',
    filePath: '@morpheme/divider/src/VDivider.vue',
  },
  {
    name: 'VBottomNavigation',
    filePath: '@morpheme/bottom-navigation/src/VBottomNavigation.vue',
  },
  {
    name: 'VBottomNavigationItem',
    filePath: '@morpheme/bottom-navigation/src/VBottomNavigationItem.vue',
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
   *  morpheme: {
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
   *  morpheme: {
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
   *  morpheme: {
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
   *  morpheme: {
   *   transpileDeps: true
   * })
   */
  transpileDeps?: boolean;
  /**
   * Determine whether to load floating vue styles. Only works when `theme` is `legacy`.
   *
   * @default true
   * @example
   * // nuxt.config.ts
   * export default defineConfig({
   *  morpheme: {
   *   loadFloatingVueStyles: true
   * })
   */
  loadFloatingVueStyles?: boolean;
  /**
   * Determine whether to load default styles.
   * Only works when `css` and `scss` is `false` and `theme` is `legacy`.
   *
   * @default true
   * @example
   * // nuxt.config.ts
   * export default defineConfig({
   *  morpheme: {
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
   *  morpheme: {
   *   darkMode: true
   * })
   */
  darkMode?: boolean;
  /**
   * Determine whether to optimize default deps.
   *
   * @default false
   * @example
   * // nuxt.config.ts
   * export default defineConfig({
   *  morpheme: {
   *   optimizeDeps: true
   * })
   */
  optimizeDeps?: boolean;
  /**
   * Name of the theme to use. Available options: `morpheme`, `legacy`.
   *
   * @default 'morpheme'
   * @example
   * // nuxt.config.ts
   * export default defineConfig({
   *  morpheme: {
   *   theme: 'morpheme'
   * })
   */
  theme: 'morpheme' | 'legacy';
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'morpheme',
    configKey: 'morpheme',
  },
  defaults: {
    css: false,
    sass: false,
    components: true,
    transpileDeps: true,
    loadFloatingVueStyles: true,
    loadDefaultStyles: true,
    darkMode: false,
    optimizeDeps: true,
    theme: 'morpheme',
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

    // optimize deps
    if (options.optimizeDeps) {
      if (nuxt.options.vite.optimizeDeps?.include) {
        nuxt.options.vite.optimizeDeps.include = [
          ...nuxt.options.vite.optimizeDeps?.include,
          ...optimizeDeps,
        ];
      }
    }

    if (options.theme === 'legacy') {
      // use css bundle
      if (options.css) {
        nuxt.options.css.push('@morpheme/ui/styles');
      }

      // use sass bundle
      if (options.sass) {
        nuxt.options.css.push('@morpheme/ui/styles.scss');
      }

      // load required styles when not using css bundle and not using sass bundle
      if (!options.css && !options.sass && options.loadDefaultStyles) {
        nuxt.options.css.push('@morpheme/menu/dist/style.css');
        nuxt.options.css.push('@morpheme/tooltip/dist/style.css');
        nuxt.options.css.push('@morpheme/theme/transition.css');
      }

      // load floating-vue styles
      if (options.loadFloatingVueStyles) {
        nuxt.options.css.push('floating-vue/dist/style.css');
      }

      // load dark mode styles
      if (options.darkMode) {
        nuxt.options.css.push('@morpheme/ui/styles.dark');
      }
    }

    if (options.theme === 'morpheme') {
      // if using sass, load sass bundle
      if (options.sass) {
        nuxt.options.css.push('@morpheme/themes/src/morpheme/main.scss');

        if (options.darkMode) {
          nuxt.options.css.push('@morpheme/themes/src/morpheme/main.dark.scss');
        }
      }

      if (options.css || !options.sass) {
        nuxt.options.css.push('@morpheme/themes/dist/morpheme/main.css');

        if (options.darkMode) {
          nuxt.options.css.push('@morpheme/themes/dist/morpheme/main.dark.css');
        }
      }
    }

    // register components
    if (options.components) {
      components.forEach((component) => {
        addComponent(component);
      });
    }

    // nuxt devtools
    addCustomTab({
      // unique identifier
      name: 'morpheme-ui',
      // title to display in the tab
      title: 'Morpheme UI',
      // any icon from Iconify, or a URL to an image
      icon: 'carbon:apps',
      // iframe view
      view: {
        type: 'iframe',
        src: 'https://gitsindonesia.github.io/ui-component/',
      },
    });
  },
});
