<script setup lang="ts">
import {breakpointsTailwind, useBreakpoints} from '@vueuse/core';

const items = [
  {
    text: 'Discover',
    children: [
      {
        text: 'Listen Now',
        prependIcon: 'ri:play-circle-line',
      },
      {
        text: 'Browse',
        prependIcon: 'ri:folder-music-line',
      },
      {
        text: 'Radio',
        prependIcon: 'ri:radio-line',
      },
    ],
  },
  {
    text: 'Library',
    children: [
      {
        text: 'Playlists',
        prependIcon: 'ri:play-list-line',
      },
      {
        text: 'Songs',
        prependIcon: 'ri:music-line',
      },
      {
        text: 'For You',
        prependIcon: 'ri:user-line',
      },
      {
        text: 'Artists',
        prependIcon: 'ri:star-line',
      },
      {
        text: 'Albums',
        prependIcon: 'ri:album-line',
      },
    ],
  },
  {
    text: 'Playlists',
    children: [
      {
        text: 'Recently Added',
        prependIcon: 'ri:time-line',
      },
      {
        text: 'Recently Played',
        prependIcon: 'ri:play-circle-line',
      },
      {
        text: 'Top Songs',
        prependIcon: 'ri:star-line',
      },
      {
        text: 'Top Albums',
        prependIcon: 'ri:album-line',
      },
      {
        text: 'Top Artists',
        prependIcon: 'ri:user-line',
      },
      {
        text: 'Top 25 Most Played',
        prependIcon: 'ri:play-circle-line',
      },
      {
        text: 'My Top Rated',
        prependIcon: 'ri:star-line',
      },
    ],
  },
];

const drawer = useMusicDrawer();
const breakpoints = useBreakpoints(breakpointsTailwind);
const isMobile = breakpoints.smaller('lg'); // only smaller than lg

watchEffect(() => {
  drawer.value = !isMobile.value;
});
</script>

<template>
  <VNavDrawer bordered v-model="drawer">
    <VList>
      <div v-for="item in items" :key="item.text" class="mt-4">
        <VListItemHeader> {{ item.text }} </VListItemHeader>
        <VListItem
          v-for="{text, prependIcon} in item.children"
          :key="text"
          :prepend-icon="prependIcon"
        >
          {{ text }}
        </VListItem>
      </div>
    </VList>
  </VNavDrawer>
</template>
