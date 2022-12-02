<script setup lang="ts">
import VBtn from '@gits-id/button';
import Icon from '@gits-id/icon';
import {getBgColor} from '@gits-id/utils';
import {
  computed,
  nextTick,
  onBeforeUpdate,
  onMounted,
  PropType,
  ref,
  toRefs,
  watch,
} from 'vue';
import VTab from './VTab.vue';

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
    type: String,
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
    default: 'flex items-center',
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
});

const {
  modelValue,
  items,
  itemText,
  color,
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

const sliderColor = computed(() => getBgColor(color.value));
</script>

<template>
  <div
    class="v-tabs"
    :class="[
      defaultWrapperClass,
      wrapperClass,
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
      <slot>
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
      <div
        v-if="!hideSlider"
        id="tab-slider"
        ref="tabSlider"
        class="v-tabs-slider"
        :class="[sliderColor, vertical ? 'v-tabs-slider--vertical' : '']"
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
  --v-tabs-item-font-weight: theme('fontSize.normal');
  --v-tabs-item-bg-color: theme('colors.transparent');
  --v-tabs-item-text-color: theme('colors.gray.800');
  --v-tabs-item-border-color: theme('colors.transparent');
  --v-tabs-item-border-radius: theme('borderRadius.DEFAULT');

  /* item active */
  --v-tabs-item-active-padding-x: theme('padding.4');
  --v-tabs-item-active-padding-y: theme('padding.2');
  --v-tabs-item-active-font-size: theme('fontSize.base');
  --v-tabs-item-active-font-weight: theme('fontSize.semibold');
  --v-tabs-item-active-bg-color: theme('colors.transparent');
  --v-tabs-item-active-text-color: theme('colors.gray.800');
  --v-tabs-item-active-border-color: theme('colors.transparent');
  --v-tabs-item-active-border-radius: theme('borderRadius.DEFAULT');

  /* item hover */
  --v-tabs-item-hover-padding-x: theme('padding.4');
  --v-tabs-item-hover-padding-y: theme('padding.2');
  --v-tabs-item-hover-font-size: theme('fontSize.base');
  --v-tabs-item-hover-font-weight: theme('fontSize.semibold');
  --v-tabs-item-hover-bg-color: theme('colors.transparent');
  --v-tabs-item-hover-text-color: theme('colors.gray.800');
  --v-tabs-item-hover-border-color: theme('colors.transparent');
  --v-tabs-item-hover-border-radius: theme('borderRadius.DEFAULT');

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
}

.v-tabs-slider {
  height: var(--v-tabs-slider-height);
  width: var(--v-tabs-slider-width);
  background-color: var(--v-tabs-slider-bg-color);
  border-radius: var(--v-tabs-slider-border-radius);
  border: 1px solid var(--v-tabs-slider-border-color);

  @apply transition-all duration-300 absolute inset-x-0 bottom-0;
}

.v-tab-items::-webkit-scrollbar {
  display: none;
}

.v-tab-items {
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
.v-tab--vertical .v-tabs-items {
  @apply flex-col;
}

.v-tab--vertical .v-tabs-slider {
  @apply w-1 inset-y-0 left-0;
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
</style>
