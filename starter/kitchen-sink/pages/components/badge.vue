<script setup lang="ts"></script>

<template>
  <PageHeader title="Badge" />

  <div class="space-y-4">
    <VCard title="Variants">
      <div class="space-x-2">
        <VBadge v-for="color in colors" :key="color" :color="color">
          {{ color }}
        </VBadge>
      </div>
    </VCard>

    <VCard title="Rounded">
      <div class="space-x-2">
        <VBadge
          v-for="(size, index) in rounded"
          :key="index"
          :rounded="size"
          color="primary"
        >
          Text
        </VBadge>
      </div>
    </VCard>

    <VCard title="Outlined">
      <div class="space-x-2">
        <VBadge v-for="color in colors" :key="color" :color="color" outlined>
          {{ color }}
        </VBadge>
      </div>
    </VCard>

    <VCard title="Dismissable">
      <div class="space-x-2">
        <VBadge v-for="color in colors" :key="color" :color="color" dismissable>
          {{ color }}
        </VBadge>
      </div>
    </VCard>

    <VCard title="Sizes">
      <div class="space-x-2">
        <VBadge color="primary" small> Text </VBadge>
        <VBadge color="primary"> Text </VBadge>
        <VBadge color="primary" large> Text </VBadge>
      </div>
    </VCard>
  </div>
</template>
