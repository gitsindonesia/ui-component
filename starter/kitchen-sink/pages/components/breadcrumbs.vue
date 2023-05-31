<script setup lang="ts">
import {VBreadcrumbsDivider} from '@morpheme/breadcrumbs';
import VBreadcrumbItem from '@morpheme/breadcrumbs/src/VBreadcrumbsItem.vue';

const items = [
  {
    title: 'Home',
    to: '/',
  },
  {
    title: 'Account',
    to: '/account',
  },
  {
    title: 'Profile',
    to: '/account/profile',
  },
  {
    title: 'Settings',
    to: '/account/profile/settings',
    disabled: true,
  },
];
</script>

<template>
  <PageHeader title="Breadcrumbs" />

  <div class="space-y-4">
    <VCard title="Default">
      <div>
        <VBreadcrumbs :items="items" />
      </div>
    </VCard>

    <VCard title="Custom Divider">
      <div>
        <VBreadcrumbs :items="items" divider="-" />
      </div>
    </VCard>

    <VCard title="Divider Slot">
      <div>
        <VBreadcrumbs :items="items">
          <template #divider>
            <VIcon
              name="ri:arrow-right-s-line"
              size="sm"
              class="breadcrumbs-divider-icon"
            />
          </template>
        </VBreadcrumbs>
      </div>
    </VCard>

    <VCard title="Declarative">
      <div>
        <VBreadcrumbs>
          <VBreadcrumbItem to="/"> Home </VBreadcrumbItem>
          <VBreadcrumbsDivider />
          <VBreadcrumbsItem to="/account"> Account </VBreadcrumbsItem>
          <VBreadcrumbsDivider />
          <VBreadcrumbsItem to="/account/profile" disabled>
            Profile
          </VBreadcrumbsItem>
        </VBreadcrumbs>
      </div>
    </VCard>
  </div>
</template>
