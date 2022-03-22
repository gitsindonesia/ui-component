import {computed} from 'vue';

export type Sizes = 'xs' | 'sm' | 'default' | 'lg' | 'xl' | '' | string;

export const sizes = ['xs', 'sm', 'default', 'lg', 'xl'];

export const useTextSize = (size: string) => {
  const className = computed(() => {
    switch (size) {
      case 'xs':
        return 'text-xs';
      case 'sm':
        return 'text-sm';
      case 'lg':
        return 'text-lg';
      case 'xl':
        return 'text-xl';
      case 'base':
      case 'md':
        return 'text-base';
      default:
        return 'text-sm';
    }
  });

  return {class: className, size};
};

export const useHeight = (size: string) => {
  const className = computed(() => {
    switch (size) {
      case 'xs':
        return 'h-[30px]';
      case 'sm':
        return 'h-[36px]';
      case 'lg':
        return 'h-[50px]';
      case 'xl':
        return 'h-[60px]';
      case 'default':
      case 'md':
      case 'base':
      default:
        return 'h-[40px]';
    }
  });

  return {class: className, size};
};
