import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  security: {
    checkOrigin: true,
  },
  output: "server",
  adapter: cloudflare(),
  // cloudflare specific config to get access to process.env
  vite: {
    define: {
      "process.env.TURSO_DATABASE_URL": JSON.stringify(
        process.env.TURSO_DATABASE_URL
      ),
      "process.env.TURSO_AUTH_TOKEN": JSON.stringify(
        process.env.TURSO_AUTH_TOKEN
      ),
      "process.env.RESEND_API_KEY": JSON.stringify(process.env.RESEND_API_KEY),
    },
  },
});
