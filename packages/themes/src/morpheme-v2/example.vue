<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Header -->
    <header class="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div class="morpheme-container">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center space-x-4">
            <h1 class="text-xl font-bold text-gray-900 dark:text-white">Morpheme V2 Theme</h1>
            <span class="badge badge-primary">v2.0.0</span>
          </div>
          <div class="flex items-center space-x-4">
            <button 
              @click="toggleDarkMode"
              class="btn btn-outlined btn-sm"
            >
              {{ isDark ? 'Light' : 'Dark' }} Mode
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="morpheme-section">
      <div class="morpheme-container">
        <!-- Hero Section -->
        <div class="text-center mb-12">
          <h1 class="morpheme-heading text-gray-900 dark:text-white mb-4">
            Morpheme V2 Theme
          </h1>
          <p class="morpheme-body max-w-2xl mx-auto">
            A modern, utility-first theme built with Tailwind CSS that provides a complete design system for Vue.js applications.
          </p>
        </div>

        <!-- Buttons Section -->
        <section class="mb-12">
          <h2 class="morpheme-subheading text-gray-900 dark:text-white mb-6">Buttons</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Sizes</h3>
              <div class="space-y-2">
                <button class="btn btn-primary btn-sm">Small</button>
                <button class="btn btn-primary btn-md">Medium</button>
                <button class="btn btn-primary btn-lg">Large</button>
                <button class="btn btn-primary btn-xl">Extra Large</button>
              </div>
            </div>
            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Variants</h3>
              <div class="space-y-2">
                <button class="btn btn-primary btn-md">Primary</button>
                <button class="btn btn-secondary btn-md">Secondary</button>
                <button class="btn btn-outlined btn-md">Outlined</button>
                <button class="btn btn-text btn-md">Text</button>
              </div>
            </div>
            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Colors</h3>
              <div class="space-y-2">
                <button class="btn btn-success btn-md">Success</button>
                <button class="btn btn-warning btn-md">Warning</button>
                <button class="btn btn-error btn-md">Error</button>
                <button class="btn btn-default btn-md">Default</button>
              </div>
            </div>
          </div>
        </section>

        <!-- Alerts Section -->
        <section class="mb-12">
          <h2 class="morpheme-subheading text-gray-900 dark:text-white mb-6">Alerts</h2>
          <div class="space-y-4">
            <div class="alert alert-success">
              <div class="flex">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-success-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium">Success! Your changes have been saved.</p>
                </div>
              </div>
            </div>
            <div class="alert alert-warning">
              <div class="flex">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-warning-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium">Warning! Please check your input.</p>
                </div>
              </div>
            </div>
            <div class="alert alert-error">
              <div class="flex">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-error-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium">Error! Something went wrong.</p>
                </div>
              </div>
            </div>
            <div class="alert alert-info">
              <div class="flex">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-info-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium">Info! Here's some useful information.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Cards Section -->
        <section class="mb-12">
          <h2 class="morpheme-subheading text-gray-900 dark:text-white mb-6">Cards</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="card">
              <div class="card-header">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Basic Card</h3>
              </div>
              <div class="card-body">
                <p class="text-gray-600 dark:text-gray-300">This is a basic card with header, body, and footer sections.</p>
              </div>
              <div class="card-footer">
                <button class="btn btn-primary btn-sm">Action</button>
              </div>
            </div>
            <div class="card">
              <div class="card-header">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Card with Badge</h3>
                <span class="badge badge-success">New</span>
              </div>
              <div class="card-body">
                <p class="text-gray-600 dark:text-gray-300">This card includes a badge in the header.</p>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Simple Card</h3>
                <p class="text-gray-600 dark:text-gray-300">A simple card without header or footer.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Forms Section -->
        <section class="mb-12">
          <h2 class="morpheme-subheading text-gray-900 dark:text-white mb-6">Forms</h2>
          <div class="max-w-md">
            <form class="space-y-6">
              <div>
                <label class="form-label">Email Address</label>
                <input 
                  type="email" 
                  class="form-input" 
                  placeholder="Enter your email"
                  v-model="form.email"
                />
                <p v-if="formErrors.email" class="form-error">{{ formErrors.email }}</p>
              </div>
              <div>
                <label class="form-label">Password</label>
                <input 
                  type="password" 
                  class="form-input" 
                  placeholder="Enter your password"
                  v-model="form.password"
                />
                <p v-if="formErrors.password" class="form-error">{{ formErrors.password }}</p>
              </div>
              <div>
                <label class="form-label">Message</label>
                <textarea 
                  class="form-input" 
                  rows="4" 
                  placeholder="Enter your message"
                  v-model="form.message"
                ></textarea>
              </div>
              <div class="flex items-center">
                <input 
                  type="checkbox" 
                  id="terms"
                  class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  v-model="form.terms"
                />
                <label for="terms" class="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                  I agree to the terms and conditions
                </label>
              </div>
              <div class="flex space-x-3">
                <button type="submit" class="btn btn-primary btn-md">Submit</button>
                <button type="button" class="btn btn-secondary btn-md">Cancel</button>
              </div>
            </form>
          </div>
        </section>

        <!-- Badges Section -->
        <section class="mb-12">
          <h2 class="morpheme-subheading text-gray-900 dark:text-white mb-6">Badges</h2>
          <div class="flex flex-wrap gap-4">
            <span class="badge badge-primary">Primary</span>
            <span class="badge badge-secondary">Secondary</span>
            <span class="badge badge-success">Success</span>
            <span class="badge badge-warning">Warning</span>
            <span class="badge badge-error">Error</span>
            <span class="badge badge-info">Info</span>
          </div>
        </section>

        <!-- Avatars Section -->
        <section class="mb-12">
          <h2 class="morpheme-subheading text-gray-900 dark:text-white mb-6">Avatars</h2>
          <div class="flex items-center space-x-4">
            <div class="avatar avatar-sm">A</div>
            <div class="avatar avatar-md">B</div>
            <div class="avatar avatar-lg">C</div>
            <div class="avatar avatar-xl">D</div>
          </div>
        </section>

        <!-- Animations Section -->
        <section class="mb-12">
          <h2 class="morpheme-subheading text-gray-900 dark:text-white mb-6">Animations</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <div class="animate-fade-in">
                <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Fade In</h3>
                <p class="text-sm text-gray-600 dark:text-gray-300">Smooth fade in animation</p>
              </div>
            </div>
            <div class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <div class="animate-slide-in">
                <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Slide In</h3>
                <p class="text-sm text-gray-600 dark:text-gray-300">Slide in from top</p>
              </div>
            </div>
            <div class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <div class="animate-bounce-in">
                <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Bounce In</h3>
                <p class="text-sm text-gray-600 dark:text-gray-300">Bouncy entrance</p>
              </div>
            </div>
            <div class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <div class="shimmer">
                <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Shimmer</h3>
                <p class="text-sm text-gray-600 dark:text-gray-300">Loading effect</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const isDark = ref(false)

const form = reactive({
  email: '',
  password: '',
  message: '',
  terms: false
})

const formErrors = reactive({
  email: '',
  password: ''
})

const toggleDarkMode = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}
</script>

<style scoped>
/* Custom styles if needed */
</style>
