<script setup>
import {ref} from 'vue';
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
    to: '/cms/components/paginations',
    title: 'v-pagination',
  },
]);

const page = ref(1);
</script>

<template>
  <h1 class="font-bold mb-1 text-xl text-blue-900">Pagination</h1>
  <v-breadcrumbs :items="breadcrumbs" />

  <div class="bg-white shadow-md rounded-md mb-4">
    <div class="border-b py-3 px-4 font-medium text-gray-600">Default</div>
    <div class="bg-gray-100 shadow-inner rounded-b-md">
      <div class="flex flex-col md:flex-row">
        <div
          class="w-full md:w-6/12 py-3 px-4 flex items-center flex-wrap gap-2"
        >
          <v-pagination v-model="page" :total-items="30" :items-per-page="10" />
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
&lt;v-pagination v-model="page" :total-items="30" :items-per-page="10" /&gt;</pre
            >
          </ssh-pre>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white shadow-md rounded-md mb-4">
    <div class="border-b py-3 px-4 font-medium text-gray-600">
      Show Hide v-btns
    </div>
    <div class="bg-gray-100 shadow-inner rounded-b-md">
      <div class="flex flex-col md:flex-row">
        <div
          class="w-full md:w-6/12 py-3 px-4 flex items-center flex-wrap gap-2"
        >
          <v-pagination
            v-model="page"
            :total-items="30"
            :items-per-page="10"
            :show-first="false"
            :show-last="false"
            :show-next="true"
            :show-previous="true"
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
&lt;v-pagination v-model="page" :total-items="30" :items-per-page="10" :show-first="false" :show-last="false" :show-next="true" :show-previous="true" /&gt;</pre
            >
          </ssh-pre>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white shadow-md rounded-md mb-4">
    <div class="border-b py-3 px-4 font-medium text-gray-600">Boundary</div>
    <div class="bg-gray-100 shadow-inner rounded-b-md">
      <div class="flex flex-col md:flex-row">
        <div
          class="w-full md:w-6/12 py-3 px-4 flex items-center flex-wrap gap-2"
        >
          <v-pagination
            v-model="page"
            :total-items="200"
            :items-per-page="10"
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
&lt;v-pagination v-model="page" :total-items="200" :items-per-page="10" /&gt;</pre
            >
          </ssh-pre>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white shadow-md rounded-md mb-4">
    <div class="border-b py-3 px-4 font-medium text-gray-600">Active Class</div>
    <div class="bg-gray-100 shadow-inner rounded-b-md">
      <div class="flex flex-col md:flex-row">
        <div
          class="w-full md:w-6/12 py-3 px-4 flex items-center flex-wrap gap-2"
        >
          <v-pagination
            v-model="page"
            :total-items="100"
            :items-per-page="10"
            active-class="text-red-600 font-bold"
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
&lt;v-pagination v-model="page" :total-items="100" :items-per-page="10" active-class="text-red-600 font-bold" /&gt;</pre
            >
          </ssh-pre>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white shadow-md rounded-md mb-4">
    <div class="border-b py-3 px-4 font-medium text-gray-600">
      Data Table v-pagination
    </div>
    <div class="bg-gray-100 shadow-inner rounded-b-md">
      <div class="flex flex-col md:flex-row">
        <div
          class="w-full md:w-6/12 py-3 px-4 flex items-center flex-wrap gap-2"
        >
          <v-data-table-pagination
            v-model="page"
            :total-items="100"
            :items-per-page="10"
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
&lt;v-data-table-pagination v-model="page" :total-items="100" :items-per-page="10" /&gt;</pre
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

const page = ref(1)
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
  modelValue: {
    type: Number,
    default: 1
  },
  showFirst: {
    type: Boolean,
    default: true
  },
  showPrevious: {
    type: Boolean,
    default: true
  },
  showNext: {
    type: Boolean,
    default: true
  },
  showLast: {
    type: Boolean,
    default: true
  },
  totalItems: {
    type: Number,
    default: 0
  },
  siblingCount: {
    type: Number,
    default: 1
  },
  boundaryCount: {
    type: Number,
    default: 1
  },
  itemsPerPage: {
    type: Number,
    default: 10
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
