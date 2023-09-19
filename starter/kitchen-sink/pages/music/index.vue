<script setup lang="ts">
definePageMeta({
  layout: 'music',
});

useHead({
  title: 'Music App',
});

const songs = [
  {
    name: 'The Less I Know The Better',
    artist: 'Tame Impala',
    image: 'https://picsum.photos/400/400?random=1',
  },
  {
    name: 'Dear God',
    artist: 'Dax',
    image: 'https://picsum.photos/400/400?random=2',
  },
  {
    name: 'Mood',
    artist: 'Sam Smith',
    image: 'https://picsum.photos/400/400?random=3',
  },
  {
    name: 'Async Vuex',
    artist: 'Rostislav Stepan',
    image: 'https://picsum.photos/400/400?random=4',
  },
  {
    name: 'Composability',
    artist: 'Vue Mastery',
    image: 'https://picsum.photos/400/400?random=5',
  },
  {
    name: 'Tailwind',
    artist: 'Adam',
    image: 'https://picsum.photos/400/400?random=6',
  },
];

const forYou = [
  {
    name: 'The Less I Know The Better',
    artist: 'Tame Impala',
    image: 'https://picsum.photos/400/400?random=11',
  },
  {
    name: 'Dear God',
    artist: 'Dax',
    image: 'https://picsum.photos/400/400?random=21',
  },
  {
    name: 'Mood',
    artist: 'Sam Smith',
    image: 'https://picsum.photos/400/400?random=31',
  },
  {
    name: 'Async Vuex',
    artist: 'Rostislav Stepan',
    image: 'https://picsum.photos/400/400?random=41',
  },
  {
    name: 'Composability',
    artist: 'Vue Mastery',
    image: 'https://picsum.photos/400/400?random=51',
  },
  {
    name: 'Tailwind',
    artist: 'Adam',
    image: 'https://picsum.photos/400/400?random=61',
  },
];
</script>

<template>
  <div>
    <div
      class="mb-8 flex flex-col xl:flex-row gap-4 justify-between lg:items-center"
    >
      <VTabGroup
        class="!px-0"
        variant="segmented-control"
        color="default"
        size="sm"
      >
        <VTabList>
          <VTabItem> Music </VTabItem>
          <VTabItem> Podcasts </VTabItem>
          <VTabItem disabled> Live </VTabItem>
        </VTabList>
      </VTabGroup>
      <VBtn prefix-icon="ri:add-circle-line">Add music</VBtn>
    </div>

    <PageHeader
      title="Listen Now"
      subtitle="Top picks for you. Updated daily."
    />
    <VDivider class="mb-8 -mt-2" />

    <section>
      <div class="scroll">
        <div class="flex gap-4">
          <div
            v-for="song in songs"
            :key="song.name"
            class="w-4/12 xl:w-[20%] shrink-0"
          >
            <div class="overflow-hidden w-full xl:h-96 rounded-lg">
              <img
                :src="song.image"
                :alt="song.name"
                class="object-cover w-full h-full hover:scale-125 transition-all"
              />
            </div>
            <h3 class="font-semibold pt-3 pb-1">{{ song.name }}</h3>
            <p class="text-sm text-gray-500 dark:text-neutral-200">
              {{ song.artist }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <SectionHeader
      class="mt-12"
      title="Made for You"
      subtitle="Your personal playlists. Updated daily."
    />
    <VDivider class="mb-8 -mt-2" />

    <section>
      <div class="scroll">
        <div class="flex gap-4">
          <div
            v-for="song in forYou"
            :key="song.name"
            class="w-4/12 xl:w-2/12 shrink-0"
          >
            <div class="overflow-hidden rounded-lg">
              <img
                :src="song.image"
                :alt="song.name"
                class="object-cover hover:scale-125 transition-all"
              />
            </div>
            <h3 class="font-semibold pt-3 pb-1">{{ song.name }}</h3>
            <p class="text-sm text-gray-500 dark:text-neutral-200">
              {{ song.artist }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
