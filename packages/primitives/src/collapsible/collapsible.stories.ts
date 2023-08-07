import type {Story} from '@storybook/vue3';
import {
  Collapsible,
  CollapsibleButton,
  CollapsibleContent,
} from './collapsible';
import {ChevronDownIcon} from '@morphemeicons/vue/untitled';
import {ref} from 'vue';

export default {
  title: 'Primitives/Collapsible',
  component: Collapsible,
};

export const Default: Story = (args) => ({
  components: {
    Collapsible,
    CollapsibleButton,
    CollapsibleContent,
    ChevronDownIcon,
  },
  setup() {
    return {args};
  },
  template: `
    <Collapsible>
      <CollapsibleButton
        v-slot="{open}"
        class="flex py-2 justify-between w-full gap-4 items-center"
      >
        <h3 class="text-sm">
          Title
        </h3>
        <ChevronDownIcon
          class="w-5 h-5 transform transition-transform duration-200"
          :class="{
            'rotate-180': open,
          }"
        />
      </CollapsibleButton>

      <CollapsibleContent class="text-sm text-gray-800">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        euismod eu lorem et ultricies. In porta lorem at dui semper
        porttitor. Nullam quis cursus dui. Cras tincidunt vehicula
      </CollapsibleContent>
    </Collapsible>
  `,
});

export const VModel: Story = (args) => ({
  components: {
    Collapsible,
    CollapsibleButton,
    CollapsibleContent,
    ChevronDownIcon,
  },
  setup() {
    const value = ref(true);
    return {args, value};
  },
  template: `
    <Collapsible v-model="value">
      <CollapsibleButton
        v-slot="{open}"
        class="flex py-2 justify-between w-full gap-4 items-center"
      >
        <h3 class="text-sm">
          Title
        </h3>
        <ChevronDownIcon
          class="w-5 h-5 transform transition-transform duration-200"
          :class="{
            'rotate-180': open,
          }"
        />
      </CollapsibleButton>

      <CollapsibleContent class="text-sm text-gray-800">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        euismod eu lorem et ultricies. In porta lorem at dui semper
        porttitor. Nullam quis cursus dui. Cras tincidunt vehicula
      </CollapsibleContent>
    </Collapsible>
  `,
});
