<script setup lang="ts">
import {useForm} from 'vee-validate';

const {data: session} = useSession();

useHead({
  title: 'Profile',
});

const {handleSubmit} = useForm({
  initialValues: {
    name: session.value?.user?.name,
    email: session.value?.user?.email,
  },
});

const isEditing = ref(false);

const save = handleSubmit((values) => {
  console.log(values);
});
</script>

<template>
  <div>
    <AdminPageTitle
      title="Profile"
      subtitle="Manage your profile information"
    />

    <VCard
      title="Basic Information"
      header-class="items-center justify-between"
    >
      <template #header.append>
        <div class="flex gap-2 items-center">
          <VBtn v-if="isEditing" size="sm" color="primary" @click="save">
            Save
          </VBtn>
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
    </VCard>
  </div>
</template>
