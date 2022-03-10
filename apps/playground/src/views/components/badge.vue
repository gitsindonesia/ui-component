<script setup lang="ts">
import {themeColors} from '@gits-id/ui';
</script>

<template>
  <h2 class="font-bold text-xl mb-5">Badge</h2>

  <v-card class="mb-4" title="Variants">
    <div class="space-x-2 space-y-2">
      <v-badge v-for="color in themeColors" :key="color" :color="color">
        {{ color }}
      </v-badge>
    </div>
  </v-card>

  <v-card class="mb-4" title="Circle">
    <div class="space-x-2 space-y-2">
      <v-badge
        v-for="(color, idx) in themeColors"
        :key="color"
        :color="color"
        circle
      >
        {{ idx + 1 * 10 }}
      </v-badge>
    </div>
  </v-card>

  <v-card class="mb-4" title="Dismissable">
    <div class="space-x-2 space-y-2">
      <v-badge
        v-for="color in themeColors"
        :key="color"
        :color="color"
        dismissable
      >
        {{ color }}
      </v-badge>
    </div>
  </v-card>

  <v-card title="Sizing">
    <div class="space-y-2">
      <h2 class="font-semibold mb-2">small</h2>
      <div class="space-x-2 space-y-2">
        <v-badge v-for="color in themeColors" :key="color" :color="color" small>
          {{ color }}
        </v-badge>
      </div>
      <h2 class="font-semibold mb-2">default</h2>
      <div class="space-x-2 space-y-2">
        <v-badge v-for="color in themeColors" :key="color" :color="color">
          {{ color }}
        </v-badge>
      </div>
      <h2 class="font-semibold mb-2">large</h2>
      <div class="space-x-2 space-y-2">
        <v-badge v-for="color in themeColors" :key="color" :color="color" large>
          {{ color }}
        </v-badge>
      </div>
    </div>
  </v-card>
</template>
