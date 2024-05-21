import type {Meta, StoryFn} from '@storybook/vue3';
import ContactFormSnippet from './ContactForm.vue';

export default {
  title: 'Blocks/Contact Form',
} as Meta;

export const ContactForm: StoryFn = () => ({
  components: {ContactFormSnippet},
  template: `<ContactFormSnippet />`,
});
