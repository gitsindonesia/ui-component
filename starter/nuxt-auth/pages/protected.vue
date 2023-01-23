<script setup lang="ts">
definePageMeta({middleware: 'auth'});

const {data, signOut} = useSession();
</script>

<template>
  <div>I'm protected! Session data: {{ data }}</div>
  <button @click="signOut()" class="rounded-xl shadow-xl p-2 m-2">
    sign out
  </button>
</template>
