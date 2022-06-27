<script setup>
import {ref, toRefs, onMounted} from 'vue';
import {useRange} from './useRange';
import {useInputClasses} from '@gits-id/utils';
import {useField} from 'vee-validate';

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  min: {
    type: Number,
    default: 1,
  },
  max: {
    type: Number,
    default: 100,
  },
  step: {
    type: Number,
    default: 1,
  },
  showInput: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    default: '',
  },
  rules: {
    type: String,
    default: '',
  },
  errorClass: {
    type: String,
    default: 'text-error-600 text-sm mt-1',
  },
  label: {
    type: String,
    default: '',
  },
  labelClass: {
    type: String,
    default: 'block mb-1',
  },
});

const {modelValue, showInput, name, rules} = toRefs(props);

const emit = defineEmits(['update:modelValue']);

const {value, errorMessage} = useField(name, rules, {
  initialValue: modelValue,
});

const inputClass = useInputClasses();

const {
  minValue,
  maxValue,
  min,
  max,
  minThumb,
  maxThumb,
  step,
  minTrigger,
  maxTrigger,
  validation,
} = useRange(props.min, props.max, props.step);

onMounted(() => {
  minTrigger();
  maxTrigger();
});
</script>

<template>
  <div>
    <label v-if="label" :class="labelClass">{{ label }}</label>
    <div class="flex justify-center items-center">
      <div class="relative w-full">
        <div>
          <div class="flex justify-between mb-3">
            <label class="text-gray-700 text-sm" for="min"
              >{{ minValue }}
            </label>
            <label class="text-gray-700 text-sm" for="max"
              >{{ maxValue }}
            </label>
          </div>

          <input
            v-model="minValue"
            type="range"
            :step="step"
            :min="min"
            :max="max"
            class="
              absolute
              pointer-events-none
              appearance-none
              z-20
              h-2
              w-full
              opacity-0
              cursor-pointer
            "
            @input="minTrigger"
          />

          <input
            v-model="maxValue"
            type="range"
            :step="step"
            :min="min"
            :max="max"
            class="
              absolute
              pointer-events-none
              appearance-none
              z-20
              h-2
              w-full
              opacity-0
              cursor-pointer
            "
            @input="maxTrigger"
          />

          <div class="relative z-10 h-2">
            <div
              class="
                absolute
                z-10
                left-0
                right-0
                bottom-0
                top-0
                rounded-md
                bg-gray-400
                h-1
              "
            ></div>

            <div
              class="
                absolute
                z-20
                top-0
                bottom-0
                rounded-md
                bg-gradient-to-r
                from-primary-400
                to-primary-600
                h-1
              "
              :style="'right:' + maxThumb + '%; left:' + minThumb + '%'"
            ></div>

            <div
              class="
                absolute
                z-30
                w-4
                h-4
                top-0
                left-0
                bg-primary-400
                rounded-full
                -mt-1.5
              "
              :style="'left: ' + minThumb + '%'"
            ></div>

            <div
              class="
                absolute
                z-30
                w-4
                h-4
                top-0
                right-0
                bg-primary-600
                rounded-full
                -mt-1.5
              "
              :style="'right: ' + maxThumb + '%'"
            ></div>
          </div>
        </div>

        <div
          v-if="showInput"
          class="
            flex
            items-center
            justify-between
            pt-5
            space-x-4
            text-sm text-gray-700
          "
        >
          <div>
            <input
              v-model="minValue"
              type="text"
              maxlength="5"
              :class="inputClass"
              @input="minTrigger"
            />
          </div>
          <div>
            <input
              v-model="maxValue"
              type="text"
              maxlength="5"
              :class="inputClass"
              @input="maxTrigger"
            />
          </div>
        </div>
      </div>
    </div>

    <div v-if="errorMessage" :class="errorClass">
      {{ errorMessage }}
    </div>
  </div>
</template>

<style scoped>
input[type='range']::-webkit-slider-thumb {
  @apply w-6 h-6 appearance-none pointer-events-auto;
}
</style>
