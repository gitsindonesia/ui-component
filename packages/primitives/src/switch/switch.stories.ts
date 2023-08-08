import type {Story} from '@storybook/vue3';
import {Switch, SwitchGroup, SwitchLabel} from './switch';
import {ref} from 'vue';

export default {
  title: 'Primitives/Switch',
  component: Switch,
};

export const Default: Story = (args) => ({
  components: {Switch},
  setup() {
    const enabled = ref(false);
    return {args, enabled};
  },
  template: `
    <Switch
      v-bind="args"
      v-model="enabled"
      class="relative inline-flex items-center w-16 h-8 rounded-full transition-colors duration-200"
      :class="enabled ? 'bg-green-500' : 'bg-gray-200'"
    >
      <span class="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        :class="enabled ? 'translate-x-9' : 'translate-x-1'"
        class="pointer-events-none inline-block w-6 h-6 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
      />
    </Switch>
  `,
});

export const Label: Story = (args) => ({
  components: {Switch, SwitchLabel, SwitchGroup},
  setup() {
    const enabled = ref(false);
    return {args, enabled};
  },
  template: `
    <SwitchGroup class="flex items-center gap-4">
      <Switch
        v-bind="args"
        v-model="enabled"
        class="relative inline-flex items-center w-16 h-8 rounded-full transition-colors duration-200"
        :class="enabled ? 'bg-green-500' : 'bg-gray-200'"
      >
        <span class="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          :class="enabled ? 'translate-x-9' : 'translate-x-1'"
          class="pointer-events-none inline-block w-6 h-6 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
        />
      </Switch>
      <SwitchLabel class="select-none">Enable notifications</SwitchLabel>
    </SwitchGroup>
  `,
});
