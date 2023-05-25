<script setup lang="ts">
defineProps<{
  fluid?: boolean;
  paddedContainer?: boolean;
  mainClass?: string;
  contentClass?: string;
  containerClass?: string;
  paddedContent?: boolean;
}>();
</script>

<template>
  <div class="v-app-shell">
    <slot name="header" />
    <main
      class="v-app-shell-main"
      :class="[
        mainClass,
        {
          'v-app-shell--fluid': fluid,
        },
      ]"
    >
      <slot name="aside" />
      <div
        class="v-app-shell-content"
        :class="[{'v-app-shell-content--padded': paddedContent}, contentClass]"
      >
        <slot name="navigation" />
        <div
          class="v-app-shell-container"
          :class="[
            {
              'v-app-shell-container--fluid': fluid,
              'v-app-shell-container--padded': paddedContainer,
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
