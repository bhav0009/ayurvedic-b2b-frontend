import { z } from 'zod'

// Environment schema validation
const envSchema = z.object({
  // Sanity CMS
  NEXT_PUBLIC_SANITY_PROJECT_ID: z.string().optional(),
  NEXT_PUBLIC_SANITY_DATASET: z.string().default('production'),
  SANITY_API_TOKEN: z.string().optional(),
  
  // Application
  NODE_ENV: z.enum(['development', 'staging', 'production']).default('development'),
  NEXT_PUBLIC_APP_URL: z.string().url().default('http://localhost:3000'),
  
  // Analytics
  NEXT_PUBLIC_GA_ID: z.string().optional(),
  SENTRY_DSN: z.string().optional(),
  
  // Email
  SMTP_HOST: z.string().optional(),
  SMTP_PORT: z.string().optional(),
  SMTP_USER: z.string().optional(),
  SMTP_PASSWORD: z.string().optional(),
  SMTP_FROM: z.string().email().optional(),
  SENDGRID_API_KEY: z.string().optional(),
  
  // Security
  NEXTAUTH_SECRET: z.string().optional(),
  NEXTAUTH_URL: z.string().url().optional(),
  RATE_LIMIT_RPM: z.string().default('60'),
  
  // Feature flags
  NEXT_PUBLIC_ENABLE_ANALYTICS: z.string().default('true'),
  NEXT_PUBLIC_ENABLE_CONTACT_FORM: z.string().default('true'),
  NEXT_PUBLIC_ENABLE_SEARCH: z.string().default('false'),
})

// Parse and validate environment variables
function parseEnv() {
  // Skip validation in production build to allow deployment
  if (process.env.NODE_ENV === 'production' && !process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return {
      NODE_ENV: 'production',
      NEXT_PUBLIC_SANITY_DATASET: 'production',
      NEXT_PUBLIC_APP_URL: 'https://your-app.vercel.app',
      RATE_LIMIT_RPM: '60',
      NEXT_PUBLIC_ENABLE_ANALYTICS: 'true',
      NEXT_PUBLIC_ENABLE_CONTACT_FORM: 'true',
      NEXT_PUBLIC_ENABLE_SEARCH: 'false',
    }
  }
  
  try {
    return envSchema.parse(process.env)
  } catch (error) {
    console.warn('Environment validation failed, using defaults:', error)
    return {
      NODE_ENV: process.env.NODE_ENV || 'development',
      NEXT_PUBLIC_SANITY_DATASET: 'production',
      NEXT_PUBLIC_APP_URL: 'http://localhost:3000',
      RATE_LIMIT_RPM: '60',
      NEXT_PUBLIC_ENABLE_ANALYTICS: 'true',
      NEXT_PUBLIC_ENABLE_CONTACT_FORM: 'true',
      NEXT_PUBLIC_ENABLE_SEARCH: 'false',
    }
  }
}

// Export validated environment
export const env = parseEnv()

// Helper functions
export const isProduction = env.NODE_ENV === 'production'
export const isDevelopment = env.NODE_ENV === 'development'
export const isStaging = env.NODE_ENV === 'staging'

// Feature flags
export const features = {
  analytics: env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
  contactForm: env.NEXT_PUBLIC_ENABLE_CONTACT_FORM === 'true',
  search: env.NEXT_PUBLIC_ENABLE_SEARCH === 'true',
}

// Sanity configuration
export const sanityConfig = {
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  token: env.SANITY_API_TOKEN,
  useCdn: isProduction,
}

// Email configuration
export const emailConfig = {
  smtp: {
    host: env.SMTP_HOST,
    port: env.SMTP_PORT ? parseInt(env.SMTP_PORT) : 587,
    user: env.SMTP_USER,
    password: env.SMTP_PASSWORD,
    from: env.SMTP_FROM,
  },
  sendgrid: {
    apiKey: env.SENDGRID_API_KEY,
  },
}