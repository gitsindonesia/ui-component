export const navDrawerHeights = [
  'screen',
  'fit',
  'auto',
  'max',
  'screen-dvh',
  'screen-svh',
  'screen-lvh',
  'unset',
  'initial',
  'inherit',
  'min-content',
  'revert',
  'none',
] as const;

export type NavDrawerHeights = typeof navDrawerHeights[number];
