declare module '*.vue' {
  import type {DefineComponent} from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// temp
declare module '@morpheme/design-tokens/js/tailwind' {
  const colors: Record<string, any>;
  export {colors};
}
