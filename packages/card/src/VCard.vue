<script setup lang="ts">
import {computed, toRefs} from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  defaultWrapperClass: {
    type: String,
    default: 'rounded-md border shadow bg-white flex flex-col',
  },
  defaultHeaderClass: {
    type: String,
    default: 'font-semibold flex px-6 py-4',
  },
  defaultFooterClass: {
    type: String,
    default: 'px-6 py-4',
  },
  defaultBodyClass: {
    type: String,
    default: 'px-6',
  },
  wrapperClass: {
    type: String,
    default: '',
  },
  headerClass: {
    type: String,
    default: '',
  },
  footerClass: {
    type: String,
    default: '',
  },
  bodyClass: {
    type: String,
    default: '',
  },
  hideHeader: {
    type: Boolean,
    default: false,
  },
  hideFooter: {
    type: Boolean,
    default: false,
  },
  to: {
    type: String,
    default: '',
  },
});

const {
  title,
  bodyClass,
  wrapperClass,
  headerClass,
  footerClass,
  defaultWrapperClass,
  defaultHeaderClass,
  defaultFooterClass,
  defaultBodyClass,
  hideHeader,
  hideFooter,
  to,
} = toRefs(props);

const tag = computed(() => (to.value ? 'router-link' : 'div'));
</script>

<template>
  <component :is="tag" :to="to" :class="[defaultWrapperClass, wrapperClass]">
    <slot name="image" />
    <div v-if="!hideHeader" :class="[defaultHeaderClass, headerClass]">
      <slot name="header">
        <div>{{ title }}</div>
      </slot>
    </div>
    <div :class="[defaultBodyClass, bodyClass]">
      <slot />
    </div>
    <div v-if="!hideFooter" :class="[defaultFooterClass, footerClass]">
      <slot name="footer" />
    </div>
  </component>
</template>

<style scoped></style>
