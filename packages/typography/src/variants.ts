export const textVariants = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  'display-xs',
  'display-sm',
  'display-md',
  'display-lg',
  'display-xl',
  'display-2xl',
] as const;

export type TextVariants = typeof textVariants[number];
