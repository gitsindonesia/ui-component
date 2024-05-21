import type {Meta, StoryFn} from '@storybook/vue3';
import DefaultForm from './DefaultForm.vue';
import InlineForm from './InlineForm.vue';
import DisabledForm from './DisabledForm.vue';

export default {
  title: 'Blocks/Forms',
} as Meta;

export const Default: StoryFn = () => ({
  components: {DefaultForm},
  template: `<DefaultForm />`,
});

export const Inline: StoryFn = () => ({
  components: {InlineForm},
  template: `<InlineForm />`,
});

export const Disabled: StoryFn = () => ({
  components: {DisabledForm},
  template: `<DisabledForm />`,
});
