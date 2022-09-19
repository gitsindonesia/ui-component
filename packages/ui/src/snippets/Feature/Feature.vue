<script setup lang="ts">
import {Icon} from '@gits-id/icon';
</script>

<template>
  <section class="py-8 sm:py-12 px-4 sm:px-0" id="feature">
    <div class="container mx-auto">
      <div class="mb-12 text-center space-y-2">
        <h2 class="font-semibold text-primary text-2xl">Ready-to-use</h2>
        <h3 class="font-semibold text-3xl">All-in-one platform</h3>
        <p class="text-gray-500 max-w-2xl mx-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          tempora ad ullam cumque sed sequi non optio ducimus.
        </p>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-4 gap-8">
        <div v-for="i in 8" :key="i">
          <div
            class="
              bg-primary
              border-primary
              w-10
              h-10
              rounded
              grid
              place-items-center
              mb-3
            "
          >
            <Icon name="ri:4k-line" class="w-5 h-5 fill-current text-white" />
          </div>
          <h3 class="font-semibold text-gray-800 mb-1 text-lg">
            Feature {{ i }}
          </h3>
          <p class="text-gray-500 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit unde
            voluptates ratione suscipit animi.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
