# Environment Configuration Guide

## Overview
Proper environment configuration with validation, type safety, and environment-specific settings.

## Files Structure
```
├── .env.example          # Template with all variables
├── .env.local.example    # Local development template  
├── .env.development      # Development defaults
├── .env.production       # Production defaults
├── .env.local           # Your local config (gitignored)
├── lib/env.ts           # Environment validation & config
└── scripts/validate-env.js # Environment validation script
```

## Setup Instructions

### 1. Create Local Environment File
```bash
cp .env.example .env.local
```

### 2. Configure Required Variables
Edit `.env.local` with your values:
```bash
# Sanity CMS (Required for content management)
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
SANITY_API_TOKEN=your-api-token

# Application URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3. Validate Configuration
```bash
npm run validate-env
```

## Environment Variables

### Required for Production
- `NEXT_PUBLIC_SANITY_PROJECT_ID` - Sanity project ID
- `SANITY_API_TOKEN` - Sanity API token
- `NEXT_PUBLIC_APP_URL` - Application URL

### Optional
- `SMTP_*` - Email configuration
- `SENTRY_DSN` - Error monitoring
- `NEXT_PUBLIC_GA_ID` - Google Analytics

### Feature Flags
- `NEXT_PUBLIC_ENABLE_ANALYTICS` - Enable/disable analytics
- `NEXT_PUBLIC_ENABLE_CONTACT_FORM` - Enable/disable contact form
- `NEXT_PUBLIC_ENABLE_SEARCH` - Enable/disable search

## Validation
- ✅ Type-safe environment variables with Zod
- ✅ Automatic validation on build
- ✅ Environment-specific defaults
- ✅ Feature flag management
- ✅ Missing variable detection

## Security
- ✅ Sensitive variables in `.env.local` (gitignored)
- ✅ Public variables prefixed with `NEXT_PUBLIC_`
- ✅ Production-specific validation
- ✅ No hardcoded secrets in code

## Usage in Code
```typescript
import { env, features, sanityConfig } from '@/lib/env'

// Use validated environment variables
const apiUrl = env.NEXT_PUBLIC_APP_URL

// Use feature flags
if (features.analytics) {
  // Initialize analytics
}

// Use typed configuration
const client = createClient(sanityConfig)
```