import VRadio from './VRadio.vue';
import {themeColors} from '@gits-id/utils/colors';
import {sizes} from '@gits-id/utils/sizes';
import {Meta, Story} from '@storybook/vue3';
import {useForm} from 'vee-validate';
import {object, string} from 'yup';
import VBtn from '@gits-id/button';
import {ref} from 'vue';
import './VRadio.dark.scss';

export default {
  title: 'Forms/Radio',
  component: VRadio,
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
    modelValue: '',
    label: 'Radio',
    color: '',
    size: '',
  },
} as Meta;

const Template: Story = (args) => ({
  components: {VRadio},
  setup() {
    return {args};
  },
  template: `<VRadio v-bind='args'>${args.label}</VRadio>`,
});

export const Radio = Template.bind({});
Radio.args = {};
Radio.parameters = {
  docs: {
    source: {
      code: '<v-radio />',
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
      code: '<v-radio disabled />',
    },
  },
};

export const Validation: Story<{}> = () => ({
  components: {VRadio, VBtn},
  setup() {
    const schema = object({
      choose: string().oneOf(['Yes', 'No']).required().label('Agreement'),
    });

    const {handleSubmit, resetForm, values, errors} = useForm({
      validationSchema: schema,
      initialValues: {
        choose: '',
      },
    });

    const onSubmit = handleSubmit((values) => {
      alert(JSON.stringify(values));
    });

    return {onSubmit, resetForm, values, errors};
  },
  template: `
    <form @submit="onSubmit" class="border-none">
      <div class="flex gap-4">
        <v-radio
          name="choose"
          value="Yes"
          label="Yes"
          id="yes"
          hide-error
        />
        <v-radio
          name="choose"
          value="No"
          label="No"
          id="no"    
          hide-error
        />
      </div>
      <p class="text-error-600 text-sm mt-1">{{ errors.choose }}</p>
      <div class="mt-4">
        <v-btn type="submit">Submit</v-btn>
        <v-btn type="button" text @click="resetForm">Reset</v-btn>
      </div>
      <div class="my-5">Debug:</div>
      <pre>{{ {errors, values} }}</pre>
    </form>
`,
});

export const TestInputState: Story<{}> = (args) => ({
  components: {VBtn, VRadio},
  setup() {
    const modelValue = ref();
    const modelValue2 = ref();
    const {handleSubmit, resetForm, values} = args.useForm
      ? useForm({
          initialValues: {
            radio: false,
            radio2: false,
          },
        })
      : {
          handleSubmit: (cb: any) => null,
          resetForm: () => null,
          values: {},
        };

    const onSubmit = handleSubmit((values: any) => {
      alert(JSON.stringify(values));
    });

    const onChange = (val: any) => {
      alert('onChange');
    };

    return {
      args,
      onSubmit,
      resetForm,
      values,
      modelValue,
      modelValue2,
      onChange,
    };
  },
  template: `
    <form @submit="onSubmit" class="border-none">
    <h1 class="mb-8 font-semibold">{{ args.useForm ? 'with' : 'without' }} VeeValidate Form</h1>

    <div class="flex flex-wrap gap-4">
      <div class="flex-1">
        <v-radio
          name="radio"
          label="Only Name"
          value="name"
        />
        <div class="text-xs">
          When used without vee validate, should not change "Vmodel" value or any other value unless
          explicitly implemented<br/>
          With vee validate, it should update form values under "radio" key
        </div>
      </div>

      <div class="flex-1">
        <v-radio
          v-model="modelValue"
          label="Only VModel"
          value="vmodel"
        />
        <div class="text-xs">Should update "modelValue" only</div>
      </div>

      <div class="flex-1">
        <v-radio
          v-model="modelValue2"
          name="radio2"
          label="VModel and Name"
          value="vmodelname"
        />
        <div class="text-xs">
          Should update form values under "radio2" (w/ vee validate) key AND "modelValue2"
        </div>
      </div>
      
      <div class="flex-1">
        <v-radio
          label="Uncontrolled"
          @change="onChange"
          value="uncontrolled"
        />
        <div class="text-xs">Should not change any value unless explicitly implemented</div>
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
};

// VRadio dark mode
export const DarkMode: Story<{}> = () => ({
  components: {VRadio},
  setup() {
    const items = ['fire', 'earth', 'wind', 'water'];
    const modelValue = ref();
    return {items, modelValue};
  },
  template: `
  <div class="dark dark:bg-neutral-900 dark:text-neutral-200 p-6">
    <VRadio
      v-for="item in items"
      v-model="modelValue"
      :key="item"
      :label="item"
      :value="item"
    />
  </div>
  `,
});
