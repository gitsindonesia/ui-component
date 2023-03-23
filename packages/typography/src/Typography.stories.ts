import VText from './VText.vue';
import {Meta, StoryFn} from '@storybook/vue3';
import './Typography.scss';
import {textVariants} from './variants';

export default {
  title: 'Components/Typography',
  component: VText,
} as Meta;

export const Text: StoryFn<typeof VText> = (args) => ({
  components: {VText},
  setup() {
    return {args, textVariants};
  },
  template: `
  <div class="space-y-4">
    <div v-for="variant in textVariants">
      <VText variant="sm" font-weight="medium" class="text-gray-500">{{ variant }}</VText>
      <VText :variant="variant">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </VText>
    </div>
  </div>
  `,
});
