<script setup lang="ts">
import {computed, ref} from 'vue';

const props = withDefaults(
  defineProps<{
    modelValue?: string;
    src: string;
    width?: string | number;
    height?: string | number;
    hideCode?: boolean;
    hideNav?: boolean;
    hideStorybookLink?: boolean;
  }>(),
  {
    height: 400,
  },
);

const source = computed(() => {
  return `https://gits-ui.web.app/iframe.html?args=&id=${props.src}&viewMode=story`;
});

const storyLink = computed(() => {
  return `https://gits-ui.web.app/?path=/story/${props.src}`;
});

const tabs = ref(['preview', 'code']);
const selectedTab = ref('preview');
</script>

<template>
  <div class="tabs">
    <div
      class="tabs-nav"
      :style="{
        display: hideNav ? 'none' : 'flex',
      }"
    >
      <button
        v-for="tab in tabs"
        :key="tab"
        class="tabs-nav-item"
        :class="{
          'tabs-nav-item--active': selectedTab === tab,
        }"
        :style="{
          display: hideCode && tab === 'code' ? 'none' : 'block',
        }"
        @click="selectedTab = tab"
      >
        {{ tab }}
      </button>
    </div>
    <div class="tabs-content">
      <div v-if="selectedTab === 'preview'" class="tabs-content-item">
        <iframe
          :src="source"
          class="live-preview-iframe"
          :width="width"
          :height="height"
        ></iframe>
      </div>

      <div v-if="selectedTab === 'code'" class="tabs-content-item">
        <slot></slot>
      </div>
    </div>
  </div>
  <div style="margin-top: 1rem">
    <a
      v-if="!hideStorybookLink"
      :href="storyLink"
      target="_blank"
      rel="noopener noreferrer"
    >
      Open in Storybook
    </a>
  </div>
</template>

<style lang="scss">
.live-preview-iframe {
  width: 100%;
  margin-top: 0.5em;
  border: 1px solid #ddd;
  border-radius: 0.5em;
  background-color: white;
}

.tabs {
  background-color: #333;
  color: white;
  padding: 1em;
  border-radius: 0.5em;

  &-nav {
    margin-bottom: 0.75em;
    display: flex;
    gap: 0.5rem;

    &-item {
      text-transform: capitalize;
      padding: 0.5em 1em;
      border-radius: 0.5em;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      &:hover,
      &--active {
        background-color: #222;
      }
    }
  }
}
</style>
