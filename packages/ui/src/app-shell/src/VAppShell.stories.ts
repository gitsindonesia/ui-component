import { useBreakpoints, breakpointsTailwind } from '@vueuse/core';
import type { Story } from '@storybook/vue3';
import VAppShell from './VAppShell.vue';
import { NavDrawer as VNavDrawer } from '../../nav-drawer/src';
import VAppBar from '../../app-bar/src';
import VText from '../../text/src';
import VCard from '../../card/src';
import VBtn from '../../button/src';
import VLogo from '../../logo/src';
import VAvatar from '../../avatar/src';
import VIcon from '../../icon/src';
import VDropdown, {
  DropdownItem as VDropdownItem,
  DropdownButton,
} from '../../dropdown/src';
import { VInput } from '../../forms/src';
import { List as VList, ListItem as VListItem } from '../../list/src';
import { ref, watchEffect, defineComponent } from 'vue';
import VTooltip from '../../tooltip/src';

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
  components: { VText, VCard },
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

    return { args, isMobile, isAsideOpen };
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

    return { args, isMobile, isAsideOpen };
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

    return { args, isMobile, isAsideOpen };
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
  <!-- navigation -->
  <template #navigation>
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

export const ThreeColumn: Story<{}> = (args) => ({
  setup() {
    const breakpoints = useBreakpoints(breakpointsTailwind);
    const isMobile = breakpoints.smaller('sm'); // only smaller than lg
    const isAsideOpen = ref(true);

    watchEffect(() => {
      isAsideOpen.value = !isMobile.value;
    });

    return { args, isMobile, isAsideOpen };
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
    VList,
    VListItem,
    VAvatar,
    VTooltip,
  },
  template: `
<VAppShell v-bind="args" fluid>
  <!-- aside -->
  <template #aside>
    <VNavDrawer
      v-model="isAsideOpen"
      :fixed="isMobile"
      :overlay="isMobile"
      :close-on-overlay-click="isMobile"
      bordered
      mini
    >
      <div class="flex items-center flex-col gap-2 mt-2">
        <VTooltip placement="right">
          <template #activator>
            <VAvatar color="primary" size="xl">D</VAvatar>
          </template>
          <span>Digits</span>
        </VTooltip>
        <VTooltip placement="right">
          <template #activator>
            <VAvatar color="secondary" size="xl">A</VAvatar>
          </template>
          <span>Acme</span>
        </VTooltip>
        <VTooltip placement="right">
          <template #activator>
            <VAvatar color="success" size="xl">T</VAvatar>
          </template>
          <span>Tech</span>
        </VTooltip>
      </div>
    </VNavDrawer>
  </template>

  <div class="flex flex-1">
    <div class="w-72 border-r h-[100dvh] overflow-x-auto">
      <VList hover small>
        <VListItem prepend-icon-class="!text-gray-600" prepend-icon-size="sm" prepend-icon="ph:chat-centered-text-thin">Threads</VListItem>
        <VListItem prepend-icon-class="!text-gray-600" prepend-icon-size="sm" prepend-icon="ph:chats-circle-thin">Direct Messages</VListItem>
        <VListItem prepend-icon-class="!text-gray-600" prepend-icon-size="sm" prepend-icon="ri:at-line">Mentions and Reactions</VListItem>
        <VListItem prepend-icon-class="!text-gray-600" prepend-icon-size="sm" prepend-icon="ic:round-send">Drafts and sent</VListItem>
        <VListItem prepend-icon-class="!text-gray-600" prepend-icon-size="sm" prepend-icon="ic:round-bookmark">Saved items</VListItem>
        <VListItem prepend-icon-class="!text-gray-600" prepend-icon-size="sm" prepend-icon="ri:building-4-line">Connect</VListItem>
        <VListItem prepend-icon-class="!text-gray-600" prepend-icon-size="sm" prepend-icon="ic:round-more-vert">More</VListItem>
      </VList>
      <VList hover small class="mt-4">
        <VText font-weight="semibold" color="gray.500" class="px-2" variant="sm">Channels</VText>
        <VListItem v-for="i in 20" :key="i" prepend-icon-class="!text-gray-600" prepend-icon-size="sm" prepend-icon="ph:hash">
          Channel {{ i }}
        </VListItem>
      </VList>
      <VList hover small class="mt-4">
        <VText font-weight="semibold" color="gray.500" class="px-2" variant="sm">Direct Messsages</VText>
        <VListItem v-for="i in 5" :key="i" prepend-icon-class="!text-gray-600" prepend-icon-size="sm" prepend-icon="ic:round-person">
          User {{ i }}
        </VListItem>
      </VList>
      <VList hover small class="mt-4">
        <VText font-weight="semibold" color="gray.500" class="px-2" variant="sm">
          Apps
        </VText>
        <VListItem v-for="i in 5" :key="i" prepend-icon-class="!text-gray-600" prepend-icon-size="sm" prepend-icon="ic:round-app-shortcut">
          App {{ i }}
        </VListItem>
      </VList>
    </div>
    <div class="flex-1 px-6 py-4">
      <MainContent />
    </div>
  </div>
</VAppShell>
  `,
});
