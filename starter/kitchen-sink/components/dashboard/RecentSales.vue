<script setup lang="ts">
const items = ref([
  {
    user: {
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://picsum.photos/200?id=1',
    },
    amount: '$1,250',
  },
  {
    user: {
      name: 'Alex Doe',
      email: 'alex@example.com',
      avatar: 'https://picsum.photos/200?id=2',
    },
    amount: '$1,450',
  },
  {
    user: {
      name: 'Samuel Doe',
      email: 'john@example.com',
      avatar: 'https://picsum.photos/200?id=3',
    },
    amount: '$1,350',
  },
  {
    user: {
      name: 'Murphy Doe',
      email: 'murphy@example.com',
      avatar: 'https://picsum.photos/200?id=4',
    },
    amount: '$250',
  },
  {
    user: {
      name: 'Sam Doe',
      email: 'sam@example.com',
      avatar: 'https://picsum.photos/200?id=5',
    },
    amount: '$150',
  },
]);
</script>

<template>
  <VCard>
    <h3 class="font-semibold text-lg">Recent Sales</h3>
    <p class="text-gray-500 dark:text-neutral-500 text-sm mt-0.5">
      You made 265 sales this month.
    </p>

    <VList flush class="mt-4">
      <VListItem v-for="item in items" :key="item.user.name" class="!px-0">
        <template #prepend>
          <VAvatar :src="item.user.avatar" :alt="item.user.name" :size="40" />
        </template>
        <div>
          <div class="font-semibold">
            {{ item.user.name }}
          </div>
          <div class="text-gray-500 dark:text-neutral-500">
            {{ item.user.email }}
          </div>
        </div>
        <template #append>
          <div>
            {{ item.amount }}
          </div>
        </template>
      </VListItem>
    </VList>
  </VCard>
</template>
