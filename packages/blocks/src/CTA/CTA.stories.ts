import type {Meta, StoryFn} from '@storybook/vue3';
import Cta from './Cta.vue';

export default {
  title: 'Blocks/CTA Sections',
} as Meta;

export const CTASections: StoryFn = () => ({
  components: {Cta},
  template: `<Cta />`,
});
