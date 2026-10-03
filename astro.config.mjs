import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://joseph-vega.vercel.app",
  compressHTML: true,
  prefetch: false,
  build: { inlineStylesheets: "always" },
  integrations: [
    sitemap({
      i18n: { defaultLocale: "es", locales: { es: "es-PE", en: "en-US" } },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
