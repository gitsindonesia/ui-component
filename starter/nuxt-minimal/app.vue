<script setup lang="ts">
useHead({
  title: 'Nuxt + GITS UI Minimal Starter',
});

const count = ref(0);
</script>

<template>
  <div>
    <VAppBar bordered>
      <div class="container mx-auto">
        <VLogo img-class="mx-auto" />
      </div>
    </VAppBar>
    <main
      class="
        container
        mx-auto
        p-6
        text-center
        lg:h-[calc(100vh-4rem)]
        flex
        items-center
        justify-center
      "
    >
      <div class="space-y-6">
        <div class="space-y-1">
          <h1 class="font-semibold text-2xl">Nuxt Minimal</h1>
          <p class="text-gray-600">
            A minimal Nuxt.js + GITS UI starter template
          </p>
        </div>
        <div class="space-y-3">
          <p>
            You clicked the button
            <span class="font-bold">{{ count }}</span> times.
          </p>
          <VBtn @click="count++">Click Me</VBtn>
        </div>
      </div>
    </main>
  </div>
</template>
