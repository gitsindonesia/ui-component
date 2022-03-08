import {Module} from 'vuex';
import type {VToastProps} from './types';

export interface ToastState {
  show: boolean;
  message: string;
  options: VToastProps;
}

export const toastModule = <R>(): Module<ToastState, R> => ({
  namespaced: true,
  state: () => ({
    show: false,
    message: '',
    options: {
      color: 'black',
      timeout: 3000,
    },
  }),
  mutations: {
    show(state, {message, options}: {message: string; options: VToastProps}) {
      state.message = message;
      state.show = true;
      state.options = {...state.options, ...options};
    },
    reset(state) {
      state.show = false;
      state.message = '';
      state.options = {
        color: 'black',
        timeout: 3000,
      };
    },
  },
  getters: {
    message: (state) => state.message,
    show: (state) => state.show,
    options: (state) => state.options,
  },
});
