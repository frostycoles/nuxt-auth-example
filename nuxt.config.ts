// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['@fortawesome/fontawesome-free/css/all.min.css'],
  modules: ['@nuxtjs/tailwindcss', '@sidebase/nuxt-auth'],
  auth: {
    isEnabled: true,
    origin: process.env.ORIGIN,
    basePath: '/api/auth',
    enableSessionRefreshPeriodically: false,
    enableSessionRefreshOnWindowFocus: true,
    enableGlobalAppMiddleware: true,
  },
  runtimeConfig: {
    secret: '',
    githubClientSecret: '',
    githubClientId: '',
  },
});
