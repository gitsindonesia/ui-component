<script setup lang="ts">
import {defaultColors} from '@gits-id/theme/defaultTheme';

const items = Array.from({length: 50}, (_, index) => ({
  text: `Item ${index}`,
  value: index,
}));

const toggleDarkMode = () => {
  const html = document.querySelector('html');
  html?.classList?.toggle('dark');
};

const darkMode = ref(false);
const isOpen = ref(false);
</script>

<template>
  <div
    class="
      container
      mx-auto
      p-6
      space-y-5
      dark:bg-neutral-900
      dark:text-neutral-200
    "
  >
    <h1 class="text-2xl font-semibold">GITS UI Playground</h1>

    <hr class="dark:border-neutral-700" />
    <VSwitch
      v-model="darkMode"
      label="Dark Mode"
      @update:model-value="toggleDarkMode"
    />

    <hr class="dark:border-neutral-700" />
    <h3 class="text-xl font-semibold">AppBar</h3>
    <div class="space-y-2">
      <VAppBar v-for="color in defaultColors" :color="color" :key="color">
        VAppBar
      </VAppBar>
    </div>

    <hr class="dark:border-neutral-700" />
    <h3 class="text-xl font-semibold">Alert</h3>
    <div class="space-y-2">
      <VAlert v-for="color in defaultColors" :color="color" :key="color">
        Please update your profile.
      </VAlert>
    </div>

    <hr class="dark:border-neutral-700" />
    <h3 class="text-xl font-semibold">Avatar</h3>
    <div class="space-y-2">
      <VAvatar
        v-for="color in defaultColors"
        :color="color"
        :key="color"
        name="John Doe"
      />
    </div>

    <hr class="dark:border-neutral-700" />
    <h3 class="text-xl font-semibold">Badge</h3>
    <div class="space-x-2">
      <VBadge v-for="color in defaultColors" :color="color" :key="color">
        {{ color }}
      </VBadge>
    </div>

    <hr class="dark:border-neutral-700" />
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

    <hr class="dark:border-neutral-700" />
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
        <v-form-select label="Choose" />
        <v-btn color="primary" v-tooltip="'Submit'">Submit</v-btn>
        <v-btn type="reset">Cancel</v-btn>
      </form>
    </div>

    <hr class="dark:border-neutral-700" />
    <h3 class="text-xl font-semibold">Autocomplete</h3>
    <div>
      <VAutocomplete :items="items" />
    </div>

    <hr class="dark:border-neutral-700" />
    <h3 class="text-xl font-semibold">Breadcrumbs</h3>
    <div>
      <VBreadcrumbs
        :items="[
          {
            title: 'Home',
            to: '/',
          },
          {
            title: 'Library',
            to: '/library',
          },
          {
            title: 'Data',
            to: '/data',
            disabled: true,
          },
        ]"
      />
    </div>

    <hr class="dark:border-neutral-700" />
    <h3 class="text-xl font-semibold">Select</h3>
    <div>
      <VSelect :items="items" />
    </div>

    <hr class="dark:border-neutral-700" />
    <h3 class="text-xl font-semibold">Multi Select</h3>
    <div>
      <VMultiSelect :items="items" />
    </div>

    <hr class="dark:border-neutral-700" />
    <h3 class="text-xl font-semibold">Card</h3>
    <div>
      <VCard>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
        recusandae dolorem consequuntur. Amet iure odio ullam, nulla, iusto rem
        molestias sapiente ut alias suscipit fugit recusandae aut atque iste
        dolorem.
      </VCard>
    </div>

    <hr class="dark:border-neutral-700" />
    <h3 class="text-xl font-semibold">Dropdown</h3>
    <div>
      <VDropdown :items="items.slice(1, 6)" label="Dropdown" />
    </div>

    <hr class="dark:border-neutral-700" />
    <h3 class="text-xl font-semibold">List</h3>
    <div>
      <VList>
        <VListItemHeader>Header</VListItemHeader>
        <VListItem v-for="i in 5" prefix-icon="ri:donut-chart-line">
          Item {{ i }}
        </VListItem>
        <VListItemDivider />
        <VListItem v-for="i in 5">Item {{ i }}</VListItem>
      </VList>
    </div>

    <hr class="dark:border-neutral-700" />
    <h3 class="text-xl font-semibold">Modal</h3>
    <div>
      <VBtn @click="isOpen = true">Open Modal</VBtn>
      <VModal v-model="isOpen" title="Title">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
        consequuntur error tempore hic, excepturi eum blanditiis quaerat ipsam
        illo, quisquam magni? Fuga consequuntur, consectetur alias aut dolore
        adipisci excepturi obcaecati?
      </VModal>
    </div>
  </div>
</template>
