<script setup lang="ts">
import type {StepItem} from './types';
import StepperItem from './StepperItem.vue';
import {useRoute} from 'vue-router';
import {watch, ref, toRefs, computed} from 'vue';

type Props = {
  items: StepItem[];
  modelValue: number;
  disableRouteActive?: boolean;
  linkable?: boolean;
  clickable?: boolean;
  vertical?: boolean;
  linear?:boolean
};

const props = withDefaults(defineProps<Props>(), {
  modelValue: 0,
  items: () => [],
  disableRouteActive: false,
  linkable: false,
  clickable: false,
  vertical: false,
  linear: false,
});

const emit = defineEmits(['update:modelValue', 'click']);

const {items, modelValue, linkable, disableRouteActive, clickable} = toRefs(props);

const tag = computed(() => {
  if(linkable.value) {
    return 'router-link';
  }

  if(clickable.value){
   return 'button';
  }

  return 'div';
});

const activeIndex = ref(modelValue.value);

watch(
  modelValue,
  (val) => {
    activeIndex.value = val;
  },
  {immediate: true},
);

if (!disableRouteActive.value) {
  const route = useRoute();

  watch(
    route,
    (val: any) => {
      if (!val) return;

      let index = activeIndex.value;

      if (!disableRouteActive.value) {
        index = items.value.findIndex((item) => item.path === val.path);
        activeIndex.value = index;
      }

      emit('update:modelValue', index);
    },
    {immediate: true},
  );
}
</script>

<template>
  <div
    class="flex w-full"
    :class="[vertical ? 'flex-col gap-4' : 'flex-row justify-center']"
  >
    <template v-for="(item, idx) in items" :key="idx">
      <StepperItem
        :item="item"
        :index="idx"
        :active-index="activeIndex"
        :active="linear ? activeIndex >= idx : activeIndex === idx"
        :as="tag"
        @click="clickable ? emit('click', {item, index:idx}) : null"
        :vertical="vertical"
        :linear="linear"
        :last="idx === (items.length -1)"
      />
    </template>
  </div>
</template>
