// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'node:url';

export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      htmlAttrs: { lang: 'ru' },
      title: 'Auth service', 
    },
  },
  modules: [
    'nuxt-svg-icons',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      }
    ],
  ],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@import "@/assets/scss/app.scss"'
        },
      },
    }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  alias: {
    '@': fileURLToPath(new URL('./', import.meta.url)),

  }
})
