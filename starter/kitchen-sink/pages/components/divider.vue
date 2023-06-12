<script setup lang="ts"></script>

<template>
  <PageHeader title="Divider" />

  <div class="space-y-4">
    <VCard title="Basic Example">
      <div>
        <VList>
          <VListItem>Jane</VListItem>
          <VDivider />
          <VListItem>Lily</VListItem>
          <VListItem>Mary</VListItem>
        </VList>
      </div>
    </VCard>

    <VCard title="Inset">
      <div>
        <VList>
          <VListItem>Jane</VListItem>
          <VDivider inset />
          <VListItem>Lily</VListItem>
          <VListItem>Mary</VListItem>
        </VList>
      </div>
    </VCard>

    <VCard title="Vertical">
      <div>
        <VAppBar shadow>
          <VMain class="flex justify-between items-center">
            <VLogo />

            <nav class="flex gap-1">
              <VBtn text>Home</VBtn>
              <VDivider vertical />
              <VBtn text>About</VBtn>
              <VDivider vertical />
              <VBtn text>Contact</VBtn>
            </nav>
          </VMain>
        </VAppBar>
      </div>
    </VCard>
  </div>
</template>
