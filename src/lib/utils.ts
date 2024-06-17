import { Resend } from "resend";
import { TimeSpan, createDate } from "oslo";
import { generateIdFromEntropySize } from "lucia";
import { db } from "@db";
import { eq } from "drizzle-orm";
import { emailVerificationTokenTable } from "@schema";

const resend = new Resend(
  import.meta.env.PROD
    ? process.env.RESEND_API_KEY
    : import.meta.env.RESEND_API_KEY
);

export const sendEmail = async (
  userEmail: string,
  verificationLink: string
) => {
  const from = "🧙 <onboarding@resend.dev>";
  const to = userEmail;
  const subject = "Magic Link 🪄";
  const html = `<p>Sign in with this Magic Link: <a href="${verificationLink}" rel="noreferrer"> Sign In </a></p>`;

  const send = await resend.emails.send({
    from,
    to,
    subject,
    html,
  });

  return send.data;
};

export const createEmailVerificationToken = async (
  userId: string,
  email: string
) => {
  await db
    .delete(emailVerificationTokenTable)
    .where(eq(emailVerificationTokenTable.user_id, userId));
  const tokenId = generateIdFromEntropySize(25); // 40 characters long
  await db.insert(emailVerificationTokenTable).values({
    id: tokenId,
    user_id: userId,
    email,
    expires_at: createDate(new TimeSpan(2, "h")).getTime(),
  });
  return tokenId;
};
