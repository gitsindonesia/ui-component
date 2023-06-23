import { DefaultColors } from '@morpheme/theme/defaultTheme';
import { Ref, inject } from 'vue';

export interface VBadgeContextApi {
  color?: Ref<DefaultColors>;
  outlined?: Ref<boolean>;
}

export const VBadgeInjectionKey = Symbol("VBadge");

export function useBadge() {
  const context = inject(VBadgeInjectionKey) as VBadgeContextApi; 
  if (!context) {
    return;
  }

  return context
}