# Testing Suite Documentation

## Overview
Comprehensive testing setup with unit, integration, and E2E tests.

## Test Types

### 1. Unit Tests (Jest + React Testing Library)
- **Location**: `__tests__/`
- **Purpose**: Test individual components and functions
- **Run**: `npm test`

### 2. Integration Tests
- **Location**: `__tests__/components/`
- **Purpose**: Test component interactions and data flow
- **Run**: `npm test`

### 3. E2E Tests (Playwright)
- **Location**: `e2e/`
- **Purpose**: Test complete user workflows
- **Run**: `npm run test:e2e`

## Commands

```bash
# Run all unit/integration tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage

# Run E2E tests
npm run test:e2e

# Run E2E tests with UI
npm run test:e2e:ui
```

## Test Coverage
- ✅ Utility functions
- ✅ CMS service layer
- ✅ Core components (Navbar, Loading)
- ✅ Product filtering and pagination
- ✅ Navigation flows
- ✅ Error handling

## CI/CD Integration
Tests are configured to run in CI environments with proper retries and parallel execution.

## Best Practices
- Mock external dependencies (Sanity, Next.js router)
- Test user interactions, not implementation details
- Maintain high test coverage for critical paths
- Use descriptive test names and organize by feature