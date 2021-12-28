import {defineStore} from 'pinia';
import type {VToastProps} from './VToast';

export interface ToastState {
  show: boolean;
  message: string;
  options: VToastProps;
}

export const useToast = defineStore<'toast', ToastState>('toast', {
  state: () => ({
    show: false,
    message: '',
    options: {
      color: 'black',
      timeout: 3000,
    },
  }),
  getters: {
    message: (state) => state.message,
    show: (state) => state.show,
    options: (state) => state.options,
  },
  actions: {
    show({message, options}: {message: string; options: VToastProps}) {
      this.message = message;
      this.show = true;
      this.options = {...this.options, ...options};
    },
    reset() {
      this.show = false;
      this.message = '';
      this.options = {
        color: 'black',
        timeout: 3000,
      };
    },
  },
});
