<script setup lang="ts">
import {Tab} from '@headlessui/vue';

defineSlots<{
  default?: (props: {}) => any;
}>();
</script>

<template>
  <Tab as="template" v-slot="{selected}">
    <button
      class="v-tabs-item"
      :class="[
        {
          'v-tabs-item--active': selected,
        },
      ]"
    >
      <slot />
    </button>
  </Tab>
</template>
