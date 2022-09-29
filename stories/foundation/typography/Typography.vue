<script setup lang="ts">
import defaultTheme from 'tailwindcss/defaultTheme';

const remToPx = (rem: string) => +rem.replace('rem', '') * 16 + 'px';
</script>

<template>
  <h1 class="text-3xl font-bold mb-5">Typography</h1>
  <div class="space-y-5 divide-y">
    <div v-for="(size, name) in defaultTheme.fontSize" :key="name" class="pt-4">
      <div>
        <div class="font-semibold text-xl">{{ `text-${name}` }}</div>

        <ul class="font-mono text-xs mt-1">
          <li>Font size: {{ size[0] }} ({{ remToPx(size[0]) }})</li>
          <li>
            Line height:
            {{ (size[1] as any).lineHeight }}
            ({{ remToPx((size[1] as any).lineHeight) }})
          </li>
        </ul>
      </div>
      <p
        class="border-2 rounded-xl p-4 mt-4"
        :style="{fontSize: size[0], lineHeight: (size[1] as any).lineHeight}"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit
      </p>
    </div>
  </div>
</template>
