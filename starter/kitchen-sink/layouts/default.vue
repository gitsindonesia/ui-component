<script setup lang="ts">
import {breakpointsTailwind, useBreakpoints} from '@vueuse/core';

const breakpoints = useBreakpoints(breakpointsTailwind);
const isMobile = breakpoints.smaller('lg'); // only smaller than lg
const isAsideOpen = ref(false);

watchEffect(() => {
  isAsideOpen.value = !isMobile.value;
});

function onMenuClick() {
  if (isMobile.value) isAsideOpen.value = false;
}

watchEffect(() => {
  isAsideOpen.value = !isMobile.value;
});

const menus = ref([
  {
    text: 'Home',
    to: '/',
  },
  {
    text: 'Components',
    children: [
      {
        text: 'Alert',
        to: '/components/alert',
      },
      {
        text: 'AppBar',
        to: '/components/app-bar',
      },
      {
        text: 'AppShell',
        to: '/components/app-shell',
      },
      {
        text: 'Autocomplete',
        to: '/components/autocomplete',
      },
    ],
  },
]);

const darkMode = ref(false);

watch(darkMode, () => {
  document.documentElement.classList.toggle('dark', darkMode.value);
});
</script>

<template>
  <VAppShell padded-content padded-container>
    <template #header>
      <VAppBar
        color="dark-blue"
        shadow
        class="py-3 px-4 !flex lg:!hidden"
        size="auto"
        sticky
      >
        <VLogo @click="onMenuClick" />
        <div class="flex-1" />
        <VBtn
          color="primary"
          @click="isAsideOpen = !isAsideOpen"
          prefix-icon="ic:round-menu"
        >
        </VBtn>
      </VAppBar>
    </template>

    <!-- aside -->
    <template #aside>
      <VNavDrawer
        v-model="isAsideOpen"
        :fixed="isMobile"
        :overlay="isMobile"
        :close-on-overlay-click="isMobile"
        :shadow="!isMobile"
        :sticky="!isMobile"
        :class="{'z-20': isMobile}"
        class="px-2"
      >
        <h3 class="font-semibold text-center py-4">Morpheme UI</h3>

        <VList class="flex-1 overflow-y-auto">
          <template v-for="menu in menus">
            <template v-if="menu.children">
              <VListItemHeader class="-mb-2 mt-1">
                {{ menu.text }}
              </VListItemHeader>
              <VList>
                <VListItem
                  v-for="child in menu.children"
                  :key="child.text"
                  hide-prepend
                  nuxt
                  exact-active-class="!bg-primary-500 !text-white"
                  v-bind="child"
                >
                  {{ child.text }}
                </VListItem>
              </VList>
            </template>
            <VListItem
              v-else
              nuxt
              exact-active-class="!bg-primary-500 !text-white"
              v-bind="menu"
            >
              {{ menu.text }}
            </VListItem>
          </template>
        </VList>

        <VSwitch
          switch-group-class="justify-center my-3"
          v-model="darkMode"
          label="Dark Mode"
        />
      </VNavDrawer>
    </template>

    <!-- content -->
    <slot />
  </VAppShell>
</template>
