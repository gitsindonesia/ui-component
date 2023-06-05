<script setup lang="ts">
import VStepper from '@morpheme/stepper';

const items = Array.from({length: 5}, (v, k) => ({
  title: 'Title',
  subtitle: 'Subtitle',
  path: '/step/' + k,
}));

const step = ref(1);
</script>

<template>
  <PageHeader title="Stepper" />

  <div class="space-y-4">
    <VCard title="Basic Example">
      <div>
        <VStepper v-model="step" :items="items" />

        <VBtn @click="step--">Prev</VBtn>
        <VBtn @click="step++">Next</VBtn>
      </div>
    </VCard>

    <VCard title="Linear">
      <div>
        <VStepper v-model="step" :items="items" linear />

        <VBtn @click="step--">Prev</VBtn>
        <VBtn @click="step++">Next</VBtn>
      </div>
    </VCard>

    <VCard title="Clickable">
      <div>
        <VStepper v-model="step" :items="items" clickable />

        <VBtn @click="step--">Prev</VBtn>
        <VBtn @click="step++">Next</VBtn>
      </div>
    </VCard>

    <VCard title="Vertical">
      <div>
        <VStepper v-model="step" :items="items" vertical />

        <VBtn @click="step--">Prev</VBtn>
        <VBtn @click="step++">Next</VBtn>
      </div>
    </VCard>

    <VCard title="Disable route active">
      <div>
        <VStepper v-model="step" :items="items" disable-route-active />

        <VBtn @click="step--">Prev</VBtn>
        <VBtn @click="step++">Next</VBtn>
      </div>
    </VCard>
  </div>
</template>
