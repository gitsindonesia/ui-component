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
            {{ open }}
              Products
            </VPopoverButton>
            <VPopoverPanel>
              <div class="my-2">
                <VList hide-append flush>
                  <VListItem v-for="i in 6" :key="i">
                    <div class="font-semibold">Product {{ i }}</div>
                    <p class="text-sm">Product description</p>
                  </VListItem>
                </VList>
              </div>
            </VPopoverPanel>
          </VPopover>
          <VPopover v-slot="{open}">
            <VPopoverButton text flush
              suffix-icon="ri:arrow-down-s-line"
              :class="{'text-primary-500': open}"
            >
              Categories
            </VPopoverButton>
            <VPopoverPanel>
              <div class="my-2">
                <VList hide-append flush>
                  <VListItem v-for="i in 6" :key="i">Category {{ i }}</VListItem>
                </VList>
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