<script setup lang="ts">
export interface Option {
  label: string;
  value: string | number;
  disabled?: boolean;
  selected?: boolean;
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
        :value="subOption?.value"
        :disabled="subOption?.disabled"
        :selected="subOption?.selected"
      >
        {{ subOption?.label || subOption }}
      </option>
    </optgroup>
    <option
      v-else
      :key="index"
      :value="option?.value"
      :disabled="option?.disabled"
      :selected="option?.selected"
    >
      {{ option?.label || option }}
    </option>
  </template>
</template>
