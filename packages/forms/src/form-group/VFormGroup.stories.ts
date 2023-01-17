import {Story} from '@storybook/vue3';
import VFormGroup from './VFormGroup.vue';

export default {
  title: 'Forms/FormGroup',
  component: VFormGroup,
  argTypes: {},
  args: {
    label: 'Label',
  },
};

const Template: Story<{}> = (args) => ({
  components: {VFormGroup},
  setup() {
    return {args};
  },
  template: `<VFormGroup v-bind='args'>Content</VFormGroup>`,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: '<v-form-group label="Label"> Content </v-form-group>',
    },
  },
};

// dark mode
export const DarkMode: Story<{}> = (args) => ({
  components: {VFormGroup},
  setup() {
    return {args};
  },
  template: `
  <div class="dark:bg-neutral-900 p-6">
    <VFormGroup v-bind='args'>Content</VFormGroup>
  </div>
  `,
});
