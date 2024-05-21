import type {Meta, StoryFn} from '@storybook/vue3';
import SidebarLayoutSnippet from './SidebarLayout.vue';

export default {
  title: 'Blocks/Layouts',
} as Meta;

export const SidebarLayout: StoryFn = () => ({
  components: {SidebarLayoutSnippet},
  template: `<SidebarLayoutSnippet />`,
});
