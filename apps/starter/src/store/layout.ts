import {defineStore} from 'pinia';

export const useLayout = defineStore('layout', {
  state: () => ({
    mini: false,
    fixed: false,
  }),
  getters: {
    mini: (s) => s.mini,
  },
  actions: {
    setMini(val: boolean) {
      this.mini = val;
    },
    toggleMini() {
      this.mini = !this.mini;
    },
  },
});
