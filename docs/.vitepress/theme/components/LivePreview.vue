<script setup lang="ts">
import {computed, ref} from 'vue';

const props = withDefaults(
  defineProps<{
    modelValue?: string;
    src: string;
    width?: string | number;
    height?: string | number;
    withCode?: boolean;
    sourceLink?: boolean;
  }>(),
  {
    height: 400,
  },
);

const source = computed(() => {
  return `https://gits-ui.web.app/iframe.html?args=&id=${props.src}&viewMode=story`;
});

const tabs = ref(['preview', 'code']);
const selectedTab = ref('preview');
</script>

<template>
  <div class="tabs">
    <div class="tabs-nav">
      <button
        v-for="tab in tabs"
        :key="tab"
        class="tabs-nav-item"
        :class="{
          'tabs-nav-item--active': selectedTab === tab,
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

  <div v-if="sourceLink" class="source-container">
    <a :href="source" target="_blank" rel="noopener noreferrer">
      Open in new tab
    </a>
  </div>
</template>

<style lang="scss">
.source-container {
  margin-top: 1rem;
}

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
