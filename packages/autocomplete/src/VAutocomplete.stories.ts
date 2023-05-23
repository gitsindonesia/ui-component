import {useForm} from 'vee-validate';
import {ref} from 'vue';
import {object} from 'yup';
import VAutocomplete from './VAutocomplete.vue';
import VBtn from '@morpheme/button';
import {Story} from '@storybook/vue3';

const items = [
  {value: 1, text: 'Wade Cooper'},
  {value: 2, text: 'Arlene Mccoy'},
  {value: 3, text: 'Devon Webb'},
  {value: 4, text: 'Tom Cook'},
  {value: 5, text: 'Tanya Fox'},
  {value: 6, text: 'Hellen Schmidt'},
];

export default {
  title: 'Forms/Autocomplete',
  component: VAutocomplete,
  argTypes: {},
  args: {
    items,
  },
};

const Template: Story = (args) => ({
  components: {VAutocomplete},
  setup() {
    const selected = ref();
    return {args, selected};
  },
  template: `
    <VAutocomplete v-bind="args" v-model="selected"/>
    Selected: {{ selected }}
  `,
});

export const Default = Template.bind({});
Default.args = {};

export const Shadow = Template.bind({});
Shadow.args = {
  shadow: true,
};

export const Clearable = Template.bind({});
Clearable.args = {
  clearable: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Readonly = Template.bind({});
Readonly.args = {
  readonly: true,
};

export const Hint = Template.bind({});
Hint.args = {
  hint: 'This is a hint',
};

export const Validation: Story = (args) => ({
  components: {VBtn, VAutocomplete},
  setup() {
    const schema = object({
      genre: object().required().label('Genre'),
    });

    const {handleSubmit, resetForm, values} = useForm({
      validationSchema: schema,
    });

    const onSubmit = handleSubmit((values) => {
      alert(JSON.stringify(values));
    });

    const genres = ref([
      {
        text: 'Pop',
        value: 'pop',
      },
      {
        text: 'Rock',
        value: 'rock',
      },
      {
        text: 'Jazz',
        value: 'jazz',
      },
      {
        text: 'Alternative',
        value: 'alternative',
      },
    ]);

    return {onSubmit, resetForm, values, genres, args};
  },
  template: `
    <form @submit="onSubmit" class="border-none">
      <VAutocomplete
        name="genre"
        label="Genre"
        placeholder="Choose your prefered genres"
        :items="genres"
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

export const TestInputState: Story<{}> = (args) => ({
  components: {VBtn, VAutocomplete},
  setup() {
    const modelValue = ref();
    const modelValue2 = ref();
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
        text: items[0],
        text2: items[1],
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
      items,
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
        <VAutocomplete
          :items="items"
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
        <VAutocomplete
          :items="items"
          v-model="modelValue"
          label="Only VModel"
          :value="args.value"
          :clearable="args.clearable"
        />
        <div class="text-xs">Should update "modelValue" only</div>
      </div>

      <div class="w-1/2 p-2">
        <VAutocomplete
          :items="items"
          v-model="modelValue2"
          name="text2"
          label="VModel and Name"
          :clearable="args.clearable"
        />
        <div class="text-xs">Should update form values under "text2" (with vee validate) key AND "modelValue2"</div>
      </div>

      <div class="w-1/2 p-2">
        <VAutocomplete
          :items="items"
          label="Uncontrolled"
          placeholder="Uncontrolled input"
          @change="onChange"
          :clearable="args.clearable"
        />
        <div class="text-xs">Should not change any value unless explicitly implemented</div>
      </div>

      <div class="w-1/2 p-2">
        <VAutocomplete
          :items="items"
          :model-value="items[0]"
          label="Initial Value w/ modelValue prop "
        />
      </div>

      <div class="w-1/2 p-2">
        <VAutocomplete
          :items="items"
          :model-value="modelvalue"
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

export const DarkMode: Story = (args) => ({
  components: {VAutocomplete},
  setup() {
    const selected = ref();
    return {args, selected};
  },
  template: `
<main class="dark dark:bg-neutral-900 dark:text-neutral-200 p-6">
  <VAutocomplete
    v-bind="args"
    v-model="selected"
    label="Dark Mode"
    hint="This is a hint"
    clearable
  />
</main>
  `,
});
