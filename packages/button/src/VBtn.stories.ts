import {Meta, Story} from '@storybook/vue3';
import Button from './VBtn.vue';
import {VBtnProps} from './types';
import {HomeIcon} from '@heroicons/vue/outline';

const themeColors = [
  'default',
  'primary',
  'secondary',
  'info',
  'success',
  'warning',
  'error',
  'dark',
];

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];

export default {
  component: Button,
  title: 'Components/Button',
  argTypes: {
    color: {
      control: 'select',
      options: themeColors,
    },
    size: {
      control: 'select',
      options: sizes,
    },
  },
  args: {
    color: '',
    outlined: false,
    rounded: false,
    ring: false,
    disabled: false,
    text: false,
    size: 'md',
    tile: false,
    icon: false,
    loading: false,
    block: false,
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<VBtnProps> = (args) => ({
  components: {Button},
  setup() {
    return {args, colors: themeColors};
  },
  template: `<div class="space-x-2 space-y-2">
    <Button v-for="color in colors" :key="color" v-bind="args" :color="color">
      <span>{{ args.label || color }}</span>
    </Button>
  </div>
  `,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: `<v-btn>Button</v-btn>
<v-btn color="primary">Button</v-btn>
<v-btn color="secondary">Button</v-btn>
<v-btn color="info">Button</v-btn>
<v-btn color="warning">Button</v-btn>
<v-btn color="success">Button</v-btn>
<v-btn color="error">Button</v-btn>
<v-btn color="dark">Button</v-btn>
      `,
    },
  },
};

export const Outlined = Template.bind({});
Outlined.args = {color: 'primary', outlined: true};
Outlined.parameters = {
  docs: {
    source: {
      code: '<v-btn color="primary" outlined>Button</v-btn>',
    },
  },
};

export const Text = Template.bind({});
Text.args = {color: 'primary', text: true};
Text.parameters = {
  docs: {
    source: {
      code: '<v-btn color="primary" text>Button</v-btn>',
    },
  },
};

export const Rounded = Template.bind({});
Rounded.args = {color: 'primary', rounded: true};
Rounded.parameters = {
  docs: {
    source: {
      code: '<v-btn color="primary" rounded>Button</v-btn>',
    },
  },
};

export const Tile = Template.bind({});
Tile.args = {color: 'primary', tile: true};
Tile.parameters = {
  docs: {
    source: {
      code: '<v-btn color="primary" tile>Button</v-btn>',
    },
  },
};

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {color: 'primary', size: 'xs'};
ExtraSmall.parameters = {
  docs: {
    source: {
      code: '<v-btn color="primary" size="xs">Button</v-btn>',
    },
  },
};

export const Small = Template.bind({});
Small.args = {color: 'primary', size: 'sm'};
Small.parameters = {
  docs: {
    source: {
      code: '<v-btn color="primary" size="sm">Button</v-btn>',
    },
  },
};

export const Large = Template.bind({});
Large.args = {color: 'primary', size: 'lg'};
Large.parameters = {
  docs: {
    source: {
      code: '<v-btn color="primary" size="lg">Button</v-btn>',
    },
  },
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {color: 'primary', size: 'xl'};
ExtraLarge.parameters = {
  docs: {
    source: {
      code: '<v-btn color="primary" size="xl">Button</v-btn>',
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = {color: 'primary', disabled: true};
Disabled.parameters = {
  docs: {
    source: {
      code: '<v-btn color="primary" disabled>Button</v-btn>',
    },
  },
};

export const OutlinedDisabled = Template.bind({});
OutlinedDisabled.args = {color: 'primary', disabled: true, outlined: true};
OutlinedDisabled.parameters = {
  docs: {
    source: {
      code: '<v-btn color="primary" disabled outlined>Button</v-btn>',
    },
  },
};

export const Loading = Template.bind({});
Loading.args = {color: 'primary', loading: true};
Loading.parameters = {
  docs: {
    source: {
      code: '<v-btn color="primary" loading>Button</v-btn>',
    },
  },
};

export const Block = Template.bind({});
Block.args = {color: 'primary', block: true};
Block.parameters = {
  docs: {
    source: {
      code: '<v-btn color="primary" block>Button</v-btn>',
    },
  },
};

export const Shadow = Template.bind({});
Shadow.args = {color: 'primary', shadow: true};
Shadow.parameters = {
  docs: {
    source: {
      code: '<v-btn color="primary" shadow>Button</v-btn>',
    },
  },
};

export const NoRingEffect = Template.bind({});
NoRingEffect.args = {color: 'primary', noRing: true};
NoRingEffect.parameters = {
  docs: {
    source: {
      code: '<v-btn color="primary" no-ring>Button</v-btn>',
    },
  },
};

export const Icon: Story<VBtnProps> = (args) => ({
  components: {Button, HomeIcon},
  setup() {
    return {
      args,
      sizes,
      themeColors,
      sizeClass: {
        xs: 'w-4 h-4',
        sm: 'w-5 h-5',
        md: 'w-6 h-6',
        lg: 'w-10 h-10',
        xl: 'w-12 h-12',
      },
    };
  },
  template: `
<div class="flex items-end gap-2">
  <Button v-for="size in sizes" :key="size" v-bind="args" color="primary" :size="size" icon>
    <HomeIcon class="w-full"/>
  </Button>
</div>`,
});
Icon.parameters = {
  docs: {
    source: {
      code: `
<v-btn color="primary" icon>
  <HomeIcon class="w-full"/>
</v-btn>
      `,
    },
  },
};

export const RoundedIcon = Icon.bind({});
RoundedIcon.args = {rounded: true};
RoundedIcon.parameters = {
  docs: {
    source: {
      code: `
<v-btn rounded icon> Button </v-btn>
      `,
    },
  },
};

export const OutlinedIcon = Icon.bind({});
OutlinedIcon.args = {outlined: true};
OutlinedIcon.parameters = {
  docs: {
    source: {
      code: `
<v-btn outlined icon> Button </v-btn>
      `,
    },
  },
};

export const TextIcon = Icon.bind({});
TextIcon.args = {text: true};
TextIcon.parameters = {
  docs: {
    source: {
      code: `
<v-btn text icon> Button </v-btn>
      `,
    },
  },
};

export const Sizes: Story<VBtnProps> = (args) => ({
  components: {Button},
  setup() {
    return {args, sizes, themeColors};
  },
  template: `<div v-for="color in themeColors" :key="color" class="mb-6">
  <div>
    <div class="font-semibold text-lg mb-2">{{color}}</div>
    <div class="flex items-end gap-2">
      <Button v-for="size in sizes" :key="size" v-bind="args" :color="color" :size="size">
        {{ size }}
      </Button>
    </div>
  </div>
  </div>`,
});
Sizes.parameters = {
  docs: {
    source: {
      code: `
<v-btn size="xs"> Button </v-btn>
<v-btn size="sm"> Button </v-btn>
<v-btn size="md"> Button </v-btn>
<v-btn size="lg"> Button </v-btn>
<v-btn size="xl"> Button </v-btn>
      `,
    },
  },
};
