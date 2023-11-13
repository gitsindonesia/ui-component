import type {Meta, Story} from '@storybook/vue3';
import Navbar from './Navbar.vue';

export default {
  title: 'Blocks/Navbar',
} as Meta;

export const Light: Story = () => ({
  components: {Navbar},
  template: `<Navbar />`,
});
