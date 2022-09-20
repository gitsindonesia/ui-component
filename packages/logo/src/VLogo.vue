<script setup lang="ts">
import {toRefs, computed, resolveComponent} from 'vue';
import {Sizes} from './types';

export type Props = {
  to?: string;
  white?: boolean;
  imgClass?: string;
  size?: Sizes;
  width?: string | number;
  height?: string | number;
};

const props = withDefaults(defineProps<Props>(), {
  to: '/',
  white: false,
  imgClass: '',
  size: 'md',
});

const {white, to} = toRefs(props);

const tag = computed(() => (to.value ? resolveComponent('RouterLink') : 'a'));

const imgAttrs = computed(() => {
  return {
    width: props.width,
    height: props.height,
  };
});
</script>

<template>
  <component
    :is="tag"
    :to="to"
    class="v-logo"
    :class="size && `v-logo--${size}`"
  >
    <img
      v-if="white"
      class="v-logo-image"
      :class="imgClass"
      alt="Logo White"
      src="./assets/logo-white.png"
      v-bind="imgAttrs"
    />
    <img
      v-else
      class="v-logo-image"
      :class="imgClass"
      alt="Logo Base"
      src="./assets/logo-base.png"
      v-bind="imgAttrs"
    />
  </component>
</template>

<style>
.v-logo.v-logo--xxs .v-logo-image {
  width: 24px;
}

.v-logo.v-logo--xs .v-logo-image {
  width: 32px;
}

.v-logo.v-logo--sm .v-logo-image {
  width: 40px;
}

.v-logo.v-logo--md .v-logo-image {
  width: 80px;
}

.v-logo.v-logo--lg .v-logo-image {
  width: 120px;
}
</style>
