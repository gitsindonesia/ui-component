<script setup lang="ts">
import {inject, onMounted, ref} from 'vue';
import SidebarMenu from './SidebarMenu.vue';
import {
  MenuAlt1Icon,
  LogoutIcon,
  UserIcon,
  CogIcon,
} from '@heroicons/vue/outline';

const title = inject('appTitle') || 'GITS';
const subtitle = inject('appSubtitle') || 'Panel';
const authUser = inject('authUser');
const logoutPath = inject('logoutPath');

const isCollapsed = ref(false);

const toggleMenu = () => {
  isCollapsed.value = !isCollapsed.value;
};

const resizeHandler = () => {
  if (window.innerWidth <= 600) {
    toggleMenu();
  }
};

onMounted(() => {
  resizeHandler();
});

window.addEventListener('resize', resizeHandler);
</script>

<template>
  <div class="flex flex-row h-screen bg-blue-800">
    <div
      class="
        bg-blue-800
        z-10
        h-screen
        top-0
        left-0
        py-2
        flex-none flex flex-col
        justify-between
        transition-all
        duration-300
      "
      :class="isCollapsed ? 'collapsed' : 'normal'"
    >
      <div class="flex-grow">
        <div
          class="text-xl flex items-center font-semibold mb-4 px-6 relative"
          :class="isCollapsed ? 'justify-center' : 'justify-between'"
        >
          <div class="flex-none">
            <slot name="title" :title="title" :subtitle="subtitle">
              <span class="text-gray-50">{{ title }}</span>
              <span
                v-if="!isCollapsed"
                class="text-gray-200 ml-2 text-lg font-normal"
                >{{ subtitle }}</span
              >
            </slot>
          </div>
          <span> </span>
        </div>

        <div class="sidebar-menu overflow-y-auto px-4">
          <SidebarMenu :is-collapsed="isCollapsed" />
        </div>
      </div>

      <div
        v-if="authUser"
        class="flex flex-none w-full items-center px-6 py-1 text-gray-200"
        :class="{
          'justify-center': isCollapsed,
          'justify-between': !isCollapsed,
        }"
      >
        <div class="flex items-center flex-none">
          <UserIcon class="w-5 h-5" />
          <span v-if="!isCollapsed" class="ml-2">{{ authUser }}</span>
        </div>
        <div v-if="!isCollapsed" class="flex-none">
          <button class="px-2 py-2 focus:outline-none">
            <CogIcon class="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
    <div
      class="
        flex-grow
        bg-gray-200
        rounded-tl-xl rounded-bl-xl
        min-h-screen
        overflow-y-auto
      "
    >
      <div class="flex justify-between mb-4">
        <button
          class="text-gray-200 ml-4 mt-3 text-gray-800 focus:outline-none"
          @click="toggleMenu"
        >
          <MenuAlt1Icon class="w-6 h-6" />
        </button>
        <router-link
          v-if="logoutPath"
          :to="logoutPath"
          class="text-gray-200 mr-4 mt-3 text-gray-800 focus:outline-none"
        >
          <LogoutIcon class="w-6 h-6" />
        </router-link>
      </div>
      <div class="px-4 py-2">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style scoped>
.normal {
  width: 250px;
}

.collapsed {
  width: 75px;
}

.sidebar-menu {
  max-height: calc(100vh - 120px);
}
.sidebar-menu::-webkit-scrollbar {
  width: 10px;
}

/* Track */
.sidebar-menu::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 6px;
}

/* Handle */
.sidebar-menu::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 6px;
}

/* Handle on hover */
.sidebar-menu::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
