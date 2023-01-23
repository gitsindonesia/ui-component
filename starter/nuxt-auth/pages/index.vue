<template>
  <div class="container mx-auto p-6">
    <h1 class="text-2xl font-semibold">
      Welcome to <span class="font-semibol">nuxt-auth</span>!
    </h1>
    <p class="text-gray-700 mt-2">
      Checkout the page protected here:
      <VBtn to="/protected" size="sm" suffix-icon="ic:round-arrow-right-alt">
        Click me to test the auth setup!
      </VBtn>
    </p>
  </div>
</template>
