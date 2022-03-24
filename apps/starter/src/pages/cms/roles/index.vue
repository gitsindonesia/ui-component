<script setup lang="ts">
import {ref} from 'vue';
import {EyeIcon, PencilIcon, TrashIcon, PlusIcon} from '@heroicons/vue/solid';
import {VModalEvent, VBreadcrumbItem, VDataTableHeader} from '@gits-id/ui';
import type {Role} from './__index';

const breadcrumbs = ref<VBreadcrumbItem[]>([
  {
    title: 'Master Data',
    to: '/cms/roles',
  },
  {
    title: 'Roles',
    to: '/cms/roles',
  },
]);

const headers = ref<VDataTableHeader[]>([
  {
    text: 'ID',
    value: 'id',
  },
  {
    text: 'Name',
    value: 'name',
  },
  {
    text: 'Description',
    value: 'description',
  },
  {
    text: 'Actions',
    value: 'actions',
    align: 'center',
  },
]);

const items = ref<Role[]>(
  Array.from({length: 30}).map((v, k) => ({
    id: k + 1,
    name: `Role ${k + 1}`,
    slug: `role${k + 1}`,
    description: `Role Description ${k + 1}`,
  })),
);

const sortBy = ref('id');
const sortDirection = ref('asc');
const alert = ref(false);

const removeRole = (id: number, e: VModalEvent) => {
  // console.log('Deleting role', e);
  e.close();

  setTimeout(() => {
    alert.value = true;
  }, 500);
};
</script>

<template>
  <page-header title="Role Management" :breadcrumbs="breadcrumbs" />

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
        <v-btn to="/cms/roles/create" color="primary" class="whitespace-nowrap">
          <PlusIcon class="text-white w-5 h-5 mr-3" />
          Add Role
        </v-btn>
      </div>
    </template>

    <v-data-table
      v-model:sortBy="sortBy"
      v-model:sortDirection="sortDirection"
      :items="items"
      :headers="headers"
      class="!shadow-none border-t !rounded-none"
    >
      <template #item.actions="{item}">
        <div class="flex gap-1 justify-center">
          <v-btn
            :to="`/cms/roles/${item.id}`"
            icon
            rounded
            text
            size="sm"
            color=""
          >
            <EyeIcon class="w-5 h-5" />
          </v-btn>
          <v-btn
            :to="`/cms/roles/${item.id}/edit`"
            icon
            rounded
            text
            size="sm"
            color="info"
          >
            <PencilIcon class="w-5 h-5" />
          </v-btn>
          <v-modal
            title="Delete Role"
            confirm
            confirm-color="error"
            confirm-text="Delete"
            close-text="Cancel"
            @confirm="removeRole(item.id, $event)"
          >
            <template #activator="{open}">
              <v-btn text rounded icon size="sm" color="error" @click="open">
                <TrashIcon class="w-5 h-5" />
              </v-btn>
            </template>
            Are you sure want to delete this role?
            <strong>{{ item.name }}</strong>
          </v-modal>
        </div>
      </template>
    </v-data-table>
  </v-card>
</template>

<route lang="yaml">
meta:
  layout: cms
</route>
