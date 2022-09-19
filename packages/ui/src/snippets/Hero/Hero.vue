<script setup lang="ts">
import VBtn from '@gits-id/button';
</script>

<template>
  <section
    class="
      sm:h-[30rem]
      grid
      items-center
      py-8
      sm:py-20
      px-4
      xl:px-0
      bg-primary-50/50
    "
  >
    <div
      class="
        container
        mx-auto
        flex flex-col-reverse
        sm:flex-row
        items-center
        justify-between
        gap-y-10
        sm:gap-4
      "
    >
      <div class="w-full sm:w-7/12">
        <h1 class="text-4xl font-semibold mb-3 text-gray-800">
          Welcome to <span class="text-primary">GITS Starter</span>
        </h1>
        <p class="text-base mb-7 leading-6 text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
          minima vel laudantium, dolorem hic temporibus porro aspernatur nostrum
          optio sed suscipit, ipsa dignissimos, repudiandae exercitationem
          consequatur quisquam praesentium placeat doloribus?
        </p>
        <div class="sm:space-x-4 space-y-4">
          <v-btn color="primary" size="lg" shadow> Get started </v-btn>
          <v-btn
            color="primary"
            shadow
            class="bg-white"
            size="lg"
            outlined
            href="https://gits-ui.web.app"
            target="_blank"
          >
            Learn more
          </v-btn>
        </div>
      </div>
      <div class="w-full sm:w-4/12">
        <img
          src="https://mofin.id/wp-content/uploads/sites/6/2022/01/illustration.png"
          alt="hero illustration"
          class="max-w-full"
        />
      </div>
    </div>
  </section>
</template>
