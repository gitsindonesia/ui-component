<script setup lang="ts">
import {Auth} from '@gits-id/ui';
</script>

<template>
  <Auth form-on-left image-wrapper-class="bg-primary-600">
    <!--<template #image> image here </template>-->
    <router-view />
  </Auth>
</template>

<style scoped></style>
