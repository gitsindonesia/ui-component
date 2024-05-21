import type {Meta, StoryFn} from '@storybook/vue3';
import RoundedComponent from './Rounded.vue';

export default {
  title: 'Foundation/Rounded',
} as Meta;

export const Rounded: StoryFn = () => ({
  components: {RoundedComponent},
  template: `<RoundedComponent />`,
});
