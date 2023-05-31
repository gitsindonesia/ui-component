<script setup lang="ts">
import {breakpointsTailwind, useBreakpoints} from '@vueuse/core';

const breakpoints = useBreakpoints(breakpointsTailwind);
const isMobile = breakpoints.smaller('sm'); // only smaller than lg
const isAsideOpen = ref(true);

watchEffect(() => {
  isAsideOpen.value = !isMobile.value;
});

const menus = ref([
  {
    text: 'Home',
    to: '/',
    icon: 'ic:round-home',
  },
  {
    text: 'Components',
    children: [
      {
        text: 'Alert',
        to: '/components/alert',
      },
      {
        text: 'AppShell',
        to: '/components/app-shell',
      },
    ],
  },
]);
</script>

<template>
  <VAppShell padded-content>
    <!-- aside -->
    <template #aside>
      <VNavDrawer
        v-model="isAsideOpen"
        :fixed="isMobile"
        :overlay="isMobile"
        :close-on-overlay-click="isMobile"
        bordered
        :sticky="!isMobile"
      >
        <VLogo class="mx-auto my-3" />
        <VList>
          <template v-for="menu in menus">
            <template v-if="menu.children">
              <VListItemHeader>{{ menu.text }}</VListItemHeader>
              <VList>
                <VListItem
                  v-for="child in menu.children"
                  :key="child.text"
                  v-bind="child"
                >
                  {{ child.text }}
                </VListItem>
              </VList>
            </template>
            <VListItem v-else v-bind="menu" :prepend-icon="menu.icon">
              {{ menu.text }}
            </VListItem>
          </template>
        </VList>
      </VNavDrawer>
    </template>

    <!-- content -->
    <slot />
  </VAppShell>
</template>
