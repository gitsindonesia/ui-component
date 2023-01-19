<template>
  <div class="flex flex-col">
    <AdminHeader />
    <div class="flex-1 flex">
      <AdminSidebar />
      <div class="p-6 flex flex-col flex-1">
        <main class="flex-1">
          <slot />
        </main>
        <AdminFooter />
      </div>
    </div>
  </div>
</template>

<style>
body {
  @apply bg-gray-100 dark:bg-neutral-900 text-gray-800 dark:text-neutral-200;
}
</style>
