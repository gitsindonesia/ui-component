import Avatar from './Avatar.vue';
import type {Meta, StoryFn} from '@storybook/vue3';
import {
  defaultColors as colors,
  defaultSizes as sizes,
} from '@gits-id/theme/defaultTheme';

const avatar1 =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80';
const avatar2 =
  'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  args: {},
} as Meta<typeof Avatar>;

const Template: StoryFn<typeof Avatar> = (args) => ({
  components: {Avatar},
  setup() {
    return {args, colors};
  },
  template: `
    <div class="flex gap-2">
      <Avatar
        v-for="color in colors"
        v-bind="args"
        :key="color"
        :color="color"
        :name="color"
        :title="color"
        class="mb-2"
      />
    </div>
  `,
});

export const Variants = Template.bind({});
Variants.args = {};
Variants.parameters = {
  docs: {
    source: {
      code: `
<script setup lang="ts">
import Avatar from '@gits-id/avatar';
</script>

<template>
  <Avatar color="primary" name="John Doe" />
  <Avatar color="secondary" name="John Doe" />
</template>
      `,
      language: 'html',
    },
  },
};

export const Image = Template.bind({});
Image.args = {
  src: avatar2,
  alt: 'Alex Hipp',
};
Image.parameters = {
  docs: {
    source: {
      code: `<Avatar
  color="ultimate"
  src="${avatar2}"
  name="Alex Hipp"
/>`,
      language: 'html',
    },
  },
};

export const Sizes: StoryFn<typeof Avatar> = (args) => ({
  components: {Avatar},
  setup() {
    return {args, sizes, colors};
  },
  template: `
    <div v-for="color in colors" :key="color" class="flex gap-2 items-end">
      <Avatar
        v-for="size in sizes"
        v-bind="args"
        :key="color"
        :color="color"
        :size="size"
        :name="size"
        class="mb-4"
      />
    </div>
  `,
});
Sizes.parameters = {
  docs: {
    source: {
      code: `<Avatar
  color="ultimate"
  name="Alex Hipp"
  size="sm"
/>

<Avatar
  color="ultimate"
  name="Alex Hipp"
  size="md"
/>

<Avatar
  color="ultimate"
  name="Alex Hipp"
  size="lg"
/>

<Avatar
  color="ultimate"
  name="Alex Hipp"
  :size="60"
/>
`,
      language: 'html',
    },
  },
};

export const Shape: StoryFn<typeof Avatar> = (args) => ({
  components: {Avatar},
  setup() {
    return {args, sizes, colors, avatar1, avatar2};
  },
  template: `
    <div class="flex gap-2">
      <Avatar
        v-bind="args"
        size="lg"
        name="Michael Dam"
        :src="avatar1"
      />
      <Avatar
        v-bind="args"
        size="lg"
        name="Alex Hipp"
        :src="avatar2"
        shape="square"
      />

      <Avatar
        v-bind="args"
        size="lg"
        name="Alex Hipp"
        :src="avatar2"
        shape="rounded"
      />
    </div>
  `,
});
Shape.parameters = {
  docs: {
    source: {
      code: `<Avatar
  color="ultimate"
  name="Alex Hipp"
  shape="circle"
/>

<Avatar
  color="ultimate"
  name="Alex Hipp"
  shape="square"
/>

<Avatar
  color="ultimate"
  name="Alex Hipp"
  shape="rounded"
/>
`,
      language: 'html',
    },
  },
};

export const CustomSizes: StoryFn<typeof Avatar> = (args) => ({
  components: {Avatar},
  setup() {
    return {args, sizes, colors, avatar1, avatar2};
  },
  template: `
    <div class="flex gap-2">
      <Avatar
        :size="100"
        name="Michael Dam"
        :src="avatar1"
      />
      <Avatar
        size="200"
        name="Alex Hipp"
        :src="avatar2"
      />
    </div>
  `,
});
CustomSizes.parameters = {
  docs: {
    source: {
      code: `
<Avatar
  :size="100"
  name="Michael Dam"
  :src="avatar1"
/>
<Avatar
  size="200"
  name="Alex Hipp"
  :src="avatar2"
/>
`,
      language: 'html',
    },
  },
};
