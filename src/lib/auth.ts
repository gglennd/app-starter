import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { openAPI } from "better-auth/plugins";
import { reactStartCookies } from "better-auth/react-start";

import { env } from "@/env";
import { db } from "@/lib/db";
import * as schema from "@/lib/db/schema";

export const auth = betterAuth({
  secret: env.BETTER_AUTH_SECRET,
  plugins: [
    openAPI({ disableDefaultReference: env.NODE_ENV === "production" }),
    reactStartCookies(),
  ],
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
  emailAndPassword: {
    enabled: true,
  },
});
