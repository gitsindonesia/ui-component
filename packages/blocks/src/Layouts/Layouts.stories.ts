import {Meta, Story} from '@storybook/vue3';
import SidebarLayoutSnippet from './SidebarLayout.vue';

export default {
  title: 'Blocks/Layouts',
} as Meta;

export const SidebarLayout: Story = () => ({
  components: {SidebarLayoutSnippet},
  template: `<SidebarLayoutSnippet />`,
});
