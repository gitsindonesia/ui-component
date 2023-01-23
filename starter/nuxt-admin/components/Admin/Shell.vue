<template>
  <div class="flex flex-col">
    <slot name="header" />
    <div class="flex-1 flex">
      <slot name="sidebar" />
      <div class="p-6 flex flex-col flex-1">
        <main class="flex-1">
          <slot />
        </main>
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<style>
body {
  @apply bg-gray-100 dark:bg-neutral-900 text-gray-800 dark:text-neutral-200;
}
</style>
