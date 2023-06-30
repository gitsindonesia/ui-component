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
import {
  List as VList,
  ListItem as VListItem,
  ListItemDivider as VListItemDivider,
  ListItemHeader as VListItemHeader,
} from '@morpheme/list';

interface CommandItem extends Record<string, any> {
  value?: string;
  icon?: string;
  text?: string;
  label?: string;
  divider?: boolean;
  items?: CommandItem[];
}

interface Props {
  modelValue?: boolean;
  selected?: CommandItem;
  items?: CommandItem[];
  placeholder?: string;
  icon?: string;
  iconSize?: string;
  iconClass?: string;
  searchBy?: string;
  emptyText?: string;
  listProps?: InstanceType<typeof VList>['$props'];
  listItemProps?: InstanceType<typeof VListItem>['$props'];
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
    (e: 'update:selected', value: CommandItem | undefined): void;
  }>();

const isOpen = ref(props.modelValue);
const selectedValue = ref(props.selected);
const query = ref('');

function searchItem(item: CommandItem, searchText: string) {
  return item[props.searchBy].toLowerCase().includes(searchText.toLowerCase());
}

// TODO: improve filtering
function filterItems(items: CommandItem[], searchText: string) {
  const filteredItems = [];

  for (const item of items) {
    if (item.label) {
      const filteredSubItems = item.items?.filter((subItem) => {
        return searchItem(subItem, searchText);
      });

      if (filteredSubItems && filteredSubItems.length > 0) {
        filteredItems.push({
          label: item.label,
          items: filteredSubItems,
        });
      }
    } else if (item.divider) {
      continue;
    } else if (searchItem(item, searchText)) {
      filteredItems.push(item);
    }
  }

  return filteredItems;
}

const filteredItems = computed(() =>
  query.value === '' ? props.items : filterItems(props.items, query.value),
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
  query.value = '';
});

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
    event.preventDefault();
    isOpen.value = !isOpen.value;
  }
}

function onClose() {
  query.value = '';
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown);
});
</script>

<template>
  <VModal
    v-model="isOpen"
    hide-footer
    hide-header
    body-class="v-command-body"
    @close="onClose"
  >
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
        <VList flush v-bind="listProps">
          <slot
            name="empty"
            v-if="filteredItems.length === 0"
            :items="filteredItems"
          >
            <VListItem> {{ emptyText }} </VListItem>
          </slot>
          <slot name="prepend" />
          <slot v-bind="{items: filteredItems}">
            <template v-for="item in filteredItems" :key="item.id">
              <VListItemDivider v-if="item.divider" />
              <template v-else-if="item.label">
                <VListItemHeader>{{ item.label }}</VListItemHeader>
                <VList flush v-bind="listProps">
                  <ComboboxOption
                    v-for="child in item.items"
                    :key="child.id"
                    :value="child"
                    v-slot="{active, selected, disabled}"
                  >
                    <slot
                      name="item"
                      v-bind="{active, selected, item: child, disabled}"
                    >
                      <VListItem
                        :class="{
                          'v-list-item--hover': active,
                        }"
                        :disabled="disabled"
                        :prepend-icon="child.icon"
                        :hide-prepend="!child.icon"
                        v-bind="listItemProps"
                      >
                        {{ child.text }}
                      </VListItem>
                    </slot>
                  </ComboboxOption>
                </VList>
              </template>

              <ComboboxOption
                v-else
                :value="item"
                v-slot="{active, selected, disabled}"
              >
                <slot name="item" v-bind="{active, selected, item, disabled}">
                  <VListItem
                    :class="{
                      'v-list-item--hover': active,
                    }"
                    :disabled="disabled"
                    :prepend-icon="item.icon"
                    :hide-prepend="!item.icon"
                    v-bind="listItemProps"
                  >
                    {{ item.text }}
                  </VListItem>
                </slot>
              </ComboboxOption>
            </template>
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
