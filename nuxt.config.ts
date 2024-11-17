// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  runtimeConfig: {
    secretApi: process.env.SECRET_API,
    dbUrl: process.env.DB_URL,
    dbName: process.env.DB_NAME,
    dbUser: process.env.DB_USER,
    dbPwd: process.env.DB_PASSWORD,
  },
  nitro: {
    // plugins: ["~/server/plugins/sql.ts"],
    prerender: {
      routes: ["/"],
      ignore: ["/blog", "/blog/*"],
    },
  },
});
