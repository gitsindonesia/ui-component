<script setup lang="ts"></script>

<template>
  <PageHeader title="Textarea" />

  <div class="space-y-4">
    <VCard title="Default">
      <div>
        <VTextarea />
      </div>
    </VCard>

    <VCard title="Label, Placeholder, and Hint">
      <div>
        <VTextarea label="Label" placeholder="Placeholder" hint="Hint" />
      </div>
    </VCard>

    <VCard title="State">
      <div>
        <VTextarea
          wrapper-class="mb-4"
          label="Readonly"
          placeholder="Placeholder"
          hint="Hint"
          readonly
        />
        <VTextarea
          wrapper-class="mb-4"
          label="Disabled"
          placeholder="Placeholder"
          hint="Hint"
          disabled
        />
        <VTextarea
          wrapper-class="mb-4"
          label="Error"
          placeholder="Placeholder"
          hint="Hint"
          error
        />
      </div>
    </VCard>

    <VCard title="With Counter">
      <div>
        <VTextarea
          label="Readonly"
          placeholder="Placeholder"
          hint="Hint"
          counter
        />
      </div>
    </VCard>
  </div>
</template>
