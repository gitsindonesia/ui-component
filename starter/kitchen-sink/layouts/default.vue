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
      {text: 'Avatar', to: '/components/avatar'},
      {text: 'Badge', to: '/components/badge'},
      {text: 'Banner', to: '/components/banner'},
      {text: 'BottomSheet', to: '/components/bottom-sheet'},
      {text: 'Breadcrumbs', to: '/components/breadcrumbs'},
      {text: 'Card', to: '/components/card'},
      {text: 'Collapsible', to: '/components/collapsible'},
      {text: 'DataTable', to: '/components/data-table'},
      {
        text: 'DataTablePagination',
        to: '/components/data-table-pagination',
      },
      {
        text: 'Dropdown',
        to: '/components/dropdown',
      },
      {
        text: 'Icon',
        to: '/components/icon',
      },
      {
        text: 'List',
        to: '/components/list',
      },
      {
        text: 'Logo',
        to: '/components/logo',
      },
      {
        text: 'Menu',
        to: '/components/menu',
      },
      {
        text: 'Menus',
        to: '/components/menus',
      },
      {
        text: 'Modal',
        to: '/components/modal',
      },
      {
        text: 'Navigation Drawer',
        to: '/components/navigation-drawer',
      },
      {
        text: 'Pagination',
        to: '/components/pagination',
      },
      {
        text: 'Progress Bar',
        to: '/components/progress-bar',
      },
      {
        text: 'Progress Circular',
        to: '/components/progress-circular',
      },
      {
        text: 'Rating',
        to: '/components/rating',
      },
      {
        text: 'Select',
        to: '/components/select',
      },
      {
        text: 'Shimmer',
        to: '/components/shimmer',
      },
      {
        text: 'Spinner',
        to: '/components/spinner',
      },
      {
        text: 'Stepper',
        to: '/components/stepper',
      },
      {
        text: 'Switch',
        to: '/components/switch',
      },
      {
        text: 'Tabs',
        to: '/components/tabs',
      },
      {
        text: 'Timeline',
        to: '/components/timeline',
      },
      {
        text: 'Toast',
        to: '/components/toast',
      },
      {
        text: 'Text',
        to: '/components/text',
      },
      {
        text: 'Tooltip',
        to: '/components/tooltip',
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
      >
        <h3
          class="
            font-semibold
            text-center
            py-4
            border-b
            dark:border-neutral-700
          "
        >
          Morpheme UI
        </h3>

        <div class="overflow-y-auto">
          <VList class="flex-1">
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
        </div>

        <VSwitch
          switch-group-class="justify-center border-t py-3
          dark:border-neutral-700
          "
          v-model="darkMode"
          label="Dark Mode"
        />
      </VNavDrawer>
    </template>

    <!-- content -->
    <slot />
  </VAppShell>
</template>