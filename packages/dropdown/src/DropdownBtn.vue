<script setup lang="ts">
import { MenuButton } from "@headlessui/vue";
import { VBtn } from "@morpheme/button";
</script>

<template>
  <MenuButton v-slot="props" :as="VBtn">
    <slot v-bind="props" />
  </MenuButton>
</template>
