<script setup lang="ts">
import {Menu} from '@headlessui/vue';
import {Float} from '@headlessui-float/vue';
import type {Placement} from '@floating-ui/vue';

interface Props {
  placement?: Placement;
  offset?: number;
  shift?: boolean | number;
  flip?: boolean | number;
  transition?: string;
}

withDefaults(defineProps<Props>(), {
  placement: 'bottom',
  offset: 100,
  shift: true,
  flip: true,
  transition: 'dropdown',
});
</script>

<template>
  <Menu as="div" class="dropdown" v-slot="slotProps">
    <Float
      as="div"
      floating-as="template"
      :placement="placement"
      :transition-name="transition"
      :offset="offset"
      :shift="shift"
      :flip="flip"
    >
      <slot v-bind="slotProps" />
    </Float>
  </Menu>
</template>
