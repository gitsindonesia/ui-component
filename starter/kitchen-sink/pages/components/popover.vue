<script setup lang="ts">
import { popoverPlacements } from "@morpheme/popover";

const placement = ref("bottom");
</script>

<template>
  <PageHeader title="Popover" />

  <div class="space-y-4">
    <VCard title="Basic Example">
      <div>
        <VPopover>
          <VPopoverButton>Click me</VPopoverButton>
          <VPopoverPanel>
            <p class="px-4 py-3">Popover content</p>
          </VPopoverPanel>
        </VPopover>
      </div>
    </VCard>

    <VCard title="Placement">
      <div>
        <div class="grid grid-cols-4 gap-4 place-items-center">
          <VPopover
            v-for="placement in popoverPlacements"
            :key="placement"
            :placement="placement"
          >
            <VPopoverButton>
              {{ placement }}
            </VPopoverButton>
            <VPopoverPanel>
              <p class="px-4 py-3">Popover content</p>
            </VPopoverPanel>
          </VPopover>
        </div>
      </div>
    </VCard>

    <VCard title="Overlay">
      <div>
        <VPopover>
          <VPopoverButton>Click me</VPopoverButton>
          <VPopoverOverlay />
          <VPopoverPanel>
            <p class="px-4 py-3">Popover content</p>
          </VPopoverPanel>
        </VPopover>
      </div>
    </VCard>

    <VCard title="Group">
      <div>
        <VPopoverGroup>
          <VPopover>
            <VPopoverButton text>Click me</VPopoverButton>
            <VPopoverPanel>
              <p class="px-4 py-3">Popover content</p>
            </VPopoverPanel>
          </VPopover>
          <VPopover>
            <VPopoverButton text>Click me</VPopoverButton>
            <VPopoverPanel>
              <p class="px-4 py-3">Popover content</p>
            </VPopoverPanel>
          </VPopover>
        </VPopoverGroup>
      </div>
    </VCard>

    <VCard title="With List">
      <div>
        <VPopover>
          <VPopoverButton>Click me</VPopoverButton>
          <VPopoverPanel>
            <VList hover>
              <VListItem prepend-icon="ri:eye-line">View</VListItem>
              <VListItem prepend-icon="ri:edit-line">Edit</VListItem>
              <VDivider />
              <VListItem prepend-icon="ri:delete-bin-line">Delete</VListItem>
            </VList>
          </VPopoverPanel>
        </VPopover>
      </div>
    </VCard>
  </div>
</template>
