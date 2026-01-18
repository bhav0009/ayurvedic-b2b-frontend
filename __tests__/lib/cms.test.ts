import { getProducts, getCategories, getCertifications } from '../../lib/cms'
import { client } from '../../lib/sanity'

jest.mock('../../lib/sanity')

describe('CMS Service', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('getProducts', () => {
    it('should return products from Sanity when available', async () => {
      const mockProducts = [{ _id: '1', name: 'Test Product' }]
      ;(client.fetch as jest.Mock).mockResolvedValue(mockProducts)

      const result = await getProducts()
      expect(result).toEqual(mockProducts)
    })

    it('should fallback to static data when Sanity fails', async () => {
      ;(client.fetch as jest.Mock).mockRejectedValue(new Error('Network error'))

      const result = await getProducts()
      expect(Array.isArray(result)).toBe(true)
      expect(result.length).toBeGreaterThan(0)
    })
  })

  describe('getCategories', () => {
    it('should return categories from Sanity when available', async () => {
      const mockCategories = [{ _id: '1', name: 'Test Category' }]
      ;(client.fetch as jest.Mock).mockResolvedValue(mockCategories)

      const result = await getCategories()
      expect(result).toEqual(mockCategories)
    })
  })

  describe('getCertifications', () => {
    it('should return certifications from Sanity when available', async () => {
      const mockCertifications = [{ _id: '1', name: 'Test Cert' }]
      ;(client.fetch as jest.Mock).mockResolvedValue(mockCertifications)

      const result = await getCertifications()
      expect(result).toEqual(mockCertifications)
    })
  })
})