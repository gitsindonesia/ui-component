<script setup lang="ts">
import VDataTable from '../VDataTable.vue';
import {Checkbox} from '../../forms/src';
import {items, headers} from './data';
</script>

<template>
  <VDataTable :headers="headers" :items="items">
    <template
      #body="{
        bodyClass,
        items: paginatedItems,
        loading,
        headers,
        noDataText,
        striped,
        hover,
        trClass,
        selected,
        get,
        handleRowClick,
        getTdClass,
        loadingText,
        stripedClass,
        hoverClass,
        tdClass,
        selectable,
        start,
      }"
    >
      <tbody class="v-table-tbody CUSTOM_BODY_CLASS" :class="bodyClass">
        <template v-if="paginatedItems.length < 1 && !loading">
          <slot name="empty">
            <tr class="v-table-tr group">
              <td :colspan="headers.length" class="v-table-td">
                {{ noDataText }}
              </td>
            </tr>
          </slot>
        </template>
        <template v-if="loading">
          <slot name="loading">
            <tr class="v-table-tr group">
              <td :colspan="headers.length" class="v-table-td">
                <v-spinner color="primary" class="mr-1 v-table-spinner" />
                {{ loadingText }}
              </td>
            </tr>
          </slot>
        </template>
        <template
          v-else
          v-for="(item, index) in paginatedItems"
          :key="`item-${index}`"
        >
          <slot
            name="item"
            v-bind="{
              item,
              index,
              headers,
              striped,
              hover,
              trClass,
              selected,
              get,
              handleRowClick,
              getTdClass,
            }"
          >
            <tr
              class="group v-table-tr"
              :class="{
                [stripedClass]: striped,
                [hoverClass]: hover,
                [trClass]: Boolean(trClass),
              }"
              @click="handleRowClick(item, index)"
            >
              <td
                v-for="header in headers"
                :key="`header-${header.value}`"
                class="v-table-td"
                :class="[getTdClass(header), tdClass, header?.tdClass || '']"
              >
                <slot
                  v-if="selectable && header.value === 'selected'"
                  name="item.selected"
                  :selected="selected"
                  :item="item"
                >
                  <Checkbox
                    :model-value="selected"
                    wrapper-class="v-table-checkbox"
                    :value="(item as any)"
                  />
                </slot>
                <slot
                  v-else-if="header.value === 'index'"
                  name="item.index"
                  :index="index"
                  :item="item"
                >
                  {{ start + index }}
                </slot>
                <slot
                  v-else
                  :name="`item.${header.value}`"
                  :item="item"
                  :index="index"
                >
                  {{ get(item, header.value) }}
                </slot>
              </td>
            </tr>
          </slot>
        </template>
      </tbody>
    </template>
  </VDataTable>
</template>
