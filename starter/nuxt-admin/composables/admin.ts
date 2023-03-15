import {breakpointsTailwind, useBreakpoints} from '@vueuse/core';

export const useAdminDrawer = () => useState('admin-drawer', () => true);

export const $breakpoints = useBreakpoints(breakpointsTailwind);

export const isMobile = $breakpoints.smaller('sm'); // only smaller than lg

export const hideDrawerOnMobile = () => {
  if (isMobile.value) {
    useAdminDrawer().value = false;
  }
};
