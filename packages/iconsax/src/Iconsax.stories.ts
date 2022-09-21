import {Story} from '@storybook/vue3';
import Iconsax from './Iconsax.vue';

export default {
  title: 'Components/Iconsax',
  component: Iconsax,
  argTypes: {},
  args: {
    name: 'ic:round-home',
  },
};

export const Default: Story<{}> = () => ({
  components: {Iconsax},
  template: `
<Iconsax name="airplane" />
  `,
});
Default.parameters = {
  docs: {
    source: {
      code: `
<Iconsax name="airplane" />      
      `,
    },
  },
};
