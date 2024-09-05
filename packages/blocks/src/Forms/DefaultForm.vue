<script setup lang="ts">
const items = [
  {
    text: 'Item 1',
    value: 1,
  },
  {
    text: 'Item 2',
    value: 2,
  },
  {
    text: 'Item 3',
    value: 3,
  },
];
</script>

<template>
  <form>
    <VInput
      prepend-icon="ic:round-person"
      label="Name"
      placeholder="Enter your name"
      hint="Enter your full name"
      wrapper-class="mb-4"
    />
    <VInput
      prepend-icon="ic:round-email"
      label="Email"
      placeholder="Enter your email"
      hint="Enter your email address"
      wrapper-class="mb-4"
    />
    <VFormSelect
      wrapper-class="mb-4"
      label="Basic Select"
      placeholder="Choose..."
      :items="items"
    />
    <VSelect
      wrapper-class="mb-4"
      label="Select"
      placeholder="Choose..."
      :items="items"
    />
    <VAutocomplete
      wrapper-class="mb-4"
      label="Autocomplete"
      placeholder="Choose..."
      :items="items"
    />
    <div class="mt-5">
      <VBtn color="primary">Login</VBtn>
      <VBtn class="ml-3">Cancel</VBtn>
    </div>
  </form>
</template>
