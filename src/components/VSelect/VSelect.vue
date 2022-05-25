<script setup lang="ts">
import {computed, PropType, ref, toRefs, watch} from 'vue';
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue';
import {CheckIcon, ChevronDownIcon, XIcon} from '@heroicons/vue/solid';
import {getBgColor, getTextColor} from '../../utils';
import VInput from '../VInput/VInput.vue';
import {ErrorMessage} from 'vee-validate';

type SelectItem = {
  text: string;
  value: any;

  [x: string]: any;
};

type Val = string | number | boolean | Record<string, any> | undefined;

const props = defineProps({
  value: {
    type: [Object, String, Number, Boolean] as PropType<Val>,
    default: '',
  },
  modelValue: {
    type: [Object, String, Number, Boolean] as PropType<Val>,
    default: '',
  },
  items: {
    type: Array as PropType<SelectItem[]>,
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
  itemText: {
    type: String,
    default: 'text',
  },
  itemValue: {
    type: String,
    default: 'value',
  },
  name: {
    type: String,
    default: '',
  },
  error: {
    type: Boolean,
    default: false,
  },
  errorMessages: {
    type: Array,
    default: () => [],
  },
  returnObject: {
    type: Boolean,
    default: false,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  clearText: {
    type: String,
    default: 'Clear',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  readonly: {
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
  itemText,
  itemValue,
  value,
  returnObject,
} = toRefs(props);

const emit = defineEmits(['update:modelValue', 'update:value', 'search']);

const bgColor = getBgColor(color.value);
const textColor = getTextColor(color.value);

const selectedItem = ref<Val>(modelValue.value || value.value);
const search = ref('');

const filteredItems = computed(() => {
  if (searchable.value) {
    return items.value.filter((item) => item.text.includes(search.value));
  } else {
    return items.value;
  }
});

const setValue = (val: Val) => {
  if (returnObject.value) {
    selectedItem.value = val;
  } else {
    const newVal = val || modelValue.value || value.value;

    if (['string', 'number', 'boolean'].includes(typeof newVal)) {
      const itemVal = filteredItems.value.find((item) => {
        return item[itemValue.value] === newVal;
      });
      if (itemVal) {
        selectedItem.value = itemVal;
      }
    } else {
      selectedItem.value = val;
    }
  }
};

watch(selectedItem, (item) => {
  const val = returnObject.value
    ? item
    : (item as SelectItem)?.[itemValue.value];
  emit('update:modelValue', val);
  emit('update:value', val);
});

watch(
  modelValue,
  (val) => {
    setValue(val);
  },
  {immediate: true},
);

watch(
  value,
  (val) => {
    setValue(val);
  },
  {immediate: true},
);

watch(search, (val) => {
  emit('search', val);
});

const label = computed(() => {
  return (
    (selectedItem.value as SelectItem)?.[itemText.value] || placeholder.value
  );
});

const clear = () => (selectedItem.value = '');
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
            px-4
            h-10
            text-left
            bg-white
            rounded-md
            shadow-sm
            cursor-default
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-opacity-75
            focus-visible:ring-white
            focus-visible:ring-offset-primary-300
            focus-visible:ring-offset-2
            focus-visible:border-primary-600
            sm:text-sm
            flex
            items-center
            gap-1
          "
          :class="[btnClass, error ? 'border-error-600' : '']"
          :disabled="disabled"
        >
          <div class="block flex-grow w-full truncate mr-2">
              {{ label }}
          </div>
          <v-tooltip v-if="selectedItem && clearable">
            <template #activator="{on}">
              <span v-on="on" @click="clear" class="w-auto cursor-pointer">
                <XIcon
                  class="w-5 h-5 text-gray-400 hover:text-gray-500"
                  aria-hidden="true"
                />
              </span>
            </template>
            <span> {{ clearText }} </span>
          </v-tooltip>
          <span class="w-auto">
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
              z-10
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
              v-for="(item, index) in filteredItems"
              v-slot="{active, selected}"
              :key="index"
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
                    selected ? 'font-medium' : 'font-normal',
                    'block truncate',
                  ]"
                >
                  {{ item?.[itemText] }}
                </span>
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

    <ErrorMessage
      v-if="errorMessages.length"
      class="text-error-600 text-sm"
      :name="name"
    />
  </div>
</template>
