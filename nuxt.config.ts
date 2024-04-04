// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app:{
    baseURL:'/nuxt-flowbite-samples/'
  },
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@nuxtjs/color-mode",
    "@nuxtjs/sitemap",
    "nuxt-gtag",
    "@pinia-plugin-persistedstate/nuxt",
    "@formkit/auto-animate",
    "@nuxt/image",
    "nuxt-icon",
    "@vite-pwa/nuxt",
    "@formkit/nuxt"
  ]
})