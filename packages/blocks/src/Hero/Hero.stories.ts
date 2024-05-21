import type {Meta, StoryFn} from '@storybook/vue3';
import HeroSnippet from './Hero.vue';

export default {
  title: 'Blocks/Hero Sections',
} as Meta;

export const HeroSections: StoryFn = () => ({
  components: {HeroSnippet},
  template: `<HeroSnippet />`,
});
