<template>
  <NuxtLink
    to="/admin"
    class="flex justify-start items-center gap-2 py-5 w-full px-4 mb-2"
  >
    <Logo />
    <h3 class="font-semibold">{{ useAppConfig().admin.title }}</h3>
    <!-- <img src="/logo-type.svg" alt="Logo" class="h-8 dark:hidden" /> -->
    <!-- <img src="/logo-type-white.svg" alt="Logo" class="h-8 dark:inline" /> -->
  </NuxtLink>
</template>
