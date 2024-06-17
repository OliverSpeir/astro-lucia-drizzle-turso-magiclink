import { Lucia } from "lucia";
import { DrizzleSQLiteAdapter } from "@lucia-auth/adapter-drizzle";
import { sessionTable, userTable } from "./db/schema";
import { db } from "./db";

const adapter = new DrizzleSQLiteAdapter(db, sessionTable, userTable);

export const lucia = new Lucia(adapter, {
    getUserAttributes: (attributes) => {
      return {
        email: attributes.email,
      };
    },
    sessionCookie: {
      expires: false,
      attributes: {
        // set to `true` when using HTTPS
        secure: import.meta.env.PROD,
      },
    },
  });
  
  declare module "lucia" {
    interface Register {
      Lucia: typeof lucia;
      DatabaseUserAttributes: DatabaseUserAttributes;
    }
  }
  
  type DatabaseUserAttributes = {
    email: string;
  };