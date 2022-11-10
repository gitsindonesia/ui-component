import {Meta, Story} from '@storybook/vue3';
import VBtn from './VBtn.vue';
import type {Props as VBtnProps} from './VBtn.vue';
import VIcon from '@gits-id/icon';
import {defaultColors, defaultSizes} from '@gits-id/theme/defaultTheme';

const colors = ['default', 'dark', ...defaultColors];

export default {
  component: VBtn,
  title: 'Forms/Button',
  argTypes: {
    color: {
      control: 'select',
      options: colors,
    },
    size: {
      control: 'select',
      options: defaultSizes,
    },
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
} as Meta;

const Template: Story<VBtnProps> = (args) => ({
  components: {VBtn},
  setup() {
    return {args, colors};
  },
  template: `<div class="space-x-2 space-y-2">
    <VBtn v-for="color in colors" :key="color" v-bind="args" :color="color">
      <span>{{ args.label || color }}</span>
    </VBtn>
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
  components: {VBtn, VIcon},
  setup() {
    return {
      args,
      sizes: defaultSizes,
      defaultColors,
    };
  },
  template: `
<div class="flex items-end gap-2">
  <VBtn
    v-for="size in sizes"
    :key="size"
    color="primary"
    :size="size"
    icon
    v-bind="args"
  >
    <VIcon name="ri:home-line" class="w-full"/>
  </VB>
</div>`,
});
Icon.parameters = {
  docs: {
    source: {
      code: `
<v-btn color="primary" icon>
  <VIcon name="ri:home-line" class="w-full"/>
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
  components: {Button: VBtn},
  setup() {
    return {args, sizes: defaultSizes, defaultColors};
  },
  template: `<div v-for="color in defaultColors" :key="color" class="mb-6">
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

export const Icons: Story<VBtnProps> = (args) => ({
  components: {VBtn},
  setup() {
    const onClick = () => {
      alert('Clicked!');
    };
    return {args, onClick};
  },
  template: `
<div class="flex gap-2">
    <VBtn prefix-icon="ri:search-2-line">
      Search
    </VBtn>
    <VBtn suffix-icon="ri:download-2-line">
      Download
    </VBtn>
</div>
  `,
});
Icons.parameters = {
  docs: {
    source: {
      code: `  
<VBtn prefix-icon="ri:search-2-line">
  Search
</VBtn>
<VBtn suffix-icon="ri:download-2-line">
  Download
</VBtn>
      `,
    },
  },
};

export const Plugin: Story<VBtnProps> = () => ({
  components: {VIcon},
  setup() {
    return {
      colors: ['default', 'dark', ...defaultColors],
      sizes: defaultSizes,
    };
  },
  template: `
<h3 class="font-semibold text-lg mb-2">Colors</h3>
<div class="space-x-2 space-y-2 mb-5">
  <button v-for="color in colors" :key="color" :class="\`btn btn-\${color}\`"> {{ color }} </button>
</div>
<h3 class="font-semibold text-lg mb-2">Shadow</h3>
<div class="space-x-2 space-y-2 mb-5">
  <button v-for="color in colors" :key="color" :class="\`btn shadow-md btn-\${color}\`"> {{ color }} </button>
</div>
<h3 class="font-semibold text-lg mb-2">Outlined</h3>
<div class="space-x-2 space-y-2 mb-5">
  <button v-for="color in colors" :key="color" :class="\`btn btn--outlined btn-\${color}\`"> {{ color }} </button>
</div>
<h3 class="font-semibold text-lg mb-2">Text</h3>
<div class="space-x-2 space-y-2 mb-5">
  <button v-for="color in colors" :key="color" :class="\`btn btn--text btn-\${color}\`"> {{ color }} </button>
</div>
<h3 class="font-semibold text-lg mb-2">Rounded</h3>
<div class="space-x-2 space-y-2 mb-5">
  <button v-for="color in colors" :key="color" :class="\`btn btn--rounded btn-\${color}\`"> {{ color }} </button>
</div>
<h3 class="font-semibold text-lg mb-2">Tile</h3>
<div class="space-x-2 space-y-2 mb-5">
  <button v-for="color in colors" :key="color" :class="\`btn btn--tile btn-\${color}\`"> {{ color }} </button>
</div>
<h3 class="font-semibold text-lg mb-2">Sizes</h3>
<div class="flex items-end gap-2 mb-5">
  <button v-for="size in sizes" :key="size" :class="\`btn btn-primary btn--\${size}\`"> Button </button>
</div>
<h3 class="font-semibold text-lg mb-2">Icon</h3>
<div class="flex items-end gap-2 mb-5">
  <button v-for="size in sizes" :key="size" :class="\`btn btn-secondary btn--\${size}\`"> 
    <v-icon name="ic:round-search" class="btn-icon" />
  </button>
</div>
<h3 class="font-semibold text-lg mb-2">Icon FAB</h3>
<div class="flex items-end gap-2 mb-5">
  <button v-for="size in sizes" :key="size" :class="\`btn btn-success btn--fab btn--\${size}\`"> 
    <v-icon name="ic:round-search" class="btn-icon" />
  </button>
</div>
  `,
});
