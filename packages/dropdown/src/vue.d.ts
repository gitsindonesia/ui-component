declare module '*.vue' {
  import type {DefineComponent} from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module '@morpheme/design-tokens/*';

declare module '@headlessui-float/vue';
