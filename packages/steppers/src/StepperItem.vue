<script setup lang="ts">
import StepperNumber from './StepperNumber.vue';
import StepperDivider from './StepperDivider.vue';
import type {StepItem} from './types';
import {toRefs, computed} from 'vue';

type Props = {
  index: number;
  item: StepItem;
  startFrom?: number;
  first?: boolean;
  active?: boolean;
  as?: string;
  vertical?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  startFrom: 1,
  first: false,
  active: false,
  as: 'div',
  vertical: false,
});

const {active, startFrom, first, as, item, index} = toRefs(props);

const displayIndex = computed(() => startFrom.value + index.value);
const isFirst = computed(() => first.value || index.value === 0);
const isRouterLink = computed(() =>
  ['router-link', 'RouterLink'].includes(as.value),
);
const to = computed(() => (isRouterLink.value ? item.value.path : ''));
</script>

<template>
  <component
    :is="as"
    :to="to"
    class="w-full flex gap-x-2 items-center"
    :class="[vertical ? 'flex-row' : 'flex-col']"
  >
    <div class="relative">
      <StepperDivider v-if="!isFirst" :vertical="vertical" />
      <StepperNumber
        :index="displayIndex"
        :is-active="active"
        :vertical="vertical"
      />
    </div>

    <div>
      <div
        :class="[
          active ? 'font-semibold' : '',
          vertical ? 'text-left' : 'text-center',
        ]"
      >
        <slot :name="`title.${index}`">
          {{ item.title }}
        </slot>
      </div>
      <slot v-if="item.subtitle" :name="`subtitle.${index}`">
        <div
          class="text-sm text-gray-600"
          :class="[
            active ? 'font-semibold' : '',
            vertical ? 'text-left' : 'text-center',
          ]"
        >
          {{ item.subtitle }}
        </div>
      </slot>
    </div>
  </component>
</template>
