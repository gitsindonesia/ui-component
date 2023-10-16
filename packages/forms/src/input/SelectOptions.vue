<script setup lang="ts">
export interface Option {
  label: string;
  value: string | number;
  options?: Option[];
}

interface Props {
  options: Option[];
}

withDefaults(defineProps<Props>(), {
  options: () => [] as Option[],
});
</script>

<template>
  <template v-for="(option, index) in options" :key="index">
    <optgroup v-if="option.options?.length" :label="option.label">
      <option
        v-for="(subOption, index) in option.options"
        :key="index"
        :value="subOption?.value || subOption"
      >
        {{ subOption?.label || subOption }}
      </option>
    </optgroup>
    <option v-else :key="index" :value="option?.value || option">
      {{ option?.label || option }}
    </option>
  </template>
</template>
