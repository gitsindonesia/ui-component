import {navDrawerHeights} from './types';
import NavDrawer from './NavDrawer.vue';
import type {Meta, StoryFn} from '@storybook/vue3';
import {ref} from 'vue';
import Button from '@morpheme/button';
import {colors} from './colors';
import NavDrawerCustom from './stories/NavDrawerCustom.vue';

export default {
  title: 'Components/NavigationDrawer',
  component: NavDrawer,
} as Meta<typeof NavDrawer>;

const Template: StoryFn<typeof NavDrawer> = (args) => ({
  components: {NavDrawer},
  setup() {
    return {args, colors};
  },
  template: `
    <NavDrawer v-bind="args">
      <p class="font-semibold">Hello World</p>
    </NavDrawer>
  `,
});

export const Default = Template.bind({});
Default.args = {};

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
};

export const Dark = Template.bind({});
Dark.args = {
  color: 'dark',
};

export const Shadow = Template.bind({});
Shadow.args = {
  shadow: true,
};

export const Bordered = Template.bind({});
Bordered.args = {
  bordered: true,
};

export const Fixed: StoryFn<typeof NavDrawer> = (args) => ({
  components: {NavDrawer},
  setup() {
    return {args};
  },
  template: `
    <div class="flex">
    <NavDrawer
      color="primary"
      fixed
      class="top-0 inset-x-0"
    >
      <p class="font-semibold">
        Fixed NavDrawer
      </p>
    </NavDrawer>
    <p class="h-screen ml-[260px] bg-default p-6">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Curabitur consequat facilisis purus ac consectetur.
      Cras interdum nisi vitae metus pharetra dignissim.
      Curabitur pulvinar ex purus, id ultrices ligula dictum at.
      Integer ac libero dui. Vivamus posuere molestie enim in tempus.
      Sed neque arcu, pharetra non laoreet a, efficitur id leo.
      Nullam facilisis massa velit, ut sollicitudin magna elementum quis.
      Donec pharetra efficitur turpis, nec ultrices leo.
      Quisque placerat, dolor sit amet eleifend cursus, libero nisi
      feugiat urna, a sodales quam eros id massa.
      Nulla tristique neque quis turpis luctus tincidunt.
      Vestibulum bibendum lobortis orci, eget semper diam ultricies a.
      Nunc in nunc lacus.
    </p>
    </div>
  `,
});

export const Sticky: StoryFn<typeof NavDrawer> = (args) => ({
  components: {NavDrawer},
  setup() {
    return {args};
  },
  template: `
    <div class="flex">
    <NavDrawer
      v-model="isOpen"
      color="primary"
      sticky
      class="top-0 inset-x-0"
    >
      <p class="font-semibold">
        Sticky NavDrawer
      </p>
    </NavDrawer>
    <p class="h-screen bg-default p-6">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Curabitur consequat facilisis purus ac consectetur.
      Cras interdum nisi vitae metus pharetra dignissim.
      Curabitur pulvinar ex purus, id ultrices ligula dictum at.
      Integer ac libero dui. Vivamus posuere molestie enim in tempus.
      Sed neque arcu, pharetra non laoreet a, efficitur id leo.
      Nullam facilisis massa velit, ut sollicitudin magna elementum quis.
      Donec pharetra efficitur turpis, nec ultrices leo.
      Quisque placerat, dolor sit amet eleifend cursus, libero nisi
      feugiat urna, a sodales quam eros id massa.
      Nulla tristique neque quis turpis luctus tincidunt.
      Vestibulum bibendum lobortis orci, eget semper diam ultricies a.
      Nunc in nunc lacus.
    </p>
    </div>
  `,
});

export const Toggle: StoryFn<typeof NavDrawer> = (args) => ({
  components: {NavDrawer, Button},
  setup() {
    const isOpen = ref(true);

    return {args, isOpen};
  },
  template: `
    <div class="flex">
      <NavDrawer
        v-model="isOpen"
        color="primary"
        shadow="lg"
      >
        <p class="font-semibold">
          Toggle (v-model)
        </p>
      </NavDrawer>
      <main class=" bg-default h-screen p-6 transition-all duration-300 w-full">
        <Button class="mt-5" @click="isOpen = !isOpen">
          {{ isOpen ? 'Close' : 'Open' }}
        </Button>
      </main>
    </div>
  `,
});

export const Mini: StoryFn<typeof NavDrawer> = (args) => ({
  components: {NavDrawer, Button},
  setup() {
    const isMini = ref(false);

    return {args, isMini};
  },
  template: `
    <div class="flex">
      <NavDrawer
        color="primary"
        shadow="lg"
        :mini="isMini"
      >
        <p class="font-semibold">
          Mini
        </p>
      </NavDrawer>
      <main class=" bg-default h-screen p-6 transition-all duration-300 w-full">
        <Button class="mt-5" @click="isMini = !isMini">
          Toggle Mini
        </Button>
      </main>
    </div>
  `,
});

export const ExpandOnHover: StoryFn<typeof NavDrawer> = (args) => ({
  components: {NavDrawer, Button},
  setup() {
    const isExpanded = ref(false);

    return {args, isExpanded};
  },
  template: `
    <div class="flex">
      <NavDrawer
        color="primary"
        shadow="lg"
        expand-on-hover
        v-model:expanded="isExpanded"
      >
        <p class="font-semibold">
          Expand on Hover
        </p>
      </NavDrawer>
      <main class=" bg-default h-screen p-6 transition-all duration-300 w-full">
        <Button class="mt-5" @click="isExpanded = !isExpanded">
          Toggle Expand
        </Button>
      </main>
    </div>
  `,
});

export const Right: StoryFn<typeof NavDrawer> = (args) => ({
  components: {NavDrawer, Button},
  setup() {
    const isOpen = ref(true);

    return {args, isOpen};
  },
  template: `
    <div class="flex">
      <NavDrawer
        v-model="isOpen"
        color="primary"
        shadow="lg"
        fixed
        right
        bordered
        v-bind="args"
      >
        <div class="p-4">
          <p class="font-semibold mb-2">
            Right NavDrawer + Transition
          </p>
          <Button @click="isOpen = !isOpen">
            Close
          </Button>
        </div>
      </NavDrawer>

      <main class=" bg-default h-screen p-6 transition-all duration-300 w-full">
        <Button class="mt-5" @click="isOpen = !isOpen">
          {{ isOpen ? 'Close' : 'Open' }}
        </Button>
      </main>
    </div>
  `,
});

export const Overlay = Right.bind({});
Overlay.args = {
  fixed: true,
  overlay: true,
};

export const CustomTransition: StoryFn<typeof NavDrawer> = (args) => ({
  components: {NavDrawer, Button},
  setup() {
    const isOpen = ref(true);

    return {args, isOpen};
  },
  template: `
    <div class="flex">
      <NavDrawer
        v-model="isOpen"
        color="primary"
        shadow="lg"
        transition="slide-down"
      >
        <p class="font-semibold">
          NavDrawer + Transition
        </p>
      </NavDrawer>

      <main class=" bg-default h-screen p-6 transition-all duration-300 w-full">
        <Button class="mt-5" @click="isOpen = !isOpen">
          {{ isOpen ? 'Close' : 'Open' }}
        </Button>
      </main>
    </div>
  `,
});

export const CustomColor: StoryFn<typeof NavDrawer> = (args) => ({
  components: {NavDrawerCustom},
  template: `
    <NavDrawerCustom />
  `,
});

export const DarkMode: StoryFn<typeof NavDrawer> = (args) => ({
  components: {NavDrawer},
  setup() {
    return {args};
  },
  template: `
  <div class="dark dark:bg-neutral-900 dark:text-neutral-200 p-6">
    <NavDrawer v-bind='args'>
      <p>Default</p>
    </NavDrawer>

    <NavDrawer v-bind='args' bordered class="mt-5">
      <p>Bordered</p>
    </NavDrawer>
  </div>
  `,
});

export const HeightVariants: StoryFn<typeof NavDrawer> = (args) => ({
  components: {NavDrawer},
  setup() {
    return {args, navDrawerHeights};
  },
  template: `
    <NavDrawer
      v-bind='args'
      v-for="height in navDrawerHeights"
      :key="height"
      :height="height"
      color="dark"
      class="mb-4"
    >
      <p class="p-4">
        {{ height }}
      </p>
    </NavDrawer>
    <NavDrawer
      height="200px"
      color="dark"
      class="mb-4"
    >
      <p class="p-4">
        Custom Prop: 200px
      </p>
    </NavDrawer>
    <NavDrawer
      color="dark"
      height="none"
      class="mb-4 h-[200px]"
    >
      <p class="p-4">
        With custom class: h-[200px]
      </p>
    </NavDrawer>
    <NavDrawer
      height="none"
      color="dark h-[calc(100vh-100px)]"
      class="mb-4"
    >
      <p class="p-4">
        Custom Class: h-[calc(100vh-100px)]
      </p>
    </NavDrawer>
  `,
});

export const Bottom: StoryFn<typeof NavDrawer> = (args) => ({
  components: {NavDrawer, Button},
  setup() {
    const isOpen = ref(false);

    return {args, isOpen};
  },
  template: `
    <NavDrawer
      v-model="isOpen"
      color="primary"
      shadow="lg"
      bottom
      fixed
      overlay
    >
      <p class="font-semibold p-4">
        Bottom Drawer
      </p>
    </NavDrawer>
    <main>
      <Button @click="isOpen = !isOpen">
        {{ isOpen ? 'Close' : 'Open' }} Drawer
      </Button>
    </main>
  `,
});

export const Top: StoryFn<typeof NavDrawer> = (args) => ({
  components: {NavDrawer, Button},
  setup() {
    const isOpen = ref(false);

    return {args, isOpen};
  },
  template: `
    <NavDrawer
      v-model="isOpen"
      color="primary"
      shadow="lg"
      top
      fixed
      overlay
    >
      <p class="font-semibold p-4">
        Top Drawer
      </p>
    </NavDrawer>
    <main>
      <Button @click="isOpen = !isOpen">
        {{ isOpen ? 'Close' : 'Open' }} Drawer
      </Button>
    </main>
  `,
});
