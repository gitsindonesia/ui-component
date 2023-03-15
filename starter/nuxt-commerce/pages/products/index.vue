<script setup lang="ts">
import {ref} from 'vue';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/vue';

definePageMeta({
  layout: 'store',
});

const sortBy = ref('Most Popular');

const sortOptions = ref([
  {name: 'Most Popular', href: '#', current: true},
  {name: 'Best Rating', href: '#', current: false},
  {name: 'Newest', href: '#', current: false},
  {name: 'Price: Low to High', href: '#', current: false},
  {name: 'Price: High to Low', href: '#', current: false},
]);

const subCategories = [
  {name: 'Totes', href: '#'},
  {name: 'Backpacks', href: '#'},
  {name: 'Travel Bags', href: '#'},
  {name: 'Hip Bags', href: '#'},
  {name: 'Laptop Sleeves', href: '#'},
];

const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      {value: 'white', label: 'White', checked: false},
      {value: 'beige', label: 'Beige', checked: false},
      {value: 'blue', label: 'Blue', checked: true},
      {value: 'brown', label: 'Brown', checked: false},
      {value: 'green', label: 'Green', checked: false},
      {value: 'purple', label: 'Purple', checked: false},
    ],
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      {value: 'new-arrivals', label: 'New Arrivals', checked: false},
      {value: 'sale', label: 'Sale', checked: false},
      {value: 'travel', label: 'Travel', checked: true},
      {value: 'organization', label: 'Organization', checked: false},
      {value: 'accessories', label: 'Accessories', checked: false},
    ],
  },
  {
    id: 'size',
    name: 'Size',
    options: [
      {value: '2l', label: '2L', checked: false},
      {value: '6l', label: '6L', checked: false},
      {value: '12l', label: '12L', checked: false},
      {value: '18l', label: '18L', checked: false},
      {value: '20l', label: '20L', checked: false},
      {value: '40l', label: '40L', checked: true},
    ],
  },
];

const mobileFiltersOpen = useMobileFilterDialog();

const {data} = await useAsyncData(() => $api('/products'));
const products = computed(() => {
  return mapProducts((data.value as any).products);
});
</script>

<template>
  <div class="bg-white">
    <div>
      <!-- Mobile filter dialog -->
      <StoreMobileFilterDialog
        :filters="filters"
        :sub-categories="subCategories"
      />

      <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          class="
            flex
            items-baseline
            justify-between
            border-b border-gray-200
            pt-8
            pb-6
          "
        >
          <h1 class="text-4xl font-bold tracking-tight text-gray-900">
            New Arrivals
          </h1>

          <div class="flex items-center">
            <Menu as="div" class="relative inline-block text-left">
              <div>
                <MenuButton
                  class="
                    group
                    inline-flex
                    justify-center
                    text-sm
                    font-medium
                    text-gray-700
                    hover:text-gray-900
                  "
                >
                  Sort
                  <VIcon
                    name="heroicons:chevron-down"
                    class="
                      -mr-1
                      ml-1
                      h-5
                      w-5
                      flex-shrink-0
                      text-gray-400
                      group-hover:text-gray-500
                    "
                    aria-hidden="true"
                  />
                </MenuButton>
              </div>

              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="
                    absolute
                    right-0
                    z-10
                    mt-2
                    w-40
                    origin-top-right
                    rounded-md
                    bg-white
                    shadow-2xl
                    ring-1 ring-black ring-opacity-5
                    focus:outline-none
                  "
                >
                  <div class="py-1">
                    <MenuItem
                      @click="sortBy = option.name"
                      v-for="option in sortOptions"
                      :key="option.name"
                      v-slot="{active}"
                    >
                      <a
                        :href="option.href"
                        :class="[
                          sortBy === option.name
                            ? 'font-medium text-gray-900'
                            : 'text-gray-500',
                          active ? 'bg-gray-100' : '',
                          'block px-4 py-2 text-sm',
                        ]"
                      >
                        {{ option.name }}
                      </a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </transition>
            </Menu>

            <!-- <button
              type="button"
              class="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
            >
              <span class="sr-only">View grid</span>
              <Squares2X2Icon class="h-5 w-5" aria-hidden="true" />
            </button>
             -->
            <button
              type="button"
              class="
                -m-2
                ml-4
                p-2
                text-gray-400
                hover:text-gray-500
                sm:ml-6
                lg:hidden
              "
              @click="mobileFiltersOpen = true"
            >
              <span class="sr-only">Filters</span>
              <VIcon
                name="heroicons:funnel"
                class="h-5 w-5"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>

        <section aria-labelledby="products-heading" class="pt-6 pb-24">
          <h2 id="products-heading" class="sr-only">Products</h2>

          <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            <!-- Filters -->
            <form class="hidden lg:block">
              <h3 class="sr-only">Categories</h3>
              <ul
                role="list"
                class="
                  space-y-4
                  border-b border-gray-200
                  pb-6
                  text-sm
                  font-medium
                  text-gray-900
                "
              >
                <li v-for="category in subCategories" :key="category.name">
                  <a :href="category.href">{{ category.name }}</a>
                </li>
              </ul>

              <Disclosure
                as="div"
                v-for="section in filters"
                :key="section.id"
                class="border-b border-gray-200 py-6"
                v-slot="{open}"
              >
                <h3 class="-my-3 flow-root">
                  <DisclosureButton
                    class="
                      flex
                      w-full
                      items-center
                      justify-between
                      bg-white
                      py-3
                      text-sm text-gray-400
                      hover:text-gray-500
                    "
                  >
                    <span class="font-medium text-gray-900">{{
                      section.name
                    }}</span>
                    <span class="ml-6 flex items-center">
                      <VIcon
                        name="heroicons:plus"
                        v-if="!open"
                        class="h-5 w-5"
                        aria-hidden="true"
                      />
                      <VIcon
                        name="heroicons:minus"
                        v-else
                        class="h-5 w-5"
                        aria-hidden="true"
                      />
                    </span>
                  </DisclosureButton>
                </h3>
                <DisclosurePanel class="pt-6">
                  <div class="space-y-4">
                    <div
                      v-for="(option, optionIdx) in section.options"
                      :key="option.value"
                      class="flex items-center"
                    >
                      <input
                        :id="`filter-${section.id}-${optionIdx}`"
                        :name="`${section.id}[]`"
                        :value="option.value"
                        type="checkbox"
                        :checked="option.checked"
                        class="
                          h-4
                          w-4
                          rounded
                          border-gray-300
                          text-indigo-600
                          focus:ring-indigo-500
                        "
                      />
                      <label
                        :for="`filter-${section.id}-${optionIdx}`"
                        class="ml-3 text-sm text-gray-600"
                        >{{ option.label }}</label
                      >
                    </div>
                  </div>
                </DisclosurePanel>
              </Disclosure>
            </form>

            <!-- Product grid -->
            <div class="lg:col-span-3">
              <ProductGrid :products="products!" />
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>
