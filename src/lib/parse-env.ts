import type { ZodObject, ZodRawShape } from "zod";

import { config } from "dotenv";
import { expand } from "dotenv-expand";
import path from "node:path";
import { ZodError } from "zod";

expand(
  config({
    // eslint-disable-next-line node/prefer-global/process
    path: path.resolve(process.cwd(), ".env"),
  }),
);

export default function parseEnv<T extends ZodRawShape>(
  schema: ZodObject<T>,

  // eslint-disable-next-line node/prefer-global/process
  buildEnv: Record<string, string | undefined> = process.env,
) {
  try {
    const result = schema.parse(buildEnv);
    return result;
  }
  catch (error: unknown) {
    if (error instanceof ZodError) {
      throw error;
    }

    throw error;
  }
}
