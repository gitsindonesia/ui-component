import {Meta, Story} from '@storybook/vue3';
import ContactFormSnippet from './ContactForm.vue';

export default {
  title: 'Snippets/Contact Form',
} as Meta;

export const ContactForm: Story = () => ({
  components: {ContactFormSnippet},
  template: `<ContactFormSnippet />`,
});
