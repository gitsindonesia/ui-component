<script setup>
import { ref, toRefs, onMounted } from "vue";
import { useRange } from "./useRange";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
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
});

const { modelValue, showInput } = toRefs(props);

const emit = defineEmits(["update:modelValue"]);

const value = ref(modelValue.value);

const {
  minprice,
  maxprice,
  min,
  max,
  minthumb,
  maxthumb,
  step,
  mintrigger,
  maxtrigger,
  validation,
} = useRange(props.min, props.max, props.step);

onMounted(() => {
  mintrigger();
  maxtrigger();
});
</script>

<template>
  <div class="flex justify-center items-center">
    <div class="relative w-full">
      <div>
        <div class="flex justify-between mb-3">
          <label class="text-gray-700 text-sm" for="min">{{ minprice }} </label>
          <label class="text-gray-700 text-sm" for="max">{{ maxprice }} </label>
        </div>

        <input
          v-model="minprice"
          type="range"
          :step="step"
          :min="min"
          :max="max"
          class="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer"
          @input="mintrigger"
        />

        <input
          v-model="maxprice"
          type="range"
          :step="step"
          :min="min"
          :max="max"
          class="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer"
          @input="maxtrigger"
        />

        <div class="relative z-10 h-2">
          <div
            class="absolute z-10 left-0 right-0 bottom-0 top-0 rounded-md bg-gray-700 h-[2px]"
          ></div>

          <div
            class="absolute z-20 top-0 bottom-0 rounded-md bg-gradient-to-r from-blue-400 to-blue-600 h-[2px]"
            :style="'right:' + maxthumb + '%; left:' + minthumb + '%'"
          ></div>

          <div
            class="absolute z-30 w-4 h-4 top-0 left-0 bg-blue-400 rounded-full -mt-2"
            :style="'left: ' + minthumb + '%'"
          ></div>

          <div
            class="absolute z-30 w-4 h-4 top-0 right-0 bg-blue-600 rounded-full -mt-2"
            :style="'right: ' + maxthumb + '%'"
          ></div>
        </div>
      </div>

      <div
        v-if="showInput"
        class="flex items-center justify-between pt-5 space-x-4 text-sm text-gray-700"
      >
        <div>
          <input
            v-model="minprice"
            type="text"
            maxlength="5"
            class="w-24 px-3 py-2 text-center border border-gray-200 rounded-lg bg-gray-50 focus:border-yellow-400 focus:outline-none"
            @input="mintrigger"
          />
        </div>
        <div>
          <input
            v-model="maxprice"
            type="text"
            maxlength="5"
            class="w-24 px-3 py-2 text-center border border-gray-200 rounded-lg bg-gray-50 focus:border-yellow-400 focus:outline-none"
            @input="maxtrigger"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
input[type="range"]::-webkit-slider-thumb {
  @apply w-6 h-6 appearance-none pointer-events-auto;
}
</style>
