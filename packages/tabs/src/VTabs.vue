<script setup lang="ts">
import VBtn from '@gits-id/button';
import Icon from '@gits-id/icon';
import {
  nextTick,
  onBeforeUpdate,
  onMounted,
  PropType,
  provide,
  ref,
  toRefs,
  watch,
} from 'vue';
import VTab from './VTab.vue';
import VTabsSlider from './VTabsSlider.vue';

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

const emit = defineEmits(['update:modelValue', 'change', 'remove']);

const selected = ref(modelValue.value);
const tabRefs = ref<HTMLElement[]>([]);
const tabContent = ref<HTMLDivElement>();
const tabSlider = ref<HTMLDivElement>();

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
    el.parentElement.scrollTo({
      left: position,
    });
  } else {
    if (parent.children[parent.children.length - 1] === el) {
      moveNavigation(parent.offsetWidth);
    } else if (nextEl && nextEl.offsetLeft > parent.offsetWidth) {
      moveNavigation(nextEl.offsetWidth);
    } else if (prevEl && prevEl.offsetLeft < el.offsetLeft) {
      moveNavigation(-prevEl.offsetWidth);
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
  setSlider(+selected.value);
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
  emit('remove', index);
};

provide('activeTab', selected.value);
</script>

<template>
  <div
    class="v-tabs"
    :class="[
      defaultWrapperClass,
      wrapperClass,
      `v-tabs-${color}`,
      {
        'v-tabs--vertical': vertical,
        'v-tabs--center-active': centerActive,
      },
    ]"
  >
    <template v-if="showArrows">
      <slot name="previous">
        <div>
          <v-btn icon text small no-ring @click="previous">
            <Icon name="heroicons:chevron-left" class="v-tabs-icon" />
          </v-btn>
        </div>
      </slot>
    </template>
    <slot name="prepend" />
    <div ref="tabContent" class="v-tabs-items" :class="[contentClass]">
      <slot v-bind="{tabSlider}">
        <v-tab
          v-for="(item, index) in items"
          :key="index"
          :index="index"
          :item="item"
          :get-ref="setTabRef"
          :active="selected === index"
          :removeable="removeable"
          :vertical="vertical"
          :active-class="activeClass"
          :inactive-class="inactiveClass"
          :default-class="defaultClass"
          v-bind="item"
          @remove="onTabRemoved"
          @click="onTabClicked"
        >
          {{ item[itemText] }}
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
      <slot name="next">
        <div>
          <v-btn icon text small no-ring @click="next">
            <Icon name="heroicons:chevron-right" class="v-tabs-icon" />
          </v-btn>
        </div>
      </slot>
    </template>
  </div>
</template>

<style>
:root {
  --v-tabs-padding-x: theme('padding.4');
  --v-tabs-padding-y: theme('padding.2');
  --v-tabs-bg-color: theme('colors.transparent');
  --v-tabs-border-color: theme('colors.transparent');
  --v-tabs-border-radius: theme('borderRadius.DEFAULT');

  /* item */
  --v-tabs-item-padding-x: theme('padding.4');
  --v-tabs-item-padding-y: theme('padding.2');
  --v-tabs-item-font-size: theme('fontSize.base');
  --v-tabs-item-font-weight: theme('fontWeight.normal');
  --v-tabs-item-bg-color: theme('colors.transparent');
  --v-tabs-item-text-color: theme('colors.gray.800');
  --v-tabs-item-border-color: theme('colors.transparent');
  --v-tabs-item-border-radius: theme('borderRadius.DEFAULT');

  /* item active */
  --v-tabs-item-active-padding-x: var(--v-tabs-item-padding-x);
  --v-tabs-item-active-padding-y: var(--v-tabs-item-padding-y);
  --v-tabs-item-active-font-size: var(--v-tabs-item-font-size);
  --v-tabs-item-active-font-weight: theme('fontWeight.semibold');
  --v-tabs-item-active-bg-color: var(--v-tabs-item-bg-color);
  --v-tabs-item-active-text-color: var(--v-tabs-item-text-color);
  --v-tabs-item-active-border-color: var(--v-tabs-item-border-color);
  --v-tabs-item-active-border-radius: var(--v-tabs-item-border-radius);

  /* item hover */
  --v-tabs-item-hover-padding-x: var(--v-tabs-item-padding-x);
  --v-tabs-item-hover-padding-y: var(--v-tabs-item-padding-y);
  --v-tabs-item-hover-font-size: var(--v-tabs-item-font-size);
  --v-tabs-item-hover-font-weight: var(--v-tabs-item-font-weight);
  --v-tabs-item-hover-bg-color: var(--v-tabs-item-bg-color);
  --v-tabs-item-hover-text-color: var(--v-tabs-item-text-color);
  --v-tabs-item-hover-border-color: var(--v-tabs-item-border-color);
  --v-tabs-item-hover-border-radius: var(--v-tabs-item-border-radius);

  /* slider */
  --v-tabs-slider-height: 3px;
  --v-tabs-slider-width: 3rem;
  --v-tabs-slider-max-width: theme('maxWidth.md');
  --v-tabs-slider-bg-color: theme('colors.primary.500');
  --v-tabs-slider-border-color: theme('colors.primary.500');
  --v-tabs-slider-border-radius: theme('borderRadius.DEFAULT');
}

.v-tabs {
  padding: var(--v-tabs-padding-y) var(--v-tabs-padding-x);
  background-color: var(--v-tabs-bg-color);
  border-radius: var(--v-tabs-border-radius);
  border: 1px solid var(--v-tabs-border-color);
  display: flex;
  align-items: center;
}

.v-tabs-slider {
  height: var(--v-tabs-slider-height);
  width: var(--v-tabs-slider-width);
  background-color: var(--v-tabs-slider-bg-color);
  border-radius: var(--v-tabs-slider-border-radius);
  border: 1px solid var(--v-tabs-slider-border-color);

  @apply transition-all duration-300 absolute inset-x-0 bottom-0;
}

.v-tabs-items::-webkit-scrollbar {
  display: none;
}

.v-tabs-items {
  scroll-behavior: smooth;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  @apply flex-row flex
    items-center
    gap-x-1
    whitespace-nowrap
    overflow-x-auto
    h-full
    relative;
}

/* vertical */
.v-tabs--vertical .v-tabs-items {
  @apply flex-col w-full;
}

.v-tabs--vertical .v-tabs-slider {
  width: var(--v-tabs-slider-height);

  @apply inset-y-0 left-0;
}

/* item */
.v-tabs-item {
  font-size: var(--v-tabs-item-font-size);
  font-weight: var(--v-tabs-item-font-weight);
  padding: var(--v-tabs-item-padding-y) var(--v-tabs-item-padding-x);
  background-color: var(--v-tabs-item-bg-color);
  color: var(--v-tabs-item-text-color);
  border-radius: var(--v-tabs-item-border-radius);
  border: 1px solid var(--v-tabs-item-border-color);

  @apply focus:outline-none
    flex
    items-center
    justify-between
    gap-y-1
    transition
    duration-300
    cursor-pointer
    h-full;
}

/* item hover */
.v-tabs-item:hover:not(.v-tabs-item--active) {
  font-size: var(--v-tabs-item-hover-font-size);
  font-weight: var(--v-tabs-item-hover-font-weight);
  padding: var(--v-tabs-item-hover-padding-y) var(--v-tabs-item-hover-padding-x);
  background-color: var(--v-tabs-item-hover-bg-color);
  color: var(--v-tabs-item-hover-text-color);
  border-radius: var(--v-tabs-item-hover-border-radius);
  border: 1px solid var(--v-tabs-item-hover-border-color);
}

/* item active */
.v-tabs-item.v-tabs-item--active {
  font-size: var(--v-tabs-item-active-font-size);
  font-weight: var(--v-tabs-item-active-font-weight);
  padding: var(--v-tabs-item-active-padding-y)
    var(--v-tabs-item-active-padding-x);
  background-color: var(--v-tabs-item-active-bg-color);
  color: var(--v-tabs-item-active-text-color);
  border-radius: var(--v-tabs-item-active-border-radius);
  border: 1px solid var(--v-tabs-item-active-border-color);
}

.v-tabs-item--vertical {
  @apply w-full min-w-full;
}

.v-tabs-item-remove {
  @apply ml-2 !p-0;
}

/* colors */
.v-tabs-secondary {
  --v-tabs-slider-bg-color: theme('colors.secondary.500');
  --v-tabs-slider-border-color: theme('colors.secondary.500');
}
.v-tabs-info {
  --v-tabs-slider-bg-color: theme('colors.info.500');
  --v-tabs-slider-border-color: theme('colors.info.500');
}
.v-tabs-warning {
  --v-tabs-slider-bg-color: theme('colors.warning.500');
  --v-tabs-slider-border-color: theme('colors.warning.500');
}
.v-tabs-error {
  --v-tabs-slider-bg-color: theme('colors.error.500');
  --v-tabs-slider-border-color: theme('colors.error.500');
}
.v-tabs-success {
  --v-tabs-slider-bg-color: theme('colors.success.500');
  --v-tabs-slider-border-color: theme('colors.success.500');
}
</style>
