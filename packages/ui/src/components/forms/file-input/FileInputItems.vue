<script setup lang="ts">
import FileInputItem from './FileInputItem.vue';

defineOptions({
  inheritAttrs: false,
});

interface Props {
  files?: File[];
}

withDefaults(defineProps<Props>(), {
  files: () => [],
});

const emit =
  defineEmits<{
    (e: 'remove', idx: number): void;
  }>();

function handleRemove(idx: number) {
  emit('remove', idx);
}
</script>

<template>
  <FileInputItem
    v-for="(file, idx) in files"
    :key="file.name"
    :name="file.name"
    :size="file.size"
    @remove="handleRemove(idx)"
    v-bind="$attrs"
  />
</template>
