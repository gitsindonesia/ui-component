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
    to: '/cms/components/alerts',
    title: 'v-alert',
  },
]);
</script>

<template>
  <h1 class="font-bold mb-1 text-xl text-blue-900">Alert</h1>
  <v-breadcrumbs :items="breadcrumbs" />

  <div class="bg-white shadow-md rounded-md mb-4">
    <div class="border-b py-3 px-4 font-medium text-gray-600">Default</div>
    <div class="bg-gray-100 shadow-inner rounded-b-md">
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-6/12 py-3 px-4 flex items-center flex-wrap">
          <v-alert>Hello World</v-alert>
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
            &lt;v-alert&gt;Hello World&lt;/v-alert&gt;
          </ssh-pre>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-white shadow-md rounded-md mb-4">
    <div class="border-b py-3 px-4 font-medium text-gray-600">Color</div>
    <div class="bg-gray-100 shadow-inner rounded-b-md">
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-6/12 py-3 px-4 flex items-center flex-wrap">
          <v-alert color="primary">primary</v-alert>
          <v-alert color="error">error</v-alert>
          <v-alert color="warning">warning</v-alert>
          <v-alert color="success">success</v-alert>
          <v-alert color="dark">dark</v-alert>
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
&lt;v-alert color="primary"&gt;primary&lt;/v-alert&gt;
&lt;v-alert color="error"&gt;error&lt;/v-alert&gt;
&lt;v-alert color="warning"&gt;warning&lt;/v-alert&gt;
&lt;v-alert color="success"&gt;success&lt;/v-alert&gt;
&lt;v-alert color="dark"&gt;dark&lt;/v-alert&gt;</pre
            >
          </ssh-pre>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-white shadow-md rounded-md mb-4">
    <div class="border-b py-3 px-4 font-medium text-gray-600">Outlined</div>
    <div class="bg-gray-100 shadow-inner rounded-b-md">
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-6/12 py-3 px-4 flex items-center flex-wrap">
          <v-alert outlined>Default</v-alert>
          <v-alert outlined color="primary">Primary</v-alert>
          <v-alert outlined color="success">Success</v-alert>
          <v-alert outlined color="error">error</v-alert>
          <v-alert outlined color="warning">Warning</v-alert>
          <v-alert outlined color="dark">Dark</v-alert>
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
&lt;v-alert outlined&gt;primary&lt;/v-alert&gt;
&lt;v-alert outlined color="primary"&gt;primary&lt;/v-alert&gt;
&lt;v-alert outlined color="success"&gt;success&lt;/v-alert&gt;
&lt;v-alert outlined color="error"&gt;error&lt;/v-alert&gt;
&lt;v-alert outlined color="warning"&gt;warning&lt;/v-alert&gt;
&lt;v-alert outlined color="dark"&gt;dark&lt;/v-alert&gt;
</pre
            >
          </ssh-pre>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-white shadow-md rounded-md mb-4">
    <div class="border-b py-3 px-4 font-medium text-gray-600">Dismissable</div>
    <div class="bg-gray-100 shadow-inner rounded-b-md">
      <div class="flex flex-col md:flex-row">
        <div class="w-full p-3 flex items-center flex-wrap">
          <div
            class="
              text-white
              px-6
              py-4
              border-0
              rounded
              relative
              mb-4
              bg-pink-500
            "
          >
            <span class="inline-block align-middle mr-8">
              <b class="capitalize">pink!</b> This is a pink alert - check it
              out!
            </span>
            <button
              class="
                absolute
                bg-transparent
                text-2xl
                font-semibold
                leading-none
                right-0
                top-0
                mt-4
                mr-6
                outline-none
                focus:outline-none
              "
            >
              <span>×</span>
            </button>
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
            <pre></pre>
          </ssh-pre>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
