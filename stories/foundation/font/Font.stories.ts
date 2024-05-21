import type {Meta, StoryFn} from '@storybook/vue3';
import FontComponent from './Font.vue';

export default {
  title: 'Foundation/Font',
} as Meta;

export const Font: StoryFn = () => ({
  components: {FontComponent},
  template: `<FontComponent />`,
});
