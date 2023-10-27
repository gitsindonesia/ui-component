<script setup lang="ts">
const toggleDarkMode = () => {
  const html = document.querySelector('html');
  html?.classList?.toggle('dark');
};

const darkMode = ref(false);

const components = [
  {
    name: 'AppBar',
    href: '#app-bar',
  },
  {
    name: 'Alert',
    href: '#alert',
  },
  {
    name: 'Avatar',
    href: '#avatar',
  },
  {
    name: 'Badge',
    href: '#badge',
  },
  {
    name: 'Button',
    href: '#button',
  },
  {
    name: 'Forms',
    href: '#forms',
  },
  {
    name: 'Forms Disabled',
    href: '#forms-disabled',
  },
  {
    name: 'Breadcrumbs',
    href: '#breadcrumbs',
  },
  {
    name: 'Card',
    href: '#card',
  },
  {
    name: 'Dropdown',
    href: '#dropdown',
  },
  {
    name: 'Menus',
    href: '#menus',
  },
  {
    name: 'Icon',
    href: '#icon',
  },
  {
    name: 'List',
    href: '#list',
  },
  {
    name: 'Modal',
    href: '#modal',
  },
  {
    name: 'Tabs',
    href: '#tabs',
  },
  {
    name: 'Table',
    href: '#table',
  },
  {
    name: 'Shimmer',
    href: '#shimmer',
  },
  {
    name: 'ProgressBar',
    href: '#progress-bar',
  },
  {
    name: 'Pagination',
    href: '#pagination',
  },
  {
    name: 'BottomSheet',
    href: '#bottom-sheet',
  },
  {
    name: 'Rating',
    href: '#rating',
  },
  {
    name: 'CKEditor',
    href: '#ckeditor',
  },
  {
    name: 'QuillEditor',
    href: '#quill-editor',
  },
  {
    name: 'ProgressCircular',
    href: '#progress-circular',
  },
  {
    name: 'Timeline',
    href: '#timeline',
  },
  {
    name: 'Banner',
    href: '#banner',
  },
  {
    name: 'Tooltip',
    href: '#tooltip',
  },
];
</script>

<template>
  <VAppShell>
    <template #header>
      <div class="fixed w-full z-20">
        <VBanner color="primary">
          <VBannerText> Welcome to the Morpheme UI Playground </VBannerText>
          <template #actions="{close}">
            <VBtn
              text
              flush
              prefix-icon="ic:round-close"
              class="!text-white"
              @click="close"
            />
          </template>
        </VBanner>
        <VAppBar bordered>
          <div class="flex justify-between items-center w-full">
            <div class="font-semibold flex-1">Morpheme UI Playground</div>
            <div>
              <VSwitch
                v-model="darkMode"
                label="Dark Mode"
                @update:model-value="toggleDarkMode"
              />
            </div>
          </div>
        </VAppBar>
      </div>
    </template>
    <template #aside>
      <VNavDrawer
        class="pr-3 lg:mt-32 lg:!top-32"
        sticky
        bordered
        height="screen-dvh"
      >
        <div class="overflow-y-auto">
          <VList hover shaped flush>
            <VListItemHeader>Menu</VListItemHeader>
            <VListItem
              v-for="component in components"
              :key="component.name"
              :href="component.href"
              :class="{
                '!bg-primary-500 !font-semibold !text-white':
                  $route.hash === component.href,
              }"
            >
              {{ component.name }}
            </VListItem>
          </VList>
        </div>
      </VNavDrawer>
    </template>
    <slot />
  </VAppShell>
</template>
