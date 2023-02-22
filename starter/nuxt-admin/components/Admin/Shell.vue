<template>
  <div class="flex flex-col">
    <slot name="header" />
    <div class="lg:flex-1 lg:flex">
      <slot name="sidebar" />
      <div class="p-6 lg:flex lg:flex-col lg:flex-1">
        <main class="lg:flex-1 container mx-auto">
          <slot />
        </main>
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>
