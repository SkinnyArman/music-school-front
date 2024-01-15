// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ui: {
    notifications: {
      // Show toasts at the top right of the screen
      position: "top-0 bottom-auto",
    },
  },
  modules: ["@nuxt/ui"],
});
