import { z } from 'zod'

const envSchema = z.object({
  BACKEND_URL: z.string(),
  WEB_URL: z.string(),
  JWT_SECRET: z.string(),
})

const parsed = envSchema.safeParse(process.env)

if (!parsed.success) {
  throw new Error(
    '❌ Invalid environment variables: ' +
      JSON.stringify(parsed.error.format(), null, 2),
  )
}

export const env = parsed.data
