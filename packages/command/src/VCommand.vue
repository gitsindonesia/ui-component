<script setup lang="ts">
import VModal from '@morpheme/modal';
import {computed, onMounted, onUnmounted, ref, watch} from 'vue';
import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
} from '@headlessui/vue';
import VIcon from '@morpheme/icon';
import {List as VList, ListItem as VListItem} from '@morpheme/list';

interface Props {
  modelValue?: boolean;
  selected?: Record<string, any>;
  items?: Record<string, any>[];
  placeholder?: string;
  icon?: string;
  iconSize?: string;
  iconClass?: string;
  searchBy?: string;
  emptyText?: string;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  items: () => [],
  placeholder: 'Search...',
  icon: 'ri:search-line',
  searchBy: 'text',
  emptyText: 'No results found',
});

const emit =
  defineEmits<{
    (e: 'update:modelValue', value: boolean): void;
    (e: 'update:selected', value: Record<string, any> | undefined): void;
  }>();

const isOpen = ref(props.modelValue);
const selectedValue = ref(props.selected);
const query = ref('');

const filteredItems = computed(() =>
  query.value === ''
    ? props.items
    : props.items.filter((item) =>
        item[props.searchBy]
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.value.toLowerCase().replace(/\s+/g, '')),
      ),
);

watch(
  () => props.modelValue,
  (val) => {
    isOpen.value = val;
  },
);

watch(isOpen, (val) => {
  emit('update:modelValue', val);
});

watch(
  () => props.selected,
  (val) => {
    selectedValue.value = val;
  },
);

watch(selectedValue, (val) => {
  emit('update:selected', val);
  isOpen.value = false;
});

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
    event.preventDefault();
    isOpen.value = !isOpen.value;
  }
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown);
});
</script>

<template>
  <VModal v-model="isOpen" hide-footer hide-header body-class="v-command-body">
    <Combobox v-model="selectedValue">
      <div class="v-input">
        <div class="v-input-wrapper">
          <div class="v-input-prepend">
            <slot name="icon">
              <VIcon :name="icon" :size="iconSize" :class="iconClass" />
            </slot>
          </div>
          <ComboboxInput
            @change="query = $event.target.value"
            class="v-input-control"
            :placeholder="placeholder"
          />
        </div>
      </div>
      <ComboboxOptions static class="v-command-options">
        <VList flush>
          <slot
            name="empty"
            v-if="filteredItems.length === 0"
            :items="filteredItems"
          >
            <VListItem> {{ emptyText }} </VListItem>
          </slot>
          <slot name="prepend" />
          <slot v-bind="{items: filteredItems}">
            <ComboboxOption
              v-for="item in filteredItems"
              :key="item.id"
              :value="item"
              v-slot="{active, selected, disabled}"
            >
              <slot name="item" v-bind="{active, selected, item, disabled}">
                <VListItem
                  v-bind="item"
                  :class="{
                    'v-list-item--hover': active,
                  }"
                >
                  {{ item.text }}
                </VListItem>
              </slot>
            </ComboboxOption>
          </slot>
          <slot name="append" />
        </VList>
      </ComboboxOptions>
    </Combobox>
  </VModal>
</template>

<style>
.v-command-body {
  margin-top: 0;
}
.v-command-options {
  margin-top: 1rem;
}
</style>
