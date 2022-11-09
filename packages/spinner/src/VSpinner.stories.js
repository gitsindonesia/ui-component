import VSpinner from './VSpinner.vue';
import {themeColors} from '@gits-id/utils';

export default {
  title: 'Components/Spinner',
  component: VSpinner,
  argTypes: {
    color: {
      control: {type: 'select', options: themeColors},
    },
  },
  args: {
    color: 'primary',
    large: false,
    small: false,
    inverse: false,
  },
};

const Template = (args) => ({
  components: {
    VSpinner,
  },
  setup() {
    return {args};
  },
  template: `<v-spinner v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: '<v-spinner color="primary" />',
    },
  },
};

export const Sizes = (args) => ({
  components: {
    VSpinner,
  },
  setup() {
    const sizes = ['default', 'xSmall', 'small', 'large', 'xLarge']

    const nuArgs = {
      args: sizes.map((e) => {
        if(e === 'default'){
          return args;
        }

        return {
          ...args,
          [`${e}`]: true,
        }
      }),
      availableSizes : sizes
    }

    return {args:nuArgs};
  },
  template: `
    <div class="flex gap-4">
      <div v-for="(size, idx) in args.availableSizes">
        <p class="mb-2">{{size}}</p>
        <v-spinner v-bind="args.args[idx]"/>
      </div>
    </div>
  `,
});
Sizes.parameters = {
  docs: {
    source: {
      code: `
<v-spinner />
<v-spinner xSmall />
<v-spinner small />
<v-spinner large />
<v-spinner xLarge />
      `,
    },
  },
}


export const Colors = (args) => ({
  components: {
    VSpinner,
  },
  setup() {
    const colors = ['default', 'primary', 'secondary', 'info', 'success', 'warning', 'error', 'dark']

    const nuArgs = {
      args,
      availableColors : colors
    }

    return {args:nuArgs};
  },
  template: `
    <div class="flex gap-4">
      <div v-for="color in args.availableColors">
        <p class="mb-2">{{color}}</p>
        <v-spinner v-bind="args.args" :color="color" :key="color"/>
      </div>
    </div>
  `,
});
Colors.parameters = {
  docs: {
    source: {
      code: `
<v-spinner />
<v-spinner color="primary" />
<v-spinner color="secondary" />
<v-spinner color="info" />
<v-spinner color="success" />
<v-spinner color="warning" />
<v-spinner color="error" />
<v-spinner color="dark" />
      `,
    },
  },
}