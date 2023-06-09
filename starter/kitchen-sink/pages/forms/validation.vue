<script setup lang="ts">
import {object, boolean, string, mixed} from 'yup';
import {useForm} from 'vee-validate';

const schema = object({
  username: string().required().min(6).label('Username'),
  about: string().required().label('About'),
  avatar: mixed().required().label('Avatar'),
  cover: mixed().required().label('Cover photo'),
  first_name: string().required().label('First Name'),
  last_name: string().required().label('Last Name'),
  email: string().required().email().label('Email address'),
  country: string().required().label('Country'),
  address: string().required().label('Street Address'),
  city: mixed().required().label('City'),
  state: mixed().required().label('State / Province'),
  postal_code: string().required().label('ZIP / Postal Code'),
  comments: boolean().required().label('Comments'),
  candidates: boolean().required().label('Candidates'),
  offers: boolean().required().label('Offers'),
  push_notifications: string()
    .nullable()
    .required()
    .label('Push notifications'),
});

const {handleSubmit, resetForm} = useForm({
  validationSchema: schema,
});

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values));
});

const countryItems = ref([
  {
    text: 'United States',
    value: 'US',
  },
  {
    text: 'Indonesia',
    value: 'ID',
  },
]);

const pushNotificationItems = ref([
  {
    text: 'Everything',
    value: 'everything',
  },
  {
    text: 'Same as email',
    value: 'same_as_email',
  },
  {
    text: 'No push notifications',
    value: 'no_push_notifications',
  },
]);

const cities = ref([
  {
    text: 'New York',
    value: 'new_york',
  },
  {
    text: 'Jakarta',
    value: 'jakarta',
  },
]);

const states = ref([
  {
    text: 'New York',
    value: 'new_york',
  },
  {
    text: 'DKI Jakarta',
    value: 'jakarta',
  },
]);
</script>

<template>
  <PageHeader title="Form Validation Example" />

  <form @submit="onSubmit" class="space-y-6">
    <VCard title="Profile">
      <div class="space-y-4">
        <VInput
          name="username"
          label="Username"
          prepend-class="bg-gray-50 dark:bg-gray-true-700"
        >
          <template #prepend> morpheme.com/ </template>
        </VInput>
        <VTextarea label="About" hint="Write a few sentences about yourself." />
        <ClientOnly>
          <VFileUpload name="avatar" label="Avatar" theme="button" image />
          <VFileUpload
            name="cover"
            label="Cover photo"
            theme="dropzone"
            image
          />
        </ClientOnly>
      </div>
    </VCard>

    <VCard title="Personal Information">
      <div class="space-y-4">
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <VInput name="first_name" label="First Name" />
          <VInput name="last_name" label="Last Name" />
        </div>
        <VInput name="email" label="Email address" />
        <VSelect :items="countryItems" name="country" label="Country" />
        <VTextarea name="address" label="Street Address" />
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <VAutocomplete :items="cities" name="city" label="City" clearable />
          <VAutocomplete
            :items="states"
            name="state"
            label="State / Province"
            clearable
          />
          <VInput name="postal_code" label="ZIP / Postal Code" />
        </div>
      </div>
    </VCard>

    <VCard title="Notification">
      <div class="mt-2">
        <h3 class="font-semibold">By Email</h3>
        <p class="text-sm text-gray-500 dark:text-gray-true-500">
          We'll always let you know about important changes, but you pick what
          else you want to hear about.
        </p>
      </div>
      <div class="space-y-4 mt-6">
        <VCheckbox
          name="comments"
          label="Comments"
          hint="Get notified when someones posts a comment on a posting."
        />
        <VCheckbox
          name="candidates"
          label="Candidates"
          hint="Get notified when a candidate applies for a job."
        />
        <VCheckbox
          name="offers"
          label="Offers"
          hint="Get notified when a candidate accepts or rejects an offer."
        />
      </div>

      <div class="mt-8">
        <h3 class="font-semibold">Push Notification</h3>
        <p class="text-sm text-gray-500 dark:text-gray-true-500">
          These are delivered via SMS to your mobile phone.
        </p>
        <VRadioGroup
          class="mt-6"
          name="push_notifications"
          :items="pushNotificationItems"
        />
      </div>
    </VCard>

    <VCard>
      <div class="flex gap-3 justify-end">
        <VBtn @click="resetForm">Cancel</VBtn>
        <VBtn type="submit" color="primary">Save</VBtn>
      </div>
    </VCard>
  </form>
</template>
