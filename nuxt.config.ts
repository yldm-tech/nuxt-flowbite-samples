// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
export default defineNuxtConfig({
  devtools: { enabled: true },
   runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL, // 客户端和服务器端都可访问
      API_BASE_URL: process.env.API_BASE_URL,
    },
    // 私有配置项只能在服务器端访问
    secretKey: process.env.SECRET_KEY,
  },
  app: {
      baseURL: process.env.BASE_URL || '', // baseURL: '/<repository>/'
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
    "@formkit/nuxt"
  ]
})