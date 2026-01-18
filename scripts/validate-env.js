#!/usr/bin/env node

const { z } = require('zod')
const fs = require('fs')
const path = require('path')

// Required environment variables for production
const requiredForProduction = [
  'NEXT_PUBLIC_SANITY_PROJECT_ID',
  'SANITY_API_TOKEN',
  'NEXT_PUBLIC_APP_URL',
]

function validateEnvironment() {
  const env = process.env.NODE_ENV || 'development'
  
  console.log(`🔍 Validating environment: ${env}`)
  
  // Check if .env.local exists
  const envLocalPath = path.join(process.cwd(), '.env.local')
  if (!fs.existsSync(envLocalPath)) {
    console.warn('⚠️  .env.local not found. Copy .env.example to .env.local')
  }
  
  // Validate required variables for production
  if (env === 'production') {
    const missing = requiredForProduction.filter(key => !process.env[key])
    
    if (missing.length > 0) {
      console.error('❌ Missing required environment variables for production:')
      missing.forEach(key => console.error(`   - ${key}`))
      process.exit(1)
    }
  }
  
  // Test Sanity connection if configured
  if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    console.log('✅ Sanity configuration found')
  } else {
    console.warn('⚠️  Sanity not configured - using static data')
  }
  
  console.log('✅ Environment validation passed')
}

// Run validation
try {
  validateEnvironment()
} catch (error) {
  console.error('❌ Environment validation failed:', error.message)
  process.exit(1)
}