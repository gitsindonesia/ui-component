import type {Meta, StoryFn} from '@storybook/vue3';
import Navbar from './Navbar.vue';

export default {
  title: 'Blocks/Navbar',
} as Meta;

export const Light: StoryFn = () => ({
  components: {Navbar},
  template: `<Navbar />`,
});
