import {Story} from '@storybook/vue3';
import VRow from './VRow.vue';
import VCol from './VCol.vue';

export default {
  title: 'Components/Grid',
  component: VRow,
};

export const Default: Story<{}> = (args) => ({
  components: {VRow, VCol},
  setup() {
    return {args};
  },
  template: `
  <VRow gap="4">
    <VCol v-for="i in 12" :key="i" class="bg-gray-100 text-center">
      {{ i }}
    </VCol>
  </VRow>
  `,
});

export const Cols: Story<{}> = (args) => ({
  components: {VRow, VCol},
  setup() {
    return {args};
  },
  template: `
  <VRow gap="4">
    <VCol cols="1" class="bg-gray-100 text-center">
      1
    </VCol>
    <VCol cols="3" class="bg-gray-100 text-center">
      3
    </VCol>
    <VCol cols="8" class="bg-gray-100 text-center">
      8
    </VCol>
  </VRow>
  `,
});

export const Offset: Story<{}> = (args) => ({
  components: {VRow, VCol},
  setup() {
    return {args};
  },
  template: `
  <VRow gap="4">
    <VCol cols="3" class="bg-gray-100 text-center">
      1
    </VCol>
    <VCol cols="3" class="bg-gray-100 text-center">
      2
    </VCol>
    <VCol cols="3" offset="3" class="bg-gray-100 text-center">
      3
    </VCol>
  </VRow>
  `,
});

export const Order: Story<{}> = (args) => ({
  components: {VRow, VCol},
  setup() {
    return {args};
  },
  template: `
  <VRow gap="4">
    <VCol cols="3" order="2" class="bg-gray-100 text-center">
      1
    </VCol>
    <VCol cols="3" order="3" class="bg-gray-100 text-center">
      2
    </VCol>
    <VCol cols="3" order="1" class="bg-gray-100 text-center">
      3
    </VCol>
  </VRow>
  `,
});
