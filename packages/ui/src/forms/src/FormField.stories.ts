import { ref } from 'vue';
import FormField from './FormField.vue';
import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Experimental/Forms/Field',
  component: FormField,
} as Meta;

export const Default: StoryFn<typeof FormField> = (args) => ({
  components: {FormField},
  setup() {
    const email = ref('')
    const password = ref('')
    return {args, email, password};
  },
  template: `
    <FormField
      id="email"
      label="Email"
      hint="Enter your email"
      class="mb-4"
      wrapper-class="overflow-hidden"
      prepend-icon="ic:round-email"
      append-icon="ic:round-check"
    >
      <input
        id="email"
        v-model="email"
        type="email"
        placeholder="Email"
        class="v-input-control"
      />
    </FormField>
    <FormField
      id="password"
      label="Password"
      hint="Enter your password"
      class="mb-4"
      wrapper-class="overflow-hidden"
      prepend-icon="ic:round-lock"
      append-icon="ic:round-check"
    >
      <input
        id="password"
        v-model="password"
        type="password"
        placeholder="Password"
        class="v-input-control"
      />
    </FormField>
  `,
});

export const ErrorState: StoryFn<typeof FormField> = (args) => ({
  components: {FormField},
  setup() {
    const email = ref('')
    const password = ref('')
    return {args, email, password};
  },
  template: `
    <FormField
      id="email"
      label="Email"
      hint="Enter your email"
      class="mb-4"
      wrapper-class="overflow-hidden"
      prepend-icon="ic:round-email"
      append-icon="ic:round-check"
      error
      error-message="Email is required"
    >
      <input
        id="email"
        v-model="email"
        type="email"
        placeholder="Email"
        class="v-input-control"
      />
    </FormField>
  `,
});
