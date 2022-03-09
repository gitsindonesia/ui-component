<script setup lang="ts">
import {ref} from 'vue';
import VBtn from '@gits-id/button/src/VBtn.vue';

const colors = ['primary', 'secondary', 'info', 'warning', 'error', 'dark'];
const rounded = ref(false);
</script>

<template>
  <div>
    <label>
      <input v-model="rounded" type="checkbox" />
      Rounded
    </label>
  </div>
  <div class="space-y-2">
    <div class="space-x-2">
      <VBtn v-for="color in colors" :key="color" :color="color">
        {{ color }}
      </VBtn>
    </div>

    <div class="space-x-2">
      <VBtn v-for="color in colors" :key="color" :color="color" outlined>
        {{ color }}
      </VBtn>
    </div>

    <div class="space-x-2">
      <VBtn v-for="color in colors" :key="color" :color="color" text>
        {{ color }}
      </VBtn>
    </div>
  </div>
</template>
