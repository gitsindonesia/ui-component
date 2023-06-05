<script setup lang="ts">
const item = {
  text: 'Text',
  to: '/',
  icon: 'ri:home-2-line',
  children: [
    {
      text: 'Home',
      to: '/',
    },
    {
      text: 'About',
      to: '/about',
    },
  ],
};
const item2 = {
  text: 'Item 2',
  to: '/',
  icon: 'ri:home-2-line',
  children: [
    {
      text: 'Sub Item 2.1',
      to: '/',
    },
    {
      text: 'AbouSub Item 2.2',
      to: '/',
    },
  ],
};
</script>

<template>
  <PageHeader title="Menu" />

  <div class="space-y-4">
    <VCard title="Basic Example">
      <div>
        <VMenu :menu="item" />
        <VMenu :menu="item2" />
      </div>
    </VCard>
    <VCard title="Small">
      <div>
        <VMenu :menu="item" small />
        <VMenu :menu="item2" small />
      </div>
    </VCard>
    <VCard title="Mini">
      <div class="w-10">
        <VMenu :menu="item" mini />
        <VMenu :menu="item2" mini />
      </div>
    </VCard>
  </div>
</template>
