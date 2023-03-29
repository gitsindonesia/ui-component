import {useBreakpoints, breakpointsTailwind} from '@vueuse/core';
import {Story} from '@storybook/vue3';
import VAppShell from './VAppShell.vue';
import {NavDrawer as VNavDrawer} from '@morpheme/nav-drawer';
import VAppBar from '@morpheme/app-bar';
import VText from '@morpheme/text';
import VCard from '@morpheme/card';
import VBtn from '@morpheme/button';
import {List as VList, ListItem as VListItem} from '@morpheme/list';
import '@morpheme/nav-drawer/dist/style.css';
import '@morpheme/app-bar/dist/style.css';
import '@morpheme/list/dist/style.css';
import '@morpheme/text/dist/style.css';
import '@morpheme/card/dist/style.css';
import '@morpheme/button/dist/style.css';
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
    VText,
    VBtn,
  },
  emits: ['click:menu'],
  template: `
    <VAppBar bordered class="justify-between">
      <VText
        font-weight="bold"
      >
        Morpheme
      </VText>
      <VBtn
        prefix-icon="ic:round-menu"
        text
        fab
        icon
        class="!inline-flex md:!hidden"
        @click="$emit('click:menu')"
      />
    </VAppBar>
  `,
});

const NavDrawerContent = defineComponent({
  components: {
    VText,
    VList,
    VListItem,
  },
  template: `
  <VText
    variant="sm"
    font-weight="medium"
    color="gray.500"
    class="uppercase mt-4 px-4"
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
    class="uppercase mt-4 px-4"
  >
    Settings
  </VText>
  <VList hover>
    <VListItem prepend-icon="ic:round-home">Account</VListItem>
    <VListItem prepend-icon="ic:round-person">Appearance</VListItem>
  </VList>
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
    VCard,
    VBtn,
    VText,
    NavDrawerContent,
    AppHeader,
  },
  template: `
<VAppShell v-bind="args">
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
  <template #footer>
    <VText variant="sm" color="gray.500" class="mt-4">
      Copyright &copy; 2023 &middot; All rights reserved.
    </VText>
  </template>

  <!-- content -->
  <div class="mb-4">
    <VText variant="display-xs" color="gray.900" font-weight="semibold">
      Dashboard
    </VText>
    <VText variant="sm" color="gray.500">
      Overview of your account
    </VText>
  </div>

  <VCard title="Welcome" hide-footer>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </VCard>
</VAppShell>
  `,
});

export const CenteredContainer = Default.bind({});
CenteredContainer.args = {
  centeredContainer: true,
};
