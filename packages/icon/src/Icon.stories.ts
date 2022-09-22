import {Story} from '@storybook/vue3';
import Icon from './Icon.vue';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {},
  args: {
    name: 'ic:round-home',
  },
};

export const Default: Story<{}> = (args) => ({
  setup() {
    return {args};
  },
  components: {Icon},
  template: `<Icon v-bind="args" />`,
});
Default.parameters = {
  docs: {
    source: {
      code: '<Icon name="ic:round-home" />',
    },
  },
};

export const Sizes: Story<{}> = (args) => ({
  components: {Icon},
  template: `
<Icon name="ri:search-line" size="xxs" />
<Icon name="ri:search-line" size="xs" />
<Icon name="ri:search-line" size="sm" />
<Icon name="ri:search-line" size="md" />
<Icon name="ri:search-line" size="lg" />
<Icon name="ri:search-line" size="xl" />
<Icon name="ri:search-line" size="50" />
<Icon name="ri:search-line" :size="70" />
  `,
});
Sizes.parameters = {
  docs: {
    source: {
      code: `
<Icon name="ri:search-line" size="xxs" />
<Icon name="ri:search-line" size="xs" />
<Icon name="ri:search-line" size="sm" />
<Icon name="ri:search-line" size="md" />
<Icon name="ri:search-line" size="lg" />
<Icon name="ri:search-line" size="xl" />
<Icon name="ri:search-line" size="50" />
<Icon name="ri:search-line" :size="70" />
      `,
    },
  },
};

export const CustomClass = Default.bind({});
CustomClass.args = {
  class: 'w-10 h-10',
};
CustomClass.parameters = {
  docs: {
    source: {
      code: '<Icon name="ic:round-home" class="w-10 h-10" />',
    },
  },
};
