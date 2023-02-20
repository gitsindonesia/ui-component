<script setup lang="ts">
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/vue';
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from '@heroicons/vue/24/outline';

interface Props {
  navigation: Record<string, any>;
}

defineProps<Props>();

const emit =
  defineEmits<{
    (e: 'click:menu'): void;
  }>();

const viewCart = ref(false);
</script>

<template>
  <nav aria-label="Top" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="border-b border-gray-200">
      <div class="flex h-16 items-center">
        <button
          type="button"
          class="rounded-md bg-white p-2 text-gray-400 lg:hidden"
          @click="emit('click:menu')"
        >
          <span class="sr-only">Open menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>

        <!-- Logo -->
        <div class="ml-4 flex lg:ml-0">
          <VLogo />
        </div>

        <!-- Flyout menus -->
        <PopoverGroup class="hidden lg:ml-8 lg:block lg:self-stretch">
          <div class="flex h-full space-x-8">
            <Popover
              v-for="category in navigation.categories"
              :key="category.name"
              class="flex"
              v-slot="{open}"
            >
              <div class="relative flex">
                <PopoverButton
                  :class="[
                    open
                      ? 'border-indigo-600 text-indigo-600'
                      : 'border-transparent text-gray-700 hover:text-gray-800',
                    'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out',
                  ]"
                  >{{ category.name }}</PopoverButton
                >
              </div>

              <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0"
                enter-to-class="opacity-100"
                leave-active-class="transition ease-in duration-150"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
              >
                <PopoverPanel
                  class="absolute z-10 inset-x-0 top-full text-sm text-gray-500"
                >
                  <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                  <div
                    class="absolute inset-0 top-1/2 bg-white shadow"
                    aria-hidden="true"
                  />

                  <div class="relative bg-white">
                    <div class="mx-auto max-w-7xl px-8">
                      <div class="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                        <div class="col-start-2 grid grid-cols-2 gap-x-8">
                          <div
                            v-for="item in category.featured"
                            :key="item.name"
                            class="group relative text-base sm:text-sm"
                          >
                            <div
                              class="
                                aspect-w-1 aspect-h-1
                                overflow-hidden
                                rounded-lg
                                bg-gray-100
                                group-hover:opacity-75
                              "
                            >
                              <img
                                :src="item.imageSrc"
                                :alt="item.imageAlt"
                                class="object-cover object-center"
                              />
                            </div>
                            <NuxtLink
                              :to="item.href"
                              class="mt-6 block font-medium text-gray-900"
                            >
                              <span
                                class="absolute inset-0 z-10"
                                aria-hidden="true"
                              />
                              {{ item.name }}
                            </NuxtLink>
                            <p aria-hidden="true" class="mt-1">Shop now</p>
                          </div>
                        </div>
                        <div
                          class="
                            row-start-1
                            grid grid-cols-3
                            gap-y-10 gap-x-8
                            text-sm
                          "
                        >
                          <div
                            v-for="section in category.sections"
                            :key="section.name"
                          >
                            <p
                              :id="`${section.name}-heading`"
                              class="font-medium text-gray-900"
                            >
                              {{ section.name }}
                            </p>
                            <ul
                              role="list"
                              :aria-labelledby="`${section.name}-heading`"
                              class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                            >
                              <li
                                v-for="item in section.items"
                                :key="item.name"
                                class="flex"
                              >
                                <NuxtLink
                                  :to="item.href"
                                  class="hover:text-gray-800"
                                >
                                  {{ item.name }}
                                </NuxtLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </PopoverPanel>
              </transition>
            </Popover>

            <NuxtLink
              v-for="page in navigation.pages"
              :key="page.name"
              :to="page.href"
              class="
                flex
                items-center
                text-sm
                font-medium
                text-gray-700
                hover:text-gray-800
              "
            >
              {{ page.name }}
            </NuxtLink>
          </div>
        </PopoverGroup>

        <div class="ml-auto flex items-center">
          <div
            class="
              hidden
              lg:flex lg:flex-1
              lg:items-center
              lg:justify-end
              lg:space-x-6
            "
          >
            <a
              href="#"
              class="text-sm font-medium text-gray-700 hover:text-gray-800"
              >Sign in</a
            >
            <span class="h-6 w-px bg-gray-200" aria-hidden="true" />
            <a
              href="#"
              class="text-sm font-medium text-gray-700 hover:text-gray-800"
              >Create account</a
            >
          </div>

          <div class="hidden lg:ml-8 lg:flex">
            <a
              href="#"
              class="flex items-center text-gray-700 hover:text-gray-800"
            >
              <img
                src="https://tailwindui.com/img/flags/flag-canada.svg"
                alt=""
                class="block h-auto w-5 flex-shrink-0"
              />
              <span class="ml-3 block text-sm font-medium">CAD</span>
              <span class="sr-only">, change currency</span>
            </a>
          </div>

          <!-- Search -->
          <div class="flex lg:ml-6">
            <a href="#" class="p-2 text-gray-400 hover:text-gray-500">
              <span class="sr-only">Search</span>
              <MagnifyingGlassIcon class="h-6 w-6" aria-hidden="true" />
            </a>
          </div>

          <Teleport to="body">
            <StoreCart v-model="viewCart" />
          </Teleport>

          <!-- Cart -->
          <div class="ml-4 flow-root lg:ml-6">
            <button
              aria-label="View bag"
              @click="viewCart = true"
              class="group -m-2 flex items-center p-2"
            >
              <ShoppingBagIcon
                class="
                  h-6
                  w-6
                  flex-shrink-0
                  text-gray-400
                  group-hover:text-gray-500
                "
                aria-hidden="true"
              />
              <span
                class="
                  ml-2
                  text-sm
                  font-medium
                  text-gray-700
                  group-hover:text-gray-800
                "
                >0</span
              >
              <span class="sr-only">items in cart, view bag</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
