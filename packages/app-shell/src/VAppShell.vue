<script setup lang="ts">
withDefaults(
  defineProps<{
    fluid?: boolean;
    stacked?: boolean;
    mainClass?: string;
    contentClass?: string;
    containerClass?: string;
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
          'v-app-shell--stacked': stacked,
          'v-app-shell--fluid': fluid,
        },
      ]"
    >
      <slot name="aside" />
      <div
        class="flex-1 flex flex-col v-app-shell-content"
        :class="[{'px-4 lg:px-6 py-4': !stacked}, contentClass]"
      >
        <slot name="navbar" />
        <div
          class="flex-1 v-app-shell-container"
          :class="[
            {
              'container mx-auto': !fluid,
              'px-4 py-4': stacked,
            },
            containerClass,
          ]"
        >
          <slot />
        </div>
        <slot name="innerFooter" />
      </div>
    </main>
    <slot name="footer" />
  </div>
</template>
