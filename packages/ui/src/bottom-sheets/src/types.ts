import type {Ref} from 'vue';

export type BottomSheetAction = {
  text?: string;
  color?: string;
  onClick: (ctx: BottomSheetActionHandler) => void;
  [x: string]: any;
};

export type VoidFn = () => void;
export type BottomSheetActionHandler = {
  close: VoidFn;
};

export interface BottomSheetMenu extends Record<string, any> {}
export interface BottomSheetMenusProps extends Record<string, any> {}

export type BottomSheetApi = {
  isOpen: Ref<boolean>;
  close: () => void;
  open: () => void;
  getHeight: () => number;
  setHeight: (height: string | number) => void;
  el: Ref<HTMLDivElement | undefined>;
  hideOnOverlayClick: Ref<boolean>;
};
