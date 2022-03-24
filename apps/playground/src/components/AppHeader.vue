<script setup lang="ts"></script>

<template>
  <div
    class="flex h-16 p-2 sm:px-4 items-center gap-2 border-b z-20 fixed sm:relative bg-white w-full shadow-md sm:shadow-none"
  >
    <div class="flex sm:hidden">
      <HamburgerMenu />
    </div>
    <div class="flex-grow justify-center sm:justify-start flex gap-2">
      <v-logo img-class="h-6" />
      <span class="font-semibold text-primary-500">UI Component</span>
    </div>
    <div class="flex w-10 sm:hidden"></div>
  </div>
</template>
