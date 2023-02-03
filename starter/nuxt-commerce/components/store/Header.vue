<script setup lang="ts">
const appConfig = useAppConfig();
const storeDrawer = useStoreDrawer();

const menus = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Products',
    link: '/products',
  },
];
</script>

<template>
  <VAppBar bordered>
    <div
      class="container mx-auto flex items-center gap-4 justify-between md:p-4"
    >
      <div class="flex items-center gap-1 -ml-3">
        <VBtn
          prefix-icon="ri:menu-line"
          text
          fab
          @click="storeDrawer = !storeDrawer"
        />
        <NuxtLink class="font-semibold" to="/">
          {{ appConfig.store.title }}
        </NuxtLink>
      </div>

      <nav class="md:flex gap-4 items-center hidden">
        <NuxtLink
          exact-active-class="text-primary-500 font-semibold"
          class="hover:text-primary-500"
          v-for="menu in menus"
          :key="menu.title"
          :to="menu.link"
        >
          {{ menu.title }}
        </NuxtLink>
      </nav>

      <div>
        <VBtn prefix-icon="ri:search-line" text icon fab></VBtn>
        <VBtn prefix-icon="ri:shopping-cart-line" text icon fab></VBtn>
        <VBtn prefix-icon="ri:heart-line" text icon fab></VBtn>
        <VBtn prefix-icon="ri:user-line" text icon fab></VBtn>
      </div>
    </div>
  </VAppBar>

  <VNavDrawer v-model="storeDrawer" fixed overlay class="z-20">
    <VList>
      <VListItem class="!font-semibold">{{ appConfig.store.title }}</VListItem>
      <VListItemDivider />
      <VListItem v-for="menu in menus" :key="menu.title" :to="menu.link">
        {{ menu.title }}
      </VListItem>
    </VList>
  </VNavDrawer>
</template>
