import { FloatingVuePlugin } from '@morpheme/ui/src/components/tooltip/floating-vue';
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(FloatingVuePlugin)
})
