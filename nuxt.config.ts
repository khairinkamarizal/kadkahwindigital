// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  nitro: {
    preset: "cloudflare-pages"
  },
  app: {
    head: {
      title: "Walimatul Urus Mimi & Hafiz",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" },
        {
          name: "description",
          content: "Jemputan ke Majlis Perkahwinan Puteri Nurul Syamimi & Muhamad Hafiz pada 30 Mei 2026.",
        },
        { property: "og:title", content: "Walimatul Urus Mimi & Hafiz" },
        {
          property: "og:description",
          content: "Jemputan ke Majlis Perkahwinan Puteri Nurul Syamimi & Muhamad Hafiz pada 30 Mei 2026.",
        },
        { property: "og:type", content: "website" },
        { name: "theme-color", content: "#660B05" }
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Outfit:wght@100..900&display=swap",
          rel: "stylesheet",
        },
      ],
    },
  },
  devtools: { enabled: true },
  modules: ["@morev/vue-transitions", "@nuxtjs/tailwindcss"],
  vite: {
    optimizeDeps: {
      include: ["@vue/devtools-core", "@vue/devtools-kit", "lucide-vue-next"],
    },
    server: {
      allowedHosts: ["encouragedly-uncontrastive-jaylen.ngrok-free.dev"],
    },
  },
});
