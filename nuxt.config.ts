// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
      baseURL: '/nuxt-flowbite-samples/', // baseURL: '/<repository>/'
      buildAssetsDir: 'assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
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