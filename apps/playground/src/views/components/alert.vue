<script setup lang="ts"></script>

<template>
  <h1 class="font-bold text-xl mb-5">Alert</h1>
  <div class="space-y-2">
    <v-alert> lorem ipsum dolor sit amet </v-alert>
    <v-alert color="primary"> lorem ipsum dolor sit amet </v-alert>
    <v-alert color="secondary"> lorem ipsum dolor sit amet </v-alert>
    <v-alert color="info"> lorem ipsum dolor sit amet </v-alert>
    <v-alert color="warning"> lorem ipsum dolor sit amet </v-alert>
    <v-alert color="error"> lorem ipsum dolor sit amet </v-alert>
  </div>

  <h2 class="font-bold text-lg mt-8 mb-2">Icon</h2>
  <div class="space-y-2">
    <v-alert icon="success"> lorem ipsum dolor sit amet </v-alert>
    <v-alert icon="success" color="primary">
      lorem ipsum dolor sit amet
    </v-alert>
    <v-alert icon="success" color="secondary">
      lorem ipsum dolor sit amet
    </v-alert>
    <v-alert icon="success" color="info"> lorem ipsum dolor sit amet </v-alert>
    <v-alert icon="success" color="warning">
      lorem ipsum dolor sit amet
    </v-alert>
    <v-alert icon="success" color="error"> lorem ipsum dolor sit amet </v-alert>
  </div>

  <h2 class="font-bold text-lg mt-8 mb-2">Dismissable</h2>
  <div class="space-y-2">
    <v-alert dismissable> lorem ipsum dolor sit amet </v-alert>
    <v-alert dismissable color="primary"> lorem ipsum dolor sit amet </v-alert>
    <v-alert dismissable color="secondary">
      lorem ipsum dolor sit amet
    </v-alert>
    <v-alert dismissable color="info"> lorem ipsum dolor sit amet </v-alert>
    <v-alert dismissable color="warning"> lorem ipsum dolor sit amet </v-alert>
    <v-alert dismissable color="error"> lorem ipsum dolor sit amet </v-alert>
  </div>
</template>
