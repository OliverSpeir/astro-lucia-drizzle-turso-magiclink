# Astro Lucia Drizzle Turso Magic Link

1. Proof of concept
3. Need a resend API key to test yourself (very easy no credit card required)
4. Also need a turso account to test yourself (very easy no credit card required)
 - `turso auth signup`
 - `turso db create <database-name>`
 - `turso db show <database-name> --url`
 - `turso db tokens create <database-name>`
5. `drizzle-kit generate` && `drizzle-kit migrate` to create the tables in schema initially

## TO DO

1. Polish up code
2. Rate limit


## Resources
  
- [Lucia Docs](https://lucia-auth.com/)
- [Pilcrow's Book on Auth](https://thecopenhagenbook.com/)
- [Resend](https://resend.com/)
- [Email Verification Guide](https://thecopenhagenbook.com/email-verification)
- [Turso CLI Docs](https://docs.turso.tech/cli/introduction)
- [Drizzle with Turso Docs](https://orm.drizzle.team/learn/tutorials/drizzle-with-turso)