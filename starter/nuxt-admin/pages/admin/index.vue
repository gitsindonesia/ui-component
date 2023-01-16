<script setup lang="ts"></script>

<template>
  <div>
    <AdminPageTitle title="Dashboard" subtitle="Welcome to your dashboard!" />

    <VAlert color="info" solid icon="ic:sharp-info" class="mb-5">
      Welcome to your new Nuxt app!
    </VAlert>

    <div class="grid gap-4 grid-cols-1 md:grid-cols-2">
      <VCard title="Get Started">
        <p>
          Start by editing this page on
          <code class="px-2 py-1 bg-gray-100 rounded text-sm"
            >pages/admin/index.vue</code
          >.
        </p>
      </VCard>

      <VCard title="Menus">
        <p>
          Add or update menus on
          <code class="px-2 py-1 bg-gray-100 rounded text-sm"
            >./app.config.ts</code
          >.
        </p>
      </VCard>

      <VCard title="Layout">
        <p>
          Checkout the default layout on
          <code class="px-2 py-1 bg-gray-100 rounded text-sm"
            >layouts/default.vue</code
          >.
        </p>
      </VCard>

      <VCard title="Components">
        <p>
          This template comes with a few components that you can use on your
          pages. Checkout the
          <code class="px-2 py-1 bg-gray-100 rounded text-sm"
            >./components</code
          >
          folder.
        </p>
      </VCard>
    </div>
  </div>
</template>
