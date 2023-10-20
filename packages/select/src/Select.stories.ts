import VIcon from '@morpheme/icon';
import {Story, Meta} from '@storybook/vue3';
import {themeColors} from '@morpheme/utils';
import Select from './Select.vue';
import {ref} from 'vue';
import {ListboxButton} from '@headlessui/vue';
import {useForm} from 'vee-validate';
import {array, object} from 'yup';
import {VBtn} from '@morpheme/button';

const items = [...Array(10)].map((_, index) => ({
  value: index + 1,
  text: `Option ${index + 1}`,
}));

export default {
  title: 'Experimental/Select',
  component: Select,
  argTypes: {
    color: {
      control: 'select',
      options: themeColors,
    },
    searchPlacement: {
      control: 'select',
      options: ['inside', 'outside'],
    },
  },
  args: {
    items,
  },
} as Meta;

const Template: Story<typeof Select> = (args) => ({
  components: {
    Select,
  },
  setup() {
    const value = ref();
    return {args, value};
  },
  template: `
    <Select v-bind="args" v-model="value" />
    <pre class="mt-2">Model Value: {{ value }}</pre>
  `,
});

export const Default = Template.bind({});
Default.args = {};

export const Multiple = Template.bind({});
Multiple.args = {
  multiple: true,
};

export const Label = Template.bind({});
Label.args = {
  label: 'Label',
};

export const Hint = Template.bind({});
Hint.args = {
  hint: 'This is a hint',
};

export const Error = Template.bind({});
Error.args = {
  error: true,
  errorMessage: 'This is an error message.',
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

export const Shadow: Story<typeof Select> = (args) => ({
  components: {
    Select,
  },
  setup() {
    const value = ref();
    args.class = 'mb-4';
    return {args, value};
  },
  template: `
    <Select v-bind="args" v-model="value" label="Default" hint="This is a hint" shadow />
    <Select v-bind="args" v-model="value" label="Shadow xs" hint="This is a hint" shadow="xs" />
    <Select v-bind="args" v-model="value" label="Shadow sm" hint="This is a hint" shadow="sm" />
    <Select v-bind="args" v-model="value" label="Shadow md" hint="This is a hint" shadow="md" />
    <Select v-bind="args" v-model="value" label="Shadow lg" hint="This is a hint" shadow="lg" />
    <Select v-bind="args" v-model="value" label="Shadow xl" hint="This is a hint" shadow="xl" />
    <Select v-bind="args" v-model="value" label="Shadow 2xl" hint="This is a hint" shadow="2xl" />
    <Select v-bind="args" v-model="value" label="Shadow 3xl" hint="This is a hint" shadow="3xl" />
    <Select v-bind="args" v-model="value" label="Shadow inner" hint="This is a hint" shadow="inner" />
    <Select v-bind="args" v-model="value" label="Shadow none" hint="This is a hint" shadow="none" />
  `,
});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Clearable = Template.bind({});
Clearable.args = {
  clearable: true,
};

export const SelectedIconPlacementRight = Template.bind({});
SelectedIconPlacementRight.args = {
  selectedIconPlacement: 'right',
};

export const WrapperClass = Template.bind({});
WrapperClass.args = {
  wrapperClass: 'border-b-2 border-error-500 rounded-b-lg',
};

export const Searchable = Template.bind({});
Searchable.args = {
  searchable: true,
};

export const SearchableLoading = Template.bind({});
SearchableLoading.args = {
  searchable: true,
  loading: true,
};

export const SearchableMultiple = Template.bind({});
SearchableMultiple.args = {
  searchable: true,
  multiple: true,
  clearable: true,
};

export const SearchableOutsidePlacement = Template.bind({});
SearchableOutsidePlacement.args = {
  searchable: true,
  searchPlacement: 'outside',
  placeholder: 'Choose',
  label: 'Searchable Outside Placement',
  chips: true,
};

export const SearchableInputIcons = Template.bind({});
SearchableInputIcons.args = {
  searchable: true,
  placeholder: 'Choose',
  label: 'Searchable With Icons',
  chips: true,
  searchPrefixIcon: 'ic:round-search',
  searchSuffixIcon: 'heroicons:plus',
};

export const Empty = Template.bind({});
Empty.args = {
  items: [],
};

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  icon: 'heroicons:chevron-up-down',
  checkIcon: 'heroicons:check-circle',
  clearIcon: 'heroicons:x-circle',
  clearable: true,
};

export const AllowCustomValues = Template.bind({});
AllowCustomValues.args = {
  allowCustomValues: true,
  searchable: true,
  clearable: true,
  // multiple: true,
};

export const Uncontrolled: Story<typeof Select> = (args) => ({
  components: {
    Select,
  },
  setup() {
    return {args};
  },
  template: `
    <Select v-bind="args" />
  `,
});

export const FloatingUI: Story<typeof Select> = (args) => ({
  components: {
    Select,
  },
  setup() {
    return {args};
  },
  template: `
    <div class="mt-[90vh]">
      <Select v-bind="args" hint="This is a hint" class="mb-4" label="Select" />
      <Select v-bind="args" hint="This is a hint" class="mb-4" label="Autocomplete" searchable />
    </div>
  `,
});

export const Slots: Story<typeof Select> = (args) => ({
  components: {
    Select,
    ListboxButton,
    VIcon,
  },
  setup() {
    return {args};
  },
  template: `
    <p>Custom Button</p>
    <Select v-bind="args">
      <template #button>
        <ListboxButton class="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-full shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <span class="block truncate">Select an option</span>
          <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <VIcon name="heroicons:chevron-up-down" class="w-4 h-4 text-gray-400" />
          </span>
        </ListboxButton>
      </template>
    </Select>
    
    <Select v-bind="args" class="mb-4" label="Custom Render Item" multiple>
      <template v-slot:item="{active, selected, item}">
        <div
          class="px-4 py-3 flex gap-2"
          :class="{
            'bg-gray-100 dark:bg-gray-true-800': active,
            'text-primary-500': selected,
          }"
        >
          <div class="flex-grow">{{ item.text }}</div>
          <span v-if="selected">✅</span>
        </div>
      </template>
    </Select>

    <Select v-bind="args" class="mb-4" label="Custom Selection" multiple>
      <template v-slot:selection="{active, selected, item}">
        <div
          v-if="selected"
          class="autocomplete-selection"
        >
          {{ selected.length }} Selected
        </div>
      </template>
    </Select>

    <Select v-bind="args" class="mb-4" label="Custom Selection Item" multiple>
      <template v-slot:selection-item="{item, remove}">
        <div
          class="px-2 py-1 text-sm rounded-full bg-error-500 text-white"
        >
          {{ item.text }}
          <button @click="remove">&times;</button>
        </div>
      </template>
    </Select>

    <Select v-bind="args" class="mb-4" label="Custom Hint" multiple>
      <template v-slot:hint>
        <p class="italic">This is a <span class="text-primary-500 font-medium">hint</span></p>
      </template>
    </Select>

    <Select
      v-bind="args"
      label="Custom Error"
      error
      error-message="This is an error message"
    >
      <template v-slot:error="{errorMessage}">
        <p class="text-red-700 font-medium">
          {{ errorMessage }}
        </p>
      </template>
    </Select>

    <Select
      v-bind="args"
      label="Custom Item Text"
      class="mt-4"
    >
      <template v-slot:item-text="{item, itemText, selected, active}">
        <p :class="[
         'text-red-700 font-medium',
          { 'text-primary-500': selected },
          { 'text-warning-500': active },
        ]">
          {{ item[itemText] }}
        </p>
      </template>
    </Select>

    <Select
      v-bind="args"
      label="Custom Check Icon"
      class="mt-4"
    >
      <template v-slot:check-icon>
        ✅
      </template>
    </Select>
  `,
});

export const DarkMode: Story<typeof Select> = (args) => ({
  components: {
    Select,
  },
  setup() {
    const value = ref();
    return {args, value};
  },
  template: `
    <div class="dark dark:bg-gray-true-900 p-6">
      <Select
        v-bind="args"
        class="mb-4"
        label="Default"
        hint="This is a hint"
       />
      <Select
        v-bind="args"
        class="mb-4"
        label="Multiple"
        multiple
        hint="This is a hint"
       />
      <Select
        v-bind="args"
        class="mb-4"
        label="Empty State"
        :items="[]"
        hint="This is a hint"
       />
      <Select
        v-bind="args"
        class="mb-4"
        label="Error State"
        hint="This is a hint"
        error
        error-message="This is an error message"
       />
    </div>
  `,
});

export const Validation: Story<{}> = (args) => ({
  components: {VBtn, Select},
  setup() {
    const schema = object({
      genre: array().required().nullable().label('Genre'),
      gender: object().required().nullable().label('Gender'),
      fruit1: object().required().nullable().label('Fruit 1'),
      fruit2: array().required().nullable().label('Fruit 2'),
      fruit3: array().required().nullable().label('Fruit 2'),
    });

    const {handleSubmit, resetForm, values, errors, defineComponentBinds} =
      useForm({
        validationSchema: schema,
      });

    const propsConfig = (state) => ({
      props: {
        error: !!state.errors.length,
        'error-message': state.errors[0],
      },
    });

    const genre = defineComponentBinds('genre', propsConfig);
    const gender = defineComponentBinds('gender', propsConfig);
    const fruit1 = defineComponentBinds('fruit1', propsConfig);
    const fruit2 = defineComponentBinds('fruit2', propsConfig);
    const fruit3 = defineComponentBinds('fruit3', propsConfig);

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

    const fruits = ref([
      {
        text: 'Apple',
        value: 'apple',
      },
      {
        text: 'Manggo',
        value: 'manggo',
      },
      {
        text: 'Orange',
        value: 'orange',
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

    const handleReset = () => {
      resetForm();
    };

    console.log({
      genre,
      gender,
      fruit1,
      fruit2,
      fruit3,
    });

    return {
      onSubmit,
      resetForm,
      values,
      genders,
      genres,
      args,
      errors,
      fruits,
      handleReset,
      genre,
      gender,
      fruit1,
      fruit2,
      fruit3,
    };
  },
  template: `
    <form @submit="onSubmit" class="border-none">
      <Select
        clearable
        v-bind="genre"
        name="genre"      
        label="Current genre"
        placeholder="Select your genre"
        :items="genres"
        multiple
        wrapper-class="mb-4"
      />
      <Select
        clearable
        v-bind="gender"
        name="gender"      
        label="Gender"
        placeholder="Select your gender"
        :items="genders"
        wrapper-class="mb-4"
      />
      <Select
        clearable
        v-bind="fruit1"
        name="fruit1"      
        label="Fruit 1"
        placeholder="Choose"
        :items="fruits"
        wrapper-class="mb-4"
        searchable
      />
      <Select
        clearable
        v-bind="fruit2"
        name="fruit2"      
        label="Fruit 2"
        placeholder="Choose"
        :items="fruits"
        wrapper-class="mb-4"
        searchable
        multiple
      />
      <Select
        clearable
        v-bind="fruit3"
        name="fruit3"      
        label="Fruit 3"
        placeholder="Choose"
        :items="fruits"
        wrapper-class="mb-4"
        searchable
        multiple
        chips
      />
      <div class="mt-4">
        <v-btn type="submit">Submit</v-btn>
        <v-btn type="reset" text @click="handleReset">Reset</v-btn>
      </div>
      <pre>{{ {values, errors} }}</pre>
    </form>
  `,
});
