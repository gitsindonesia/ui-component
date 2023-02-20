<script setup lang="ts">
import Icon from '@gits-id/icon';
</script>

<template>
  <footer class="dark:bg-gray-800 dark:text-gray-200">
    <div class="container mx-auto p-5 xl:px-0">
      <div class="flex gap-4 flex-col sm:flex-row">
        <div class="sm:w-full">
          <div class="grid grid-cols-1 sm:grid-cols-6 gap-4 w-full">
            <div>
              <h3 class="font-medium dark:text-white">Solutions</h3>
              <ul class="space-y-3 mt-3">
                <li>
                  <a
                    href="#"
                    class="
                      text-gray-500
                      hover:text-gray-700
                      dark:text-gray-400
                      dark:hover:text-gray-200
                    "
                    >Marketing</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="
                      text-gray-500
                      hover:text-gray-700
                      dark:text-gray-400
                      dark:hover:text-gray-200
                    "
                    >Analytics</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="
                      text-gray-500
                      hover:text-gray-700
                      dark:text-gray-400
                      dark:hover:text-gray-200
                    "
                    >Commerce</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="
                      text-gray-500
                      hover:text-gray-700
                      dark:text-gray-400
                      dark:hover:text-gray-200
                    "
                    >Insights</a
                  >
                </li>
              </ul>
            </div>
            <div>
              <h3 class="font-medium dark:text-white">Support</h3>
              <ul class="space-y-3 mt-3">
                <li>
                  <a
                    href="#"
                    class="
                      text-gray-500
                      hover:text-gray-700
                      dark:text-gray-400
                      dark:hover:text-gray-200
                    "
                    >Pricing</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="
                      text-gray-500
                      hover:text-gray-700
                      dark:text-gray-400
                      dark:hover:text-gray-200
                    "
                    >Documentation</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="
                      text-gray-500
                      hover:text-gray-700
                      dark:text-gray-400
                      dark:hover:text-gray-200
                    "
                    >Guides</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="
                      text-gray-500
                      hover:text-gray-700
                      dark:text-gray-400
                      dark:hover:text-gray-200
                    "
                    >API Status</a
                  >
                </li>
              </ul>
            </div>
            <div>
              <h3 class="font-medium dark:text-white">Company</h3>
              <ul class="space-y-3 mt-3">
                <li>
                  <a
                    href="#"
                    class="
                      text-gray-500
                      hover:text-gray-700
                      dark:text-gray-400
                      dark:hover:text-gray-200
                    "
                    >About</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="
                      text-gray-500
                      hover:text-gray-700
                      dark:text-gray-400
                      dark:hover:text-gray-200
                    "
                    >Blog</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="
                      text-gray-500
                      hover:text-gray-700
                      dark:text-gray-400
                      dark:hover:text-gray-200
                    "
                    >Jobs</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="
                      text-gray-500
                      hover:text-gray-700
                      dark:text-gray-400
                      dark:hover:text-gray-200
                    "
                    >Press</a
                  >
                </li>
              </ul>
            </div>
            <div>
              <h3 class="font-medium dark:text-white">Legal</h3>
              <ul class="space-y-3 mt-3">
                <li>
                  <a
                    href="#"
                    class="
                      text-gray-500
                      hover:text-gray-700
                      dark:text-gray-400
                      dark:hover:text-gray-200
                    "
                    >Claim</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="
                      text-gray-500
                      hover:text-gray-700
                      dark:text-gray-400
                      dark:hover:text-gray-200
                    "
                    >Privacy</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="
                      text-gray-500
                      hover:text-gray-700
                      dark:text-gray-400
                      dark:hover:text-gray-200
                    "
                    >Terms</a
                  >
                </li>
              </ul>
            </div>
            <div class="col-span-2">
              <div class="space-y-2">
                <h3 class="font-medium">Subscribe to our newletter</h3>
                <p class="text-gray-500 dark:text-gray-400">
                  The latest news, articles, and resources, sent to your inbox
                  weekly.
                </p>
              </div>
              <form class="flex flex-col sm:flex-row gap-3 mt-4">
                <v-input placeholder="Enter your email" />
                <Button color="primary">Subscribe</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <hr class="mt-5 mb-5 dark:border-gray-700" />
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <p class="text-center sm:text-left text-gray-500 dark:text-gray-400">
          &copy; 2022-Present GITS Indonesia. All rights reserved.
        </p>
        <div
          class="flex gap-4 space-between justify-center sm:justify-end w-full"
        >
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
    </div>
  </footer>
</template>
