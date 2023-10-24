import {
  defineComponent,
  provide,
  ref,
  inject,
  watch,
  Ref,
  InjectionKey,
  h,
  Teleport,
} from 'vue';

export interface DialogContext {
  open: Ref<boolean>;
  show: () => void;
  hide: () => void;
}

export const DialogInjectionKey = Symbol(
  'DialogContext',
) as InjectionKey<DialogContext>;

export function useDialog() {
  return inject<DialogContext>(DialogInjectionKey) as DialogContext;
}

export const Dialog = defineComponent({
  name: 'Dialog',
  props: {
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
  setup(props, { slots, emit }) {
    const open = ref(props.modelValue);

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

    const context: DialogContext = {
      open,
      show,
      hide,
    };

    provide(DialogInjectionKey, context);

    return () => h((Teleport as any), { to: 'body' }, slots.default?.({ open }));
  },
});

export const DialogTitle = defineComponent({
  name: 'DialogTitle',
  props: {
    as: {
      type: String,
      default: 'h2',
    },
  },
  setup(props, { slots }) {
    const { open } = useDialog();
    return () =>
      h(
        props.as,
        {
          'data-state': open.value ? 'open' : 'closed',
        },
        slots.default?.({
          open,
        }),
      );
  },
});

export const DialogDescription = defineComponent({
  name: 'DialogDescription',
  props: {
    as: {
      type: String,
      default: 'p',
    },
  },
  setup(props, { slots }) {
    const { open } = useDialog();
    return () =>
      h(
        props.as,
        {
          'data-state': open.value ? 'open' : 'closed',
        },
        slots.default?.({
          open,
        }),
      );
  },
});

export const DialogPanel = defineComponent({
  name: 'DialogPanel',
  props: {
    as: {
      type: String,
      default: 'div',
    },
  },
  setup(props, { slots }) {
    const { open } = useDialog();
    return () =>
      open.value
        ? h(
          props.as,
          {
            'data-state': open.value ? 'open' : 'closed',
            role: 'dialog',
          },
          slots.default?.({
            open,
          }),
        )
        : null;
  },
});

export const DialogContent = defineComponent({
  name: 'DialogContent',
  props: {
    as: {
      type: String,
      default: 'div',
    },
  },
  setup(props, { slots }) {
    const { open } = useDialog();
    return () =>
      open.value
        ? h(
          props.as,
          {
            'data-state': open.value ? 'open' : 'closed',
          },
          slots.default?.({
            open,
          }),
        )
        : null;
  },
});

export const DialogOverlay = defineComponent({
  name: 'DialogOverlay',
  props: {
    as: {
      type: String,
      default: 'div',
    },
  },
  setup(props, { slots }) {
    const { open } = useDialog();
    return () =>
      open.value
        ? h(
          props.as,
          {
            'data-state': open.value ? 'open' : 'closed',
          },
          slots.default?.({
            open,
          }),
        )
        : null;
  },
});
