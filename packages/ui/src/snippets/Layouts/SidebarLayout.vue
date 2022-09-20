<script setup lang="ts">
import {List, ListItem, ListItemHeader} from '@gits-id/list';
import {Dropdown, DropdownItemProps} from '@gits-id/dropdown';
import Icon from '@gits-id/icon';
import {ref, watch} from 'vue';
import VBtn from '@gits-id/button';
import {VInput} from '@gits-id/forms';

const accountMenus = ref<DropdownItemProps[]>([
  {
    text: 'Profile',
  },
  {
    text: 'Settings',
  },
  {
    text: 'Logout',
  },
]);

const dummyMenu = () => [
  {
    header: 'Header',
    children: [
      {
        text: 'Item 1',
        prependIcon: 'ic:round-circle-notifications',
        to: '/',
      },
      {
        text: 'Item 2',
        prependIcon: 'ic:round-add-circle-outline',
        to: '/',
      },
      {
        text: 'Item 3',
        prependIcon: 'ic:round-pause-circle-outline',
        to: '/',
      },
    ],
  },
];

const sideMenus = ref([
  {
    header: 'Menu',
    children: [
      {
        text: 'Dashboard',
        prependIcon: 'ri:home-line',
        to: '/',
      },
      {
        text: 'Users',
        prependIcon: 'ri:user-line',
        to: '/users',
      },
      {
        text: 'Posts',
        prependIcon: 'ri:book-2-line',
        to: '/posts',
      },
    ],
  },
  {
    header: 'Content Management',
    children: [
      {
        text: 'Banner',
        prependIcon: 'ri:home-line',
        to: '/banners',
      },
      {
        text: 'FAQ',
        prependIcon: 'ri:user-line',
        to: '/faq',
      },
      {
        text: 'Global Settings',
        prependIcon: 'ri:book-2-line',
        to: '/settings',
      },
    ],
  },
  ...dummyMenu(),
  ...dummyMenu(),
  ...dummyMenu(),
  ...dummyMenu(),
]);

const isSidebarOpen = ref(true);

watch(isSidebarOpen, (val) => {
  if (val) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
});
</script>

<template>
  <div class="flex h-screen">
    <!-- sidebar overlay -->
    <transition name="fade">
      <div
        v-if="isSidebarOpen"
        class="inset-0 bg-black/80 fixed z-10 sm:hidden"
        @click="isSidebarOpen = false"
      ></div>
    </transition>

    <!-- sidebar -->
    <transition name="slide-left">
      <aside
        v-if="isSidebarOpen"
        class="
          w-[80%]
          sm:w-[280px]
          fixed
          sm:sticky
          left-0
          top-0
          shrink-0
          border-r
          bg-white
          min-h-screen
          z-20
          sm:z-10
        "
      >
        <div
          class="
            h-[60px]
            relative
            border-b
            px-4
            flex
            items-center
            justify-between
          "
        >
          <div class="sticky top-0">
            <div class="text-xl font-semibold text-primary">Application</div>
            <p class="text-sm text-gray-500">Subtitle</p>
          </div>
          <button
            class="sm:hidden"
            aria-label="Close"
            @click="isSidebarOpen = false"
          >
            <Icon name="ri:close-line" />
          </button>
        </div>
        <List
          hover
          class="px-1 py-4 space-y-3 overflow-y-auto h-[calc(100vh-60px)]"
        >
          <div v-for="menu in sideMenus" :key="menu.header">
            <ListItemHeader v-if="menu.header">
              {{ menu.header }}
            </ListItemHeader>
            <template
              v-for="{prependIcon, to, text} in menu.children"
              :key="text"
            >
              <ListItem :to="to" :prepend-icon="prependIcon">
                {{ text }}
              </ListItem>
            </template>
          </div>
        </List>
      </aside>
    </transition>

    <!-- main content wrapper -->
    <div class="flex-1">
      <!-- header -->
      <header class="border-b bg-white sticky top-0 py-2 h-[60px]">
        <div class="container mx-auto sm:px-6">
          <div class="flex items-center gap-2">
            <v-btn
              class="sm:hidden"
              icon
              rounded
              text
              @click="isSidebarOpen = true"
            >
              <Icon name="ri:menu-line" />
            </v-btn>
            <div>
              <v-input
                wrapper-class="hidden sm:flex"
                prepend-icon="ri:search-line"
                placeholder="Search"
              />
            </div>
            <div class="flex-1"></div>
            <div class="flex items-center gap-2">
              <v-btn class="sm:hidden" icon rounded text>
                <Icon name="ri:search-line" />
              </v-btn>
              <v-btn icon rounded text>
                <Icon name="ri:notification-line" />
              </v-btn>
              <Dropdown right label="Account" :items="accountMenus" />
            </div>
          </div>
        </div>
      </header>

      <!-- content -->
      <main class="px-4 py-6 sm:p-6 container mx-auto">
        <div>
          <h1 class="text-2xl font-semibold text-gray-800">Dashboard</h1>
          <p class="text-gray-500">Summary and overview</p>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
          <div
            v-for="i in 4"
            :key="i"
            class="bg-gray-200 rounded-lg h-20"
          ></div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
          <div
            v-for="i in 2"
            :key="i"
            class="bg-gray-200 rounded-lg h-40 sm:h-80"
          ></div>
        </div>
      </main>
    </div>
  </div>
</template>

<style>
@import '../../assets/transition.css';

.sb-main-padded {
  padding: 0 !important;
}
</style>
