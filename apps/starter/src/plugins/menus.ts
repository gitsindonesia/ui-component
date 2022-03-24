import {inject} from 'vue';
import {MenuComposition, useMenus} from '~/composables';
import {useCmsMenu, useMainMenu} from '~/config';
import {UserPlugin} from '@gits-id/ui';

export type AppMenus = {
  [x: string]: MenuComposition;
};

export const install: UserPlugin = ({app}) => {
  const appMenus = {
    main: useMainMenu(),
    cms: useCmsMenu(),
  };
  app.provide('appMenus', appMenus);
  app.config.globalProperties.$menus = appMenus;
};

export const useMenu = (name: string, injectionKey = 'appMenus') => {
  const menuManager = inject(injectionKey) as AppMenus;

  if (!menuManager.hasOwnProperty(name)) {
    console.error(`Menu [${name}] is not registered`);
    return useMenus(name, []);
  }

  return menuManager[name];
};
