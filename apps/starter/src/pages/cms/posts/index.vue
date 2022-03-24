<script setup lang="ts">
import {ref, onMounted, computed} from 'vue';
import {PlusIcon} from '@heroicons/vue/solid';
import {usePost} from './__index';
import {useToast, VToastEvent} from '@gits-id/ui';
import {localDate} from '~/utils';
import {Post} from '~/modules/blog';

const breadcrumbs = ref([
  {
    title: 'Posts',
    to: '/cms/posts',
  },
]);

const headers = ref([
  {
    text: 'Image',
    value: 'image',
    sortable: false,
  },
  {
    text: 'Title',
    value: 'title',
  },
  {
    text: 'Created At',
    value: 'created_at',
  },
  {
    text: 'Actions',
    value: 'actions',
    align: 'center',
    sortable: false,
  },
]);
const toast = useToast();
const {search, loading, items, fetchItems, deleteItem, meta} = usePost();

const sortBy = ref('created_at');
const sortDirection = ref('desc');

onMounted(() => {
  fetchItems();
});

const pagination = computed(() => ({
  totalItems: meta.value.total,
  perPage: 10,
}));

const onPageChange = (page: number) => {
  fetchItems({
    page,
  });
};

const confirmDelete = async (item: Post) => {
  toast.confirmDelete('Are you sure want to delete this item?', {
    title: 'Delete Item',
    loading: loading.delete,
    onConfirm: async (e: VToastEvent) => {
      e.startLoading();
      await deleteItem(String(item.id));
      e.finishLoading();

      e.close();

      setTimeout(() => {
        fetchItems();
        toast.show('Item deleted successfully!', {
          type: 'success',
        });
      }, 1000);
    },
  });
};
</script>

<template>
  <page-header title="Post Management" :breadcrumbs="breadcrumbs" />

  <v-card
    hide-footer
    header-class="flex flex-col sm:flex-row justify-between gap-3 px-3 py-2"
    body-class="!px-0"
  >
    <template #header>
      <div class="w-full sm:w-5/12">
        <v-input placeholder="Search..." prepend-icon="search" />
      </div>
      <div class="grid sm:flex gap-2">
        <v-btn to="/cms/posts/create" color="primary" class="whitespace-nowrap">
          <PlusIcon class="text-white w-5 h-5 mr-3" />
          Add Post
        </v-btn>
      </div>
    </template>

    <v-data-table
      v-model:sortBy="sortBy"
      v-model:sortDirection="sortDirection"
      v-model:search="search"
      :search-by="['name', 'email']"
      class="!shadow-none border-t !rounded-none"
      :items="items"
      :headers="headers"
      :loading="loading.items"
      :total-items="meta.total"
      :pagination="pagination"
      server-side
      @page:change="onPageChange"
    >
      <template #item.image="{item}">
        <img alt="img" :src="item.image" class="max-w-full" />
      </template>
      <template #item.created_at="{item}">
        {{ localDate(item.created_at) }}
      </template>
      <template #item.actions="{item}">
        <TableActions
          :id="item.id"
          path="/cms/posts"
          @delete="confirmDelete(item)"
        />
      </template>
    </v-data-table>
  </v-card>
</template>

<route lang="yaml">
meta:
  layout: cms
</route>
