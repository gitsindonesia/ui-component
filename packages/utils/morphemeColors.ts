import {colors} from '@morpheme/design-tokens/js/tailwind';
import {get} from './helpers';

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

/**
 * Get color value by name.
 *
 * @param colorName string
 */
export function getColor(colorName: string) {
  const isCustomColor = !Object.keys(mappedColors).includes(colorName);

  let defaultColor = colorName ?? undefined;

  if (isCustomColor) {
    return get(colors, colorName, defaultColor);
  }

  return get(colors, mappedColors[colorName], defaultColor);
}
