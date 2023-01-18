import {Meta, Story} from '@storybook/vue3';
import FontComponent from './Font.vue';

export default {
  title: 'Foundation/Font',
} as Meta;

export const Font: Story = () => ({
  components: {FontComponent},
  template: `<FontComponent />`,
});
