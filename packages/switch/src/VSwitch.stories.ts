import VSwitch from '../src/VSwitch.vue';
import {Meta, Story} from '@storybook/vue3';
import {useForm} from 'vee-validate';
import {object, boolean} from 'yup';
import VBtn from '@gits-id/button';

export default {
  title: 'Components/Switch',
  component: VSwitch,
  args: {
    modelValue: true,
    label: 'Label',
  },
} as Meta;

const Template: Story = (args) => ({
  components: {
    VSwitch,
  },
  setup() {
    return {args};
  },
  template: `<v-switch v-bind="args" />`,
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

export const Success = Template.bind({});
Success.args = {
  color: 'primary',
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
  switchClass: 'border-cyan-200',
  activeClass: 'bg-white',
  inactiveClass: 'bg-white',
  buttonClass: 'bg-cyan-500',
};
CustomClass.parameters = {
  docs: {
    source: {
      code: `
<v-switch
  v-model="model"       
  color=""
  label="Custom Switch"
  switch-class="border-cyan-200"
  active-class="bg-white"
  inactive-class="bg-white"
  button-class="bg-cyan-500"
/>`,
    },
  },
};

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
