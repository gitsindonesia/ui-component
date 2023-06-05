<script setup lang="ts">
function createItems(len = 10, additionalItem = {}) {
  return [...Array(len)].map((v, k) => ({
    text: `Tab Item ${k + 1}`,
    ...additionalItem,
  }));
}

const items = createItems();

const props = reactive({
  color: 'primary',
});

const tab = ref(0);
</script>

<template>
  <PageHeader title="Tabs" />

  <div class="space-y-4">
    <VCard title="Basic Example">
      <div>
        <VTabs v-bind="props" :items="items" />
      </div>
    </VCard>

    <VCard title="Show Arrow">
      <div>
        <VTabs v-bind="props" :items="items" show-arrows />
      </div>
    </VCard>

    <VCard title="Center Active">
      <div>
        <VTabs v-bind="props" :items="items" center-active />
      </div>
    </VCard>

    <VCard title="Vertical">
      <div class="flex flex-col lg:flex-row gap-4 items-start">
        <VTabs v-bind="props" :items="items" vertical />
        <VTabs v-bind="props" :items="items" vertical variant="filled" />
        <VTabs
          v-bind="props"
          :items="items"
          vertical
          variant="underline-filled"
        />
        <VTabs
          v-bind="props"
          :items="items"
          vertical
          variant="segmented-control"
        />
      </div>
    </VCard>

    <VCard title="Variants">
      <div>
        <VTabs v-bind="props" :items="items" />
        <VTabs v-bind="props" :items="items" variant="filled" />
        <VTabs v-bind="props" :items="items" variant="underline-filled" />
        <VTabs v-bind="props" :items="items" variant="segmented-control" />
      </div>
    </VCard>

    <VCard title="Colors">
      <div class="flex gap-2">
        <VBtn
          v-for="color in colors"
          :key="color"
          :color="color"
          size="sm"
          @click="props.color = color"
        >
          {{ color }}
        </VBtn>
      </div>
      <div>
        <VTabs v-bind="props" :items="items" />
        <VTabs v-bind="props" :items="items" variant="filled" />
        <VTabs v-bind="props" :items="items" variant="underline-filled" />
        <VTabs v-bind="props" :items="items" variant="segmented-control" />
      </div>
    </VCard>

    <VCard title="Custom Class">
      <div>
        <VTabs
          :items="items"
          default-class="!rounded-lg"
          inactive-class="hover:bg-success-50 hover:!text-success-600"
          active-class="bg-success-50 rounded-t text-success-600 font-semibold"
          hide-slider
        />
      </div>
    </VCard>

    <VCard title="Custom Style">
      <div>
        <VTabs
          :items="items"
          :style="{
            '--v-tabs-item-padding-x': '1rem',
            '--v-tabs-item-padding-y': '0.25rem',
            '--v-tabs-item-active-bg-color': 'purple',
            '--v-tabs-item-active-text-color': 'white',
            '--v-tabs-item-hover-bg-color': 'purple',
            '--v-tabs-item-hover-text-color': 'white',
            '--v-tabs-slider-height': '5px',
            '--v-tabs-slider-bg-color': 'pink',
            '--v-tabs-slider-border-color': 'pink',
          }"
        />
      </div>
    </VCard>

    <VCard title="Removeable">
      <div>
        <VTabs :items="items" removeable />
      </div>
    </VCard>

    <VCard title="Headless UI Tabs">
      <div>
        <VTabGroup v-model="tab">
          <VTabList>
            <VTabItem>Tab 1</VTabItem>
            <VTabItem>Tab 2</VTabItem>
            <VTabItem>Tab 3</VTabItem>
          </VTabList>
          <VTabPanels>
            <VTabPanel>Tab 1 content</VTabPanel>
            <VTabPanel>Tab 2 content</VTabPanel>
            <VTabPanel>Tab 3 content</VTabPanel>
          </VTabPanels>
        </VTabGroup>
      </div>
    </VCard>
  </div>
</template>
