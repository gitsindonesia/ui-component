import type {StoryFn} from '@storybook/vue3';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionContent,
} from './accordion';
import {ref} from 'vue';
import {ChevronDownIcon} from '@morphemeicons/vue/untitled';
// import './accordion.css';

export default {
  title: 'Primitives/Accordion',
  component: Accordion,
  subcomponents: {
    AccordionItem,
    AccordionButton,
    AccordionContent,
  },
};

export const Default: StoryFn = (args) => ({
  components: {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionContent,
    ChevronDownIcon,
  },
  setup() {
    const value = ref();
    return {args, value};
  },
  template: `
    <Accordion
      v-model="value"
      v-bind="args"
      class="border border-gray-200 rounded-md divide-y"
    >
      <AccordionItem value="item-1">
        <AccordionButton
          v-slot="{open}"
          class="px-4 py-3 text-left text-sm w-full flex gap-4 items-center justify-center hover:text-gray-900"
        >
          <h4 class="font-semibold flex-grow">Is it accessible?</h4>

          <ChevronDownIcon
            class="w-6 h-6 transform transition-transform duration-200"
            :class="{
              'rotate-180': open,
            }"
          />
        </AccordionButton>
        <AccordionContent class="text-sm px-4 pb-4 accordion-content">
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionButton
          v-slot="{open}"
          class="px-4 py-3 text-left text-sm w-full flex gap-4 items-center justify-center hover:text-gray-900"
        >
          <h4 class="font-semibold flex-grow">
            Is it unstyled?
          </h4>

          <ChevronDownIcon
            class="w-6 h-6 transform transition-transform duration-200"
            :class="{
              'rotate-180': open,
            }"
          />
        </AccordionButton>
        <AccordionContent class="text-sm px-4 pb-4 accordion-content">
          Yes. It's unstyled by default, giving you freedom over the look and feel.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionButton
          v-slot="{open}"
          class="px-4 py-3 text-left text-sm w-full flex gap-4 items-center justify-center hover:text-gray-900"
        >
          <h4 class="font-semibold flex-grow">
            Can it be animated?
          </h4>

          <ChevronDownIcon
            class="w-6 h-6 transform transition-transform duration-200"
            :class="{
              'rotate-180': open,
            }"
          />
        </AccordionButton>
        <AccordionContent class="text-sm px-4 pb-4 accordion-content">
          Yes! You can animate the Accordion with CSS or JavaScript.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  `,
});

export const Multiple = Default.bind({});
Multiple.args = {
  type: 'multiple',
};

export const Collapsible = Default.bind({});
Collapsible.args = {
  collapsible: true,
};

export const DefaultValue = Default.bind({});
DefaultValue.args = {
  defaultValue: 'item-2',
};

export const Transition: StoryFn = (args) => ({
  components: {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionContent,
    ChevronDownIcon,
  },
  setup() {
    const value = ref();
    return {args, value};
  },
  template: `
    <Accordion
      v-model="value"
      v-bind="args"
      class="border border-gray-200 rounded-md divide-y"
    >
      <AccordionItem value="item-1">
        <AccordionButton
          v-slot="{open}"
          class="px-4 py-3 text-left text-sm w-full flex gap-4 items-center justify-center hover:text-gray-900"
        >
          <h4 class="font-semibold flex-grow">Is it accessible?</h4>

          <ChevronDownIcon
            class="w-6 h-6 transform transition-transform duration-200"
            :class="{
              'rotate-180': open,
            }"
          />
        </AccordionButton>
        <transition name="fade">
          <AccordionContent class="text-sm px-4 pb-4 accordion-content">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </transition>
      </AccordionItem>
    </Accordion>
  `,
});
