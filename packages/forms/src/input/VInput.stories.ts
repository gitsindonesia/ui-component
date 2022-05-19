import VInput from './VInput.vue';
import {sizes} from '@gits-id/utils/sizes';
import {Meta, Story} from '@storybook/vue3';
import type {VInputProps} from './types';
import {RiSearchLine} from 'vue-remix-icons';
import {themeColors} from '@gits-id/utils';
import VBtn from '@gits-id/button';
import {useForm} from 'vee-validate';
import {object, string} from 'yup';

export default {
  title: 'Forms/Input',
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
  components: {VInput},
  setup() {
    return {args};
  },
  template: `
  <VInput v-bind='args'/>
`,
});

export const Variants: Story<VInputProps> = (args) => ({
  components: {VInput},
  setup() {
    return {args, themeColors};
  },
  template: `
    <div class='space-y-2 border-none'>
      <template v-for='color in themeColors' :key='color'>
        <div class='mb-2'>
          <label :for='color'>{{ color }}</label>
          <VInput :id='color' v-bind='args' :color='color'/>
        </div>
      </template>
    </div>
`,
});
Variants.parameters = {
  docs: {
    source: {
      code: `
<v-input color="default" />
<v-input color="primary" />
<v-input color="secondary" />
<v-input color="info" />
<v-input color="warning" />
<v-input color="success" />
<v-input color="error" />
<v-input color="dark" />
<v-input color="blue" />
      `,
    },
  },
};

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: `<v-input />`,
    },
  },
};

export const Label = Template.bind({});
Label.args = {
  label: 'Name',
  id: 'name',
};
Label.parameters = {
  docs: {
    source: {
      code: `<v-input label="Name" id="name" />`,
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
  modelValue: 'sometext',
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
  modelValue: 'Lorem ipsum',
  class: 'text-sm font-semibold',
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
  components: {VInput, RiSearchLine, VBtn},
  setup() {
    return {args};
  },
  template: `
<h3 class="font-semibold text-xl mb-3 mt-5">Icon</h3>
<div class="space-y-1 border-none">
  <v-input placeholder="Search...">
    <template #prepend.outer>
      <RiSearchLine class="fill-current mr-1 w-5 h-5" />
    </template>
  </v-input>

  <v-input placeholder="Search...">
    <template #append.outer>
      <RiSearchLine class="fill-current mr-3 w-5 h-5" />
    </template>
  </v-input>

  <v-input placeholder="Search..." class="pl-10">
    <template #prepend>
      <RiSearchLine class="fill-current ml-3 w-5 h-5" />
    </template>
  </v-input>

  <v-input placeholder="Search...">
    <template #append>
      <RiSearchLine class="fill-current mr-3 w-5 h-5" />
    </template>
  </v-input>

  <h3 class="font-semibold text-xl mb-3 mt-5">Text</h3>
  <v-input placeholder="Search...">
    <template #prepend.outer>
      Text
    </template>
  </v-input>

  <v-input placeholder="Search...">
    <template #append.outer>
      Text
    </template>
  </v-input>

  <v-input placeholder="username" class="pl-40">
    <template #prepend>
      <span class="ml-3 text-gray-700 font-medium">https://gits.id/user/</span>
    </template>
  </v-input>

  <v-input placeholder="username">
    <template #append>
      <span class="mr-3">@gits.id</span>
    </template>
  </v-input>

  <h3 class="font-semibold text-xl mb-3 mt-5">Button</h3>
  <v-input placeholder="Type...">
    <template #prepend.outer>
      <v-btn>Search</v-btn>
    </template>
  </v-input>

  <v-input placeholder="Type...">
    <template #append.outer>
      <v-btn>Search</v-btn>
    </template>
  </v-input>

  <v-input placeholder="No File Selected" class="pl-20">
    <template #prepend>
      <v-btn text>Browse</v-btn>
    </template>
  </v-input>

  <v-input placeholder="No File Selected">
    <template #append>
      <v-btn text>Browse</v-btn>
    </template>
  </v-input>
</div>
  `,
});
Slots.parameters = {
  docs: {
    source: {
      code: `
<h3 class="font-semibold text-xl mb-3 mt-5">Icon</h3>
<div class="space-y-1 border-none">
  <v-input placeholder="Search...">
    <template #prepend.outer>
      <RiSearchLine class="fill-current mr-1 w-5 h-5" />
    </template>
  </v-input>

  <v-input placeholder="Search...">
    <template #append.outer>
      <RiSearchLine class="fill-current mr-3 w-5 h-5" />
    </template>
  </v-input>

  <v-input placeholder="Search..." input-class="pl-10">
    <template #prepend>
      <RiSearchLine class="fill-current w-5 h-5" />
    </template>
  </v-input>

  <v-input placeholder="Search...">
    <template #append>
      <RiSearchLine class="fill-current w-5 h-5" />
    </template>
  </v-input>

  <h3 class="font-semibold text-xl mb-3 mt-5">Text</h3>
  <v-input placeholder="Search...">
    <template #prepend.outer>
      Text
    </template>
  </v-input>

  <v-input placeholder="Search...">
    <template #append.outer>
      Text
    </template>
  </v-input>

  <v-input placeholder="username" class="pl-40">
    <template #prepend>
      <span class="ml-3 text-gray-700 font-medium">https://gits.id/user/</span>
    </template>
  </v-input>

  <v-input placeholder="username">
    <template #append>
      <span class="mr-3">@gits.id</span>
    </template>
  </v-input>

  <h3 class="font-semibold text-xl mb-3 mt-5">Button</h3>
  <v-input placeholder="Type...">
    <template #prepend.outer>
      <v-btn>Search</v-btn>
    </template>
  </v-input>

  <v-input placeholder="Type...">
    <template #append.outer>
      <v-btn>Search</v-btn>
    </template>
  </v-input>

  <v-input placeholder="No File Selected" class="pl-20">
    <template #prepend>
      <v-btn text>Browse</v-btn>
    </template>
  </v-input>

  <v-input placeholder="No File Selected">
    <template #append>
      <v-btn text>Browse</v-btn>
    </template>
  </v-input>
</div>
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

export const Validation: Story<VInputProps> = (args) => ({
  components: {VInput, VBtn},
  setup() {
    const schema = object({
      name: string().required().label('Name'),
      email: string().required().email().label('Email'),
    });

    const {handleSubmit, resetForm} = useForm({
      validationSchema: schema,
    });

    const onSubmit = handleSubmit((values) => {
      alert(JSON.stringify(values));
    });

    return {onSubmit, resetForm};
  },
  template: `
    <form @submit="onSubmit" class="border-none">
      <v-input wrapper-class="mb-2" name="name" label="Name" placeholder="Your Name" />
      <v-input wrapper-class="mb-2" name="email" label="Email" placeholder="Your Email" />
      <div class="mt-4">
        <v-btn type="submit">Submit</v-btn>
        <v-btn type="button" text @click="resetForm">Reset</v-btn>
      </div>
    </form>
`,
});
