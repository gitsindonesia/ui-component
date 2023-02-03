<script setup lang="ts">
const appConfig = useAppConfig();
const storeDrawer = useStoreDrawer();

const menus = [
  {
    text: 'Home',
    to: '/',
  },
  {
    text: 'Products',
    to: '/products',
  },
  {
    text: 'Categories',
    to: '/categories',
    children: [
      {
        text: 'Category 1',
        to: '/categories/category-1',
        children: [
          {
            text: 'Sub Category 1',
            to: '/categories/category-1/sub-category-1',
          },
          {
            text: 'Sub Category 2',
            to: '/categories/category-1/sub-category-2',
          },
          {
            text: 'Sub Category 3',
            to: '/categories/category-1/sub-category-3',
          },
        ],
      },
      {
        text: 'Category 2',
        to: '/categories/category-2',
      },
      {
        text: 'Category 3',
        to: '/categories/category-3',
      },
    ],
  },
];
</script>

<template>
  <VAppBar bordered>
    <div
      class="container mx-auto flex items-center gap-4 justify-between md:p-4"
    >
      <div class="flex items-center gap-1 -ml-3 sm:ml-0">
        <VBtn
          class="sm:!hidden"
          prefix-icon="ri:menu-line"
          text
          fab
          @click="storeDrawer = !storeDrawer"
        />
        <NuxtLink class="font-semibold" to="/">
          {{ appConfig.store.title }}
        </NuxtLink>
      </div>

      <nav class="md:flex gap-6 items-center hidden">
        <template v-for="menu in menus" :key="menu.text">
          <VMenus v-if="menu.children" :label="menu.text">
            <template #items>
              <template v-for="child in menu.children" :key="child.text">
                <VMenus
                  :items="child.children"
                  v-if="child.children"
                  placement="right-start"
                >
                  <VMenusItem class="flex justify-between">
                    {{ child.text }}
                    <VIcon name="ri:arrow-right-s-fill" class="ml-auto" />
                  </VMenusItem>
                  <template #items>
                    <template
                      v-for="subChild in child.children"
                      :key="subChild.text"
                    >
                      <VMenusItem :to="subChild.to">
                        {{ subChild.text }}
                      </VMenusItem>
                    </template>
                  </template>
                </VMenus>
                <VMenusItem v-else :to="child.to">
                  {{ child.text }}
                </VMenusItem>
              </template>
            </template>
          </VMenus>
          <NuxtLink
            v-else
            exact-active-class="text-primary-500 font-semibold"
            class="hover:text-primary-500"
            :to="menu.to"
          >
            {{ menu.text }}
          </NuxtLink>
        </template>
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
      <VListItem v-for="menu in menus" :key="menu.text" :to="menu.to">
        {{ menu.text }}
      </VListItem>
    </VList>
  </VNavDrawer>
</template>
