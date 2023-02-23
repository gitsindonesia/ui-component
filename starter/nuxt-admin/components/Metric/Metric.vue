<script setup lang="ts">
interface Props {
  title: string;
  value: number;
  state: 'up' | 'down';
  change: number;
  series: number[];
  categories?: string[];
}

const props = withDefaults(defineProps<Props>(), {
  categories: () => ['Dec', 'Jan', 'Feb'],
});
</script>

<template>
  <div
    class="
      border
      shadow-md
      rounded-md
      bg-white
      dark:bg-neutral-800
      dark:border-neutral-900
      px-4
      py-3
    "
  >
    <div class="flex items-center justify-between">
      <div class="text-gray-900 dark:text-neutral-200 font-semibold">
        {{ title }}
      </div>
      <VIcon
        name="ic:round-more-vert"
        size="20"
        class="text-gray-400 dark:text-neutral-400"
      />
    </div>

    <div class="flex gap-4 mt-5">
      <div class="flex-1">
        <div class="text-4xl font-semibold">
          {{ Number(value).toLocaleString() }}
        </div>
        <div class="mt-2">
          <VIcon
            :name="`ic:round-trending-${state}`"
            size="20"
            class="mr-1"
            :class="{
              'text-green-500': state === 'up',
              'text-red-500': state === 'down',
            }"
          />
          <span class="text-sm">
            <span
              :class="{
                'text-green-500': state === 'up',
                'text-red-500': state === 'down',
              }"
            >
              {{ change }}%
            </span>
            vs last month</span
          >
        </div>
      </div>
      <div>
        <MetricLineChart
          :title="title"
          :series="series"
          :categories="categories"
        />
      </div>
    </div>
  </div>
</template>
