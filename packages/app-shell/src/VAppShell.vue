<script setup lang="ts">
withDefaults(
  defineProps<{
    fluid?: boolean;
    paddedContainer?: boolean;
    mainClass?: string;
    contentClass?: string;
    containerClass?: string;
    paddedContent?: boolean;
  }>(),
  {},
);
</script>

<template>
  <div class="flex flex-col v-app-shell h-screen">
    <slot name="header" />
    <main
      class="flex-1 flex v-app-shell-main"
      :class="[
        mainClass,
        {
          'v-app-shell--fluid': fluid,
        },
      ]"
    >
      <slot name="aside" />
      <div
        class="flex-1 flex flex-col v-app-shell-content"
        :class="[{'px-4 lg:px-6 py-4': paddedContent}, contentClass]"
      >
        <slot name="navbar" />
        <div
          class="flex-1 v-app-shell-container"
          :class="[
            {
              'container mx-auto': !fluid,
              'px-4 py-4': paddedContainer,
            },
            containerClass,
          ]"
        >
          <slot />
          <slot name="container.after" />
        </div>
        <slot name="content.after" />
      </div>
    </main>
    <slot name="footer" />
  </div>
</template>
