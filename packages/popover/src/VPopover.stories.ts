import { VLogo } from '@morpheme/logo';
import { VAppBar } from '@morpheme/app-bar';
import type { Story } from "@storybook/vue3";
import VPopover from "./VPopover.vue";
import VPopoverButton from "./VPopoverButton.vue";
import VPopoverPanel from "./VPopoverPanel.vue";
import VPopoverOverlay from "./VPopoverOverlay.vue";
import VPopoverGroup from "./VPopoverGroup.vue";
import { popoverPlacements } from "./api";
import {List as VList, ListItem as VListItem} from '@morpheme/list'
import { VDivider } from '@morpheme/divider';

export default {
  title: "Components/Popover",
  component: VPopover,
};

export const Default: Story = (args) => ({
  components: { VPopover, VPopoverButton, VPopoverPanel },
  setup() {
    return { args };
  },
  template: `
    <VPopover v-bind="args">
      <VPopoverButton>Click me</VPopoverButton>
      <VPopoverPanel>
        <p class="px-4 py-3">Popover content</p>
      </VPopoverPanel>
    </VPopover>
  `,
});

export const Placement: Story = (args) => ({
  components: { VPopover, VPopoverButton, VPopoverPanel },
  setup() {
    return { args, popoverPlacements };
  },
  template: `
    <div class="grid grid-cols-4 gap-4 place-items-center h-screen">
      <VPopover v-bind="args" 
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
  `,
});

export const Overlay: Story = (args) => ({
  components: { VPopover, VPopoverButton, VPopoverPanel, VPopoverOverlay },
  setup() {
    return { args };
  },
  template: `
    <VPopover v-bind="args">
      <VPopoverButton>Click me</VPopoverButton>
      <VPopoverOverlay />
      <VPopoverPanel>
        <p class="px-4 py-3">Popover content</p>
      </VPopoverPanel>
    </VPopover>
  `,
});

export const Group: Story = (args) => ({
  components: {
    VPopover,
    VPopoverButton,
    VPopoverPanel,
    VPopoverOverlay,
    VPopoverGroup,
  },
  setup() {
    return { args };
  },
  template: `
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
  `,
});

export const NavigationMenus: Story = (args) => ({
  components: {
    VPopover,
    VPopoverButton,
    VPopoverPanel,
    VPopoverOverlay,
    VPopoverGroup,
    VAppBar,
    VLogo,
    VList,
    VListItem,
  },
  setup() {
    return { args };
  },
  template: `
    <VAppBar shadow>
      <div class="container mx-auto flex items-center gap-4">
        <VLogo />
        <VPopoverGroup class="flex items-center !gap-4">
          <VPopover>
            <VPopoverButton text flush>
              Home
            </VPopoverButton>
          </VPopover>
          <VPopover v-slot="{open}">
            <VPopoverButton text flush
              suffix-icon="ri:arrow-down-s-line"
              :class="{'text-primary-500': open}"
            >
              Getting Started
            </VPopoverButton>
            <VPopoverPanel class="flex gap-4 p-2 lg:w-[500px]">
              <div class="w-full lg:w-5/12">
                <div class="hover:bg-gray-50 px-3 py-2 rounded-md">
                  <h4 class="font-medium text-sm text-gray-900">
                    Morpheme UI
                  </h4>
                  <p class="text-sm text-gray-600 mt-0.5">
                    Morpheme UI is a free and open-source Vue UI Library based on Morpheme Design System
                  </p>
                </div>
              </div>
              <div class="w-full lg:w-7/12">
                <div class="hover:bg-gray-50 px-3 py-2 rounded-md">
                  <h4 class="font-medium text-sm text-gray-900">
                    Introduction
                  </h4>
                  <p class="text-sm text-gray-600 mt-0.5">
                    Learn more about Morpheme UI
                  </p>
                </div>
                <div class="hover:bg-gray-50 px-3 py-2 rounded-md">
                  <h4 class="font-medium text-sm text-gray-900">
                    Installation
                  </h4>
                  <p class="text-sm text-gray-600 mt-0.5">
                    Learn how to install Morpheme UI
                  </p>
                </div>
                <div class="hover:bg-gray-50 px-3 py-2 rounded-md">
                  <h4 class="font-medium text-sm text-gray-900">
                    Typography
                  </h4>
                  <p class="text-sm text-gray-600 mt-0.5">
                    Learn more about Morpheme UI typography
                  </p>
                </div>
              </div>
            </VPopoverPanel>
          </VPopover>
          <VPopover v-slot="{open}">
            <VPopoverButton text flush
              suffix-icon="ri:arrow-down-s-line"
              :class="{'text-primary-500': open}"
            >
              Components
            </VPopoverButton>
            <VPopoverPanel class="flex gap-4 p-2 lg:w-[500px]">
              <div class="w-full lg:w-6/12">
                <div class="hover:bg-gray-50 px-3 py-2 rounded-md">
                  <h4 class="font-semibold text-sm text-gray-900">
                    Alert
                  </h4>
                  <p class="text-sm text-gray-600 mt-0.5">
                    Learn more about Morpheme UI
                  </p>
                </div>
                <div class="hover:bg-gray-50 px-3 py-2 rounded-md">
                  <h4 class="font-semibold text-sm text-gray-900">
                    Card
                  </h4>
                  <p class="text-sm text-gray-600 mt-0.5">
                    Learn more about Morpheme UI
                  </p>
                </div>
                <div class="hover:bg-gray-50 px-3 py-2 rounded-md">
                  <h4 class="font-semibold text-sm text-gray-900">
                    Button
                  </h4>
                  <p class="text-sm text-gray-600 mt-0.5">
                    Learn more about Morpheme UI
                  </p>
                </div>
              </div>
              <div class="w-full lg:w-6/12">
                <div class="hover:bg-gray-50 px-3 py-2 rounded-md">
                  <h4 class="font-semibold text-sm text-gray-900">
                    Table
                  </h4>
                  <p class="text-sm text-gray-600 mt-0.5">
                    Learn more about Morpheme UI
                  </p>
                </div>
                <div class="hover:bg-gray-50 px-3 py-2 rounded-md">
                  <h4 class="font-semibold text-sm text-gray-900">
                    Forms
                  </h4>
                  <p class="text-sm text-gray-600 mt-0.5">
                    Learn more about Morpheme UI
                  </p>
                </div>
                <div class="hover:bg-gray-50 px-3 py-2 rounded-md">
                  <h4 class="font-semibold text-sm text-gray-900">
                    Tooltip
                  </h4>
                  <p class="text-sm text-gray-600 mt-0.5">
                    Learn more about Morpheme UI
                  </p>
                </div>
              </div>
            </VPopoverPanel>
          </VPopover>
        </VPopoverGroup>      
      </div>
    </VAppBar>
  `,
});

export const WithList: Story = (args) => ({
  components: { VPopover, VPopoverButton, VPopoverPanel,
    VList,
    VListItem,
    VDivider,
  },
  setup() {
    return { args };
  },
  template: `
    <VPopover v-bind="args">
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
  `,
});

export const DarkMode: Story = (args) => ({
  components: { VPopover, VPopoverButton, VPopoverPanel,
    VList,
    VListItem,
    VDivider,
  },
  setup() {
    return { args };
  },
  template: `
    <main class="dark dark:bg-neutral-900 dark:text-neutral-200 p-6 space-y-2">
      <VPopover v-bind="args">
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
    </main>
  `,
});