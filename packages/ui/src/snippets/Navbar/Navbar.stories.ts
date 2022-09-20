import {Meta, Story} from '@storybook/vue3';
import Navbar from './Navbar.vue';

export default {
  title: 'Snippets/Navbar',
} as Meta;

export const Light: Story = () => ({
  components: {Navbar},
  template: `<Navbar />`,
});
