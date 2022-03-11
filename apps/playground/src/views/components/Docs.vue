<script setup lang="ts">
import 'prismjs';
import 'prism-themes/themes/prism-material-dark.css';
import Prism from 'vue-prism-component';
import {ref, withDefaults} from 'vue';

const props = withDefaults(
  defineProps<{
    title: string;
    lang?: string;
    scriptLang?: string;
    styleLang?: string;
    language?: string;
    code?: string;
    script?: string;
    style?: string;
    selected?: number;
    hideTabs?: boolean;
  }>(),
  {
    scriptLang: 'javascript',
    styleLang: 'css',
    selected: 0,
    boolean: true,
    script: '//',
    style: '/**/',
  },
);

const items: Record<string, any>[] = [];

items.push({
  text: 'Template',
});

items.push({
  text: 'Script',
});

items.push({
  text: 'Style',
});

const selected = ref(props.selected);
</script>

<template>
  <div class="bg-white rounded-md mb-4 border">
    <div class="border-b py-3 px-4 font-medium text-gray-600" v-if="title">
      {{ title }}
    </div>
    <div class="rounded-b-md">
      <div class="flex flex-col">
        <div
          class="w-full py-6 px-4 flex items-center flex-wrap gap-2 overflow-x-auto"
          v-if="$slots.preview"
        >
          <slot name="preview"></slot>
        </div>
        <div class="border-t">
          <div class="flex justify-end sm:items-center">
            <v-tabs v-if="!hideTabs" :items="items" v-model="selected"></v-tabs>
          </div>

          <prism
            v-if="selected === 0"
            :language="lang || language"
            class="w-full !my-0"
          >
            {{ code }}
          </prism>
          <prism
            v-else-if="selected === 1"
            :language="scriptLang"
            class="w-full !my-0"
          >
            {{ script }}
          </prism>
          <prism
            v-else-if="selected === 2"
            :language="styleLang"
            class="w-full !my-0"
          >
            {{ style }}
          </prism>
        </div>
      </div>
    </div>
  </div>
</template>
