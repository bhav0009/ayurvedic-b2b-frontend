# Maharishi Ayurveda - B2B Platform

## 🏢 Enterprise-Grade Ayurvedic Products Platform

A professional B2B platform for Maharishi Ayurveda, showcasing premium herbal products to distributors, wholesalers, and healthcare professionals worldwide.

## ✨ Features

### 🎯 Business Features
- **Product Catalog** - Comprehensive showcase of ayurvedic products
- **Category Filtering** - Easy navigation by product types
- **Pagination** - Optimized loading for large product catalogs
- **Contact Forms** - Professional inquiry system
- **Responsive Design** - Perfect on all devices

### 🔧 Technical Features
- **Next.js 16** - Latest React framework
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Modern styling
- **Sanity CMS** - Content management system
- **Image Optimization** - WebP/AVIF support
- **SEO Optimized** - Meta tags, sitemap, robots.txt

### 🛡️ Enterprise Security
- **Security Headers** - CSP, HSTS, XSS protection
- **Rate Limiting** - API protection
- **Error Monitoring** - Sentry integration
- **Environment Validation** - Production-ready configs

### 📊 Performance & Monitoring
- **Core Web Vitals** - Optimized performance
- **Analytics** - Google Analytics & Vercel Analytics
- **Error Tracking** - Comprehensive monitoring
- **Testing Suite** - Unit, integration, E2E tests

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- npm/yarn/pnpm

### Installation
```bash
# Clone repository
git clone <repository-url>
cd ayurveda-frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Setup
```bash
# Copy environment template
cp .env.example .env.local

# Add your configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
SANITY_API_TOKEN=your-api-token
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

## 📁 Project Structure

```
├── app/                    # Next.js app router
├── components/            # Reusable UI components
├── lib/                   # Utilities and configurations
├── public/               # Static assets
├── __tests__/            # Test files
├── e2e/                  # End-to-end tests
└── docs/                 # Documentation
```

## 🧪 Testing

```bash
# Unit & Integration tests
npm test

# E2E tests
npm run test:e2e

# Coverage report
npm run test:coverage
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Add environment variables
4. Deploy automatically

### Manual Deployment
```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📋 Environment Variables

### Required for Production
- `NEXT_PUBLIC_APP_URL` - Your domain URL
- `NEXT_PUBLIC_SANITY_PROJECT_ID` - Sanity project ID
- `SANITY_API_TOKEN` - Sanity API token

### Optional
- `SENTRY_DSN` - Error monitoring
- `NEXT_PUBLIC_GA_ID` - Google Analytics

## 🔧 Configuration

### Content Management
- **Sanity CMS** - Manage products, categories, content
- **Static Fallback** - Works without CMS configuration
- **Real-time Updates** - Content syncs automatically

### Performance
- **Image Optimization** - Automatic WebP/AVIF conversion
- **Code Splitting** - Optimized bundle sizes
- **Caching** - CDN and browser caching

## 📊 Monitoring & Analytics

### Performance Monitoring
- Core Web Vitals tracking
- Real User Monitoring (RUM)
- Performance budgets

### Error Tracking
- Sentry error monitoring
- Custom error boundaries
- Graceful error handling

### Business Analytics
- Google Analytics integration
- Conversion tracking
- User behavior analysis

## 🛡️ Security

### Headers
- Content Security Policy (CSP)
- HTTP Strict Transport Security (HSTS)
- X-Frame-Options, X-Content-Type-Options

### API Protection
- Rate limiting (60 req/min)
- Input validation
- Error sanitization

## 📚 Documentation

- [Environment Setup](./ENVIRONMENT.md)
- [Testing Guide](./TESTING.md)
- [Security Guide](./SECURITY.md)
- [Sanity CMS Setup](./SANITY_SETUP.md)

## 🤝 Support

For technical support or business inquiries:
- Email: support@maharishiayurveda.com
- Documentation: [Project Wiki]
- Issues: [GitHub Issues]

## 📄 License

Proprietary - Maharishi Ayurveda. All rights reserved.

---

**Built with ❤️ for enterprise-grade B2B commerce**