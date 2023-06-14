<script setup lang="ts">
defineProps<{
  text?: string;
  withBackButton?: boolean;
}>();
</script>

<template>
  <VAppBar fixed size="auto" shadow class="py-3 px-4">
    <div class="flex items-center gap-4">
      <VBtn
        v-if="withBackButton"
        prefix-icon="ri:arrow-left-line"
        fab
        icon
        text
        @click="$router.back()"
      />
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
