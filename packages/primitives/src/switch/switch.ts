import {
  defineComponent,
  provide,
  ref,
  inject,
  watch,
  Ref,
  InjectionKey,
  h,
} from 'vue';

export interface SwitchContext {
  checked: Ref<boolean>;
  toggle: () => void;
}

export const SwitchInjectionKey = Symbol(
  'SwitchContext',
) as InjectionKey<SwitchContext>;

export function useSwitch() {
  return inject<SwitchContext>(SwitchInjectionKey) as SwitchContext;
}

export const Switch = defineComponent({
  name: 'Switch',
  props: {
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
    const checked = ref(props.modelValue);

    watch(
      () => props.modelValue,
      (newValue) => {
        checked.value = newValue;
      },
    );

    watch(checked, (newValue) => {
      if (newValue !== props.modelValue) {
        emit('update:modelValue', newValue);
      }
    });

    function toggle() {
      checked.value = !checked.value;
    }

    const context: SwitchContext = {
      checked,
      toggle,
    };

    provide(SwitchInjectionKey, context);

    return () =>
      h(
        'button',
        {
          type: 'button',
          'aria-checked': checked.value,
          onClick: toggle,
        },
        slots.default?.({
          checked,
          toggle,
        }),
      );
  },
});

export const SwitchLabel = defineComponent({
  name: 'SwitchLabel',
  setup(_props, {slots}) {
    return () => h('label', {}, slots.default?.());
  },
});

export const SwitchGroup = defineComponent({
  name: 'SwitchGroup',
  setup(_props, {slots}) {
    return () => h('div', {}, slots.default?.());
  },
});
