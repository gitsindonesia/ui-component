import {Story, Meta} from '@storybook/vue3';
import {themeColors} from '@gits-id/utils';
import VSelect from './VSelect.vue';
import {useForm} from 'vee-validate';
import {ref} from 'vue';
import {object, string} from 'yup';
import VBtn from '@gits-id/button';
import '@gits-id/button/src/VBtn.scss';
import '@gits-id/forms/src/forms.scss';

const items = [...Array(10)].map((_, index) => ({
  value: index + 1,
  text: `Option ${index + 1}`,
}));

export default {
  title: 'Components/Select',
  component: VSelect,
  argTypes: {
    color: {
      control: 'select',
      options: themeColors,
    },
  },
  args: {
    items,
  },
} as Meta;

const Template: Story<typeof VSelect> = (args) => ({
  components: {
    VSelect,
  },
  setup() {
    const value = ref();
    return {args, value};
  },
  template: `
  <v-select v-bind="args" v-model="value" />
  <pre class="mt-2">Model Value: {{ value }}</pre>
  `,
});

export const Select = Template.bind({});
Select.args = {};
Select.parameters = {
  docs: {
    source: {
      code: '<v-select :items="items" />',
    },
  },
};

export const Searchable = Template.bind({});
Searchable.args = {
  searchable: true,
};
Searchable.parameters = {
  docs: {
    source: {
      code: '<v-select :items="items" searchable />',
    },
  },
};

export const NoCheckIcon = Template.bind({});
NoCheckIcon.args = {
  hideCheckIcon: true,
};
NoCheckIcon.parameters = {
  docs: {
    source: {
      code: '<v-select :items="items" no-check-icon />',
    },
  },
};

export const Label = Template.bind({});
Label.args = {
  label: 'My Label',
  labelClass: 'font-semibold mb-1 block',
};
Label.parameters = {
  docs: {
    source: {
      code: '<v-select :items="items" label="My Label" label-class="font-semibold mb-1 block" />',
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
      code: '<v-select :items="items" shadow />',
    },
  },
};

export const Error = Template.bind({});
Error.args = {
  error: true,
};
Error.parameters = {
  docs: {
    source: {
      code: '<v-select :items="items" error />',
    },
  },
};

export const Clearable = Template.bind({});
Clearable.args = {
  clearable: true,
};
Clearable.parameters = {
  docs: {
    source: {
      code: '<v-select :items="items" clearable />',
    },
  },
};

export const CustomTransition = Template.bind({});
CustomTransition.args = {
  transition: 'slide-down',
};
CustomTransition.parameters = {
  docs: {
    source: {
      code: '<v-select :items="items" transition="slide-down" />',
    },
  },
};

export const ReturnObject = Template.bind({});
ReturnObject.args = {
  returnObject: true,
};
ReturnObject.parameters = {
  docs: {
    source: {
      code: '<v-select :items="items" return-object />',
    },
  },
};

export const Sizes: Story<typeof VSelect> = (args) => ({
  components: {
    VSelect,
  },
  setup() {
    return {args};
  },
  template: `
  <v-select v-bind="args" label="Small" wrapper-class="mb-4" size="sm" />
  <v-select v-bind="args" label="Default" wrapper-class="mb-4" />
  <v-select v-bind="args" label="Large" wrapper-class="mb-4" size="lg" />
  `,
});

export const Validation: Story<{}> = () => ({
  components: {VBtn, VSelect},
  setup() {
    const schema = object({
      genre: string().required().nullable().label('Genre'),
      gender: string().required().nullable().label('Gender'),
    });

    const {handleSubmit, resetForm, values} = useForm({
      validationSchema: schema,
    });

    const onSubmit = handleSubmit((values) => {
      alert(JSON.stringify(values));
    });

    const genders = ref([
      {
        text: 'Male',
        value: 'male',
      },
      {
        text: 'Female',
        value: 'female',
      },
    ]);

    const genres = ref([
      {
        text: 'Pop',
        value: 'pop',
      },
      {
        text: 'Rock',
        value: 'rock',
      },
    ]);

    return {onSubmit, resetForm, values, genders, genres};
  },
  template: `
    <form @submit="onSubmit" class="border-none">
      <v-select
        wrapper-class="mb-4"
        name="genre"
        label="Genre"
        placeholder="Select your genre"
        :items="genres"
      />
      <v-select
        wrapper-class="mb-4"
        name="gender"
        label="Gender"
        placeholder="Select your gender"
        :items="genders"
      />
      <div class="mt-4">
        <v-btn type="submit">Submit</v-btn>
        <v-btn type="button" text @click="resetForm">Reset</v-btn>
      </div>
      <pre>{{ {values} }}</pre>
    </form>
`,
});

export const TestInputState: Story<{}> = (args) => ({
  components: {VBtn, VSelect},
  setup() {
    const schema = object({
      genre: string().required().nullable().label('Genre'),
      gender: string().required().nullable().label('Gender'),
    });

    console.log({args})
    const modelValue = ref('');
    const {handleSubmit, resetForm, values} = args.useForm ? useForm({
      validationSchema: schema,
    }) : {handleSubmit: (cb: any) => null, resetForm: () => null, values: {}};

    const onSubmit = handleSubmit((values: any) => {
      alert(JSON.stringify(values));
    });

    const genders = ref([
      {
        text: 'Male',
        value: 'male',
      },
      {
        text: 'Female',
        value: 'female',
      },
    ]);

    const genres = ref([
      {
        text: 'Pop',
        value: 'pop',
      },
      {
        text: 'Rock',
        value: 'rock',
      },
    ]);

    const uncontrolledInput = new Array(5).fill({}).map((_, idx) => ({
      text: `UI ${idx}`,
      value: `uncontrolled-${idx}`,
    }));

    const onChange = (val: any) => {
      alert(val);
    };

    return {args, onSubmit, resetForm, values, genders, genres, modelValue, uncontrolledInput, onChange};
  },
  template: `
    <form @submit='onSubmit' class='border-none'>
    <h1 class='mb-8 font-semibold'>{{args.useForm ? 'with' : 'without'}} VeeValidate Form</h1>

    <div class='mb-4'>
      <v-select
        name='gender'
        label='Only Name - Gender'
        placeholder='Select your gender'
        :items='genders'
      />
      <div class='text-xs'>When used without vee validate, should not change "Vmodel" value or any other value unless
        explicitly implemented
      </div>
    </div>

    <v-select
      wrapper-class='mb-4'
      v-model='modelValue'
      label='Only VModel - Gender'
      placeholder='Select your gender'
      :items='genders'
    />

    <div class='mb-4'>
      <v-select
        v-model='modelValue'
        name='gender'
        label='VModel and Name - Gender'
        placeholder='VModel and name prop'
        :items='genders'
      />
      <div class='text-xs'>Should update form values under "gender" key AND "modelValue"</div>
    </div>


    <div class='mb-4'>
      <v-select
        label='Uncontrolled - Gender'
        placeholder='Uncontrolled input'
        @change='onChange'
        :items='genders'
      />
      <div class='text-xs'>Should not change any value unless explicitly implemented</div>
    </div>

    <div class='mt-4'>
      <v-btn type='submit'>Submit</v-btn>
      <v-btn type='button' text @click='resetForm'>Reset</v-btn>
    </div>
    
    <pre>{{ {values, modelValue} }}</pre>
    </form>
  `,
});
TestInputState.args = {
  useForm: false,
};