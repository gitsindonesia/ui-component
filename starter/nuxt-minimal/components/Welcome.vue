<template>
  <div>
    <main
      class="container mx-auto p-6 flex items-center justify-center h-screen"
    >
      <div class="space-y-12">
        <div class="space-y-3 text-center">
          <h1 class="font-bold text-5xl space-x-3">
            <span
              class="
                bg-gradient-to-r
                from-green-500
                to-cyan-500
                bg-clip-text
                text-transparent
              "
            >
              Nuxt.js
            </span>
            <span class="font-thin text-gray-700">+</span>
            <span
              class="
                bg-gradient-to-r
                from-primary-500
                to-indigo-500
                bg-clip-text
                text-transparent
              "
            >
              GITS UI
            </span>
          </h1>
          <p class="text-gray-600 text-lg">
            A minimal Nuxt.js + GITS UI starter template
          </p>
        </div>

        <p class="text-xl text-center">
          Get started by editing
          <code class="px-2 py-1 rounded bg-gray-100">app.vue</code>
        </p>
        <div>
          <div class="grid grid-cols-2 gap-6">
            <a
              href="https://gitsindonesia.github.io/ui-component/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <VCard>
                <template #header>
                  <h3>Documentation &rarr;</h3>
                </template>
                <p>Find in-depth information about GITS UI features and API.</p>
              </VCard>
            </a>

            <a
              href="https://nuxt.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <VCard>
                <template #header>
                  <h3>Nuxt &rarr;</h3>
                </template>
                <p>Learn about Nuxt.js</p>
              </VCard>
            </a>

            <a
              href="https://github.com/gitsindonesia/ui-component/tree/main/starter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <VCard>
                <template #header>
                  <h3>Starter &rarr;</h3>
                </template>
                <p>Discover and deploy boilerplate example GITS UI projects.</p>
              </VCard>
            </a>

            <a
              href="https://nuxt.com/docs/getting-started/deployment"
              target="_blank"
              rel="noopener noreferrer"
            >
              <VCard>
                <template #header>
                  <h3>Deploy &rarr;</h3>
                </template>
                <p>
                  Instantly deploy your Nuxt site to a public URL with Vercel.
                </p>
              </VCard>
            </a>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
