<script setup lang="ts">
import {VInput, VBtn} from '@morpheme/ui';
</script>

<template>
  <form>
    <VInput
      prepend-icon="ic:round-person"
      label="Name"
      placeholder="Enter your name"
      hint="Enter your full name"
      wrapper-class="mb-4"
    />
    <VInput
      prepend-icon="ic:round-email"
      label="Email"
      placeholder="Enter your email"
      hint="Enter your email address"
      wrapper-class="mb-4"
    />
    <VBtn color="primary">Login</VBtn>
    <VBtn class="ml-3">Cancel</VBtn>
  </form>
</template>
