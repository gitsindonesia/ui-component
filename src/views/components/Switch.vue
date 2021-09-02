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
    to: '/cms/components/switches',
    title: 'Switch',
  },
]);

const selected = ref(false);
</script>

<template>
  <h1 class="font-bold mb-1 text-xl text-blue-900">Switch</h1>
  <v-breadcrumbs :items="breadcrumbs" />

  <div class="bg-white shadow-md rounded-md mb-4">
    <div class="border-b py-3 px-4 font-medium text-gray-600">Default</div>
    <div class="bg-gray-100 shadow-inner rounded-b-md">
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-6/12 py-3 px-4 gap-2 flex items-center">
          <div class="flex-none">
            <VSwitch />
          </div>
          <VSwitch :model-value="true" />
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
&lt;VSwitch /&gt;
&lt;VSwitch :modelValue="true" /&gt;</pre
            >
          </ssh-pre>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white shadow-md rounded-md mb-4">
    <div class="border-b py-3 px-4 font-medium text-gray-600">V-Model</div>
    <div class="bg-gray-100 shadow-inner rounded-b-md">
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-6/12 py-3 px-4 gap-2 flex items-center">
          <div class="flex-none">
            <VSwitch v-model="selected" />
          </div>
          <VSwitch v-model="selected" />
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
&lt;VSwitch v-model="selected" /&gt;
&lt;VSwitch v-model="selected" /&gt;</pre
            >
          </ssh-pre>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white shadow-md rounded-md mb-4">
    <div class="border-b py-3 px-4 font-medium text-gray-600">Label</div>
    <div class="bg-gray-100 shadow-inner rounded-b-md">
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-6/12 py-3 px-4 gap-2">
          <VSwitch :model-value="true" label="Select" />
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
            <pre>&lt;VSwitch :modelValue="true" label="Select" /&gt;</pre>
          </ssh-pre>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white shadow-md rounded-md mb-4">
    <div class="border-b py-3 px-4 font-medium text-gray-600">Color</div>
    <div class="bg-gray-100 shadow-inner rounded-b-md">
      <div class="flex flex-col md:flex-row">
        <div
          class="w-full md:w-6/12 py-3 px-4 gap-2 flex flex-wrap items-center"
        >
          <VSwitch :model-value="true" />
          <VSwitch :model-value="true" color="secondary" />
          <VSwitch :model-value="true" color="warning" />
          <VSwitch :model-value="true" color="success" />
          <VSwitch :model-value="true" color="error" />
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
&lt;VSwitch :modelValue="true" /&gt;
&lt;VSwitch :modelValue="true" color="info" /&gt;
&lt;VSwitch :modelValue="true" color="secondary" /&gt;
&lt;VSwitch :modelValue="true" color="warning" /&gt;
&lt;VSwitch :modelValue="true" color="success" /&gt;
&lt;VSwitch :modelValue="true" color="error" /&gt;</pre
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
const selected = ref(false)
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
    type: Boolean,
    default: false
  },
  label: {
    type: String,
    default: ''
  }
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
