<script setup lang="ts">
import {ref, onMounted, computed} from 'vue';
import {
  EyeIcon,
  PencilIcon,
  TrashIcon,
  PlusIcon,
  DownloadIcon,
} from '@heroicons/vue/solid';
import {useUser} from './__index';
import type {User} from './__index';

const breadcrumbs = ref([
  {
    title: 'Master Data',
    to: '/cms/users',
  },
  {
    title: 'Users',
    to: '/cms/users',
  },
]);

const headers = ref([
  {
    text: 'ID',
    value: 'id',
  },
  {
    text: 'Name',
    value: 'name',
  },
  {
    text: 'Email',
    value: 'email',
  },
  {
    text: 'Status',
    value: 'state',
  },
  {
    text: 'Actions',
    value: 'actions',
    align: 'center',
  },
]);

// const items = ref(
//   Array.from({length: 30}).map((v, k) => ({
//     id: k + 1,
//     name: `User ${k + 1}`,
//     email: `user${k + 1}@mail.com`,
//     state: 'Active',
//   })),
// );

const {search, loading, items, fetchItems, deleteItem, meta} = useUser();

const sortBy = ref('id');
const sortDirection = ref('asc');
const alert = ref(false);
const dialog = ref(false);
const item = ref<User | null>(null);

const deleteUser = (selectedItem: User) => {
  item.value = selectedItem;
  dialog.value = true;
};

const removeUser = async (id: number | undefined) => {
  await deleteItem(String(id));
  dialog.value = false;

  setTimeout(() => {
    alert.value = true;
  }, 500);
};

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
</script>

<template>
  <page-header title="User Management" :breadcrumbs="breadcrumbs" />

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
        <v-btn color="primary" outlined class="whitespace-nowrap">
          <DownloadIcon class="text-primary w-5 h-5 mr-3" />
          Export
        </v-btn>
        <v-btn to="/cms/users/create" color="primary" class="whitespace-nowrap">
          <PlusIcon class="text-white w-5 h-5 mr-3" />
          Add User
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
      <template #item.actions="{item}">
        <div class="flex gap-1 justify-center">
          <v-btn
            :to="`/cms/users/${item.id}`"
            icon
            rounded
            text
            size="sm"
            color=""
          >
            <EyeIcon class="w-5 h-5" />
          </v-btn>
          <v-btn
            :to="`/cms/users/${item.id}/edit`"
            icon
            rounded
            text
            size="sm"
            color="info"
          >
            <PencilIcon class="w-5 h-5" />
          </v-btn>
          <v-btn
            text
            rounded
            icon
            size="sm"
            color="error"
            @click="deleteUser(item)"
          >
            <TrashIcon class="w-5 h-5" />
          </v-btn>
        </div>
      </template>
    </v-data-table>
  </v-card>

  <v-modal
    v-model="dialog"
    title="Delete User"
    confirm
    confirm-color="error"
    confirm-text="Delete"
    close-text="Cancel"
    :loading="loading.delete"
    @confirm="removeUser(item?.id)"
  >
    Are you sure want to delete this user?
    <strong>{{ item?.name }}</strong>
  </v-modal>

  <v-toast
    v-model="alert"
    title="Notification"
    :timeout="2000"
    type="success"
    color="black"
  >
    User deleted
  </v-toast>
</template>

<route lang="yaml">
meta:
  layout: cms
</route>
