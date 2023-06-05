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

const darkMode = ref(false);

watch(darkMode, () => {
  document.documentElement.classList.toggle('dark', darkMode.value);
});
</script>

<template>
  <VAppShell container-class="py-8">
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

    <template #navigation>
      <VAppBar color="dark-blue" shadow class="py-3 px-4" size="auto" sticky>
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

        <div class="overflow-y-auto flex-1">
          <AppSidebarMenus />
        </div>

        <VSwitch
          switch-group-class="justify-center border-t py-4
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
