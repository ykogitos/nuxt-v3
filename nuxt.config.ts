// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  runtimeConfig: {
    secretApi: process.env.SECRET_API,
  },
  nitro: {
    // plugins: ["plugins/hello.ts"],
    prerender: {
      routes: ["/", "/about"],
      ignore: ["/blog", "/blog/*"],
    },
  },
});
