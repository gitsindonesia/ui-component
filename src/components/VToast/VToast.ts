export type ToastTypes = 'success' | 'error' | 'warning' | 'question';

export type ToastPlacement =
  | 'center'
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end';

export type VToastEvent = {
  open: () => void;
  close: () => void;
  startLoading: () => void;
  finishLoading: () => void;
};

export type VToastProps = {
  modelValue?: boolean;
  title?: string;
  confirm?: boolean;
  confirmColor?: string;
  confirmProps?: {};
  confirmText?: string;
  closeText?: string;
  closeProps?: {};
  headerClass?: string;
  bodyClass?: string;
  actionsClass?: string;
  placement?: ToastPlacement;
  actions?: boolean;
  timeout?: number;
  type?: ToastTypes;
  hideXIcon?: boolean;
  overlay?: boolean;
  color?: string;
  loading?: boolean;
  persistent?: boolean;
  onConfirm?: (e: VToastEvent) => void;
};
