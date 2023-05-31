<script setup lang="ts"></script>

<template>
  <PageHeader title="Banner" />

  <div class="space-y-4">
    <VCard title="Default">
      <div>
        <VBanner
          v-for="color in colors"
          :key="color"
          :color="color"
          class="mb-2"
        >
          <VBannerText>
            Welcome to the <span class="font-semibold">Morpheme</span> Design
            System
          </VBannerText>
          <template #actions="{close}">
            <VBtn
              text
              flush
              @click="close"
              :prefix-icon-class="color !== 'default' ? '!text-white' : ''"
              prefix-icon="ri:close-line"
            />
          </template>
        </VBanner>
      </div>
    </VCard>
  </div>
</template>
