import VMultiSelect from './VMultiSelect.vue';
import VBtn from '@gits-id/button';
import {useForm} from 'vee-validate';
import {object, array} from 'yup';
import {computed, ref, onMounted} from 'vue';
import {VMultiSelectItem} from './types';

const items = [...Array(200)].map((_, index) => ({
  value: index + 1,
  text: `Option ${index + 1}`,
}));

const genreItems = [
  'pop',
  'rock',
  'jazz',
  'alternative',
  'electronic',
  'classical',
  'hiphop',
  'blues',
].map((e) => ({text: e.toUpperCase(), value: e}));

const userItems = [
  {
    name: {
      title: 'Miss',
      first: 'Laura',
      last: 'Woods',
    },
    picture: 'https://randomuser.me/api/portraits/thumb/women/88.jpg',
    country: 'Ireland',
    email: 'laura.woods@example.com',
    nat: 'IE',
  },
  {
    name: {
      title: 'Mr',
      first: 'Marten',
      last: 'Faber',
    },
    picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
    country: 'Germany',
    email: 'marten.faber@example.com',
    nat: 'DE',
  },
  {
    name: {
      title: 'Miss',
      first: 'Christy',
      last: 'Diaz',
    },
    picture: 'https://randomuser.me/api/portraits/thumb/women/53.jpg',
    country: 'Australia',
    email: 'christy.diaz@example.com',
    nat: 'AU',
  },
  {
    name: {
      title: 'Mrs',
      first: 'Naomi',
      last: 'Ortiz',
    },
    picture: 'https://randomuser.me/api/portraits/thumb/women/10.jpg',
    country: 'Australia',
    email: 'naomi.ortiz@example.com',
    nat: 'AU',
  },
  {
    name: {
      title: 'Miss',
      first: 'Emeline',
      last: 'Carpentier',
    },
    picture: 'https://randomuser.me/api/portraits/thumb/women/95.jpg',
    country: 'France',
    email: 'emeline.carpentier@example.com',
    nat: 'FR',
  },
  {
    name: {
      title: 'Mr',
      first: 'Jun',
      last: 'Hansen',
    },
    picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
    country: 'Netherlands',
    email: 'jun.hansen@example.com',
    nat: 'NL',
  },
  {
    name: {
      title: 'Miss',
      first: 'Carla',
      last: 'Fernández',
    },
    picture: 'https://randomuser.me/api/portraits/thumb/women/52.jpg',
    country: 'Spain',
    email: 'carla.fernandez@example.com',
    nat: 'ES',
  },
  {
    name: {
      title: 'Ms',
      first: 'Vandana',
      last: 'Dalvi',
    },
    picture: 'https://randomuser.me/api/portraits/thumb/women/16.jpg',
    country: 'India',
    email: 'vandana.dalvi@example.com',
    nat: 'IN',
  },
  {
    name: {
      title: 'Mrs',
      first: 'Nurdan',
      last: 'Köybaşı',
    },
    picture: 'https://randomuser.me/api/portraits/thumb/women/86.jpg',
    country: 'Turkey',
    email: 'nurdan.koybasi@example.com',
    nat: 'TR',
  },
  {
    name: {
      title: 'Mr',
      first: 'Marc',
      last: 'Shaw',
    },
    picture: 'https://randomuser.me/api/portraits/thumb/men/92.jpg',
    country: 'United States',
    email: 'marc.shaw@example.com',
    nat: 'US',
  },
];

export default {
  title: 'Components/MultiSelect',
  component: VMultiSelect,
  argTypes: {},
  args: {
    items,
    modelValue: [],
    itemText: 'text',
    itemValue: 'value',
    searchBy: '',
    placeholder: 'Search...',
    name: '',
    error: false,
    errorMessages: [],
    clearable: false,
    maxBadge: 0,
    delay: 500,
    id: '',
    inputProps: {},
    selectAll: false,
    loading: false,
  },
};

const Template = (args) => ({
  components: {
    VMultiSelect,
  },
  setup() {
    return {args};
  },
  template: `<v-multi-select v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: '<v-multi-select :items="items" />',
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
      code: '<v-multi-select :items="items" clearable />',
    },
  },
};

export const MaxBadge = Template.bind({});
MaxBadge.args = {
  clearable: true,
  maxBadge: 3,
};
MaxBadge.parameters = {
  docs: {
    source: {
      code: '<v-multi-select :items="items" :max-badge="3" />',
    },
  },
};

export const Label = Template.bind({});
Label.args = {
  label: 'My Label',
};
Label.parameters = {
  docs: {
    source: {
      code: '<v-multi-select :items="items" label="My Label" />',
    },
  },
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  wrapperClass:
    '!rounded-full !border-orange-500 focus-within:!border-orange-600',
  inputClass: '!italic',
  dropdownClass: 'bg-black/50',
  itemClass: 'bg-black/50 text-white hover:bg-warning-500 hover:text-white',
  badgeColor: 'warning',
  checkWrapperClass: 'text-orange-500',
};

export const Validation = (args) => ({
  components: {VBtn, VMultiSelect},
  setup() {
    const schema = object({
      genre: array().required().min(1).label('Genre'),
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

    return {onSubmit, resetForm, values, genres};
  },
  template: `
    <form @submit="onSubmit" class="border-none">
      <v-multi-select
        name="genre"
        label="Genre"
        placeholder="Choose your prefered genres"
        :items="genres"
      />
      <div class="mt-4">
        <v-btn type="submit">Submit</v-btn>
        <v-btn type="button" text @click="resetForm">Reset</v-btn>
      </div>
      <pre>{{ {values} }}</pre>
    </form>
`,
});

export const InitialValues = () => ({
  components: {VBtn, VMultiSelect},
  setup() {
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

    const schema = object({
      genre: array().required().min(1).nullable().label('Genre'),
    });

    const {handleSubmit, resetForm, values} = useForm({
      validationSchema: schema,
      initialValues: {
        genre: [genres.value[0]],
      },
    });

    const onSubmit = handleSubmit((values) => {
      alert(JSON.stringify(values));
    });

    const selected = ref([genres.value[0]]);

    onMounted(() => {
      resetForm();
    });

    return {onSubmit, resetForm, values, genres, selected};
  },
  template: `
    <form @submit="onSubmit" class="border-none">
      <v-multi-select
        name="genre"
        label="Genre"
        placeholder="Choose your prefered genres"
        :items="genres"
      />
      <div class="mt-4 space-x-2">
        <v-btn type="submit" color="primary">Submit</v-btn>
        <v-btn type="button" text @click="resetForm">Reset</v-btn>
      </div>
      <pre>{{ {values} }}</pre>
    </form>
`,
});

export const InitialErrors = () => ({
  components: {VBtn, VMultiSelect},
  setup() {
    const schema = object({
      genre: array().required().min(1).label('Genre'),
    });

    const {handleSubmit, resetForm, values} = useForm({
      validationSchema: schema,
      initialErrors: {
        genre: 'Genre is required',
      },
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

    return {onSubmit, resetForm, values, genres};
  },
  template: `
    <form @submit="onSubmit" class="border-none">
      <v-multi-select
        name="genre"
        label="Genre"
        placeholder="Choose your prefered genres"
        :items="genres"
      />
      <div class="mt-4 space-x-2">
        <v-btn type="submit" color="primary">Submit</v-btn>
        <v-btn type="button" text @click="resetForm">Reset</v-btn>
      </div>
      <pre>{{ {values} }}</pre>
    </form>
`,
});

export const CustomSelection = () => ({
  components: {VMultiSelect},
  setup() {
    const schema = object({
      genre: array().required().min(1).label('Genre'),
    });

    const {handleSubmit, resetForm, values} = useForm({
      validationSchema: schema,
    });

    const onSubmit = handleSubmit((values) => {
      alert(JSON.stringify(values));
    });

    const genres = ref(genreItems);

    const moreText = computed(() => {
      return values.genre
        .slice(3)
        .map((e) => e.text)
        .join(', ');
    });

    return {onSubmit, resetForm, values, genres, moreText};
  },
  template: `
    <form @submit="onSubmit" class="border-none">
      <v-multi-select
        name="genre"
        label="Genre"
        placeholder="Choose your prefered genres"
        :max-badge='3'
        :items="genres"
      >
        <template v-slot:selection='{index, value, onRemove}'>
          <span class='font-bold' @click='onRemove'>{{value}}{{index < (values.genre.length-1) && values.genre.length > 0 ? ',' :''}}</span>
        </template>
      </v-multi-select>
    </form>
`,
});

export const CustomMaxSelection = () => ({
  components: {VMultiSelect},
  setup() {
    const schema = object({
      genre: array().required().min(1).label('Genre'),
    });

    const {handleSubmit, resetForm, values} = useForm({
      validationSchema: schema,
      initialValues: {
        genre: [...genreItems],
      },
    });

    const onSubmit = handleSubmit((values) => {
      alert(JSON.stringify(values));
    });

    const genres = ref(genreItems);
    const maxItem = ref(2);

    const moreText = computed(() => {
      return values.genre
        .slice(maxItem.value)
        .map((e) => e.text)
        .join(', ');
    });

    return {onSubmit, resetForm, values, genres, maxItem, moreText};
  },
  template: `
    <form @submit="onSubmit" class="border-none">
      <v-multi-select
        name="genre"
        label="Genre"
        placeholder="Choose your prefered genres"
        :max-badge='maxItem'
        :items="genres"
      >
        <template v-slot:max-selection='{length}'>
          <span :title='moreText'>{{length}} more (hover me)</span>
        </template>
      </v-multi-select>
    </form>
`,
});

export const CustomSelectAll = () => ({
  components: {VMultiSelect},
  setup() {
    const schema = object({
      genre: array().required().min(1).label('Genre'),
    });

    const {handleSubmit, resetForm, values} = useForm({
      validationSchema: schema,
      initialValues: {
        genre: [...genreItems],
      },
    });

    const onSubmit = handleSubmit((values) => {
      alert(JSON.stringify(values));
    });

    const genres = ref(genreItems);

    return {onSubmit, resetForm, values, genres};
  },
  template: `
    <form @submit="onSubmit" class="border-none">
      <v-multi-select
        name="genre"
        label="Genre"
        placeholder="Choose your prefered genres"
        select-all
        :items="genres"
      >
        <template v-slot:select-all='{onClick, isSelected}'>
          <div class="px-4 py-8 bg-white font-bold sticky left-0 -top-[0.25rem] hover:bg-[gainsboro] border-b-[1px] border-b-grey-500" 
            style="z-index: 1;"
            @click='onClick'
          >
            {{isSelected ? ' v ' : ''}}
            Select All
          </div>
        </template>
      </v-multi-select>
    </form>
`,
});

export const PrependItem = (args) => ({
  components: {VMultiSelect},
  setup() {
    const schema = object({
      genre: array().required().min(1).label('Genre'),
    });

    const {handleSubmit, resetForm, values} = useForm({
      validationSchema: schema,
      initialValues: {
        genre: [...genreItems],
      },
    });

    const onSubmit = handleSubmit((values) => {
      alert(JSON.stringify(values));
    });

    const genres = ref(genreItems);

    return {onSubmit, resetForm, values, genres};
  },
  template: `
    <form @submit="onSubmit" class="border-none">
      <v-multi-select
        name="genre"
        label="Genre"
        placeholder="Choose your prefered genres"
        select-all
        :items="genres"
      >
        <template #prepend.item>
          <div class='text-center italic py-4 px-2'>
            What genre you often listen to? 🎵 🎧
          </div>
        </template>
      </v-multi-select>
    </form>
`,
});

export const AppendItem = () => ({
  components: {VMultiSelect},
  setup() {
    const schema = object({
      genre: array().required().min(1).label('Genre'),
    });

    const {handleSubmit, resetForm, values} = useForm({
      validationSchema: schema,
      initialValues: {
        genre: [...genreItems],
      },
    });

    const onSubmit = handleSubmit((values) => {
      alert(JSON.stringify(values));
    });

    const genres = ref(genreItems);

    return {onSubmit, resetForm, values, genres};
  },
  template: `
    <form @submit="onSubmit" class="border-none">
      <v-multi-select
        name="genre"
        label="Genre"
        placeholder="Choose your prefered genres"
        select-all
        :items="genres"
      >
        <template #append.item>
          <div class='text-center italic'>
            🔥 This is appended to item list! 🔥
          </div>
        </template>
      </v-multi-select>
    </form>
`,
});

export const CustomItemLabel = () => ({
  components: {VMultiSelect},
  setup() {
    const schema = object({
      genre: array().required().min(1).label('Genre'),
    });

    const {handleSubmit, resetForm, values} = useForm({
      validationSchema: schema,
    });

    const onSubmit = handleSubmit((values) => {
      alert(JSON.stringify(values));
    });

    const genres = ref(userItems);

    return {onSubmit, resetForm, values, genres};
  },
  template: `
    <form @submit="onSubmit" class="border-none">
      <v-multi-select
        name="assignee"
        label="Assign To"
        placeholder="Choose users"
        item-text="email"
        item-value="email"
        select-all
        :items="genres"
      >
        <template v-slot:item.label="{item}">
          <div class="flex gap-4">
            <div>
              <img :src="item.picture" class="rounded-full w-[60px]"/>
            </div>
            
            <div class="flex-1 overflow-hidden">
              <div class="font-bold text-gray-600">
                {{ item.name?.first }} {{item.name?.last}}
              </div>
              <div class="text-sm text-gray-500">
                {{item.email}}<br/>
                {{item.nat}}
              </div>
            </div>
          </div>
        </template>
      </v-multi-select>
    </form>
`,
});

export const CssVars = () => ({
  components: {
    VMultiSelect,
  },
  template: `
  <v-multi-select
    badge-color="purple"
    :style="{
      '--badge-bg-color': 'white',
      '--badge-color': 'purple',
      '--v-multi-select-bg-color': 'purple',
      '--v-multi-select-border-color': 'purple',
      '--v-multi-select-text-color': 'white',
      '--v-multi-select-border-radius': '16px',
      '--v-multi-select-padding-x': '1rem',
      '--v-multi-select-item-hover-bg-color': 'purple',
      '--v-multi-select-item-hover-text-color': 'white',
      '--v-multi-select-icon-color': 'white',
      '--v-multi-select-check-icon-color': 'purple',
    }"
  />`,
});

export const CustomSearchFunction = () => ({
  components: {VBtn, VMultiSelect},
  setup() {
    const schema = object({
      genre: array().required().min(1).label('Genre'),
    });

    const {handleSubmit, resetForm, values} = useForm({
      validationSchema: schema,
    });

    const onSubmit = handleSubmit((values) => {
      alert(JSON.stringify(values));
    });

    const genres = ref([
      {
        name: 'Pop',
        id: 1
      },
      {
        name: 'Rock',
        id: 2
      },
      {
        name: 'Jazz',
        id: 3
      },
      {
        name: 'Alternative',
        id: 4
      },
    ]);

    const compareGenres = (item: VMultiSelectItem, query: string) => {
      return +item.id === +query || item.name.toLowerCase().includes(query.toLowerCase());
    };

    return {onSubmit, resetForm, values, genres, compareGenres};
  },
  template: `
    <form @submit="onSubmit" class="border-none">
      <v-multi-select
        name="genre"
        label="Genre"
        placeholder="Search by id. Ex: 1, 2, 3, 4"
        :items="genres"
        item-text="name"
        item-value="key"
        :search-by="compareGenres"
      />
      <div class="mt-4">
        <v-btn type="submit">Submit</v-btn>
        <v-btn type="button" text @click="resetForm">Reset</v-btn>
      </div>
      <pre>{{ {values} }}</pre>
    </form>
`,
});
