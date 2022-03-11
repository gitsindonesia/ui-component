import {defineStore} from 'pinia';
import type {VToastProps} from './types';

export const useToastStore = defineStore('toast', {
  state: () => ({
    isOpen: false,
    message: '',
    options: {
      color: 'black',
      timeout: 3000,
    },
  }),
  getters: {},
  actions: {
    show(message: string, options?: Partial<VToastProps>) {
      this.message = message;
      this.isOpen = true;
      this.options = {...this.options, ...options};
    },
    confirm(message: string, options?: Partial<VToastProps>) {
      return this.show(message, {
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
    },
    confirmDelete(message: string, options?: Partial<VToastProps>) {
      return this.confirm(message, {
        confirmColor: 'error',
        confirmText: 'Delete',
        closeText: 'Cancel',
        ...options,
      });
    },
  },
});
