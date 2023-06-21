<script setup lang="ts"></script>

<template>
  <PageHeader title="Icon" />

  <div class="space-y-4">
    <VCard title="Basic Example">
      <div>
        <VIcon name="ri:home-2-line" />
        <VIcon name="ri:user-line" />
        <VIcon name="ri:settings-line" />
      </div>
    </VCard>
    <VCard title="Sizes">
      <div>
        <VIcon name="ri:home-2-line" size="xs" />
        <VIcon name="ri:home-2-line" size="sm" />
        <VIcon name="ri:home-2-line" size="md" />
        <VIcon name="ri:home-2-line" size="lg" />
        <VIcon name="ri:home-2-line" size="xl" />
        <VIcon name="ri:home-2-line" size="80" />
      </div>
    </VCard>
    <VCard title="Color">
      <div>
        <VIcon name="ri:home-2-line" class="text-primary-500" />
        <VIcon name="ri:home-2-line" class="text-secondary-500" />
        <VIcon name="ri:home-2-line" class="text-error-500" />
      </div>
    </VCard>
    <VCard title="Morpheme Icons">
      <div>
        <p class="font-medium mb-2">Default Collection</p>
        <VIcon name="ri:home-line" />
        <VIcon name="ic:round-local-activity" />
        <VIcon name="ph:activity-bold" />

        <p class="font-medium mb-2 mt-5">PascalCase</p>
        <VIcon name="remix:HomeLine" />
        <VIcon name="untitled:ActivityHeart" />
        <VIcon name="iconsax:outline/Add" />
        <VIcon name="iconsax:bulk/Add" />
        <VIcon name="iconsax:broken/Add" />
        <VIcon name="iconsax:linear/Add" />
        <VIcon name="iconsax:solid/Add" />
        <VIcon name="iconsax:twotone/Add" />

        <p class="font-medium mb-2 mt-5">
          PascalCase with suffix <code>Icon</code>
        </p>
        <VIcon name="remix:HomeLine" />
        <VIcon name="untitled:ActivityHeart" />
        <VIcon name="iconsax:outline/Add" />
        <VIcon name="iconsax:bulk/Add" />
        <VIcon name="iconsax:broken/Add" />
        <VIcon name="iconsax:linear/Add" />
        <VIcon name="iconsax:solid/Add" />
        <VIcon name="iconsax:twotone/Add" />

        <p class="font-medium mb-2 mt-5">HypenCase</p>
        <VIcon name="remix:home-line" />
        <VIcon name="untitled:activity-heart" />
        <VIcon name="iconsax:outline/add" />
        <VIcon name="iconsax:bulk/add" />
        <VIcon name="iconsax:broken/add" />
        <VIcon name="iconsax:linear/add" />
        <VIcon name="iconsax:solid/add" />
        <VIcon name="iconsax:twotone/add" />

        <p class="font-medium mb-2 mt-5">
          HypenCase with suffix <code>icon</code>
        </p>
        <VIcon name="remix:home-line-icon" />
        <VIcon name="untitled:activity-heart-icon" />
        <VIcon name="iconsax:outline/add-icon" />
        <VIcon name="iconsax:bulk/add-icon" />
        <VIcon name="iconsax:broken/add-icon" />
        <VIcon name="iconsax:linear/add-icon" />
        <VIcon name="iconsax:solid/add-icon" />
        <VIcon name="iconsax:twotone/add-icon" />
      </div>
    </VCard>
  </div>
</template>
