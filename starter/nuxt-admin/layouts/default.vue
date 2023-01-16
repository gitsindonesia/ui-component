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
:root {
  --v-app-bg-color: theme('colors.gray.100');
  --v-app-color: theme('colors.gray.800');
}

body {
  background-color: var(--v-app-bg-color);
  color: var(--v-app-color);
}
</style>
