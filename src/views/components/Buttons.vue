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
    to: '/cms/components/buttons',
    title: 'v-btns',
  },
]);
</script>

<template>
  <h1 class="font-bold mb-1 text-xl text-blue-900">Button</h1>
  <v-breadcrumbs :items="breadcrumbs" />

  <div class="bg-white shadow-md rounded-md mb-4">
    <div class="border-b py-3 px-4 font-medium text-gray-600">Default</div>
    <div class="bg-gray-100 shadow-inner rounded-b-md">
      <div class="flex flex-col md:flex-row">
        <div
          class="w-full md:w-6/12 py-3 px-4 flex items-center flex-wrap gap-2"
        >
          <v-btn> Default </v-btn>
          <v-btn color="primary"> Primary </v-btn>
          <v-btn color="secondary"> Secondary </v-btn>
          <v-btn color="info"> Info </v-btn>
          <v-btn color="warning"> Warning </v-btn>
          <v-btn color="success"> Success </v-btn>
          <v-btn color="error"> Error </v-btn>
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
&lt;v-btn&gt; Default &lt;/v-btn&gt;
&lt;v-btn color="primary"&gt; Primary &lt;/v-btn&gt;
&lt;v-btn color="secondary"&gt; Secondary &lt;/v-btn&gt;
&lt;v-btn color="info"&gt; Info &lt;/v-btn&gt;
&lt;v-btn color="warning"&gt; Warning &lt;/v-btn&gt;
&lt;v-btn color="success"&gt; Success &lt;/v-btn&gt;
&lt;v-btn color="error"&gt; Error &lt;/v-btn&gt;</pre
            >
          </ssh-pre>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white shadow-md rounded-md mb-4">
    <div class="border-b py-3 px-4 font-medium text-gray-600">Size</div>
    <div class="bg-gray-100 shadow-inner rounded-b-md">
      <div class="flex flex-col md:flex-row">
        <div
          class="w-full md:w-6/12 py-3 px-4 flex items-center flex-wrap gap-2"
        >
          <v-btn size="xs" color="primary"> v-btn </v-btn>
          <v-btn size="md" color="primary"> v-btn </v-btn>
          <v-btn size="lg" color="primary"> v-btn </v-btn>
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
&lt;v-btn size="xs" color="primary"&gt; v-btn &lt;/v-btn&gt;
&lt;v-btn size="md" color="primary"&gt; v-btn &lt;/v-btn&gt;
&lt;v-btn size="lg" color="primary"&gt; v-btn &lt;/v-btn&gt;</pre
            >
          </ssh-pre>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white shadow-md rounded-md mb-4">
    <div class="border-b py-3 px-4 font-medium text-gray-600">Rounded</div>
    <div class="bg-gray-100 shadow-inner rounded-b-md">
      <div class="flex flex-col md:flex-row">
        <div
          class="
            w-full
            md:w-6/12
            py-3
            px-4
            flex
            items-center
            flex-wrap
            gap-2
            flex-wrap
          "
        >
          <v-btn color="primary"> Default </v-btn>
          <v-btn rounded="0" color="primary"> None </v-btn>
          <v-btn rounded="md" color="primary"> md </v-btn>
          <v-btn rounded="lg" color="primary"> lg </v-btn>
          <v-btn rounded="xl" color="primary"> xl </v-btn>
          <v-btn rounded="l-lg" color="primary"> l-lg </v-btn>
          <v-btn rounded="r-lg" color="primary"> r-lg </v-btn>
          <v-btn rounded="t-lg" color="primary"> t-lg </v-btn>
          <v-btn rounded="b-lg" color="primary"> b-lg </v-btn>
          <v-btn rounded="full" color="primary"> full </v-btn>
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
&lt;v-btn rounded="0" color="primary"&gt; None &lt;/v-btn&gt;
&lt;v-btn rounded="md" color="primary"&gt; md &lt;/v-btn&gt;
&lt;v-btn rounded="lg" color="primary"&gt; lg &lt;/v-btn&gt;
&lt;v-btn rounded="xl" color="primary"&gt; xl &lt;/v-btn&gt;
&lt;v-btn rounded="l-lg" color="primary"&gt; l-lg &lt;/v-btn&gt;
&lt;v-btn rounded="r-lg" color="primary"&gt; r-lg &lt;/v-btn&gt;
&lt;v-btn rounded="t-lg" color="primary"&gt; t-lg &lt;/v-btn&gt;
&lt;v-btn rounded="b-lg" color="primary"&gt; b-lg &lt;/v-btn&gt;
&lt;v-btn rounded="full" color="primary"&gt; full &lt;/v-btn&gt;</pre
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
        <div
          class="w-full md:w-6/12 py-3 px-4 flex items-center flex-wrap gap-2"
        >
          <v-btn outlined> Default </v-btn>
          <v-btn outlined color="primary"> Primary </v-btn>
          <v-btn outlined color="secondary"> Secondary </v-btn>
          <v-btn outlined color="info"> Info </v-btn>
          <v-btn outlined color="warning"> Warning </v-btn>
          <v-btn outlined color="success"> Success </v-btn>
          <v-btn outlined color="error"> Error </v-btn>
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
&lt;v-btn outlined&gt; Default &lt;/v-btn&gt;
&lt;v-btn outlined color="primary"&gt; Primary &lt;/v-btn&gt;
&lt;v-btn outlined color="secondary"&gt; Secondary &lt;/v-btn&gt;
&lt;v-btn outlined color="info"&gt; Info &lt;/v-btn&gt;
&lt;v-btn outlined color="warning"&gt; Warning &lt;/v-btn&gt;
&lt;v-btn outlined color="success"&gt; Success &lt;/v-btn&gt;
&lt;v-btn outlined color="error"&gt; Error &lt;/v-btn&gt;</pre
            >
          </ssh-pre>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white shadow-md rounded-md mb-4">
    <div class="border-b py-3 px-4 font-medium text-gray-600">Link</div>
    <div class="bg-gray-100 shadow-inner rounded-b-md">
      <div class="flex flex-col md:flex-row">
        <div
          class="w-full md:w-6/12 py-3 px-4 flex items-center flex-wrap gap-2"
        >
          <v-btn link> Default </v-btn>
          <v-btn link color="primary"> Primary </v-btn>
          <v-btn link color="secondary"> Secondary </v-btn>
          <v-btn link color="info"> Info </v-btn>
          <v-btn link color="warning"> Warning </v-btn>
          <v-btn link color="success"> Success </v-btn>
          <v-btn link color="error"> Error </v-btn>
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
&lt;v-btn link&gt; Default &lt;/v-btn&gt;
&lt;v-btn link color="primary"&gt; Primary &lt;/v-btn&gt;
&lt;v-btn link color="secondary"&gt; Secondary &lt;/v-btn&gt;
&lt;v-btn link color="info"&gt; Info &lt;/v-btn&gt;
&lt;v-btn link color="warning"&gt; Warning &lt;/v-btn&gt;
&lt;v-btn link color="success"&gt; Success &lt;/v-btn&gt;
&lt;v-btn link color="error"&gt; Error &lt;/v-btn&gt;</pre
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

  <!--const breadcrumbs = ref([-->
  <!--  {-->
  <!--    to: '/cms',-->
  <!--    title: 'Dashboard',-->
  <!--  },-->
  <!--  {-->
  <!--    to: '/cms/components',-->
  <!--    title: 'Components',-->
  <!--  },-->
  <!--  {-->
  <!--    to: '/cms/components/breadcrumbs',-->
  <!--    title: 'v-breadcrumbs',-->
  <!--  },-->
  <!--])-->
  <!--</pre>-->
  <!--          </ssh-pre>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
</template>

<style scoped></style>
