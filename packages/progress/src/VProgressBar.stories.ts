import VProgressBar from './VProgressBar.vue';
import {themeColors} from '@morpheme/utils/colors';
import {Meta, Story} from '@storybook/vue3';
import {ref} from 'vue';
import VBtn from '@morpheme/button';
import './VProgressBar.dark.scss';

export default {
  title: 'Components/ProgressBar',
  component: VProgressBar,
  argTypes: {
    color: {
      control: 'select',
      options: themeColors,
    },
  },
  args: {
    modelValue: 70,
  },
} as Meta;

const Template: Story = (args) => ({
  components: {VProgressBar},
  setup() {
    return {args, themeColors};
  },
  template: `
    <VProgressBar v-for="color in themeColors" :key="color" v-bind='args' :color="color" class="mb-4" />
  `,
});

export const Variants = Template.bind({});
Variants.args = {};
Variants.parameters = {
  docs: {
    source: {
      code: `
<v-progress-bar color="default" :width="70" />
<v-progress-bar color="primary" :width="70" />
<v-progress-bar color="secondary" :width="70" />
<v-progress-bar color="info" :width="70" />
<v-progress-bar color="warning" :width="70" />
<v-progress-bar color="success" :width="70" />
<v-progress-bar color="error" :width="70" />
<v-progress-bar color="dark" :width="70" />
      `,
    },
  },
};

export const Slots: Story = (args) => ({
  components: {VProgressBar},
  setup() {
    return {args};
  },
  template: `
    <VProgressBar color="secondary" class="mb-4" v-slot="{value}" height="auto" v-bind="args">
      {{ value }} %
    </VProgressBar>
    <VProgressBar color="primary" class="mb-4" :height="20" v-bind="args"> 
      <template #label="{value}">
      {{ value }} %
      </template>
    </VProgressBar>
  `,
});

export const VModel: Story = (args) => ({
  components: {VProgressBar, VBtn},
  setup() {
    const value = ref(10);
    return {args, value};
  },
  template: `
    <VProgressBar color="secondary" v-model="value"/>

    <div class="mt-4 space-x-2">
      <VBtn size="sm" @click="value -= 10">-10</VBtn>
      <VBtn size="sm" @click="value += 10">+10</VBtn>
      <VBtn size="sm" @click="value = 100">Full</VBtn>
      <VBtn size="sm" @click="value = 0">Reset</VBtn>
    </div>
  `,
});

export const Indeterminate: Story = (args) => ({
  components: {VProgressBar},
  setup() {
    return {args};
  },
  template: `
    <VProgressBar color="secondary" indeterminate/>
  `,
});

export const DarkMode: Story = (args) => ({
  components: {VProgressBar},
  setup() {
    return {args, themeColors};
  },
  template: `
  <div class="dark dark:bg-neutral-900 dark:text-neutral-200 p-6">
    <VProgressBar
      v-for="color in themeColors"
      :key="color"
      v-bind='args'
      :color="color"
      class="mb-4"
    />
  </div>
  `,
});
