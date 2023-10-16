import {resolve} from 'path';
import {fileURLToPath} from 'url';
import {
  defineNuxtModule,
  addPlugin,
  addComponent,
  AddComponentOptions,
  logger,
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
  '@morpheme/popover',
  'floating-vue',
];

const optimizeDeps = ['yup', '@morpheme/design-tokens'];

const components: AddComponentOptions[] = [
  {
    name: 'Alert',
    filePath: '@morpheme/alert/src/VAlert.vue',
  },
  {
    name: 'AlertTitle',
    filePath: '@morpheme/alert/src/VAlertTitle.vue',
  },
  {
    name: 'AppBar',
    filePath: '@morpheme/app-bar/src/VAppBar.vue',
  },
  {
    name: 'Autocomplete',
    filePath: '@morpheme/autocomplete/src/VAutocomplete.vue',
  },
  {
    name: 'Avatar',
    filePath: '@morpheme/avatar/src/Avatar.vue',
  },
  {
    name: 'AvatarGroup',
    filePath: '@morpheme/avatar/src/AvatarGroup.vue',
  },
  {
    name: 'Badge',
    filePath: '@morpheme/badge/src/VBadge.vue',
  },
  {
    name: 'BadgeGroup',
    filePath: '@morpheme/badge/src/VBadgeGroup.vue',
  },
  {
    name: 'BadgeContent',
    filePath: '@morpheme/badge/src/VBadgeContent.vue',
  },
  {
    name: 'Breadcrumbs',
    filePath: '@morpheme/breadcrumbs/src/VBreadcrumbs.vue',
  },
  {
    name: 'BreadcrumbsItem',
    filePath: '@morpheme/breadcrumbs/src/VBreadcrumbsItem.vue',
  },
  {
    name: 'BreadcrumbsDivider',
    filePath: '@morpheme/breadcrumbs/src/VBreadcrumbsDivider.vue',
  },
  {
    name: 'Btn',
    filePath: '@morpheme/button/src/VBtn.vue',
  },
  {
    name: 'Button',
    filePath: '@morpheme/button/src/VBtn.vue',
  },
  {
    name: 'BtnGroup',
    filePath: '@morpheme/button/src/VBtnGroup.vue',
  },
  {
    name: 'BtnToolbar',
    filePath: '@morpheme/button/src/VBtnToolbar.vue',
  },
  {
    name: 'Card',
    filePath: '@morpheme/card/src/VCard.vue',
  },
  {
    name: 'CardHeader',
    filePath: '@morpheme/card/src/VCardHeader.vue',
  },
  {
    name: 'CardFooter',
    filePath: '@morpheme/card/src/VCardFooter.vue',
  },
  {
    name: 'CardBody',
    filePath: '@morpheme/card/src/VCardBody.vue',
  },
  {
    name: 'CardImage',
    filePath: '@morpheme/card/src/VCardImage.vue',
  },
  {
    name: 'Collapsible',
    filePath: '@morpheme/collapsible/src/VCollapsible.vue',
  },
  {
    name: 'Collapse',
    filePath: '@morpheme/collapsible/src/VCollapse.vue',
  },
  {
    name: 'Container',
    filePath: '@morpheme/container/src/VContainer.vue',
  },
  {
    name: 'Row',
    filePath: '@morpheme/layouts/src/VRow.vue',
  },
  {
    name: 'Col',
    filePath: '@morpheme/layouts/src/VCol.vue',
  },
  {
    name: 'Dropdown',
    filePath: '@morpheme/dropdown/src/Dropdown.vue',
  },
  {
    name: 'DropdownButton',
    filePath: '@morpheme/dropdown/src/DropdownButton.vue',
  },
  {
    name: 'DropdownItem',
    filePath: '@morpheme/dropdown/src/DropdownItem.vue',
  },
  {
    name: 'DropdownBtn',
    filePath: '@morpheme/dropdown/src/DropdownBtn.vue',
  },
  {
    name: 'DropdownHeader',
    filePath: '@morpheme/dropdown/src/DropdownHeader.vue',
  },
  {
    name: 'DropdownActivator',
    filePath: '@morpheme/dropdown/src/DropdownActivator.vue',
  },
  {
    name: 'Editor',
    filePath: '@morpheme/editor/src/VEditor.vue',
  },
  {
    name: 'QuillEditor',
    filePath: '@morpheme/quill-editor/src/VQuillEditor.vue',
  },
  {
    name: 'Input',
    filePath: '@morpheme/forms/src/input/VInput.vue',
  },
  /**
   * @deprecated
   */
  {
    name: 'InputGroup',
    filePath: '@morpheme/forms/src/input/VInputGroup.vue',
  },
  {
    name: 'InputRange',
    filePath: '@morpheme/forms/src/input/VInputRange.vue',
  },
  {
    name: 'Checkbox',
    filePath: '@morpheme/forms/src/checkbox/VCheckbox.vue',
  },
  {
    name: 'FileUpload',
    filePath: '@morpheme/forms/src/file-input/VFileUpload.vue',
  },
  {
    name: 'FileUploadActions',
    filePath: '@morpheme/forms/src/file-input/VFileUploadActions.vue',
  },
  {
    name: 'FileUploadButtonTheme',
    filePath: '@morpheme/forms/src/file-input/VFileUploadButtonTheme.vue',
  },
  {
    name: 'FileUploadDefaultTheme',
    filePath: '@morpheme/forms/src/file-input/VFileUploadDefaultTheme.vue',
  },
  {
    name: 'FileUploadDropzoneTheme',
    filePath: '@morpheme/forms/src/file-input/VFileUploadDropzoneTheme.vue',
  },
  {
    name: 'FileUploadImageTheme',
    filePath: '@morpheme/forms/src/file-input/VFileUploadImageTheme.vue',
  },
  {
    name: 'FormGroup',
    filePath: '@morpheme/forms/src/form-group/VFormGroup.vue',
  },
  {
    name: 'FormSelect',
    filePath: '@morpheme/forms/src/form-select/VFormSelect.vue',
  },
  {
    name: 'Radio',
    filePath: '@morpheme/forms/src/radio/VRadio.vue',
  },
  {
    name: 'RadioGroup',
    filePath: '@morpheme/forms/src/radio/VRadioGroup.vue',
  },
  {
    name: 'Textarea',
    filePath: '@morpheme/forms/src/textarea/Textarea.vue',
  },
  {
    name: 'Icon',
    filePath: '@morpheme/icon/src/Icon.vue',
  },
  {
    name: 'Logo',
    filePath: '@morpheme/logo/src/VLogo.vue',
  },
  {
    name: 'List',
    filePath: '@morpheme/list/src/List.vue',
  },
  {
    name: 'ListItem',
    filePath: '@morpheme/list/src/ListItem.vue',
  },
  {
    name: 'ListCollapse',
    filePath: '@morpheme/list/src/ListCollapse.vue',
  },
  {
    name: 'ListItemDivider',
    filePath: '@morpheme/list/src/ListItemDivider.vue',
  },
  {
    name: 'ListItemHeader',
    filePath: '@morpheme/list/src/ListItemHeader.vue',
  },
  {
    name: 'ListItemTitle',
    filePath: '@morpheme/list/src/ListItemTitle.vue',
  },
  {
    name: 'ListItemSubTitle',
    filePath: '@morpheme/list/src/ListItemSubTitle.vue',
  },
  {
    name: 'ListItemContent',
    filePath: '@morpheme/list/src/ListItemContent.vue',
  },
  {
    name: 'Menu',
    filePath: '@morpheme/menu/src/VMenu.vue',
  },
  {
    name: 'MenuItem',
    filePath: '@morpheme/menu/src/VMenuItem.vue',
  },
  {
    name: 'MenuIcon',
    filePath: '@morpheme/menu/src/VMenuIcon.vue',
  },
  {
    name: 'MenuTooltip',
    filePath: '@morpheme/menu/src/VMenuTooltip.vue',
  },
  {
    name: 'Menus',
    filePath: '@morpheme/menus/src/VMenus.vue',
  },
  {
    name: 'MenusItem',
    filePath: '@morpheme/menus/src/VMenusItem.vue',
  },
  {
    name: 'Modal',
    filePath: '@morpheme/modal/src/VModal.vue',
  },
  {
    name: 'ModalGroup',
    filePath: '@morpheme/modal/src/Modal.vue',
  },
  {
    name: 'ModalHeader',
    filePath: '@morpheme/modal/src/ModalHeader.vue',
  },
  {
    name: 'ModalBody',
    filePath: '@morpheme/modal/src/ModalBody.vue',
  },
  {
    name: 'ModalFooter',
    filePath: '@morpheme/modal/src/ModalFooter.vue',
  },
  {
    name: 'ModalTitle',
    filePath: '@morpheme/modal/src/ModalTitle.vue',
  },
  {
    name: 'MultiSelect',
    filePath: '@morpheme/multi-select/src/VMultiSelect.vue',
  },
  {
    name: 'NavDrawer',
    filePath: '@morpheme/nav-drawer/src/NavDrawer.vue',
  },
  /**
   * @deprecated
   */
  {
    name: 'Navbar',
    filePath: '@morpheme/navbar/src/VNavbar.vue',
  },
  {
    name: 'Pagination',
    filePath: '@morpheme/pagination/src/VPagination.vue',
  },
  {
    name: 'PaginationItem',
    filePath: '@morpheme/pagination/src/VPaginationItem.vue',
  },
  {
    name: 'ProgressBar',
    filePath: '@morpheme/progress-bar/src/VProgressBar.vue',
  },
  {
    name: 'Select',
    filePath: '@morpheme/select/src/VSelect.vue',
  },
  {
    name: 'Shimmer',
    filePath: '@morpheme/shimmer/src/Shimmer.vue',
  },
  {
    name: 'Spinner',
    filePath: '@morpheme/spinner/src/VSpinner.vue',
  },
  {
    name: 'Switch',
    filePath: '@morpheme/switch/src/VSwitch.vue',
  },
  {
    name: 'DataTable',
    filePath: '@morpheme/table/src/VDataTable.vue',
  },
  {
    name: 'DataTablePagination',
    filePath: '@morpheme/table/src/VDataTablePagination.vue',
  },
  {
    name: 'Tabs',
    filePath: '@morpheme/tabs/src/VTabs.vue',
  },
  {
    name: 'Tab',
    filePath: '@morpheme/tabs/src/VTab.vue',
  },
  {
    name: 'TabsSlider',
    filePath: '@morpheme/tabs/src/VTabsSlider.vue',
  },
  {
    name: 'TabGroup',
    filePath: '@morpheme/tabs/src/VTabGroup.vue',
  },
  {
    name: 'TabList',
    filePath: '@morpheme/tabs/src/VTabList.vue',
  },
  {
    name: 'TabItem',
    filePath: '@morpheme/tabs/src/VTabItem.vue',
  },
  {
    name: 'TabPanels',
    filePath: '@morpheme/tabs/src/VTabPanels.vue',
  },
  {
    name: 'TabPanel',
    filePath: '@morpheme/tabs/src/VTabPanel.vue',
  },
  {
    name: 'Toast',
    filePath: '@morpheme/toast/src/VToast.vue',
  },
  {
    name: 'Tooltip',
    filePath: '@morpheme/tooltip/src/VTooltip.vue',
  },
  {
    name: 'Rating',
    filePath: '@morpheme/rating/src/Rating.vue',
  },
  {
    name: 'BottomSheet',
    filePath: '@morpheme/bottom-sheet/src/BottomSheet.vue',
  },
  {
    name: 'BottomSheetBody',
    filePath: '@morpheme/bottom-sheet/src/BottomSheetBody.vue',
  },
  {
    name: 'BottomSheetFooter',
    filePath: '@morpheme/bottom-sheet/src/BottomSheetFooter.vue',
  },
  {
    name: 'BottomSheetHeader',
    filePath: '@morpheme/bottom-sheet/src/BottomSheetHeader.vue',
  },
  {
    name: 'BottomSheetMenus',
    filePath: '@morpheme/bottom-sheet/src/BottomSheetMenus.vue',
  },
  {
    name: 'BottomSheetOverlay',
    filePath: '@morpheme/bottom-sheet/src/BottomSheetOverlay.vue',
  },
  {
    name: 'BottomSheetHandle',
    filePath: '@morpheme/bottom-sheet/src/BottomSheetHandle.vue',
  },
  {
    name: 'Text',
    filePath: '@morpheme/text/src/VText.vue',
  },
  {
    name: 'AppShell',
    filePath: '@morpheme/app-shell/src/VAppShell.vue',
  },
  {
    name: 'Main',
    filePath: '@morpheme/app-shell/src/VMain.vue',
  },
  {
    name: 'ProgressCircular',
    filePath: '@morpheme/progress-circular/src/VProgressCircular.vue',
  },
  {
    name: 'Timeline',
    filePath: '@morpheme/timeline/src/VTimeline.vue',
  },
  {
    name: 'TimelineDivider',
    filePath: '@morpheme/timeline/src/VTimelineDivider.vue',
  },
  {
    name: 'TimelineItem',
    filePath: '@morpheme/timeline/src/VTimelineItem.vue',
  },
  {
    name: 'TimelineItemDot',
    filePath: '@morpheme/timeline/src/VTimelineItemDot.vue',
  },
  {
    name: 'TimelineItemContent',
    filePath: '@morpheme/timeline/src/VTimelineItemContent.vue',
  },
  {
    name: 'Banner',
    filePath: '@morpheme/banner/src/VBanner.vue',
  },
  {
    name: 'BannerText',
    filePath: '@morpheme/banner/src/VBannerText.vue',
  },
  {
    name: 'Divider',
    filePath: '@morpheme/divider/src/VDivider.vue',
  },
  {
    name: 'BottomNavigation',
    filePath: '@morpheme/bottom-navigation/src/VBottomNavigation.vue',
  },
  {
    name: 'BottomNavigationItem',
    filePath: '@morpheme/bottom-navigation/src/VBottomNavigationItem.vue',
  },
  {
    name: 'Popover',
    filePath: '@morpheme/popover/src/VPopover.vue',
  },
  {
    name: 'PopoverButton',
    filePath: '@morpheme/popover/src/VPopoverButton.vue',
  },
  {
    name: 'PopoverGroup',
    filePath: '@morpheme/popover/src/VPopoverGroup.vue',
  },
  {
    name: 'PopoverOverlay',
    filePath: '@morpheme/popover/src/VPopoverOverlay.vue',
  },
  {
    name: 'PopoverPanel',
    filePath: '@morpheme/popover/src/VPopoverPanel.vue',
  },
  {
    name: 'Command',
    filePath: '@morpheme/command/src/VCommand.vue',
  },
];

const experimentalComponents: AddComponentOptions[] = [
  {
    name: 'Select',
    filePath: '@morpheme/select/src/Select.vue',
  },
  {
    name: 'Autocomplete',
    filePath: '@morpheme/autocomplete/src/Autocomplete.vue',
  },
  {
    name: 'Checkbox',
    filePath: '@morpheme/forms/src/checkbox/Checkbox.vue',
  },
  {
    name: 'CheckboxField',
    filePath: '@morpheme/forms/src/checkbox/CheckboxField.vue',
  },
  {
    name: 'FileInput',
    filePath: '@morpheme/forms/src/file-input/FileInput.vue',
  },
  {
    name: 'FileInputButtonActivator',
    filePath: '@morpheme/forms/src/file-input/FileInputButtonActivator.vue',
  },
  {
    name: 'FileInputDefaultActivator',
    filePath: '@morpheme/forms/src/file-input/FileInputDefaultActivator.vue',
  },
  {
    name: 'FileInputField',
    filePath: '@morpheme/forms/src/file-input/FileInputField.vue',
  },
  {
    name: 'FileInputItem',
    filePath: '@morpheme/forms/src/file-input/FileInputItem.vue',
  },
  {
    name: 'FileInputItems',
    filePath: '@morpheme/forms/src/file-input/FileInputItems.vue',
  },
  {
    name: 'FormSelect',
    filePath: '@morpheme/forms/src/form-select/Select.vue',
  },
  {
    name: 'FormSelectInputField',
    filePath: '@morpheme/forms/src/form-select/SelectField.vue',
  },
  {
    name: 'Input',
    filePath: '@morpheme/forms/src/input/Input.vue',
  },
  {
    name: 'InputField',
    filePath: '@morpheme/forms/src/input/InputField.vue',
  },
  {
    name: 'SelectOptions',
    filePath: '@morpheme/forms/src/input/SelectOptions.vue',
  },
  {
    name: 'Radio',
    filePath: '@morpheme/forms/src/radio/Radio.vue',
  },
  {
    name: 'Textarea',
    filePath: '@morpheme/forms/src/textarea/TextareaInput.vue',
  },
  {
    name: 'TextareaField',
    filePath: '@morpheme/forms/src/textarea/TextareaInputField.vue',
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
      icon: 'carbon:apps',
      // iframe view
      view: {
        type: 'iframe',
        src: 'https://gitsindonesia.github.io/ui-component/',
      },
    });
  },
});
