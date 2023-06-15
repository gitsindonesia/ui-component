import {Meta, Story} from '@storybook/vue3';
import VBtn from './VBtn.vue';
import type {Props as VBtnProps} from './VBtn.vue';
import VIcon from '@morpheme/icon';
import {defaultColors} from '@morpheme/theme/defaultTheme';
import VBtnGroup from './VBtnGroup.vue';
import VBtnToolbar from './VBtnToolbar.vue';
import ButtonTest from './stories/ButtonTest.vue';

const colors = defaultColors;
const defaultSizes = ['sm', 'md', 'lg'];

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

export const Soft = Template.bind({});
Soft.args = {color: 'primary', soft: true};
Soft.parameters = {
  docs: {
    source: {
      code: '<v-btn color="primary" soft>Button</v-btn>',
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

export const Flush = Template.bind({});
Flush.args = {color: 'primary', flush: true, text: true};
Flush.parameters = {
  docs: {
    source: {
      code: '<v-btn color="primary" flush text>Button</v-btn>',
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

export const Sizes: Story<VBtnProps> = (args) => ({
  components: {Button: VBtn},
  setup() {
    return {args, sizes: defaultSizes, defaultColors};
  },
  template: `
<div v-for="color in defaultColors" :key="color" class="mb-6">
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
  template: `
<div class="flex gap-2">
    <VBtn prefix-icon="ri:search-2-line">
    </VBtn>
    <VBtn prefix-icon="ri:search-2-line">
      Search
    </VBtn>
    <VBtn color="primary" suffix-icon="ri:download-2-line">
    </VBtn>
    <VBtn color="primary" suffix-icon="ri:download-2-line">
      Download
    </VBtn>
</div>
  `,
});
Icons.parameters = {
  docs: {
    source: {
      code: `  
<VBtn prefix-icon="ri:search-2-line" />
<VBtn prefix-icon="ri:search-2-line">
  Search
</VBtn>
<VBtn suffix-icon="ri:download-2-line" />
<VBtn suffix-icon="ri:download-2-line">
  Download
</VBtn>
      `,
    },
  },
};

export const Fab: Story<VBtnProps> = (args) => ({
  components: {VBtn},
  template: `
<div class="flex gap-2 items-end">
  <VBtn size="sm" color="primary" prefix-icon="ri:search-2-line" fab />
  <VBtn color="primary" prefix-icon="ri:search-2-line" fab />
  <VBtn size="lg" color="primary" prefix-icon="ri:search-2-line" fab />
</div>
  `,
});
Fab.parameters = {
  docs: {
    source: {
      code: `
<div class="flex gap-2 items-end">
  <VBtn size="sm" color="primary" prefix-icon="ri:search-2-line" fab />
  <VBtn color="primary" prefix-icon="ri:search-2-line" fab />
  <VBtn size="lg" color="primary" prefix-icon="ri:search-2-line" fab />
</div>
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

export const DynamicProps: Story<VBtnProps> = () => ({
  components: {VIcon, VBtn},
  template: `
<VBtn>Default</VBtn>
<VBtn disabled>Disabled</VBtn>
<VBtn to="/">Router Link</VBtn>
<VBtn href="https://google.com">Href Link</VBtn>
<VBtn href="https://google.com" new-tab>Href Link (New Tab)</VBtn>
  `,
});

export const ButtonGroup: Story<VBtnProps> = () => ({
  components: {VBtnGroup, VBtnToolbar, VBtn},
  template: `
    <h3 class="font-semibold">Default</h3>
    <VBtnGroup class="w-full mt-2">
      <VBtn>Button</VBtn>
      <VBtn>Button</VBtn>
      <VBtn>Button</VBtn>
    </VBtnGroup>
    <h3 class="font-semibold mt-5">Sizes:</h3>
    <VBtnGroup class="w-full mt-2">
      <VBtn size="sm">sm</VBtn>
      <VBtn size="sm">sm</VBtn>
      <VBtn size="sm">sm</VBtn>
    </VBtnGroup>
    <VBtnGroup class="w-full mt-2">
      <VBtn size="lg">lg</VBtn>
      <VBtn size="lg">lg</VBtn>
      <VBtn size="lg">lg</VBtn>
    </VBtnGroup>
    <VBtnGroup class="w-full mt-5">
      <VBtn color="primary">Button</VBtn>
      <VBtn color="primary">Button</VBtn>
      <VBtn color="primary">Button</VBtn>
    </VBtnGroup>
    <VBtnGroup class="w-full mt-5">
      <VBtn color="primary">Button</VBtn>
      <VBtn color="secondary">Button</VBtn>
      <VBtn color="error">Button</VBtn>
    </VBtnGroup>
    <VBtnGroup class="w-full mt-5">
      <VBtn outlined color="primary">Button</VBtn>
      <VBtn outlined color="secondary">Button</VBtn>
      <VBtn outlined color="error">Button</VBtn>
    </VBtnGroup>
    <VBtnGroup class="w-full mt-5">
      <VBtn text color="primary">Button</VBtn>
      <VBtn text color="secondary">Button</VBtn>
      <VBtn text color="error">Button</VBtn>
    </VBtnGroup>
    <VBtnGroup class="mt-5">
      <VBtn prefix-icon="ri:search-2-line"></VBtn>
      <VBtn suffix-icon="ri:add-line"></VBtn>
      <VBtn prefix-icon="ri:edit-line"></VBtn>
    </VBtnGroup>

    <VBtnToolbar class="mt-5">
      <VBtnGroup>
        <VBtn prefix-icon="ri:bold"></VBtn>
        <VBtn suffix-icon="ri:italic"></VBtn>
        <VBtn prefix-icon="ri:underline"></VBtn>
      </VBtnGroup>
      <VBtnGroup>
        <VBtn suffix-icon="ri:list-ordered"></VBtn>
        <VBtn prefix-icon="ri:list-check"></VBtn>
        <VBtn prefix-icon="ri:align-left"></VBtn>
      </VBtnGroup>
      <VBtnGroup>
        <VBtn prefix-icon="ri:link"></VBtn>
        <VBtn suffix-icon="ri:image-line"></VBtn>
        <VBtn prefix-icon="ri:video-line"></VBtn>
      </VBtnGroup>
      <VBtn prefix-icon="ri:format-clear"></VBtn>
    </VBtnToolbar>
  `,
});

export const DarkMode: Story<VBtnProps> = () => ({
  components: {VBtnGroup, VBtnToolbar, VBtn},
  setup() {
    return {
      colors,
      variants: ['default', 'outlined', 'text', 'soft'],
    };
  },
  template: `
  <div class="dark dark:bg-neutral-900 dark:text-neutral-200 p-6">
    <h3 class="font-semibold my-2">Colors</h3>
    <div class="flex flex-row gap-2">
      <VBtn v-for="color in colors" :key="color" :color="color">
        {{ color }}
      </VBtn>
    </div>
    <h3 class="font-semibold mt-4 mb-3">Variants</h3>
    <div
      v-for="variant in variants"
      :key="variant"
    >
      <p>{{ variant }}</p>
      <div class="flex flex-row gap-2 mt-2">
        <VBtn v-for="color in colors" :key="color" :color="color"
          v-bind:[variant]="variant"
        >
        {{ color }}
        </VBtn>
      </div>
    </div>
    <h3 class="font-semibold mt-4">Default</h3>
    <VBtnGroup class="w-full mt-2">
      <VBtn>Button</VBtn>
      <VBtn>Button</VBtn>
      <VBtn>Button</VBtn>
    </VBtnGroup>
    <h3 class="font-semibold mt-5">Sizes:</h3>
    <VBtnGroup class="w-full mt-2">
      <VBtn size="sm">sm</VBtn>
      <VBtn size="sm">sm</VBtn>
      <VBtn size="sm">sm</VBtn>
    </VBtnGroup>
    <VBtnGroup class="w-full mt-2">
      <VBtn size="lg">lg</VBtn>
      <VBtn size="lg">lg</VBtn>
      <VBtn size="lg">lg</VBtn>
    </VBtnGroup>
    <VBtnGroup class="w-full mt-5">
      <VBtn color="primary">Button</VBtn>
      <VBtn color="primary">Button</VBtn>
      <VBtn color="primary">Button</VBtn>
    </VBtnGroup>
    <VBtnGroup class="w-full mt-5">
      <VBtn color="primary">Button</VBtn>
      <VBtn color="secondary">Button</VBtn>
      <VBtn color="error">Button</VBtn>
    </VBtnGroup>
    <VBtnGroup class="w-full mt-5">
      <VBtn outlined color="primary">Button</VBtn>
      <VBtn outlined color="secondary">Button</VBtn>
      <VBtn outlined color="error">Button</VBtn>
    </VBtnGroup>
    <VBtnGroup class="w-full mt-5">
      <VBtn text color="primary">Button</VBtn>
      <VBtn text color="secondary">Button</VBtn>
      <VBtn text color="error">Button</VBtn>
    </VBtnGroup>
    <VBtnGroup class="mt-5">
      <VBtn prefix-icon="ri:search-2-line"></VBtn>
      <VBtn suffix-icon="ri:add-line"></VBtn>
      <VBtn prefix-icon="ri:edit-line"></VBtn>
    </VBtnGroup>

    <VBtnToolbar class="mt-5">
      <VBtnGroup>
        <VBtn prefix-icon="ri:bold"></VBtn>
        <VBtn suffix-icon="ri:italic"></VBtn>
        <VBtn prefix-icon="ri:underline"></VBtn>
      </VBtnGroup>
      <VBtnGroup>
        <VBtn suffix-icon="ri:list-ordered"></VBtn>
        <VBtn prefix-icon="ri:list-check"></VBtn>
        <VBtn prefix-icon="ri:align-left"></VBtn>
      </VBtnGroup>
      <VBtnGroup>
        <VBtn prefix-icon="ri:link"></VBtn>
        <VBtn suffix-icon="ri:image-line"></VBtn>
        <VBtn prefix-icon="ri:video-line"></VBtn>
      </VBtnGroup>
      <VBtn prefix-icon="ri:format-clear"></VBtn>
    </VBtnToolbar>
</div>
  `,
});

export const Test: Story<VBtnProps> = (args) => ({
  components: {ButtonTest},
  setup() {
    return {args, colors};
  },
  template: `
  <ButtonTest />
  `,
});
