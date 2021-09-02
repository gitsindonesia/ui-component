<script setup lang="ts">
import {computed, ref, toRefs, watch} from 'vue';
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue';
import {CheckIcon, ChevronDownIcon} from '@heroicons/vue/solid';
import {getBgColor, getTextColor} from '../../utils';
import VInput from '../VInput/VInput.vue';

interface SelectItem {
  text: string;
  value: any;
}

const props = defineProps({
  modelValue: {
    type: Object,
    default: null,
  },
  items: {
    type: Array,
    default: () => [],
  },
  color: {
    type: String,
    default: 'primary',
  },
  placeholder: {
    type: String,
    default: 'Select',
  },
  searchable: {
    type: Boolean,
    default: false,
  },
  hideCheckIcon: {
    type: Boolean,
    default: false,
  },
  btnClass: {
    type: String,
    default: '',
  },
  top: {
    type: Boolean,
    default: false,
  },
});

const {
  modelValue,
  color,
  items,
  placeholder,
  searchable,
  hideCheckIcon,
  btnClass,
  top,
} = toRefs(props);

const emit = defineEmits(['update:modelValue', 'search']);

const bgColor = getBgColor(color.value);
const textColor = getTextColor(color.value);

const selectedItem = ref(modelValue.value);
const search = ref('');

const filteredItems = computed(() => {
  if (searchable.value) {
    return items.value.filter((item) => item.text.includes(search.value));
  } else {
    return items.value;
  }
});

watch(selectedItem, (item) => {
  emit('update:modelValue', item);
});

watch(modelValue, (val) => {
  selectedItem.value = val;
});

watch(search, (val) => {
  emit('search', val);
});
</script>

<template>
  <div class="">
    <Listbox v-model="selectedItem">
      <div class="relative">
        <ListboxButton
          class="
            border
            relative
            w-full
            py-2
            pl-3
            pr-10
            text-left
            bg-white
            rounded-lg
            shadow-sm
            cursor-default
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-opacity-75
            focus-visible:ring-white
            focus-visible:ring-offset-orange-300
            focus-visible:ring-offset-2
            focus-visible:border-indigo-500
            sm:text-sm
          "
          :class="[btnClass]"
        >
          <span class="block truncate">
            {{ selectedItem?.text || placeholder }}
          </span>
          <span
            class="
              absolute
              inset-y-0
              right-0
              flex
              items-center
              pr-2
              pointer-events-none
            "
          >
            <ChevronDownIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
          </span>
        </ListboxButton>

        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="
              absolute
              w-full
              py-1
              mt-1
              overflow-auto
              text-base
              bg-white
              rounded-md
              shadow-lg
              max-h-60
              ring-1 ring-black ring-opacity-5
              focus:outline-none
              sm:text-sm
            "
            :class="top ? 'bottom-10' : ''"
          >
            <div v-if="searchable" class="px-2 border-b py-2">
              <v-input v-model="search" size="sm" placeholder="Search..." />
            </div>
            <div
              v-if="searchable && !filteredItems.length"
              class="px-4 pb-2 pt-3"
            >
              No results
            </div>
            <ListboxOption
              v-for="item in filteredItems"
              v-slot="{active, selected}"
              :key="item.text"
              :value="item"
              as="template"
            >
              <li
                class="group"
                :class="[
                  active ? `text-white ${bgColor}` : 'text-gray-900',
                  'cursor-default select-none relative py-2 pr-4',
                  !hideCheckIcon ? 'pl-10' : 'pl-4',
                ]"
              >
                <span
                  :class="[
                    selected ? 'font-medium ' : 'font-normal',
                    'block truncate',
                  ]"
                  >{{ item.text }}</span
                >
                <span
                  v-if="selected && !hideCheckIcon"
                  class="absolute inset-y-0 left-0 flex items-center pl-3"
                  :class="[active ? 'text-white' : 'text-gray-900']"
                >
                  <CheckIcon class="w-5 h-5" aria-hidden="true" />
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>
