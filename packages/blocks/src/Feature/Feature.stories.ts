import type {Meta, StoryFn} from '@storybook/vue3';
import FeatureSnippet from './Feature.vue';

export default {
  title: 'Blocks/Feature Sections',
  argTypes: {},
  args: {},
} as Meta;

export const FeatureSections: StoryFn = () => ({
  components: {FeatureSnippet},
  template: `<FeatureSnippet />`,
});
