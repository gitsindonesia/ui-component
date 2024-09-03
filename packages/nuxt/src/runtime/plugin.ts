import { defineNuxtPlugin } from '#app'
import { FloatingVuePlugin } from '@morpheme/ui/src/tooltip/src'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(FloatingVuePlugin)
})
