<script setup lang="ts">
import {MenuItems} from '@headlessui/vue';
</script>

<template>
  <MenuItems class="dropdown-panel" v-slot="slotProps">
    <slot v-bind="slotProps" />
  </MenuItems>
</template>
