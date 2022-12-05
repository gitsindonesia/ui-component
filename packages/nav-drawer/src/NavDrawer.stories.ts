import NavDrawer from './NavDrawer.vue';
import type {Meta, StoryFn} from '@storybook/vue3';
import {ref} from 'vue';
import Button from '@gits-id/button';
import {colors} from './colors';
import NavDrawerCustom from './stories/NavDrawerCustom.vue';
import Docs from './NavDrawer.mdx';

export default {
  title: 'Components/NavigationDrawer',
  component: NavDrawer,
  parameters: {
    docs: {
      page: Docs,
    },
  },
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
        v-bind="args"
      >
        <div class="p-2">
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
