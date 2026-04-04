// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  nitro: {
    preset: "cloudflare-pages"
  },
  app: {
    head: {
      link: [
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
