import {Meta, Story} from '@storybook/vue3';
import Cta from './Cta.vue';

export default {
  title: 'Snippets/CTA Sections',
} as Meta;

export const CTASections: Story = () => ({
  components: {Cta},
  template: `<Cta />`,
});
