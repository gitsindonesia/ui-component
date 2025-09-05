<script setup lang="ts">
import VDataTable from '../VDataTable.vue';
import {Checkbox} from '@morpheme/forms';
import Icon from '@morpheme/icon';
import {items, headers} from './data';
</script>

<template>
  <VDataTable :headers="headers" :items="items">
    <template
      #header="{
        headerClass,
        headers,
        sortMap,
        selectable,
        disableSorting,
        handleSort,
        getThClass,
        selectAll,
      }"
    >
      <thead class="v-table-thead" :class="headerClass">
        <tr class="v-table-tr">
          <template v-for="(header, hIndex) in headers" :key="header.value">
            <th
              scope="col"
              class="v-table-th group"
              :class="[getThClass(header), header.class]"
              :width="header.width"
            >
              <slot
                v-if="selectable && header.value === 'selected'"
                name="header.selectable"
                :selectAll="selectAll"
              >
                <Checkbox :model-value="selectAll" />
              </slot>
              <slot
                v-else
                :name="`header.${header.value}`"
                :header="header"
                :index="hIndex"
              >
                <button
                  v-if="!disableSorting && header.sortable"
                  role="button"
                  aria-label="Sort"
                  type="button"
                  class="v-table-sort-button"
                  :class="[
                    header.align
                      ? `justify-${header.align}`
                      : 'justify-between',
                  ]"
                  @click="handleSort(header)"
                >
                  <span class="v-table-sort-header-text">
                    {{ header.text }}
                  </span>
                  <Icon
                    name="heroicons:chevron-down"
                    v-if="sortMap.get(header.value) === 'desc'"
                    class="v-table-sort-icon"
                  />
                  <Icon
                    name="heroicons:chevron-up"
                    v-if="sortMap.get(header.value) === 'asc'"
                    class="v-table-sort-icon"
                  />
                </button>
                <span v-else class="v-table-header-text">
                  {{ header.text }}
                </span>
              </slot>
            </th>
          </template>
        </tr>
      </thead>
    </template>
  </VDataTable>
</template>
