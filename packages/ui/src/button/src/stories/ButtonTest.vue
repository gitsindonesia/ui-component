<script setup lang="ts">
import {ref} from 'vue';
import VBtn from '../VBtn.vue';
import VBtnGroup from '../VBtnGroup.vue';
import VBtnToolbar from '../VBtnToolbar.vue';
import VIcon from '../../../icon/src';
import VCard from '../../../card/src';

const colors = [
  'default',
  'primary',
  'secondary',
  'info',
  'warning',
  'success',
  'error',
];

const sizes = ['sm', 'md', 'lg'] as const;

const variants = [
  'default',
  'outlined',
  'text',
  'rounded',
  'tile',
  'flush',
  'disabled',
  'loading',
  'block',
  'shadow',
  'noRing',
  'icon',
  'fab',
];

const buttonColors = [...colors, 'dark'];

const isDark = ref(false);
</script>

<template>
  <div
    :class="{
      dark: isDark,
    }"
  >
    <VBtn @click="isDark = !isDark" class="mb-5">
      {{ isDark ? 'Light' : 'Dark' }} Mode
    </VBtn>

    <div class="space-y-4">
      <VCard bordered title="Default">
        <div class="flex gap-2 flex-wrap">
          <VBtn v-for="color in buttonColors" :key="color" :color="color">
            {{ color }}
          </VBtn>
        </div>
      </VCard>

      <VCard bordered title="Sizes">
        <div class="space-x-2">
          <template v-for="size in sizes" :key="size">
            <VBtn color="primary" :size="size"> Button ({{ size }}) </VBtn>
          </template>
        </div>
      </VCard>

      <VCard bordered title="Variants">
        <div class="space-y-4">
          <VCard
            bordered
            :title="variant"
            v-for="variant in variants"
            :key="variant"
            flat
          >
            <div class="space-x-2 space-y-2">
              <VBtn
                v-for="color in buttonColors"
                :key="color"
                :color="color"
                v-bind:[variant]="true"
              >
                <VIcon
                  v-if="['fab', 'icon'].includes(variant)"
                  name="ri:search-line"
                />
                <span v-else>{{ color }}</span>
              </VBtn>
            </div>
          </VCard>
        </div>
      </VCard>

      <VCard bordered title="Button Group">
        <VBtnToolbar>
          <VBtnGroup>
            <VBtn v-for="i in 4" :key="i"> Button {{ i }} </VBtn>
          </VBtnGroup>
          <VBtnGroup>
            <VBtn v-for="i in 4" :key="i"> Button {{ i }} </VBtn>
          </VBtnGroup>
        </VBtnToolbar>
      </VCard>
    </div>
  </div>
</template>
