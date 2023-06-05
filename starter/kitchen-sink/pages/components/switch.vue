<script setup lang="ts">
const checked = ref(true);
</script>

<template>
  <PageHeader title="Switch" />

  <div class="space-y-4">
    <VCard title="Basic Example">
      <div>
        <VSwitch v-model="checked" label="Label" />
      </div>
    </VCard>

    <VCard title="Colors">
      <div class="flex flex-col gap-2">
        <VSwitch v-model="checked" color="primary" />
        <VSwitch v-model="checked" color="secondary" />
        <VSwitch v-model="checked" color="info" />
        <VSwitch v-model="checked" color="warning" />
        <VSwitch v-model="checked" color="success" />
        <VSwitch v-model="checked" color="error" />
      </div>
    </VCard>

    <VCard title="Custom Class">
      <div>
        <VSwitch
          v-model="checked"
          label="Custom Switch"
          switch-class="!border-cyan-200"
          active-class="!bg-white"
          inactive-class="!bg-white"
          button-class="!bg-cyan-500"
        />
      </div>
    </VCard>

    <VCard title="Custom Style">
      <div>
        <VSwitch
          v-model="checked"
          color="custom"
          :style="{
            '--v-switch-button-bg-color': 'transparent',
            '--v-switch-button-border-color': 'purple',
            '--v-switch-button-checked-bg-color': 'transparent',
            '--v-switch-button-checked-border-color': 'purple',
            '--v-switch-button-padding-x': '0.125rem',
            '--v-switch-thumb-bg-color': 'purple',
            '--v-switch-thumb-width': '1rem',
            '--v-switch-thumb-height': '1rem',
          }"
        />
      </div>
    </VCard>
  </div>
</template>
