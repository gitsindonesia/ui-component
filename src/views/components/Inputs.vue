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
    to: '/cms/components/inputs',
    title: 'v-inputs',
  },
]);

const search = ref('');
</script>

<template>
  <h1 class="font-bold mb-1 text-xl text-blue-900">Input</h1>
  <v-breadcrumbs :items="breadcrumbs" />

  <div class="bg-white shadow-md rounded-md mb-4">
    <div class="border-b py-3 px-4 font-medium text-gray-600">Default</div>
    <div class="bg-gray-100 shadow-inner rounded-b-md">
      <div class="flex flex-col md:flex-row">
        <div
          class="w-full md:w-6/12 py-3 px-4 flex items-center flex-wrap gap-2"
        >
          <v-input />
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
            <pre>&lt;v-input /&gt;</pre>
          </ssh-pre>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white shadow-md rounded-md mb-4">
    <div class="border-b py-3 px-4 font-medium text-gray-600">Type</div>
    <div class="bg-gray-100 shadow-inner rounded-b-md">
      <div class="flex flex-col md:flex-row">
        <div
          class="w-full md:w-6/12 py-3 px-4 flex items-center flex-wrap gap-2"
        >
          <v-input type="email" />
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
            <pre>&lt;v-input type="email" /&gt;</pre>
          </ssh-pre>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white shadow-md rounded-md mb-4">
    <div class="border-b py-3 px-4 font-medium text-gray-600">Placeholder</div>
    <div class="bg-gray-100 shadow-inner rounded-b-md">
      <div class="flex flex-col md:flex-row">
        <div
          class="w-full md:w-6/12 py-3 px-4 flex items-center flex-wrap gap-2"
        >
          <v-input placeholder="Search..." />
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
            <pre>&lt;v-input placeholder="Search..." /&gt;</pre>
          </ssh-pre>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white shadow-md rounded-md mb-4">
    <div class="border-b py-3 px-4 font-medium text-gray-600">V-Model</div>
    <div class="bg-gray-100 shadow-inner rounded-b-md">
      <div class="flex flex-col md:flex-row">
        <div
          class="w-full md:w-6/12 py-3 px-4 flex items-center flex-wrap gap-2"
        >
          <v-input v-model="search" placeholder="Search..." />
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
&lt;v-input v-model="search" placeholder="Search..." /&gt;</pre
            >
          </ssh-pre>
        </div>
      </div>
    </div>
  </div>

  <!--  <div class="bg-white shadow-md rounded-md mb-4">-->
  <!--    <div class="border-b py-3 px-4 font-medium text-gray-600">-->
  <!--      Data Format-->
  <!--    </div>-->
  <!--    <div class="shadow-inner rounded-b-md">-->
  <!--      <div class="flex">-->
  <!--        <div class="w-full px-4 flex items-center rounded-br-md text-sm">-->
  <!--          <ssh-pre class="mb-3 w-full" language="js" copy-button dark>-->
  <!--            <template v-slot:copy-button>-->
  <!--              <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
  <!--                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />-->
  <!--              </svg>-->
  <!--            </template>-->
  <!--<pre>-->
  <!--import {ref} from 'vue';-->

  <!--const headers = ref([-->
  <!--  {-->
  <!--    text: 'ID',-->
  <!--    value: 'id'-->
  <!--  },-->
  <!--  {-->
  <!--    text: 'Name',-->
  <!--    value: 'name'-->
  <!--  },-->
  <!--  {-->
  <!--    text: 'Email',-->
  <!--    value: 'email'-->
  <!--  },-->
  <!--  {-->
  <!--    text: 'Phone',-->
  <!--    value: 'phone'-->
  <!--  }-->
  <!--])-->

  <!--const headersWithAction = computed(() => [-->
  <!--    ...headers.value,-->
  <!--  {-->
  <!--    text: 'Action',-->
  <!--    value: 'action',-->
  <!--    sortable: false,-->
  <!--    align: 'center'-->
  <!--  }-->
  <!--])-->

  <!--const items = ref([...Array(30)].map((v, index) => ({-->
  <!--  id: index + 1,-->
  <!--  name: `User ${index + 1}`,-->
  <!--  email: `user+${index + 1}@gits.id`,-->
  <!--  phone: `6288899900${index}`-->
  <!--})))-->

  <!--const sortBy = ref('')-->
  <!--const sortDirection = ref('')-->
  <!--const search = ref('')-->
  <!--const searchBy = ref('name')-->

  <!--const paginationProps = ref({})-->
  <!--</pre>-->
  <!--          </ssh-pre>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->

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
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
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
