<script setup lang="ts">
import {VDivider} from '../../divider/src';
import {ComboboxInput} from '@headlessui/vue';
import VIcon from '../../icon/src';
import type {ComponentPublicInstance} from 'vue';
import { ref} from 'vue';

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
  loading?: boolean;
}

withDefaults(defineProps<Props>(), {
  placement: 'inside',
  prefixIconSize: 'sm',
  suffixIconSize: 'sm',
});

defineOptions({
  inheritAttrs: false,
});

const searchInput = ref<ComponentPublicInstance<HTMLInputElement>>();

function clear() {
  if (!searchInput.value) return;

  searchInput.value.$el.value = '';
}

function focus() {
  if (!searchInput.value) return;

  searchInput.value.$el.focus();
}

export interface ExposedProps {
  clear: typeof clear;
  focus: typeof focus;
  ref: typeof searchInput;
}

defineExpose({
  clear,
  focus,
  ref: searchInput,
});
</script>

<template>
  <div
    :class="[
      'v-input v-input--borderless v-input--no-ring v-select-input',
      {
        'v-select-input-outside-wrapper': placement === 'outside',
        'v-input--disabled': disabled,
        'v-input--loading': loading,
        'v-select-input--disabled': disabled,
      },
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
        ref="searchInput"
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


