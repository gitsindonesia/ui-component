import {VBtn} from '@morpheme/button';
import type {Story} from '@storybook/vue3';
import VBanner from './VBanner.vue';
import VBannerText from './VBannerText.vue';
import VText from '@morpheme/text';

import {ref} from 'vue';

export default {
  title: 'Components/Banner',
  component: VBanner,
};

export const Default: Story<{}> = (args) => ({
  components: {
    VBanner,
    VBannerText,
    VText,
    VBtn,
  },
  setup() {
    return {args};
  },
  template: `
    <VBanner color="primary" v-bind="args">
      <VBannerText>
        Welcome to the <span class="font-semibold">Morpheme</span> Design System
      </VBannerText>
      <template #actions="{close}">
        <VBtn text flush @click="close" class="!text-white" prefix-icon="ri:close-line" />
      </template>
    </VBanner>
    <main class="p-4 bg-gray-100">
      Ipsum sint cillum magna ea deserunt tempor labore consequat magna consectetur magna. Dolore non in pariatur id irure veniam veniam sit voluptate. Duis veniam sunt velit ut exercitation aliqua. Proident exercitation sint officia ipsum velit eiusmod fugiat.
      Quis nulla ad deserunt consectetur ad. Quis ut culpa labore excepteur minim duis anim anim ullamco ullamco nostrud minim deserunt quis. Labore fugiat fugiat Lorem consectetur culpa esse qui Lorem id quis. Non officia aliquip eiusmod cillum officia ullamco aliqua occaecat ullamco. Minim est in irure eu ea eu anim nulla eiusmod. Ad voluptate quis ea anim enim culpa. Adipisicing incididunt labore adipisicing anim adipisicing exercitation adipisicing laboris laborum tempor aliqua Lorem exercitation irure.
    </main>
  `,
});

export const Fixed = Default.bind({});
Fixed.args = {
  fixed: true,
};

export const Sticky = Default.bind({});
Sticky.args = {
  sticky: true,
};

export const Absolute = Default.bind({});
Absolute.args = {
  absolute: true,
};

export const Top = Default.bind({});
Top.args = {
  absolute: true,
  top: true,
};

export const Bottom = Default.bind({});
Bottom.args = {
  absolute: true,
  bottom: true,
};

export const Primary = Default.bind({});
Primary.args = {
  color: 'primary',
};

export const Secondary = Default.bind({});
Secondary.args = {
  color: 'secondary',
};

export const Info = Default.bind({});
Info.args = {
  color: 'info',
};

export const Warning = Default.bind({});
Warning.args = {
  color: 'warning',
};

export const Error = Default.bind({});
Error.args = {
  color: 'error',
};

export const Success = Default.bind({});
Success.args = {
  color: 'success',
};

export const Light = Default.bind({});
Light.args = {
  color: 'light',
};

export const Dark = Default.bind({});
Dark.args = {
  color: 'dark',
};

export const White = Default.bind({});
White.args = {
  color: 'white',
};

export const CustomClass: Story<{}> = (args) => ({
  components: {
    VBanner,
    VBannerText,
    VText,
    VBtn,
  },
  setup() {
    return {args};
  },
  template: `
    <VBanner v-bind="args" class="bg-purple-600 text-white">
      <VBannerText class="text-left">
        Welcome to the <span class="font-semibold">Morpheme</span> Design System
      </VBannerText>
      <template #actions="{close}">
        <VBtn text flush @click="close" class="!text-white" prefix-icon="ri:close-line" />
      </template>
    </VBanner>
    <main class="p-4 bg-gray-100">
      Ipsum sint cillum magna ea deserunt tempor labore consequat magna consectetur magna. Dolore non in pariatur id irure veniam veniam sit voluptate. Duis veniam sunt velit ut exercitation aliqua. Proident exercitation sint officia ipsum velit eiusmod fugiat.
      Quis nulla ad deserunt consectetur ad. Quis ut culpa labore excepteur minim duis anim anim ullamco ullamco nostrud minim deserunt quis. Labore fugiat fugiat Lorem consectetur culpa esse qui Lorem id quis. Non officia aliquip eiusmod cillum officia ullamco aliqua occaecat ullamco. Minim est in irure eu ea eu anim nulla eiusmod. Ad voluptate quis ea anim enim culpa. Adipisicing incididunt labore adipisicing anim adipisicing exercitation adipisicing laboris laborum tempor aliqua Lorem exercitation irure.
    </main>
  `,
});

export const ModelValue: Story<{}> = (args) => ({
  components: {
    VBanner,
    VBannerText,
    VText,
    VBtn,
  },
  setup() {
    const banner = ref(true);
    return {args, banner};
  },
  template: `
    <VBanner v-bind="args" v-model="banner">
      <VBannerText class="text-left">
        Welcome to the <span class="font-semibold">Morpheme</span> Design System
      </VBannerText>
      <template #actions="{close}">
        <VBtn text flush @click="close" class="!text-white" prefix-icon="ri:close-line" />
      </template>
    </VBanner>
    <main class="p-4 bg-gray-100">
      <VBtn @click="banner = !banner">Toggle Banner</VBtn>
      <p class="mt-2">
        Ipsum sint cillum magna ea deserunt tempor labore consequat magna consectetur magna. Dolore non in pariatur id irure veniam veniam sit voluptate. Duis veniam sunt velit ut exercitation aliqua. Proident exercitation sint officia ipsum velit eiusmod fugiat.
        Quis nulla ad deserunt consectetur ad. Quis ut culpa labore excepteur minim duis anim anim ullamco ullamco nostrud minim deserunt quis. Labore fugiat fugiat Lorem consectetur culpa esse qui Lorem id quis. Non officia aliquip eiusmod cillum officia ullamco aliqua occaecat ullamco. Minim est in irure eu ea eu anim nulla eiusmod. Ad voluptate quis ea anim enim culpa. Adipisicing incididunt labore adipisicing anim adipisicing exercitation adipisicing laboris laborum tempor aliqua Lorem exercitation irure.
      </p>
    </main>
  `,
});
