import { VBtn, VAppShell, VAppBar, VLogo, VList, VListItem } from '@morpheme/ui';
import {NavDrawer as VNavDrawer} from '@morpheme/nav-drawer'
import type {Meta, Story} from '@storybook/vue3';
import VContainer from './VContainer.vue';
import { ref } from 'vue';

export default {
  title: 'Components/Container',
  component: VContainer,
  argTypes: {},
  args: {
    mini: false,
    fixed: false,
  },
} as Meta;

const Template: Story = (args) => ({
  components: {
    VContainer,
  },
  setup() {
    return {args};
  },
  template: `<VContainer v-bind="args">Content</VContainer>`,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: `<v-container> Content </v-container>`,
    },
  },
};

export const Mini = Template.bind({});
Mini.args = {mini: true};
Mini.parameters = {
  docs: {
    source: {
      code: `<v-container mini> Content </v-container>`,
    },
  },
};

export const Fixed = Template.bind({});
Fixed.args = {fixed: true};
Fixed.parameters = {
  docs: {
    source: {
      code: `<v-container fixed> Content </v-container>`,
    },
  },
};

export const Padded = Template.bind({});
Padded.args = {padded: true};
Padded.parameters = {
  docs: {
    source: {
      code: `<v-container padded> Content </v-container>`,
    },
  },
};

export const Fluid = Template.bind({});
Fluid.args = {fluid: true};
Fluid.parameters = {
  docs: {
    source: {
      code: `<v-container fluid> Content </v-container>`,
    },
  },
};

export const Centered = Template.bind({});
Centered.args = {centered: true};
Centered.parameters = {
  docs: {
    source: {
      code: `<v-container centered> Content </v-container>`,
    },
  },
};

export const Example: Story = (args) => ({
  components: {
    VContainer,
    VAppBar,
    VNavDrawer,
    VLogo,
    VList,
    VListItem,
    VAppShell,
    VBtn
  },
  setup() {
    const isDrawerOpen = ref(true)
    const isMini = ref(false)
    return {args, isMini, isDrawerOpen};
  },
  template: `
    <VAppBar shadow>
      <VContainer centered>
        <VBtn fab text icon prefix-icon="ri:menu-line"
          @click="isDrawerOpen = !isDrawerOpen"
        />
        <VBtn fab text icon prefix-icon="ri:side-bar-line"
          @click="isMini = !isMini"
        />
      </VContainer>
    </VAppBar>

    <div class="flex mt-4">
      <VNavDrawer
        v-model="isDrawerOpen"
        :mini="isMini"
      >
        <VList
          :mini="isMini"
        >
          <VListItem prepend-icon="ri:home-line">Home</VListItem>
          <VListItem prepend-icon="ri:settings-3-line">Settings</VListItem>
          <VListItem prepend-icon="ri:account-circle-line">Profile</VListItem>
        </VList>
      </VNavDrawer>
    <VContainer
      :mini="isMini"
    >
      Content
    </VContainer>
  </div>
  `,
});