---
outline: deep
---

# Accordion

TODO: DESCRIPTION

## Features

TODO

## Installation

```bash
npm i @morpheme/primitives
```

## Usage

```vue
<script setup lang="ts">
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionContent,
} from '@morpheme/primitives';
import {ChevronDownIcon} from '@morphemeicons/vue/untitled';
import {ref} from 'vue';

const value = ref();
</script>

<template>
  <Accordion
    v-model="value"
    type="single"
    default-value="item-1"
    collapsible
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
        <h4 class="font-semibold flex-grow">Is it unstyled?</h4>

        <ChevronDownIcon
          class="w-6 h-6 transform transition-transform duration-200"
          :class="{
            'rotate-180': open,
          }"
        />
      </AccordionButton>
      <AccordionContent class="text-sm px-4 pb-4 accordion-content">
        Yes. It's unstyled by default, giving you freedom over the look and
        feel.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2">
      <AccordionButton
        v-slot="{open}"
        class="px-4 py-3 text-left text-sm w-full flex gap-4 items-center justify-center hover:text-gray-900"
      >
        <h4 class="font-semibold flex-grow">Can it be animated?</h4>

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
</template>
```
