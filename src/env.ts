import { z } from "zod";

import parseEnv from "@/lib/parse-env";

const EnvSchema = z.object({
  NODE_ENV: z.enum(["development", "production"]).default("development"),
  DATABASE_URL: z.string(),
  BETTER_AUTH_URL: z.string().default("http://localhost:3000"),
  BETTER_AUTH_SECRET: z.string(),
});

export const env = parseEnv(EnvSchema);
