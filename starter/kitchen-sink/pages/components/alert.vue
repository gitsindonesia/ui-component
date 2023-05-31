<script setup lang="ts">
import {VAlertGroup} from '@morpheme/alert';

interface Message {
  text: string;
}

const messages = ref<Message[]>([]);

const add = () => {
  messages.value.push({
    text: 'This is a message',
  });
};

const addPrepend = () => {
  messages.value.unshift({
    text: 'This is a message',
  });
};

const remove = () => {
  messages.value.pop();
};

function removeAlert(index: number) {
  messages.value.splice(index, 1);
}
</script>

<template>
  <PageHeader title="Alert" />

  <div class="space-y-4">
    <VCard title="Default">
      <VAlert v-for="color in colors" :key="color" :color="color" class="mb-2">
        You changes have been saved.
      </VAlert>
    </VCard>

    <VCard title="Variant">
      <h3 class="font-medium text-sm mb-1">Default</h3>
      <VAlert color="primary"> You changes have been saved. </VAlert>
      <h3 class="font-medium text-sm mb-1 mt-4">Solid</h3>
      <VAlert color="primary" solid> You changes have been saved. </VAlert>
      <h3 class="font-medium text-sm mb-1 mt-4">Outlined</h3>
      <VAlert color="primary" outlined> You changes have been saved. </VAlert>
      <h3 class="font-medium text-sm mb-1 mt-4">Bordered</h3>
      <VAlert color="primary" bordered> You changes have been saved. </VAlert>
    </VCard>

    <VCard title="Icon">
      <VAlert
        v-for="color in colors"
        :key="color"
        :color="color"
        class="mb-2"
        icon="ic:round-info"
      >
        You changes have been saved.
      </VAlert>
    </VCard>

    <VCard title="Dismissible">
      <VAlert
        v-for="color in colors"
        :key="color"
        :color="color"
        class="mb-2"
        icon="ic:round-info"
        dismissable
      >
        You changes have been saved.
      </VAlert>
    </VCard>

    <VCard title="With Title">
      <VAlert color="success" dismissable>
        <VAlertTitle>Alert title</VAlertTitle>
        You changes have been saved.
      </VAlert>
    </VCard>

    <VCard title="Slots">
      <VAlert color="success" dismissable>
        <template #icon>
          <VIcon name="ic:round-check-circle" />
        </template>
        <template #x-button="{dismiss}">
          <VBtn @click="dismiss">Close</VBtn>
        </template>
        You changes have been saved.
      </VAlert>
    </VCard>

    <VCard title="Custom Color">
      <VAlert
        color="indigo"
        dismissable
        :style="{
          '--alert-bg-color': 'var(--color-indigo-600)',
          '--alert-border-color': 'var(--color-indigo-600)',
          '--alert-text-color': 'var(--color-indigo-100)',
        }"
      >
        You changes have been saved.
      </VAlert>
    </VCard>

    <VCard title="Dark Mode" class="dark">
      <VAlert
        v-for="color in colors"
        :key="color"
        :color="color"
        class="mb-2"
        icon="ic:round-info"
      >
        You changes have been saved.
      </VAlert>
    </VCard>

    <VCard title="Alert Group">
      <div class="flex gap-2">
        <VBtn @click="add"> Add </VBtn>
        <VBtn @click="addPrepend"> Add Prepend </VBtn>
        <VBtn @click="remove"> Remove </VBtn>
      </div>
      <div
        class="
          fixed
          bottom-0
          right-0
          w-80
          p-6
          min-h-screen
          overflow-y-auto overflow-x-hidden
        "
      >
        <VAlertGroup>
          <VAlert
            v-for="(message, index) in messages"
            :key="message.text"
            color="success"
            class="mb-2"
            dismissable
            @dismissed="removeAlert(index)"
          >
            {{ message.text }}
          </VAlert>
        </VAlertGroup>
      </div>
    </VCard>
  </div>
</template>
