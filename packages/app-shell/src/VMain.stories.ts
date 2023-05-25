import type {StoryFn, Meta} from '@storybook/vue3';
import VMain from './VMain.vue';

export default {
  title: 'Components/Main',
  component: VMain,
} as Meta;

export const Default: StoryFn = (args) => ({
  setup() {
    return {args};
  },
  components: {
    VMain,
  },
  template: `
<div class="bg-gray-100 p-4">
  <VMain class="bg-pink-100" v-bind="args">
    Main content here
  </VMain>
</div>
  `,
});

export const Fluid = Default.bind({});
Fluid.args = {
  fluid: true,
};

export const Padded = Default.bind({});
Padded.args = {
  padded: true,
};

export const Centered = Default.bind({});
Centered.args = {
  centered: true,
};
