import type {Meta, StoryFn} from '@storybook/vue3';
import ElevationComponent from './Elevation.vue';

export default {
  title: 'Foundation/Elevation',
} as Meta;

export const Elevation: StoryFn = () => ({
  components: {ElevationComponent},
  template: `<ElevationComponent />`,
});
