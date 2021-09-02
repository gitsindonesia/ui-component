<script setup lang="ts">
import {toRefs,  computed} from 'vue';

const props = defineProps({
  white: {
    type: Boolean,
    default: false,
  },
  to: {
    type: String,
    default: '/',
  },
});

const {white, to} = toRefs(props);

const tag = computed(() => (to.value ? 'router-link' : 'a'));
</script>

<template>
  <component :is="tag" :to="to">
    <img
      v-if="white"
      class="max-w-full mx-auto h-10"
      alt="Logo"
      src="../../../public/logo-white.png"
    />
    <img
      v-else
      class="max-w-full mx-auto h-10"
      alt="Logo"
      src="../../../public/logo-base.png"
    />
  </component>
</template>

<style scoped></style>
