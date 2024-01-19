// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiKey: 'daf20600',
    }
  },
  css: ['~/assets/main.scss'],
  modules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Mulish: [400, 900],
    }
  }
})
