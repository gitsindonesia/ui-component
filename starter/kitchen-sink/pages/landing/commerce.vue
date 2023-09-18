<script setup lang="ts">
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  PopoverOverlay,
} from '@headlessui/vue';

definePageMeta({
  layout: 'blank',
});
</script>

<template>
  <div>
    <section
      class="xl:h-[calc(100vh-60px)] xl:max-h-[768px] flex flex-col gap-8 w-full px-4 2xl:px-0 py-4 bg-gradient-to-tr from-blue-600 via-green-600 to-purple-600"
    >
      <div class="container mx-auto flex flex-col gap-8 justify-between h-full">
        <!-- header desktop -->
        <header class="hidden xl:flex items-center gap-4">
          <NuxtLink to="/">
            <VLogo white />
          </NuxtLink>

          <nav class="flex flex-grow items-center gap-2">
            <PopoverGroup class="flex !flex-grow items-center !gap-4">
              <Popover>
                <PopoverButton
                  class="text-sm text-white font-semibold py-2 px-3 rounded-full inline-flex items-center gap-2"
                  >Home</PopoverButton
                >
              </Popover>
              <Popover v-slot="{open}">
                <PopoverButton
                  class="text-sm text-white font-semibold py-2 px-3 rounded-full inline-flex items-center gap-2"
                >
                  Solutions
                  <VIcon
                    name="ri:arrow-down-s-line"
                    size="xs"
                    :class="[
                      'transform transition duration-300',
                      {
                        'rotate-180': open,
                      },
                    ]"
                  />
                </PopoverButton>
                <transition
                  enter-active-class="transition duration-200 ease-out"
                  enter-from-class="translate-y-2 opacity-0"
                  enter-to-class="translate-y-0 opacity-100"
                  leave-active-class="transition duration-150 ease-in"
                  leave-from-class="translate-y-0 opacity-100"
                  leave-to-class="translate-y-2 opacity-0"
                >
                  <PopoverPanel
                    class="flex gap-4 px-6 py-6 min-w-none w-full fixed inset-x-0 bg-zinc-950 shadow-md mt-4 z-10"
                  >
                    <div class="container mx-auto grid gap-8 grid-cols-4">
                      <div v-for="i in 4" :key="i">
                        <div class="flex gap-3 items-center mb-4">
                          <div
                            class="rounded-full grid place-items-center border-green-500 text-green-500 w-10 h-10 border-2"
                          >
                            <VIcon name="ri:arrow-right-s-line" />
                          </div>
                          <h3 class="font-semibold text-zinc-200">Start</h3>
                        </div>
                        <hr class="border border-px border-zinc-900" />
                        <ul class="mt-4 -mx-3">
                          <li
                            v-for="i in 5"
                            :key="i"
                            class="rounded-lg group px-3 py-2 transition duration-200 hover:bg-zinc-900 flex gap-4 items-center"
                          >
                            <div class="flex-grow">
                              <div class="font-semibold text-sm text-zinc-200">
                                Start your business
                              </div>
                              <div class="text-zinc-500 text-sm">
                                Build your brand
                              </div>
                            </div>
                            <VIcon
                              name="ri:arrow-right-s-line"
                              size="xs"
                              class="text-zinc-500 !hidden group-hover:!inline transition duration-300"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </PopoverPanel>
                </transition>
              </Popover>
              <Popover>
                <PopoverButton
                  class="text-sm text-white font-semibold py-2 px-3 rounded-full inline-flex items-center gap-2"
                >
                  Pricing
                </PopoverButton>
              </Popover>
              <Popover v-slot="{open}">
                <PopoverButton
                  class="text-sm text-white font-semibold py-2 px-3 rounded-full inline-flex items-center gap-2"
                >
                  Resources
                  <VIcon
                    name="ri:arrow-down-s-line"
                    size="xs"
                    :class="[
                      'transform transition duration-300',
                      {
                        'rotate-180': open,
                      },
                    ]"
                  />
                </PopoverButton>
                <transition
                  enter-active-class="transition duration-200 ease-out"
                  enter-from-class="translate-y-2 opacity-0"
                  enter-to-class="translate-y-0 opacity-100"
                  leave-active-class="transition duration-150 ease-in"
                  leave-from-class="translate-y-0 opacity-100"
                  leave-to-class="translate-y-2 opacity-0"
                >
                  <PopoverPanel
                    class="flex gap-4 px-6 py-6 min-w-none w-full fixed inset-x-0 bg-zinc-950 shadow-md mt-4 z-10"
                  >
                    <div class="container mx-auto grid gap-8 grid-cols-4">
                      <div v-for="i in 4" :key="i">
                        <div class="flex gap-3 items-center mb-4">
                          <div
                            class="rounded-full grid place-items-center border-green-500 text-green-500 w-10 h-10 border-2"
                          >
                            <VIcon name="ri:arrow-right-s-line" />
                          </div>
                          <h3 class="font-semibold text-zinc-200">Start</h3>
                        </div>
                        <hr class="border border-px border-zinc-900" />
                        <ul class="mt-4 -mx-3">
                          <li
                            v-for="i in 5"
                            :key="i"
                            class="rounded-lg group px-3 py-2 transition duration-200 hover:bg-zinc-900 flex gap-4 items-center"
                          >
                            <div class="flex-grow">
                              <div class="font-semibold text-sm text-zinc-200">
                                Start your business
                              </div>
                              <div class="text-zinc-500 text-sm">
                                Build your brand
                              </div>
                            </div>
                            <VIcon
                              name="ri:arrow-right-s-line"
                              size="xs"
                              class="text-zinc-500 !hidden group-hover:!inline transition duration-300"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </PopoverPanel>
                </transition>
              </Popover>
            </PopoverGroup>

            <ColorModeSwitcher class="!text-white" />
            <VBtn text rounded class="!text-white"> Login </VBtn>
            <VBtn rounded> Start free trial </VBtn>
          </nav>
        </header>
        <!-- header mobile -->
        <header class="xl:hidden">
          <div class="flex items-center gap-2 justify-between">
            <NuxtLink to="/">
              <VLogo white />
            </NuxtLink>
            <VBtn prefix-icon="ri:menu-line"></VBtn>
          </div>
        </header>

        <div class="flex-grow flex flex-col justify-center">
          <h1
            class="text-3xl xl:text-display-lg font-semibold text-white max-w-xl xl:leading-[4rem] drop-shadow-xl]"
          >
            Making Commerce Better for Everyone
          </h1>
          <div
            class="text-lg xl:text-xl mt-2 xl:mt-5 text-green-100 max-w-2xl drop-shadow-xl"
          >
            ShopX is the best way to start your online business and sell online.
            It is a complete eCommerce solution that allows you to set up an
            online store to sell your goods and products.
          </div>
        </div>

        <div
          class="flex flex-col xl:flex-row gap-4 xl:justify-between xl:items-center"
        >
          <div
            class="flex flex-col xl:flex-row xl:items-center gap-4 xl:w-5/12"
          >
            <VBtn size="lg" rounded>Start free trial</VBtn>
            <p
              class="text-sm xl:max-w-[200px] text-white text-center xl:text-left"
            >
              Start for free, then get your first 3 months for $1/mo.
            </p>
          </div>
          <div>
            <VBtn
              size="lg"
              rounded
              outlined
              class="!text-white !w-full xl!:w-auto"
            >
              Watch the story
            </VBtn>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container mx-auto gap-4 py-20 px-3 xl:px-0">
        <div>
          <h2
            class="text-xl xl:text-display-md text-center max-w-5xl mx-auto font-medium"
          >
            Discover why millions of entrepreneurs chose Shopify to build their
            business — from hello world to IPO.
          </h2>

          <ul
            class="grid grid-cols-1 lg:grid-cols-2 xl:place-items-center gap-4 xl:gap-8 mt-10"
          >
            <li v-for="i in 4" :key="i" class="flex gap-4">
              <div class="py-1 flex">
                <div class="bg-green-600 w-1 h-full rounded-sm"></div>
              </div>
              <div>
                <h3 class="text-xl font-semibold">Millions</h3>
                <p>of merchants worldwide</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
