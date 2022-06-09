<script setup lang="ts">
import {
  ref,
  toRefs,
  watch,
  onBeforeUpdate,
  onMounted,
  nextTick,
  computed,
  PropType,
} from 'vue';
import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/vue/outline';
import VTab from './VTab.vue';
import {getBgColor} from '@gits-id/utils';
import VBtn from '@gits-id/button';

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
  <div :class="[defaultWrapperClass, wrapperClass]">
    <template v-if="showArrows">
      <slot name="previous">
        <div>
          <v-btn icon text small no-ring @click="previous">
            <ChevronLeftIcon class="w-full h-full" />
          </v-btn>
        </div>
      </slot>
    </template>
    <slot name="prepend" />
    <div
      ref="tabContent"
      class="
        flex
        items-center
        gap-x-1
        whitespace-nowrap
        overflow-x-auto
        tab-items
        h-full
        relative
      "
      :class="[vertical ? 'flex-col' : 'flex-row', contentClass]"
    >
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
        class="transition-all duration-300 absolute"
        :class="[
          sliderColor,
          vertical
            ? 'w-1 inset-y-0 left-0'
            : 'h-[3px] min-w-[3rem] max-w-md inset-x-0 bottom-0',
        ]"
      />
    </div>
    <slot name="append" />
    <template v-if="showArrows">
      <slot name="next">
        <div>
          <v-btn icon text small no-ring @click="next">
            <ChevronRightIcon class="w-full h-full" />
          </v-btn>
        </div>
      </slot>
    </template>
  </div>
</template>

<style scoped>
.tab-items::-webkit-scrollbar {
  display: none;
}
.tab-items {
  scroll-behavior: smooth;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
