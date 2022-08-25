import GitsUI from '@gits-id/ui'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(GitsUI)
})
