<script setup lang="ts">
import {AvatarGroup} from '@morpheme/avatar';
import {Checkbox} from '@morpheme/forms';
import {Select as SelectMenu} from '@morpheme/select';
import {ref} from 'vue';

const switchValue = ref(false);
const totalItems = ref(100);
const itemsPerPage = ref(10);

const headers = ref([
  {
    text: 'ID',
    value: 'id',
  },
  {
    text: 'Name',
    value: 'name',
  },
  {
    text: 'Title',
    value: 'title',
  },
  {
    text: 'Email',
    value: 'email',
  },
  {
    text: 'Role',
    value: 'role',
  },
]);

const gravitano = 'https://avatars.githubusercontent.com/u/5087538?v=4';
const avatar1 =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80';
const avatar2 =
  'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80';

const items = ref([
  {
    id: 1,
    name: 'Warsono',
    title: 'Frontend Developer',
    email: 'warsono@gits.id',
    role: 'Admin',
    avatar: gravitano,
  },
  {
    id: 2,
    name: 'Alex Doe',
    title: 'UI/UX Designer',
    email: 'alex@example.com',
    role: 'User',
    avatar: avatar1,
  },
  {
    id: 3,
    name: 'John Doe',
    title: 'Backend Developer',
    email: 'john@example.com',
    role: 'Admin',
    avatar: avatar2,
  },
  {
    id: 4,
    name: 'Jane Doe',
    title: 'Business Analyst',
    email: 'jane@example.com',
    role: 'User',
  },
  {
    id: 5,
    name: 'Stephanie Doe',
    title: 'Product Owner',
    email: 'steph@example.com',
    role: 'Admin',
  },
]);

const selectValue = ref();
</script>

<template>
  <div class="showcase">
    <div class="my-20 text-center">
      <h2 class="font-bold text-4xl text-center section-title mb-4">
        Modern UI Library
      </h2>
      <p class="text-lg text-gray-600 dark:text-neutral-500">
        Build modern application with Morpheme Design System
      </p>
    </div>
    <div class="flex flex-col lg:flex-row gap-6 lg:items-center">
      <div
        class="flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between w-full lg:w-auto"
      >
        <VDropdown size="sm">
          <VDropdownItem>
            <VAvatar :src="gravitano" alt="Gravitano" />
            <span>Profile</span>
          </VDropdownItem>
          <VDropdownItem divider />
          <VDropdownItem icon="ph:pencil"> Edit </VDropdownItem>
          <VDropdownItem icon="ph:copy"> Duplicate </VDropdownItem>
          <VDropdownItem divider />
          <VDropdownItem icon="ph:archive"> Archive </VDropdownItem>
          <VDropdownItem icon="ph:arrow-right"> Move </VDropdownItem>
          <VDropdownItem divider />
          <VDropdownItem icon="ph:trash"> Delete </VDropdownItem>
        </VDropdown>

        <div class="shrink-0">
          <AvatarGroup spacing="xs">
            <VAvatar :src="avatar1" size="xl" />
            <VAvatar :src="avatar2" size="xl" />
            <VAvatar color="primary" size="xl">W</VAvatar>
            <VAvatar color="secondary" size="xl">AP</VAvatar>
            <VAvatar
              size="xl"
              v-tooltip="{
                content: 'View 5 More',
                placement: 'top',
                theme: 'tooltip-black',
              }"
              >+5</VAvatar
            >
          </AvatarGroup>
        </div>

        <VBtn color="primary" prefix-icon="ri:add-line">Button</VBtn>
      </div>

      <div class="flex flex-col lg:flex-row gap-6 lg:items-center flex-1">
        <div>
          <VBadge color="primary">Badge</VBadge>
        </div>
        <div class="flex items-center gap-4">
          <VSwitch color="primary" v-model="switchValue" />
          <Checkbox label="Notifications" />
        </div>
        <div>
          <VSpinner color="primary" />
        </div>
        <!-- <div class="w-full lg:w-[200px]">
          <SelectMenu
            :items="items"
            v-model="selectValue"
            item-text="name"
            item-value="id"
          />
        </div> -->
        <div class="flex flex-col lg:flex-row flex-1 lg:justify-end">
          <SelectMenu
            :items="items"
            v-model="selectValue"
            item-text="name"
            item-value="id"
            searchable
          />
        </div>
      </div>
    </div>

    <div
      class="flex flex-col lg:flex-row gap-6 lg:items-center justify-between mt-4"
    >
      <div class="overflow-x-auto">
        <VPagination :total-items="totalItems" :items-per-page="itemsPerPage" />
      </div>
      <VInput
        wrapper-class="py-5 w-full lg:w-6/12"
        prepend-icon="ri:search-line"
        placeholder="Search..."
      />
    </div>

    <div class="flex flex-col lg:flex-row gap-6 lg:items-start mt-4">
      <div class="w-full lg:w-4/12">
        <VList hover class="border dark:border-neutral-500 rounded-lg">
          <VListItem v-for="item in items" :key="item.id">
            <template #prepend>
              <VAvatar :src="item.avatar" :name="item.name" />
            </template>
            <VListItemTitle>{{ item.name }}</VListItemTitle>
            <VListItemContent>{{ item.title }}</VListItemContent>
          </VListItem>
        </VList>

        <VCard class="mt-4 border dark:border-neutral-500">
          <div class="flex gap-4 items-center">
            <VShimmer rounded width="60px" height="60px" />
            <div class="flex flex-col gap-2 flex-1">
              <VShimmer
                style="border-radius: 1rem"
                width="100%"
                height="20px"
              />
              <VShimmer style="border-radius: 1rem" width="80%" height="20px" />
            </div>
          </div>
        </VCard>
      </div>
      <div class="w-full lg:w-10/12">
        <VDataTable striped hover :items="items" :headers="headers" />
      </div>
    </div>

    <div class="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="space-y-6">
        <VAlert icon="ri:information-line" color="warning" dismissible>
          Change a few things up and try submitting again.
        </VAlert>
        <VProgressBar color="primary" :model-value="70" />
        <VProgressBar color="secondary" :model-value="70" indeterminate />
      </div>

      <div>
        <VTabGroup variant="segmented-control">
          <VTabList>
            <VTabItem>Account</VTabItem>
            <VTabItem>Password</VTabItem>
            <VTabItem disabled>Settings</VTabItem>
          </VTabList>
          <VTabPanels>
            <VTabPanel>
              <VText variant="lg" font-weight="semibold">Account</VText>
              <p>
                Make changes to your account here. Click save when you're done.
              </p>
            </VTabPanel>
            <VTabPanel>
              <VText variant="lg" font-weight="semibold">Password</VText>
              <p>
                Change your password here. After saving, you'll be logged out.
              </p>
            </VTabPanel>
            <VTabPanel>Tab 3 content</VTabPanel>
          </VTabPanels>
        </VTabGroup>
      </div>
    </div>
  </div>
</template>

<style scoped>
.showcase {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.showcase h3 {
  margin-bottom: 0;
}

.section-header {
}
</style>
