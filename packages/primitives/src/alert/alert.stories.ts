import type {Story} from '@storybook/vue3';
import {Alert} from './alert';
import {ref} from 'vue';
import {XCloseIcon} from '@morphemeicons/vue/untitled';

export default {
  title: 'Primitives/Alert',
  component: Alert,
};

export const Default: Story = (args) => ({
  components: {Alert, XCloseIcon},
  setup() {
    return {args};
  },
  template: `
    <Alert
      v-bind="args"
      v-slot="{hide}"
      class="bg-green-500 text-white text-sm p-4 rounded-lg flex justify-between items-center"
    >
      This is the title

      <button @click="hide">
        <XCloseIcon class="w-5 h-5" />
      </button>
    </Alert>
  `,
});

export const Transition: Story = (args) => ({
  components: {Alert, XCloseIcon},
  setup() {
    return {args};
  },
  template: `
    <transition name="fade">
      <Alert
        v-bind="args"
        v-slot="{hide}"
        class="bg-green-500 text-white text-sm p-4 rounded-lg flex justify-between items-center"
      >
        This is the title

        <button @click="hide">
          <XCloseIcon class="w-5 h-5" />
        </button>
      </Alert>
    </transition>
  `,
});

export const CustomRender: Story = (args) => ({
  components: {Alert, XCloseIcon},
  setup() {
    return {args};
  },
  template: `
    <Alert
      v-bind="args"
      v-slot="{hide}"
      as="p"
      class="bg-amber-500 mb-4 text-white text-sm p-4 rounded-lg flex justify-between items-center"
    >
      This alert is rendered as a paragraph

      <button @click="hide">
        <XCloseIcon class="w-5 h-5" />
      </button>
    </Alert>

    <Alert
      v-bind="args"
      v-slot="{hide}"
      as="template"
    >
      <div
        role="alert"
        class="bg-rose-500 text-white text-sm p-4 rounded-lg flex justify-between items-center"
      >
        This alert is rendered as a template

        <button @click="hide">
          <XCloseIcon class="w-5 h-5" />
        </button>
      </div>
    </Alert>
  `,
});

export const VModel: Story = (args) => ({
  components: {Alert, XCloseIcon},
  setup() {
    const isOpen = ref(true);
    return {args, isOpen};
  },
  template: `
    <Alert
      v-bind="args"
      v-slot="{hide}"
      v-model="isOpen"
      class="bg-fuchsia-500 mb-4 text-white text-sm p-4 rounded-lg flex justify-between items-center"
    >
      This alert is rendered as a paragraph

      <div class="flex items-center gap-2">
        <button @click="hide">
          <XCloseIcon class="w-5 h-5" />
        </button>
      </div>
    </Alert>
    <button @click="isOpen = !isOpen">
      {{ isOpen ? 'Hide' : 'Show' }} Alert
    </button>
  `,
});

export const Styled: Story = (args) => ({
  components: {Alert},
  setup() {
    return {args};
  },
  template: `
    <transition name="fade">
      <Alert
        v-bind="args"
        v-slot="{hide}"
        class="bg-red-500 text-white text-sm p-4 rounded-lg flex justify-between items-center"
      >
        This is the title

        <button @click="hide">
          Close
        </button>
      </Alert>
    </transition>
  `,
});
