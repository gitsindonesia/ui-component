---
outline: deep
---

# AppShell

The `VAppShell` component is a Vue component that provides a layout shell for a web application. It includes slots for different sections of the layout, such as the header, footer, navbar, main content, and aside content.

## Usage

### Basic Usage

To use the `VAppShell` component, you can simply include it in your template like this:

<LivePreview src="components-appshell--default">

```vue
<script setup lang="ts">
const breakpoints = useBreakpoints(breakpointsTailwind);
const isMobile = breakpoints.smaller('sm'); // only smaller than lg
const isAsideOpen = ref(true);

watchEffect(() => {
  isAsideOpen.value = !isMobile.value;
});
</script>

<template>
  <VAppShell padded-content>
    <!-- header -->
    <template #header>
      <AppHeader @click:menu="isAsideOpen = !isAsideOpen" />
    </template>

    <!-- aside -->
    <template #aside>
      <VNavDrawer
        v-model="isAsideOpen"
        :fixed="isMobile"
        :overlay="isMobile"
        :close-on-overlay-click="isMobile"
        :class="{'z-20 !w-10/12 sidebar': isMobile}"
        bordered
      >
        <NavDrawerContent />
      </VNavDrawer>
    </template>

    <!-- footer -->
    <template #content.after>
      <VText variant="sm" color="gray.500" class="mt-4">
        Copyright &copy; 2023 &middot; All rights reserved.
      </VText>
    </template>

    <!-- content -->
    <MainContent />
  </VAppShell>
</template>
```

</LivePreview>

### Fluid

Use `fluid` prop to make container fluid.

<LivePreview src="components-appshell--fluid">

```vue
<script setup lang="ts">
const breakpoints = useBreakpoints(breakpointsTailwind);
const isMobile = breakpoints.smaller('sm'); // only smaller than lg
const isAsideOpen = ref(true);

watchEffect(() => {
  isAsideOpen.value = !isMobile.value;
});
</script>

<template>
  <VAppShell padded-content fluid>
    <!-- header -->
    <template #header>
      <AppHeader @click:menu="isAsideOpen = !isAsideOpen" />
    </template>

    <!-- aside -->
    <template #aside>
      <VNavDrawer
        v-model="isAsideOpen"
        :fixed="isMobile"
        :overlay="isMobile"
        :close-on-overlay-click="isMobile"
        :class="{'z-20 !w-10/12 sidebar': isMobile}"
        bordered
      >
        <NavDrawerContent />
      </VNavDrawer>
    </template>

    <!-- footer -->
    <template #content.after>
      <VText variant="sm" color="gray.500" class="mt-4">
        Copyright &copy; 2023 &middot; All rights reserved.
      </VText>
    </template>

    <!-- content -->
    <MainContent />
  </VAppShell>
</template>
```

</LivePreview>

### Stacked

Here's an example of stacked layout.

<LivePreview src="components-appshell--stacked">

```vue
<script setup lang="ts">
const breakpoints = useBreakpoints(breakpointsTailwind);
const isMobile = breakpoints.smaller('sm'); // only smaller than lg
const isAsideOpen = ref(true);

watchEffect(() => {
  isAsideOpen.value = !isMobile.value;
});
</script>

<template>
  <VAppShell padded-container>
    <!-- header -->
    <template #header>
      <AppHeader @click:menu="isAsideOpen = !isAsideOpen" />
    </template>

    <!-- footer -->
    <template #footer>
      <footer class="px-4 py-3">
        <VText variant="sm" color="gray.500">
          Copyright &copy; 2023 &middot; All rights reserved.
        </VText>
      </footer>
    </template>

    <!-- content -->
    <MainContent />
  </VAppShell>
</template>
```

</LivePreview>

### Sidebar with header

Here's an example of sidebar layout with header.

<LivePreview src="components-appshell--sidebar-inner-header">

```vue
<script setup lang="ts">
const breakpoints = useBreakpoints(breakpointsTailwind);
const isMobile = breakpoints.smaller('sm'); // only smaller than lg
const isAsideOpen = ref(true);

watchEffect(() => {
  isAsideOpen.value = !isMobile.value;
});
</script>

<template>
  <VAppShell padded-container>
    <!-- navbar -->
    <template #navbar>
      <AppHeader @click:menu="isAsideOpen = !isAsideOpen" hide-logo>
        <VInput placeholder="Search" prepend-icon="ic:round-search" />
      </AppHeader>
    </template>

    <!-- aside -->
    <template #aside>
      <VNavDrawer
        v-model="isAsideOpen"
        :fixed="isMobile"
        :overlay="isMobile"
        :close-on-overlay-click="isMobile"
        :class="{'z-20 !w-10/12 sidebar': isMobile}"
        bordered
      >
        <NavDrawerContent logo />
      </VNavDrawer>
    </template>

    <!-- footer -->
    <template #innerFooter>
      <VText variant="sm" color="gray.500" class="m-4">
        Copyright &copy; 2023 &middot; All rights reserved.
      </VText>
    </template>

    <!-- content -->
    <MainContent />
  </VAppShell>
</template>
```

### Three Column

Here's an example of three column layout.

<LivePreview src="components-appshell--three-column">

```vue
<script setup lang="ts">
const breakpoints = useBreakpoints(breakpointsTailwind);
const isMobile = breakpoints.smaller('sm'); // only smaller than lg
const isAsideOpen = ref(true);

watchEffect(() => {
  isAsideOpen.value = !isMobile.value;
});
</script>

<template>
  <VAppShell v-bind="args" fluid>
    <!-- aside -->
    <template #aside>
      <VNavDrawer
        v-model="isAsideOpen"
        :fixed="isMobile"
        :overlay="isMobile"
        :close-on-overlay-click="isMobile"
        :class="{'z-20 !w-10/12 sidebar': isMobile}"
        bordered
        mini
      >
        <div class="flex flex-col gap-2 mt-2">
          <VAvatar size="xl">D</VAvatar>
          <VAvatar size="xl">A</VAvatar>
          <VAvatar size="xl">T</VAvatar>
        </div>
      </VNavDrawer>
    </template>

    <!-- footer -->
    <template #innerFooter>
      <VText variant="sm" color="gray.500" class="m-4">
        Copyright &copy; 2023 &middot; All rights reserved.
      </VText>
    </template>

    <div class="flex flex-1">
      <div class="w-72 border-r h-[100dvh] overflow-x-auto">
        <VList hover small>
          <VListItem
            prepend-icon-class="!text-gray-600"
            prepend-icon-size="sm"
            prepend-icon="ph:chat-centered-text-thin"
            >Threads</VListItem
          >
          <VListItem
            prepend-icon-class="!text-gray-600"
            prepend-icon-size="sm"
            prepend-icon="ph:chats-circle-thin"
            >Direct Messages</VListItem
          >
          <VListItem
            prepend-icon-class="!text-gray-600"
            prepend-icon-size="sm"
            prepend-icon="ri:at-line"
            >Mentions and Reactions</VListItem
          >
          <VListItem
            prepend-icon-class="!text-gray-600"
            prepend-icon-size="sm"
            prepend-icon="ic:round-send"
            >Drafts and sent</VListItem
          >
          <VListItem
            prepend-icon-class="!text-gray-600"
            prepend-icon-size="sm"
            prepend-icon="ic:round-bookmark"
            >Saved items</VListItem
          >
          <VListItem
            prepend-icon-class="!text-gray-600"
            prepend-icon-size="sm"
            prepend-icon="ri:building-4-line"
            >Connect</VListItem
          >
          <VListItem
            prepend-icon-class="!text-gray-600"
            prepend-icon-size="sm"
            prepend-icon="ic:round-more-vert"
            >More</VListItem
          >
        </VList>
        <VList hover small class="mt-4">
          <VText
            font-weight="semibold"
            color="gray.500"
            class="px-2"
            variant="sm"
            >Channels</VText
          >
          <VListItem
            v-for="i in 20"
            :key="i"
            prepend-icon-class="!text-gray-600"
            prepend-icon-size="sm"
            prepend-icon="ph:hash"
          >
            Channel {{ i }}
          </VListItem>
        </VList>
        <VList hover small class="mt-4">
          <VText
            font-weight="semibold"
            color="gray.500"
            class="px-2"
            variant="sm"
            >Direct Messsages</VText
          >
          <VListItem
            v-for="i in 5"
            :key="i"
            prepend-icon-class="!text-gray-600"
            prepend-icon-size="sm"
            prepend-icon="ic:round-person"
          >
            User {{ i }}
          </VListItem>
        </VList>
        <VList hover small class="mt-4">
          <VText
            font-weight="semibold"
            color="gray.500"
            class="px-2"
            variant="sm"
          >
            Apps
          </VText>
          <VListItem
            v-for="i in 5"
            :key="i"
            prepend-icon-class="!text-gray-600"
            prepend-icon-size="sm"
            prepend-icon="ic:round-app-shortcut"
          >
            App {{ i }}
          </VListItem>
        </VList>
      </div>
      <div class="flex-1 px-6 py-4">
        <MainContent />
      </div>
    </div>
  </VAppShell>
</template>
```

</LivePreview>

## Props

| Name                                  | Type      | Default     | Description                                                                                          |
| ------------------------------------- | --------- | ----------- | ---------------------------------------------------------------------------------------------------- |
| [`fluid`](#fluid)                     | `boolean` | `false`     | If `true`, the main content area will have no padding and will take up the full width of the screen. |
| [`paddedContainer`](#paddedContainer) | `boolean` | `false`     | If `true`, the main content area's container will have padding.                                      |
| [`paddedContent`](#paddedContent)     | `boolean` | `false`     | If `true`, the main content area's content wrapper will have padding.                                |
|                                       |
| [`mainClass`](#mainClass)             | `string`  | `undefined` | A CSS class to apply to the main content area.                                                       |
| [`contentClass`](#contentClass)       | `string`  | `undefined` | A CSS class to apply to the main content area's content wrapper.                                     |
|                                       |
| [`containerClass`](#containerClass)   | `string`  | `undefined` | A CSS class to apply to the main content area's container.                                           |
|                                       |

## Slots

| Name              | Description                                                                   |
| ----------------- | ----------------------------------------------------------------------------- |
| `default`         | This slot is used to add content to the main section of the app shell.        |
|                   |
| `header`          | This slot is used to add content to the header section of the app shell.      |
| `aside`           | This slot is used to add content to the aside section of the app shell.       |
|                   |
| `navigation`      | This slot is used to add content to the navigation section of the app shell.  |
|                   |
| `container.after` | This slot is used to add content after the container section of the app shell |
|                   |
| `content.after`   | This slot is used to add content after the content section of the app shell.  |
|                   |
| `footer`          | This slot is used to add content to the footer section of the app shell.      |
|                   |

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-app-shell--default).
