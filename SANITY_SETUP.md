# Sanity CMS Setup Instructions

## 1. Create Sanity Project
```bash
npm install -g @sanity/cli
sanity init
```

## 2. Configure Environment Variables
Copy `.env.local.example` to `.env.local` and update:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token
```

## 3. Add Schemas to Sanity Studio
Copy the schemas from `sanity-schemas.js` to your Sanity Studio `schemas` folder.

## 4. Deploy Sanity Studio
```bash
cd your-sanity-studio
sanity deploy
```

## 5. Content Management
- Access your Sanity Studio at: `https://your-project.sanity.studio`
- Add products, categories, and certifications
- Content will automatically sync to your website

## Benefits
- ✅ Real-time content updates
- ✅ User-friendly admin interface  
- ✅ Image optimization
- ✅ Fallback to static data if CMS is unavailable
- ✅ No server required (headless CMS)