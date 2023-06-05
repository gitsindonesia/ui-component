<script setup lang="ts"></script>

<template>
  <PageHeader title="Shimmer" />

  <div class="space-y-4">
    <VCard title="Basic Example">
      <div>
        <VShimmer />
      </div>
    </VCard>
    <VCard title="Rounded">
      <div>
        <VShimmer rounded :height="20" :width="200" />
      </div>
    </VCard>

    <VCard title="Circle">
      <div>
        <VShimmer rounded :height="200" :width="200" />
      </div>
    </VCard>

    <VCard title="Multiple Lines">
      <div class="space-y-2">
        <VShimmer :lines="3" :height="20" :width="300" rounded />
      </div>
    </VCard>

    <VCard title="Card">
      <div>
        <div class="flex gap-4 shadow p-6 rounded-lg">
          <VShimmer :width="100" :height="100" rounded />
          <div class="flex-1 w-8/12">
            <VShimmer
              :lines="4"
              width="100%"
              :height="20"
              class="mb-2"
              rounded
            />
          </div>
        </div>
      </div>
    </VCard>
  </div>
</template>
