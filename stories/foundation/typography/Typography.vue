<script setup lang="ts">
import tokens from '@morpheme/design-tokens/js/tailwind';
import {remToPx} from '../utils';
</script>

<template>
  <h1 class="text-3xl font-bold mb-5">Typography</h1>
  <h2 class="text-2xl font-semibold">Font Size</h2>
  <div class="space-y-5 divide-y">
    <div v-for="(size, name) in tokens.fontSize" :key="name" class="pt-4">
      <div>
        <div class="font-semibold text-lg">{{ `text-${name}` }}</div>

        <ul class="font-mono text-xs mt-1">
          <li>Font size: {{ size }}</li>
        </ul>
      </div>
      <p class="border-2 rounded-xl p-4 mt-4" :style="{fontSize: size}">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit
      </p>
    </div>
  </div>
  <h2 class="text-2xl font-semibold mt-10">Font Weight</h2>
  <div class="space-y-5 divide-y">
    <div v-for="(weight, name) in tokens.fontWeight" :key="name" class="pt-4">
      <div>
        <div class="font-semibold text-lg">{{ `text-${name}` }}</div>

        <ul class="font-mono text-xs mt-1">
          <li>Font weight: {{ weight }}</li>
        </ul>
      </div>
      <p class="border-2 rounded-xl p-4 mt-4" :style="{fontWeight: weight}">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit
      </p>
    </div>
  </div>
</template>
