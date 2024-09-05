<script setup lang="ts">
import tokens from '@morpheme/design-tokens/js/tailwind';
</script>

<template>
  <h1 class="text-3xl font-bold mb-5">Elevation</h1>
  <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
    <template v-for="(shadow, name) in tokens.boxShadow" :key="name">
      <div :style="{boxShadow: shadow}" class="rounded-xl p-6 border bg-white">
        <div class="mb-2 font-semibold">
          {{ (name as any) === 'DEFAULT' ? 'shadow' : `shadow-${name}` }}
        </div>
        <code class="text-mono text-xs">{{ shadow }}</code>
      </div>
    </template>
  </div>
</template>
