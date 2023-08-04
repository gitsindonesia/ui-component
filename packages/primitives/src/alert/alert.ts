import {
  defineComponent,
  h,
  provide,
  ref,
  inject,
  watch,
  Ref,
  InjectionKey,
} from 'vue';

export interface AlertContext {
  isOpen: Ref<boolean>;
  show: () => void;
  hide: () => void;
  toggle: () => void;
}

export const AlertInjectionKey = Symbol(
  'AlertContext',
) as InjectionKey<AlertContext>;

export function useAlert() {
  return inject<AlertContext>(AlertInjectionKey) as AlertContext;
}

export const Alert = defineComponent({
  name: 'Alert',
  props: {
    as: {
      type: String,
      default: 'div',
    },
    modelValue: {
      type: Boolean,
      default: true,
    },
  },
  emits: {
    'update:modelValue'(_payload: boolean) {
      return true;
    },
  },
  setup(props, {slots, emit}) {
    const isOpen = ref(props.modelValue);

    watch(
      () => props.modelValue,
      (newValue) => {
        isOpen.value = newValue;
      },
    );

    watch(isOpen, (newValue) => {
      if (newValue !== props.modelValue) {
        emit('update:modelValue', newValue);
      }
    });

    function show() {
      isOpen.value = true;
    }

    function hide() {
      isOpen.value = false;
    }

    function toggle() {
      isOpen.value = !isOpen.value;
    }

    const context: AlertContext = {
      isOpen,
      show,
      hide,
      toggle,
    };

    provide(AlertInjectionKey, context);

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
