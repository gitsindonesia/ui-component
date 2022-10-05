<script setup lang="ts">
import {state} from '@/composables/useMainMenu';
import Icon from '@gits-id/icon';
</script>

<template>
  <v-btn icon text class="p-2" @click="state.isOpen = !state.isOpen">
    <Icon
      :name="state.isOpen ? 'heroicons:x-mark' : 'ri:menu-line'"
      class="w-6 h-6"
    />
  </v-btn>
</template>
