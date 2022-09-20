import {Meta, Story} from '@storybook/vue3';
import TypographyComponent from './Typography.vue';

export default {
  title: 'Foundation/Typography',
} as Meta;

export const Typography: Story = () => ({
  components: {TypographyComponent},
  template: `<TypographyComponent />`,
});
