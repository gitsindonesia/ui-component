import {Story} from '@storybook/vue3';
import {ref} from 'vue';
import VProgressCircular from './VProgressCircular.vue';

export default {
  title: 'Components/ProgressCircular',
  component: VProgressCircular,
};

export const Default: Story<{}> = (args) => ({
  components: {
    VProgressCircular,
  },
  setup() {
    const value = ref(50);
    return {args, value};
  },
  template: `
    <VProgressCircular v-bind="args" v-model="value" />
  `,
});

export const Text: Story<{}> = (args) => ({
  components: {
    VProgressCircular,
  },
  setup() {
    const value = ref(50);
    return {args, value};
  },
  template: `
    <VProgressCircular v-bind="args" v-model="value">
      {{ value }}
    </VProgressCircular>
  `,
});

export const Indeterminate = Default.bind({});
Indeterminate.args = {
  indeterminate: true,
};

export const CustomColor: Story<{}> = (args) => ({
  components: {
    VProgressCircular,
  },
  setup() {
    const value = ref(50);
    return {args, value};
  },
  template: `
    <VProgressCircular
      v-bind="args"
      v-model="value"
      color="rose.500"
      textColor="warning.500"
    >
      {{ value }}%
    </VProgressCircular>
  `,
});

export const CustomSize = Default.bind({});
CustomSize.args = {
  size: 50,
  width: 8,
};
