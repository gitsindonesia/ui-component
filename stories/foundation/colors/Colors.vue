<script setup lang="ts">
import {defaultColors, primary, secondary} from '@gits-id/theme/defaultTheme';
import colors from 'tailwindcss/colors';

colors.primary = primary;
colors.secondary = secondary;
colors.info = colors.sky;
colors.warning = colors.yellow;
colors.success = colors.emerald;
colors.error = colors.rose;
</script>

<template>
  <h1 class="text-3xl font-bold mb-5">Colors</h1>
  <h3 class="text-lg font-semibold mb-3">Brand Colors</h3>
  <div class="grid gap-4 grid-cols-2 sm:grid-cols-6">
    <div v-for="color in defaultColors" :key="color">
      <div class="rounded px-3 py-2" :class="`bg-${color}-500`">
        {{ color }}
      </div>
      <p class="font-mono text-sm mt-1">bg-{{ color }}-500</p>
    </div>
  </div>
  <h3 class="text-lg font-semibold mb-3 mt-10">Tailwind Colors</h3>
  <div class="space-y-4 divide divide-y">
    <template v-for="(color, name) in colors" :key="name">
      <div v-if="typeof color !== 'string'" class="flex gap-4 py-3">
        <h4 class="w-2/12 font-semibold shrink-0">
          {{ name }}
        </h4>
        <div class="rounded px-3 py-2 w-10/12 grid grid-cols-5 gap-4">
          <div v-for="(c, shade) in color" :key="c">
            <div :style="{backgroundColor: c}" class="h-10 rounded"></div>
            <div class="text-sm mt-1">
              {{ shade }} <span class="text-gray-500">{{ c }}</span>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
