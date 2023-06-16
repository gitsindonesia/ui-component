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
    console.error("VBadge injection was not found");
    return;
  }

  return context
}