<template>
  <div class="container mx-auto p-6">
    <h1 class="text-2xl font-semibold">GITS UI Playground</h1>

    <div class="space-x-2 mt-5">
      <v-btn>Button</v-btn>
      <v-btn color="primary">Primary</v-btn>
      <v-btn color="secondary">Secondary</v-btn>
      <v-btn color="success">Success</v-btn>
    </div>

    <div>
      <form>
        <v-input label="Name" />
        <v-input label="Email" />
        <v-input label="Password" />
        <v-input label="Confirm Password" />
        <v-input label="Phone" />
        <v-textarea label="Address" />
        <v-checkbox label="I agree to the terms and conditions" />
        <v-btn v-tooltip="'Submit'">Submit</v-btn>
      </form>

    </div>
  </div>
</template>

<script setup>
</script>
