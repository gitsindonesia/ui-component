<script setup lang="ts">
import {ref} from 'vue';
import {VQuillEditor} from '@gits-id/quill-editor';
import {useForm} from 'vee-validate';
import {object, string} from 'yup';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

const breadcrumbs = ref([
  {
    to: '/components',
    title: 'Components',
  },
  {
    to: '/components/quill-editor',
    title: 'v-quill-editor',
  },
]);

const content = ref('');

const schema = object({
  content: string().required().label('Content'),
});

const {handleSubmit, resetForm, values} = useForm({
  validationSchema: schema,
});

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values));
});
</script>

<template>
  <DocsTitle :breadcrumbs="breadcrumbs">Quill Editor</DocsTitle>

  <Docs title="Default" :code="``">
    <template #preview>
      <v-quill-editor v-model="content" name="content1" />
    </template>
  </Docs>

  <Docs title="Validation" :code="``">
    <template #preview>
      <form @submit="onSubmit" class="border-none">
        <VQuillEditor
          name="content"
          label="Content"
          placeholder="Input your content"
        />
        <div class="mt-4">
          <v-btn type="submit">Submit</v-btn>
          <v-btn type="button" text @click="resetForm">Reset</v-btn>
        </div>
        <pre>{{ {values} }}</pre>
      </form>
    </template>
  </Docs>
</template>
