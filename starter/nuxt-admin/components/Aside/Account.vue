<script setup lang="ts">
const {signOut, data: session} = useSession();

function logout() {
  signOut();
}
</script>

<template>
  <footer class="py-3 px-2 flex w-full items-center justify-between">
    <VBtn
      v-if="session?.user"
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
        flex-1
      "
      @click="hideDrawerOnMobile"
    >
      <Avatar :src="session?.user?.image" />
      <div class="text-sm text-left w-8/12">
        <AsideAccountTitle> {{ session?.user?.name }} </AsideAccountTitle>
        <AsideAccountSubtitle>
          {{ session?.user?.email }}
        </AsideAccountSubtitle>
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
