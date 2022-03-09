declare module '*.vue' {
  import type {DefineComponent} from 'src/vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
