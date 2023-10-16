<script setup lang="ts">
import {
  nextTick,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  PropType,
  provide,
  ref,
  toRefs,
  watch,
  readonly,
} from 'vue';
import VBtn from '@morpheme/button';
import Icon from '@morpheme/icon';
import VTab from './VTab.vue';
import VTabsSlider from './VTabsSlider.vue';
import type {TabVariants} from './variants';
import {VTabsApiSymbol} from './api';

const props = defineProps({
  modelValue: {
    type: [Number, String],
    default: 0,
  },
  items: {
    type: Array as PropType<Record<string, any>[]>,
    default: () => [],
  },
  itemText: {
    type: String,
    default: 'text',
  },
  color: {
    type: String as PropType<
      | 'gray'
      | 'primary'
      | 'secondary'
      | 'info'
      | 'warning'
      | 'success'
      | 'error'
      | string
    >,
    default: 'primary',
  },
  showArrows: {
    type: Boolean,
    default: false,
  },
  centerActive: {
    type: Boolean,
    default: false,
  },
  removeable: {
    type: Boolean,
    default: false,
  },
  vertical: {
    type: Boolean,
    default: false,
  },
  defaultWrapperClass: {
    type: String,
    default: '',
  },
  wrapperClass: {
    type: String,
    default: '',
  },
  hideSlider: {
    type: Boolean,
    default: false,
  },
  activeClass: {
    type: String,
    default: 'font-semibold',
  },
  inactiveClass: {
    type: String,
    default: '',
  },
  defaultClass: {
    type: String,
    default: '',
  },
  contentClass: {
    type: String,
    default: '',
  },
  sliderClass: {
    type: String,
    default: '',
  },
  removeIcon: {
    type: String,
    default: 'heroicons:trash-solid',
  },
  removeIconSize: {
    type: String,
    default: 'md',
  },
  variant: {
    type: String as PropType<TabVariants>,
    default: 'underline',
  },
  grow: {
    type: Boolean,
    default: false,
  },
});

const {
  modelValue,
  items,
  itemText,
  showArrows,
  centerActive,
  removeable,
  vertical,
  defaultWrapperClass,
  wrapperClass,
  hideSlider,
  activeClass,
  defaultClass,
  contentClass,
  inactiveClass,
} = toRefs(props);

const emit = defineEmits([
  'update:modelValue',
  'update:items',
  'change',
  'remove',
]);

const selected = ref(modelValue.value);
const tabRefs = ref<HTMLElement[]>([]);
const tabContent = ref<HTMLDivElement>();
const tabSlider = ref<HTMLDivElement>();
const observer = ref();

watch(tabContent, (val, prev) => {
  if (prev) {
    observer.value.disconnect();
  }

  observer.value.observe(val as HTMLElement, {
    characterData: true,
    attributes: true,
    childList: true,
    subtree: true,
  });
});

watch(modelValue, (val) => {
  setSlider(val as number);
});

const setTabRef = (el: any) => {
  if (el) {
    tabRefs.value.push(el);
  }
};

onBeforeUpdate(() => {
  tabRefs.value = [];
});

const moveNavigation = (val: any) => {
  if (tabContent.value) {
    (tabContent.value as any).scrollLeft =
      (tabContent.value as any).scrollLeft + val;
  }
};

const onTabClicked = ({index, event}: any) => {
  selected.value = index;

  const el = event.target;
  const tabEl = el.parentElement;
  const parent = el.offsetParent;
  const nextEl = tabEl.nextSibling;
  const prevEl = tabEl.previousSibling;

  if (!tabEl) return;

  if (centerActive.value) {
    const left = el.offsetLeft;
    const width = el.offsetWidth;
    const parentWidth = parent.offsetWidth;
    const position = left + width / 2 - parentWidth / 2;
    (tabContent.value as HTMLElement).scrollTo({
      left: position,
    });
  } else {
    if (parent.children[parent.children.length - 1] === el) {
      moveNavigation(parent.offsetWidth);
    } else if (nextEl && nextEl.offsetLeft > parent.offsetWidth) {
      moveNavigation(nextEl.offsetWidth);
    } else if (prevEl && prevEl.offsetLeft < el.offsetLeft) {
      moveNavigation(tabEl.offsetWidth);
    }
  }
};

const setSlider = (index: number) => {
  if (hideSlider.value) return;

  nextTick(() => {
    const el = tabRefs.value[index];
    if (!el) {
      console.warn('Tab item not found', el);
      return;
    }
    if (tabSlider.value) {
      if (vertical.value) {
        tabSlider.value.style.top = el.offsetTop + 'px';
        tabSlider.value.style.height = el.offsetHeight + 'px';
      } else {
        tabSlider.value.style.left = el.offsetLeft + 'px';
        tabSlider.value.style.width = el.offsetWidth + 'px';
      }
    }
  });
};

onMounted(() => {
  observer.value = new MutationObserver(() => {
    setSlider(+selected.value);
  });
  setSlider(+selected.value);
});

onBeforeUnmount(() => {
  observer.value.disconnect();
});

watch(selected, (value) => {
  emit('update:modelValue', value);
  emit('change', value);

  setSlider(+value);
});

watch(modelValue, (value) => {
  selected.value = value;
});

const previous = () => moveNavigation(-200);

const next = () => moveNavigation(200);

const onTabRemoved = (index: number) => {
  const list = items?.value.filter((e, idx) => idx !== index);

  if (index < list.length) {
    selected.value = index;
  } else {
    selected.value = list.length - 1;
  }

  emit('update:items', list);
  emit('remove', index);
};

provide('activeTab', readonly(selected));

provide(VTabsApiSymbol, {
  selected,
  onTabClicked,
  onTabRemoved,
  setTabRef,
  next,
  previous,
});

defineSlots<{
  default?: (props: {
    tabSlider: typeof tabSlider.value;
    onClick: typeof onTabClicked;
    registerRef: typeof setTabRef;
  }) => any;
  previous?: (props: {onClick: typeof previous}) => any;
  next?: (props: {onClick: typeof next}) => any;
  prepend?: (props: {}) => any;
  append?: (props: {}) => any;
  item?: (props: {}) => any;
}>();
</script>

<template>
  <div
    class="v-tabs"
    :class="[
      defaultWrapperClass,
      wrapperClass,
      `v-tabs-${color}`,
      `v-tabs--${variant}`,
      {
        'v-tabs--vertical': vertical,
        'v-tabs--grow': grow,
        'v-tabs--center-active': centerActive,
      },
    ]"
  >
    <template v-if="showArrows">
      <slot name="previous" :onClick="previous">
        <div>
          <v-btn icon text small no-ring @click="previous">
            <Icon name="heroicons:chevron-left" class="v-tabs-icon" />
          </v-btn>
        </div>
      </slot>
    </template>
    <slot name="prepend" />
    <div ref="tabContent" class="v-tabs-items" :class="[contentClass]">
      <slot
        v-bind="{tabSlider}"
        :onClick="onTabClicked"
        :registerRef="setTabRef"
      >
        <v-tab
          v-for="(item, index) in items"
          :key="index"
          :index="index"
          :item="item"
          :get-ref="setTabRef"
          :active="selected === index"
          :vertical="vertical"
          :active-class="activeClass"
          :inactive-class="inactiveClass"
          :default-class="defaultClass"
          v-bind="item"
          @click="onTabClicked"
        >
          <slot
            name="item"
            :index="index"
            :value="item[itemText]"
            :item="item"
            :active="selected === index"
          >
            <div>{{ item[itemText] }}</div>
          </slot>

          <v-btn
            v-if="selected === index && removeable"
            class="v-tabs-item-remove"
            color="error"
            size="sm"
            text
            icon
            fab
            type="button"
            @click.prevent.stop="onTabRemoved(index)"
          >
            <Icon
              :name="removeIcon"
              :size="removeIconSize"
              class="v-tabs-icon v-tabs-icon--remove"
            />
          </v-btn>
        </v-tab>
      </slot>
      <VTabsSlider
        v-if="!hideSlider"
        :set-ref="(el: any) => (tabSlider = el)"
        :vertical="vertical"
        :class="sliderClass"
      />
    </div>
    <slot name="append" />
    <template v-if="showArrows">
      <slot name="next" :onClick="next">
        <div>
          <v-btn icon text small no-ring @click="next">
            <Icon name="heroicons:chevron-right" class="v-tabs-icon" />
          </v-btn>
        </div>
      </slot>
    </template>
  </div>
</template>
