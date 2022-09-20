import {Meta, Story} from '@storybook/vue3';
import RoundedComponent from './Rounded.vue';

export default {
  title: 'Foundation/Rounded',
} as Meta;

export const Rounded: Story = () => ({
  components: {RoundedComponent},
  template: `<RoundedComponent />`,
});
