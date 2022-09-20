import {Meta, Story} from '@storybook/vue3';
import ColorsComponent from './Colors.vue';

export default {
  title: 'Foundation/Colors',
} as Meta;

export const Colors: Story = () => ({
  components: {ColorsComponent},
  template: `<ColorsComponent />`,
});
