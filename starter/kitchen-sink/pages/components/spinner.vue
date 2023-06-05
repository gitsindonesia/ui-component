<script setup lang="ts"></script>

<template>
  <PageHeader title="Spinner" />

  <div class="space-y-4">
    <VCard title="Basic Example">
      <div>
        <VSpinner />
      </div>
    </VCard>

    <VCard title="Colors">
      <div>
        <VSpinner />
        <VSpinner color="primary" />
        <VSpinner color="secondary" />
        <VSpinner color="info" />
        <VSpinner color="warning" />
        <VSpinner color="success" />
        <VSpinner color="error" />
        <VSpinner color="dark" />
      </div>
    </VCard>

    <VCard title="Sizes">
      <div>
        <v-spinner color="primary" />
        <v-spinner color="primary" xSmall />
        <v-spinner color="primary" small />
        <v-spinner color="primary" large />
        <v-spinner color="primary" xLarge />
      </div>
    </VCard>
  </div>
</template>
