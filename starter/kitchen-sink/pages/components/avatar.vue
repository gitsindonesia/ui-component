<script setup lang="ts">
const avatar1 =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80';
const avatar2 =
  'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80';
</script>

<template>
  <PageHeader title="Avatar" />

  <div class="space-y-4">
    <VCard title="Variants">
      <div class="space-x-2">
        <VAvatar v-for="color in colors" :key="color" :color="color">
          A
        </VAvatar>
      </div>
    </VCard>

    <VCard title="Sizes">
      <div class="space-x-2">
        <VAvatar v-for="size in sizes" :key="size" :size="size"> A </VAvatar>
        <VAvatar size="69">A</VAvatar>
      </div>
    </VCard>

    <VCard title="Image">
      <div class="space-x-2">
        <VAvatar :src="avatar1" />
        <VAvatar :src="avatar2" />
      </div>
    </VCard>

    <VCard title="Shape">
      <div class="space-x-2">
        <VAvatar size="lg" name="Michael Dam" :src="avatar1" />
        <VAvatar size="lg" name="Alex Hipp" :src="avatar2" shape="square" />
        <VAvatar size="lg" name="Alex Hipp" :src="avatar2" shape="rounded" />
      </div>
    </VCard>

    <VCard title="Avatar Group">
      <div>
        <VAvatarGroup spacing="xs">
          <VAvatar :src="avatar1" size="xl" />
          <VAvatar :src="avatar2" size="xl" />
          <VAvatar color="primary" size="xl">W</VAvatar>
          <VAvatar color="secondary" size="xl">AP</VAvatar>
          <VAvatar size="xl">+5</VAvatar>
        </VAvatarGroup>
        <VAvatarGroup spacing="sm">
          <VAvatar :src="avatar1" size="xl" />
          <VAvatar :src="avatar2" size="xl" />
          <VAvatar color="primary" size="xl">W</VAvatar>
          <VAvatar color="secondary" size="xl">AP</VAvatar>
          <VAvatar size="xl">+5</VAvatar>
        </VAvatarGroup>
        <VAvatarGroup spacing="md">
          <VAvatar :src="avatar1" size="xl" />
          <VAvatar :src="avatar2" size="xl" />
          <VAvatar color="primary" size="xl">W</VAvatar>
          <VAvatar color="secondary" size="xl">AP</VAvatar>
          <VAvatar size="xl">+5</VAvatar>
        </VAvatarGroup>
        <VAvatarGroup spacing="lg">
          <VAvatar :src="avatar1" size="xl" />
          <VAvatar :src="avatar2" size="xl" />
          <VAvatar color="primary" size="xl">W</VAvatar>
          <VAvatar color="secondary" size="xl">AP</VAvatar>
          <VAvatar size="xl">+5</VAvatar>
        </VAvatarGroup>
        <VAvatarGroup spacing="xl">
          <VAvatar :src="avatar1" size="xl" />
          <VAvatar :src="avatar2" size="xl" />
          <VAvatar color="primary" size="xl">W</VAvatar>
          <VAvatar color="secondary" size="xl">AP</VAvatar>
          <VAvatar size="xl">+5</VAvatar>
        </VAvatarGroup>
        <VAvatarGroup spacing="2xl">
          <VAvatar :src="avatar1" size="xl" />
          <VAvatar :src="avatar2" size="xl" />
          <VAvatar color="primary" size="xl">W</VAvatar>
          <VAvatar color="secondary" size="xl">AP</VAvatar>
          <VAvatar size="xl">+5</VAvatar>
        </VAvatarGroup>
        <VAvatarGroup :spacing="10">
          <VAvatar :src="avatar1" size="xl" />
          <VAvatar :src="avatar2" size="xl" />
          <VAvatar color="primary" size="xl">W</VAvatar>
          <VAvatar color="secondary" size="xl">AP</VAvatar>
          <VAvatar size="xl">+5</VAvatar>
        </VAvatarGroup>
      </div>
    </VCard>
  </div>
</template>
