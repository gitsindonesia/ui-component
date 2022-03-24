<script setup lang="ts">
import {MenuIcon, XIcon} from '@heroicons/vue/outline';
import {state} from '@/composables/useMainMenu';
</script>

<template>
  <v-btn icon text class="p-2" @click="state.isOpen = !state.isOpen">
    <XIcon v-if="state.isOpen" class="w-6 h-6" />
    <MenuIcon v-else class="w-6 h-6" />
  </v-btn>
</template>
