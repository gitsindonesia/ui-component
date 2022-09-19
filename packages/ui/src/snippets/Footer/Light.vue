<script setup lang="ts">
import Logo from '@gits-id/logo';
import Icon from '@gits-id/icon';
</script>

<template>
  <footer class="bg-white">
    <div class="container mx-auto p-5 sm:px-0">
      <div class="flex gap-4 flex-col sm:flex-row">
        <div class="sm:w-4/12 space-y-4">
          <Logo img-class="h-10" />
          <p class="text-gray-500">
            Making the world a better place through technologies
          </p>
          <div class="flex gap-4 space-between w-full">
            <a href="#" class="text-gray-500 hover:text-gray-700">
              <Icon name="ic:round-facebook" class="w-6 h-6" />
            </a>
            <a href="#" class="text-gray-500 hover:text-gray-700">
              <Icon name="ri:instagram-line" class="w-6 h-6" />
            </a>
            <a href="#" class="text-gray-500 hover:text-gray-700">
              <Icon name="ri:youtube-fill" class="w-6 h-6" />
            </a>
            <a href="#" class="text-gray-500 hover:text-gray-700">
              <Icon name="ri:twitter-fill" class="w-6 h-6" />
            </a>
          </div>
        </div>
        <div class="sm:w-8/12">
          <div class="grid grid-cols-1 sm:grid-cols-4 gap-4 w-full">
            <div>
              <h3 class="font-medium">Solutions</h3>
              <ul class="space-y-3 mt-3">
                <li>
                  <a href="#" class="text-gray-500 hover:text-gray-700"
                    >Marketing</a
                  >
                </li>
                <li>
                  <a href="#" class="text-gray-500 hover:text-gray-700"
                    >Analytics</a
                  >
                </li>
                <li>
                  <a href="#" class="text-gray-500 hover:text-gray-700"
                    >Commerce</a
                  >
                </li>
                <li>
                  <a href="#" class="text-gray-500 hover:text-gray-700"
                    >Insights</a
                  >
                </li>
              </ul>
            </div>
            <div>
              <h3 class="font-medium">Support</h3>
              <ul class="space-y-3 mt-3">
                <li>
                  <a href="#" class="text-gray-500 hover:text-gray-700"
                    >Pricing</a
                  >
                </li>
                <li>
                  <a href="#" class="text-gray-500 hover:text-gray-700"
                    >Documentation</a
                  >
                </li>
                <li>
                  <a href="#" class="text-gray-500 hover:text-gray-700"
                    >Guides</a
                  >
                </li>
                <li>
                  <a href="#" class="text-gray-500 hover:text-gray-700"
                    >API Status</a
                  >
                </li>
              </ul>
            </div>
            <div>
              <h3 class="font-medium">Company</h3>
              <ul class="space-y-3 mt-3">
                <li>
                  <a href="#" class="text-gray-500 hover:text-gray-700"
                    >About</a
                  >
                </li>
                <li>
                  <a href="#" class="text-gray-500 hover:text-gray-700">Blog</a>
                </li>
                <li>
                  <a href="#" class="text-gray-500 hover:text-gray-700">Jobs</a>
                </li>
                <li>
                  <a href="#" class="text-gray-500 hover:text-gray-700"
                    >Press</a
                  >
                </li>
              </ul>
            </div>
            <div>
              <h3 class="font-medium">Legal</h3>
              <ul class="space-y-3 mt-3">
                <li>
                  <a href="#" class="text-gray-500 hover:text-gray-700"
                    >Claim</a
                  >
                </li>
                <li>
                  <a href="#" class="text-gray-500 hover:text-gray-700"
                    >Privacy</a
                  >
                </li>
                <li>
                  <a href="#" class="text-gray-500 hover:text-gray-700"
                    >Terms</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="mt-10 mb-5" />
      <p class="text-center text-gray-500">
        &copy; 2022-Present GITS Indonesia. All rights reserved.
      </p>
    </div>
  </footer>
</template>
