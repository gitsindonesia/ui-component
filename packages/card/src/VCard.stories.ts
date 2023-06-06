import {Meta, Story} from '@storybook/vue3';
import VCard from './VCard.vue';
import VBtn from '@morpheme/button';
import {defaultColors} from '@morpheme/theme/defaultTheme';
import {defineComponent} from 'vue';

export default {
  title: 'Components/Card',
  component: VCard,
  argTypes: {},
  args: {
    title: 'Title',
    body: 'Body',
    footer: 'Footer',
    headerClass: '',
    footerClass: '',
    bodyClass: '',
    hideHeader: false,
    hideFooter: false,
    bordered: false,
  },
} as Meta;

const Template: Story = (args) => ({
  components: {VCard},
  setup() {
    return {args};
  },
  template: `
  <v-card v-bind='args'>
    <template #header>
      {{args.title}}
    </template>
    <template #footer>
      {{args.footer}}
    </template>
    {{ args.body }}
  </v-card>`,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: '<v-card title="Header">Body</v-card>',
    },
  },
};

export const HideFooter = Template.bind({});
HideFooter.args = {
  hideFooter: true,
};
HideFooter.parameters = {
  docs: {
    source: {
      code: '<v-card title="Header" hide-footer>Body</v-card>',
    },
  },
};

export const HideHeader = Template.bind({});
HideHeader.args = {
  hideHeader: true,
};
HideHeader.parameters = {
  docs: {
    source: {
      code: '<v-card title="Header" hide-header>Body</v-card>',
    },
  },
};

export const BodyOnly = Template.bind({});
BodyOnly.args = {
  hideHeader: true,
  hideFooter: true,
};
BodyOnly.parameters = {
  docs: {
    source: {
      code: '<v-card title="Header" hide-header hide-footer>Body</v-card>',
    },
  },
};

export const Bordered = Template.bind({});
Bordered.args = {
  bordered: true,
  flat: true,
};
Bordered.parameters = {
  docs: {
    source: {
      code: '<v-card title="Header" bordered flat>Body</v-card>',
    },
  },
};

export const CustomSlots: Story = (args) => ({
  components: {VCard, VBtn},
  setup() {
    return {args};
  },
  template: `
<v-card v-bind='args' header-class="items-center" footer-class="gap-2">
  <template #header>
    <div>My Header</div>
  </template>
  <template #footer>
    <v-btn color="primary">Agree</v-btn>
    <v-btn>Cancel</v-btn>
  </template>
  
  <p>lorem ipsum body</p>
</v-card>
`,
});
CustomSlots.parameters = {
  docs: {
    source: {
      code: `
<v-card header-class="items-center" footer-class="gap-2">
  <template #header>
    <div>My Header</div>
  </template>
  <template #footer>
      <v-btn color="primary">Agree</v-btn>
      <v-btn>Cancel</v-btn>
  </template>
  
  <p class="text-gray-600">lorem ipsum body</p>
</v-card>`,
    },
  },
};

export const Flat = Template.bind({});
Flat.args = {
  flat: true,
};
Flat.parameters = {
  docs: {
    source: {
      code: '<v-card title="Header" flat>Body</v-card>',
    },
  },
};

export const Colors: Story<{}> = (args) => ({
  components: {VCard},
  setup() {
    return {args, colors: defaultColors};
  },
  template: `
<v-card
  v-for="(color, idx) in colors"
  :key="idx"
  :color="color"
  class="mb-4"
  hide-header
  hide-footer
  >
  Card: {{ color }}
</v-card>
`,
});

export const Shadow: Story<{}> = (args) => ({
  components: {VCard},
  setup() {
    const shadows = [true, 'sm', 'md', 'lg', 'xl', '2xl', 'inner', 'none'];

    return {args, shadows};
  },
  template: `
<v-card
  v-for="(shadow, idx) in shadows"
  :key="idx"
  :shadow="shadow"
  class="mb-4"
  hide-header
  hide-footer
  >
  Shadow: {{ shadow }}
</v-card>
`,
});

export const DarkMode: Story<{}> = () => ({
  components: {VCard},
  setup() {
    return {defaultColors};
  },
  template: `
<main class="dark dark:bg-neutral-900 dark:text-neutral-200 p-6 space-y-2">
  <VCard v-for="color in defaultColors" :key="color" :color="color">
    {{ color }}
  </VCard>
</main>
`,
});

const DummyLink = defineComponent({
  template: `<a><slot /></a>`,
});

export const CustomComponent: Story<{}> = () => ({
  components: {VCard, DummyLink},
  setup() {
    return {defaultColors};
  },
  template: `
  <div class="space-y-4">
    <VCard>
      Default
    </VCard>

    <VCard to="/home">
      <p>With <code>to</code> props</p>
    </VCard>

    <VCard to="/about" nuxt>
      <p>With <code>to</code> props. As <code>NuxtLink</code>.</p>
    </VCard>

    <VCard href="https://www.google.com">
      As anchor
    </VCard>

    <VCard href="https://www.google.com" target="_blank">
      <p>As anchor with <code>target="_blank"</code></p>
    </VCard>

    <VCard href="https://www.google.com" target="_blank" rel="noopener">
      <p>As anchor with <code>target="_blank"</code> and <code>rel</code></p>
    </VCard>

    <VCard as="DummyLink">
      <p>As <code>DummyLink</code></p>
    </VCard>
  </div>
`,
});
