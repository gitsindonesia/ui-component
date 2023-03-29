<script setup lang="ts">
withDefaults(
  defineProps<{
    padded?: boolean;
    centeredContainer?: boolean;
  }>(),
  {
    padded: true,
    centeredContainer: false,
  },
);
</script>

<template>
  <div class="flex flex-col v-app-shell h-screen">
    <slot name="header" />
    <main class="flex-1 flex v-app-shell-main">
      <slot name="aside" />
      <div
        class="flex-1 flex flex-col v-app-shell-content"
        :class="{'px-4 lg:px-6 py-4': padded}"
      >
        <slot name="navbar" />
        <div
          class="flex-1 v-app-shell-container"
          :class="{
            'container mx-auto': centeredContainer,
          }"
        >
          <slot />
        </div>
        <slot name="footer" />
      </div>
    </main>
  </div>
</template>
