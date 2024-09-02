<script setup lang="ts">
import {ref} from 'vue';
import Select from '../Select.vue';
import VIcon from '../../icon/src';

const users = [
  {
    id: 'benjamincanac',
    label: 'benjamincanac',
    href: 'https://github.com/benjamincanac',
    target: '_blank',
    avatar: {src: 'https://avatars.githubusercontent.com/u/739984?v=4'},
  },
  {
    id: 'Atinux',
    label: 'Atinux',
    href: 'https://github.com/Atinux',
    target: '_blank',
    avatar: {src: 'https://avatars.githubusercontent.com/u/904724?v=4'},
  },
  {
    id: 'smarroufin',
    label: 'smarroufin',
    href: 'https://github.com/smarroufin',
    target: '_blank',
    avatar: {src: 'https://avatars.githubusercontent.com/u/7547335?v=4'},
  },
  {
    id: 'nobody',
    label: 'Nobody',
    icon: 'ph:user-circle',
  },
];
const selected = ref(users[0]);
</script>

<template>
  <Select
    :items="users"
    v-model="selected"
    class="mb-4"
    label="Choose User"
    by="id"
    item-value="id"
    item-text="label"
  >
    <template #item="{selected, item}">
      <div
        class="px-4 py-3 flex gap-2 hover:bg-gray-100"
        :class="{
          'bg-gray-100': selected,
        }"
      >
        <VIcon v-if="item.icon" :name="item.icon" />
        <img
          v-if="item.avatar"
          :src="item.avatar?.src"
          :alt="item.label"
          class="w-6 h-6 rounded-full"
        />
        <div class="flex-grow text-sm">{{ item.label }}</div>
        <VIcon v-if="selected" name="ph:check" size="xs" />
      </div>
    </template>
    <template #selected="{modelValue: item}">
      <div v-if="item" class="flex gap-2">
        <VIcon v-if="item.icon" :name="item.icon" />
        <img
          v-if="item.avatar"
          :src="item.avatar?.src"
          :alt="item.label"
          class="w-6 h-6 rounded-full"
        />
        <div class="flex-grow text-sm">{{ item.label }}</div>
      </div>
    </template>
  </Select>
</template>
