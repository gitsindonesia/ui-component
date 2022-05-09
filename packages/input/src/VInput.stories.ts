import VInput from './VInput.vue';
import {sizes} from '@gits-id/utils/sizes';
import {Meta, Story} from '@storybook/vue3';
import type {VInputProps} from './types';
import {RiSearchLine} from 'vue-remix-icons';
import {themeColors} from '@gits-id/utils';

export default {
  title: 'Components/Form/Input',
  component: VInput,
  argTypes: {
    size: {
      control: 'select',
      options: sizes,
    },
    color: {
      control: 'select',
      options: themeColors,
    },
  },
  args: {
    value: '',
    modelValue: '',
    placeholder: 'Type something...',
    type: 'text',
    color: 'primary',
    name: '',
    error: false,
    errorMessages: [],
    readonly: false,
    disabled: false,
    size: 'default',
    shadow: false,
    text: false,
  },
} as Meta;

const Template: Story<VInputProps> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: {VInput},
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {args};
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
  <VInput v-bind='args'/>
`,
});

export const Variants: Story<VInputProps> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: {VInput},
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {args, themeColors};
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <div class='space-y-2 border-none'>
      <template v-for='color in themeColors' :key='color'>
        <div class='mb-2'>
          <label :for='color'>{{ color }}</label>
          <VInput :id='color' :color='color' v-bind='args'/>
        </div>
      </template>
    </div>
`,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: '<v-input />',
    },
  },
};

export const Email = Template.bind({});
Email.args = {
  type: 'email',
  value: 'example@domain.com',
};
Email.parameters = {
  docs: {
    source: {
      code: '<v-input type="email" />',
    },
  },
};

export const Readonly = Template.bind({});
Readonly.args = {
  readonly: true,
};
Readonly.parameters = {
  docs: {
    source: {
      code: '<v-input readonly />',
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
Disabled.parameters = {
  docs: {
    source: {
      code: '<v-input disabled />',
    },
  },
};

export const Shadow = Template.bind({});
Shadow.args = {
  shadow: true,
};
Shadow.parameters = {
  docs: {
    source: {
      code: '<v-input shadow />',
    },
  },
};

export const Text = Template.bind({});
Text.args = {
  text: true,
};
Text.parameters = {
  docs: {
    source: {
      code: '<v-input text />',
    },
  },
};

export const Error = Template.bind({});
Error.args = {
  error: true,
  errorMessages: ['Field is required'],
};
Error.parameters = {
  docs: {
    source: {
      code: `<v-input error :error-messages="['Field is required']" />`,
    },
  },
};

export const Slots: Story<VInputProps> = (args) => ({
  components: {VInput, RiSearchLine},
  setup() {
    return {args};
  },
  template: `
<div class="space-y-2 border-none">
  <v-input placeholder="Search...">
    <template #prepend>
      <RiSearchLine class="fill-current ml-2 -mr-2 w-5 h-5" />
    </template>
  </v-input>

  <v-input placeholder="Search...">
    <template #append>
      <RiSearchLine class="fill-current mr-3 w-5 h-5" />
    </template>
  </v-input>
</div>
  `,
});
Slots.parameters = {
  docs: {
    source: {
      code: `
<v-input placeholder="Search...">
  <template #prepend>
    <RiSearchLine class="fill-current ml-2 -mr-2 w-5 h-5" />
  </template>
</v-input>

<v-input placeholder="Search...">
  <template #append>
    <RiSearchLine class="fill-current mr-3 w-5 h-5" />
  </template>
</v-input>
      `,
    },
  },
};

export const Sizes: Story<VInputProps> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: {VInput},
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {args, sizes};
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
<div class="flex gap-2 flex-wrap border-none">
  <VInput v-for="size in sizes" :key="size" v-bind='args' :size="size" :placeholder="size"/>
</div>
`,
});
Sizes.parameters = {
  docs: {
    source: {
      code: `<v-input size="xs" />
<v-input size="sm" />
<v-input size="md" />
<v-input size="lg" />
<v-input size="xl" />
      `,
    },
  },
};
