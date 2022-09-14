import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";

export default defineConfig({
  site: 'https://vipatra.in',
  integrations: [tailwind(), sitemap(), svelte()]
});