import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineNuxtModule, addPlugin } from '@nuxt/kit'

const transpile = [
  '@headlessui/vue',
  '@heroicons/vue',
  '@gits-id/ui',
  '@gits-id/alert',
  '@gits-id/app-bar',
  '@gits-id/badge',
  '@gits-id/breadcrumbs',
  '@gits-id/button',
  '@gits-id/card',
  '@gits-id/collapsible',
  '@gits-id/container',
  '@gits-id/dropdown',
  '@gits-id/editor',
  '@gits-id/forms',
  '@gits-id/icon',
  '@gits-id/layouts',
  '@gits-id/list',
  '@gits-id/logo',
  '@gits-id/menu',
  '@gits-id/menus',
  '@gits-id/modal',
  '@gits-id/multi-select',
  '@gits-id/nav-drawer',
  '@gits-id/navbar',
  '@gits-id/pages',
  '@gits-id/pagination',
  '@gits-id/progress-bar',
  '@gits-id/select',
  '@gits-id/services',
  '@gits-id/spinner',
  '@gits-id/stats',
  '@gits-id/switch',
  '@gits-id/table',
  '@gits-id/tabs',
  '@gits-id/textarea',
  '@gits-id/theme',
  '@gits-id/toast',
  '@gits-id/tooltip',
  '@gits-id/utils'
]
export interface ModuleOptions {
  //
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'gits-ui',
    configKey: 'gitsUi'
  },
  setup (options, nuxt) {
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    nuxt.options.build.transpile.push(runtimeDir)
    addPlugin(resolve(runtimeDir, 'plugin'))

    // transpile deps
    nuxt.options.build.transpile = [
      ...nuxt.options.build.transpile,
      ...transpile
    ]
  }
})
