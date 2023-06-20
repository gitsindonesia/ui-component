<script setup lang="ts">
withDefaults(
  defineProps<{
    gap?: string | number;
    gapSm?: string | number;
    gapMd?: string | number;
    gapLg?: string | number;
    gapXl?: string | number;
    align?: string;
    alignContent?: string;
    justifyContent?: string;
    alignSm?: string;
    alignContentSm?: string;
    justifyContentSm?: string;
    alignMd?: string;
    alignContentMd?: string;
    justifyContentMd?: string;
    alignLg?: string;
    alignContentLg?: string;
    justifyContentLg?: string;
    alignXl?: string;
    alignContentXl?: string;
    justifyContentXl?: string;
  }>(),
  {}
);
</script>

<template>
  <div
    class="v-row"
    :class="[
      {
        [`v-gap-${gap}`]: !!gap,
        [`v-gap-sm-${gapSm}`]: !!gapSm,
        [`v-gap-md-${gapMd}`]: !!gapMd,
        [`v-gap-lg-${gapLg}`]: !!gapLg,
        [`v-gap-xl-${gapXl}`]: !!gapXl,
        [`v-row--align-${align}`]: !!align,
        [`v-row--align-content-${alignContent}`]: !!alignContent,
        [`v-row--justify-${justifyContent}`]: !!justifyContent,
        [`v-row--align-sm-${alignSm}`]: !!alignSm,
        [`v-row--align-content-sm-${alignContentSm}`]: !!alignContentSm,
        [`v-row--justify-sm-${justifyContentSm}`]: !!justifyContentSm,
        [`v-row--align-md-${alignMd}`]: !!alignMd,
        [`v-row--align-content-md-${alignContentMd}`]: !!alignContentMd,
        [`v-row--justify-md-${justifyContentMd}`]: !!justifyContentMd,
        [`v-row--align-lg-${alignLg}`]: !!alignLg,
        [`v-row--align-content-lg-${alignContentLg}`]: !!alignContentLg,
        [`v-row--justify-lg-${justifyContentLg}`]: !!justifyContentLg,
        [`v-row--align-xl-${alignXl}`]: !!alignXl,
        [`v-row--align-content-xl-${alignContentXl}`]: !!alignContentXl,
        [`v-row--justify-xl-${justifyContentXl}`]: !!justifyContentXl,
      },
    ]"
  >
    <slot />
  </div>
</template>
