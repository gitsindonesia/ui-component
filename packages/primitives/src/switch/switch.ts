import type {
  Ref,
  InjectionKey} from 'vue';
import {
  defineComponent,
  provide,
  ref,
  inject,
  watch,
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
      default: false,
    },
    name: {
      type: String,
    },
    value: {
      type: String,
      default: 'on',
    },
    id: {
      type: String,
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

    const input = h('input', {
      type: 'checkbox',
      checked: checked.value,
      onChange: toggle,
      value: props.value,
      'aria-hidden': true,
      id: props.id || props.name,
      name: props.name,
      style: {
        position: 'absolute',
        opacity: 0,
        width: 0,
        height: 0,
        transform: 'translateX(-100%)',
        'pointer-events': 'none',
      },
    });

    return () => h('div', {}, [input, slots.default?.({checked, toggle})]);
  },
});

export const SwitchThumb = defineComponent({
  name: 'SwitchThumb',
  setup(_props, {slots}) {
    const {checked, toggle} = useSwitch();
    return () =>
      h(
        'button',
        {
          type: 'button',
          'aria-checked': checked.value,
          'data-state': checked.value ? 'checked' : 'unchecked',
          onClick: toggle,
        },
        slots.default?.(),
      );
  },
});

export const SwitchLabel = defineComponent({
  name: 'SwitchLabel',
  setup(_props, {slots}) {
    return () => h('label', {}, slots.default?.());
  },
});
