import VText from './VText.vue';
import {Meta, StoryFn} from '@storybook/vue3';
import {textVariants, fontWeightVariants} from './variants';
import {colorVariants} from '@morpheme/utils';

export default {
  title: 'Components/Text',
  component: VText,
} as Meta;

export const Variant: StoryFn<typeof VText> = (args) => ({
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

export const FontWeight: StoryFn<typeof VText> = (args) => ({
  components: {VText},
  setup() {
    return {args, fontWeightVariants};
  },
  template: `
  <div class="space-y-4">
    <div v-for="fontWeight in fontWeightVariants">
      <VText variant="sm" font-weight="medium" class="text-gray-500">{{ fontWeight }}</VText>
      <VText :font-weight="fontWeight" variant="display-xs">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </VText>
    </div>
  </div>
  `,
});

export const Colors: StoryFn<typeof VText> = (args) => ({
  components: {VText},
  setup() {
    return {args, colorVariants};
  },
  template: `
  <div class="space-y-4">
    <div v-for="color in colorVariants">
      <VText variant="sm" font-weight="medium" class="text-gray-500">{{ color }}</VText>
      <VText :color="color" variant="display-xs">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </VText>
    </div>
    <div>
      <VText variant="sm" font-weight="medium" class="text-gray-500">
        Unspecified Color
      </VText>
      <VText variant="display-xs">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </VText>
    </div>
    <div>
      <VText variant="sm" font-weight="medium" class="text-gray-500">
        Design Token Color (rose.700)
      </VText>
      <VText color="rose.700" variant="display-xs">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </VText>
    </div>
    <div>
      <VText variant="sm" font-weight="medium" class="text-gray-500">
        Custom Color (#FF87A0)
      </VText>
      <VText color="#FF87A0" variant="display-xs">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </VText>
    </div>
    <div>
      <VText variant="sm" font-weight="medium" class="text-gray-500">
        Custom Color (lightblue)
      </VText>
      <VText color="lightblue" variant="display-xs">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </VText>
    </div>
  </div>
  `,
});

Colors.parameters = {
  docs: {
    source: {
      language: 'html',
      code: `
<VText color="primary" variant="display-xs">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit
</VText>
<VText color="secondary" variant="display-xs">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit
</VText>
<VText color="info" variant="display-xs">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit
</VText>
<VText color="warning" variant="display-xs">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit
</VText>
<VText color="error" variant="display-xs">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit
</VText>
<VText color="success" variant="display-xs">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit
</VText>
<!-- design token color -->
<VText color="rose.700" variant="display-xs">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit
</VText>
<!-- custom color -->
<VText color="#FF87A0" variant="display-xs">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit
</VText>
<VText color="lightblue" variant="display-xs">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit
</VText>
<!-- unspecify color -->
<VText variant="display-xs">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit
</VText>
      `,
    },
  },
};
