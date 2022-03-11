import {useStore} from 'vuex';
import {VToastProps} from './types';

export const useToast = () => {
  const store = useStore();

  const show = (message: string, options?: Partial<VToastProps>) => {
    store.commit('toast/show', {message, options});
  };

  const reset = () => {
    store.commit('toast/reset');
  };

  const confirm = (message: string, options: Partial<VToastProps>) => {
    show(message, {
      type: 'question',
      actions: true,
      confirm: true,
      placement: 'center',
      hideXIcon: true,
      overlay: true,
      timeout: 0,
      color: '',
      persistent: true,
      ...options,
    });
  };

  const confirmDelete = (message: string, options: Partial<VToastProps>) => {
    confirm(message, {
      confirmColor: 'error',
      confirmText: 'Delete',
      closeText: 'Cancel',
      ...options,
    });
  };

  return {show, reset, confirm, confirmDelete};
};
