<script setup lang="ts">
import {ref, toRefs, watch} from 'vue';
import VCollapsible from './VCollapsible.vue';

type CollapsibleItem = {
  title: string;
  content: string;
  isOpen?: boolean;

  [x: string]: any;
};

type Props = {
  modelValue?: boolean;
  accordion?: boolean;
  items?: CollapsibleItem[];
};

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  accordion: false,
  isOpen: false,
  items: () => [],
});

const {accordion, items} = toRefs(props);
const emit = defineEmits([
  'update:modelValue',
  'update:items',
  'item:change',
  'onClickItems',
]);
const groupItems = ref(items.value);

watch(
  items,
  (val) => {
    groupItems.value = val;
  },
  {immediate: true},
);

const onChange = (isOpen: boolean, item: CollapsibleItem, idx: number) => {
  emit('item:change', {isOpen, item});
  if (accordion.value) {
    items.value.forEach((currentItem, key: number) => {
      if (key === idx) {
        currentItem.isOpen = isOpen;
      } else {
        currentItem.isOpen = false;
      }
    });
  }
};
</script>

<template>
  <div ref="root">
    <slot>
      <slot name="group:header"> </slot>
      <VCollapsible
        v-for="(item, idx) in groupItems"
        v-model="item.isOpen"
        v-bind="item"
        @change="onChange($event, item, idx)"
      >
        <template #header>
          <slot name="item:header" :item="item" :index="idx"> </slot>
        </template>
        <slot name="items" :row="item" :index="idx">
          <slot :name="`item.${idx}`" :item="item">
            {{ item.content }}
          </slot>
        </slot>
      </VCollapsible>
    </slot>
  </div>
</template>
