import type {Meta, Story} from '@storybook/vue3';
import Forms from './Forms.story.vue';
import FormsWithValidation from './FormsWithValidation.story.vue';

export default {
  title: 'Experimental/Forms/Playground',
  component: Forms,
} as Meta;

export const Example: Story = (args) => ({
  components: {Forms},
  setup() {
    return {args};
  },
  template: `<Forms v-bind='args'/>`,
});

export const WithValidation: Story = (args) => ({
  components: {FormsWithValidation},
  setup() {
    return {args};
  },
  template: `<FormsWithValidation v-bind='args'/>`,
});