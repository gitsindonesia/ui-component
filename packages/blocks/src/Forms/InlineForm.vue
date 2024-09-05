<script setup lang="ts">
</script>

<template>
  <form class="flex gap-2 items-end">
    <VInput
      prepend-icon="ic:round-person"
      label="Name"
      placeholder="Enter your name"
    />
    <VInput
      prepend-icon="ic:round-email"
      label="Email"
      placeholder="Enter your email"
    />
    <VBtn color="primary">Login</VBtn>
    <VBtn>Cancel</VBtn>
  </form>
</template>
