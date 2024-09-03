import { defineNuxtPlugin } from '#app'
import { FloatingVuePlugin } from '../floating-vue'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(FloatingVuePlugin)
})
