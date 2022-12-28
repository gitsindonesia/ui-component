<template>
  <div class="container mx-auto p-6 space-y-5">
    <h1 class="text-2xl font-semibold">GITS UI Playground</h1>

    <div class="space-x-2">
      <v-btn v-tooltip="'Click Me'">Button</v-btn>
      <v-btn color="primary" v-tooltip="'Click Me'">Primary</v-btn>
      <v-btn color="secondary" v-tooltip="'Click Me'">Secondary</v-btn>
      <v-btn color="success" v-tooltip="'Click Me'">Success</v-btn>
    </div>

    <div>
      <form class="space-y-3">
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
