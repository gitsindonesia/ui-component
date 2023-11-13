import {onClickOutside} from '@vueuse/core';
import type {
  Ref,
  InjectionKey} from 'vue';
import {
  defineComponent,
  h,
  provide,
  ref,
  inject,
  watch,
  unref,
} from 'vue';

export interface MenuContext {
  open: Ref<boolean>;
  show: () => void;
  hide: () => void;
  toggle: () => void;
  buttonRef?: Ref<HTMLElement>;
  registerButton: (button: Ref<HTMLElement>) => void;
  unregisterButton: () => void;
}

export const MenuInjectionKey = Symbol(
  'MenuContext',
) as InjectionKey<MenuContext>;

export function useMenu() {
  return inject<MenuContext>(MenuInjectionKey) as MenuContext;
}

export const Menu = defineComponent({
  name: 'Menu',
  props: {
    as: {
      type: String,
      default: 'div',
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  emits: {
    'update:modelValue'(_payload: boolean) {
      return true;
    },
  },
  setup(props, {slots, emit}) {
    const open = ref(props.modelValue);
    const buttonRef = ref();

    watch(
      () => props.modelValue,
      (newValue) => {
        open.value = newValue;
      },
    );

    watch(open, (newValue) => {
      if (newValue !== props.modelValue) {
        emit('update:modelValue', newValue);
      }
    });

    function show() {
      open.value = true;
    }

    function hide() {
      open.value = false;
    }

    function toggle() {
      open.value = !open.value;
    }

    function registerButton(button: Ref<HTMLElement>) {
      buttonRef.value = button;
    }

    function unregisterButton() {
      buttonRef.value = undefined;
    }

    const context: MenuContext = {
      open,
      show,
      hide,
      toggle,
      buttonRef,
      registerButton,
      unregisterButton,
    };

    provide(MenuInjectionKey, context);

    const defaultSlot = slots.default?.({
      open,
      show,
      hide,
      toggle,
    });

    const defaultRender = h(props.as, {}, defaultSlot);

    return () => (props.as === 'template' ? defaultSlot : defaultRender);
  },
});

export const MenuButton = defineComponent({
  name: 'MenuButton',
  props: {
    as: {
      type: String,
      default: 'button',
    },
  },
  setup(props, {slots}) {
    const {toggle, open, registerButton, unregisterButton} = useMenu();
    const target = ref();

    watch(target, (newValue) => {
      if (newValue) {
        registerButton(newValue);
      } else {
        unregisterButton();
      }
    });

    return () =>
      h(
        props.as,
        {
          ...(props.as === 'button' ? {type: 'button'} : {role: 'button'}),
          onClick: toggle,
          ref: target,
        },
        slots.default?.({
          open: unref(open),
          toggle,
        }),
      );
  },
});

export const MenuItems = defineComponent({
  name: 'MenuItems',
  props: {
    as: {
      type: String,
      default: 'ul',
    },
  },
  setup(props, {slots}) {
    const {toggle, hide, open, buttonRef} = useMenu();
    const target = ref();

    onClickOutside(target, (event) => {
      if (event.target !== buttonRef?.value) {
        hide();
      }
    });

    return () =>
      open.value
        ? h(
            props.as,
            {
              ref: target,
            },
            slots.default?.({
              open: unref(open),
              toggle,
              hide,
            }),
          )
        : null;
  },
});

export const MenuItem = defineComponent({
  name: 'MenuItem',
  props: {
    as: {
      type: String,
      default: 'li',
    },
  },
  setup(props, {slots}) {
    const {toggle, open, hide} = useMenu();

    return () =>
      h(
        props.as,
        {
          onClick: hide,
        },
        slots.default?.({
          open: unref(open),
          toggle,
        }),
      );
  },
});
