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
  computed,
} from 'vue';

export interface AccordionContext {
  addItem: (item: AccordionItemData) => void;
  removeItem: (value: string | number) => void;
  toggleItem: (value: string | number) => void;
  getItem: (value: string | number) => AccordionItemData | undefined;
  items: Ref<AccordionItemData[]>;
  disabled: boolean;
  dir: AccordionDirection;
  orientation: AccordionOrientation;
}

export interface AccordionItemData {
  value: string | number;
  el: HTMLDivElement;
  open: boolean;
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
export type AccordionValue = string | number;

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
      type: [String, Number] as PropType<AccordionValue>,
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
  setup(props, {slots}) {
    const items = ref<AccordionItemData[]>([] as AccordionItemData[]);

    function addItem(item: AccordionItemData) {
      items.value.push({
        ...item,
        open: false,
      });
    }

    function removeItem(value: AccordionValue) {
      const index = items.value.findIndex((item) => item.value === value);
      if (index > -1) {
        items.value.splice(index, 1);
      }
    }

    function toggleItem(value: AccordionValue) {
      if (props.type === 'single') {
        items.value.forEach((item) => {
          if (item.value === value) {
            item.open = !item.open;
          } else {
            item.open = false;
          }
        });
      } else {
        items.value.forEach((item) => {
          if (item.value === value) {
            item.open = !item.open;
          }
        });
      }
    }

    function getItem(value: AccordionValue) {
      return items.value.find((item) => item.value === value);
    }

    const context: AccordionContext = {
      items,
      addItem,
      removeItem,
      toggleItem,
      getItem,
      disabled: props.disabled,
      dir: props.dir,
      orientation: props.orientation,
    };

    provide(AccordionInjectionKey, context);

    return () => h('div', {}, slots.default?.());
  },
});

interface AccordionItemContext {
  itemRef: Ref<HTMLDivElement>;
  open: Ref<boolean>;
  toggle: () => void;
  value: AccordionValue;
  item: Ref<AccordionItemData | undefined>;
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
  setup(props, {slots}) {
    const itemRef = ref();

    const {addItem, removeItem, toggleItem, getItem} = useAccordion();
    const item = computed(() => getItem(props.value));
    const open = computed(() => item.value?.open ?? false);

    function toggle() {
      toggleItem(props.value);
    }

    watch(
      () => itemRef.value,
      (newRef) => {
        if (newRef) {
          addItem({
            value: props.value,
            el: newRef,
            open: false,
          });
        } else {
          removeItem(props.value);
        }
      },
    );

    const context: AccordionItemContext = {
      itemRef,
      open,
      toggle,
      value: props.value,
      item,
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
  setup(_, {slots}) {
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
