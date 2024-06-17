import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client/web";

const turso = createClient({
  url: import.meta.env.PROD
    ? process.env.TURSO_DATABASE_URL
    : import.meta.env.TURSO_DATABASE_URL,
  authToken: import.meta.env.PROD
    ? process.env.TURSO_AUTH_TOKEN
    : import.meta.env.TURSO_AUTH_TOKEN,
});

export const db = drizzle(turso);
