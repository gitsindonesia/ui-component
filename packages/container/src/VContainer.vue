<script setup lang="ts">
import { toRefs} from 'vue';

const props = defineProps({
  mini: {
    type: Boolean,
    default: false,
  },
  fixed: {
    type: Boolean,
    default: false,
  },
});

const {mini, fixed} = toRefs(props);
</script>

<template>
  <div
    class="container mx-auto py-10 px-4 lg:px-0"
    :class="[
      'transition-all duration-300',
      mini ? 'sm:ml-[85px]' : 'sm:ml-[250px]',
      fixed ? 'pt-24' : 'pt-6',
    ]"
  >
    <slot />
  </div>
</template>

<style scoped></style>
