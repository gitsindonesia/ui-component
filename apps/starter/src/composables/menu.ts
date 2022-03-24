import {inject, Ref, ref, RenderFunction} from 'vue';

export type MenuComposition = {
  name: Ref<string>;
  menus: Ref<MenuItem[]>;
  add: (item: MenuItem) => void;
  prepend: (item: MenuItem) => void;
};

export type MenuItem = {
  text: string;
  to?: string;
  icon?: string | RenderFunction;
  hover?: boolean;
  children?: MenuItem[];

  [x: string]: any;
};

export const useMenus = (
  name: string,
  initialMenus: MenuItem[] = [],
): MenuComposition => {
  const menuName = ref(name);
  const menus = ref<MenuItem[]>(initialMenus);

  const add = (item: MenuItem) => {
    menus.value.push(item);
  };

  const prepend = (item: MenuItem) => {
    menus.value.unshift(item);
  };

  return {name: menuName, menus, add, prepend};
};
