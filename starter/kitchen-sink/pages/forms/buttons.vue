<script setup lang="ts">
const variants = [
  "default",
  "outlined",
  "text",
  "rounded",
  "tile",
  "flush",
  "disabled",
  "loading",
  "block",
  "shadow",
  "noRing",
  "icon",
  "fab",
];

const buttonColors = [...colors, "dark"];

const sizes = ["sm", "md", "lg", "xl", "2xl"];
</script>

<template>
  <PageHeader title="Buttons" />

  <div class="space-y-4">
    <VCard title="Default">
      <div class="flex gap-2 flex-wrap">
        <VBtn v-for="color in buttonColors" :key="color" :color="color">
          {{ color }}
        </VBtn>
      </div>
    </VCard>

    <VCard title="Sizes">
      <div class="space-x-2">
        <template v-for="size in sizes" :key="size">
          <VBtn color="primary" :size="size"> Button ({{ size }}) </VBtn>
        </template>
      </div>
    </VCard>

    <VCard title="Variants">
      <template v-for="variant in variants" :key="variant">
        <h3 class="mb-2 font-medium">{{ variant }}</h3>
        <div class="flex gap-2 flex-wrap mb-3 border-b dark:border-neutral-700 pb-4">
          <VBtn
            v-for="color in buttonColors"
            :key="color"
            :color="color"
            v-bind:[variant]="true"
          >
            <VIcon v-if="['fab', 'icon'].includes(variant)" name="ri:search-line" />
            <span v-else>{{ color }}</span>
          </VBtn>
        </div>
      </template>
    </VCard>

    <VCard title="Button Group">
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
</template>
