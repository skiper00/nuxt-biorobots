// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  css: ['~/app/styles/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  imports: {
    autoImport: true,
  },

  components: {
    dirs: [
      { path: '~/widgets', pathPrefix: false },
      { path: '~/features', pathPrefix: false },
      { path: '~/shared', pathPrefix: false },
      { path: '~/entities', pathPrefix: false },
    ],
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui',
    '@pinia/nuxt',
  ],
});
