<script setup lang="ts">
//
</script>

<template>
  <div>
    <AdminPageHeader title="Dashboard" subtitle="Welcome to your dashboard!" />

    <VAlert color="info" solid icon="ic:sharp-info" class="mb-5">
      Welcome to your new Nuxt app!
    </VAlert>

    <div class="grid gap-4 grid-cols-1 md:grid-cols-2">
      <VCard title="Get Started">
        <p>
          Start by editing this page in
          <code class="code">pages/admin/index.vue</code>.
        </p>
      </VCard>

      <VCard title="Menus">
        <p>
          Add or update menus in
          <code class="code">./app.config.ts</code>.
        </p>
      </VCard>

      <VCard title="Layout">
        <p>
          This template comes with <code class="code">admin</code> layout in
          <code class="code">layouts/admin.vue</code>.
        </p>
      </VCard>

      <VCard title="Components">
        <p>
          This template comes with a few components that you can use on your
          pages. Checkout the
          <code class="code"> ./components </code>
          folder.
        </p>
      </VCard>
    </div>
  </div>
</template>

<style scoped>
.code {
  @apply px-2 py-1 bg-gray-100 dark:bg-neutral-700 dark:text-neutral-200 rounded text-sm;
}
</style>
