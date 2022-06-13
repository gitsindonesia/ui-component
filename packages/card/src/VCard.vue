<script setup lang="ts">
import {computed, toRefs} from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  defaultWrapperClass: {
    type: String,
    default: 'rounded-md bg-white flex flex-col',
  },
  defaultHeaderClass: {
    type: String,
    default: 'font-semibold flex px-4',
  },
  defaultFooterClass: {
    type: String,
    default: 'px-4 flex',
  },
  defaultBodyClass: {
    type: String,
    default: 'px-4 flex flex-col',
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
  bordered: {
    type: Boolean,
    default: false,
  },
  flat: {
    type: Boolean,
    default: false,
  },
  to: {
    type: String,
    default: '',
  },
});

const {to} = toRefs(props);

const tag = computed(() => (to.value ? 'router-link' : 'div'));
</script>

<template>
  <component
    :is="tag"
    :to="to"
    :class="[
      defaultWrapperClass,
      wrapperClass,
      {
        border: bordered,
        shadow: !flat,
      },
    ]"
  >
    <slot name="image" />
    <div
      v-if="!hideHeader"
      :class="[
        defaultHeaderClass,
        bordered ? 'border-b py-3' : 'pt-3',
        headerClass,
      ]"
    >
      <slot name="header">
        <div>{{ title }}</div>
      </slot>
    </div>
    <div
      :class="[
        defaultBodyClass,
        bordered ? 'border-t py-3' : 'py-3',
        bodyClass,
      ]"
    >
      <slot />
    </div>
    <div
      v-if="!hideFooter"
      :class="[
        defaultFooterClass,
        bordered ? 'border-t py-3' : 'pb-3',
        footerClass,
      ]"
    >
      <slot name="footer" />
    </div>
  </component>
</template>
