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
  withDirectives,
  vShow,
} from 'vue';
import CollapseTransition from '../transition/CollapseTransition.vue';

export interface CollapsibleContext {
  open: Ref<boolean>;
  show: () => void;
  hide: () => void;
  toggle: () => void;
}

export const CollapsibleInjectionKey = Symbol(
  'CollapsibleContext',
) as InjectionKey<CollapsibleContext>;

export function useCollapsible() {
  return inject<CollapsibleContext>(
    CollapsibleInjectionKey,
  ) as CollapsibleContext;
}

export const Collapsible = defineComponent({
  name: 'Collapsible',
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

    const context: CollapsibleContext = {
      open,
      show,
      hide,
      toggle,
    };

    provide(CollapsibleInjectionKey, context);

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

export const CollapsibleButton = defineComponent({
  name: 'CollapsibleButton',
  props: {
    as: {
      type: String,
      default: 'button',
    },
  },
  setup(props, {slots}) {
    const {toggle, open} = useCollapsible();

    return () =>
      h(
        props.as,
        {
          ...(props.as === 'button' ? {type: 'button'} : {role: 'button'}),
          onClick: toggle,
        },
        slots.default?.({
          open: unref(open),
          toggle,
        }),
      );
  },
});

export const CollapsibleContent = defineComponent({
  name: 'CollapsibleContent',
  props: {
    as: {
      type: String,
      default: 'div',
    },
  },
  setup(props, {slots}) {
    const {open} = useCollapsible();

    return () =>
      h(
        CollapseTransition,
        {},
        {
          default: () =>
            withDirectives(
              h(
                props.as,
                {
                  'data-state': open.value ? 'open' : 'closed',
                },
                slots.default?.({
                  open: unref(open),
                }),
              ),
              [[vShow, open.value]],
            ),
        },
      );
  },
});
