<script setup lang="ts">
import {VCollapsibleGroup} from '@morpheme/collapsible';

const items = Array.from({length: 5}, (v, k) => ({
  title: `Item ${k + 1}`,
  content: `Content ${k + 1}`,
}));
</script>

<template>
  <PageHeader title="Collapsible" />

  <div class="space-y-4">
    <VCard title="Default">
      <div>
        <VCollapsible title="Title">
          Anim eiusmod ea nostrud do incididunt consequat duis adipisicing
          reprehenderit nisi. Minim mollit eiusmod incididunt fugiat ipsum velit
          ut consequat est consectetur adipisicing. Nulla duis anim velit magna
          aute nisi elit nulla deserunt. Fugiat consequat ut magna eiusmod sit
          incididunt qui. Incididunt velit fugiat sunt sint amet magna est
          laborum excepteur. Aute aliqua nisi est nulla voluptate enim qui amet
          labore et consectetur. Est pariatur qui amet cupidatat magna est
          adipisicing quis ea ea.
        </VCollapsible>
      </div>
    </VCard>

    <VCard title="Default Open">
      <div>
        <VCollapsible title="Title" model-value>
          Anim eiusmod ea nostrud do incididunt consequat duis adipisicing
          reprehenderit nisi. Minim mollit eiusmod incididunt fugiat ipsum velit
          ut consequat est consectetur adipisicing. Nulla duis anim velit magna
          aute nisi elit nulla deserunt. Fugiat consequat ut magna eiusmod sit
          incididunt qui. Incididunt velit fugiat sunt sint amet magna est
          laborum excepteur. Aute aliqua nisi est nulla voluptate enim qui amet
          labore et consectetur. Est pariatur qui amet cupidatat magna est
          adipisicing quis ea ea.
        </VCollapsible>
      </div>
    </VCard>

    <VCard title="Hide Icon">
      <div>
        <VCollapsible title="Title" hide-icon>
          Anim eiusmod ea nostrud do incididunt consequat duis adipisicing
          reprehenderit nisi. Minim mollit eiusmod incididunt fugiat ipsum velit
          ut consequat est consectetur adipisicing. Nulla duis anim velit magna
          aute nisi elit nulla deserunt. Fugiat consequat ut magna eiusmod sit
          incididunt qui. Incididunt velit fugiat sunt sint amet magna est
          laborum excepteur. Aute aliqua nisi est nulla voluptate enim qui amet
          labore et consectetur. Est pariatur qui amet cupidatat magna est
          adipisicing quis ea ea.
        </VCollapsible>
      </div>
    </VCard>

    <VCard title="Custom Class">
      <div>
        <VCollapsible
          title="Title"
          v-bind="{
            headerClass: '',
            activeClass: 'font-semibold text-red-500 bg-red-200 rounded-t-lg',
            inactiveClass: 'text-red-500 bg-red-50',
            wrapperClass: 'rounded-lg',
            activatorClass: 'hover:bg-red-200 hover:text-red-500',
            panelClass: 'border p-4 rounded-b-lg',
          }"
        >
          Anim eiusmod ea nostrud do incididunt consequat duis adipisicing
          reprehenderit nisi. Minim mollit eiusmod incididunt fugiat ipsum velit
          ut consequat est consectetur adipisicing. Nulla duis anim velit magna
          aute nisi elit nulla deserunt. Fugiat consequat ut magna eiusmod sit
          incididunt qui. Incididunt velit fugiat sunt sint amet magna est
          laborum excepteur. Aute aliqua nisi est nulla voluptate enim qui amet
          labore et consectetur. Est pariatur qui amet cupidatat magna est
          adipisicing quis ea ea.
        </VCollapsible>
      </div>
    </VCard>

    <VCard title="Accordion">
      <div>
        <VCollapsibleGroup accordion :items="items" />
      </div>
    </VCard>
  </div>
</template>
