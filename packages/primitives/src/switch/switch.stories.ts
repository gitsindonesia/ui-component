import type {StoryFn} from '@storybook/vue3';
import {Switch, SwitchThumb, SwitchLabel} from './switch';
import {ref} from 'vue';

export default {
  title: 'Primitives/Switch',
  component: Switch,
  subcomponents: {
    SwitchThumb,
    SwitchLabel,
  },
};

export const Default: StoryFn = (args) => ({
  components: {Switch, SwitchThumb},
  setup() {
    const enabled = ref(false);
    return {args, enabled};
  },
  template: `
    <Switch
      v-bind="args"
      v-model="enabled"
    >
      <SwitchThumb 
        class="
          relative inline-flex items-center w-16 h-8 rounded-full
          transition-colors duration-200
          data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-200
        "
      >
        <span class="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          :class="enabled ? 'translate-x-9' : 'translate-x-1'"
          class="pointer-events-none inline-block w-6 h-6 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
        />
      </SwitchThumb>
    </Switch>
  `,
});

export const DefaultValue: StoryFn = (args) => ({
  components: {Switch, SwitchThumb},
  setup() {
    const enabled = ref(true);
    return {args, enabled};
  },
  template: `
    <Switch
      v-bind="args"
      v-model="enabled"
    >
      <SwitchThumb 
        class="
          relative inline-flex items-center w-16 h-8 rounded-full
          transition-colors duration-200
          data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-200
        "
      >
        <span class="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          :class="enabled ? 'translate-x-9' : 'translate-x-1'"
          class="pointer-events-none inline-block w-6 h-6 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
        />
      </SwitchThumb>
    </Switch>
  `,
});

export const Label: StoryFn = (args) => ({
  components: {Switch, SwitchLabel, SwitchThumb},
  setup() {
    const enabled = ref(false);
    return {args, enabled};
  },
  template: `
    <Switch
      v-bind="args"
      v-model="enabled"
      name="notification"
      class="flex items-center gap-2"
    >
      <SwitchThumb 
        class="
          relative inline-flex items-center w-16 h-8 rounded-full
          transition-colors duration-200
          data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-200
        "
      >
        <span
          aria-hidden="true"
          :class="enabled ? 'translate-x-9' : 'translate-x-1'"
          class="pointer-events-none inline-block w-6 h-6 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
        />
      </SwitchThumb>
      <SwitchLabel class="select-none" for="notification">
        Enable notification
      </SwitchLabel>
    </Switch>
  `,
});

export const Form: StoryFn = (args) => ({
  components: {Switch, SwitchLabel, SwitchThumb},
  setup() {
    const enabled = ref(false);
    return {args, enabled};
  },
  template: `
  <form>
    <Switch
      v-bind="args"
      v-model="enabled"
      name="notification"
      class="flex items-center gap-2"
    >
      <SwitchThumb 
        class="relative inline-flex items-center w-16 h-8 rounded-full transition-colors duration-200"
        :class="enabled ? 'bg-green-500' : 'bg-gray-200'"
      >
        <span
          aria-hidden="true"
          :class="enabled ? 'translate-x-9' : 'translate-x-1'"
          class="pointer-events-none inline-block w-6 h-6 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
        />
      </SwitchThumb>
      <SwitchLabel class="select-none" for="notification">
        Enable notification
      </SwitchLabel>
    </Switch>

    <button class="bg-primary-600 shadow border-primary-600 text-white border rounded-lg px-4 py-2 mt-5" type="submit">Submit</button>
  </form>
  `,
});
