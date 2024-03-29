<script setup lang="ts">
import {defaultColors} from '@morpheme/theme/defaultTheme';
import {tabVariants} from '@morpheme/tabs';

useHead({
  title: 'Morpheme UI Playground',
});

const items = Array.from({length: 50}, (_, index) => ({
  text: `Item ${index}`,
  value: index,
}));

const isOpen = ref(false);

const buttonVariants = ['default', 'outlined', 'text', 'disabled', 'loading'];

const sheetOpen = ref(false);

const rating = ref(2);

const ckeditorContent = ref('');
const quillContent = ref('');

const timelineItems = [
  {
    date: 'June 2022',
    title: 'New feature release',
    description:
      "We've released an exciting new feature that will change the way you use our product.",
    link: '#',
    icon: 'mdi:rocket',
    button: 'View release notes',
    dot: {
      color: 'primary.100',
      textColor: 'primary.600',
    },
  },
  {
    date: 'May 2022',
    title: 'User interface redesign',
    description:
      "We've updated our user interface to improve usability and make it more intuitive.",
    link: '#',
    icon: 'mdi:palette',
    dot: {
      color: 'gray.100',
      textColor: 'gray.600',
    },
  },
  {
    date: 'April 2022',
    title: 'Server migration',
    description:
      "We're moving our servers to a new data center to improve performance and reliability.",
    link: '#',
    icon: 'mdi:server',
    dot: {
      color: 'warning.100',
      textColor: 'warning.600',
    },
  },
  {
    date: 'March 2022',
    title: 'New logo',
    description:
      "We've updated our logo to make it more recognizable and memorable.",
    link: '#',
    icon: 'mdi:brush',
    dot: {
      color: 'error.100',
      textColor: 'error.600',
    },
  },
];
</script>

<template>
  <div class="container mx-auto p-6 pb-10 space-y-5 mt-24">
    <h3 id="app-bar" class="text-xl font-semibold">AppBar</h3>
    <div class="space-y-2">
      <VAppBar v-for="color in defaultColors" :color="color" :key="color">
        VAppBar
      </VAppBar>
    </div>

    <hr class="dark:border-neutral-700" />
    <h3 id="alert" class="text-xl font-semibold">Alert</h3>
    <div class="space-y-2">
      <VAlert v-for="color in defaultColors" :color="color" :key="color">
        Please update your profile.
      </VAlert>
    </div>

    <hr class="dark:border-neutral-700" />
    <h3 id="avatar" class="text-xl font-semibold">Avatar</h3>
    <div class="space-y-2">
      <VAvatar
        v-for="color in defaultColors"
        :color="color"
        :key="color"
        name="John Doe"
      />
    </div>

    <hr class="dark:border-neutral-700" />
    <h3 id="badge" class="text-xl font-semibold">Badge</h3>
    <div class="space-x-2">
      <VBadge v-for="color in defaultColors" :color="color" :key="color">
        {{ color }}
      </VBadge>
    </div>

    <hr class="dark:border-neutral-700" />
    <h3 id="button" class="text-xl font-semibold">Button</h3>
    <div class="space-x-2" v-for="variant in buttonVariants" :key="variant">
      <v-btn
        v-for="color in defaultColors"
        :color="color"
        :key="color"
        v-tooltip="'Click Me'"
        v-bind:[variant]="true"
      >
        {{ color }}
      </v-btn>
    </div>

    <hr class="dark:border-neutral-700" />
    <h3 id="forms" class="text-xl font-semibold">Forms</h3>
    <div>
      <form class="space-y-3">
        <v-input placeholder="Placeholder" label="Name" />
        <v-input placeholder="Placeholder" label="Email" />
        <v-input placeholder="Placeholder" label="Password" />
        <v-input placeholder="Placeholder" label="Confirm Password" />
        <v-input placeholder="Placeholder" label="Phone" />
        <v-textarea placeholder="Placeholder" label="Address" />
        <v-checkbox
          placeholder="Placeholder"
          label="I agree to the terms and conditions"
        />
        <v-form-select
          placeholder="Placeholder"
          label="Choose"
          :items="[
            {text: 'Option 1', value: '1'},
            {text: 'Option 2', value: '2'},
            {text: 'Option 3', value: '3'},
          ]"
        />
        <v-radio label="Option 1" value="1" />
        <v-radio label="Option 2" value="2" />
        <v-radio-group
          placeholder="Placeholder"
          label="Choose"
          :items="[
            {text: 'Option 1', value: '1'},
            {text: 'Option 2', value: '2'},
            {text: 'Option 3', value: '3'},
          ]"
        />
        <VAutocomplete :items="items" label="Autocomplete" />
        <VSelect :items="items" label="Select" />
        <VMultiSelect :items="items" label="Multi Select" />
        <VBtnToolbar>
          <v-btn color="primary" v-tooltip="'Submit'">Submit</v-btn>
          <v-btn type="reset">Cancel</v-btn>
        </VBtnToolbar>
      </form>
    </div>

    <hr class="dark:border-neutral-700" />
    <h3 id="forms-disabled" class="text-xl font-semibold">Forms Disabled</h3>
    <div>
      <form class="space-y-3">
        <v-input disabled placeholder="Placeholder" label="Name" />
        <v-input disabled placeholder="Placeholder" label="Email" />
        <v-input disabled placeholder="Placeholder" label="Password" />
        <v-input disabled placeholder="Placeholder" label="Confirm Password" />
        <v-input disabled placeholder="Placeholder" label="Phone" />
        <v-textarea disabled placeholder="Placeholder" label="Address" />
        <v-checkbox
          disabled
          placeholder="Placeholder"
          label="I agree to the terms and conditions"
        />
        <v-form-select
          disabled
          placeholder="Placeholder"
          label="Choose"
          :items="[
            {text: 'Option 1', value: '1'},
            {text: 'Option 2', value: '2'},
            {text: 'Option 3', value: '3'},
          ]"
        />
        <v-radio disabled label="Option 1" value="1" name="gender" />
        <v-radio disabled label="Option 2" value="2" name="gender" />
        <v-radio-group
          disabled
          placeholder="Placeholder"
          label="Choose"
          :items="[
            {text: 'Option 1', value: '1'},
            {text: 'Option 2', value: '2'},
            {text: 'Option 3', value: '3'},
          ]"
        />
        <VAutocomplete :items="items" disabled label="Autocomplete" />
        <VSelect :items="items" disabled label="Select" />
        <VMultiSelect :items="items" disabled label="Multi Select" />
        <VBtnToolbar>
          <v-btn color="primary" v-tooltip="'Submit'">Submit</v-btn>
          <v-btn type="reset">Cancel</v-btn>
        </VBtnToolbar>
      </form>
    </div>

    <hr class="dark:border-neutral-700" />
    <h3 id="breadcrumbs" class="text-xl font-semibold">Breadcrumbs</h3>
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
    <h3 id="card" class="text-xl font-semibold">Card</h3>
    <div>
      <VCard>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
        recusandae dolorem consequuntur. Amet iure odio ullam, nulla, iusto rem
        molestias sapiente ut alias suscipit fugit recusandae aut atque iste
        dolorem.
      </VCard>
    </div>

    <hr class="dark:border-neutral-700" />
    <h3 id="dropdown" class="text-xl font-semibold">Dropdown</h3>
    <div>
      <VDropdown :items="items.slice(1, 6)" label="Dropdown" />
    </div>

    <hr class="dark:border-neutral-700" />
    <h3 id="menus" class="text-xl font-semibold">Menus</h3>
    <div>
      <VMenus :items="items.slice(1, 6)" label="Menus" />
    </div>

    <hr class="dark:border-neutral-700" />
    <h3 id="icon" class="text-xl font-semibold">Icon</h3>
    <div>
      <VIcon name="ri:home-line" />
      <VIcon name="ri:user-line" />
    </div>

    <hr class="dark:border-neutral-700" />
    <h3 id="list" class="text-xl font-semibold">List</h3>
    <div>
      <VList hover>
        <VListItemHeader>Header</VListItemHeader>
        <VListItem v-for="i in 5" prepend-icon="ri:donut-chart-line">
          Item {{ i }}
        </VListItem>
        <VListItemDivider />
        <VListItem v-for="i in 5">Item {{ i }}</VListItem>
      </VList>
    </div>

    <hr class="dark:border-neutral-700" />
    <h3 id="modal" class="text-xl font-semibold">Modal</h3>
    <div>
      <VBtn @click="isOpen = true">Open Modal</VBtn>
      <VModal v-model="isOpen" title="Title">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
        consequuntur error tempore hic, excepturi eum blanditiis quaerat ipsam
        illo, quisquam magni? Fuga consequuntur, consectetur alias aut dolore
        adipisci excepturi obcaecati?
      </VModal>
    </div>

    <hr class="dark:border-neutral-700" />
    <h3 id="tabs" class="text-xl font-semibold">Tabs</h3>
    <div>
      <VTabs
        :items="[
          {
            text: 'Tab 1',
            content: 'Tab 1 Content',
          },
          {
            text: 'Tab 2',
            content: 'Tab 2 Content',
          },
          {
            text: 'Tab 3',
            content: 'Tab 3 Content',
          },
        ]"
      />

      <VTabGroup
        v-for="variant in tabVariants"
        :key="variant"
        :variant="variant"
      >
        <VTabList>
          <VTabItem>Tab 1</VTabItem>
          <VTabItem>Tab 2</VTabItem>
          <VTabItem>Tab 3</VTabItem>
        </VTabList>
        <VTabPanels>
          <VTabPanel>Content 1</VTabPanel>
          <VTabPanel>Content 2</VTabPanel>
          <VTabPanel>Content 3</VTabPanel>
        </VTabPanels>
      </VTabGroup>
    </div>

    <hr class="dark:border-neutral-700" />
    <h3 id="table" class="text-xl font-semibold">Table</h3>
    <div>
      <VDataTable
        :headers="[
          {
            text: 'Name',
            value: 'name',
          },
          {
            text: 'Email',
            value: 'email',
          },
        ]"
        :items="[
          {
            name: 'John',
            email: 'john@mail.com',
          },
          {
            name: 'Jane',
            email: 'jane@mail.com',
          },
        ]"
      />
    </div>

    <!-- <hr class="dark:border-neutral-700" />
    <h3 class="text-xl font-semibold">NavDrawer</h3>
    <div>
      <VNavDrawer>
        <p class="p-4">Content</p>

        <VList hover>
          <VListItemHeader>Menu</VListItemHeader>
          <VListItem prepend-icon="ri:home-line">Home</VListItem>
          <VListItem prepend-icon="ri:user-line">Account</VListItem>
        </VList>
      </VNavDrawer>
    </div> -->

    <hr class="dark:border-neutral-700" />
    <h3 id="shimmer" class="text-xl font-semibold">Shimmer</h3>
    <div>
      <VShimmer width="100%" height="60px" />
    </div>

    <hr class="dark:border-neutral-700" />
    <h3 id="progress-bar" class="text-xl font-semibold">ProgressBar</h3>
    <div>
      <VProgressBar :model-value="70" class="mb-2" />
      <VProgressBar :model-value="60" color="primary" />
    </div>

    <hr class="dark:border-neutral-700" />
    <h3 id="pagination" class="text-xl font-semibold">Pagination</h3>
    <div>
      <VPagination :model-value="1" :items-per-page="10" :total-items="50" />
    </div>

    <hr class="dark:border-neutral-700" />
    <h3 id="bottom-sheet" class="text-xl font-semibold">BottomSheet</h3>
    <div>
      <VBtn @click="sheetOpen = !sheetOpen">Open Bottom Sheet</VBtn>
      <VBottomSheet v-model="sheetOpen" v-slot="{close}">
        <VBottomSheetHeader>Sheet Title</VBottomSheetHeader>
        <VBottomSheetBody> Hello :) </VBottomSheetBody>
        <VBottomSheetMenus
          :items="[
            {
              text: 'Menu 1',
              prependIcon: 'ri:home-line',
            },
            {
              text: 'Menu 2',
              prependIcon: 'ri:user-line',
            },
          ]"
        />
        <VBottomSheetFooter>
          <VBtn @click="close">Close</VBtn>
        </VBottomSheetFooter>
      </VBottomSheet>
    </div>

    <hr class="dark:border-neutral-700" />
    <h3 id="rating" class="text-xl font-semibold">Rating</h3>
    <div>
      <VRating v-model:rating="rating" />
    </div>

    <hr class="dark:border-neutral-700" />
    <h3 id="ckeditor" class="text-xl font-semibold">CKEditor</h3>
    <div>
      <ClientOnly>
        <VEditor v-model="ckeditorContent" />
      </ClientOnly>
    </div>

    <hr class="dark:border-neutral-700" />
    <h3 id="quill-editor" class="text-xl font-semibold">Quill Editor</h3>
    <div>
      <ClientOnly>
        <VQuillEditor v-model="quillContent" />
      </ClientOnly>
    </div>

    <hr class="dark:border-neutral-700" />
    <h3 id="progress-circular" class="text-xl font-semibold">
      Progress Circular
    </h3>
    <div>
      <VProgressCircular :model-value="50" />
      <VProgressCircular :model-value="50" indeterminate />
      <VProgressCircular :model-value="50" v-slot="{value}">
        {{ value }}%
      </VProgressCircular>
      <VProgressCircular color="rose.500" :model-value="50" v-slot="{value}">
        {{ value }}%
      </VProgressCircular>
      <VProgressCircular
        color="rose.500"
        :size="80"
        :width="8"
        :model-value="50"
        v-slot="{value}"
      >
        {{ value }}%
      </VProgressCircular>
    </div>

    <hr class="dark:border-neutral-700" />
    <h3 id="timeline" class="text-xl font-semibold">Timeline</h3>
    <div>
      <VTimeline>
        <VTimelineItem v-for="item in timelineItems" :key="item.title">
          <VTimelineItemDot v-bind="item.dot">
            <VIcon :name="item.icon" size="xs" />
          </VTimelineItemDot>
          <VTimelineItemContent>
            <VText font-weight="semibold">
              {{ item.title }}
            </VText>
            <VText variant="sm" color="gray.500" class="mt-1">
              Published on {{ item.date }}
            </VText>
            <VText color="gray.600" class="mt-1">
              {{ item.description }}
            </VText>
            <VBtn v-if="item.button" class="mt-4">
              {{ item.button }}
            </VBtn>
          </VTimelineItemContent>
        </VTimelineItem>
      </VTimeline>
    </div>

    <hr class="dark:border-neutral-700" />
    <h3 id="banner" class="text-xl font-semibold">Banner</h3>
    <div>
      <VBanner color="primary">
        <VBannerText> Welcome to the Morpheme UI Playground </VBannerText>
        <template #actions="{close}">
          <VBtn
            text
            flush
            prefix-icon="ic:round-close"
            class="!text-white"
            @click="close"
          />
        </template>
      </VBanner>
    </div>

    <hr class="dark:border-neutral-700" />
    <h3 id="tooltip" class="text-xl font-semibold">Tooltip</h3>
    <div class="grid grid-cols-1 lg:grid-cols-4">
      <div>
        <p class="font-semibold mb-2 text-sm">Default</p>
        <VBtn
          v-tooltip="{
            content: 'Hello :)',
          }"
        >
          Hover Me
        </VBtn>
      </div>
      <div>
        <p class="font-semibold mb-2 text-sm">Black theme</p>
        <VBtn
          v-tooltip="{
            content: 'Hello :)',
            themes: 'tooltip-black',
          }"
        >
          Hover Me
        </VBtn>
      </div>
      <div>
        <p class="font-semibold mb-2 text-sm">White theme</p>
        <VBtn
          v-tooltip="{
            content: 'Hello :)',
            themes: 'tooltip-white',
          }"
        >
          Hover Me
        </VBtn>
      </div>
    </div>
  </div>
</template>

<style>
body {
  @apply transition-colors duration-300;
}
.dark body {
  @apply bg-neutral-900 text-neutral-200;
}
</style>
