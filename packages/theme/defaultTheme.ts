export const defaultColors = [
  'primary',
  'secondary',
  'info',
  'warning',
  'success',
  'error',
] as const;

export type DefaultColors = typeof defaultColors[number];

export const primary = {
  DEFAULT: '#28A0F6',
  '50': '#D8EEFD',
  '100': '#C5E5FD',
  '200': '#9DD4FB',
  '300': '#76C3F9',
  '400': '#4FB1F8',
  '500': '#28A0F6',
  '600': '#0984DD',
  '700': '#0764A7',
  '800': '#054471',
  '900': '#02233B',
};

export const secondary = {
  DEFAULT: '#FF8B49',
  '50': '#FFFFFF',
  '100': '#FFF3EC',
  '200': '#FFD9C3',
  '300': '#FFBF9B',
  '400': '#FFA572',
  '500': '#FF8B49',
  '600': '#FF6711',
  '700': '#D84E00',
  '800': '#A03A00',
  '900': '#682600',
};

export const defaultSizes = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl'];
export type DefaultSizes = typeof defaultSizes[number];
