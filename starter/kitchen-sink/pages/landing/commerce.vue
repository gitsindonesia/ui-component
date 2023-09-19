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
            <VBtn prefix-icon="ri:menu-line">
              <div class="sr-only">Menu</div>
            </VBtn>
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
      <div class="container mx-auto gap-4 py-10 lg:py-20 px-4 2xl:px-0">
        <div class="flex flex-col lg:flex-row gap-10 items-center">
          <div
            class="relative rounded-xl 2xl:rounded-full overflow-hidden w-full h-40 lg:w-[400px] lg:h-[400px] shrink-0"
          >
            <img
              src="https://picsum.photos/400/400?random=123"
              alt=""
              class="w-full h-full hover:scale-110 transition duration-200 object-cover"
            />
          </div>
          <div>
            <h2 class="text-xl text-left max-w-5xl mx-auto font-medium">
              Discover why millions of entrepreneurs chose ShopX to build their
              business — from hello world to IPO.
            </h2>

            <ul
              class="grid grid-cols-1 lg:grid-cols-2 xl:place-items-center gap-4 xl:gap-8 mt-10"
            >
              <li v-for="i in 4" :key="i" class="flex gap-4">
                <div class="py-1 flex">
                  <div
                    class="bg-gradient-to-b from-green-600 to-cyan-500 w-1 h-full rounded-sm"
                  ></div>
                </div>
                <div class="space-y-1">
                  <h3 class="text-3xl font-medium">Millions</h3>
                  <p class="text-gray-500 dark:text-neutral-400">
                    of merchants worldwide
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 xl:py-40">
      <div class="container mx-auto px-4 2xl:px-0">
        <h2 class="mb-6 text-lg text-gray-700 font-semibold">
          EXPLORE THE WORLD'S LARGEST COMMERCE COMMUNITY
        </h2>
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div
            v-for="i in 4"
            :key="i"
            class="transition duration-200 shadow-md hover:shadow-lg rounded-lg bg-white dark:bg-neutral-800 px-5 py-4"
          >
            <div
              class="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center"
            >
              <div
                class="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center"
              >
                <VIcon name="ph:infinity" class="!text-red-600" />
              </div>
            </div>

            <h3
              class="mt-4 font-semibold text-lg text-gray-900 dark:text-neutral-200"
            >
              Plus
            </h3>
            <p class="mt-1 text-gray-500 dark:text-neutral-400 text-sm">
              A commerce solution for growing digital brands
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 lg:py-40 bg-gray-100">
      <div class="container mx-auto px-4 2xl:px-0">
        <p class="text-green-700 font-semibold">BUILD AND ONLINE STORE</p>
        <h2
          class="text-4xl leading-tight 2xl:text-display-2xl text-gray-900 font-semibold mt-4"
        >
          Your store, your way
        </h2>

        <img
          src="https://picsum.photos/800/400?id=97"
          alt=""
          class="w-full rounded-xl block mt-4"
        />

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 2xl:-mx-5">
          <div
            v-for="i in 3"
            :key="i"
            class="rounded-xl hover:bg-gray-200 px-5 py-4"
          >
            <h3 class="text-lg font-semibold text-gray-900">
              Start, run, and grow your business
            </h3>
            <p class="text-gray-500 dark:text-neutral-400 mt-3">
              Use ShopX powerful features to start selling. Start your business
              journey with a beautiful website. Choose from hundreds of
              customizable themes, with new additions weekly.
            </p>

            <a href="#" class="underline font-semibold block mt-3">
              Online Store Builder
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 lg:py-40">
      <div class="container mx-auto px-4 2xl:px-0">
        <div class="flex flex-col lg:flex-row gap-4">
          <div class="w-full lg:w-8/12">
            <p class="text-green-700 font-semibold">SALES CHANNELS</p>
            <h2
              class="text-4xl leading-tight 2xl:text-display-2xl 2xl:leading-[80px] text-gray-900 font-semibold mt-4"
            >
              Sell to every buyer, everywhere
            </h2>
          </div>
          <div class="w-full lg:w-4/12">
            <p class="text-gray-600">
              Sell online, in person, and around the world with the marketing
              tools, social integrations, and sales channels you need to get
              your products in front of customers.
            </p>
            <a
              href="#"
              class="border-b-2 border-gray-700 hover:text-green-700 hover:border-green-700 transition duration-300 py-3 font-semibold mt-7 flex w-full gap-4 justify-between"
            >
              Start selling
              <VIcon name="ri:arrow-right-s-line" />
            </a>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <div
            v-for="i in 3"
            :key="i"
            class="relative rounded-xl overflow-hidden h-52"
          >
            <img
              :src="`https://picsum.photos/400/208?random=1${i}`"
              alt=""
              class="w-full h-full hover:scale-110 transition duration-200"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 lg:py-40 bg-gray-100">
      <div class="container mx-auto px-4 2xl:px-0">
        <div class="flex flex-col lg:flex-row justify-between gap-10">
          <div class="w-full lg:w-5/12">
            <p class="text-green-700 font-semibold">PIONT OF SALE</p>
            <h2
              class="text-display-md leading-[40px] text-gray-900 font-semibold mt-4"
            >
              Flexible point of sale to power your retail store
            </h2>
            <p class="text-gray-500 text-lg mt-4">
              A POS system that allows customers to shop their way, from online
              to checkout line
            </p>
            <a
              href="#"
              class="border-b-2 border-gray-700 hover:text-green-700 hover:border-green-700 transition duration-300 py-3 font-semibold mt-7 flex w-full gap-4 justify-between"
            >
              Start selling
              <VIcon name="ri:arrow-right-s-line" />
            </a>
          </div>
          <div class="w-full lg:w-5/12">
            <div class="relative rounded-xl overflow-hidden h-[260px]">
              <img
                src="https://picsum.photos/600/260?random=123"
                alt=""
                class="w-full h-full hover:scale-110 transition duration-200 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 lg:py-40 bg-white">
      <div class="container mx-auto px-4 2xl:px-0">
        <p class="text-green-700 font-semibold">BUILT-IN MARKETING TOOLS</p>
        <h2
          class="text-4xl leading-tight 2xl:text-display-2xl text-gray-900 font-semibold mt-4 max-w-xl 2xl:leading-[80px]"
        >
          From first touch to full funnel
        </h2>

        <div class="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-6">
          <div class="grid grid-cols-1 gap-6 mt-8">
            <div
              v-for="i in 3"
              :key="i"
              class="rounded-xl hover:bg-gray-50 2xl:px-4 py-3 flex gap-4"
            >
              <div
                class="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center shrink-0"
              >
                <div
                  class="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center"
                >
                  <VIcon name="ph:infinity" size="sm" class="!text-red-600" />
                </div>
              </div>
              <div class="flex flex-col gap-4">
                <h3 class="text-xl lg:text-2xl font-semibold text-gray-900">
                  Start, run, and grow your business
                </h3>
                <p class="text-gray-500 dark:text-neutral-400 mt-3 flex-grow">
                  Use ShopX powerful features to start selling. Start your
                  business journey with a beautiful website.
                </p>
                <div class="border-b-2 mt-4 border-gray-200" />
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://picsum.photos/800/800?id=96"
              alt=""
              class="w-full rounded-xl block mt-4 object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <section
      class="py-20 lg:py-40 bg-gradient-to-tr from-cyan-400 via-green-400 to-emerald-400"
    >
      <div
        class="container mx-auto px-4 2xl:px-0 flex flex-col items-center gap-10"
      >
        <h2
          class="text-display-md leading-tight lg:text-display-lg font-semibold text-black text-center lg:leading-[60px]"
        >
          Grow your <br />
          business here
        </h2>
        <p class="text-lg lg:text-xl max-w-xl text-center text-black">
          Whether you want to sell products down the street or around the world,
          we have all the tools you need.
        </p>
        <VBtn rounded size="lg" color="dark"> Start free trial </VBtn>
      </div>
    </section>

    <footer class="bg-white">
      <div
        class="container mx-auto px-4 py-6 2xl:px-0 text-center text-sm text-gray-700"
      >
        Copyright 2023 &middot; All rights reserved.
      </div>
    </footer>
  </div>
</template>
