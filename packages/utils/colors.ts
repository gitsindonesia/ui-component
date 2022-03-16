export const themeColors = [
  'default',
  'primary',
  'secondary',
  'info',
  'success',
  'warning',
  'error',
  'dark',
];

export const getBgColor = (color: string, defaultColor = '') => {
  switch (color) {
    case 'primary':
      return 'bg-primary-500';
    case 'secondary':
      return 'bg-secondary-500';
    case 'info':
      return 'bg-info-500';
    case 'warning':
      return 'bg-warning-500';
    case 'success':
      return 'bg-success-500';
    case 'error':
      return 'bg-error-500';
    case 'default':
    default:
      return defaultColor || 'bg-gray-600';
  }
};

export const getTextColor = (color: string, defaultColor = '') => {
  switch (color) {
    case 'primary':
      return 'text-primary-500';
    case 'secondary':
      return 'text-secondary-500';
    case 'info':
      return 'text-info-500';
    case 'warning':
      return 'text-warning-500';
    case 'success':
      return 'text-success-500';
    case 'error':
      return 'text-error-500';
    case 'default':
    default:
      return defaultColor || 'text-gray-900';
  }
};
