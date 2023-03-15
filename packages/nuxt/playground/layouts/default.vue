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
];
</script>

<template>
  <VAppBar bordered sticky>
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
  <div class="flex gap-4">
    <VNavDrawer sticky class="!top-14 pr-3" bordered>
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

    <div class="flex-1">
      <slot />
    </div>
  </div>
</template>
