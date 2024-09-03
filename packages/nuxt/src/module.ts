import { resolve } from 'path';
import { fileURLToPath } from 'url';
import {
  defineNuxtModule,
  addPlugin,
  addComponent,
  type AddComponentOptions,
  logger,
  installModule,
} from '@nuxt/kit';
import { addCustomTab } from '@nuxt/devtools-kit';
import FloatingVue from 'floating-vue';

const transpile = [
  '@headlessui/vue',
  '@heroicons/vue',
  '@morpheme/ui',
  '@morpheme/utils',
  '@morpheme/design-tokens',
  'floating-vue',
  '@floating-ui/dom',
  '@floating-ui/core',
  '@floating-ui/utils'
];

const optimizeDeps = [
  'yup',
  '@morpheme/design-tokens',
  '@vueup/vue-quill',
  'quill'
];

const components: AddComponentOptions[] = [
  {
    name: 'Alert',
    filePath: '@morpheme/ui/src/alert/src/VAlert.vue',
  },
  {
    name: 'AlertTitle',
    filePath: '@morpheme/ui/src/alert/src/VAlertTitle.vue',
  },
  {
    name: 'AppBar',
    filePath: '@morpheme/ui/src/app-bar/src/VAppBar.vue',
  },
  {
    name: 'Autocomplete',
    filePath: '@morpheme/ui/src/autocomplete/src/VAutocomplete.vue',
  },
  {
    name: 'Avatar',
    filePath: '@morpheme/ui/src/avatar/src/Avatar.vue',
  },
  {
    name: 'AvatarGroup',
    filePath: '@morpheme/ui/src/avatar/src/AvatarGroup.vue',
  },
  {
    name: 'Badge',
    filePath: '@morpheme/ui/src/badge/src/VBadge.vue',
  },
  {
    name: 'BadgeGroup',
    filePath: '@morpheme/ui/src/badge/src/VBadgeGroup.vue',
  },
  {
    name: 'BadgeContent',
    filePath: '@morpheme/ui/src/badge/src/VBadgeContent.vue',
  },
  {
    name: 'Breadcrumbs',
    filePath: '@morpheme/ui/src/breadcrumbs/src/VBreadcrumbs.vue',
  },
  {
    name: 'BreadcrumbsItem',
    filePath: '@morpheme/ui/src/breadcrumbs/src/VBreadcrumbsItem.vue',
  },
  {
    name: 'BreadcrumbsDivider',
    filePath: '@morpheme/ui/src/breadcrumbs/src/VBreadcrumbsDivider.vue',
  },
  {
    name: 'Btn',
    filePath: '@morpheme/ui/src/button/src/VBtn.vue',
  },
  {
    name: 'Button',
    filePath: '@morpheme/ui/src/button/src/VBtn.vue',
  },
  {
    name: 'BtnGroup',
    filePath: '@morpheme/ui/src/button/src/VBtnGroup.vue',
  },
  {
    name: 'BtnToolbar',
    filePath: '@morpheme/ui/src/button/src/VBtnToolbar.vue',
  },
  {
    name: 'Card',
    filePath: '@morpheme/ui/src/card/src/VCard.vue',
  },
  {
    name: 'CardHeader',
    filePath: '@morpheme/ui/src/card/src/VCardHeader.vue',
  },
  {
    name: 'CardFooter',
    filePath: '@morpheme/ui/src/card/src/VCardFooter.vue',
  },
  {
    name: 'CardBody',
    filePath: '@morpheme/ui/src/card/src/VCardBody.vue',
  },
  {
    name: 'CardImage',
    filePath: '@morpheme/ui/src/card/src/VCardImage.vue',
  },
  {
    name: 'Collapsible',
    filePath: '@morpheme/ui/src/collapsible/src/VCollapsible.vue',
  },
  {
    name: 'Collapse',
    filePath: '@morpheme/ui/src/collapsible/src/VCollapse.vue',
  },
  {
    name: 'Container',
    filePath: '@morpheme/ui/src/container/src/VContainer.vue',
  },
  {
    name: 'Row',
    filePath: '@morpheme/ui/src/layouts/src/VRow.vue',
  },
  {
    name: 'Col',
    filePath: '@morpheme/ui/src/layouts/src/VCol.vue',
  },
  {
    name: 'Dropdown',
    filePath: '@morpheme/ui/src/dropdown/src/Dropdown.vue',
  },
  {
    name: 'DropdownButton',
    filePath: '@morpheme/ui/src/dropdown/src/DropdownButton.vue',
  },
  {
    name: 'DropdownItem',
    filePath: '@morpheme/ui/src/dropdown/src/DropdownItem.vue',
  },
  {
    name: 'DropdownBtn',
    filePath: '@morpheme/ui/src/dropdown/src/DropdownBtn.vue',
  },
  {
    name: 'DropdownHeader',
    filePath: '@morpheme/ui/src/dropdown/src/DropdownHeader.vue',
  },
  {
    name: 'DropdownActivator',
    filePath: '@morpheme/ui/src/dropdown/src/DropdownActivator.vue',
  },
  {
    name: 'Editor',
    filePath: '@morpheme/ui/src/editor/src/VEditor.vue',
  },
  {
    name: 'QuillEditor',
    filePath: '@morpheme/ui/src/quill-editor/src/VQuillEditor.vue',
  },
  {
    name: 'Input',
    filePath: '@morpheme/ui/src/forms/src/input/VInput.vue',
  },
  /**
   * @deprecated
   */
  {
    name: 'InputGroup',
    filePath: '@morpheme/ui/src/forms/src/input/VInputGroup.vue',
  },
  {
    name: 'InputRange',
    filePath: '@morpheme/ui/src/forms/src/input/VInputRange.vue',
  },
  {
    name: 'Checkbox',
    filePath: '@morpheme/ui/src/forms/src/checkbox/VCheckbox.vue',
  },
  {
    name: 'FileUpload',
    filePath: '@morpheme/ui/src/forms/src/file-input/VFileUpload.vue',
  },
  {
    name: 'FileUploadActions',
    filePath: '@morpheme/ui/src/forms/src/file-input/VFileUploadActions.vue',
  },
  {
    name: 'FileUploadButtonTheme',
    filePath: '@morpheme/ui/src/forms/src/file-input/VFileUploadButtonTheme.vue',
  },
  {
    name: 'FileUploadDefaultTheme',
    filePath: '@morpheme/ui/src/forms/src/file-input/VFileUploadDefaultTheme.vue',
  },
  {
    name: 'FileUploadDropzoneTheme',
    filePath: '@morpheme/ui/src/forms/src/file-input/VFileUploadDropzoneTheme.vue',
  },
  {
    name: 'FileUploadImageTheme',
    filePath: '@morpheme/ui/src/forms/src/file-input/VFileUploadImageTheme.vue',
  },
  {
    name: 'FormGroup',
    filePath: '@morpheme/ui/src/forms/src/form-group/VFormGroup.vue',
  },
  {
    name: 'FormSelect',
    filePath: '@morpheme/ui/src/forms/src/form-select/VFormSelect.vue',
  },
  {
    name: 'Radio',
    filePath: '@morpheme/ui/src/forms/src/radio/VRadio.vue',
  },
  {
    name: 'RadioGroup',
    filePath: '@morpheme/ui/src/forms/src/radio/VRadioGroup.vue',
  },
  {
    name: 'Textarea',
    filePath: '@morpheme/ui/src/forms/src/textarea/Textarea.vue',
  },
  {
    name: 'Icon',
    filePath: '@morpheme/ui/src/icon/src/Icon.vue',
  },
  {
    name: 'Logo',
    filePath: '@morpheme/ui/src/logo/src/VLogo.vue',
  },
  {
    name: 'List',
    filePath: '@morpheme/ui/src/list/src/List.vue',
  },
  {
    name: 'ListItem',
    filePath: '@morpheme/ui/src/list/src/ListItem.vue',
  },
  {
    name: 'ListCollapse',
    filePath: '@morpheme/ui/src/list/src/ListCollapse.vue',
  },
  {
    name: 'ListItemDivider',
    filePath: '@morpheme/ui/src/list/src/ListItemDivider.vue',
  },
  {
    name: 'ListItemHeader',
    filePath: '@morpheme/ui/src/list/src/ListItemHeader.vue',
  },
  {
    name: 'ListItemTitle',
    filePath: '@morpheme/ui/src/list/src/ListItemTitle.vue',
  },
  {
    name: 'ListItemSubTitle',
    filePath: '@morpheme/ui/src/list/src/ListItemSubTitle.vue',
  },
  {
    name: 'ListItemContent',
    filePath: '@morpheme/ui/src/list/src/ListItemContent.vue',
  },
  {
    name: 'Menu',
    filePath: '@morpheme/ui/src/menu/src/VMenu.vue',
  },
  {
    name: 'MenuItem',
    filePath: '@morpheme/ui/src/menu/src/VMenuItem.vue',
  },
  {
    name: 'MenuIcon',
    filePath: '@morpheme/ui/src/menu/src/VMenuIcon.vue',
  },
  {
    name: 'MenuTooltip',
    filePath: '@morpheme/ui/src/menu/src/VMenuTooltip.vue',
  },
  {
    name: 'Menus',
    filePath: '@morpheme/ui/src/menus/src/VMenus.vue',
  },
  {
    name: 'MenusItem',
    filePath: '@morpheme/ui/src/menus/src/VMenusItem.vue',
  },
  {
    name: 'Modal',
    filePath: '@morpheme/ui/src/modal/src/VModal.vue',
  },
  {
    name: 'ModalGroup',
    filePath: '@morpheme/ui/src/modal/src/Modal.vue',
  },
  {
    name: 'ModalHeader',
    filePath: '@morpheme/ui/src/modal/src/ModalHeader.vue',
  },
  {
    name: 'ModalBody',
    filePath: '@morpheme/ui/src/modal/src/ModalBody.vue',
  },
  {
    name: 'ModalFooter',
    filePath: '@morpheme/ui/src/modal/src/ModalFooter.vue',
  },
  {
    name: 'ModalTitle',
    filePath: '@morpheme/ui/src/modal/src/ModalTitle.vue',
  },
  {
    name: 'MultiSelect',
    filePath: '@morpheme/ui/src/multi-select/src/VMultiSelect.vue',
  },
  {
    name: 'NavDrawer',
    filePath: '@morpheme/ui/src/nav-drawer/src/NavDrawer.vue',
  },
  /**
   * @deprecated
   */
  {
    name: 'Navbar',
    filePath: '@morpheme/ui/src/navbar/src/VNavbar.vue',
  },
  {
    name: 'Pagination',
    filePath: '@morpheme/ui/src/pagination/src/VPagination.vue',
  },
  {
    name: 'PaginationItem',
    filePath: '@morpheme/ui/src/pagination/src/VPaginationItem.vue',
  },
  {
    name: 'ProgressBar',
    filePath: '@morpheme/ui/src/progress/src/VProgressBar.vue',
  },
  {
    name: 'Select',
    filePath: '@morpheme/ui/src/select/src/VSelect.vue',
  },
  {
    name: 'Shimmer',
    filePath: '@morpheme/ui/src/shimmer/src/Shimmer.vue',
  },
  {
    name: 'Spinner',
    filePath: '@morpheme/ui/src/spinner/src/VSpinner.vue',
  },
  {
    name: 'Switch',
    filePath: '@morpheme/ui/src/switch/src/VSwitch.vue',
  },
  {
    name: 'DataTable',
    filePath: '@morpheme/ui/src/table/src/VDataTable.vue',
  },
  {
    name: 'DataTablePagination',
    filePath: '@morpheme/ui/src/table/src/VDataTablePagination.vue',
  },
  {
    name: 'Tabs',
    filePath: '@morpheme/ui/src/tabs/src/VTabs.vue',
  },
  {
    name: 'Tab',
    filePath: '@morpheme/ui/src/tabs/src/VTab.vue',
  },
  {
    name: 'TabsSlider',
    filePath: '@morpheme/ui/src/tabs/src/VTabsSlider.vue',
  },
  {
    name: 'TabGroup',
    filePath: '@morpheme/ui/src/tabs/src/VTabGroup.vue',
  },
  {
    name: 'TabList',
    filePath: '@morpheme/ui/src/tabs/src/VTabList.vue',
  },
  {
    name: 'TabItem',
    filePath: '@morpheme/ui/src/tabs/src/VTabItem.vue',
  },
  {
    name: 'TabPanels',
    filePath: '@morpheme/ui/src/tabs/src/VTabPanels.vue',
  },
  {
    name: 'TabPanel',
    filePath: '@morpheme/ui/src/tabs/src/VTabPanel.vue',
  },
  {
    name: 'Toast',
    filePath: '@morpheme/ui/src/toast/src/VToast.vue',
  },
  {
    name: 'Tooltip',
    filePath: '@morpheme/ui/src/tooltip/src/VTooltip.vue',
  },
  {
    name: 'Rating',
    filePath: '@morpheme/ui/src/rating/src/Rating.vue',
  },
  {
    name: 'BottomSheet',
    filePath: '@morpheme/ui/src/bottom-sheets/src/BottomSheet.vue',
  },
  {
    name: 'BottomSheetBody',
    filePath: '@morpheme/ui/src/bottom-sheets/src/BottomSheetBody.vue',
  },
  {
    name: 'BottomSheetFooter',
    filePath: '@morpheme/ui/src/bottom-sheets/src/BottomSheetFooter.vue',
  },
  {
    name: 'BottomSheetHeader',
    filePath: '@morpheme/ui/src/bottom-sheets/src/BottomSheetHeader.vue',
  },
  {
    name: 'BottomSheetMenus',
    filePath: '@morpheme/ui/src/bottom-sheets/src/BottomSheetMenus.vue',
  },
  {
    name: 'BottomSheetOverlay',
    filePath: '@morpheme/ui/src/bottom-sheets/src/BottomSheetOverlay.vue',
  },
  {
    name: 'BottomSheetHandle',
    filePath: '@morpheme/ui/src/bottom-sheets/src/BottomSheetHandle.vue',
  },
  {
    name: 'Text',
    filePath: '@morpheme/ui/src/text/src/VText.vue',
  },
  {
    name: 'AppShell',
    filePath: '@morpheme/ui/src/app-shell/src/VAppShell.vue',
  },
  {
    name: 'Main',
    filePath: '@morpheme/ui/src/app-shell/src/VMain.vue',
  },
  {
    name: 'ProgressCircular',
    filePath: '@morpheme/ui/src/progress-circular/src/VProgressCircular.vue',
  },
  {
    name: 'Timeline',
    filePath: '@morpheme/ui/src/timeline/src/VTimeline.vue',
  },
  {
    name: 'TimelineDivider',
    filePath: '@morpheme/ui/src/timeline/src/VTimelineDivider.vue',
  },
  {
    name: 'TimelineItem',
    filePath: '@morpheme/ui/src/timeline/src/VTimelineItem.vue',
  },
  {
    name: 'TimelineItemDot',
    filePath: '@morpheme/ui/src/timeline/src/VTimelineItemDot.vue',
  },
  {
    name: 'TimelineItemContent',
    filePath: '@morpheme/ui/src/timeline/src/VTimelineItemContent.vue',
  },
  {
    name: 'Banner',
    filePath: '@morpheme/ui/src/banner/src/VBanner.vue',
  },
  {
    name: 'BannerText',
    filePath: '@morpheme/ui/src/banner/src/VBannerText.vue',
  },
  {
    name: 'Divider',
    filePath: '@morpheme/ui/src/divider/src/VDivider.vue',
  },
  {
    name: 'BottomNavigation',
    filePath: '@morpheme/ui/src/bottom-navigation/src/VBottomNavigation.vue',
  },
  {
    name: 'BottomNavigationItem',
    filePath: '@morpheme/ui/src/bottom-navigation/src/VBottomNavigationItem.vue',
  },
  {
    name: 'Popover',
    filePath: '@morpheme/ui/src/popover/src/VPopover.vue',
  },
  {
    name: 'PopoverButton',
    filePath: '@morpheme/ui/src/popover/src/VPopoverButton.vue',
  },
  {
    name: 'PopoverGroup',
    filePath: '@morpheme/ui/src/popover/src/VPopoverGroup.vue',
  },
  {
    name: 'PopoverOverlay',
    filePath: '@morpheme/ui/src/popover/src/VPopoverOverlay.vue',
  },
  {
    name: 'PopoverPanel',
    filePath: '@morpheme/ui/src/popover/src/VPopoverPanel.vue',
  },
  {
    name: 'Command',
    filePath: '@morpheme/ui/src/command/src/VCommand.vue',
  },
];

const experimentalComponents: AddComponentOptions[] = [
  {
    name: 'Select',
    filePath: '@morpheme/ui/src/select/src/Select.vue',
  },
  {
    name: 'Autocomplete',
    filePath: '@morpheme/ui/src/autocomplete/src/Autocomplete.vue',
  },
  {
    name: 'Checkbox',
    filePath: '@morpheme/ui/src/forms/src/checkbox/Checkbox.vue',
  },
  {
    name: 'CheckboxField',
    filePath: '@morpheme/ui/src/forms/src/checkbox/CheckboxField.vue',
  },
  {
    name: 'FileInput',
    filePath: '@morpheme/ui/src/forms/src/file-input/FileInput.vue',
  },
  {
    name: 'FileInputButtonActivator',
    filePath: '@morpheme/ui/src/forms/src/file-input/FileInputButtonActivator.vue',
  },
  {
    name: 'FileInputDefaultActivator',
    filePath: '@morpheme/ui/src/forms/src/file-input/FileInputDefaultActivator.vue',
  },
  {
    name: 'FileInputField',
    filePath: '@morpheme/ui/src/forms/src/file-input/FileInputField.vue',
  },
  {
    name: 'FileInputItem',
    filePath: '@morpheme/ui/src/forms/src/file-input/FileInputItem.vue',
  },
  {
    name: 'FileInputItems',
    filePath: '@morpheme/ui/src/forms/src/file-input/FileInputItems.vue',
  },
  {
    name: 'FormSelect',
    filePath: '@morpheme/ui/src/forms/src/form-select/Select.vue',
  },
  {
    name: 'FormSelectInputField',
    filePath: '@morpheme/ui/src/forms/src/form-select/SelectField.vue',
  },
  {
    name: 'Input',
    filePath: '@morpheme/ui/src/forms/src/input/Input.vue',
  },
  {
    name: 'InputField',
    filePath: '@morpheme/ui/src/forms/src/input/InputField.vue',
  },
  {
    name: 'SelectOptions',
    filePath: '@morpheme/ui/src/forms/src/input/SelectOptions.vue',
  },
  {
    name: 'Radio',
    filePath: '@morpheme/ui/src/forms/src/radio/Radio.vue',
  },
  {
    name: 'Textarea',
    filePath: '@morpheme/ui/src/forms/src/textarea/TextareaInput.vue',
  },
  {
    name: 'TextareaField',
    filePath: '@morpheme/ui/src/forms/src/textarea/TextareaInputField.vue',
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
  /**
   * Determine whether to use experimental components.
   *
   * @default false
   * @example
   * // nuxt.config.ts
   * export default defineConfig({
   * morpheme: {
   *  experimentalComponents: true
   * })
   */
  experimentalComponents: boolean;
  /**
   * Component prefix.
   *
   * @default 'V'
   * @example
   * // nuxt.config.ts
   * export default defineConfig({
   * morpheme: {
   * prefix: 'M'
   * })
   */
  prefix: string;
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
    experimentalComponents: false,
    prefix: 'V',
  },
  setup(options, nuxt) {
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url));
    nuxt.options.build.transpile.push(runtimeDir);
    addPlugin(resolve(runtimeDir, 'plugin'));

    // install floating-vue
    installModule('floating-vue/nuxt')

    FloatingVue.options.themes = {
      'tooltip-black': {
        $extend: 'tooltip',
        $resetCss: true,
        disposeTimeout: 100000,
      },
      'tooltip-white': {
        $extend: 'tooltip',
        $resetCss: true,
        disposeTimeout: 100000,
      },
    }

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
        // nuxt.options.css.push('@morpheme/menu/dist/style.css');
        // nuxt.options.css.push('@morpheme/tooltip/dist/style.css');
        // nuxt.options.css.push('@morpheme/theme/transition.css');
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

      if (options.css) {
        nuxt.options.css.push('@morpheme/themes/dist/morpheme/main.css');

        if (options.darkMode) {
          nuxt.options.css.push('@morpheme/themes/dist/morpheme/main.dark.css');
        }
      }
    }

    // register components
    if (options.components) {
      components.forEach((component) => {
        addComponent({
          name: `${options.prefix}${component.name}`,
          filePath: component.filePath,
        });
      });
    }

    // register experimental components
    if (options.experimentalComponents) {
      logger.warn(
        'Experimental components are not production ready. Use at your own risk.',
      );

      experimentalComponents.forEach((component) => {
        addComponent({
          name: `${options.prefix}${component.name}`,
          filePath: component.filePath,
        });
      });
    }

    // nuxt devtools
    addCustomTab({
      // unique identifier
      name: 'morpheme-ui',
      // title to display in the tab
      title: 'Morpheme UI',
      // any icon from Iconify, or a URL to an image
      icon: 'https://ui.morpheme.design/morpheme-logo.png',
      // iframe view
      view: {
        type: 'iframe',
        src: 'https://gitsindonesia.github.io/ui-component/',
      },
    });
  },
});
