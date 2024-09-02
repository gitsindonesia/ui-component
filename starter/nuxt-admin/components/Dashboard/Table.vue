<script setup lang="ts">
// workaround: load pagination CSS
import '@morpheme/ui/src/pagination/src/VPagination.scss';
import '@morpheme/ui/src/table/src/VDataTable.scss';
import '@morpheme/ui/src/table/src/VDataTablePagination.scss';
import type {VDataTableHeader, VDataTableItem} from '@morpheme/ui';

const headers = ref<VDataTableHeader[]>([
  {
    text: 'Company',
    value: 'company',
  },
  {
    text: 'License use',
    value: 'license',
  },
  {
    text: 'Status',
    value: 'status',
  },
  {
    text: 'Users',
    value: 'users',
  },
  {
    text: 'About',
    value: 'about',
  },
  {
    text: '',
    value: 'action',
  },
]);

const items = ref([
  {
    company: {
      name: 'Catalog',
      domain: 'catalogapp.io',
    },
    license: 70,
    status: 'Customer',
    users: [
      {
        name: 'John Doe',
        avatar:
          'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&q=80',
      },
      {
        name: 'Alex Doe',
        avatar:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&q=80',
      },
      {
        name: 'George Doe',
        avatar:
          'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&q=80',
      },
    ],
    about: {
      title: 'Content curating app',
      description: 'Brings all your news into one place',
    },
  },
  {
    company: {
      name: 'Google',
      domain: 'google.com',
    },
    license: 90,
    status: 'Churned',
    users: [
      {
        name: 'John Doe',
        avatar:
          'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&q=80',
      },
      {
        name: 'Alex Doe',
        avatar:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&q=80',
      },
      {
        name: 'George Doe',
        avatar:
          'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&q=80',
      },
    ],
    about: {
      title: 'Design software',
      description: 'Super lightweight design app',
    },
  },
  {
    company: {
      name: 'Catalog',
      domain: 'catalogapp.io',
    },
    license: 70,
    status: 'Customer',
    users: [
      {
        name: 'John Doe',
        avatar:
          'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&q=80',
      },
      {
        name: 'Alex Doe',
        avatar:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&q=80',
      },
      {
        name: 'George Doe',
        avatar:
          'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&q=80',
      },
    ],
    about: {
      title: 'Content curating app',
      description: 'Brings all your news into one place',
    },
  },
  {
    company: {
      name: 'Google',
      domain: 'google.com',
    },
    license: 90,
    status: 'Churned',
    users: [
      {
        name: 'John Doe',
        avatar:
          'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&q=80',
      },
      {
        name: 'Alex Doe',
        avatar:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&q=80',
      },
      {
        name: 'George Doe',
        avatar:
          'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&q=80',
      },
    ],
    about: {
      title: 'Design software',
      description: 'Super lightweight design app',
    },
  },
  {
    company: {
      name: 'Catalog',
      domain: 'catalogapp.io',
    },
    license: 70,
    status: 'Customer',
    users: [
      {
        name: 'John Doe',
        avatar:
          'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&q=80',
      },
      {
        name: 'Alex Doe',
        avatar:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&q=80',
      },
      {
        name: 'George Doe',
        avatar:
          'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&q=80',
      },
    ],
    about: {
      title: 'Content curating app',
      description: 'Brings all your news into one place',
    },
  },
  {
    company: {
      name: 'Google',
      domain: 'google.com',
    },
    license: 90,
    status: 'Churned',
    users: [
      {
        name: 'John Doe',
        avatar:
          'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&q=80',
      },
      {
        name: 'Alex Doe',
        avatar:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&q=80',
      },
      {
        name: 'George Doe',
        avatar:
          'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&q=80',
      },
    ],
    about: {
      title: 'Design software',
      description: 'Super lightweight design app',
    },
  },
  {
    company: {
      name: 'Catalog',
      domain: 'catalogapp.io',
    },
    license: 70,
    status: 'Customer',
    users: [
      {
        name: 'John Doe',
        avatar:
          'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&q=80',
      },
      {
        name: 'Alex Doe',
        avatar:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&q=80',
      },
      {
        name: 'George Doe',
        avatar:
          'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&q=80',
      },
    ],
    about: {
      title: 'Content curating app',
      description: 'Brings all your news into one place',
    },
  },
  {
    company: {
      name: 'Google',
      domain: 'google.com',
    },
    license: 90,
    status: 'Churned',
    users: [
      {
        name: 'John Doe',
        avatar:
          'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&q=80',
      },
      {
        name: 'Alex Doe',
        avatar:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&q=80',
      },
      {
        name: 'George Doe',
        avatar:
          'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&q=80',
      },
    ],
    about: {
      title: 'Design software',
      description: 'Super lightweight design app',
    },
  },
]);

const statusColor: Record<string, string> = {
  Customer: 'success',
  Churned: 'default',
};

const selectedItem = ref();
const dialogDelete = ref(false);

const deleteItem = (item: VDataTableItem) => {
  selectedItem.value = item;
  dialogDelete.value = true;
};

const onItemDeleted = () => {
  const index = items.value.findIndex(
    (item) => item.company.name === selectedItem.value.company.name,
  );
  items.value.splice(index, 1);
  dialogDelete.value = false;
};
</script>

<template>
  <div class="flex flex-col lg:flex-row justify-between mt-8 gap-4">
    <div
      class="
        flex
        order-3
        lg:order-1
        flex-col
        lg:flex-row
        gap-4
        items-start
        lg:items-center
      "
    >
      <FilterList class="order-2 lg:order-1">
        <FilterItem>All time</FilterItem>
        <FilterItem>US, AU, +4</FilterItem>
      </FilterList>
      <VBtn
        shadow
        class="!h-11 order-1 lg:order-2 !w-full lg:!w-auto"
        prefix-icon="ri:filter-fill"
      >
        More filters
      </VBtn>
    </div>
    <div class="order-1 lg:order-2">
      <VInput
        prepend-icon="ri:search-line"
        placeholder="Search"
        class="!h-11"
      />
    </div>
  </div>

  <VDataTable :headers="headers" :items="items" class="mt-6" disable-sorting>
    <template #item.company="{item}">
      <div class="text-gray-900 dark:text-neutral-200 font-semibold text-sm">
        {{ item.company.name }}
      </div>
      <div class="text-gray-600 dark:text-neutral-500 text-sm">
        {{ item.company.domain }}
      </div>
    </template>
    <template #item.license="{item}">
      <VProgressBar color="primary" :model-value="item.license" :max="100" />
    </template>
    <template #item.status="{item}">
      <VBadge rounded outlined :color="statusColor[item.status]">
        {{ item.status }}
      </VBadge>
    </template>
    <template #item.users="{item}">
      <div class="flex -space-x-3">
        <Avatar
          v-for="user in item.users"
          :key="user.name"
          :src="user.avatar"
          :alt="user.name"
          width="32"
          height="32"
          class="border-4 border-white dark:border-neutral-700 w-8 h-8"
        />
      </div>
    </template>
    <template #item.about="{item}">
      <div
        class="
          font-semibold
          text-sm text-gray-900
          dark:text-neutral-200
          truncate
        "
      >
        {{ item.about.title }}
      </div>
      <div class="text-sm text-gray-600 dark:text-neutral-500 truncate">
        {{ item.about.description }}
      </div>
    </template>
    <template #item.action="{item}">
      <VBtn text fab size="sm" prefix-icon="ic:round-edit"></VBtn>
      <VBtn
        text
        fab
        size="sm"
        prefix-icon="ic:round-delete"
        @click="deleteItem(item)"
      ></VBtn>
    </template>
  </VDataTable>

  <ModalDelete v-model="dialogDelete" @yes="onItemDeleted" />
</template>
