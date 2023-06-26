<script setup lang="ts">
const page = ref(1);
const totalItems = ref(100);
const itemsPerPage = ref(10);

const variants = ref(['default', 'text', 'text-rounded'])
</script>

<template>
  <PageHeader title="Pagination" />

  <div class="space-y-4">
    <VCard title="Basic Example">
      <div>
        <VPagination
          v-model="page"
          :total-items="totalItems"
          :items-per-page="itemsPerPage"
        />
      </div>
    </VCard>

    <VCard title="Variants">
      <div>
        <VPagination
          v-model="page"
          v-for="variant in variants"
          :total-items="totalItems"
          :items-per-page="itemsPerPage"
          :key="variant"
          :variant="variant"
          class="mb-3"
        />
      </div>
    </VCard>

    <VCard title="Flat">
      <div>
        <VPagination
          v-model="page"
          :total-items="totalItems"
          :items-per-page="itemsPerPage"
          flat
        />
      </div>
    </VCard>

    <VCard title="Custom Style">
      <div>
        <VPagination
          v-model="page"
          :total-items="totalItems"
          :items-per-page="itemsPerPage"
          :style="{
            '--v-pagination-item-active-bg-color': 'purple',
            '--v-pagination-item-active-border-color': 'purple',
          }"
        />
      </div>
    </VCard>

    <VCard title="Sizes">
      <div>
        <VPagination
          v-model="page"
          :total-items="totalItems"
          :items-per-page="itemsPerPage"
          size="sm"
        />
        <VPagination
          v-model="page"
          :total-items="totalItems"
          :items-per-page="itemsPerPage"
        />
        <VPagination
          v-model="page"
          :total-items="totalItems"
          :items-per-page="itemsPerPage"
          size="lg"
        />
      </div>
    </VCard>

    <VCard title="Slots">
      <div>
        <VPagination
          v-model="page"
          :total-items="totalItems"
          :items-per-page="itemsPerPage"
        >
          <template #btnPrev>Prev</template>
          <template #btnNext>Next</template>
          <template #btnFirst>First</template>
          <template #btnLast>Last</template>
        </VPagination>
      </div>
    </VCard>
  </div>
</template>
