<script setup lang="ts">
definePageMeta({middleware: 'auth'});

const {data, signOut} = useSession();
</script>

<template>
  <VAppBar sticky shadow>
    <div
      class="container mx-auto flex justify-between items-center px-2 md:px-0"
    >
      <VLogo />

      <VBtn @click="signOut()" text color="primary"> Sign out </VBtn>
    </div>
  </VAppBar>
  <div class="container mx-auto p-6 md:px-0">
    <h3 class="font-semibold text-xl text-gray-900">
      Welcome back, {{ data?.user?.name }}!
    </h3>
    <p class="mt-2 text-gray-700">This is protected page!</p>
  </div>
</template>
