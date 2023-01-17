<script setup lang="ts">
import {defaultColors} from '@gits-id/theme/defaultTheme';

const items = Array.from({length: 50}, (_, index) => ({
  text: `Item ${index}`,
  value: index,
}));
</script>

<template>
  <div class="container mx-auto p-6 pb-20 space-y-5">
    <h1 class="text-2xl font-semibold">GITS UI Playground</h1>

    <hr />
    <h3 class="text-xl font-semibold">AppBar</h3>
    <div class="space-y-2">
      <VAppBar v-for="color in defaultColors" :color="color" :key="color">
        VAppBar
      </VAppBar>
    </div>

    <hr />
    <h3 class="text-xl font-semibold">Alert</h3>
    <div class="space-y-2">
      <VAlert v-for="color in defaultColors" :color="color" :key="color">
        Please update your profile.
      </VAlert>
    </div>

    <hr />
    <h3 class="text-xl font-semibold">Avatar</h3>
    <div class="space-y-2">
      <VAvatar
        v-for="color in defaultColors"
        :color="color"
        :key="color"
        name="John Doe"
      />
    </div>

    <hr />
    <h3 class="text-xl font-semibold">Badge</h3>
    <div class="space-x-2">
      <VBadge v-for="color in defaultColors" :color="color" :key="color">
        {{ color }}
      </VBadge>
    </div>

    <hr />
    <h3 class="text-xl font-semibold">Button</h3>
    <div class="space-x-2">
      <v-btn
        v-for="color in defaultColors"
        :color="color"
        :key="color"
        v-tooltip="'Click Me'"
      >
        {{ color }}
      </v-btn>
    </div>

    <hr />
    <h3 class="text-xl font-semibold">Forms</h3>
    <div>
      <form class="space-y-3">
        <v-input label="Name" />
        <v-input label="Email" />
        <v-input label="Password" />
        <v-input label="Confirm Password" />
        <v-input label="Phone" />
        <v-textarea label="Address" />
        <v-checkbox label="I agree to the terms and conditions" />
        <v-btn v-tooltip="'Submit'">Submit</v-btn>
      </form>
    </div>

    <hr />
    <h3 class="text-xl font-semibold">Select</h3>
    <div>
      <!-- <VSelect :items="items" /> -->
    </div>

    <hr />
    <h3 class="text-xl font-semibold">Multi Select</h3>
    <div>
      <VMultiSelect :items="items" />
    </div>

    <hr />
    <h3 class="text-xl font-semibold">Dropdown</h3>
    <div>
      <VDropdown
        :items="[
          {
            text: 'Profile',
            icon: 'mdi-account',
          },
          {
            text: 'Settings',
            icon: 'mdi-cog',
          },
          {
            text: 'Logout',
            icon: 'mdi-logout',
          },
        ]"
      />
    </div>

    <hr />
    <h3 class="text-xl font-semibold">Menus</h3>
    <div>
      <ClientOnly>
        <VMenus
          :items="[
            {
              text: 'Profile',
              to: '/',
            },
            {
              text: 'Settings',
              to: '/',
            },
            {
              text: 'Logout',
              to: '/',
            },
          ]"
        />
      </ClientOnly>
    </div>
  </div>
</template>
