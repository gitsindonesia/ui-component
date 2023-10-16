import {VSelect} from '@morpheme/select';
import {alignItems, flexWrap, justifyContent} from './grid';
import {VCard} from '@morpheme/card';
import {StoryFn} from '@storybook/vue3';
import VRow from './VRow.vue';
import VCol from './VCol.vue';
import {reactive, ref} from 'vue';

export default {
  title: 'Components/Grid',
  component: VRow,
};

export const Default: StoryFn = (args) => ({
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

export const Cols: StoryFn = (args) => ({
  components: {VRow, VCol},
  setup() {
    return {args};
  },
  template: `
  <VRow gap="4">
    <VCol cols="1" class="bg-red-300 text-center">
      1
    </VCol>
    <VCol cols="3" class="bg-green-300 text-center">
      3
    </VCol>
    <VCol cols="8" class="bg-blue-300 text-center">
      8
    </VCol>
  </VRow>
  `,
});

export const Offset: StoryFn = (args) => ({
  components: {VRow, VCol},
  setup() {
    return {args};
  },
  template: `
  <VRow gap="4">
    <VCol cols="3" class="bg-red-100 text-center">
      1
    </VCol>
    <VCol cols="3" class="bg-green-100 text-center">
      2
    </VCol>
    <VCol cols="3" offset="3" class="bg-blue-100 text-center">
      3
    </VCol>
  </VRow>
  `,
});

export const Order: StoryFn = (args) => ({
  components: {VRow, VCol},
  setup() {
    return {args};
  },
  template: `
  <VRow gap="4">
    <VCol cols="4" order="2" class="bg-red-100 text-center">
      1
    </VCol>
    <VCol cols="4" order="3" class="bg-green-100 text-center">
      2
    </VCol>
    <VCol cols="4" order="1" class="bg-blue-100 text-center">
      3
    </VCol>
  </VRow>
  `,
});

function toItems(obj: any) {
  return Object.keys(obj).map((key) => ({
    text: obj[key],
    value: key,
  }));
}

export const Wrap: StoryFn = (args) => ({
  components: {VRow, VCol, VSelect},
  setup() {
    const wrap = ref('');
    return {
      args,
      wrap,
      wrapItems: toItems(flexWrap),
    };
  },
  template: `
  <VSelect wrapper-class="mb-4" v-model="wrap" label="Wrap" :items="wrapItems" />
  
  <VRow gap="4" :wrap="wrap">
    <VCol cols="4" order="2" class="bg-red-100 text-center">
      1
    </VCol>
    <VCol cols="4" order="3" class="bg-green-100 text-center">
      2
    </VCol>
    <VCol cols="4" order="1" class="bg-blue-100 text-center">
      3
    </VCol>
  </VRow>
  `,
});

export const Alignment: StoryFn = (args) => ({
  components: {VRow, VCol, VSelect},
  setup() {
    const option = reactive({
      align: 'center',
      alignContent: 'center',
      justifyContent: 'center',
    });

    return {
      args,
      alignItems: toItems(alignItems),
      justifyContent: toItems(justifyContent),
      alignContent: toItems(justifyContent),
      option,
    };
  },
  template: `
  <VRow gap="4" class="mb-6">
    <VCol>
      <VSelect v-model="option.align" label="Align Items" :items="alignItems" />
    </VCol>
    <VCol>
      <VSelect v-model="option.alignContent" label="Align Content" :items="alignContent" />
    </VCol>
    <VCol>
      <VSelect v-model="option.justifyContent" label="Justify Content" :items="justifyContent" />
    </VCol>
  </VRow>

  <VRow
    gap="4"
    v-bind="option"
  >
    <VCol class="bg-red-100 text-center">
      <div class="h-10 bg-purple-500">
        1
      </div>
    </VCol>
    <VCol class="bg-green-100 text-center">
      2
    </VCol>
    <VCol class="bg-blue-100 text-center">
      3
    </VCol>
  </VRow>
  `,
});

export const Responsive: StoryFn = (args) => ({
  components: {VRow, VCol, VCard},
  setup() {
    return {args};
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

export const LayoutExample: StoryFn = (args) => ({
  components: {VRow, VCol, VCard},
  setup() {
    const stats = [
      {
        title: 'Total Subscribers',
        value: '71,897',
        color: '',
      },
      {
        title: 'Avg. Open Rate',
        value: '58.16%',
      },
      {
        title: 'Avg. Click Rate',
        value: '24.57%',
      },
      {
        title: 'Avg. Bounce Rate',
        value: '4.24%',
      },
    ];
    return {args, stats};
  },
  template: `
  <VRow gap="4">
    <VCol
      cols="12"
      sm="3"
      v-for="stat in stats"
      :key="stat.title"
    >
      <VCard :title="stat.title">
        <div class="text-xl font-bold">
          {{ stat.value }}
        </div>
      </VCard>
    </VCol>
  </VRow>
  `,
});
