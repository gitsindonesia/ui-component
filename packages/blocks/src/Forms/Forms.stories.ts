import {Meta, Story} from '@storybook/vue3';
import DefaultForm from './DefaultForm.vue';
import InlineForm from './InlineForm.vue';

export default {
  title: 'Blocks/Forms',
} as Meta;

export const Default: Story = () => ({
  components: {DefaultForm},
  template: `<DefaultForm />`,
});

export const Inline: Story = () => ({
  components: {InlineForm},
  template: `<InlineForm />`,
});
