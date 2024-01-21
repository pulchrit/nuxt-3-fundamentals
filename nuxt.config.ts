// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiKey: 'daf20600',
    }
  },
  css: ['~/assets/main.scss'],
  modules: ['@nuxtjs/google-fonts', [
   '@pinia/nuxt', {
    // you can autoimport any functions you think you'll use often
      autoImports: ['defineStore', 'acceptHMRUpdate'],
   },
  ]],
  googleFonts: {
    families: {
      Mulish: [400, 900],
    }
  },
  // Add your own auto-import directories!
  imports: {
    dirs: ["stores"],
  },
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
  },
})
