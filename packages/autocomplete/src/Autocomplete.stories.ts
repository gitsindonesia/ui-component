import {ref} from 'vue';
import Autocomplete from './Autocomplete.vue';

const items = [
  {value: 1, text: 'Wade Cooper'},
  {value: 2, text: 'Arlene Mccoy'},
  {value: 3, text: 'Devon Webb'},
  {value: 4, text: 'Tom Cook'},
  {value: 5, text: 'Tanya Fox'},
  {value: 6, text: 'Hellen Schmidt'},
];

export default {
  title: 'Components/Autocomplete',
  component: Autocomplete,
  argTypes: {},
  args: {
    items,
  },
};

const Template = (args) => ({
  components: {Autocomplete},
  setup() {
    const selected = ref();
    return {args, selected};
  },
  template: `
    <Autocomplete v-bind="args" v-model="selected"/>
    Selected: {{ selected }}
  `,
});

export const Default = Template.bind({});
Default.args = {};
