<script setup lang="ts">
import Logo from '@gits-id/logo';
import Icon from '@gits-id/icon';
</script>

<template>
  <footer class="bg-gray-800">
    <div class="container mx-auto p-5 xl:px-0">
      <div class="flex gap-4 flex-col sm:flex-row">
        <div class="sm:w-4/12 space-y-4">
          <Logo img-class="h-10" white />
          <p class="text-gray-400">
            Making the world a better place through technologies
          </p>
          <div class="flex gap-4 space-between w-full">
            <a href="#" class="text-gray-400 hover:text-gray-200">
              <Icon name="ic:round-facebook" class="w-6 h-6" />
            </a>
            <a href="#" class="text-gray-400 hover:text-gray-200">
              <Icon name="ri:instagram-line" class="w-6 h-6" />
            </a>
            <a href="#" class="text-gray-400 hover:text-gray-200">
              <Icon name="ri:youtube-fill" class="w-6 h-6" />
            </a>
            <a href="#" class="text-gray-400 hover:text-gray-200">
              <Icon name="ri:twitter-fill" class="w-6 h-6" />
            </a>
          </div>
        </div>
        <div class="sm:w-8/12">
          <div class="grid grid-cols-1 sm:grid-cols-4 gap-4 w-full">
            <div>
              <h3 class="font-medium text-white">Solutions</h3>
              <ul class="space-y-3 mt-3">
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-200"
                    >Marketing</a
                  >
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-200"
                    >Analytics</a
                  >
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-200"
                    >Commerce</a
                  >
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-200"
                    >Insights</a
                  >
                </li>
              </ul>
            </div>
            <div>
              <h3 class="font-medium text-white">Support</h3>
              <ul class="space-y-3 mt-3">
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-200"
                    >Pricing</a
                  >
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-200"
                    >Documentation</a
                  >
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-200"
                    >Guides</a
                  >
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-200"
                    >API Status</a
                  >
                </li>
              </ul>
            </div>
            <div>
              <h3 class="font-medium text-white">Company</h3>
              <ul class="space-y-3 mt-3">
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-200"
                    >About</a
                  >
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-200">Blog</a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-200">Jobs</a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-200"
                    >Press</a
                  >
                </li>
              </ul>
            </div>
            <div>
              <h3 class="font-medium text-white">Legal</h3>
              <ul class="space-y-3 mt-3">
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-200"
                    >Claim</a
                  >
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-200"
                    >Privacy</a
                  >
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-gray-200"
                    >Terms</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="mt-10 mb-5 border-gray-500" />
      <p class="text-center text-gray-500">
        &copy; 2022-Present GITS Indonesia. All rights reserved.
      </p>
    </div>
  </footer>
</template>
