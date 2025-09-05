import type { DefaultColors } from '@morpheme/theme/defaultTheme';
import type { Ref} from 'vue';
import { inject } from 'vue';

export interface VBadgeContextApi {
  color?: Ref<DefaultColors>;
  outlined?: Ref<boolean>;
}

export const VBadgeInjectionKey = Symbol("VBadge");

export function useBadge() {
  const defaultValue = {
    color: undefined,
    outlined: undefined,
  }

  const context = inject(VBadgeInjectionKey, defaultValue) as VBadgeContextApi; 
  
  if (!context) {
    return;
  }

  return context
}