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
    to: '/cms/components/labels',
    title: 'v-label',
  },
]);
</script>

<template>
  <h1 class="font-bold mb-1 text-xl text-blue-900">Label</h1>
  <v-breadcrumbs :items="breadcrumbs" />

  <div class="bg-white shadow-md rounded-md mb-4">
    <div class="border-b py-3 px-4 font-medium text-gray-600">Color Simple</div>
    <div class="bg-gray-100 shadow-inner rounded-b-md">
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-6/12 py-3 px-4 flex items-center flex-wrap">
          <v-label>Label</v-label>
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
            <pre>&lt;v-label&gt;primary&lt;/v-label&gt;</pre>
          </ssh-pre>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white shadow-md rounded-md mb-4">
    <div class="border-b py-3 px-4 font-medium text-gray-600">Color round</div>
    <div class="bg-gray-100 shadow-inner rounded-b-md">
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-6/12 py-3 px-4 flex items-center flex-wrap">
          <v-label color="primary" class="rounded-full">primary</v-label>
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
&lt;v-alert color="primary" class="rounded-full" &gt;primary&lt;/v-alert&gt;</pre
            >
          </ssh-pre>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
