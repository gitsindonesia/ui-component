import {resolve} from 'path';
import {fileURLToPath} from 'url';
import {
  defineNuxtModule,
  addPlugin,
  addComponent,
  type AddComponentOptions,
  logger,
} from '@nuxt/kit';
import {addCustomTab} from '@nuxt/devtools-kit';

const transpile = [
  '@headlessui/vue',
  '@heroicons/vue',
  '@morpheme/ui',
  '@morpheme/theme',
  '@morpheme/utils',
  '@morpheme/tailwind-config',
  '@morpheme/tailwind-components',
  '@morpheme/themes',
  '@morpheme/layouts',
  '@morpheme/pages',
  '@morpheme/services',
  '@morpheme/primitives',
  '@morpheme/editor',
  '@morpheme/quill-editor',
  '@morpheme/logo',
  '@morpheme/iconsax',
  '@morpheme/toast-store',
  '@morpheme/blocks',
  '@morpheme/text',
  '@morpheme/progress-circular',
  '@morpheme/design-tokens',
  '@morpheme/divider',
  '@morpheme/popover',
  'floating-vue',
];

const optimizeDeps = ['yup', '@morpheme/design-tokens'];

const components: AddComponentOptions[] = [
  {
    name: 'Alert',
    filePath: '@morpheme/ui/src/components/alert/VAlert.vue',
  },
  {
    name: 'AlertTitle',
    filePath: '@morpheme/ui/src/components/alert/VAlertTitle.vue',
  },
  {
    name: 'AppBar',
    filePath: '@morpheme/ui/src/components/app-bar/VAppBar.vue',
  },
  {
    name: 'Autocomplete',
    filePath: '@morpheme/ui/src/components/autocomplete/VAutocomplete.vue',
  },
  {
    name: 'Avatar',
    filePath: '@morpheme/ui/src/components/avatar/Avatar.vue',
  },
  {
    name: 'AvatarGroup',
    filePath: '@morpheme/ui/src/components/avatar/AvatarGroup.vue',
  },
  {
    name: 'Badge',
    filePath: '@morpheme/ui/src/components/badge/VBadge.vue',
  },
  {
    name: 'BadgeGroup',
    filePath: '@morpheme/ui/src/components/badge/VBadgeGroup.vue',
  },
  {
    name: 'BadgeContent',
    filePath: '@morpheme/ui/src/components/badge/VBadgeContent.vue',
  },
  {
    name: 'Breadcrumbs',
    filePath: '@morpheme/ui/src/components/breadcrumbs/VBreadcrumbs.vue',
  },
  {
    name: 'BreadcrumbsItem',
    filePath: '@morpheme/ui/src/components/breadcrumbs/VBreadcrumbsItem.vue',
  },
  {
    name: 'BreadcrumbsDivider',
    filePath: '@morpheme/ui/src/components/breadcrumbs/VBreadcrumbsDivider.vue',
  },
  {
    name: 'Btn',
    filePath: '@morpheme/ui/src/components/button/VBtn.vue',
  },
  {
    name: 'Button',
    filePath: '@morpheme/ui/src/components/button/VBtn.vue',
  },
  {
    name: 'BtnGroup',
    filePath: '@morpheme/ui/src/components/button/VBtnGroup.vue',
  },
  {
    name: 'BtnToolbar',
    filePath: '@morpheme/ui/src/components/button/VBtnToolbar.vue',
  },
  {
    name: 'Card',
    filePath: '@morpheme/ui/src/components/card/VCard.vue',
  },
  {
    name: 'CardHeader',
    filePath: '@morpheme/ui/src/components/card/VCardHeader.vue',
  },
  {
    name: 'CardFooter',
    filePath: '@morpheme/ui/src/components/card/VCardFooter.vue',
  },
  {
    name: 'CardBody',
    filePath: '@morpheme/ui/src/components/card/VCardBody.vue',
  },
  {
    name: 'CardImage',
    filePath: '@morpheme/ui/src/components/card/VCardImage.vue',
  },
  {
    name: 'Collapsible',
    filePath: '@morpheme/ui/src/components/collapsible/VCollapsible.vue',
  },
  {
    name: 'Collapse',
    filePath: '@morpheme/ui/src/components/collapsible/VCollapse.vue',
  },
  {
    name: 'Container',
    filePath: '@morpheme/ui/src/components/container/VContainer.vue',
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
    filePath: '@morpheme/ui/src/components/dropdown/Dropdown.vue',
  },
  {
    name: 'DropdownButton',
    filePath: '@morpheme/ui/src/components/dropdown/DropdownButton.vue',
  },
  {
    name: 'DropdownItem',
    filePath: '@morpheme/ui/src/components/dropdown/DropdownItem.vue',
  },
  {
    name: 'DropdownBtn',
    filePath: '@morpheme/ui/src/components/dropdown/DropdownBtn.vue',
  },
  {
    name: 'DropdownHeader',
    filePath: '@morpheme/ui/src/components/dropdown/DropdownHeader.vue',
  },
  {
    name: 'DropdownActivator',
    filePath: '@morpheme/ui/src/components/dropdown/DropdownActivator.vue',
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
    filePath: '@morpheme/ui/src/components/forms/input/VInput.vue',
  },
  /**
   * @deprecated
   */
  {
    name: 'InputGroup',
    filePath: '@morpheme/ui/src/components/forms/input/VInputGroup.vue',
  },
  {
    name: 'InputRange',
    filePath: '@morpheme/ui/src/components/forms/input/VInputRange.vue',
  },
  {
    name: 'Checkbox',
    filePath: '@morpheme/ui/src/components/forms/checkbox/VCheckbox.vue',
  },
  {
    name: 'FileUpload',
    filePath: '@morpheme/ui/src/components/forms/file-input/VFileUpload.vue',
  },
  {
    name: 'FileUploadActions',
    filePath: '@morpheme/ui/src/components/forms/file-input/VFileUploadActions.vue',
  },
  {
    name: 'FileUploadButtonTheme',
    filePath: '@morpheme/ui/src/components/forms/file-input/VFileUploadButtonTheme.vue',
  },
  {
    name: 'FileUploadDefaultTheme',
    filePath: '@morpheme/ui/src/components/forms/file-input/VFileUploadDefaultTheme.vue',
  },
  {
    name: 'FileUploadDropzoneTheme',
    filePath: '@morpheme/ui/src/components/forms/file-input/VFileUploadDropzoneTheme.vue',
  },
  {
    name: 'FileUploadImageTheme',
    filePath: '@morpheme/ui/src/components/forms/file-input/VFileUploadImageTheme.vue',
  },
  {
    name: 'FormGroup',
    filePath: '@morpheme/ui/src/components/forms/form-group/VFormGroup.vue',
  },
  {
    name: 'FormSelect',
    filePath: '@morpheme/ui/src/components/forms/form-select/VFormSelect.vue',
  },
  {
    name: 'Radio',
    filePath: '@morpheme/ui/src/components/forms/radio/VRadio.vue',
  },
  {
    name: 'RadioGroup',
    filePath: '@morpheme/ui/src/components/forms/radio/VRadioGroup.vue',
  },
  {
    name: 'Textarea',
    filePath: '@morpheme/ui/src/components/forms/textarea/Textarea.vue',
  },
  {
    name: 'Icon',
    filePath: '@morpheme/ui/src/components/icon/Icon.vue',
  },
  {
    name: 'Logo',
    filePath: '@morpheme/logo/src/VLogo.vue',
  },
  {
    name: 'List',
    filePath: '@morpheme/ui/src/components/list/List.vue',
  },
  {
    name: 'ListItem',
    filePath: '@morpheme/ui/src/components/list/ListItem.vue',
  },
  {
    name: 'ListCollapse',
    filePath: '@morpheme/ui/src/components/list/ListCollapse.vue',
  },
  {
    name: 'ListItemDivider',
    filePath: '@morpheme/ui/src/components/list/ListItemDivider.vue',
  },
  {
    name: 'ListItemHeader',
    filePath: '@morpheme/ui/src/components/list/ListItemHeader.vue',
  },
  {
    name: 'ListItemTitle',
    filePath: '@morpheme/ui/src/components/list/ListItemTitle.vue',
  },
  {
    name: 'ListItemSubTitle',
    filePath: '@morpheme/ui/src/components/list/ListItemSubTitle.vue',
  },
  {
    name: 'ListItemContent',
    filePath: '@morpheme/ui/src/components/list/ListItemContent.vue',
  },
  {
    name: 'Menu',
    filePath: '@morpheme/ui/src/components/menu/VMenu.vue',
  },
  {
    name: 'MenuItem',
    filePath: '@morpheme/ui/src/components/menu/VMenuItem.vue',
  },
  {
    name: 'MenuIcon',
    filePath: '@morpheme/ui/src/components/menu/VMenuIcon.vue',
  },
  {
    name: 'MenuTooltip',
    filePath: '@morpheme/ui/src/components/menu/VMenuTooltip.vue',
  },
  {
    name: 'Menus',
    filePath: '@morpheme/ui/src/components/menus/VMenus.vue',
  },
  {
    name: 'MenusItem',
    filePath: '@morpheme/ui/src/components/menus/VMenusItem.vue',
  },
  {
    name: 'Modal',
    filePath: '@morpheme/ui/src/components/modal/VModal.vue',
  },
  {
    name: 'ModalGroup',
    filePath: '@morpheme/ui/src/components/modal/Modal.vue',
  },
  {
    name: 'ModalHeader',
    filePath: '@morpheme/ui/src/components/modal/ModalHeader.vue',
  },
  {
    name: 'ModalBody',
    filePath: '@morpheme/ui/src/components/modal/ModalBody.vue',
  },
  {
    name: 'ModalFooter',
    filePath: '@morpheme/ui/src/components/modal/ModalFooter.vue',
  },
  {
    name: 'ModalTitle',
    filePath: '@morpheme/ui/src/components/modal/ModalTitle.vue',
  },
  {
    name: 'MultiSelect',
    filePath: '@morpheme/ui/src/components/multi-select/VMultiSelect.vue',
  },
  {
    name: 'NavDrawer',
    filePath: '@morpheme/ui/src/components/nav-drawer/NavDrawer.vue',
  },
  /**
   * @deprecated
   */
  {
    name: 'Navbar',
    filePath: '@morpheme/ui/src/components/navbar/VNavbar.vue',
  },
  {
    name: 'Pagination',
    filePath: '@morpheme/ui/src/components/pagination/VPagination.vue',
  },
  {
    name: 'PaginationItem',
    filePath: '@morpheme/ui/src/components/pagination/VPaginationItem.vue',
  },
  {
    name: 'ProgressBar',
    filePath: '@morpheme/ui/src/components/progress/VProgressBar.vue',
  },
  {
    name: 'Select',
    filePath: '@morpheme/ui/src/components/select/VSelect.vue',
  },
  {
    name: 'Shimmer',
    filePath: '@morpheme/ui/src/components/shimmer/Shimmer.vue',
  },
  {
    name: 'Spinner',
    filePath: '@morpheme/ui/src/components/spinner/VSpinner.vue',
  },
  {
    name: 'Switch',
    filePath: '@morpheme/ui/src/components/switch/VSwitch.vue',
  },
  {
    name: 'DataTable',
    filePath: '@morpheme/ui/src/components/table/VDataTable.vue',
  },
  {
    name: 'DataTablePagination',
    filePath: '@morpheme/ui/src/components/table/VDataTablePagination.vue',
  },
  {
    name: 'Tabs',
    filePath: '@morpheme/ui/src/components/tabs/VTabs.vue',
  },
  {
    name: 'Tab',
    filePath: '@morpheme/ui/src/components/tabs/VTab.vue',
  },
  {
    name: 'TabsSlider',
    filePath: '@morpheme/ui/src/components/tabs/VTabsSlider.vue',
  },
  {
    name: 'TabGroup',
    filePath: '@morpheme/ui/src/components/tabs/VTabGroup.vue',
  },
  {
    name: 'TabList',
    filePath: '@morpheme/ui/src/components/tabs/VTabList.vue',
  },
  {
    name: 'TabItem',
    filePath: '@morpheme/ui/src/components/tabs/VTabItem.vue',
  },
  {
    name: 'TabPanels',
    filePath: '@morpheme/ui/src/components/tabs/VTabPanels.vue',
  },
  {
    name: 'TabPanel',
    filePath: '@morpheme/ui/src/components/tabs/VTabPanel.vue',
  },
  {
    name: 'Toast',
    filePath: '@morpheme/ui/src/components/toast/VToast.vue',
  },
  {
    name: 'Tooltip',
    filePath: '@morpheme/ui/src/components/tooltip/VTooltip.vue',
  },
  {
    name: 'Rating',
    filePath: '@morpheme/ui/src/components/rating/Rating.vue',
  },
  {
    name: 'BottomSheet',
    filePath: '@morpheme/ui/src/components/bottom-sheets/BottomSheet.vue',
  },
  {
    name: 'BottomSheetBody',
    filePath: '@morpheme/ui/src/components/bottom-sheets/BottomSheetBody.vue',
  },
  {
    name: 'BottomSheetFooter',
    filePath: '@morpheme/ui/src/components/bottom-sheets/BottomSheetFooter.vue',
  },
  {
    name: 'BottomSheetHeader',
    filePath: '@morpheme/ui/src/components/bottom-sheets/BottomSheetHeader.vue',
  },
  {
    name: 'BottomSheetMenus',
    filePath: '@morpheme/ui/src/components/bottom-sheets/BottomSheetMenus.vue',
  },
  {
    name: 'BottomSheetOverlay',
    filePath: '@morpheme/ui/src/components/bottom-sheets/BottomSheetOverlay.vue',
  },
  {
    name: 'BottomSheetHandle',
    filePath: '@morpheme/ui/src/components/bottom-sheets/BottomSheetHandle.vue',
  },
  {
    name: 'Text',
    filePath: '@morpheme/ui/src/components/text/VText.vue',
  },
  {
    name: 'AppShell',
    filePath: '@morpheme/ui/src/components/app-shell/VAppShell.vue',
  },
  {
    name: 'Main',
    filePath: '@morpheme/ui/src/components/app-shell/VMain.vue',
  },
  {
    name: 'ProgressCircular',
    filePath: '@morpheme/ui/src/components/progress-circlular/VProgressCircular.vue',
  },
  {
    name: 'Timeline',
    filePath: '@morpheme/ui/src/components/timeline/VTimeline.vue',
  },
  {
    name: 'TimelineDivider',
    filePath: '@morpheme/ui/src/components/timeline/VTimelineDivider.vue',
  },
  {
    name: 'TimelineItem',
    filePath: '@morpheme/ui/src/components/timeline/VTimelineItem.vue',
  },
  {
    name: 'TimelineItemDot',
    filePath: '@morpheme/ui/src/components/timeline/VTimelineItemDot.vue',
  },
  {
    name: 'TimelineItemContent',
    filePath: '@morpheme/ui/src/components/timeline/VTimelineItemContent.vue',
  },
  {
    name: 'Banner',
    filePath: '@morpheme/ui/src/components/banner/VBanner.vue',
  },
  {
    name: 'BannerText',
    filePath: '@morpheme/ui/src/components/banner/VBannerText.vue',
  },
  {
    name: 'Divider',
    filePath: '@morpheme/ui/src/components/divider/VDivider.vue',
  },
  {
    name: 'BottomNavigation',
    filePath: '@morpheme/ui/src/components/bottom-navigation/VBottomNavigation.vue',
  },
  {
    name: 'BottomNavigationItem',
    filePath: '@morpheme/ui/src/components/bottom-navigation/VBottomNavigationItem.vue',
  },
  {
    name: 'Popover',
    filePath: '@morpheme/ui/src/components/popover/VPopover.vue',
  },
  {
    name: 'PopoverButton',
    filePath: '@morpheme/ui/src/components/popover/VPopoverButton.vue',
  },
  {
    name: 'PopoverGroup',
    filePath: '@morpheme/ui/src/components/popover/VPopoverGroup.vue',
  },
  {
    name: 'PopoverOverlay',
    filePath: '@morpheme/ui/src/components/popover/VPopoverOverlay.vue',
  },
  {
    name: 'PopoverPanel',
    filePath: '@morpheme/ui/src/components/popover/VPopoverPanel.vue',
  },
  {
    name: 'Command',
    filePath: '@morpheme/ui/src/components/command/VCommand.vue',
  },
];

const experimentalComponents: AddComponentOptions[] = [
  {
    name: 'Select',
    filePath: '@morpheme/ui/src/components/select/Select.vue',
  },
  {
    name: 'Autocomplete',
    filePath: '@morpheme/ui/src/components/autocomplete/VAutocomplete.vue',
  },
  {
    name: 'Checkbox',
    filePath: '@morpheme/ui/src/components/forms/checkbox/Checkbox.vue',
  },
  {
    name: 'CheckboxField',
    filePath: '@morpheme/ui/src/components/forms/checkbox/CheckboxField.vue',
  },
  {
    name: 'FileInput',
    filePath: '@morpheme/ui/src/components/forms/file-input/FileInput.vue',
  },
  {
    name: 'FileInputButtonActivator',
    filePath: '@morpheme/ui/src/components/forms/file-input/FileInputButtonActivator.vue',
  },
  {
    name: 'FileInputDefaultActivator',
    filePath: '@morpheme/ui/src/components/forms/file-input/FileInputDefaultActivator.vue',
  },
  {
    name: 'FileInputField',
    filePath: '@morpheme/ui/src/components/forms/file-input/FileInputField.vue',
  },
  {
    name: 'FileInputItem',
    filePath: '@morpheme/ui/src/components/forms/file-input/FileInputItem.vue',
  },
  {
    name: 'FileInputItems',
    filePath: '@morpheme/ui/src/components/forms/file-input/FileInputItems.vue',
  },
  {
    name: 'FormSelect',
    filePath: '@morpheme/ui/src/components/forms/form-select/Select.vue',
  },
  {
    name: 'FormSelectInputField',
    filePath: '@morpheme/ui/src/components/forms/form-select/SelectField.vue',
  },
  {
    name: 'Input',
    filePath: '@morpheme/ui/src/components/forms/input/Input.vue',
  },
  {
    name: 'InputField',
    filePath: '@morpheme/ui/src/components/forms/input/InputField.vue',
  },
  {
    name: 'SelectOptions',
    filePath: '@morpheme/ui/src/components/forms/input/SelectOptions.vue',
  },
  {
    name: 'Radio',
    filePath: '@morpheme/ui/src/components/forms/radio/Radio.vue',
  },
  {
    name: 'Textarea',
    filePath: '@morpheme/ui/src/components/forms/textarea/TextareaInput.vue',
  },
  {
    name: 'TextareaField',
    filePath: '@morpheme/ui/src/components/forms/textarea/TextareaInputField.vue',
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
    addPlugin({
      src: resolve(runtimeDir, 'plugin'),
      mode: 'client'
    });

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
