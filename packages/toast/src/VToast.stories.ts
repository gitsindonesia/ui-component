import { placements } from './types';
import VToast from './VToast.vue';
import VBtn, {VBtnGroup} from '@gits-id/button';
import {themeColors} from '@gits-id/utils/colors';
import {Story} from '@storybook/vue3';
import {ref} from 'vue';
import '@gits-id/icon/dist/style.css';
import { defaultColors } from '@gits-id/theme/defaultTheme';

export default {
  title: 'Components/Toast',
  component: VToast,
  argTypes: {
    color: {
      type: 'select',
      options: ['black', ...themeColors],
    },
    type: {
      type: 'select',
      options: ['success', 'error', 'warning', 'question'],
    },
    placement: {
      type: 'select',
      options: [
        'center',
        'top',
        'top-start',
        'top-end',
        'bottom',
        'bottom-start',
        'bottom-end',
      ],
    },
  },
};

const Template: Story<{}> = (args) => ({
  components: {
    VBtn,
    VToast,
  },
  setup() {
    const isOpen = ref(false);
    return {args, isOpen};
  },
  template: `
    <v-btn @click="isOpen = !isOpen">{{ isOpen ? 'Close' : 'Open' }} Toast</v-btn>
    <v-toast v-bind="args" v-model="isOpen">
      Toast message
    </v-toast>
  `,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: `
<v-btn @click="isOpen = true"> Open Toast </v-btn>

<v-toast v-model="isOpen" message="Lorem ipsum" />
      `,
    },
  },
};

export const Placement: Story<{}> = (args) => ({
  components: {
    VBtn,
    VBtnGroup,
    VToast,
  },
  setup() {
    const isOpen = ref(true);
    const placement = ref('bottom');
    const changePlacement = (position: string) => {
      placement.value = position;
      isOpen.value = false
      setTimeout(() => {
        isOpen.value = true
      }, 200)
    }
    return {args, isOpen, placements, placement, changePlacement};
  },
  template: `
    <v-btn-group class="mt-14">
      <v-btn
        v-for="position in placements"
        :key="position"
        @click="changePlacement(position)"
      >
        {{ position }}
      </v-btn>
    </v-btn-group>
    <v-toast v-model="isOpen" :placement="placement">
      Toast message
    </v-toast>
  `,
});

export const Colors: Story<{}> = (args) => ({
  components: {
    VBtn,
    VBtnGroup,
    VToast,
  },
  setup() {
    const isOpen = ref(true);
    const color = ref('default');
    const changecolor = (position: string) => {
      color.value = position;
      isOpen.value = false
      setTimeout(() => {
        isOpen.value = true
      }, 200)
    }
    const colors = [...defaultColors, 'white'];
    return {args, isOpen, colors, color, changecolor};
  },
  template: `
    <v-btn-group>
      <v-btn
        v-for="color in colors"
        :key="color"
        :color="color"
        @click="changecolor(color)"
      >
        {{ color }}
      </v-btn>
    </v-btn-group>
    <v-toast v-model="isOpen" :color="color">
      Toast message
    </v-toast>
  `,
});

export const Icon = Template.bind({});
Icon.args = {
  icon: 'ri:check-line',
};

export const Slots: Story<{}> = (args) => ({
  components: {
    VBtn,
    VToast,
  },
  setup() {
    const isOpen = ref(false);
    const actionHandler = () => {
      alert('Confirmed!');
    }
    return {args, isOpen, actionHandler};
  },
  template: `
    <v-btn @click="isOpen = !isOpen">{{ isOpen ? 'Close' : 'Open' }} Toast</v-btn>
    <v-toast v-bind="args" v-model="isOpen">
      Toast message
      <template #action="{close}">
        <VBtn text size="sm" color="primary" @click="actionHandler">Action</VBtn>
        <VBtn text fab size="sm" color="primary" prefix-icon="ri:close-line" @click="close"></VBtn>
      </template>
    </v-toast>
  `,
});