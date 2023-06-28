import type {StoryFn, Meta} from '@storybook/vue3';
import VCommand from './VCommand.vue';
import {ref} from 'vue';

const items = [
  { value: 1, text: 'Wade Cooper', prependIcon: 'ri:line-fill' },
  { value: 2, text: 'Arlene Mccoy' },
  { value: 3, text: 'Devon Webb' },
  { value: 4, text: 'Tom Cook' },
  { value: 5, text: 'Tanya Fox' },
  { value: 6, text: 'Hellen Schmidt' },
]

export default {
  title: 'Components/Command',
  component: VCommand,
  args: {
    items
  }
} as Meta;

export const Default: StoryFn = (args) => ({
  setup() {
    const selected = ref()
    return {args, selected};
  },
  components: {
    VCommand,
  },
  template: `
    <VCommand
      v-bind="args"
      v-model="selected"
    />
    
    Selected: {{selected}}
  `,
});