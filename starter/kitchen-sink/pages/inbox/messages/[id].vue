<script setup lang="ts">
definePageMeta({
  layout: "inbox",
});
</script>

<template>
  <VAppBar elevate-on-scroll bordered>
    <VBtn prefix-icon="ri:arrow-left-s-line" icon text fab @click="$router.back()" />
    <span class="flex-grow"></span>
    <VBtn prefix-icon="ri:delete-bin-line" icon text fab />
    <VBtn prefix-icon="ri:archive-line" icon text fab />
    <VBtn prefix-icon="ri:mail-line" icon text fab />
    <VBtn prefix-icon="ri:more-line" icon text fab />
  </VAppBar>
  <div class="px-4 mt-4">
    <div class="flex items-start mt-4">
      <VAvatar size="xl" color="secondary" class="mr-4 mt-[53px]">W</VAvatar>
      <div>
        <h1
          class="text-3xl font-semibold"
          :style="{
            viewTransitionName: `email-sender-${$route.params.id}`,
          }"
        >
          Message {{ $route.params.id }}
        </h1>
        <div class="flex gap-4 items-center w-full">
          <h3
            class="font-semibold text-sm flex-1"
            :style="{
              viewTransitionName: `email-sender-${$route.params.id}`,
            }"
          >
            John Doe
          </h3>
          <p class="text-xs text-gray-500">11:28 AM (1 hour ago)</p>
          <VBtn prefix-icon="ri:reply-line" icon text fab size="sm" />
          <VBtn prefix-icon="ri:reply-all-line" icon text fab size="sm" />
          <VBtn prefix-icon="ri:share-forward-line" icon text fab size="sm" />
          <VBtn prefix-icon="ri:more-line" icon text fab size="sm" />
        </div>
        <p class="text-xs text-gray-500">to me, John Doe, Jane Doe, +3 more</p>

        <div class="mt-4 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatibus,
          quibusdam, quia, quae voluptatem voluptatum quod exercitationem quos doloribus
          voluptates quas. Quisquam voluptatibus, quibusdam, quia, quae voluptatem
          voluptatum quod exercitationem quos doloribus voluptates quas.
        </div>

        <footer class="mt-8 flex gap-4">
          <VBtn rounded prefix-icon="ri:reply-line">Reply</VBtn>
          <VBtn rounded prefix-icon="ri:share-forward-line">Forward</VBtn>
        </footer>
      </div>
    </div>
  </div>
</template>
