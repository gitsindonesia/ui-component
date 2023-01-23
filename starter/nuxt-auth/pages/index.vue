<template>
  <div class="container mx-auto p-6">
    <h1 class="text-2xl font-semibold">Welcome to your gits app!</h1>
    <p>
      Checkout the page protected by `nuxt-auth` here:
      <nuxt-link to="/protected" class="underline text-blue"
        >Click me to test the auth setup!</nuxt-link
      >
    </p>
  </div>
</template>
