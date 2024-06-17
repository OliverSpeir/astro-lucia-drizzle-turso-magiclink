import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

const userTable = sqliteTable("user", {
    id: text("id").notNull().primaryKey(),
    email: text("email").notNull(),
    email_verified: integer("email_verified", { mode: 'boolean' }).default(false),
});

const sessionTable = sqliteTable("session", {
    id: text("id").notNull().primaryKey(),
    userId: text("user_id")
        .notNull()
        .references(() => userTable.id),
    expiresAt: integer("expires_at").notNull(),
});

const emailVerificationTokenTable = sqliteTable("email_verification_token", {
    id: text("id").notNull().primaryKey(),
    user_id: text("user_id")
        .notNull()
        .references(() => userTable.id),
    email: text("email").notNull(),
    expires_at: integer("expires_at").notNull(),
});

export { userTable, sessionTable, emailVerificationTokenTable };
