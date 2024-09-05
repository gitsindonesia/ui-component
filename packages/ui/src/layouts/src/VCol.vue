<script setup lang="ts">
type Cols = 'auto' | string | number;
type Offset = string | number;
type Order = string | number;

withDefaults(
  defineProps<{
    cols?: Cols;
    offset?: Offset;
    order?: Order;
    sm?: Cols;
    md?: Cols;
    lg?: Cols;
    xl?: Cols;
    offsetSm?: Offset;
    offsetMd?: Offset;
    offsetLg?: Offset;
    offsetXl?: Offset;
    orderSm?: Order;
    orderMd?: Order;
    orderLg?: Order;
    orderXl?: Order;
  }>(),
  {},
);
</script>

<template>
  <div
    :class="[
      {
        [`v-offset-${offset}`]: !!offset,
        [`v-order-${order}`]: !!order,
        [`v-col-sm-${sm}`]: !!sm,
        [`v-col-md-${md}`]: !!md,
        [`v-col-lg-${lg}`]: !!lg,
        [`v-col-xl-${xl}`]: !!xl,
        [`v-order-sm-${offsetSm}`]: !!offsetSm,
        [`v-order-md-${offsetMd}`]: !!offsetMd,
        [`v-order-lg-${offsetLg}`]: !!offsetLg,
        [`v-order-xl-${offsetXl}`]: !!offsetXl,
        [`v-offset-sm-${orderSm}`]: !!orderSm,
        [`v-offset-md-${orderMd}`]: !!orderMd,
        [`v-offset-lg-${orderLg}`]: !!orderLg,
        [`v-offset-xl-${orderXl}`]: !!orderXl,
      },
      cols ? `v-col-${cols}` : 'v-col',
    ]"
  >
    <slot />
  </div>
</template>
