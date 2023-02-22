<template>
  <AuthShell>
    <slot name="sidebar">
      <AuthSidebar />
    </slot>
    <div class="bg-white grid place-items-center">
      <slot />
    </div>
  </AuthShell>
</template>
