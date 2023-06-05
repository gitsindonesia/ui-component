<script setup lang="ts">
const rating = ref(3);
</script>

<template>
  <PageHeader title="Rating" />

  <div class="space-y-4">
    <VCard title="Basic Example">
      <div>
        <VRating :rating="3" />
      </div>
    </VCard>

    <VCard title="Basic Example">
      <div>
        <VRating v-model:rating="rating" />
      </div>
    </VCard>

    <VCard title="Basic Example">
      <div>
        <VRating :rating="2.5" :increment="0.5" />
      </div>
    </VCard>
  </div>
</template>
