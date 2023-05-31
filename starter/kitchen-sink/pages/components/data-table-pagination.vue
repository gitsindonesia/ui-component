<script setup lang="ts">
const totalItems = ref(30);
const itemsPerPage = ref(10);
const page = ref(1);
</script>

<template>
  <PageHeader title="DataTablePagination" />

  <div class="space-y-4">
    <VCard title="Default">
      <div>
        <VDataTablePagination
          :total-items="totalItems"
          :itemsPerPage="itemsPerPage"
        />
      </div>
    </VCard>

    <VCard title="Custom Button">
      <div>
        <VDataTablePagination
          :total-items="totalItems"
          :itemsPerPage="itemsPerPage"
          :show-first="false"
          :show-last="false"
        />
      </div>
    </VCard>

    <VCard title="Rows per page slot">
      <div>
        <VDataTablePagination
          v-model="page"
          :total-items="totalItems"
          v-model:itemsPerPage="itemsPerPage"
        >
          <template #rowsPerPage="{value, items}">
            <select v-model="itemsPerPage">
              <option v-for="item in items" :value="item.value">
                {{ item.text }}
              </option>
            </select>
          </template>
        </VDataTablePagination>
      </div>
    </VCard>

    <VCard title="Meta slot">
      <div>
        <VDataTablePagination
          :total-items="totalItems"
          :itemsPerPage="itemsPerPage"
        >
          <template
            #meta="{showingText, start, end, fromText, totalItems, dataText}"
          >
            {{ showingText }} {{ start }} to {{ end }} of {{ totalItems }}
            {{ dataText }}
          </template>
        </VDataTablePagination>
      </div>
    </VCard>
  </div>
</template>
