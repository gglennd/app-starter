import { z } from "zod";

import parseEnv from "@/lib/parse-env";

const EnvSchema = z.object({
  NODE_ENV: z.enum(["development", "production"]).default("development"),
  DATABASE_URL: z.string(),
});

export const env = parseEnv(EnvSchema);
