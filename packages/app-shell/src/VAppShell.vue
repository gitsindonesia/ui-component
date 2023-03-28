<script setup lang="ts">
interface Props {
  padded?: boolean;
}

withDefaults(defineProps<Props>(), {
  padded: true,
});
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
        <div class="flex-1 v-app-shell-content-inner">
          <slot />
        </div>
        <slot name="footer" />
      </div>
    </main>
  </div>
</template>
