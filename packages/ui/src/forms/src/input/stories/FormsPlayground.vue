<script setup lang="ts">
import VInput from '../VInput.vue';
import {VBtn} from '../../../../button/src';
</script>

<template>
  <div class="space-y-5">
    <div>
      <div>Basic Input</div>

      <VInput wrapper-class="mb-4" label="Name" placeholder="e.g. Budi" />
      <VInput
        wrapper-class="mb-4"
        label="Email"
        placeholder="e.g. budi@example.com"
      />
      <VInput wrapper-class="mb-4" label="Password" placeholder="Password" />

      <div class="flex gap-2 mt-6">
        <VBtn color="primary"> Submit </VBtn>
        <VBtn type="reset" text> Reset </VBtn>
      </div>
    </div>

    <div>
      <div>Sizes</div>

      <VInput
        size="sm"
        wrapper-class="mb-4"
        label="Name"
        placeholder="sm"
        prepend-icon="ri:user-line"
      />
      <VInput
        size="md"
        wrapper-class="mb-4"
        label="Name"
        placeholder="default / md"
        prepend-icon="ri:user-line"
      />
      <VInput
        size="lg"
        wrapper-class="mb-4"
        label="Name"
        placeholder="lg"
        prepend-icon="ri:user-line"
      />
    </div>

    <div>
      <div>Icons</div>

      <VInput
        wrapper-class="mb-4"
        placeholder="Search"
        prepend-icon="ri:search-2-line"
      />
      <VInput
        wrapper-class="mb-4"
        placeholder="Search"
        append-icon="ri:search-2-line"
      />
      <VInput
        wrapper-class="mb-4"
        placeholder="Search"
        prepend-icon="ri:search-2-line"
        append-icon="ri:add-line"
      />
    </div>
  </div>
</template>
