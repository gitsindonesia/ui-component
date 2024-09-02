<script setup lang="ts">
import {reactive} from 'vue';
import {Input, TextareaInput, Select, Radio, Checkbox, FileInput} from '..';
import {Switch} from '../../switch/src';
import {VBtn} from '../../button/src';

const form = reactive({
  name: '',
  description: '',
  category: '',
  active: false,
  radio: '',
  checkboxSingle: false,
  checkboxMultiple: [],
  file: undefined,
  avatar: undefined,
});
</script>

<template>
  <form>
    <Input v-model="form.name" label="Name" wrapper-class="mb-4" />
    <TextareaInput
      v-model="form.description"
      label="Description"
      wrapper-class="mb-4"
    />
    <Select
      v-model="form.category"
      label="Category"
      wrapper-class="mb-4"
      :options="[
        {
          label: 'Category 1',
          value: '1',
        },
        {
          label: 'Category 2',
          value: '2',
        },
      ]"
    />
    <Switch v-model="form.active" label="Active" wrapper-class="mb-4" />

    <Radio id="radio1" v-model="form.radio" label="Radio 1" value="1" />
    <Radio
      id="radio2"
      v-model="form.radio"
      label="Radio 2"
      value="2"
      wrapper-class="mb-4"
    />

    <Checkbox
      id="checkbox-single"
      v-model="form.checkboxSingle"
      label="Checkbox 1"
      value="check1"
      wrapper-class="mb-4"
    />

    <Checkbox
      id="checkbox1"
      v-model="form.checkboxMultiple"
      label="Checkbox 1"
      value="check1"
    />
    <Checkbox
      id="checkbox2"
      v-model="form.checkboxMultiple"
      label="Checkbox 2"
      value="check2"
      wrapper-class="mb-4"
    />

    <FileInput v-model="form.file" label="File" wrapper-class="mb-4" />
    <FileInput v-model="form.avatar" label="Avatar" variant="button" />

    <div class="mt-4">
      <VBtn color="primary">Submit</VBtn>
    </div>
    <div class="mt-4">
      <pre>{{ form }}</pre>
    </div>
  </form>
</template>
