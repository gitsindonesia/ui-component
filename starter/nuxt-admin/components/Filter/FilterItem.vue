<template>
  <li
    class="
      flex
      items-center
      gap-2
      bg-primary-100
      text-primary-700
      px-4
      py-3
      rounded-md
      h-11
    "
  >
    <span class="text-sm font-semibold">
      <slot />
    </span>
    <VBtn color="primary" flush text prefix-icon="ic:round-close" />
  </li>
</template>
