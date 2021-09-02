<script setup>
import {computed, ref} from 'vue';
import SshPre from 'simple-syntax-highlighter';

const breadcrumbs = ref([
  {
    to: '/cms',
    title: 'Dashboard',
  },
  {
    to: '/cms/components',
    title: 'Components',
  },
  {
    to: '/cms/components/tables',
    title: 'Data Table',
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
    text: 'Phone',
    value: 'phone',
  },
]);

const headersWithAction = computed(() => [
  ...headers.value,
  {
    text: 'Action',
    value: 'action',
    sortable: false,
    align: 'center',
  },
]);

const items = ref(
  [...Array(30)].map((v, index) => ({
    id: index + 1,
    name: `User ${index + 1}`,
    email: `user+${index + 1}@gits.id`,
    phone: `6288899900${index}`,
  })),
);

const sortBy = ref('');
const sortDirection = ref('');
const search = ref('');
const searchBy = ref('name');

const paginationProps = ref({});
</script>

<template>
  <h1 class="font-bold mb-1 text-xl text-blue-900">Data Table</h1>
  <v-breadcrumbs :items="breadcrumbs" />

  <div class="bg-white shadow-md rounded-md mb-4">
    <div class="border-b py-3 px-4 font-medium text-gray-600">Default</div>
    <div class="bg-gray-100 shadow-inner rounded-b-md">
      <div class="flex flex-col md:flex-row">
        <div
          class="w-full md:w-6/12 py-3 px-4 flex items-center flex-wrap gap-2"
        >
          <v-data-table class="w-full" :headers="headers" :items="items" />
        </div>
        <div
          class="w-full md:w-6/12 px-4 flex items-center rounded-br-md text-sm"
        >
          <ssh-pre class="mb-3 w-full" language="html-vue" copy-button dark>
            <template #copy-button>
              <svg
                class="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </template>
            <pre>
&lt;v-data-table class="w-full" :headers="headers" :items="items"/&gt;</pre
            >
          </ssh-pre>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white shadow-md rounded-md mb-4">
    <div class="border-b py-3 px-4 font-medium text-gray-600">Sorting</div>
    <div class="bg-gray-100 shadow-inner rounded-b-md">
      <div class="flex flex-col md:flex-row">
        <div
          class="w-full md:w-6/12 py-3 px-4 flex items-center flex-wrap gap-2"
        >
          <v-data-table
            v-model:sort-by="sortBy"
            v-model:sort-direction="sortDirection"
            class="w-full"
            :headers="headers"
            :items="items"
          />
        </div>
        <div
          class="w-full md:w-6/12 px-4 flex items-center rounded-br-md text-sm"
        >
          <ssh-pre class="mb-3 w-full" language="html-vue" copy-button dark>
            <template #copy-button>
              <svg
                class="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </template>
            <pre>
&lt;v-data-table class="w-full" :headers="headers" :items="items" v-model:sort-by="sortBy" v-model:sort-direction="sortDirection"/&gt;</pre
            >
          </ssh-pre>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white shadow-md rounded-md mb-4">
    <div class="border-b py-3 px-4 font-medium text-gray-600">
      Column Formatting
    </div>
    <div class="bg-gray-100 shadow-inner rounded-b-md">
      <div class="flex flex-col md:flex-row">
        <div
          class="w-full md:w-6/12 py-3 px-4 flex items-center flex-wrap gap-2"
        >
          <v-data-table
            class="w-full"
            :headers="headersWithAction"
            :items="items"
          >
            <template #item.name="{item}">
              <div class="font-bold text-blue-600">{{ item.name }}</div>
            </template>
            <template #item.action="{item}">
              <v-btn link size="xs" :to="`/edit/${item.id}`"> Edit </v-btn>
              <v-btn color="error" link size="xs"> Delete </v-btn>
            </template>
          </v-data-table>
        </div>
        <div
          class="w-full md:w-6/12 px-4 flex items-center rounded-br-md text-sm"
        >
          <ssh-pre class="mb-3 w-full" language="html-vue" copy-button dark>
            <template #copy-button>
              <svg
                class="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </template>
            <pre>
&lt;v-data-table class="w-full" :headers="headersWithAction" :items="items"&gt;
  &lt;template #item.name="{item}"&gt;
    &lt;div class="font-bold text-blue-600"&gt;	&#123;&#123; item.name &#125;&#125;	&lt;/div&gt;
  &lt;/template&gt;
  &lt;template #item.action="{item}"&gt;
    &lt;v-btn link size="xs" :to="`/edit/${item.id}`"&gt;
      Edit
    &lt;/v-btn&gt;
    &lt;v-btn color="error" link size="xs"&gt;
      Delete
    &lt;/v-btn&gt;
  &lt;/template&gt;
&lt;/v-data-table&gt;</pre
            >
          </ssh-pre>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white shadow-md rounded-md mb-4">
    <div class="border-b py-3 px-4 font-medium text-gray-600">Searching</div>
    <div class="bg-gray-100 shadow-inner rounded-b-md">
      <div class="flex flex-col md:flex-row">
        <div
          class="w-full md:w-6/12 py-3 px-4 flex items-center flex-wrap gap-2"
        >
          <div class="w-full">
            <div class="flex gap-2 items-center mb-2">
              <v-select :items="headers" />
              <v-input v-model="search" class="mt-1" placeholder="Search..." />
            </div>
            <v-data-table
              v-model:search="search"
              v-model:search-by="searchBy"
              class="w-full"
              :headers="headersWithAction"
              :items="items"
            >
              <template #item.name="{item}">
                <div class="font-bold text-blue-600">{{ item.name }}</div>
              </template>
              <template #item.action="{item}">
                <v-btn link size="xs" :to="`/edit/${item.id}`"> Edit </v-btn>
                <v-btn color="error" link size="xs"> Delete </v-btn>
              </template>
            </v-data-table>
          </div>
        </div>
        <div
          class="w-full md:w-6/12 px-4 flex items-center rounded-br-md text-sm"
        >
          <ssh-pre class="mb-3 w-full" language="html-vue" copy-button dark>
            <template #copy-button>
              <svg
                class="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </template>
            <pre>
&lt;div class="flex gap-2 items-center mb-2"&gt;
  &lt;v-select :items="headers"/&gt;
  &lt;v-input class="mt-1" v-model="search" placeholder="Search..." /&gt;
&lt;/div&gt;

&lt;v-data-table class="w-full" :headers="headersWithAction" :items="items" v-model:search="search" v-model:search-by="searchBy"&gt;
  &lt;template #item.name="{item}"&gt;
    &lt;div class="font-bold text-blue-600"&gt;	&#123;&#123; item.name &#125;&#125;	&lt;/div&gt;
  &lt;/template&gt;
  &lt;template #item.action="{item}"&gt;
    &lt;v-btn link size="xs" :to="`/edit/${item.id}`"&gt;
      Edit
    &lt;/v-btn&gt;
    &lt;v-btn color="error" link size="xs"&gt;
      Delete
    &lt;/v-btn&gt;
  &lt;/template&gt;
&lt;/v-data-table&gt;</pre
            >
          </ssh-pre>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white shadow-md rounded-md mb-4">
    <div class="border-b py-3 px-4 font-medium text-gray-600">Data Format</div>
    <div class="shadow-inner rounded-b-md">
      <div class="flex flex-col md:flex-row">
        <div class="w-full px-4 flex items-center rounded-br-md text-sm">
          <ssh-pre class="mb-3 w-full" language="js" copy-button dark>
            <template #copy-button>
              <svg
                class="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </template>
            <pre>
import {ref} from 'vue';

const headers = ref([
  {
    text: 'ID',
    value: 'id'
  },
  {
    text: 'Name',
    value: 'name'
  },
  {
    text: 'Email',
    value: 'email'
  },
  {
    text: 'Phone',
    value: 'phone'
  }
])

const headersWithAction = computed(() => [
    ...headers.value,
  {
    text: 'Action',
    value: 'action',
    sortable: false,
    align: 'center'
  }
])

const items = ref([...Array(30)].map((v, index) => ({
  id: index + 1,
  name: `User ${index + 1}`,
  email: `user+${index + 1}@gits.id`,
  phone: `6288899900${index}`
})))

const sortBy = ref('')
const sortDirection = ref('')
const search = ref('')
const searchBy = ref('name')

const paginationProps = ref({})
</pre
            >
          </ssh-pre>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white shadow-md rounded-md mb-4">
    <div class="border-b py-3 px-4 font-medium text-gray-600">Props</div>
    <div class="shadow-inner rounded-b-md">
      <div class="flex flex-col md:flex-row">
        <div class="w-full px-4 flex items-center rounded-br-md text-sm">
          <ssh-pre class="mb-3 w-full" language="js" copy-button dark>
            <template #copy-button>
              <svg
                class="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </template>
            <pre>
const props = defineProps({
  headers: {
    type: Array,
    default: () => []
  },
  items: {
    type: Array,
    default: () => []
  },
  itemsPerPage: {
    type: Number,
    default: 10
  },
  disableSorting: {
    type: Boolean,
    default: false
  },
  pagination: {
    type: Object,
    default() {
      return {}
    }
  },
  loading: {
    type: Boolean,
    default: false
  },
  search: {
    type: String,
    default: ''
  },
  searchBy: {
    type: [String, Array],
    default: null
  },
  loadingText: {
    type: String,
    default: 'Loading...'
  },
  noDataText: {
    type: String,
    default: 'No Data'
  },
  serverSide: {
    type: Boolean,
    default: false
  },
  sortBy: {
    type: String,
    default: ''
  },
  sortDirection: {
    type: String,
    default: ''
  },
})
</pre
            >
          </ssh-pre>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
