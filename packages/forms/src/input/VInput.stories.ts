import VInput from './VInput.vue';
import {Meta, Story} from '@storybook/vue3';
import type {VInputProps} from './types';
import Icon from '@morpheme/icon';
import {themeColors} from '@morpheme/utils';
import VBtn from '@morpheme/button';
import {useForm} from 'vee-validate';
import {object, string} from 'yup';
import FieldArrayStory from './stories/FieldArray.story.vue';
import FieldArrayOfObject from './stories/FieldArrayOfObject.story.vue';
import FieldArrayNestedComponent from './stories/FieldArrayNested.story.vue';
import {ref} from 'vue';
import FormsPlaygroundComponent from './stories/FormsPlayground.vue';

const sizes = ['sm', 'md', 'lg'] as const;

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
    validationMode: {
      control: 'select',
      options: ['aggressive', 'eager'],
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
  errorMessages: ['Field is required'],
};
Error.parameters = {
  docs: {
    source: {
      code: `<v-input error :error-messages="['Field is required']" />`,
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

export const ValidationMode: Story<VInputProps> = (args) => ({
  components: {VInput, VBtn},
  setup() {
    const schema = object({
      name_eager: string().required().label('Name'),
      email_eager: string().required().email().label('Email'),
      name_aggressive: string().required().label('Name'),
      email_aggressive: string().required().email().label('Email'),
    });

    const {handleSubmit, resetForm} = useForm({
      validationSchema: schema,
    });

    const modes = ref(['eager', 'aggressive']);

    const onSubmit = handleSubmit((values) => {
      alert(JSON.stringify(values));
    });

    return {modes, onSubmit, resetForm};
  },
  template: `
    <form @submit="onSubmit">
      <div class="flex flex-wrap gap-4">
        <fieldset
            class="border-none flex-1"
            v-for="mode in modes"
            :key="mode"
        >
          <legend>Mode: {{ mode }}</legend>
          <v-input wrapper-class="mb-2" :name="'name_'+mode" label="Name" placeholder="Your Name" :validation-mode="mode"/>
          <v-input wrapper-class="mb-2" :name="'email_'+mode" label="Email" placeholder="Your Email" :validation-mode="mode"/>
        </fieldset>
      </div>
      <div class="mt-4">
        <v-btn type="submit">Submit</v-btn>
        <v-btn type="button" text @click="resetForm">Reset</v-btn>
      </div>
    </form>
  `,
});

export const FieldArrays: Story<VInputProps> = () => ({
  components: {FieldArrayStory},
  template: `<FieldArrayStory />`,
});

export const FieldArrayOfObjects: Story<VInputProps> = () => ({
  components: {FieldArrayOfObject},
  template: `<FieldArrayOfObject />`,
});

export const FieldArrayNested: Story<VInputProps> = () => ({
  components: {FieldArrayNestedComponent},
  template: `<FieldArrayNestedComponent />`,
});

export const FormsPlayground: Story<VInputProps> = () => ({
  components: {FormsPlaygroundComponent},
  template: `<FormsPlaygroundComponent />`,
});

export const TestInputState: Story<{}> = (args) => ({
  components: {VBtn, VInput},
  setup() {
    const modelValue = ref('');
    const modelValue2 = ref('');
    const initialValues = ref({
      text: args.setupWithInitialValue ? 'init' : '',
      text2: args.setupWithInitialValue ? 'init2' : '',
    });

    const {handleSubmit, resetForm, values} = args.useForm
      ? useForm({
          initialValues,
        })
      : {handleSubmit: (cb: any) => null, resetForm: () => null, values: {}};

    const onSubmit = handleSubmit((values: any) => {
      alert(JSON.stringify(values));
    });

    const onChange = (val: any) => {
      alert('onChange: ' + val);
    };

    const resetVVForm = () => {
      if (!args.useForm) {
        alert(
          'Story is not set up with Vee Validate Form. set `useForm` control to true to try this action.',
        );
      }

      initialValues.value = {
        text: 'changes',
        text2: 'change me too!',
      };

      resetForm();
    };

    return {
      args,
      onSubmit,
      resetForm,
      values,
      modelValue,
      modelValue2,
      onChange,
      resetVVForm,
    };
  },
  template: `
    <form @submit="onSubmit" class="border-none">
    <h1 class="mb-8 font-semibold">{{ args.useForm ? 'with' : 'without' }} VeeValidate Form</h1>

    <button 
      type="button" @click="resetVVForm" 
      class="bg-red-400 text-white text-sm p-2 rounded"
    >
      Change Initial Value & Reset Form! <span class="text-[10px]">(Vee Validate only)</span>
    </button>

    <div class="flex flex-wrap">
      <div class="w-1/2 p-2">
        <v-input
          name="text"
          label="Only Name"
          :value="args.value"
          :clearable="args.clearable"
        />
        <div class="text-xs">
          When used without vee validate, should not change "Vmodel" value or any other value unless
          explicitly implemented<br />
          With veevalidate, should update form values under "text" key only
        </div>
      </div>

      <div class="w-1/2 p-2">
        <v-input
          v-model="modelValue"
          label="Only VModel"
          :value="args.value"
          :clearable="args.clearable"
        />
        <div class="text-xs">Should update "modelValue" only</div>
      </div>

      <div class="w-1/2 p-2">
        <v-input
          v-model="modelValue2"
          name="text2"
          label="VModel and Name"
          :value="args.value"
          :clearable="args.clearable"
        />
        <div class="text-xs">Should update form values under "text2" (with vee validate) key AND "modelValue2"</div>
      </div>

      <div class="w-1/2 p-2">
        <v-input
          label="Uncontrolled"
          placeholder="Uncontrolled input"
          @change="onChange"
          :value="args.value"
          :clearable="args.clearable"
        />
        <div class="text-xs">Should not change any value unless explicitly implemented</div>
      </div>

      <div class="w-1/2 p-2">
        <v-input
          value="doremi"
          label="Initial Value w/ value prop "
        />
      </div>

      <div class="w-1/2 p-2">
        <v-input
          model-value="fasola"
          label="Initial Value w/ modelValue prop "
        />
      </div>

      <div class="w-1/2 p-2">
        <v-input
          value="initial"
          name="init1"
          label="Initial Value w/ value prop + name"
        />
      </div>

      <div class="w-1/2 p-2">
        <v-input
          model-value="modelvalue"
          name="init2"
          label="Initial Value w/ modelValue prop + name"
        />
      </div>
    </div>

    <div class="mt-4">
      <v-btn type="submit">Submit</v-btn>
      <v-btn type="button" text @click="resetForm">Reset</v-btn>
    </div>

    <pre>{{ {values, modelValue, modelValue2} }}</pre>
    </form>
  `,
});
TestInputState.args = {
  useForm: false,
  setupWithInitialValue: false,
  value: undefined,
  clearable: true,
};

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
      />
    </div>
  `,
});
