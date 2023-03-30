export const navDrawerHeights = [
  'screen',
  'fit',
  'auto',
  'max',
  'screen-dvh',
  'screen-svh',
  'screen-lvh',
] as const;

export type NavDrawerHeights = typeof navDrawerHeights[number];
