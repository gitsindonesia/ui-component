<script setup lang="ts">
import {VBtn} from '../../../button/src';
import VProgressBar from '../../../progress/src';
import VIcon from '../../../icon/src';

interface Props {
  icon?: string;
  error?: boolean;
  name?: string;
  size?: number;
  progress?: number;
  progressColor?: string;
  progressProps?: Record<string, any>;
  locale?: string;
  sizeOptions?: Record<string, any>;
  success?: boolean;
  retryText?: string;
  removeText?: string;
}

const props = withDefaults(defineProps<Props>(), {
  icon: 'untitled:file-04',
  progressColor: 'primary',
  locale: 'en-US',
  retryText: 'Try Again',
  removeText: 'Remove',
});

const emit =
  defineEmits<{
    (e: 'remove'): void;
    (e: 'retry'): void;
  }>();

function formatSize(size: number) {
  return new Intl.NumberFormat(props.locale, {
    style: 'unit',
    unit: 'kilobyte',
    ...props.sizeOptions,
  }).format(size);
}
</script>

<template>
  <div
    class="flex gap-4 border rounded-[12px] p-4 relative"
    :class="{
      'border-primary-600': success,
    }"
  >
    <div
      class="
        w-10
        h-10
        rounded-full
        border-[6px]
        flex
        items-center
        justify-center
      "
      :class="{
        'border-primary-50 bg-primary-100': !error,
        'border-error-50 bg-error-100': error,
      }"
    >
      <VIcon
        :name="icon"
        class="mx-auto"
        :class="{
          'text-primary-600': !error,
          'text-error-600': error,
        }"
      />
    </div>
    <div class="space-y-1 flex-grow">
      <div class="flex">
        <div class="text-sm flex-grow font-medium text-gray-700">
          {{ name }}
        </div>
        <div>
          <div
            v-if="success"
            class="
              w-5
              h-5
              bg-primary-600
              rounded-full
              flex
              items-center
              justify-center
            "
          >
            <VIcon size="xs" name="untitled:check" class="text-white" />
          </div>
          <VBtn
            v-else
            prefix-icon="untitled:trash-01"
            size="sm"
            text
            icon
            fab
            @click="emit('remove')"
            class="!absolute !right-2 !top-2"
            :title="removeText"
            :aria-label="removeText"
          />
        </div>
      </div>
      <div class="text-sm text-gray-600">{{ formatSize(size!) }}</div>
      <VBtn
        v-if="error"
        size="sm"
        text
        flush
        :color="error ? 'error' : 'primary'"
        @click="emit('retry')"
      >
        {{ retryText }}
      </VBtn>
      <div v-else-if="progress" class="flex gap-2 items-center">
        <VProgressBar
          :model-value="progress"
          :color="progressColor"
          class="flex-grow"
          v-bind="progressProps"
        />
        <span class="text-sm text-gray-700">{{ progress }}%</span>
      </div>
    </div>
  </div>
</template>
