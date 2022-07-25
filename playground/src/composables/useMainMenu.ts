import {onMounted, onUnmounted, reactive} from 'vue';

export const state = reactive({
  isOpen: false,
});

export const useMainMenu = () => {
  const onResize = () => {
    state.isOpen = window.innerWidth > 600;
  };

  onMounted(() => {
    onResize();
    window.addEventListener('resize', onResize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', onResize);
  });

  return {state};
};
