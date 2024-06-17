import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  security: {
    checkOrigin: true,
  },
  output: "server",
  adapter: vercel(),
});
