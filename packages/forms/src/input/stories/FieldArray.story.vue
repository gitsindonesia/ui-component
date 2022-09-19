<script setup>
import {Field, useForm, useFieldArray} from 'vee-validate';
import VInput from '../VInput.vue';
import VBtn from '@gits-id/button';

const {handleSubmit, values, errors} = useForm({
  initialValues: {
    links: ['https://github.com/logaretm'],
  },
});

const {remove, push, fields} = useFieldArray('links');

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
});
</script>

<template>
  <form @submit="onSubmit" novalidate>
    <div v-for="(field, idx) in fields" :key="field.key" class="flex gap-4">
      <VInput
        placeholder="http://"
        :name="`links[${idx}]`"
        type="url"
        wrapper-class="mb-2 flex-1"
      />
      <div>
        <v-btn type="button" @click="remove(idx)">Remove</v-btn>
      </div>
    </div>
    <div class="mt-4 space-x-2">
      <v-btn type="button" @click="push('')">Add</v-btn>
      <v-btn type="submit">Submit</v-btn>
    </div>
    Debug:
    <pre>{{ {values, errors} }}</pre>
  </form>
</template>
