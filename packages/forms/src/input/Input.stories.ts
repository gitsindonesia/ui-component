import VInput from './Input.vue';
import {Meta, Story} from '@storybook/vue3';
import type {VInputProps} from './types';
import Icon from '@morpheme/icon';
import {themeColors} from '@morpheme/utils';
import VBtn from '@morpheme/button';
import {useForm} from 'vee-validate';
import {object, string} from 'yup';
import {ref} from 'vue';
import InputField from './InputField.vue'

const sizes = ['sm', 'md', 'lg'] as const;

export default {
  title: 'Experimental/Forms/Input',
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
    placeholder: 'Type something...',
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

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: `<v-input />`,
    },
  },
};

export const ModelValue: Story<VInputProps> = (args) => ({
  components: {VInput},
  setup() {
    const value = ref('');
    return {args, value};
  },
  template: `
  <VInput v-bind='args' v-model="value" />
  <pre>Model Value: {{ value }}</pre>
`,
});

export const Colors: Story<VInputProps> = (args) => ({
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
Colors.parameters = {
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

export const Hint = Template.bind({});
Hint.args = {
  label: 'Name',
  id: 'name',
  hint: 'This is a hint',
};
Hint.parameters = {
  docs: {
    source: {
      code: `<v-input label="Name" id="name" hint="This is a hint" />`,
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

export const Borderless = Template.bind({});
Borderless.args = {
  borderless: true,
};
Borderless.parameters = {
  docs: {
    source: {
      code: '<v-input borderless />',
    },
  },
};

export const NoRingEffect = Template.bind({});
NoRingEffect.args = {
  noRing: true,
};
NoRingEffect.parameters = {
  docs: {
    source: {
      code: '<v-input noRing />',
    },
  },
};

export const Rounded = Template.bind({});
Rounded.args = {
  rounded: true,
  label: 'Rounded Input',
  prependIcon: 'mdi-search',
};
Rounded.parameters = {
  docs: {
    source: {
      code: '<v-input rounded />',
    },
  },
};

export const Text = Template.bind({});
Text.args = {
  text: true,
  label: 'Label',
  modelValue: 'Lorem ipsum',
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
  errorMessage: 'Field is required',
};
Error.parameters = {
  docs: {
    source: {
      code: `<v-input error error-message="Field is required" />`,
    },
  },
};

export const Icons: Story<VInputProps> = (args) => ({
  components: {VInput},
  setup() {
    const showAlert = (message: string) => {
      alert(message);
    };

    return {args, showAlert};
  },
  template: `
<div class="space-y-2">
  <VInput prepend-icon="ri:search-line" placeholder="Search..." @clickPrepend="showAlert('prepend click')"/>
  <VInput append-icon="ri:search-line" placeholder="Search..." @clickAppend="showAlert('append click')"/>
  <VInput prepend-icon="ic:baseline-add-reaction" placeholder="Search..." @clickPrependIcon="showAlert('prepend icon click')"/>
  <VInput append-icon="ic:baseline-add-reaction" placeholder="Search..." @clickAppendIcon="showAlert('append icon click')"/>
  <p>Custom Classes:</p>
  <VInput prepend-class="bg-gray-100 border-gray-200 border-r" prepend-icon="ri:search-line" placeholder="Search..." @clickPrepend="showAlert('prepend click')"/>
  <VInput append-class="bg-gray-100 border-gray-200 border-l" append-icon="ri:search-line" placeholder="Search..." @clickAppend="showAlert('append click')"/>
  <VInput prepend-icon-class="text-primary" prepend-icon="ic:baseline-add-reaction" placeholder="Search..." @clickPrependIcon="showAlert('prepend icon click')"/>
  <VInput append-icon-class="text-primary" append-icon="ic:baseline-add-reaction" placeholder="Search..." @clickAppendIcon="showAlert('append icon click')"/>
  <p>Rounded</p>
  <VInput prepend-icon="mdi-account" />
  <VInput rounded prepend-icon="mdi-account" />
</div>
`,
});
Icons.parameters = {
  docs: {
    source: {
      code: `
<div class="space-y-2">
  <VInput prepend-icon="ri:search-line" placeholder="Search..." @clickPrepend="showAlert('prepend click')"/>
  <VInput append-icon="ri:search-line" placeholder="Search..." @clickAppend="showAlert('append click')"/>
  <VInput prepend-icon="ic:baseline-add-reaction" placeholder="Search..." @clickPrependIcon="showAlert('prepend icon click')"/>
  <VInput append-icon="ic:baseline-add-reaction" placeholder="Search..." @clickAppendIcon="showAlert('append icon click')"/>
  <p>Custom Classes:</p>
  <VInput prepend-class="bg-gray-100 border-gray-200 border-r" prepend-icon="ri:search-line" placeholder="Search..." @clickPrepend="showAlert('prepend click')"/>
  <VInput append-class="bg-gray-100 border-gray-200 border-l" append-icon="ri:search-line" placeholder="Search..." @clickAppend="showAlert('append click')"/>
  <VInput prepend-icon-class="text-primary" prepend-icon="ic:baseline-add-reaction" placeholder="Search..." @clickPrependIcon="showAlert('prepend icon click')"/>
  <VInput append-icon-class="text-primary" append-icon="ic:baseline-add-reaction" placeholder="Search..." @clickAppendIcon="showAlert('append icon click')"/>
</div>
      `,
    },
  },
};

export const Slots: Story<VInputProps> = (args) => ({
  components: {VInput, Icon, VBtn},
  setup() {
    return {args};
  },
  template: `
<h3 class="font-semibold text-xl mb-3 mt-5">Outer</h3>
<div class="space-y-1 border-none">
  <v-input placeholder="Search...">
    <template #prepend.outer>
      <Icon name="ri:search-line" class="fill-current ml-3 w-5 h-5" />
    </template>
  </v-input>

  <v-input placeholder="Search...">
    <template #append.outer>
      <Icon name="ri:search-line" class="fill-current mr-3 w-5 h-5" />
    </template>
  </v-input>

<h3 class="font-semibold text-xl mb-3 mt-5">Inner</h3>
  <v-input placeholder="Search..." class="pl-10">
    <template #prepend>
      <Icon name="ri:search-line" class="fill-current w-5 h-5" />
    </template>
  </v-input>

  <v-input placeholder="Search...">
    <template #append>
      <Icon name="ri:search-line" class="fill-current w-5 h-5" />
    </template>
  </v-input>

  <h3 class="font-semibold text-xl mb-3 mt-5">Text</h3>
  <v-input placeholder="Search...">
    <template #prepend.outer>
      <span class="ml-3">Text</span>
    </template>
  </v-input>

  <v-input placeholder="Search...">
    <template #append.outer>
      <span class="mr-3">Text</span>
    </template>
  </v-input>

  <v-input placeholder="username">
    <template #prepend>
      <span class="text-gray-700 text-sm font-medium">https://gits.id/user/</span>
    </template>
  </v-input>

  <v-input placeholder="username">
    <template #append>
      <span>@gits.id</span>
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

  <v-input placeholder="No File Selected" prepend-class="!pl-0">
    <template #prepend>
      <v-btn text no-ring>Browse</v-btn>
    </template>
  </v-input>

  <v-input placeholder="No File Selected" append-class="!pr-0">
    <template #append>
      <v-btn text no-ring>Browse</v-btn>
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
      <Icon name="ri:search" class="fill-current mr-1 w-5 h-5" />
    </template>
  </v-input>

  <v-input placeholder="Search...">
    <template #append.outer>
      <Icon name="ri:search" class="fill-current mr-3 w-5 h-5" />
    </template>
  </v-input>

  <v-input placeholder="Search..." input-class="pl-10">
    <template #prepend>
      <Icon name="ri:search" class="fill-current w-5 h-5" />
    </template>
  </v-input>

  <v-input placeholder="Search...">
    <template #append>
      <Icon name="ri:search" class="fill-current w-5 h-5" />
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
  components: {VInput},
  setup() {
    return {args, sizes};
  },
  template: `
<div class="space-y-2">
  <VInput
    v-for="size in sizes"
    :key="size"
    v-bind='args'
    :size="size" 
    label="Label" 
    :placeholder="size"
    prepend-icon="ri:user-line"
    append-icon="ri:add-line"
  />
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
export const Clearable: Story<VInputProps> = (args) => ({
  components: {VInput},
  setup() {
    const value = ref('');
    return {args, value};
  },
  template: `
  <VInput
    name="foo"
    label="Username"
    placeholder="Username..."
    clearable
    wrapper-class="mb-4"
  />
  <VInput
    name="password"
    label="Password"
    placeholder="Password..."
    clearable
    wrapper-class="mb-4"
  />
`,
});
Sizes.parameters = {
  docs: {
    source: {
      code: `
      `,
    },
  },
};

export const Validation: Story<VInputProps> = (args) => ({
  components: {InputField, VBtn},
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
      <InputField
        wrapper-class="mb-2"
        name="name"
        label="Name"
        placeholder="Your Name"
      />
      <InputField
        wrapper-class="mb-2"
        name="email"
        label="Email"
        placeholder="Your Email"
      />
      <div class="mt-4">
        <v-btn type="submit">Submit</v-btn>
        <v-btn type="button" text @click="resetForm">Reset</v-btn>
      </div>
    </form>
`,
});

export const InputTypes: Story<VInputProps> = (args) => ({
  components: {InputField, VBtn},
  setup() {
    const types = [
      'text',
      'password',
      'email',
      'number',
      'url',
      'tel',
      'search',
      'date',
      'time',
      'datetime-local',
    ]
    const {values} = useForm({});
    return {args, types, values};
  },
  template: `
    <form>
      <InputField
        v-for="type in types"
        :key="type"
        v-bind='args'
        :type="type"
        wrapper-class="mb-2"
        :name="type"
        :label="type"
        :placeholder="type"
      />
      <pre>{{ values }}</pre>
    </form>
`,
});

// dark mode VInput story
export const DarkMode: Story<VInputProps> = (args) => ({
  components: {VInput},
  setup() {
    const modelValue = ref('');
    return {args, modelValue};
  },
  template: `
    <div class="dark dark:bg-neutral-900 dark:text-neutral-200 p-4"> 
      <v-input
        v-model="modelValue"
        label="Label"
        placeholder="Placeholder"
        hint="This is a hint"
        name="email"
        wrapper-class="mb-4"
      />
      <v-input
        label="Password"
        placeholder="Placeholder"
        hint="This is a hint"
        name="password"
      />
    </div>
  `,
});
