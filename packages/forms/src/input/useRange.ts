import {ref} from 'vue';

export function useRange(
  initialMinValue = 0,
  initialMaxValue = 100,
  stepValue = 1,
) {
  const step = ref<number>(stepValue);
  const minValue = ref<number>(initialMinValue);
  const maxValue = ref<number>(initialMaxValue);
  const min = ref<number>(initialMinValue);
  const max = ref<number>(initialMaxValue);
  const minThumb = ref<number>(0);
  const maxThumb = ref<number>(0);

  function validation() {
    if (/^\d*$/.test(String(minValue.value))) {
      if (minValue.value < min.value) {
        minValue.value = min.value;
      }
    } else {
      minValue.value = 0;
    }
    if (/^\d*$/.test(String(maxValue.value))) {
      if (maxValue.value > max.value) {
        maxValue.value = max.value;
      }
    }
  }

  function minTrigger() {
    validation();
    minValue.value = Math.min(minValue.value, maxValue.value);
    const left = ((minValue.value - min.value) / (max.value - min.value)) * 100;
    minThumb.value = left;
  }

  function maxTrigger() {
    validation();
    maxValue.value = Math.max(maxValue.value, minValue.value);
    const right =
      100 - ((maxValue.value - min.value) / (max.value - min.value)) * 100;
    maxThumb.value = right;
  }

  return {
    minValue,
    maxValue,
    min,
    max,
    minThumb,
    maxThumb,
    minTrigger,
    maxTrigger,
    validation,
    step,
  };
}
