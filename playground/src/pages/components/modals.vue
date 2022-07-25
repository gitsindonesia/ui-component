<script setup lang="ts">
import {ref} from 'vue';

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
  <DocsTitle :breadcrumbs="breadcrumbs">Modal</DocsTitle>

  <Docs
    title="Default"
    :code="`<v-modal v-model=&quot;isOpen&quot; title=&quot;Hello&quot;>
  <template #activator=&quot;{open}&quot;>
    <v-btn @click=&quot;open&quot;>Click Me</v-btn>
  </template>
  Hello World
</v-modal>`"
  >
    <template #preview>
      <v-modal v-model="isOpen" title="Hello">
        <template #activator="{open}">
          <v-btn @click="open">Click Me</v-btn>
        </template>
        Hello World
      </v-modal>
    </template>
  </Docs>

  <Docs
    title="Props"
    language="javascript"
    :code="`const props = defineProps({
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
})`"
  >
  </Docs>
</template>
