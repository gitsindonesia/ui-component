<script setup lang="ts">
import {
  BellIcon,
  MenuIcon,
  ChevronDownIcon,
  LogoutIcon,
} from '@heroicons/vue/outline';
import {UserCircleIcon} from '@heroicons/vue/solid';
import {computed, toRefs} from 'vue';
import VDropdown from '../VDropdown/VDropdown.vue';
import type {PropType} from 'vue';
import type {DropdownItem} from '../VDropdown/VDropdown';
import type {VAppBarUser} from './VAppBar';
import VBadge from '../VBadge/VBadge.vue';
import VBtn from '../VBtn/VBtn.vue';

const props = defineProps({
  menus: {
    type: Array as PropType<DropdownItem[]>,
    default: () => [],
  },
  notifications: {
    type: Array as PropType<DropdownItem[]>,
    default: () => [],
  },
  notificationCount: {
    type: [String, Number],
    default: 10,
  },
  mini: {
    type: Boolean,
    default: false,
  },
  fixed: {
    type: Boolean,
    default: false,
  },
  user: {
    type: Object as PropType<VAppBarUser>,
    default: null,
  },
  hideNotification: {
    type: Boolean,
    default: false,
  },
  leftMenu: {
    type: Boolean,
    default: false,
  },
  rightMenu: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(['toggleMenu', 'logout', 'viewAllNotifications']);

const {
  menus,
  notifications,
  mini,
  fixed,
  user,
  hideNotification,
  leftMenu,
  rightMenu,
} = toRefs(props);

const toggleMenu = () => emit('toggleMenu');
const logout = () => emit('logout');
const viewAllNotifications = () => emit('viewAllNotifications');

const userName = computed(() => user.value?.name);
const userRole = computed(() => user.value?.role);
</script>

<template>
  <div
    class="
      top-0
      shadow-md
      bg-white
      px-4
      py-3
      flex flex-initial
      items-center
      justify-between
      z-20
      transition-all
      duration-300
    "
    :class="[
      mini
        ? 'sm:ml-[85px] w-full sm:w-[calc(100%-85px)]'
        : 'sm:ml-[250px] w-full sm:w-[calc(100%-250px)]',
      fixed ? 'fixed' : 'relative',
    ]"
  >
    <slot v-if="leftMenu" name="leftMenu">
      <v-btn
        text
        icon
        dense
        class="!px-0 hover:bg-transparent hover:text-primary-2"
        no-ring
        @click="toggleMenu"
      >
        <MenuIcon class="w-6 h-6" />
      </v-btn>
    </slot>
    <div class="flex-grow">
      <slot />
    </div>

    <div class="flex items-center">
      <v-dropdown v-if="!hideNotification" :items="notifications" right>
        <template #prepend>
          <div class="px-5 pt-3 font-bold bg-white">Notifications</div>
        </template>

        <template #append>
          <div class="p-2">
            <v-btn
              small
              block
              text
              color="primary"
              @click="viewAllNotifications"
              >View All Notifications</v-btn
            >
          </div>
        </template>

        <v-btn class="relative" text dense large no-ring>
          <BellIcon class="w-6 h-6" />
          <v-badge
            color="primary"
            circle
            small
            class="absolute right-0 top-0"
            >{{ notificationCount }}</v-badge
          >
        </v-btn>
      </v-dropdown>

      <v-dropdown v-if="user" :items="menus" right>
        <!--        <template #append>-->
        <!--          <div class="p-2 bg-gray-50">-->
        <!--            <a-->
        <!--              href="#"-->
        <!--              class="flow-root px-4 py-3 transition duration-150 ease-in-out rounded-md hover:bg-lime-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"-->
        <!--              @click="logout"-->
        <!--            >-->
        <!--              <span class="flex items-center">-->
        <!--                <span class="text-sm font-medium text-gray-900"> Logout </span>-->
        <!--              </span>-->
        <!--            </a>-->
        <!--          </div>-->
        <!--        </template>-->

        <template #append>
          <div class="p-2">
            <v-btn
              small
              block
              text
              color="primary"
              class="!justify-start"
              @click="logout"
            >
              <LogoutIcon class="w-6 h-6 mr-2" />Logout
            </v-btn>
          </div>
        </template>

        <div class="flex items-center gap-x-4">
          <div v-if="user" class="w-auto hidden sm:inline">
            <div class="font-bold">{{ userName }}</div>
            <div class="whitespace-nowrap leading-none">{{ userRole }}</div>
          </div>
          <UserCircleIcon class="w-8 h-8 text-gray-700" />
        </div>
      </v-dropdown>
    </div>

    <slot v-if="rightMenu" name="leftRight">
      <v-btn
        text
        icon
        dense
        class="!px-0 hover:bg-transparent hover:text-primary-2"
        no-ring
        @click="toggleMenu"
      >
        <MenuIcon class="w-6 h-6" />
      </v-btn>
    </slot>
  </div>
</template>

<style scoped></style>
