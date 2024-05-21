import type {Meta, StoryFn} from '@storybook/vue3';
import TypographyComponent from './Typography.vue';

export default {
  title: 'Foundation/Typography',
} as Meta;

export const Typography: StoryFn = () => ({
  components: {TypographyComponent},
  template: `<TypographyComponent />`,
});
