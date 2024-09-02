import { defineNuxtPlugin } from '#app'
import { FloatingVuePlugin } from '@morpheme/ui/src/tooltip/src/floating-vue.js'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(FloatingVuePlugin)
})
