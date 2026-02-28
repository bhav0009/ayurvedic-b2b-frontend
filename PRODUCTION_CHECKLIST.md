# Production Deployment Checklist

## ✅ Pre-Deployment

### Environment Variables
- [ ] Set `NEXT_PUBLIC_APP_URL` to your production domain
- [ ] Configure Sanity CMS credentials (if using):
  - [ ] `NEXT_PUBLIC_SANITY_PROJECT_ID`
  - [ ] `NEXT_PUBLIC_SANITY_DATASET=production`
  - [ ] `SANITY_API_TOKEN`
- [ ] Add Google Analytics ID (optional): `NEXT_PUBLIC_GA_ID`
- [ ] Add Sentry DSN (optional): `SENTRY_DSN`
- [ ] Add Google Search Console verification: `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`

### Build & Test
```bash
# Run tests
npm test

# Build for production
npm run build

# Test production build locally
npm start
```

### Performance Check
- [ ] Run Lighthouse audit (target: 90+ scores)
- [ ] Check Core Web Vitals
- [ ] Verify image optimization (WebP/AVIF)
- [ ] Test on mobile devices

### Security
- [ ] Review security headers in next.config.mjs
- [ ] Test CSP (Content Security Policy)
- [ ] Verify HTTPS redirect
- [ ] Check for exposed secrets

### SEO
- [ ] Update robots.txt domain
- [ ] Update sitemap.xml domain
- [ ] Verify meta tags
- [ ] Test Open Graph tags
- [ ] Submit sitemap to Google Search Console

## 🚀 Deployment (Vercel)

1. **Connect Repository**
   ```bash
   # Push to GitHub
   git add .
   git commit -m "Production ready"
   git push origin main
   ```

2. **Configure Vercel**
   - Go to https://vercel.com
   - Import your repository
   - Add environment variables
   - Deploy

3. **Post-Deployment**
   - [ ] Verify production URL works
   - [ ] Test all pages and forms
   - [ ] Check analytics tracking
   - [ ] Monitor error logs

## 📊 Monitoring

### Setup Monitoring Tools
- [ ] Vercel Analytics (already configured)
- [ ] Google Analytics (if configured)
- [ ] Sentry error tracking (if configured)
- [ ] Google Search Console

### Regular Checks
- [ ] Monitor Core Web Vitals
- [ ] Check error rates
- [ ] Review user analytics
- [ ] Update dependencies monthly

## 🔧 Optimization Tips

### Performance
- Images are auto-optimized (WebP/AVIF)
- Static pages are pre-rendered
- CDN caching enabled
- Compression enabled

### Security
- CSP headers configured
- HSTS enabled with preload
- XSS protection active
- Frame protection enabled

### SEO
- Dynamic sitemap
- Dynamic robots.txt
- Structured metadata
- Open Graph tags

## 📝 Environment Variables Reference

### Required for Production
```env
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

### Optional but Recommended
```env
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-token

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Monitoring
SENTRY_DSN=https://xxx@xxx.ingest.sentry.io/xxx

# SEO
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-verification-code
```

## 🎯 Success Criteria

- ✅ Build completes without errors
- ✅ All tests pass
- ✅ Lighthouse score > 90
- ✅ No console errors
- ✅ Forms work correctly
- ✅ Images load properly
- ✅ Mobile responsive
- ✅ SEO tags present
- ✅ Analytics tracking
- ✅ Error monitoring active
