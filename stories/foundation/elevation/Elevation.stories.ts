import {Meta, Story} from '@storybook/vue3';
import ElevationComponent from './Elevation.vue';

export default {
  title: 'Foundation/Elevation',
} as Meta;

export const Elevation: Story = () => ({
  components: {ElevationComponent},
  template: `<ElevationComponent />`,
});
