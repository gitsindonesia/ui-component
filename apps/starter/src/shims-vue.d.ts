declare module '*.vue' {
  import type {DefineComponent} from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
// declare module '@vue/runtime-core' {
//   import type {AppMenus} from './plugins/menus';
//   export interface ComponentCustomProperties {
//     $menus: AppMenus;
//   }
// }
