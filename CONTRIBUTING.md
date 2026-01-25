# Contributing to Maharishi Atreya B2B Platform

## 🤝 Welcome Contributors

Thank you for your interest in contributing to our enterprise B2B platform. This guide will help you get started.

## 📋 Development Setup

### Prerequisites
- Node.js 20+
- Git
- Code editor (VS Code recommended)

### Getting Started
```bash
# Clone the repository
git clone <repository-url>
cd ayurveda-frontend

# Install dependencies
npm install

# Copy environment template
cp .env.example .env.local

# Start development server
npm run dev
```

## 🔄 Development Workflow

### Branch Naming
- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates
- `refactor/description` - Code refactoring

### Commit Messages
Follow conventional commits:
```
feat: add product search functionality
fix: resolve pagination issue
docs: update API documentation
style: improve mobile responsiveness
```

### Pull Request Process
1. Create feature branch from `main`
2. Make your changes
3. Run tests: `npm test`
4. Run linting: `npm run lint`
5. Create pull request
6. Request code review

## 🧪 Testing Requirements

### Before Submitting
```bash
# Run all tests
npm test

# Run E2E tests
npm run test:e2e

# Check test coverage
npm run test:coverage

# Validate environment
npm run validate-env
```

### Test Coverage
- Maintain >80% test coverage
- Write tests for new features
- Update tests for bug fixes

## 📝 Code Standards

### TypeScript
- Use strict TypeScript
- Define proper interfaces
- Avoid `any` types
- Use proper error handling

### React Components
- Use functional components
- Implement proper prop types
- Handle loading states
- Add error boundaries

### Styling
- Use Tailwind CSS classes
- Follow responsive design
- Maintain accessibility
- Use semantic HTML

## 🔒 Security Guidelines

### Environment Variables
- Never commit `.env.local`
- Use `NEXT_PUBLIC_` prefix for client variables
- Validate all environment variables

### API Security
- Validate all inputs
- Implement rate limiting
- Use proper error handling
- Sanitize user data

## 📊 Performance Guidelines

### Images
- Use Next.js Image component
- Optimize image sizes
- Use WebP/AVIF formats
- Implement lazy loading

### Code Splitting
- Use dynamic imports
- Optimize bundle sizes
- Implement proper caching

## 🐛 Bug Reports

### Issue Template
```markdown
**Bug Description**
Clear description of the bug

**Steps to Reproduce**
1. Go to...
2. Click on...
3. See error

**Expected Behavior**
What should happen

**Screenshots**
If applicable

**Environment**
- Browser: [e.g. Chrome 91]
- Device: [e.g. iPhone 12]
- OS: [e.g. iOS 14]
```

## ✨ Feature Requests

### Request Template
```markdown
**Feature Description**
Clear description of the feature

**Business Value**
Why this feature is needed

**Acceptance Criteria**
- [ ] Criterion 1
- [ ] Criterion 2

**Technical Considerations**
Any technical requirements
```

## 📚 Documentation

### Required Documentation
- Update README if needed
- Add JSDoc comments
- Update API documentation
- Include usage examples

## 🚀 Deployment

### Production Checklist
- [ ] All tests passing
- [ ] Code reviewed
- [ ] Environment variables set
- [ ] Performance tested
- [ ] Security validated

## 📞 Support

### Getting Help
- Check existing issues
- Review documentation
- Ask in team chat
- Create detailed issue

### Code Review
- Be constructive
- Focus on code quality
- Consider performance
- Check security implications

---

**Thank you for contributing to our enterprise platform! 🙏**