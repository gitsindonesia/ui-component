import VAlert from './VAlert.vue';
import {themeColors} from '@morpheme/utils/colors';
import {Meta, Story, StoryFn} from '@storybook/vue3';
import Icon from '@morpheme/icon';
import AlertVModelStory from './stories/AlertVModelStory.vue';
import AlertTransitionStory from './stories/AlertTransitionStory.vue';
import AlertCustomStory from './stories/AlertCustomStory.vue';
import './VAlert.dark.scss';
import {ref} from 'vue';
import VBtn from '@morpheme/button';
import '@morpheme/button/dist/style.css';
import VAlertGroup from './VAlertGroup.vue';

export default {
  title: 'Components/Alert',
  component: VAlert,
  argTypes: {
    color: {
      control: {type: 'select'},
      options: themeColors,
    },
  },
  args: {
    modelValue: '',
    label: 'Alert text',
    dismissable: false,
    solid: false,
    outlined: false,
    icon: '',
    border: '',
  },
} as Meta;

const Template: Story = (args) => ({
  components: {
    'my-component': VAlert,
  },
  setup() {
    return {args, themeColors};
  },
  template: `
<div class="space-y-2">
  <my-component v-for="color in themeColors" :key="color" v-bind="args" :color="color">{{ args.label }}</my-component>
</div>
`,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: `<v-alert>Alert text</v-alert>
<v-alert color="primary">Alert text</v-alert>
<v-alert color="secondary">Alert text</v-alert>
<v-alert color="info">Alert text</v-alert>
<v-alert color="warning">Alert text</v-alert>
<v-alert color="success">Alert text</v-alert>
<v-alert color="error">Alert text</v-alert>
<v-alert color="dark">Alert text</v-alert>
      `,
    },
  },
};

export const Solid = Template.bind({});
Solid.args = {
  solid: true,
};
Solid.parameters = {
  docs: {
    source: {
      code: `<v-alert solid>Alert text</v-alert>`,
    },
  },
};

export const Outlined = Template.bind({});
Outlined.args = {
  outlined: true,
};
Outlined.parameters = {
  docs: {
    source: {
      code: `<v-alert solid>Alert text</v-alert>`,
    },
  },
};

export const Bordered = Template.bind({});
Bordered.args = {
  border: true,
};
Bordered.parameters = {
  docs: {
    source: {
      code: `<v-alert border>Alert text</v-alert>`,
    },
  },
};

export const Dismissable = Template.bind({});
Dismissable.args = {
  dismissable: true,
};
Dismissable.parameters = {
  docs: {
    source: {
      code: `<v-alert dismissable>Alert text</v-alert>`,
    },
  },
};

export const Icons = Template.bind({});
Icons.args = {
  icon: 'success',
};
Icons.parameters = {
  docs: {
    source: {
      code: `<v-alert icon="success">Alert text</v-alert>`,
    },
  },
};

export const CustomSlots = () => ({
  components: {VAlert, Icon},
  template: `
<v-alert color="error" dismissable>
  <template #icon>
    <Icon name="ri:alarm-warning-fill" class="fill-current w-6 h-6 mr-2" />
  </template>
  <template #x-icon>
    <Icon name="ri:close-fill" class="fill-current w-6 h-6 text-error-500" />
  </template>

  Change a few things up and try submitting again.
</v-alert>
  `,
});
CustomSlots.parameters = {
  docs: {
    source: {
      code: `<v-alert color="error" dismissable>
  <template #icon>
    <Icon name="ri:alarm-warning-fill" class="fill-current w-6 h-6 mr-2" />
  </template>
  <template #x-icon>
    <Icon name="ri:close-fill" class="fill-current w-6 h-6 text-error-500" />
  </template>

  Change a few things up and try submitting again.
</v-alert>`,
    },
  },
};

export const VModel = () => ({
  components: {AlertVModelStory},
  template: `<AlertVModelStory />`,
});

export const Transition = () => ({
  components: {AlertTransitionStory},
  template: `<AlertTransitionStory />`,
});

export const Custom = () => ({
  components: {AlertCustomStory},
  template: `<AlertCustomStory />`,
});

export const DarkMode = () => ({
  components: {VAlert, Icon},
  setup() {
    return {
      variants: ['default', 'solid', 'outlined', 'bordered'],
      themeColors,
    };
  },
  template: `
<div class="dark dark:bg-neutral-900 dark:text-neutral-200 p-6">
  <div v-for="variant in variants" :key="variant" class="mt-5">
    <p class="font-semibold text-lg mb-2">{{ variant }}</p>
    <v-alert
      v-for="color in themeColors"
      :color="color"
      :key="color"
      class="mb-2"
      v-bind:[variant]="true"
    >
      Change a few things up and try submitting again.
    </v-alert>
  </div>
</div>
  `,
});

export const Group: StoryFn<typeof VAlert> = (args) => ({
  components: {VAlert, VAlertGroup, VBtn},
  setup() {
    const messages = ref([
      {
        text: 'This is a message',
      },
    ]);

    const add = () => {
      messages.value.push({
        text: 'This is a message',
      });
    };

    const remove = () => {
      messages.value.pop();
    };

    return {args, messages, add, remove};
  },
  template: `
    <div class="flex gap-2">
      <VBtn @click="add">
        Add
      </VBtn>
      <VBtn @click="remove">
        Remove
      </VBtn>
    </div>
    <div class="absolute top-0 right-0 w-80 p-6 min-h-screen overflow-y-auto">
      <VAlertGroup>
        <VAlert
          v-for="message in messages"
          :key="message.text"
          v-bind="args"
          variant="success"
          class="mb-2"
          dismissable
        >
          {{ message.text }}
        </VAlert>
      </VAlertGroup>
    </div>
  `,
});
