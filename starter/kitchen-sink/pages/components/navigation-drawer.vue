<script setup lang="ts">
const isOpen = ref(true);
const isMini = ref(true);
const isExpanded = ref(true);
const drawerOverlay = ref(false);
const drawerLeft = ref(false);
const drawerRight = ref(false);
const drawerCustomTransition = ref(false);
</script>

<template>
  <PageHeader title="Navigation Drawer" />

  <div class="space-y-4">
    <VCard title="Basic Example">
      <div>
        <VNavDrawer>
          <p class="font-semibold p-6 truncate">Content</p>
        </VNavDrawer>
      </div>
    </VCard>

    <VCard title="Colors">
      <div>
        <VNavDrawer>
          <p class="font-semibold p-6 truncate">Default</p>
        </VNavDrawer>
        <VNavDrawer color="primary">
          <p class="font-semibold p-6 truncate">Primary</p>
        </VNavDrawer>
        <VNavDrawer color="secondary">
          <p class="font-semibold p-6 truncate">Secondary</p>
        </VNavDrawer>
        <VNavDrawer color="dark">
          <p class="font-semibold p-6 truncate">Dark</p>
        </VNavDrawer>
      </div>
    </VCard>

    <VCard title="Shadow">
      <div>
        <VNavDrawer shadow>
          <p class="font-semibold p-6 truncate">Content</p>
        </VNavDrawer>
      </div>
    </VCard>

    <VCard title="Bordered">
      <div>
        <VNavDrawer bordered>
          <p class="font-semibold p-6 truncate">Content</p>
        </VNavDrawer>
      </div>
    </VCard>

    <VCard title="Toggle">
      <div class="flex gap-4">
        <VNavDrawer color="dark" v-model="isOpen">
          <p class="font-semibold p-6 truncate">Content</p>
        </VNavDrawer>
        <VBtn class="" @click="isOpen = !isOpen">
          {{ isOpen ? 'Close' : 'Open' }}
        </VBtn>
      </div>
    </VCard>

    <VCard title="Mini">
      <div class="flex gap-4">
        <VNavDrawer color="dark" v-model:mini="isMini">
          <p class="font-semibold p-6 truncate">Content</p>
        </VNavDrawer>
        <VBtn class="" @click="isMini = !isMini"> Toggle Mini </VBtn>
      </div>
    </VCard>

    <VCard title="Expand on hover">
      <div class="flex gap-4">
        <VNavDrawer color="dark" v-model:expanded="isExpanded" expand-on-hover>
          <p class="font-semibold p-6 truncate">Content</p>
        </VNavDrawer>
      </div>
    </VCard>

    <VCard title="Fixed and Overlay">
      <div class="flex relative">
        <VNavDrawer
          v-model="drawerOverlay"
          color="dark"
          overlay
          fixed
          class="!z-20 left-0"
        >
          <p class="font-semibold p-6 truncate">Content</p>
        </VNavDrawer>
        <VBtn class="" @click="drawerOverlay = !drawerOverlay">
          Toggle Drawer
        </VBtn>
      </div>
    </VCard>

    <VCard title="Placement">
      <div class="flex relative">
        <VNavDrawer
          v-model="drawerLeft"
          color="dark"
          overlay
          fixed
          class="!z-20 left-0"
        >
          <p class="font-semibold p-6 truncate">Left</p>
        </VNavDrawer>
        <VNavDrawer
          v-model="drawerRight"
          color="dark"
          overlay
          fixed
          class="!z-20 right-0"
          right
        >
          <p class="font-semibold p-6 truncate">Left</p>
        </VNavDrawer>
        <VBtn class="" @click="drawerLeft = !drawerLeft">
          Open Default (Left) Drawer
        </VBtn>
        <VBtn class="ml-2" @click="drawerRight = !drawerRight">
          Open Right Drawer
        </VBtn>
      </div>
    </VCard>

    <VCard title="Custom Transition">
      <div class="flex relative">
        <VNavDrawer
          v-model="drawerCustomTransition"
          color="dark"
          overlay
          fixed
          class="!z-20 left-0"
          transition="slide-up"
        >
          <p class="font-semibold p-6 truncate">Content</p>
        </VNavDrawer>
        <VBtn
          class=""
          @click="drawerCustomTransition = !drawerCustomTransition"
        >
          Toggle Drawer
        </VBtn>
      </div>
    </VCard>
  </div>
</template>
