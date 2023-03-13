import VSwitch from '../src/VSwitch.vue';
import {Meta, Story} from '@storybook/vue3';
import {useForm} from 'vee-validate';
import {object, boolean} from 'yup';
import VBtn from '@gits-id/button';
import {ref} from 'vue';
import '@gits-id/forms/src/forms.scss';
import '@gits-id/forms/src/forms.dark.scss';
import './VSwitch.dark.scss';

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
  template: `<v-switch v-bind="args" v-model="checked" />`,
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

export const CustomClass = Template.bind({});
CustomClass.args = {
  color: '',
  label: 'Custom Switch',
  switchClass: '!border-cyan-200',
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

export const CustomStyle: Story<{}> = () => ({
  components: {VSwitch, VBtn},
  template: `
    <VSwitch
      label="Custom Style"
      color="custom"
      :style="{
        '--v-switch-button-bg-color': 'transparent',
        '--v-switch-button-border-color': 'purple',
        '--v-switch-button-checked-bg-color': 'transparent',
        '--v-switch-button-checked-border-color': 'purple',
        '--v-switch-button-padding-x': '0.125rem',
        '--v-switch-thumb-bg-color': 'purple',
        '--v-switch-thumb-width': '1rem',
        '--v-switch-thumb-height': '1rem',
      }"
    />
`,
});

export const Validation: Story<{}> = () => ({
  components: {VSwitch, VBtn},
  setup() {
    const schema = object({
      agreement: boolean()
        .oneOf([true], 'You must agree to terms and condition')
        .required()
        .label('Agreement'),
    });

    const {handleSubmit, resetForm, values, errors} = useForm({
      validationSchema: schema,
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

export const DarkMode: Story = (args) => ({
  components: {VSwitch},
  setup() {
    return {args};
  },
  template: `
  <div class="dark dark:bg-neutral-900 dark:text-neutral-200 p-6">
    <VSwitch v-bind='args' />
  </div>
  `,
});
