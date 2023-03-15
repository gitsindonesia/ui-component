<template>
  <AuthShell>
    <slot name="sidebar">
      <AuthSidebar />
    </slot>
    <div class="bg-white dark:bg-neutral-900 grid place-items-center">
      <slot />
    </div>
  </AuthShell>
</template>
