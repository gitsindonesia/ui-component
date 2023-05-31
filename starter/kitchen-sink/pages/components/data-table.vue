<script setup lang="ts">
import type {VDataTableHeader} from '@morpheme/table';

const selected = ref([]);
const search = ref('');

const states = ['active', 'inactive'];

const items = [...Array(30)].map((_, index) => {
  const fName = ['Cory', 'Peppa', 'Gallagher', 'Caleb', 'Thomas'].at(
    Math.floor(Math.random() * 5),
  );
  const lName = ['Smith', 'Woods', 'Stein', 'Bauer', 'Gordon'].at(
    Math.floor(Math.random() * 5),
  );
  return {
    index,
    name: [fName, lName].join(' '),
    email: `user-${index}@example.com`,
    age: index + 1 * 10,
    state: states[Math.floor(Math.random() * states.length)],
    address: {
      city: [
        'Jakarta',
        'Melbourne',
        'London',
        'Washington',
        'Stockholm',
        'Seoul',
        'Moscoe',
        'Cape Town',
      ].at(index % 8),
      street: '241 Lorem Street',
    },
  };
});

const headers: VDataTableHeader[] = [
  {
    value: 'index',
    text: 'ID',
    class: '',
    tdClass: '',
    sortable: false,
  },
  {
    value: 'name',
    text: 'Name',
    class: '',
    tdClass: '',
  },
  {
    value: 'email',
    text: 'Email',
    class: '',
    tdClass: '',
  },
  {
    value: 'address.city',
    text: 'City',
    class: '',
    tdClass: '',
  },
];

const selectableHeaders = [
  {
    text: 'Checkox',
    value: 'selected',
  },
  ...headers.slice(1),
];

const stickyHeaders = ref<VDataTableHeader[]>([
  {
    value: 'index',
    text: 'ID',

    freeze: true,
    positionFreeze: 'left',
    sortable: false,
    align: 'center',
  },
  {
    value: 'name',
    text: 'First Name',
  },
  {
    value: 'name',
    text: 'Last Name',
  },
  {
    value: 'email',
    text: 'Email',
  },
  {
    value: 'age',
    text: 'Age',
  },
  {
    value: 'state',
    text: 'State',
  },
  {
    value: 'action',
    text: 'Action',
    freeze: true,
    positionFreeze: 'right',
    sortable: false,
    align: 'center',
  },
]);
</script>

<template>
  <PageHeader title="Data Table" />

  <div class="space-y-4">
    <VCard title="Default">
      <div>
        <VDataTable :headers="headers" :items="items" />
      </div>
    </VCard>

    <VCard title="Striped">
      <div>
        <VDataTable :headers="headers" :items="items" striped />
      </div>
    </VCard>

    <VCard title="Hover">
      <div>
        <VDataTable :headers="headers" :items="items" hover />
      </div>
    </VCard>

    <VCard title="Dense">
      <div>
        <VDataTable :headers="headers" :items="items" dense />
      </div>
    </VCard>

    <VCard title="Loading">
      <div>
        <VDataTable :headers="headers" :items="items" loading />
      </div>
    </VCard>

    <VCard title="Empty">
      <div>
        <VDataTable :headers="headers" :items="[]" />
      </div>
    </VCard>

    <VCard title="Must Sort">
      <div>
        <VDataTable :headers="headers" :items="items" must-sort />
      </div>
    </VCard>

    <VCard title="Disable Sorting">
      <div>
        <VDataTable :headers="headers" :items="items" disable-sorting />
      </div>
    </VCard>

    <VCard title="Flat">
      <div>
        <VDataTable :headers="headers" :items="items" flat />
      </div>
    </VCard>

    <VCard title="Bordered">
      <div>
        <VDataTable :headers="headers" :items="items" bordered />
      </div>
    </VCard>

    <VCard title="Tile">
      <div>
        <VDataTable :headers="headers" :items="items" tile />
      </div>
    </VCard>

    <VCard title="Custom Class">
      <div>
        <VDataTable
          :items="items"
          tile
          v-bind="{
            headerClass: 'bg-blue-600 text-white',
            bodyClass: 'bg-blue-100',
            footerClass: 'bg-gray-100',
            columnInactiveClass: 'text-blue-50 hover:text-blue-200',
            hover: true,
            hoverClass:
              'transition duration-300 hover:bg-blue-500 hover:text-white',
            tdClass: 'group-hover:text-white __GLOBAL_TD_CLASS__',
            headers: headers.map((e, idx) => ({
              ...e,
              class: `__CLASS_${idx}__`,
              tdClass: `__TD_HEAD_CLASS_${idx}__`,
            })),
            trClass: 'hover:!bg-gray-700 border-2 __TR__CLASS__',
          }"
        />
      </div>
    </VCard>

    <VCard title="Selectable">
      <div>
        <VDataTable
          :headers="selectableHeaders"
          :items="items"
          selectable
          v-model="selected"
        />
      </div>
    </VCard>

    <VCard title="Search">
      <div>
        <VInput
          v-model="search"
          placeholder="Search..."
          wrapper-class="mb-4"
          prepend-icon="ri:search-line"
        />

        <VDataTable :headers="headers" :items="items" v-model:search="search" />
      </div>
    </VCard>

    <VCard title="Sticky Column">
      <div>
        <VDataTable :headers="stickyHeaders" :items="items">
          <template #item.action> ... </template>
        </VDataTable>
      </div>
    </VCard>
  </div>
</template>
