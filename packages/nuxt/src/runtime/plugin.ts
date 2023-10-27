import { FloatingVuePlugin } from '@morpheme/tooltip';
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(FloatingVuePlugin)
})
