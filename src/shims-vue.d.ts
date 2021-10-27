declare module '*.vue' {
  import type {DefineComponent} from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
// // declare module '@vue/runtime-core' {
// //   import type { AbstractContainer } from './container';
// //   export interface ComponentCustomProperties {
// //     $container: typeof AbstractContainer
// //   }
// // }
