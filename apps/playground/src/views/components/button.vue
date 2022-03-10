<script setup lang="ts">
import {reactive} from 'vue';
import VBtn from '@gits-id/button/src/VBtn.vue';

const colors = [
  'default',
  'primary',
  'secondary',
  'info',
  'warning',
  'error',
  'dark',
];
const props = reactive({
  disabled: false,
  rounded: false,
  icon: false,
});
</script>

<template>
  <div class="flex gap-2">
    <v-checkbox v-model="props.rounded" label="Rounded" />
    <v-checkbox v-model="props.disabled" label="Disabled" />
    <v-checkbox v-model="props.icon" label="Icon" />
  </div>

  <div class="space-y-4">
    <h2>Default</h2>
    <div class="space-x-2 space-y-1">
      <VBtn v-for="color in colors" :key="color" :color="color" v-bind="props">
        {{ color }}
      </VBtn>
    </div>

    <h2>Outlined</h2>
    <div class="space-x-2 space-y-1">
      <VBtn
        v-for="color in colors"
        :key="color"
        :color="color"
        v-bind="props"
        outlined
      >
        {{ color }}
      </VBtn>
    </div>

    <h2>Text</h2>
    <div class="space-x-2 space-y-1">
      <VBtn
        v-for="color in colors"
        :key="color"
        :color="color"
        v-bind="props"
        text
      >
        {{ color }}
      </VBtn>
    </div>
  </div>
</template>
