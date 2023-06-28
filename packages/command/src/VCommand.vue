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
  modelValue?: Record<string, any>;
  items?: Record<string, any>[];
  placeholder?: string;
  icon?: string;
  iconSize?: string;
  iconClass?: string;
  searchBy?: string;
  emptyText?: string;
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [],
  placeholder: 'Search...',
  icon: 'ri:search-line',
  searchBy: 'text',
  emptyText: 'No results found',
});

const emit =
  defineEmits<{
    (e: 'update:modelValue', value: Record<string, any> | undefined): void;
  }>();

const isOpen = ref(false);
const selected = ref(props.modelValue);
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
    selected.value = val;
  },
);

watch(selected, (val) => {
  emit('update:modelValue', val);
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
    <Combobox v-model="selected">
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
      <ComboboxOptions class="v-command-options">
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
