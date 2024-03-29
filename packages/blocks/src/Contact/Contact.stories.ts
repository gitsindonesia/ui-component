import type {Meta, Story} from '@storybook/vue3';
import ContactFormSnippet from './ContactForm.vue';

export default {
  title: 'Blocks/Contact Form',
} as Meta;

export const ContactForm: Story = () => ({
  components: {ContactFormSnippet},
  template: `<ContactFormSnippet />`,
});
