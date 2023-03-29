---
outline: deep
---

# AppShell

Application Shell Component.

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

</LivePreview>

## Props

| Name                                  | Type      | Default |
| ------------------------------------- | --------- | ------- |
| [`fluid`](#fluid)                     | `boolean` | `false` |
| [`paddedContainer`](#paddedContainer) | `boolean` | `false` |
| [`paddedContent`](#paddedContent)     | `boolean` | `false` |
| [`mainClass`](#mainClass)             | `string`  | `''`    |
| [`contentClass`](#contentClass)       | `string`  | `''`    |
| [`containerClass`](#containerClass)   | `string`  | `''`    |

## Events

None

## Slots

| Name                  | Props | Description          |
| --------------------- | ----- | -------------------- |
| [`default`](#default) | None  | The default Vue slot |

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-app-shell--default).
