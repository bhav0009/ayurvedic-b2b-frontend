import * as Sentry from '@sentry/nextjs'
import { env } from './lib/env'

Sentry.init({
  dsn: env.SENTRY_DSN,
  environment: env.NODE_ENV,
  enabled: !!env.SENTRY_DSN,
  tracesSampleRate: env.NODE_ENV === 'production' ? 0.1 : 1.0,
  beforeSend(event) {
    // Filter out development errors
    if (env.NODE_ENV === 'development') {
      return null
    }
    return event
  },
})