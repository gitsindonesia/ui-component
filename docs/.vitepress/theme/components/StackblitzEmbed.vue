<script setup lang="ts">
import {computed, onMounted, ref} from 'vue';
import sdk, {type EmbedOptions} from '@stackblitz/sdk';

interface Props {
  id?: string;
  openFile?: string;
  height: number;
  theme?: 'light' | 'dark';
  options?: EmbedOptions;
}

const props = withDefaults(defineProps<Props>(), {
  id: 'github-bkgakj',
  openFile: 'pages/index.vue',
  theme: 'dark',
});

const playgroundContainer = ref<HTMLDivElement>();

const height = computed(() => props.height || window.innerHeight - 80);

onMounted(() => {
  sdk.embedProjectId(playgroundContainer.value!, props.id, {
    forceEmbedLayout: true,
    openFile: props.openFile,
    theme: props.theme,
    height: height.value,
    ...props.options,
  });
});
</script>

<template>
  <div ref="playgroundContainer" class="playgroundContainer"></div>
</template>
