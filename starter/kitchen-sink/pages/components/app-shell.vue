<script setup lang="ts"></script>

<template>
  <PageHeader title="AppShell" />

  <div class="space-y-4">
    <VCard title="Sidebar">
      <VAppShell padded-content>
        <template #header>
          <VAppBar bordered>
            <VLogo />
          </VAppBar>
        </template>
        <template #aside>
          <VNavDrawer class="!h-full" bordered>
            <VList hover>
              <VListItemHeader>Menu</VListItemHeader>
              <VListItem prepend-icon="ic:round-home">Home</VListItem>
              <VListItem prepend-icon="ic:round-person">
                User Management
              </VListItem>
              <VListItem prepend-icon="ic:round-settings">Settings</VListItem>
            </VList>
          </VNavDrawer>
        </template>
        <div class="border-2 rounded-lg border-dashed p-4">Content</div>
      </VAppShell>
    </VCard>

    <VCard title="Sidebar with header">
      <VAppShell padded-container>
        <template #aside>
          <VNavDrawer class="!h-full" bordered>
            <VList hover>
              <VListItemHeader>Menu</VListItemHeader>
              <VListItem prepend-icon="ic:round-home">Home</VListItem>
              <VListItem prepend-icon="ic:round-person">
                User Management
              </VListItem>
              <VListItem prepend-icon="ic:round-settings">Settings</VListItem>
            </VList>
          </VNavDrawer>
        </template>
        <template #navigation>
          <VAppBar bordered>
            <VLogo />
          </VAppBar>
        </template>
        <div class="border-2 rounded-lg border-dashed p-4 mt-4">Content</div>
      </VAppShell>
    </VCard>

    <VCard title="Fluid Content">
      <VAppShell padded-content fluid>
        <template #header>
          <VAppBar bordered>
            <VLogo />
          </VAppBar>
        </template>
        <template #aside>
          <VNavDrawer class="!h-full" bordered>
            <VList hover>
              <VListItemHeader>Menu</VListItemHeader>
              <VListItem prepend-icon="ic:round-home">Home</VListItem>
              <VListItem prepend-icon="ic:round-person">
                User Management
              </VListItem>
              <VListItem prepend-icon="ic:round-settings">Settings</VListItem>
            </VList>
          </VNavDrawer>
        </template>
        <div class="border-2 rounded-lg border-dashed p-4">Content</div>
      </VAppShell>
    </VCard>

    <VCard title="Stacked Layout">
      <VAppShell padded-content fluid>
        <template #header>
          <VAppBar bordered>
            <VLogo />
          </VAppBar>
        </template>
        <div class="border-2 rounded-lg border-dashed p-4">Content</div>
      </VAppShell>
    </VCard>

    <VCard title="Three Column">
      <VAppShell fluid>
        <!-- aside -->
        <template #aside>
          <VNavDrawer bordered mini class="!h-full">
            <div class="flex flex-col gap-2 justify-center mt-2">
              <VTooltip placement="right">
                <template #activator>
                  <VAvatar size="xl" name="John Doe"></VAvatar>
                </template>
                <span>John Doe</span>
              </VTooltip>
              <VTooltip placement="right">
                <template #activator>
                  <VAvatar size="xl" name="Axel Krip"></VAvatar>
                </template>
                <span>Axel Krip</span>
              </VTooltip>
              <VTooltip placement="right">
                <template #activator>
                  <VAvatar size="xl" name="Warsono"></VAvatar>
                </template>
                <span>Warsono</span>
              </VTooltip>
            </div>
          </VNavDrawer>
        </template>

        <!-- footer -->
        <template #innerFooter>
          <VText variant="sm" color="gray.500" class="m-4">
            Copyright &copy; 2023 &middot; All rights reserved.
          </VText>
        </template>

        <div class="flex flex-1">
          <div class="w-72 border-r h-[100dvh] overflow-x-auto">
            <VList hover small>
              <VListItem
                prepend-icon-class="!text-gray-600"
                prepend-icon-size="sm"
                prepend-icon="ph:chat-centered-text-thin"
                >Threads</VListItem
              >
              <VListItem
                prepend-icon-class="!text-gray-600"
                prepend-icon-size="sm"
                prepend-icon="ph:chats-circle-thin"
                >Direct Messages</VListItem
              >
              <VListItem
                prepend-icon-class="!text-gray-600"
                prepend-icon-size="sm"
                prepend-icon="ri:at-line"
                >Mentions and Reactions</VListItem
              >
              <VListItem
                prepend-icon-class="!text-gray-600"
                prepend-icon-size="sm"
                prepend-icon="ic:round-send"
                >Drafts and sent</VListItem
              >
              <VListItem
                prepend-icon-class="!text-gray-600"
                prepend-icon-size="sm"
                prepend-icon="ic:round-bookmark"
                >Saved items</VListItem
              >
              <VListItem
                prepend-icon-class="!text-gray-600"
                prepend-icon-size="sm"
                prepend-icon="ri:building-4-line"
                >Connect</VListItem
              >
              <VListItem
                prepend-icon-class="!text-gray-600"
                prepend-icon-size="sm"
                prepend-icon="ic:round-more-vert"
                >More</VListItem
              >
            </VList>
            <VList hover small class="mt-4">
              <VText
                font-weight="semibold"
                color="gray.500"
                class="px-2"
                variant="sm"
                >Channels</VText
              >
              <VListItem
                v-for="i in 20"
                :key="i"
                prepend-icon-class="!text-gray-600"
                prepend-icon-size="sm"
                prepend-icon="ph:hash"
              >
                Channel {{ i }}
              </VListItem>
            </VList>
            <VList hover small class="mt-4">
              <VText
                font-weight="semibold"
                color="gray.500"
                class="px-2"
                variant="sm"
                >Direct Messsages</VText
              >
              <VListItem
                v-for="i in 5"
                :key="i"
                prepend-icon-class="!text-gray-600"
                prepend-icon-size="sm"
                prepend-icon="ic:round-person"
              >
                User {{ i }}
              </VListItem>
            </VList>
            <VList hover small class="mt-4">
              <VText
                font-weight="semibold"
                color="gray.500"
                class="px-2"
                variant="sm"
              >
                Apps
              </VText>
              <VListItem
                v-for="i in 5"
                :key="i"
                prepend-icon-class="!text-gray-600"
                prepend-icon-size="sm"
                prepend-icon="ic:round-app-shortcut"
              >
                App {{ i }}
              </VListItem>
            </VList>
          </div>
          <div class="flex-1 px-6 py-4">
            <div class="border-2 rounded-lg border-dashed p-4">Content</div>
          </div>
        </div>
      </VAppShell>
    </VCard>
  </div>
</template>
