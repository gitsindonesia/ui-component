<script setup lang="ts">
import type {PropType} from 'vue';
import VBreadcrumbsItem from './VBreadcrumbsItem.vue';
import VBreadcrumbsDivider from './VBreadcrumbsDivider.vue';

type VBreadcrumbsItemProps = InstanceType<typeof VBreadcrumbsItem>['$props'];

defineProps({
  items: {
    type: Array as PropType<VBreadcrumbsItemProps[]>,
    default: () => [] as VBreadcrumbsItemProps[],
  },
  divider: {
    type: String,
    default: '/',
  },
  customClass: {
    type: String,
    default: '',
  },
  activeColor: {
    type: String,
    default: 'breadcrumbs-item--active',
  },
  tag: {
    type: String,
    default: 'li',
  },
});

defineSlots<{
  default?: (props: {}) => any;
  divider?: (props: {}) => any;
  [key: `item.${number}`]: (props: {}) => any;
}>();
</script>

<template>
  <nav aria-label="Breadcrumbs" class="breadcrumbs" :class="customClass">
    <slot>
      <template v-for="(item, index) in items" :key="index">
        <slot :name="`item.${index}`">
          <VBreadcrumbsItem
            v-bind="item"
            :to="item.to"
            :active-class="activeColor"
            :tag="tag"
          />
        </slot>
        <slot v-if="index + 1 < items.length" name="divider">
          <VBreadcrumbsDivider :text="divider" />
        </slot>
      </template>
    </slot>
  </nav>
</template>
