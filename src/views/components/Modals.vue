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
    to: '/cms/components/modals',
    title: 'v-modals',
  },
]);

const isOpen = ref(false);

const onOk = () => {
  alert('You choose OK!');
};

const onCancel = () => {
  alert('You choose Cancel!');
};

const onClose = () => {
  alert('Closing the modal...');
};
</script>

<template>
  <h1 class="font-bold mb-1 text-xl text-blue-900">Modal</h1>
  <v-breadcrumbs :items="breadcrumbs" />

  <div class="bg-white shadow-md rounded-md mb-4">
    <div class="border-b py-3 px-4 font-medium text-gray-600">Default</div>
    <div class="bg-gray-100 shadow-inner rounded-b-md">
      <div class="flex flex-col md:flex-row">
        <div
          class="w-full md:w-6/12 py-3 px-4 flex items-center flex-wrap gap-2"
        >
          <v-modal>
            <template #activator="{open}">
              <v-btn @click="open">Click Me</v-btn>
            </template>
            Hello World
          </v-modal>
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
&lt;v-modal&gt;
  &lt;template #activator="{open}"&gt;
    &lt;v-btn @click="open"&gt;Click Me&lt;/v-btn&gt;
  &lt;/template&gt;
  Hello World
&lt;/v-modal&gt;</pre
            >
          </ssh-pre>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white shadow-md rounded-md mb-4">
    <div class="border-b py-3 px-4 font-medium text-gray-600">Modal Title</div>
    <div class="bg-gray-100 shadow-inner rounded-b-md">
      <div class="flex flex-col md:flex-row">
        <div
          class="w-full md:w-6/12 py-3 px-4 flex items-center flex-wrap gap-2"
        >
          <v-modal title="Confirmation">
            <template #activator="{open}">
              <v-btn @click="open">Click Me</v-btn>
            </template>
            Hello World
          </v-modal>
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
&lt;v-modal title="Confirmation"&gt;
  &lt;template #activator="{open}"&gt;
    &lt;v-btn @click="open"&gt;Click Me&lt;/v-btn&gt;
  &lt;/template&gt;
  Hello World
&lt;/v-modal&gt;</pre
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
        <div
          class="w-full md:w-6/12 py-3 px-4 flex items-center flex-wrap gap-2"
        >
          <v-modal v-model="isOpen">
            <template #activator="{open}">
              <v-btn @click="open">Click Me</v-btn>
            </template>
            v-modal Status: {{ isOpen }}
          </v-modal>
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
&lt;v-modal v-model="isOpen"&gt;
  &lt;template #activator="{open}"&gt;
    &lt;v-btn @click="open"&gt;Click Me&lt;/v-btn&gt;
  &lt;/template&gt;
  v-modal Status: &#123;&#123; isOpen &#125;&#125;
&lt;/v-modal&gt;</pre
            >
          </ssh-pre>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white shadow-md rounded-md mb-4">
    <div class="border-b py-3 px-4 font-medium text-gray-600">Slots</div>
    <div class="bg-gray-100 shadow-inner rounded-b-md">
      <div class="flex flex-col md:flex-row">
        <div
          class="w-full md:w-6/12 py-3 px-4 flex items-center flex-wrap gap-2"
        >
          <v-modal>
            <template #activator="{open}">
              <v-btn @click="open">Click Me</v-btn>
            </template>
            v-modal Body

            <template #header="{close}">
              <div
                class="
                  bg-green-600
                  flex
                  items-center
                  justify-between
                  text-white
                  px-4
                  sm:pl-6
                  py-3
                  rounded-t-md
                "
              >
                Header
                <v-btn color="white" link size="xs" @click="close">
                  <svg
                    class="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </v-btn>
              </div>
            </template>
            <template #footer="{close, ok}">
              <div
                class="
                  bg-gray-200
                  px-4
                  sm:pl-6
                  py-3
                  rounded-b-md
                  flex
                  gap-2
                  justify-center
                "
              >
                <v-btn @click="close"> Close </v-btn>
                <v-btn color="success" @click="ok"> OK </v-btn>
              </div>
            </template>
          </v-modal>
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
&lt;v-modal&gt;
  &lt;template #activator=&quot;{open}&quot;&gt;
    &lt;v-btn @click=&quot;open&quot;&gt;Click Me&lt;/v-btn&gt;
  &lt;/template&gt;
  v-modal Body

  &lt;template #header=&quot;{close}&quot;&gt;
    &lt;div class=&quot;bg-green-600 flex items-center justify-between text-white px-4 sm:pl-6 py-3 rounded-t-md&quot;&gt;
      Header
      &lt;v-btn color=&quot;white&quot; link size=&quot;xs&quot; @click=&quot;close&quot;&gt;
        &lt;svg class=&quot;w-5 h-5&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot; stroke=&quot;currentColor&quot;&gt;
          &lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M6 18L18 6M6 6l12 12&quot; /&gt;
        &lt;/svg&gt;
      &lt;/v-btn&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;template #footer=&quot;{close, ok}&quot;&gt;
    &lt;div class=&quot;bg-gray-200 px-4 sm:pl-6 py-3 rounded-b-md flex gap-2 justify-center&quot;&gt;
      &lt;v-btn @click=&quot;close&quot;&gt;
        Close
      &lt;/v-btn&gt;
      &lt;v-btn color=&quot;success&quot; @click=&quot;ok&quot;&gt;
        OK
      &lt;/v-btn&gt;
    &lt;/div&gt;
  &lt;/template&gt;
&lt;/v-modal&gt;</pre
            >
          </ssh-pre>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white shadow-md rounded-md mb-4">
    <div class="border-b py-3 px-4 font-medium text-gray-600">
      Customize Buttons
    </div>
    <div class="bg-gray-100 shadow-inner rounded-b-md">
      <div class="flex flex-col md:flex-row">
        <div
          class="w-full md:w-6/12 py-3 px-4 flex items-center flex-wrap gap-2"
        >
          <v-modal
            ok-text="Yes, Delete it"
            cancel-text="No, Cancel"
            ok-color="error"
            cancel-color="warning"
          >
            <template #activator="{open}">
              <v-btn @click="open">Click Me</v-btn>
            </template>
            Are you sure want to delete this file?
          </v-modal>
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
&lt;v-modal ok-text="Submit" cancel-text="No, Cancel" ok-color="error" cancel-color="warning"&gt;
  &lt;template #activator="{open}"&gt;
    &lt;v-btn @click="open"&gt;Click Me&lt;/v-btn&gt;
  &lt;/template&gt;
  Are you sure want to delete this file?
&lt;/v-modal&gt;</pre
            >
          </ssh-pre>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white shadow-md rounded-md mb-4">
    <div class="border-b py-3 px-4 font-medium text-gray-600">No Header</div>
    <div class="bg-gray-100 shadow-inner rounded-b-md">
      <div class="flex flex-col md:flex-row">
        <div
          class="w-full md:w-6/12 py-3 px-4 flex items-center flex-wrap gap-2"
        >
          <v-modal no-header>
            <template #activator="{open}">
              <v-btn @click="open">Click Me</v-btn>
            </template>
            Are you sure want to delete this file?
          </v-modal>
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
&lt;v-modal no-header&gt;
  &lt;template #activator="{open}"&gt;
    &lt;v-btn @click="open"&gt;Click Me&lt;/v-btn&gt;
  &lt;/template&gt;
  Are you sure want to delete this file?
&lt;/v-modal&gt;</pre
            >
          </ssh-pre>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white shadow-md rounded-md mb-4">
    <div class="border-b py-3 px-4 font-medium text-gray-600">No Footer</div>
    <div class="bg-gray-100 shadow-inner rounded-b-md">
      <div class="flex flex-col md:flex-row">
        <div
          class="w-full md:w-6/12 py-3 px-4 flex items-center flex-wrap gap-2"
        >
          <v-modal no-footer>
            <template #activator="{open}">
              <v-btn @click="open">Click Me</v-btn>
            </template>
            Are you sure want to delete this file?
          </v-modal>
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
&lt;v-modal no-footer&gt;
  &lt;template #activator="{open}"&gt;
    &lt;v-btn @click="open"&gt;Click Me&lt;/v-btn&gt;
  &lt;/template&gt;
  Are you sure want to delete this file?
&lt;/v-modal&gt;</pre
            >
          </ssh-pre>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white shadow-md rounded-md mb-4">
    <div class="border-b py-3 px-4 font-medium text-gray-600">Events</div>
    <div class="bg-gray-100 shadow-inner rounded-b-md">
      <div class="flex flex-col md:flex-row">
        <div
          class="w-full md:w-6/12 py-3 px-4 flex items-center flex-wrap gap-2"
        >
          <v-modal @ok="onOk" @cancel="onCancel" @close="onClose">
            <template #activator="{open}">
              <v-btn @click="open">Click Me</v-btn>
            </template>
            Are you sure want to delete this file?
          </v-modal>
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
&lt;v-modal @ok="onOk" @cancel="onCancel" @close="onClose"&gt;
  &lt;template #activator="{open}"&gt;
    &lt;v-btn @click="open"&gt;Click Me&lt;/v-btn&gt;
  &lt;/template&gt;
  Are you sure want to delete this file?
&lt;/v-modal&gt;</pre
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

const isOpen = ref(false)

const onOk = () => {
  alert("You choose OK!")
}

const onCancel = () => {
  alert("You choose Cancel!")
}

const onClose = () => {
  alert("Closing the modal...")
}
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
  title: {
    type: String,
    default: ''
  },
  okText: {
    type: String,
    default: 'OK'
  },
  cancelText: {
    type: String,
    default: 'Cancel'
  },
  noCancel: {
    type: Boolean,
    default: false
  },
  noOk: {
    type: Boolean,
    default: false
  },
  btnOkProps: {
    type: Object,
    default: () => ({})
  },
  btnCancelProps: {
    type: Object,
    default: () => ({})
  },
  okColor: {
    type: String,
    default: 'primary'
  },
  cancelColor: {
    type: String,
    default: ''
  },
  headerClass: {
    type: String,
    default: ''
  },
  bodyClass: {
    type: String,
    default: ''
  },
  footerClass: {
    type: String,
    default: ''
  },
  noHeader: {
    type: Boolean,
    default: false
  },
  noFooter: {
    type: Boolean,
    default: false
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
