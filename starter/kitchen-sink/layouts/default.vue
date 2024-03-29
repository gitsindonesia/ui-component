<script setup lang="ts">
import {breakpointsTailwind, useBreakpoints} from '@vueuse/core';

const breakpoints = useBreakpoints(breakpointsTailwind);
const isMobile = breakpoints.smaller('lg'); // only smaller than lg
const isAsideOpen = ref(false);
const isMini = ref(false);
const settingsDrawer = ref(false);
const colorMode = useColorMode();

watchEffect(() => {
  isAsideOpen.value = !isMobile.value;
});

function onMenuClick() {
  if (isMobile.value) isAsideOpen.value = false;
}
</script>

<template>
  <VAppShell container-class="px-4 py-6">
    <template #header>
      <VAppBar shadow class="py-3 px-4 !flex lg:!hidden" size="auto" sticky>
        <VLogo :white="colorMode.preference !== 'light'" @click="onMenuClick" />
        <div class="flex-1" />
        <div class="flex items-center gap-3">
          <VBtn
            @click="settingsDrawer = !settingsDrawer"
            prefix-icon="ic:round-settings"
            text
            fab
            icon
          ></VBtn>
          <ColorModeSwitcher />
          <VBtn
            color="primary"
            @click="isAsideOpen = !isAsideOpen"
            prefix-icon="ic:round-menu"
          >
          </VBtn>
        </div>
      </VAppBar>
    </template>

    <template #navigation>
      <VAppBar bordered class="!h-[60px] px-4 !hidden lg:!flex" sticky>
        <div class="flex items-center w-full justify-between">
          <div class="flex gap-1">
            <VBtn
              @click="isAsideOpen = !isAsideOpen"
              :prefix-icon="
                isAsideOpen ? 'ri:arrow-left-s-line' : 'ri:arrow-right-s-line'
              "
              size="sm"
              fab
              icon
              v-tooltip="{
                content: 'Toggle Sidebar',
              }"
            />
          </div>
          <div>
            <VBtn
              @click="settingsDrawer = !settingsDrawer"
              prefix-icon="ic:round-settings"
              text
              fab
              icon
            ></VBtn>
            <ColorModeSwitcher />
          </div>
        </div>
      </VAppBar>
    </template>

    <!-- aside -->
    <template #aside>
      <AppSettingsDrawer v-model="settingsDrawer" />

      <VNavDrawer
        v-model="isAsideOpen"
        :mini="isMini"
        :fixed="isMobile"
        :overlay="isMobile"
        :close-on-overlay-click="isMobile"
        :shadow="isMobile"
        :bordered="!isMobile"
        :sticky="!isMobile"
        :class="{'z-20': isMobile}"
      >
        <NuxtLink
          to="/"
          class="font-semibold text-center border-b dark:border-neutral-700 h-[68px] lg:h-[60px] truncate flex items-center justify-center"
        >
          Morpheme UI
        </NuxtLink>

        <div class="overflow-y-auto flex-1">
          <AppSidebarMenus @menu-click="onMenuClick" />
        </div>
      </VNavDrawer>
    </template>

    <!-- content -->
    <slot />
  </VAppShell>
</template>
