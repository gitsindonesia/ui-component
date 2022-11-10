import { VTooltip, VClosePopper } from 'floating-vue'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('tooltip', VTooltip)
  nuxtApp.vueApp.directive('close-popper', VClosePopper)
})
