import type {StoryFn, Meta} from '@storybook/vue3';
import {themeColors} from '@morpheme/utils';
import VSelect from './VSelect.vue';
import {useForm} from 'vee-validate';
import {ref} from 'vue';
import {object, string} from 'yup';
import VBtn from '@morpheme/button';

const items = [...Array(10)].map((_, index) => ({
  value: index + 1,
  text: `Option ${index + 1}`,
}));

export default {
  title: 'Forms/Select',
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

const Template: StoryFn<typeof VSelect> = (args) => ({
  components: {
    VSelect,
  },
  setup() {
    const value = ref();
    return {args, value};
  },
  template: `
    <v-select v-bind="args" v-model="value" :class="{
      'mt-80': args.top,
    }" />
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

export const Top = Template.bind({});
Top.args = {
  top: true,
};
Top.parameters = {
  docs: {
    source: {
      code: '<v-select :items="items" top />',
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
      code: '<v-select :items="items" disabled />',
    },
  },
};

export const Readonly = Template.bind({});
Readonly.args = {
  disabled: true,
};
Readonly.parameters = {
  docs: {
    source: {
      code: '<v-select :items="items" readonly />',
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

export const Hint = Template.bind({});
Hint.args = {
  hint: 'This is a hint',
};
Hint.parameters = {
  docs: {
    source: {
      code: '<v-select :items="items" hint="This is a hint" />',
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

export const ClearableAndSearchable = Template.bind({});
ClearableAndSearchable.args = {
  clearable: true,
  searchable: true,
};
ClearableAndSearchable.parameters = {
  docs: {
    source: {
      code: '<v-select :items="items" clearable searchable />',
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

export const Sizes: StoryFn<typeof VSelect> = (args) => ({
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

export const Validation: StoryFn<{}> = (args) => ({
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

    return {onSubmit, resetForm, values, genders, genres, args};
  },
  template: `
    <form @submit="onSubmit" class="border-none">
    <v-select
      wrapper-class="mb-4"
      name="genre"
      label="Genre"
      placeholder="Select your genre"
      :items="genres"
      v-bind="args"
    />
    <v-select
      wrapper-class="mb-4"
      name="gender"
      label="Gender"
      placeholder="Select your gender"
      :items="genders"
      v-bind="args"
    />
    <div class="mt-4">
      <v-btn type="submit">Submit</v-btn>
      <v-btn type="button" text @click="resetForm">Reset</v-btn>
    </div>
    <pre>{{ {values} }}</pre>
    </form>
  `,
});

export const HideError = Validation.bind({});
HideError.args = {
  hideError: true,
};

export const TestInputState: StoryFn<{}> = (args) => ({
  components: {VBtn, VSelect},
  setup() {
    const schema = object({
      genre: string().required().nullable().label('Genre'),
      gender: string().required().nullable().label('Gender'),
    });

    const modelValue = ref(args.setupWithInitialValue ? 'and' : undefined);
    const modelValue2 = ref(args.setupWithInitialValue ? 'female' : undefined);
    const initialValues = ref({
      gender: args.setupWithInitialValue ? 'unw' : undefined,
      gender2: args.setupWithInitialValue ? 'male' : undefined,
      init: 'unw',
    });

    const {handleSubmit, resetForm, values, meta} = args.useForm
      ? useForm({
          initialValues,
          validationSchema: schema,
        })
      : {
          handleSubmit: (cb: any) => null,
          resetForm: () => null,
          values: {},
          meta: {},
        };

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
      {
        text: 'Androgynous',
        value: 'and',
      },
      {
        text: 'Gender Fluid',
        value: 'gfl',
      },
      {
        text: 'Not willing to specify',
        value: 'unw',
      },
    ]);

    const uncontrolledInput = new Array(5).fill({}).map((_, idx) => ({
      text: `UI ${idx}`,
      value: `uncontrolled-${idx}`,
    }));

    const onChange = (val: any) => {
      alert(val);
    };

    const resetVVForm = () => {
      if (!args.useForm) {
        alert(
          'StoryFn is not set up with Vee Validate Form. set `useForm` control to true to try this action.',
        );
      }

      initialValues.value = {
        gender: 'gfl',
        gender2: 'female',
        init: 'male',
      };

      resetForm();
    };

    return {
      args,
      onSubmit,
      resetForm,
      values,
      genders,
      modelValue,
      modelValue2,
      uncontrolledInput,
      onChange,
      resetVVForm,
      meta,
    };
  },
  template: `
    <form @submit="onSubmit" class="border-none relative pr-[11rem]">
    <h1 class="mb-8 font-semibold">{{ args.useForm ? 'with' : 'without' }} VeeValidate Form</h1>

    <button
      type="button" @click="resetVVForm"
      class="bg-red-400 text-white text-sm p-2 rounded my-2"
    >
      Change Initial Value & Reset Form! <span class="text-[10px]">(Vee Validate only)</span>
    </button>

    <div class="mb-4">
      <v-select
        name="gender"
        label="Only Name"
        placeholder="Select your gender"
        :items="genders"
        :searchable="args.searchable"
        :clearable="args.clearable"
      />
      <div class="text-xs">When used without vee validate, should not change "Vmodel" value or any other value unless
        explicitly implemented
      </div>
    </div>

    <div class="mb-4">
      <v-select
        v-model="modelValue"
        label="Only VModel"
        placeholder="Select your gender"
        :items="genders"
        :searchable="args.searchable"
        :clearable="args.clearable"
      />
      <div class="text-xs">Should update form values under "modelValue" only</div>
    </div>

    <div class="mb-4">
      <v-select
        v-model="modelValue2"
        name="gender2"
        label="VModel and Name"
        placeholder="VModel and name prop"
        :items="genders"
        :searchable="args.searchable"
        :clearable="args.clearable"
      />
      <div class="text-xs">Should update form values under "gender2" key (with vee validate) AND "modelValue2"</div>
    </div>

    <div class="mb-4">
      <v-select
        label="Uncontrolled"
        placeholder="Uncontrolled input"
        @change="onChange"
        :items="genders"
        :searchable="args.searchable"
        :clearable="args.clearable"
      />
      <div class="text-xs">Should not change any value unless explicitly implemented</div>
    </div>

    <hr class="my-4" />

    <blockquote class="bg-gray-800 text-white p-2 text-xs my-4">
      <strong>CAUTION!</strong> Setting initialValue in VeeValidate won't affect inputs that are defined WITHOUT name
      prop being defined!
      <br />For unnamed input, use modelValue or value prop instead
    </blockquote>

    <div class="flex flex-wrap">
      <div class="w-1/2 p-1">
        <v-select
          label="Initial w/ modelvalue"
          placeholder="Select an item"
          model-value="male"
          :items="genders"
          :searchable="args.searchable"
          :clearable="args.clearable"
        />
      </div>

      <div class="w-1/2 p-1">
        <v-select
          label="Initial w/ value"
          placeholder="Select an item"
          value="and"
          :items="genders"
          :searchable="args.searchable"
          :clearable="args.clearable"
        />
      </div>

      <div class="w-1/2 p-1">
        <v-select
          label="Initial w/ name:init"
          name="init"
          placeholder="Select an item"
          :items="genders"
          :searchable="args.searchable"
          :clearable="args.clearable"
        />
      </div>
    </div>

    <div class="mt-4">
      <v-btn type="submit">Submit</v-btn>
      <v-btn type="button" text @click="resetForm">Reset</v-btn>
    </div>

    <pre class="text-xs fixed top-0 right-0 bg-white w-[11rem] max-h-[100%] overflow-auto">{{ {
      values,
      modelValue,
      modelValue2,
      initialValue: meta?.initialValues
    } }}</pre>
    </form>
  `,
});
TestInputState.args = {
  useForm: false,
  setupWithInitialValue: false,
  searchable: false,
  clearable: false,
};

export const DarkMode: StoryFn = (args) => ({
  components: {VSelect},
  setup() {
    return {args};
  },
  template: `
  <div class="dark dark:bg-neutral-900 dark:text-neutral-200 p-6">
    <VSelect v-bind='args' label="Choose" clearable hint="This is a hint" />
    <VSelect v-bind='args' label="Choose" clearable hint="This is a hint" error />
  </div>
  `,
});
