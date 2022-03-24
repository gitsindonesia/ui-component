import {App} from 'vue';
import {useMenus} from '~/composables';
import {UserPlugin} from '@gits-id/ui';
import ShopLayout from './components/ShopLayout.vue';

export const install: UserPlugin = ({app}: {app: App}) => {
  /**
   * Register global components
   */
  app.component('ShopLayout', ShopLayout);

  /**
   * Add new menu to `main` menus.
   */
  app.config.globalProperties.$menus.main.add({
    text: 'Shop',
    to: '/shop',
  });

  /**
   * Register new `shop` menus.
   */
  app.config.globalProperties.$menus.shop = useMenus('shop', [
    {
      text: 'Home',
      to: '/shop',
    },
  ]);
  app.config.globalProperties.$menus.shop.add({
    text: 'Products',
    to: '/shop/products',
  });
};
