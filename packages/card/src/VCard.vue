<script setup lang="ts">
import {computed, PropType, toRefs} from 'vue';

export type CardShadow =
  | boolean
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | 'inner'
  | 'none';

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  defaultWrapperClass: {
    type: String,
    default: '',
  },
  defaultHeaderClass: {
    type: String,
    default: 'card-header',
  },
  defaultFooterClass: {
    type: String,
    default: 'card-footer',
  },
  defaultBodyClass: {
    type: String,
    default: 'card-body',
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
  shadow: {
    type: [Boolean, String] as PropType<CardShadow>,
    default: false,
  },
  to: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: 'default',
  },
});

const {to} = toRefs(props);

const tag = computed(() => (to.value ? 'router-link' : 'div'));

const classes = computed(() => {
  const shadowClass = props.flat
    ? 'card--shadow-none'
    : typeof props.shadow === 'string'
    ? `card--shadow-${props.shadow}`
    : 'card--shadow';

  return [
    `card card-${props.color}`,
    props.defaultWrapperClass,
    props.wrapperClass,
    shadowClass,
    {
      'card--bordered': props.bordered,
    },
  ];
});
</script>

<template>
  <component :is="tag" :to="to" :class="classes">
    <slot name="image" />
    <div v-if="!hideHeader" :class="[defaultHeaderClass, headerClass]">
      <slot name="header.prepend" />
      <slot name="header">
        <div class="card-title">{{ title }}</div>
      </slot>
      <slot name="header.append" />
    </div>
    <div :class="[defaultBodyClass, bodyClass]">
      <slot />
    </div>
    <div v-if="!hideFooter" :class="[defaultFooterClass, footerClass]">
      <slot name="footer" />
    </div>
  </component>
</template>

<style src="./VCard.scss" lang="scss"></style>