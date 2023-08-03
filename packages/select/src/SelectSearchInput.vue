<script setup lang="ts">
import {VDivider} from '@morpheme/divider';
import {ComboboxInput} from '@headlessui/vue';
import VIcon from '@morpheme/icon';

interface Props {
  placement?: 'inside' | 'outside';
  placeholder?: string;
  disabled?: boolean;
  displayValue?: (item: Record<string, any>) => string;
  prefixIcon?: string;
  prefixIconSize?: string;
  prefixIconClass?: string;
  suffixIcon?: string;
  suffixIconSize?: string;
  suffixIconClass?: string;
}

withDefaults(defineProps<Props>(), {
  placement: 'inside',
  prefixIconSize: 'sm',
  suffixIconSize: 'sm',
});

defineOptions({
  inheritAttrs: false,
});
</script>

<template>
  <div
    :class="[
      'v-input v-input--borderless v-input--no-ring v-select-input',
      {'v-select-input-outside-wrapper': placement === 'outside'},
    ]"
  >
    <div class="v-input-wrapper">
      <div class="v-input-prepend">
        <VIcon
          v-if="prefixIcon"
          :name="prefixIcon"
          :size="prefixIconSize"
          :class="prefixIconClass"
        />
      </div>

      <ComboboxInput
        class="v-select-input v-input-control"
        :display-value="displayValue"
        :placeholder="placeholder"
        :disabled="disabled"
        v-bind="$attrs"
      />

      <div class="v-input-append">
        <VIcon
          v-if="suffixIcon"
          :name="suffixIcon"
          :size="suffixIconSize"
          :class="suffixIconClass"
        />
      </div>
    </div>
  </div>
  <VDivider v-if="placement === 'outside'" />
</template>
