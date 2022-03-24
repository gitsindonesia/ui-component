---
to: src/components/<%=name%>.vue
---
<script setup lang="ts">
import {toRefs} from 'vue';

interface Props {
  modelValue: string;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
});

const {modelValue} = toRefs(props);

const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <div>new component</div>
</template>

<style scoped></style>



