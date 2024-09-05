<script setup lang="ts">
import {VBtn} from '../../../button/src';

interface Props {
  open: () => void;
  reset: () => void;
  files: any[];
  chooseText?: string;
  changeText?: string;
}

withDefaults(defineProps<Props>(), {
  chooseText: 'Choose',
  changeText: 'Change',
});
</script>

<template>
  <VBtn @click="open">
    {{ files?.length > 0 ? changeText : chooseText }}
  </VBtn>
</template>
