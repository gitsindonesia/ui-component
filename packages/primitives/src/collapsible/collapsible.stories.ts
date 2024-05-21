import type {StoryFn} from '@storybook/vue3';
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
  subcomponents: {
    CollapsibleButton,
    CollapsibleContent,
  },
};

export const Default: StoryFn = (args) => ({
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
        class="flex py-2 bg-white justify-between w-full gap-4 items-center"
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

      <CollapsibleContent
        class="text-sm text-gray-800"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        euismod eu lorem et ultricies. In porta lorem at dui semper
        porttitor. Nullam quis cursus dui. Cras tincidunt vehicula
      </CollapsibleContent>
    </Collapsible>
  `,
});

export const VModel: StoryFn = (args) => ({
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

    <div class="mt-4">
      <button @click="value = !value" class="rounded-lg bg-blue-600 text-white px-3 py-2 text-sm">
        {{ value ? 'Close' : 'Open' }}
      </button>
    </div>
  `,
});
