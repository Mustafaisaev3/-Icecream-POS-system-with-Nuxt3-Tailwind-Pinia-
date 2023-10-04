// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase',
    'unplugin-icons/nuxt',
  ],
  supabase: {
    redirectOptions: {
      login: '/auth/login',
      callback: '/confirm',
      exclude: [
        '/auth/register'
      ],
    }
  }
})
