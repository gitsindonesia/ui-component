import {Meta, Story} from '@storybook/vue3';
import {useForm, Field} from 'vee-validate';
import {object, boolean} from 'yup';
import VBtn from '@morpheme/button';
import {ref} from 'vue';
import VSwitch from './Switch.vue';
import VSwitchField from './VSwitch.vue';

export default {
  title: 'Forms/Switch',
  component: VSwitch,
  args: {
    label: 'Label',
  },
} as Meta;

const Template: Story = (args) => ({
  components: {
    VSwitch,
  },
  setup() {
    const checked = ref(true);
    return {args, checked};
  },
  template: `
  <v-switch v-bind="args" v-model="checked" />
  <pre>Model value: {{ checked }}</pre>
  `,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: `<v-switch v-model="model" />`,
    },
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
};
Secondary.parameters = {
  docs: {
    source: {
      code: `<v-switch v-model="model" color="secondary" />`,
    },
  },
};

export const Success = Template.bind({});
Success.args = {
  color: 'success',
};
Success.parameters = {
  docs: {
    source: {
      code: `<v-switch v-model="model" color="success" />`,
    },
  },
};

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
};
Primary.parameters = {
  docs: {
    source: {
      code: `<v-switch v-model="model" color="primary" />`,
    },
  },
};

export const Error = Template.bind({});
Error.args = {
  color: 'error',
};
Error.parameters = {
  docs: {
    source: {
      code: `<v-switch v-model="model" color="error" />`,
    },
  },
};

export const Info = Template.bind({});
Info.args = {
  color: 'info',
};
Info.parameters = {
  docs: {
    source: {
      code: `<v-switch v-model="model" color="info" />`,
    },
  },
};

export const Warning = Template.bind({});
Warning.args = {
  color: 'warning',
};
Warning.parameters = {
  docs: {
    source: {
      code: `<v-switch v-model="model" color="warning" />`,
    },
  },
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  color: 'warning',
  label: '',
};
NoLabel.parameters = {
  docs: {
    source: {
      code: `<v-switch v-model="model" color="warning" />`,
    },
  },
};

export const Hint = Template.bind({});
Hint.args = {
  hint: 'This is a hint',
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  error: true,
  errorMessage: 'This is an error',
};

export const CustomClass = Template.bind({});
CustomClass.args = {
  color: '',
  label: 'Custom Switch',
  switchClass: '!border !border-cyan-200',
  activeClass: '!bg-white',
  inactiveClass: '!bg-white',
  buttonClass: '!bg-cyan-500',
};
CustomClass.parameters = {
  docs: {
    source: {
      code: `
<v-switch
  v-model="model"       
  color=""
  label="Custom Switch"
  switch-class="!border-cyan-200"
  active-class="!bg-white"
  inactive-class="!bg-white"
  button-class="!bg-cyan-500"
/>`,
    },
  },
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  label: 'Custom Style',
  color: 'custom',
  style: {
    '--v-switch-button-bg-color': 'transparent',
    '--v-switch-button-border-color': 'purple',
    '--v-switch-button-checked-bg-color': 'transparent',
    '--v-switch-button-checked-border-color': 'purple',
    '--v-switch-button-padding-x': '0.125rem',
    '--v-switch-thumb-bg-color': 'purple',
    '--v-switch-thumb-width': '1rem',
    '--v-switch-thumb-height': '1rem',
  },
};

export const Validation: Story<{}> = () => ({
  components: {VSwitch: VSwitchField, Field, VBtn},
  setup() {
    const schema = object({
      agreement: boolean()
        .oneOf([true], 'You must agree to terms and condition')
        .required()
        .label('Agreement'),
      notification: boolean()
        .oneOf([true], 'You must enable notification')
        .required()
        .label('Notification'),
    });

    const {handleSubmit, resetForm, values, errors} = useForm({
      validationSchema: schema,
      initialValues: {
        agreement: false,
        notification: true,
      },
    });

    const onSubmit = handleSubmit((values) => {
      alert(JSON.stringify(values));
    });

    return {onSubmit, resetForm, values, errors};
  },
  template: `
    <form @submit="onSubmit" class="border-none">
      <VSwitch
        wrapper-class="mb-4"
        name="notification"
        label="Enable Notification"
      />
      <VSwitch
        wrapper-class="mb-4"
        name="agreement"
        label="Agreement"
      />
      <div class="mt-4">
        <v-btn type="submit">Submit</v-btn>
        <v-btn type="button" text @click="resetForm">Reset</v-btn>
      </div>
      <div class="my-5">Debug:</div>
      <pre>{{ {errors, values} }}</pre>
    </form>
`,
});

export const Sizes: Story = (args) => ({
  components: {
    VSwitch,
  },
  setup() {
    const checked = ref(true);
    return {args, checked};
  },
  template: `
  <v-switch v-bind="args" v-model="checked" size="sm" />
  <v-switch v-bind="args" v-model="checked" />
  <v-switch v-bind="args" v-model="checked" size="lg" />
  `,
});

export const DarkMode: Story = (args) => ({
  components: {VSwitch},
  setup() {
    args.modelValue = true;
    return {args};
  },
  template: `
  <div class="dark dark:bg-neutral-900 dark:text-neutral-200 p-6">
    <VSwitch v-bind='args' />
    <VSwitch v-bind='args' color="secondary" />
    <VSwitch v-bind='args' color="success" />
    <VSwitch v-bind='args' color="error" />
    <VSwitch v-bind='args' color="warning" />
    <VSwitch v-bind='args' color="info" />
  </div>
  `,
});
