<script setup lang="ts">
definePageMeta({
  auth: false,
});
</script>

<template>
  <div class="container mx-auto p-6">
    <h1 class="text-2xl font-semibold">
      Welcome to <span class="font-semibol">nuxt-auth</span>!
    </h1>
    <p class="text-gray-700 mt-3 text-sm">
      Check out the profile page here:
      <VBtn to="/profile" text flush color="primary" class="hover:underline">
        View Profile
      </VBtn>
    </p>
  </div>
</template>
