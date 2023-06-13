<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
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
      <div class="flex items-center gap-3">
        <Popover class="relative">
          <PopoverButton as="template">
            <VBtn fab text prefix-icon="ic:round-notifications" class="!text-white" />
          </PopoverButton>
          <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="translate-y-1 opacity-0"
            enter-to-class="translate-y-0 opacity-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="translate-y-0 opacity-100"
            leave-to-class="translate-y-1 opacity-0"
          >
            <PopoverPanel
              class="absolute right-0 z-20 bg-white rounded-lg w-72 shadow-md"
            >
              <VList>
                <VListItemHeader>Notification</VListItemHeader>
                <VDivider class="my-1" />
                <VListItem hide-prepend hide-append v-for="i in 6" :key="i">
                  <div class="flex gap-4 items-center">
                    <VAvatar :size="40">A</VAvatar>
                    <div>
                      <h3 class="font-semibold">Title</h3>
                      <p class="text-sm text-gray-500 flex flex-wrap truncate">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      </p>
                    </div>
                  </div>
                </VListItem>
                <VDivider class="my-1" />
                <VListItem hide-append hide-prepend>
                  <VBtn block>View all notifications</VBtn>
                </VListItem>
              </VList>
            </PopoverPanel>
          </transition>
        </Popover>
      </div>
    </div>
    <div class="absolute -bottom-8 inset-x-0 z-10">
      <div
        class="rounded-lg px-4 py-3 flex items-center gap-4 bg-white dark:bg-gray-true-700 mx-4 shadow-md bg-[url(/bg-header.svg)] bg-no-repeat bg-right-bottom bg-contain"
      >
        <VAvatar :size="48" class="font-semibold">MB</VAvatar>
        <div>
          <p class="text-gray-700 dark:text-gray-true-200 text-xs">Selamat Pagi,</p>
          <p class="font-semibold">Mas Benu Wisnu</p>
        </div>
      </div>
    </div>
  </VAppBar>
</template>
