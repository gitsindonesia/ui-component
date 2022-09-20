<script setup lang="ts">
import {PropType, toRefs} from 'vue';

const props = defineProps({
  isCollapsed: {
    type: Boolean,
    default: false,
  },
  menus: {
    type: Array as PropType<Record<string, any>>,
    default: () => [],
  },
});

const {isCollapsed, menus} = toRefs(props);
</script>

<template>
  <template v-for="(menu, idx) in menus" :key="idx">
    <template v-if="menu.children && menu.children.length > 0">
      <div
        :key="idx"
        class="
          w-full
          block
          px-2
          py-2
          mt-3
          uppercase
          font-medium
          rounded
          text-xs text-gray-300
        "
        :class="{hidden: isCollapsed}"
      >
        {{ menu.title }}
      </div>

      <template v-for="child in menu.children" :key="child.title">
        <div
          v-if="child.children && child.children.length > 0"
          class="
            w-full
            block
            px-2
            py-2
            uppercase
            font-medium
            mt-3
            rounded
            text-xs text-gray-300
          "
          :class="{hidden: isCollapsed}"
        >
          {{ child.title }}
        </div>
        <router-link
          v-else
          :to="child.to"
          class="
            text-gray-300
            flex
            hover:bg-blue-500
            hover:text-gray-50
            w-full
            px-2
            py-2
            rounded
            text-sm
            transition
            duration-500
          "
          :class="{'justify-center items-center rounded-lg': isCollapsed}"
        >
          <component
            :is="child.icon"
            v-if="child.icon"
            class="w-5 h-5"
          ></component>
          <span v-if="!isCollapsed" class="ml-2">{{ child.title }}</span>
        </router-link>
      </template>
    </template>

    <router-link
      v-else
      :to="menu.to"
      class="
        text-gray-300
        flex
        hover:bg-blue-500
        hover:text-gray-50
        w-full
        px-2
        py-2
        rounded
        text-sm
        transition
        duration-500
      "
      :class="{'justify-center items-center rounded-lg': isCollapsed}"
    >
      <component :is="menu.icon" v-if="menu.icon" class="w-5 h-5"></component>
      <span v-if="!isCollapsed" class="ml-2">{{ menu.title }}</span>
    </router-link>
  </template>
</template>

<style scoped>
.router-link-active.router-link-exact-active {
  @apply bg-blue-500 text-gray-50;
}
</style>
