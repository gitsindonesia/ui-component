<script setup>
import {Menu, MenuButton, MenuItems, MenuItem} from '@headlessui/vue';
import {ref, toRefs, computed} from 'vue';
import DropdownItem from './DropdownItem.vue';

const props = defineProps({
  modelValue: {
    type: Object,
    default: null,
  },
  items: {
    type: Array,
    default: () => [],
  },
  right: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: 'Options',
  },
  selectable: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue', 'selected']);

const {modelValue, items, right, selectable} = toRefs(props);

const selected = ref(modelValue.value);

const handleSelect = (item) => {
  if (item.disabled) return;

  selected.value = item;
  emit('update:modelValue', item);
  emit('selected', item);
};

const classes = computed(() =>
  right.value ? 'right-0 origin-top-right' : 'left-0 origin-top-left',
);
</script>

<template>
  <div class="relative inline-block text-left">
    <Menu>
      <span class="rounded-md shadow-sm">
        <MenuButton
          class="
            inline-flex
            justify-center
            w-full
            px-4
            py-2
            text-sm
            font-medium
            leading-5
            text-gray-700
            transition
            duration-150
            ease-in-out
            bg-white
            border border-gray-300
            rounded-md
            hover:text-gray-600
            focus:outline-none focus:border-blue-300 focus:shadow-outline-blue
            active:bg-gray-50 active:text-gray-800
          "
        >
          <span v-if="selectable">
            {{ selected ? selected.text : label }}
          </span>
          <span v-else>
            {{ label }}
          </span>
          <svg
            class="w-5 h-5 ml-2 -mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </MenuButton>
      </span>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-out"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="
            absolute
            z-20
            w-56
            mt-2
            bg-white
            border border-gray-200
            rounded-md
            shadow-lg
            outline-none
          "
          :class="classes"
        >
          <slot name="prepend"></slot>

          <slot name="default">
            <div class="py-1">
              <DropdownItem
                v-for="(item, index) in items"
                :key="index"
                @click.prevent="handleSelect(item)"
              >
                {{ item.text }}

                <svg
                  v-if="selectable && selected === item"
                  class="h-5 w-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </DropdownItem>
            </div>
          </slot>
          <slot name="append"></slot>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>
