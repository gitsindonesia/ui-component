<script setup>
import {Field, useForm, useFieldArray, FieldArray} from 'vee-validate';
import VInput from '../VInput.vue';
import VBtn from '@gits-id/button';

const {handleSubmit, values, errors, resetForm} = useForm({
  initialValues: {
    users: [
      {
        name: 'Warsono',
        email: 'warsono@gits.id',
        links: [
          {
            link: '',
          },
        ],
      },
    ],
  },
});

const {remove, push, fields} = useFieldArray('users');

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
});
</script>

<template>
  <h1 class="font-semibold text-2xl mb-4">User List</h1>
  <form @submit="onSubmit" novalidate>
    <div class="border rounded-lg p-2 space-y-3 divide divide-y">
      <div v-for="(field, userIdx) in fields" :key="field.key" class="p-3">
        <div class="flex gap-4">
          <v-input
            placeholder="Name"
            :name="`users[${userIdx}].name`"
            wrapper-class="mb-2"
          />
          <v-input
            placeholder="Email"
            :name="`users[${userIdx}].email`"
            type="email"
            wrapper-class="mb-2"
          />
          <div>
            <v-btn type="button" @click="remove(userIdx)">Remove</v-btn>
          </div>
        </div>

        <div>
          <h3 class="mt-4 mb-2 font-semibold">User Links</h3>
          <FieldArray
            :name="`users[${userIdx}].links`"
            v-slot="{fields: links, remove: removeLink, push: addLink}"
          >
            <div
              v-for="(link, linkIdx) in links"
              :key="link.key"
              class="flex gap-4"
            >
              <v-input
                placeholder="http://"
                :name="`users[${linkIdx}].link`"
                type="url"
                wrapper-class="mb-2"
              />
              <div>
                <v-btn type="button" @click="removeLink(linkIdx)">Remove</v-btn>
              </div>
            </div>
            <v-btn type="button" @click="addLink({})">Add Link</v-btn>
          </FieldArray>
        </div>
      </div>

      <div class="border-t mt-5 pt-2">
        <v-btn type="button" color="secondary" @click="push({})">
          Add User
        </v-btn>
      </div>
    </div>

    <div class="mt-4 space-x-2">
      <v-btn type="submit" color="primary">Submit</v-btn>
      <v-btn type="reset" @click="resetForm">Reset</v-btn>
    </div>
    Debug:
    <pre>{{ {values, errors} }}</pre>
  </form>
</template>
