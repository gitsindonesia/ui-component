<template>
  <main class="flex flex-col sm:h-screen">
    <div class="flex flex-col sm:flex-row flex-1 overflow-hidden">
      <div class="w-full sm:w-3/12 sm:p-4 p-0">
        <AppMenus />
      </div>
      <div class="flex flex-1 flex-col w-full sm:w-9/12">
        <div class="flex-1 overflow-y-auto paragraph p-4">
          <router-view />
        </div>
      </div>
    </div>
    <AppFooter />
  </main>
</template>
