<script setup lang="ts">
import type {VModalEvent} from '@morpheme/modal';

const isOpen = ref(false);

const onConfirm = (e: VModalEvent) => {
  alert('Confirmed!');
  e.close();
};
</script>

<template>
  <PageHeader title="Modal" />

  <div class="space-y-4">
    <VCard title="Basic Example">
      <div>
        <VModal title="Header">
          <template #activator="{open}">
            <v-btn @click="open">Click Me</v-btn>
          </template>
          Hello World
        </VModal>
      </div>
    </VCard>

    <VCard title="Hide Header">
      <div>
        <VModal title="Header" hide-header>
          <template #activator="{open}">
            <v-btn @click="open">Click Me</v-btn>
          </template>
          Hello World
        </VModal>
      </div>
    </VCard>

    <VCard title="Hide Footer">
      <div>
        <VModal title="Header" hide-footer>
          <template #activator="{open}">
            <v-btn @click="open">Click Me</v-btn>
          </template>
          Hello World
        </VModal>
      </div>
    </VCard>

    <VCard title="Hide Close Button">
      <div>
        <VModal title="Header" hide-x-button>
          <template #activator="{open}">
            <v-btn @click="open">Click Me</v-btn>
          </template>
          Hello World
        </VModal>
      </div>
    </VCard>

    <VCard title="Fullscreen">
      <div>
        <VModal title="Header" fullscreen>
          <template #activator="{open}">
            <v-btn @click="open">Click Me</v-btn>
          </template>
          Hello World
        </VModal>
      </div>
    </VCard>

    <VCard title="Centered">
      <div>
        <VModal title="Header" centered>
          <template #activator="{open}">
            <v-btn @click="open">Click Me</v-btn>
          </template>
          Hello World
        </VModal>
      </div>
    </VCard>

    <VCard title="Loading">
      <div>
        <VModal title="Header" loading>
          <template #activator="{open}">
            <v-btn @click="open">Click Me</v-btn>
          </template>
          Hello World
        </VModal>
      </div>
    </VCard>

    <VCard title="Persistent">
      <div>
        <VModal title="Header" persistent>
          <template #activator="{open}">
            <v-btn @click="open">Click Me</v-btn>
          </template>
          Hello World
        </VModal>
      </div>
    </VCard>

    <VCard title="Custom Width" width="700px" max-width="100%">
      <div>
        <VModal title="Header" persistent>
          <template #activator="{open}">
            <v-btn @click="open">Click Me</v-btn>
          </template>
          Hello World
        </VModal>
      </div>
    </VCard>

    <VCard title="VModel">
      <div>
        <VModal title="Header" v-model="isOpen">
          <template #activator="{open}">
            <v-btn @click="open">Click Me</v-btn>
          </template>
          Hello World
        </VModal>
      </div>
    </VCard>

    <VCard title="Confirmable">
      <div>
        <VModal confirm title="Confirm" @confirm="onConfirm">
          <template #activator="{open}">
            <v-btn @click="open">Click Me</v-btn>
          </template>
          Hello World
        </VModal>
      </div>
    </VCard>

    <VCard title="Declarative">
      <div>
        <ModalDeclarative />
      </div>
    </VCard>
  </div>
</template>
