import VAppBar from './VAppBar.vue';
import {Story, Meta} from '@storybook/vue3';
import {defaultColors} from '@gits-id/theme/defaultTheme';
import {ref} from 'vue';
import Icon from '@gits-id/icon';
import Button from '@gits-id/button';
import {VInput} from '@gits-id/forms';

const shadows = [true, 'sm', 'md', 'lg', 'xl', '2xl', 'inner', 'none'];

export default {
  title: 'Components/AppBar',
  component: VAppBar,
} as Meta;

const Template: Story<{}> = (args) => ({
  components: {VAppBar},
  setup() {
    return {args};
  },
  template: `
<VAppBar v-bind="args">Hello</VAppBar>
<main class="container mx-auto p-6 space-y-2">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pellentesque diam, ac sollicitudin urna. Integer blandit quam quis arcu tempus, non consequat leo consectetur. Aliquam id consectetur nibh. Pellentesque tincidunt dolor eu malesuada sagittis. Nam eu porttitor libero. Pellentesque aliquam, metus ac sagittis tincidunt, quam eros vehicula lacus, sed rhoncus nulla mauris a eros. Suspendisse imperdiet blandit risus vitae hendrerit. Nunc eget nisl ut tellus efficitur hendrerit ac sed nisl. Nunc sed blandit nulla, at scelerisque justo. Duis mollis interdum orci. Cras pulvinar laoreet massa, at iaculis enim efficitur eu. Nam et lacus at turpis gravida aliquam nec nec arcu. Sed venenatis enim nec velit feugiat, vitae ullamcorper tellus lacinia.</p>
  <p>Sed ut ante id elit maximus accumsan. Sed at ligula vitae velit elementum scelerisque. Phasellus vel felis vel lacus sodales ullamcorper. Fusce pharetra lorem ac ultricies laoreet. Pellentesque congue nunc vitae nibh bibendum, id volutpat ligula pretium. Suspendisse semper ipsum sit amet interdum efficitur. Quisque elit nunc, porttitor ut eleifend at, fermentum sit amet elit. Etiam a ultricies felis, sed eleifend sapien. Donec id eros velit. Morbi blandit commodo vulputate. Praesent interdum sollicitudin rhoncus. Maecenas commodo ac ante eu egestas. In hac habitasse platea dictumst. Cras quis consequat justo.</p>
</main>
`,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: `<v-app-bar/>`,
    },
  },
};

export const Fixed = Template.bind({});
Fixed.args = {
  fixed: true,
};
Fixed.parameters = {
  docs: {
    source: {
      code: `<v-app-bar fixed/>`,
    },
  },
};

export const Sticky = Template.bind({});
Sticky.args = {
  mini: true,
};
Sticky.parameters = {
  docs: {
    source: {
      code: `<v-app-bar sticky />`,
    },
  },
};

export const Bordered = Template.bind({});
Bordered.args = {
  bordered: true,
};
Bordered.parameters = {
  docs: {
    source: {
      code: `<v-app-bar bordered />`,
    },
  },
};

export const Shadow: Story<{}> = (args) => ({
  components: {VAppBar},
  setup() {
    return {args, shadows};
  },
  template: `
<v-app-bar
  v-for="(shadow, idx) in shadows"
  :key="idx"
  :shadow="shadow"
  class="mb-4"
  >
  Shadow: {{ shadow }}
</VAppBar>
`,
});

export const Colors: Story<{}> = (args) => ({
  components: {VAppBar},
  setup() {
    return {args, defaultColors};
  },
  template: `
<v-app-bar
  v-for="(color, idx) in defaultColors"
  :key="idx"
  :color="color"
  class="mb-4"
  >
  {{ color }}
</v-app-bar>
`,
});

const sizes = ['sm', 'md', 'lg'];

export const Sizes: Story<{}> = (args) => ({
  components: {VAppBar, Button, Icon, VInput},
  setup() {
    const isOpen = ref(true);
    return {args, isOpen, sizes};
  },
  template: `
<v-app-bar
  v-model="isOpen"
  shadow
  sticky
  size="sm"
  class="mb-5"
>
  <div class="flex w-full justify-between items-center">
    <Button text icon rounded>
      <Icon class="w-5 h-5" name="ri:menu-line" />
    </Button>

    <nav aria-label="Mobile Nav" class="flex items-center sm:gap-2">
      <Button text icon rounded>
        <Icon class="w-5 h-5" name="ri:search-line" />
      </Button>
    </nav>
  </div>
</v-app-bar>

<v-app-bar
  v-model="isOpen"
  shadow
  sticky
  size="md"
  class="mb-5"
>
  <div class="flex w-full justify-between items-center">
    <Button text icon rounded>
      <Icon class="w-5 h-5" name="ri:menu-line" />
    </Button>

    <nav aria-label="Mobile Nav" class="flex items-center sm:gap-2">
      <Button text icon rounded>
        <Icon class="w-5 h-5" name="ri:search-line" />
      </Button>
    </nav>
  </div>
</v-app-bar>

<v-app-bar
  v-model="isOpen"
  shadow
  sticky
  size="lg"
  class="mb-5 space-y-1"
>
  <div class="flex w-full justify-between items-center">
    <Button text icon rounded>
      <Icon class="w-5 h-5" name="ri:menu-line" />
    </Button>

    <nav aria-label="Mobile Nav" class="flex items-center sm:gap-2">
      <Button text icon rounded>
        <Icon class="w-5 h-5" name="ri:search-line" />
      </Button>
    </nav>
  </div>
  <div class="px-3">
    <h3 class="text-lg font-semibold">Page Title</h3>
  </div>
</v-app-bar>
`,
});

export const CustomClass = Template.bind({});
CustomClass.args = {
  class: '!bg-orange-600 !text-white',
};

CustomClass.parameters = {
  docs: {
    source: {
      code: `<v-app-bar class="!bg-orange-600 !text-white" />`,
    },
  },
};

export const Toggle: Story<{}> = (args) => ({
  components: {VAppBar, Button},
  setup() {
    const isOpen = ref(true);
    return {args, isOpen};
  },
  template: `
<v-app-bar
  v-model="isOpen"
  color="primary"
>
  Toggle AppBar
</v-app-bar>

<main class="mt-5">
  <Button @click="isOpen = !isOpen">Toggle AppBar</Button>
</main>
`,
});

export const CustomTransition: Story<{}> = (args) => ({
  components: {VAppBar, Button},
  setup() {
    const isOpen = ref(true);
    return {args, isOpen};
  },
  template: `
<v-app-bar
  v-model="isOpen"
  color="primary"
  transition="slide-down"
>
  Toggle AppBar
</v-app-bar>

<main class="mt-5">
  <Button @click="isOpen = !isOpen">Toggle AppBar</Button>
</main>
`,
});

export const MobileNavigation: Story<{}> = (args) => ({
  components: {VAppBar, Button, Icon},
  setup() {
    const isOpen = ref(true);
    return {args, isOpen};
  },
  template: `
<v-app-bar
  v-model="isOpen"
  shadow
  sticky
>
  <div class="flex justify-between items-center w-full">
    <div class="flex gap-4 items-center">
      <Button color="primary" text icon rounded>
        <Icon class="w-5 h-5" name="ri:arrow-left-line" />
      </Button>

      <div>
        <h3 class="text-lg font-semibold">Page Title</h3>
        <p class="text-gray-500 text-sm">Subtitle</p>
      </div>
    </div>

    <nav aria-label="Mobile Nav" class="flex items-center gap-2">
      <Button text icon rounded>
        <Icon class="w-5 h-5" name="ri:search-line" />
      </Button>
      <Button text icon rounded>
        <Icon class="w-5 h-5" name="ri:user-line" />
      </Button>
    </nav>
  </div>
</v-app-bar>
`,
});

export const WithSearchBar: Story<{}> = (args) => ({
  components: {VAppBar, Button, Icon, VInput},
  setup() {
    const isOpen = ref(true);
    return {args, isOpen};
  },
  template: `
<v-app-bar
  v-model="isOpen"
  shadow
  sticky
  class="mb-5"
>
  <div class="flex justify-between items-center w-full">
    <Button text icon rounded>
      <Icon class="w-5 h-5" name="ri:menu-line" />
    </Button>

    <v-input wrapper-class="flex-1 mx-2 sm:mx-5" placeholder="Search..." prepend-icon="ri:search-line" />
  </div>
</v-app-bar>

<v-app-bar
  v-model="isOpen"
  shadow
  sticky
  class="mb-5"
>
  <div class="flex justify-between items-center w-full">
    <Button text icon rounded>
      <Icon class="w-5 h-5" name="ri:menu-line" />
    </Button>

    <v-input wrapper-class="flex-1 mx-2 sm:mx-5" placeholder="Search..." prepend-icon="ri:search-line" />

    <nav aria-label="Mobile Nav" class="flex items-center sm:gap-2">
      <Button text icon rounded>
        <Icon class="w-5 h-5" name="ri:user-line" />
      </Button>
    </nav>
  </div>
</v-app-bar>
`,
});
