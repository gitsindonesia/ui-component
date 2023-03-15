<script setup lang="ts">
import {ref, toRefs, watch} from 'vue';
import type {BottomSheetMenu} from './types';
import {List, ListItem} from '@morpheme/list';

export type Props = {
  modelValue?: BottomSheetMenu[];
  items?: BottomSheetMenu[];
  selectable?: boolean;
  multiple?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  items: () => [] as BottomSheetMenu[],
  modelValue: () => [] as BottomSheetMenu[],
});

const emit =
  defineEmits<{
    (e: 'update:items', value: BottomSheetMenu[]): void;
    (e: 'update:modelValue', value: BottomSheetMenu[]): void;
  }>();

const {modelValue} = toRefs(props);

const selected = ref<BottomSheetMenu[]>(modelValue.value);

const toggleSelect = (menu: BottomSheetMenu) => {
  if (props.multiple) {
    if (isSelected(menu)) {
      selected.value.splice(props.items.indexOf(menu), 1);
    } else {
      selected.value.push(menu);
    }
  } else {
    selected.value = [menu];
  }
};

watch(modelValue, (val) => (selected.value = val));

watch(selected, (val) => emit('update:modelValue', val));

const isSelected = (menu: BottomSheetMenu) =>
  props.selectable && selected.value.includes(menu);
</script>

<template>
  <List>
    <ListItem
      v-for="(menu, idx) in items"
      :key="idx"
      v-bind="menu"
      :append-icon="isSelected(menu) ? 'ic:round-check' : ''"
      @click="toggleSelect(menu)"
    >
      {{ menu.text }}
    </ListItem>
  </List>
</template>
