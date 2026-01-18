import '@testing-library/jest-dom'

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
    }
  },
  useSearchParams() {
    return new URLSearchParams()
  },
}))

// Mock Sanity client
jest.mock('./lib/sanity', () => ({
  client: {
    fetch: jest.fn(),
  },
  urlFor: jest.fn(() => ({ url: () => '/mock-image.jpg' })),
}))