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

export const fontWeightVariants = [
  'thin',
  'extrathin',
  'normal',
  'medium',
  'semibold',
  'bold',
  'extrabold',
  'black',
] as const;

export type FontWeightVariants = typeof fontWeightVariants[number];

export const colorVariants = [
  'primary',
  'warning',
  'error',
  'success',
] as const;

export type ColorVariants = typeof colorVariants[number] | string;

export const mappedColors: Record<ColorVariants | string, string> = {
  primary: 'primary.500',
  warning: 'warning.500',
  error: 'error.500',
  success: 'success.500',
};
