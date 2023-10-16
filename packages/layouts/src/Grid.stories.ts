import { VSelect } from '@morpheme/select';
import { alignItems, alignContent, justifyContent } from './grid';
import { VCard } from '@morpheme/card';
import { Story } from '@storybook/vue3';
import VRow from './VRow.vue';
import VCol from './VCol.vue';
import { reactive } from 'vue';

export default {
  title: 'Components/Grid',
  component: VRow,
};

export const Default: Story<{}> = (args) => ({
  components: { VRow, VCol },
  setup() {
    return { args };
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
  components: { VRow, VCol },
  setup() {
    return { args };
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
  components: { VRow, VCol },
  setup() {
    return { args };
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
  components: { VRow, VCol },
  setup() {
    return { args };
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

export const Alignment: Story<{}> = (args) => ({
  components: { VRow, VCol, VSelect },
  setup() {
    const option = reactive({
      align: 'center',
      alignContent: 'center',
      justifyContent: 'center',
    })
    function toItems(obj: any) {
      return Object.keys(obj).map(key => ({
        text: obj[key],
        value: key
      }));
    }

    return {
      args,
      alignItems: toItems(alignItems),
      justifyContent: toItems(justifyContent),
      alignContent: toItems(justifyContent),
      option
    };
  },
  template: `
  <VRow gap="4" class="mb-6">
    <VCol cols="3">
      <VSelect v-model="option.align" label="Align Items" :items="alignItems" />
    </VCol>
    <VCol cols="3">
      <VSelect v-model="option.alignContent" label="Align Content" :items="alignContent" />
    </VCol>
    <VCol cols="3">
      <VSelect v-model="option.justifyContent" label="Justify Content" :items="justifyContent" />
    </VCol>
  </VRow>

  <VRow
    gap="4"
    v-bind="option"
  >
    <VCol cols="3" class="bg-gray-100 text-center">
      <div class="h-10 bg-red-500">
        1
      </div>
    </VCol>
    <VCol cols="3" class="bg-gray-100 text-center">
      2
    </VCol>
    <VCol cols="3" class="bg-gray-100 text-center">
      3
    </VCol>
  </VRow>
  `,
});

export const Responsive: Story<{}> = (args) => ({
  components: { VRow, VCol, VCard },
  setup() {
    return { args };
  },
  template: `
  <VRow>
    <VCol cols="12" sm="3" lg="4" xl="4">
      <div class="bg-gray-200 p-2 m-2">
        1
      </div>
    </VCol>
    <VCol cols="12" sm="3" lg="4" xl="4">
      <div class="bg-gray-200 p-2 m-2">
        2
      </div>
    </VCol>
    <VCol cols="12" sm="3" lg="4" xl="4">
      <div class="bg-gray-200 p-2 m-2">
        3
      </div>
    </VCol>
  </VRow>
  `,
});
