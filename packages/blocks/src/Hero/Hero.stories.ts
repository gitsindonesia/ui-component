import type {Meta, Story} from '@storybook/vue3';
import HeroSnippet from './Hero.vue';

export default {
  title: 'Blocks/Hero Sections',
} as Meta;

export const HeroSections: Story = () => ({
  components: {HeroSnippet},
  template: `<HeroSnippet />`,
});
