<script setup lang="ts">
import Icon from '@gits-id/icon';
</script>

<template>
  <footer class="dark:bg-gray-800 dark:text-gray-200">
    <div
      class="
        container
        mx-auto
        grid grid-cols-1
        sm:grid-cols-2
        items-center
        p-5
        xl:px-0
      "
    >
      <p class="text-left text-gray-400 dark:text-gray-400">
        &copy; 2022 GITS Indonesia. All rights reserved.
      </p>
      <div class="flex gap-4 space-between justify-end">
        <a
          href="#"
          class="
            text-gray-500
            hover:text-gray-700
            dark:text-gray-400
            dark:hover:text-gray-200
          "
        >
          <Icon name="ic:round-facebook" class="w-6 h-6" />
        </a>
        <a
          href="#"
          class="
            text-gray-500
            hover:text-gray-700
            dark:text-gray-400
            dark:hover:text-gray-200
          "
        >
          <Icon name="ri:instagram-line" class="w-6 h-6" />
        </a>
        <a
          href="#"
          class="
            text-gray-500
            hover:text-gray-700
            dark:text-gray-400
            dark:hover:text-gray-200
          "
        >
          <Icon name="ri:youtube-fill" class="w-6 h-6" />
        </a>
        <a
          href="#"
          class="
            text-gray-500
            hover:text-gray-700
            dark:text-gray-400
            dark:hover:text-gray-200
          "
        >
          <Icon name="ri:twitter-fill" class="w-6 h-6" />
        </a>
      </div>
    </div>
  </footer>
</template>
