import type {Meta, StoryFn} from '@storybook/vue3';
import ColorsComponent from './Colors.vue';

export default {
  title: 'Foundation/Colors',
} as Meta;

export const Colors: StoryFn = () => ({
  components: {ColorsComponent},
  template: `<ColorsComponent />`,
});
