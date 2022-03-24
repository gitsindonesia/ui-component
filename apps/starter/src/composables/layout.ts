import {computed, ref} from 'vue';
import {useStore} from 'vuex';

export const useLayout = () => {
  const store = useStore();
  const fixed = ref(true);

  const mini = computed<boolean>({
    get() {
      return store.getters['layout/mini'];
    },
    set(val) {
      store.commit('layout/setMini', !val);
    },
  });

  return {mini, fixed};
};
