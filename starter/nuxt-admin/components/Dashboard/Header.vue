<script setup lang="ts">
const {data: session} = useSession();
</script>

<template>
  <div class="flex flex-col lg:flex-row justify-between items-center">
    <AdminPageHeader
      :title="`Welcome back, ${session?.user?.name}`"
      subtitle="Track, manage and forecast your customers and orders."
    />
    <div class="flex w-full lg:w-auto gap-2 items-start lg:items-center">
      <VBtn prefix-icon="ic:round-cloud-upload"> Import </VBtn>
      <VBtn prefix-icon="ic:round-add" color="primary"> Add </VBtn>
    </div>
  </div>
</template>
