<script setup lang="ts">
import {Icon as Iconify} from '@iconify/vue/dist/offline';
import {loadIcon} from '@iconify/vue';
import {ref, watch} from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

const isFetching = ref(false);
const icon = ref();

async function loadIconComponent() {
  isFetching.value = true;
  icon.value = await loadIcon(props.name).catch(() => {});
  isFetching.value = false;
}

watch(() => props.name, loadIconComponent);

loadIconComponent();
</script>

<template>
  <span v-if="isFetching" class="inline-block w-5 h-5" />
  <Iconify v-else-if="icon" :icon="icon" class="inline-block w-5 h-5" />
  <span v-else>{{ name }}</span>
</template>
