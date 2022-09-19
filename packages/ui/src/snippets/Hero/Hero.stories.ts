import {Meta, Story} from '@storybook/vue3';
import HeroSnippet from './Hero.vue';

export default {
  title: 'Snippets/Hero Sections',
} as Meta;

export const HeroSections: Story = () => ({
  components: {HeroSnippet},
  template: `<HeroSnippet />`,
});
