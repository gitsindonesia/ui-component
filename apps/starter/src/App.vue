<script setup lang="ts">
import {computed, reactive} from 'vue';
import {useHead} from '@vueuse/head';
import {useI18n} from 'vue-i18n';

const siteData = reactive({
  title: `GITS Starter`,
  description: `GITS Starter Kit`,
});

useHead({
  // Can be static or computed
  title: computed(() => siteData.title),
  meta: [
    {
      name: `description`,
      content: computed(() => siteData.description),
    },
  ],
});

// const {t} = useI18n();
</script>

<template>
  <router-view />
</template>

<style>
#app {
}
</style>
