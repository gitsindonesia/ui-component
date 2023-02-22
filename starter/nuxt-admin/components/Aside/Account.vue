<script setup lang="ts">
const {signOut} = useSession();

function logout() {
  signOut();
}
</script>

<template>
  <footer class="py-3 px-2 flex w-full items-center justify-between">
    <VBtn
      text
      flush
      no-ring
      to="/admin/profile"
      class="
        gap-3
        items-center
        hover:bg-gray-100
        hover:dark:bg-neutral-700
        !font-normal
        !px-1
        !rounded-md
      "
    >
      <Avatar
        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80"
      />
      <div class="text-sm text-left w-8/12">
        <AsideAccountTitle> Olivia Rhye </AsideAccountTitle>
        <AsideAccountSubtitle> olivia@untitledui.com </AsideAccountSubtitle>
      </div>
    </VBtn>
    <VBtn
      v-tooltip="'Logout'"
      text
      no-ring
      prefix-icon="ic:round-logout"
      class="!rounded-md"
      @click="logout"
    />
  </footer>
</template>
