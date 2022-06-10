<script setup lang="ts">
import {computed, ref, toRefs, watch, PropType} from 'vue';
import {UserCircleIcon, ChevronDownIcon} from '@heroicons/vue/solid';
import {MenuIcon} from '@heroicons/vue/outline';
import VBtn from '@gits-id/button';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuItem,
} from '@headlessui/vue';
import VMenus from '@gits-id/menus';
import VLogo from '@gits-id/logo';
import type {VNavbarMenuItem} from './types';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  small: {
    type: Boolean,
    default: false,
  },
  user: {
    type: Object,
    default: null,
  },
  menus: {
    type: Array as PropType<VNavbarMenuItem[]>,
    default: () => [],
  },
  loginPath: {
    type: String,
    default: '',
  },
  dense: {
    type: Boolean,
    default: false,
  },
  imgClass: {
    type: String,
    default: 'h-7',
  },
});

const {menus, modelValue, user, loginPath} = toRefs(props);

const emit = defineEmits(['update:modelValue', 'logout']);

const isOpen = ref(props.modelValue);

watch(
  modelValue,
  (value) => {
    isOpen.value = value;
  },
  {immediate: true},
);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
  emit('update:modelValue', isOpen.value);
};

const logout = () => {
  emit('logout');
};

const userFirstName = computed(() => user.value?.name?.split(' ')?.[0]);
</script>

<template>
  <div class="shadow-md" :class="[dense ? 'py-1' : 'py-2']">
    <!--    mobile -->
    <div class="container mx-auto sm:hidden">
      <div class="flex w-full items-center px-4 justify-between">
        <v-btn rounded icon text @click="toggleMenu">
          <MenuIcon class="w-6 h-6" />
        </v-btn>
        <slot name="logo">
          <v-logo :img-class="imgClass" />
        </slot>
        <div></div>
      </div>

      <transition
        enter-active-class="duration-150 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="duration-100 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div v-if="isOpen" class="shadow-lg mt-1 absolute bg-white w-full z-10">
          <nav class="my-3 block w-full" aria-label="Navigation">
            <template v-for="menu in menus" :key="menu.text">
              <Disclosure v-if="menu.children">
                <DisclosureButton
                  class="
                    flex
                    items-center
                    justify-between
                    w-full
                    text-left
                    font-semibold
                    py-2
                    px-4
                    text-gray-700
                    focus:outline-none
                  "
                >
                  <span>{{ menu.text }}</span>
                  <ChevronDownIcon class="w-5 h-5" />
                </DisclosureButton>
                <DisclosurePanel class="px-4 pb-2 text-gray-600">
                  <router-link
                    v-for="child in menu.children"
                    :key="child.text"
                    :to="child.to"
                    class="font-semibold block py-2 px-4 text-gray-700"
                  >
                    {{ child.text }}
                  </router-link>
                </DisclosurePanel>
              </Disclosure>

              <router-link
                v-else
                :to="menu.to"
                class="font-semibold block py-2 px-4"
              >
                {{ menu.text }}
              </router-link>
            </template>

            <div class="mt-2">
              <Disclosure v-if="user">
                <DisclosureButton
                  class="
                    flex
                    items-center
                    justify-between
                    w-full
                    px-4
                    py-2
                    text-left
                    font-semibold
                    block
                    py-2
                    px-4
                    text-gray-700
                    focus:outline-none
                  "
                >
                  <span class="inline-flex items-center">
                    <UserCircleIcon class="w-[30px] inline h-[30px] mr-2" />
                    <span>{{ user.name }}</span>
                  </span>
                  <ChevronDownIcon class="w-5 h-5" />
                </DisclosureButton>
                <DisclosurePanel class="px-4 pt-2">
                  <VBtn
                    color="primary"
                    outlined
                    dense
                    block
                    @click.prevent="logout"
                  >
                    Logout
                  </VBtn>
                </DisclosurePanel>
              </Disclosure>
              <div v-else class="px-4">
                <VBtn
                  :to="loginPath"
                  color="primary"
                  rounded
                  block
                  outlined
                  dense
                  solid
                  >Login</VBtn
                >
              </div>
            </div>
          </nav>
        </div>
      </transition>
    </div>

    <!--    desktop -->
    <div
      class="
        container
        mx-auto
        hidden
        sm:flex
        gap-x-4
        items-center
        px-4
        2xl:px-0
      "
    >
      <slot name="logo">
        <v-logo :img-class="imgClass" />
      </slot>

      <nav
        class="ml-4 flex items-center flex-grow"
        aria-label="Desktop Navigation"
      >
        <template v-for="menu in menus" :key="menu.text">
          <v-menus v-if="menu.children" :items="menu.children" :small="small">
            {{ menu.text }}
          </v-menus>
          <v-btn
            v-else
            v-bind="menu"
            :to="menu.to"
            :size="menu.small || small ? 'sm' : ''"
            :class="menu.small || small ? 'text-sm' : ''"
          >
            {{ menu.text }}
          </v-btn>
        </template>
      </nav>

      <Menu v-if="user" as="div" class="relative inline-block text-left mt-1">
        <v-menus right>
          <template #append>
            <div class="p-0.5">
              <MenuItem v-slot="{active}" @click.prevent="logout">
                <button
                  :class="[
                    active ? 'bg-primary-50 text-primary-500' : 'text-gray-700',
                    'group flex rounded-md items-center w-full px-3 py-2 font-semibold',
                    small ? 'text-sm' : '',
                  ]"
                >
                  Logout
                </button>
              </MenuItem>
            </div>
          </template>

          <template #icon>
            <ChevronDownIcon class="ml-2 w-5 h-5" />
          </template>

          <UserCircleIcon
            class="w-[30px] h-[30px] mr-2"
            :class="[small ? 'text-sm' : '']"
          />
          {{ userFirstName }}
        </v-menus>
      </Menu>
      <VBtn v-else :to="loginPath" color="primary" outlined solid wide rounded>
        Login
      </VBtn>
    </div>
  </div>
</template>
