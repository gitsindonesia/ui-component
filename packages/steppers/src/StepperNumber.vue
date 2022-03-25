<script setup lang="ts">
defineProps<{
  index?: number;
  isActive?: boolean;
  vertical?: boolean;
}>();
</script>

<template>
  <div
    class="rounded-full flex flex-shrink-0 w-8 h-8 border-2 items-center justify-center mb-2"
    :class="[
      isActive
        ? 'bg-primary-500 border-primary-500 text-white'
        : 'bg-white border-gray-300',
      vertical ? '' : 'mx-auto',
    ]"
  >
    <slot> {{ index }}</slot>
  </div>
</template>
