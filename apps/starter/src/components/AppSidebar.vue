<script setup lang="ts">
import {ref, computed} from 'vue';
import {ChevronUpIcon} from '@heroicons/vue/outline';
import {QuestionMarkCircleIcon, UserCircleIcon} from '@heroicons/vue/solid';
import {useAuth} from '~/store/auth';
import {useRouter} from 'vue-router';
import {useCmsMenu} from '~/config';
import {useLayout} from '~/store';

const auth = useAuth();
const router = useRouter();
const dark = ref(true);

const layout = useLayout();
const {mini} = layout;

const {menus} = useCmsMenu();

const user = computed(() => ({
  name: auth.user?.value?.name,
  role: auth.user?.value?.role?.name,
}));

const logout = async () => {
  // await authLogout(); // call API
  await auth.forceLogout(); // force logout for now
  await router.push('/auth/login');
};

const dropdownItems = ref([
  {
    text: 'Profile',
    to: '/profile',
    icon: 'user',
  },
  {
    divider: true,
  },
  {
    text: 'Logout',
    icon: 'log-out',
    onClick: logout,
  },
]);

const onMiniChange = () => {
  layout.toggleMini();
};
</script>

<template>
  <v-nav-drawer
    v-model:mini="mini"
    :menus="menus"
    :dark="dark"
    small
    :logo-props="{imgClass: 'h-8 mx-auto mt-1'}"
    @update:mini="onMiniChange"
  >
    <template #logo.mini>
      <div class="font-black text-center text-black py-2">GITS</div>
    </template>

    <template #append>
      <v-btn
        no-ring
        rounded
        block
        class="mb-6 !text-sm !hidden"
        :class="mini ? 'mx-auto' : '!justify-start'"
      >
        <QuestionMarkCircleIcon class="w-5 h-5 text-current" />
        <span class="ml-2" :class="mini ? 'block sm:hidden' : ''">
          Need Help?
        </span>
      </v-btn>

      <v-dropdown
        :btn-props="{
          size: 'xs',
          text: true,
          block: true,
          class: dark ? 'text-gray-400' : '',
        }"
        :label="user?.name"
        :items="dropdownItems"
        width-class="w-full bottom-14"
        top
      >
        <template #btn="{label}">
          <div
            class="flex items-center px-2 py-2 rounded-lg w-full"
            :class="[mini ? 'justify-center' : 'justify-between']"
          >
            <span class="flex justify-between items-center">
              <UserCircleIcon class="w-8 h-8" />
              <span
                class="line-clamp-1 ml-2 text-left text-sm font-semibold flex-grow"
                :class="mini ? 'sm:!hidden' : 'block'"
              >
                {{ label }}
              </span>
            </span>
            <span class="ml-2" :class="mini ? 'inline sm:hidden' : ''">
              <ChevronUpIcon class="w-5 h-5" />
            </span>
          </div>
        </template>
      </v-dropdown>
    </template>
  </v-nav-drawer>
</template>

<style scoped></style>
