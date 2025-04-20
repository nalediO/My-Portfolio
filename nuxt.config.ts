export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2025-04-19",
  modules: [
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxtjs/tailwindcss",
  ],
  tailwindcss: {
    
    exposeConfig: true
  }


})