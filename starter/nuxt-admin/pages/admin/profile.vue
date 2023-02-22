<script setup lang="ts">
import {useForm} from 'vee-validate';

definePageMeta({
  //
});

useHead({
  title: 'Profile',
})

useForm({
  initialValues: {
    name: 'John Doe',
    email: 'john.doe@gits.id',
    role: 'Admin',
  },
});

const isEditing = ref(false);
</script>

<template>
  <div>
    <AdminPageTitle title="Profile" />

    <VCard
      title="Basic Information"
      header-class="items-center justify-between"
    >
      <template #header.append>
        <div class="flex gap-2 items-center">
          <VBtn v-if="isEditing" size="sm" color="primary">Save</VBtn>
          <VBtn @click="isEditing = !isEditing" size="sm">
            {{ isEditing ? 'Cancel' : 'Edit' }}
          </VBtn>
        </div>
      </template>
      <VInput
        wrapper-class="mb-4"
        label="Name"
        name="name"
        prepend-icon="ic:round-person"
        :disabled="!isEditing"
      />
      <VInput
        wrapper-class="mb-4"
        label="Email"
        name="email"
        prepend-icon="ic:round-email"
        :disabled="!isEditing"
      />
      <VInput
        wrapper-class="mb-4"
        label="Role"
        name="role"
        prepend-icon="ic:round-supervisor-account"
        :disabled="!isEditing"
      />
    </VCard>
  </div>
</template>
