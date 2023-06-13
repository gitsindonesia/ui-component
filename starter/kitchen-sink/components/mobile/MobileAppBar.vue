<script setup lang="ts">
defineProps<{
  text?: string;
}>();
</script>

<template>
  <VAppBar fixed size="auto" shadow class="py-3 px-4">
    <div class="flex items-center gap-4">
      <VBtn @click="$router.back()" prefix-icon="ri:arrow-left-line" fab icon text />
      <VText
        variant="display-xs"
        font-weight="semibold"
        :style="{
          viewTransitionName: 'page-title',
        }"
      >
        <slot>{{ text }}</slot>
      </VText>
    </div>
  </VAppBar>
</template>
