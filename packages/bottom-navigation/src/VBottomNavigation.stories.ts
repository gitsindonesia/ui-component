import { VBtn } from '@morpheme/button';
import { defaultColors } from '@morpheme/theme/defaultTheme';
import vueRouter from 'storybook-vue3-router';
import type {StoryFn, Meta} from '@storybook/vue3';
import VBottomNavigation from './VBottomNavigation.vue';
import VBottomNavigationItem from './VBottomNavigationItem.vue';
import {ref} from 'vue';

export default {
  title: 'Components/BottomNavigation',
  component: VBottomNavigation,
} as Meta;

export const Default: StoryFn = (args) => ({
  setup() {
    return {args};
  },
  components: {
    VBottomNavigation,
    VBottomNavigationItem,
  },
  template: `
  <VBottomNavigation v-bind="args">
    <VBottomNavigationItem icon="ri:home-line">
      Home
    </VBottomNavigationItem>
    <VBottomNavigationItem icon="ri:history-line">
      Recents
    </VBottomNavigationItem>
    <VBottomNavigationItem icon="ri:heart-line">
      Favorites
    </VBottomNavigationItem>
    <VBottomNavigationItem icon="ri:map-pin-2-line">
      Nearby
    </VBottomNavigationItem>
    <VBottomNavigationItem icon="ri:user-line">
      Account
    </VBottomNavigationItem>
  </VBottomNavigation>
  `,
});

export const DefaultActive = Default.bind({})
DefaultActive.args = {
  defaultActive: 1
}

export const Grow = Default.bind({})
Grow.args = {
  grow: true
}

export const IconOnly: StoryFn = (args) => ({
  setup() {
    return {args};
  },
  components: {
    VBottomNavigation,
    VBottomNavigationItem,
  },
  template: `
  <VBottomNavigation v-bind="args" grow>
    <VBottomNavigationItem icon="ri:home-line" />
    <VBottomNavigationItem icon="ri:history-line" />
    <VBottomNavigationItem icon="ri:heart-line" />
    <VBottomNavigationItem icon="ri:map-pin-2-line" />
    <VBottomNavigationItem icon="ri:user-line" />
  </VBottomNavigation>
  `,
});

export const WithVueRouter: StoryFn = (args) => ({
  setup() {
    return {args};
  },
  components: {
    VBottomNavigation,
    VBottomNavigationItem,
  },
  template: `
  <div class="min-h-screen">
    <RouterView />
  </div>

  <VBottomNavigation v-bind="args">
    <VBottomNavigationItem to="/" icon="ri:home-line">
      Home
    </VBottomNavigationItem>
    <VBottomNavigationItem to="/recents" icon="ri:history-line">
      Recents
    </VBottomNavigationItem>
    <VBottomNavigationItem to="/favorites" icon="ri:heart-line">
      Favorites
    </VBottomNavigationItem>
    <VBottomNavigationItem to="/nearby" icon="ri:map-pin-2-line">
      Nearby
    </VBottomNavigationItem>
    <VBottomNavigationItem to="/account" icon="ri:user-line">
      Account
    </VBottomNavigationItem>
  </VBottomNavigation>
  `,
});
WithVueRouter.decorators = [vueRouter([
  {
    path: '/',
    component: {
      template: 'Home'
    }
  },
  {
    path: '/recents',
    component: {
      template: 'Recents'
    }
  },
  {
    path: '/favorites',
    component: {
      template: 'Favorites'
    }
  },
  {
    path: '/nearby',
    component: {
      template: 'Nearby'
    }
  },
  {
    path: '/account',
    component: {
      template: 'Account'
    }
  }
])];


export const Colors: StoryFn = (args) => ({
  setup() {
    const colors = defaultColors
    return {args, colors};
  },
  components: {
    VBottomNavigation,
    VBottomNavigationItem,
  },
  template: `
  <VBottomNavigation v-bind="args"
    v-for="color in colors"
    :color="color"
    :key="color"
    :fixed="false"
    class="mb-4"
  >
    <VBottomNavigationItem icon="ri:home-line">
      Home
    </VBottomNavigationItem>
    <VBottomNavigationItem icon="ri:history-line">
      Recents
    </VBottomNavigationItem>
    <VBottomNavigationItem icon="ri:heart-line">
      Favorites
    </VBottomNavigationItem>
    <VBottomNavigationItem icon="ri:map-pin-2-line">
      Nearby
    </VBottomNavigationItem>
    <VBottomNavigationItem icon="ri:user-line">
      Account
    </VBottomNavigationItem>
  </VBottomNavigation>
  `,
});

export const ToggleNavigation: StoryFn = (args) => ({
  setup() {
    const isOpen = ref(true)
    return {args, isOpen};
  },
  components: {
    VBottomNavigation,
    VBottomNavigationItem,
    VBtn
  },
  template: `
  <VBtn @click="isOpen = !isOpen">Toggle Navigation</VBtn>
  <VBottomNavigation v-bind="args" v-model="isOpen">
    <VBottomNavigationItem icon="ri:home-line">
      Home
    </VBottomNavigationItem>
    <VBottomNavigationItem icon="ri:history-line">
      Recents
    </VBottomNavigationItem>
    <VBottomNavigationItem icon="ri:heart-line">
      Favorites
    </VBottomNavigationItem>
    <VBottomNavigationItem icon="ri:map-pin-2-line">
      Nearby
    </VBottomNavigationItem>
    <VBottomNavigationItem icon="ri:user-line">
      Account
    </VBottomNavigationItem>
  </VBottomNavigation>
  `,
});

export const WithButton: StoryFn = (args) => ({
  setup() {
    return {args};
  },
  components: {
    VBottomNavigation,
    VBottomNavigationItem,
    VBtn
  },
  template: `
  <VBottomNavigation v-bind="args" grow>
    <VBottomNavigationItem icon="ri:home-line" />
    <VBottomNavigationItem icon="ri:history-line" />
    <VBtn prefix-icon="ri:add-line" color="primary" fab icon size="lg" />
    <VBottomNavigationItem icon="ri:map-pin-2-line" />
    <VBottomNavigationItem icon="ri:user-line" />
  </VBottomNavigation>
  `,
});

export const WithFabButton: StoryFn = (args) => ({
  setup() {
    return {args};
  },
  components: {
    VBottomNavigation,
    VBottomNavigationItem,
    VBtn
  },
  template: `
  <VBottomNavigation v-bind="args" grow>
    <VBottomNavigationItem icon="ri:home-line" />
    <VBottomNavigationItem icon="ri:history-line" />
    <VBtn prefix-icon="ri:add-line" color="primary" fab icon size="xl"
      class="absolute -top-6"
    />
    <VBottomNavigationItem icon="ri:map-pin-2-line" />
    <VBottomNavigationItem icon="ri:user-line" />
  </VBottomNavigation>
  `,
});

export const DarkMode: StoryFn = (args) => ({
  setup() {
    return {args, colors: defaultColors};
  },
  components: {
    VBottomNavigation,
    VBottomNavigationItem,
  },
  template: `
  <div class="dark dark:bg-gray-true-900 dark:text-gray-true-200 min-h-screen">
    <VBottomNavigation v-bind="args"
      v-for="color in colors"
      :color="color"
      :key="color"
      :fixed="false"
      class="mb-4"
    >
      <VBottomNavigationItem icon="ri:home-line">
        Home
      </VBottomNavigationItem>
      <VBottomNavigationItem icon="ri:history-line">
        Recents
      </VBottomNavigationItem>
      <VBottomNavigationItem icon="ri:heart-line">
        Favorites
      </VBottomNavigationItem>
      <VBottomNavigationItem icon="ri:map-pin-2-line">
        Nearby
      </VBottomNavigationItem>
      <VBottomNavigationItem icon="ri:user-line">
        Account
      </VBottomNavigationItem>
    </VBottomNavigation>
  </div>
  `,
});
