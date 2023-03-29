import {useBreakpoints, breakpointsTailwind} from '@vueuse/core';
import {Story} from '@storybook/vue3';
import VAppShell from './VAppShell.vue';
import {NavDrawer as VNavDrawer} from '@morpheme/nav-drawer';
import VAppBar from '@morpheme/app-bar';
import VText from '@morpheme/text';
import VCard from '@morpheme/card';
import VBtn from '@morpheme/button';
import VLogo from '@morpheme/logo';
import VAvatar from '@morpheme/avatar';
import VIcon from '@morpheme/icon';
import VDropdown, {
  DropdownItem as VDropdownItem,
  DropdownButton,
} from '@morpheme/dropdown';
import {VInput} from '@morpheme/forms';
import {List as VList, ListItem as VListItem} from '@morpheme/list';
import '@morpheme/nav-drawer/dist/style.css';
import '@morpheme/app-bar/dist/style.css';
import '@morpheme/list/dist/style.css';
import '@morpheme/text/dist/style.css';
import '@morpheme/card/dist/style.css';
import '@morpheme/button/dist/style.css';
import '@morpheme/logo/dist/style.css';
import '@morpheme/avatar/dist/style.css';
import '@morpheme/forms/dist/style.css';
import '@morpheme/icon/dist/style.css';
import '@morpheme/dropdown/dist/style.css';
import {ref, watchEffect, defineComponent} from 'vue';

export default {
  title: 'Components/AppShell',
  component: VAppShell,
  parameters: {
    layout: 'fullscreen',
  },
};

const AppHeader = defineComponent({
  components: {
    VAppBar,
    VBtn,
    VLogo,
    VAvatar,
    VText,
    VIcon,
    VDropdown,
    VDropdownItem,
    DropdownButton,
  },
  props: {
    centered: {
      type: Boolean,
      default: false,
    },
    hideLogo: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click:menu'],
  template: `
    <VAppBar bordered class="justify-between">
      <div
        class="flex items-center justify-between w-full"
        :class="{'container mx-auto': centered}"
      >
        <slot name="menu">
          <VBtn
            prefix-icon="ic:round-menu"
            text
            fab
            icon
            class="!inline-flex md:!hidden"
            @click="$emit('click:menu')"
          />
        </slot>
        <slot v-if="!hideLogo" name="logo">
          <VLogo />
        </slot>
        <slot />
        <nav class="flex gap-2 sm:gap-4 items-center">
          <slot name="nav" />
          <VBtn
            prefix-icon="ic:round-notifications"
            text
            fab
            icon
            flush
          />
          <div class="border-r-2 h-5 mr-1 sm:mr-2" />
          <VDropdown right>
            <template #activator>
              <DropdownButton class="flex gap-2 items-center">
                <VAvatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                <VText class="hidden lg:inline" variant="sm" font-weight="semibold">
                  Tom Cook
                </VText>
                <VIcon class="text-gray-500 !hidden lg:!inline" size="xs" name="heroicons:chevron-down" />
              </DropdownButton>
            </template>

            <VDropdownItem>Profile</VDropdownItem>
            <VDropdownItem>Settings</VDropdownItem>
            <VDropdownItem divider>Settings</VDropdownItem>
            <VDropdownItem>Logout</VDropdownItem>
          </VDropdown>
        </nav>
      </div>
    </VAppBar>
  `,
});

const NavDrawerContent = defineComponent({
  components: {
    VText,
    VList,
    VListItem,
    VLogo,
  },
  props: {
    logo: {
      type: Boolean,
      default: false,
    },
  },
  template: `
  <div v-if="logo" class="px-4 mb-2 py-3">
    <VLogo />
  </div>
  <VText
    variant="sm"
    font-weight="medium"
    color="gray.500"
    class="mt-4 px-4"
  >
    Menu
  </VText>
  <VList hover>
    <VListItem prepend-icon="ic:round-home">Home</VListItem>
    <VListItem prepend-icon="ic:round-person">Users</VListItem>
    <VListItem prepend-icon="ic:round-checklist">Todo</VListItem>
  </VList>

  <VText
    variant="sm"
    font-weight="medium"
    color="gray.500"
    class="mt-4 px-4"
  >
    Settings
  </VText>
  <VList hover>
    <VListItem prepend-icon="ic:round-home">Account</VListItem>
    <VListItem prepend-icon="ic:round-person">Appearance</VListItem>
  </VList>
  `,
});

const MainContent = defineComponent({
  components: {VText, VCard},
  template: `
<div class="mb-4">
  <VText variant="display-xs" color="gray.900" font-weight="semibold">
    Dashboard
  </VText>
  <VText variant="sm" color="gray.500">
    Overview of your account
  </VText>
</div>

<div class="border-2 border-dashed border-gray-300 p-8 rounded-xl h-80">
  
</div>
  `,
});

export const Default: Story<{}> = (args) => ({
  setup() {
    const breakpoints = useBreakpoints(breakpointsTailwind);
    const isMobile = breakpoints.smaller('sm'); // only smaller than lg
    const isAsideOpen = ref(true);

    watchEffect(() => {
      isAsideOpen.value = !isMobile.value;
    });

    return {args, isMobile, isAsideOpen};
  },
  components: {
    VAppShell,
    VAppBar,
    VNavDrawer,
    VBtn,
    VText,
    NavDrawerContent,
    AppHeader,
    MainContent,
  },
  template: `
<VAppShell v-bind="args" padded-content>
  <!-- header -->
  <template #header>
    <AppHeader @click:menu="isAsideOpen = !isAsideOpen" />
  </template>

  <!-- aside -->
  <template #aside>
    <VNavDrawer
      v-model="isAsideOpen"
      :fixed="isMobile"
      :overlay="isMobile"
      :close-on-overlay-click="isMobile"
      :class="{'z-20 !w-10/12 sidebar': isMobile}"
      bordered
    >
      <NavDrawerContent />
    </VNavDrawer>
  </template>

  <!-- footer -->
  <template #content.after>
    <VText variant="sm" color="gray.500" class="mt-4">
      Copyright &copy; 2023 &middot; All rights reserved.
    </VText>
  </template>

  <!-- content -->
  <MainContent />
</VAppShell>
  `,
});

export const Fluid = Default.bind({});
Fluid.args = {
  fluid: true,
};

export const Stacked: Story<{}> = (args) => ({
  setup() {
    const breakpoints = useBreakpoints(breakpointsTailwind);
    const isMobile = breakpoints.smaller('sm'); // only smaller than lg
    const isAsideOpen = ref(true);

    watchEffect(() => {
      isAsideOpen.value = !isMobile.value;
    });

    return {args, isMobile, isAsideOpen};
  },
  components: {
    VAppShell,
    VAppBar,
    VNavDrawer,
    VText,
    NavDrawerContent,
    AppHeader,
    MainContent,
  },
  template: `
<VAppShell v-bind="args" padded-container>
  <!-- header -->
  <template #header>
    <AppHeader @click:menu="isAsideOpen = !isAsideOpen" />
  </template>

  <!-- footer -->
  <template #footer>
    <footer class="px-4 py-3">
      <VText variant="sm" color="gray.500">
        Copyright &copy; 2023 &middot; All rights reserved.
      </VText>
    </footer>
  </template>

  <!-- content -->
  <MainContent />
</VAppShell>
  `,
});

export const SidebarInnerHeader: Story<{}> = (args) => ({
  setup() {
    const breakpoints = useBreakpoints(breakpointsTailwind);
    const isMobile = breakpoints.smaller('sm'); // only smaller than lg
    const isAsideOpen = ref(true);

    watchEffect(() => {
      isAsideOpen.value = !isMobile.value;
    });

    return {args, isMobile, isAsideOpen};
  },
  components: {
    VAppShell,
    VAppBar,
    VNavDrawer,
    VBtn,
    VText,
    NavDrawerContent,
    AppHeader,
    MainContent,
    VInput,
  },
  template: `
<VAppShell v-bind="args" padded-container>
  <!-- navbar -->
  <template #navbar>
    <AppHeader @click:menu="isAsideOpen = !isAsideOpen" hide-logo>
      <VInput placeholder="Search" prepend-icon="ic:round-search" />
    </AppHeader>
  </template>

  <!-- aside -->
  <template #aside>
    <VNavDrawer
      v-model="isAsideOpen"
      :fixed="isMobile"
      :overlay="isMobile"
      :close-on-overlay-click="isMobile"
      :class="{'z-20 !w-10/12 sidebar': isMobile}"
      bordered
    >
      <NavDrawerContent logo />
    </VNavDrawer>
  </template>

  <!-- footer -->
  <template #innerFooter>
    <VText variant="sm" color="gray.500" class="m-4">
      Copyright &copy; 2023 &middot; All rights reserved.
    </VText>
  </template>

  <!-- content -->
  <MainContent />
</VAppShell>
  `,
});
