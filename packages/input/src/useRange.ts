import {ref} from 'vue';

export function useRange(minValue = 0, maxValue = 100, stepValue = 1) {
  const step = ref<number>(stepValue);
  const minprice = ref<number>(minValue);
  const maxprice = ref<number>(maxValue);
  const min = ref<number>(minValue);
  const max = ref<number>(maxValue);
  const minthumb = ref<number>(0);
  const maxthumb = ref<number>(0);

  function validation() {
    if (/^\d*$/.test(String(minprice.value))) {
      // if (minprice.value > max.value) {
      //   minprice.value = 9500;
      // }
      if (minprice.value < min.value) {
        minprice.value = min.value;
      }
    } else {
      minprice.value = 0;
    }
    if (/^\d*$/.test(String(maxprice.value))) {
      if (maxprice.value > max.value) {
        maxprice.value = max.value;
      }
      // if (maxprice.value < min.value) {
      //   maxprice.value = 200;
      // }
    }
    //  else {
    //   maxprice.value = 10000;
    // }
  }

  function mintrigger() {
    validation();
    minprice.value = Math.min(minprice.value, maxprice.value);
    const left = ((minprice.value - min.value) / (max.value - min.value)) * 100;
    minthumb.value = left;
  }

  function maxtrigger() {
    validation();
    maxprice.value = Math.max(maxprice.value, minprice.value);
    const right =
      100 - ((maxprice.value - min.value) / (max.value - min.value)) * 100;
    maxthumb.value = right;
  }

  return {
    minprice,
    maxprice,
    min,
    max,
    minthumb,
    maxthumb,
    mintrigger,
    maxtrigger,
    validation,
    step,
  };
}
