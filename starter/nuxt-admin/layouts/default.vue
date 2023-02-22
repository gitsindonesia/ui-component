<template>
  <AdminShell>
    <template #header>
      <AdminHeader />
    </template>
    <template #sidebar>
      <AdminSidebar />
    </template>
    <template #footer>
      <AdminFooter />
    </template>
    <slot />
  </AdminShell>
</template>
