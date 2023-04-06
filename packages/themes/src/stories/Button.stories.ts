import {Meta, Story} from '@storybook/vue3';
import '../morpheme/main.scss';
import VBtn from '@morpheme/button/src/VBtn.vue';

export default {
  title: 'Themes/Button',
  parameters: {
    layout: 'padded',
  },
} as Meta;

export const Hierarchies: Story<{}> = (args) => ({
  components: {VBtn},
  setup() {
    return {args};
  },
  template: `
    <div class="space-x-2">
      <VBtn color="primary">
        Primary
      </VBtn>
      <VBtn color="secondary">
        Secondary
      </VBtn>
      <VBtn color="tertiary">
        Tertiary
      </VBtn>
      <VBtn color="link">
        Link
      </VBtn>
      <VBtn color="destructive">
        Destructive
      </VBtn>
    </div>
  `,
});

export const Sizes: Story<{}> = (args) => ({
  components: {VBtn},
  setup() {
    return {args};
  },
  template: `
    <div class="space-x-2">
      <VBtn size="sm" color="primary">
        Button: sm
      </VBtn>
      <VBtn size="md" color="primary">
        Button: md
      </VBtn>
      <VBtn size="lg" color="primary">
        Button: lg
      </VBtn>
      <VBtn size="xl" color="primary">
        Button: xl
      </VBtn>
      <VBtn size="2xl" color="primary">
        Button: 2xl
      </VBtn>
    </div>
  `,
});
