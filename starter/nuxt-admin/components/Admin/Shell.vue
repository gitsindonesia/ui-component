<template>
  <div class="flex flex-col">
    <slot name="header" />
    <div class="lg:flex-1 flex">
      <slot name="sidebar" />
      <div class="p-6 lg:flex flex-col lg:flex-1">
        <main class="lg:flex-1">
          <slot />
        </main>
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>
