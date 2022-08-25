<script setup lang="ts">
import {Icon} from '@iconify/vue';
import {computed, resolveComponent, useAttrs} from 'vue';
import {RouteLocation} from 'vue-router';

type Props = {
  to?: string | RouteLocation;
  href?: string;
  as?: string | any;
  defaultClass?: string;
  prependClass?: string;
  prependIcon?: string;
  prependIconClass?: string;
  appendClass?: string;
  appendIcon?: string;
  appendIconClass?: string;
  hidePrepend?: boolean;
  hideAppend?: boolean;
  hover?: boolean;
  hoverClass?: string;
  shaped?: boolean;
  shapedClass?: string;
  rounded?: boolean;
  hideText?: boolean;
  appendText?: string;
  appendTextClass?: string;
  tile?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  defaultClass: 'select-none truncate whitespace-nowrap',
  prependClass: 'w-auto shrink-0',
  appendClass: 'w-auto shrink-0',
  hidePrepend: false,
  hideAppend: false,
  hoverClass: 'hover:bg-gray-100',
  shaped: false,
  shapedClass: 'rounded-r-full',
  rounded: false,
  appendTextClass: '',
  tile: false,
});

const emit =
  defineEmits<{
    (e: 'click:prepend'): void;
    (e: 'click:prependIcon'): void;
    (e: 'click:append'): void;
    (e: 'click:appendIcon'): void;
    (e: 'click:appendText'): void;
  }>();

const is = computed(() => {
  if (props.to) return resolveComponent('RouterLink');

  if (props.href) return 'a';

  return props.as || 'div';
});

const attrs = useAttrs();

const attributes = computed(() => {
  if (props.to) return {to: props.to};

  if (props.href) return {href: props.href};

  return attrs;
});

const hoverClasses = computed(() => {
  return props.hover || props.to || props.href ? props.hoverClass : '';
});

const roundedClass = computed(() => {
  if (props.rounded) return 'rounded-full';

  return props.tile ? 'rounded-none' : 'rounded';
});
</script>

<template>
  <component
    :is="is"
    class="flex gap-4 px-3 py-2 transition duration-300 items-center"
    :class="[
      hoverClasses,
      roundedClass,
      {
        [shapedClass]: shaped,
      },
    ]"
    v-bind="attributes"
  >
    <slot v-if="!hidePrepend" name="prepend">
      <div :class="prependClass" @click="emit('click:prepend')">
        <slot name="prepend.icon">
          <Icon
            :icon="prependIcon"
            class="transition duration-300 transform w-5 h-5"
            :class="prependIconClass"
            @click="emit('click:prependIcon')"
          />
        </slot>
      </div>
    </slot>
    <div v-if="!hideText" class="flex-1" :class="defaultClass">
      <slot />
    </div>
    <slot v-if="!hideAppend" name="append">
      <div
        class="flex gap-1 items-center"
        :class="appendClass"
        @click="emit('click:append')"
      >
        <slot name="append.text">
          <span :class="appendTextClass" @click="emit('click:appendText')">
            {{ appendText }}
          </span>
        </slot>
        <slot name="append.icon">
          <Icon
            :icon="appendIcon"
            class="transition duration-300 transform w-5 h-5"
            :class="appendIconClass"
            @click="emit('click:appendIcon')"
          />
        </slot>
      </div>
    </slot>
  </component>
</template>
