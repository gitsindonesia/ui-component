import {Story} from '@storybook/vue3';
import Icon from './Icon.vue';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {},
  args: {
    name: 'ic:round-home',
  },
};

export const Default: Story<{}> = (args) => ({
  setup() {
    return {args};
  },
  components: {Icon},
  template: `<Icon v-bind="args" />`,
});
Default.parameters = {
  docs: {
    source: {
      code: '<Icon name="ic:round-home" />',
    },
  },
};

export const Sizes: Story<{}> = (args) => ({
  components: {Icon},
  template: `
<Icon name="ri:search-line" size="xxs" />
<Icon name="ri:search-line" size="xs" />
<Icon name="ri:search-line" size="sm" />
<Icon name="ri:search-line" size="md" />
<Icon name="ri:search-line" size="lg" />
<Icon name="ri:search-line" size="xl" />
<Icon name="ri:search-line" size="50" />
<Icon name="ri:search-line" :size="70" />
  `,
});
Sizes.parameters = {
  docs: {
    source: {
      code: `
<Icon name="ri:search-line" size="xxs" />
<Icon name="ri:search-line" size="xs" />
<Icon name="ri:search-line" size="sm" />
<Icon name="ri:search-line" size="md" />
<Icon name="ri:search-line" size="lg" />
<Icon name="ri:search-line" size="xl" />
<Icon name="ri:search-line" size="50" />
<Icon name="ri:search-line" :size="70" />
      `,
    },
  },
};

export const CustomClass = Default.bind({});
CustomClass.args = {
  class: 'w-10 h-10',
};
CustomClass.parameters = {
  docs: {
    source: {
      code: '<Icon name="ic:round-home" class="w-10 h-10" />',
    },
  },
};

export const DarkMode: Story = (args) => ({
  components: {Icon},
  setup() {
    return {args};
  },
  template: `
  <div class="dark dark:bg-neutral-900 dark:text-neutral-200 p-6">
    <Icon v-bind='args'/>
  </div>
  `,
});

export const MorphemeIcons: Story = (args) => ({
  components: {Icon},
  setup() {
    return {args};
  },
  template: `
  <p class="font-medium mb-2">Default Collection</p>
  <Icon v-bind='args' name="ri:home-line" />
  <Icon v-bind='args' name="ic:round-local-activity" />
  <Icon v-bind='args' name="ph:activity-bold" />

  <p class="font-medium mb-2 mt-5">Morpheme Icons</p>
  <Icon v-bind='args' name="remix:home-line" />
  <Icon v-bind='args' name="untitled:activity-heart" />
  <Icon v-bind='args' name="iconsax:outline/add" />
  <Icon v-bind='args' name="iconsax:bulk/add" />
  <Icon v-bind='args' name="iconsax:broken/add" />
  <Icon v-bind='args' name="iconsax:linear/add" />
  <Icon v-bind='args' name="iconsax:solid/add" />
  <Icon v-bind='args' name="iconsax:twotone/add" />

  <p class="font-medium mb-2 mt-5">Non exist</p>
  <Icon v-bind='args' name="remix:non-exist-icon" />
  `,
});

export const MorphemeIconsNoCache: Story = (args) => ({
  components: {Icon},
  setup() {
    return {args};
  },
  template: `
  <p class="font-medium mb-2">
    By default morpheme icons are cached and stored in local storage, but you can disable it by setting via <code>no-cache</code> prop.
  </p>
  <Icon v-bind='args' name="remix:home-line" no-cache />
  <Icon v-bind='args' name="untitled:activity-heart" no-cache />
  <Icon v-bind='args' name="iconsax:outline/add" no-cache />
  <Icon v-bind='args' name="iconsax:bulk/add" no-cache />
  <Icon v-bind='args' name="iconsax:broken/add" no-cache />
  <Icon v-bind='args' name="iconsax:linear/add" no-cache />
  <Icon v-bind='args' name="iconsax:solid/add" no-cache />
  <Icon v-bind='args' name="iconsax:twotone/add" no-cache />
  `,
});
