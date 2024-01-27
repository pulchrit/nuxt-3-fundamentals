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
  ], '@nuxt/image'],
  googleFonts: {
    families: {
      Mulish: [400, 900],
    }
  },
  // add NuxtImage images
  image: {
    // if your images are not coming from your own public folder, you need to 
    // specify where they are coming from her in domains
    domains: ['m.media-amazon.com'],
  },
  // Add your own auto-import directories!
  imports: {
    dirs: ["stores"],
  },
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
  },
  routeRules: {
    '/spa': { ssr: false }, // make is single page, only client side
    '/static': { static: true }, // make it server side rendered at build time (ie npm run build)
    // static pages are cached on the server and sent and resent from the server with no updates
    '/swr': { swr: true } // swr = static while revalidating, first render a static html page, then refetch updates in background
    // the /ssr route will automatically be configured because that is nuxt's default
    // ssr means the page will be regenerated on the server on every request, then sent to the 
    // client for hydration
  }
})
