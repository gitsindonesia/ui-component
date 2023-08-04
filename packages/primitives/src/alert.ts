import {defineComponent, h, provide, ref, inject} from 'vue';

export const AlertContext = Symbol('AlertContext');

export function useAlert() {
  return inject(AlertContext);
}

export const Alert = defineComponent({
  name: 'Alert',
  props: {
    as: {
      type: String,
      default: 'div',
    },
  },
  setup(props, {slots}) {
    const isOpen = ref(true);

    function show() {
      isOpen.value = true;
    }

    function hide() {
      isOpen.value = false;
    }

    function toggle() {
      isOpen.value = !isOpen.value;
    }

    const context = {
      isOpen,
      show,
      hide,
      toggle,
    };

    provide(AlertContext, context);

    const defaultSlot = slots.default?.({
      isOpen,
      show,
      hide,
      toggle,
    });

    const defaultRender = h(
      props.as,
      {
        role: 'alert',
      },
      defaultSlot,
    );

    return () =>
      isOpen.value
        ? props.as === 'template'
          ? defaultSlot
          : defaultRender
        : null;
  },
});
