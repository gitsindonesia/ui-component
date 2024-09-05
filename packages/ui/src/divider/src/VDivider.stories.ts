import { VLogo } from '../../logo/src';
import { VMain } from '../../app-shell/src';
import { VBtn } from '../../button/src';
import { VAppBar } from '../../app-bar/src';
import type { StoryFn, Meta } from '@storybook/vue3';
import VDivider from './VDivider.vue';
import { List as VList, ListItem as VListItem } from '../../list/src';

export default {
  title: 'Components/Divider',
  component: VDivider,
} as Meta;

export const Default: StoryFn = (args) => ({
  setup() {
    return { args };
  },
  components: {
    VDivider,
    VList,
    VListItem
  },
  template: `
  <VList>
    <VListItem>Jane</VListItem>
    <VDivider />
    <VListItem>Lily</VListItem>
    <VListItem>Mary</VListItem>
  </VList>
  `,
});

export const Inset: StoryFn = (args) => ({
  setup() {
    return { args };
  },
  components: {
    VDivider,
    VList,
    VListItem,
    VMain
  },
  template: `
  <VList>
    <VListItem>Jane</VListItem>
    <VDivider inset />
    <VListItem>Lily</VListItem>
    <VListItem>Mary</VListItem>
  </VList>
  `,
});

export const Vertical: StoryFn = (args) => ({
  setup() {
    return { args };
  },
  components: {
    VDivider,
    VAppBar,
    VBtn,
    VLogo,
    VMain
  },
  template: `
  <VAppBar shadow>
    <VMain class="flex justify-between items-center">
      <VLogo />

      <nav class="flex gap-1">
        <VBtn text>Home</VBtn>
        <VDivider vertical />
        <VBtn text>About</VBtn>
        <VDivider vertical />
        <VBtn text>Contact</VBtn>
      </nav>
    </VMain>
  </VAppBar>
  `,
});

export const DarkMode: StoryFn = (args) => ({
  setup() {
    return { args };
  },
  components: {
    VDivider,
    VAppBar,
    VBtn,
    VLogo,
    VMain
  },
  template: `
  <div class="dark dark:bg-gray-true-900 dark:text-gray-true-200 min-h-screen">
    <VAppBar shadow>
      <VMain class="flex justify-between items-center">
        <VLogo white />

        <nav class="flex gap-1">
          <VBtn text>Home</VBtn>
          <VDivider vertical dark />
          <VBtn text>About</VBtn>
          <VDivider vertical dark />
          <VBtn text>Contact</VBtn>
        </nav>
      </VMain>
    </VAppBar>
  </div>
  `,
});