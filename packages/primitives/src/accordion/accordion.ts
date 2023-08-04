import {
  defineComponent,
  h,
  provide,
  ref,
  inject,
  watch,
  Ref,
  InjectionKey,
  PropType,
  unref,
} from 'vue';

export interface AccordionContext {
  addItem: (item: any) => void;
  removeItem: (item: any) => void;
}

export const AccordionInjectionKey = Symbol(
  'AccordionContext',
) as InjectionKey<AccordionContext>;

export function useAccordion() {
  return inject<AccordionContext>(AccordionInjectionKey) as AccordionContext;
}

export type AccordionType = 'single' | 'multiple';
export type AccordionDirection = 'ltr' | 'rtl';
export type AccordionOrientation = 'vertical' | 'horizontal';
export type AccordionValue = string | number | Array<string | number>;

export const Accordion = defineComponent({
  name: 'AccordionRoot',
  props: {
    type: {
      type: String as PropType<AccordionType>,
      default: 'single',
    },
    modelValue: {
      type: [String, Number, Array] as PropType<AccordionValue>,
    },
    defaultValue: {
      type: [String, Number, Array],
    },
    onChange: {
      type: Function as PropType<(value: string | number) => void>,
    },
    collapsible: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    dir: {
      type: String as PropType<AccordionDirection>,
      default: 'ltr',
    },
    orientation: {
      type: String as PropType<AccordionOrientation>,
      default: 'vertical',
    },
  },
  emits: {},
  setup(props, {slots, emit}) {
    const items = ref([]);

    function addItem(item: any) {
      items.value.push(item);
    }

    function removeItem(item: any) {
      const index = items.value.indexOf(item);
      items.value.splice(index, 1);
    }

    const context: AccordionContext = {
      items,
      addItem,
      removeItem,
    };

    provide(AccordionInjectionKey, context);

    return () => h('div', {}, slots.default?.());
  },
});

interface AccordionItemContext {
  itemRef: Ref<HTMLDivElement>;
  open: Ref<boolean>;
  toggle: () => void;
}

const AccordionItemInjectionKey = Symbol(
  'AccordionItem',
) as InjectionKey<AccordionItemContext>;

export function useAccordionItem() {
  return inject(AccordionItemInjectionKey) as AccordionItemContext;
}

export const AccordionItem = defineComponent({
  name: 'AccordionItem',
  props: {
    value: {
      type: [String, Number] as PropType<string | number>,
      required: true,
    },
  },
  emits: {},
  setup(props, {slots, emit}) {
    const itemRef = ref();
    const open = ref(false);

    const {addItem, removeItem} = useAccordion();

    function toggle() {
      open.value = !open.value;
    }

    watch(
      () => itemRef.value,
      (value) => {
        if (value) {
          addItem(value);
        } else {
          removeItem(value);
        }
      },
    );

    const context: AccordionItemContext = {
      itemRef,
      open,
      toggle,
    };

    provide(AccordionItemInjectionKey, context);

    return () =>
      h(
        'div',
        {ref: itemRef},
        slots.default?.({
          open: unref(open),
          toggle,
        }),
      );
  },
});

export const AccordionButton = defineComponent({
  name: 'AccordionButton',
  props: {},
  emits: {},
  setup(props, {slots, emit}) {
    const {toggle, open} = useAccordionItem();

    return () =>
      h(
        'button',
        {
          onClick: toggle,
        },
        slots.default?.({
          open: unref(open),
          toggle,
        }),
      );
  },
});

export const AccordionContent = defineComponent({
  name: 'AccordionContent',
  props: {},
  emits: {},
  setup(_props, {slots}) {
    const {open} = useAccordionItem();
    const contentRef = ref<HTMLDivElement>();

    return () =>
      h(
        'div',
        {
          ref: contentRef,
          'data-state': open.value ? 'open' : 'closed',
          style: {
            '--m-accordion-content-display': 'none',
            '--m-accordion-content-width':
              contentRef.value?.style?.width + 'px',
            '--m-accordion-content-height':
              contentRef.value?.style?.height + 'px' ?? 'auto',
          },
          hidden: !open.value,
        },
        slots.default?.({
          open: unref(open),
        }),
      );
  },
});
