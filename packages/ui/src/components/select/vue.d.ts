declare module '*.vue' {
  import type {DefineComponent} from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// @headlessui-float/vue
declare module '@headlessui/vue';
declare module '@morpheme/design-tokens/*';
declare module '@morpheme/forms';
