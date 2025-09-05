import type { Ref} from 'vue';
import { inject } from 'vue';

export interface VListContextApi {
  hidePrepend?: Ref<boolean>;
  hideAppend?: Ref<boolean>;
  shaped?: Ref<boolean>;
  rounded?: Ref<boolean>;
  tile?: Ref<boolean>;
  hover?: Ref<boolean>;
  flush?: Ref<boolean>;
  dense?: Ref<boolean>;
  small?: Ref<boolean>;
  large?: Ref<boolean>;
  hideText?: Ref<boolean>;

  [key: string]: any
}

export const VListInjectionKey = Symbol("VList");

export function useList() {
  const context = inject(VListInjectionKey) as VListContextApi; 
  if (!context) {
    console.error("VList injection was not found");
    return;
  }

  return context
}