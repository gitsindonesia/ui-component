<script setup lang="ts">
import {computed, toRefs} from 'vue';
import {Popover, PopoverButton, PopoverPanel} from '@headlessui/vue';
import type {PropType} from 'vue';
import type {DropdownItem} from './VDropdown';

const props = defineProps({
  items: {
    type: Array as PropType<DropdownItem[]>,
    default: () => [],
  },
  right: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits([]);

const {items, right} = toRefs(props);

const placementClass = computed(() => (props.right ? 'right-0' : 'left-0'));
</script>

<template>
  <Popover v-slot="{open}" class="relative">
    <PopoverButton
      :class="open ? '' : 'text-opacity-90'"
      class="
        inline-flex
        items-center
        px-3
        text-base
        font-medium
        rounded-md
        group
        hover:text-opacity-100
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-white
        focus-visible:ring-opacity-75
      "
    >
      <slot />
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
        class="absolute z-10 w-[300px] px-4 mt-3 origin-right"
        :class="placementClass"
      >
        <div
          class="
            overflow-hidden
            rounded-lg
            shadow-lg
            ring-1 ring-black ring-opacity-5
            bg-white
          "
        >
          <slot name="prepend" />
          <slot name="items" :items="items">
            <div
              v-if="items.length"
              class="relative grid gap-y-1 bg-white px-2 py-2"
            >
              <a
                v-for="item in items"
                :key="item.name"
                :href="item.href"
                class="
                  flex
                  items-center
                  px-3
                  py-2
                  transition
                  duration-150
                  ease-in-out
                  rounded-lg
                  hover:bg-primary hover:bg-opacity-10
                  focus:outline-none
                  focus-visible:ring
                  focus-visible:ring-orange-600
                  focus-visible:ring-opacity-50
                "
              >
                <div
                  v-if="item.icon"
                  class="
                    flex
                    items-center
                    justify-center
                    flex-shrink-0
                    w-10
                    h-10
                    text-white
                    sm:h-12 sm:w-12
                    mr-4
                  "
                >
                  <div v-html="item.icon"></div>
                </div>
                <div class="">
                  <p class="text-sm font-bold text-gray-900">
                    {{ item.name }}
                  </p>
                  <p class="text-sm text-gray-600">
                    {{ item.description }}
                  </p>
                </div>
              </a>
            </div>
          </slot>
          <slot name="append" />
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<style scoped></style>
