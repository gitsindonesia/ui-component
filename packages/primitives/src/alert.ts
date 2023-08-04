import {defineComponent, h, provide, ref, useSlots, inject} from 'vue';

export const AlertContext = Symbol('AlertContext');
export const AlertGroupContext = Symbol('AlertGroupContext');

export function useAlert() {
  return inject(AlertContext);
}

export function useAlertGroup() {
  return inject(AlertGroupContext);
}

export const AlertGroup = defineComponent({
  name: 'AlertGroup',
  setup() {
    const slots = useSlots();
    const isOpen = ref(false);
    const context = {
      isOpen,
    };
    provide(AlertGroupContext, context);
    return () => slots.default?.();
  },
});

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

    return () =>
      isOpen.value
        ? h(
            props.as,
            {
              role: 'alert',
            },
            slots.default?.({
              isOpen,
              show,
              hide,
              toggle,
            }),
          )
        : null;
  },
});
