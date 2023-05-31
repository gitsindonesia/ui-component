<script setup lang="ts">
//
</script>

<template>
  <VCard>
    <VTabGroup variant="filled" class="!px-0">
      <VTabList>
        <VTabItem>Preview</VTabItem>
        <VTabItem>Code</VTabItem>
      </VTabList>
      <VTabPanels class="w-full !px-0 mt-2">
        <VTabPanel
          class="w-full flex gap-2 flex-col bg-gray-100 p-6 rounded-lg"
        >
          <slot name="preview" />
        </VTabPanel>
        <VTabPanel class="w-full">
          <slot name="code" />
        </VTabPanel>
      </VTabPanels>
    </VTabGroup>
  </VCard>
</template>

<style>
.v-tabs-panels pre {
  margin-top: 0;
}
</style>
