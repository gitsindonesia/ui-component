<script setup lang="ts">
</script>

<template>
  <VAppBar
    hide-on-scroll
    fixed
    transition="slide-down"
    class="!h-[120px] !p-0 rounded-b-lg !bg-primary-600/90 !bg-[url(/bg-header.svg)] bg-no-repeat bg-right-bottom bg-contain"
  >
    <div class="py-3 px-4 flex gap-4 items-center w-full mb-10">
      <VLogo white />
      <div class="flex-1" />
      <div class="flex items-center gap-3 dark">
        <VBtn fab text prefix-icon="ic:round-notifications" />
      </div>
    </div>
    <div class="absolute -bottom-8 inset-x-0 z-10">
      <div
        class="rounded-lg px-4 py-3 flex items-center gap-4 bg-white mx-4 shadow-md bg-[url(/bg-header.svg)] bg-no-repeat bg-right-bottom bg-contain"
      >
        <VAvatar :size="48" class="font-semibold">MB</VAvatar>
        <div>
          <p class="text-gray-700 text-xs">Selamat Pagi,</p>
          <p class="font-semibold">Mas Benu Wisnu</p>
        </div>
      </div>
    </div>
  </VAppBar>
</template>
