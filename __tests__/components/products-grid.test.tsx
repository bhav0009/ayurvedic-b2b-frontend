import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ProductsGrid } from '../../components/products/products-grid'

// Mock the CMS functions
jest.mock('../../lib/cms', () => ({
  getProducts: jest.fn(() => Promise.resolve([
    {
      id: '1',
      name: 'Test Product 1',
      category: 'herbs',
      shortDescription: 'Test description',
      image: '/test.jpg'
    },
    {
      id: '2', 
      name: 'Test Product 2',
      category: 'oils',
      shortDescription: 'Test description 2',
      image: '/test2.jpg'
    }
  ])),
  getCategories: jest.fn(() => Promise.resolve([
    { id: 'herbs', name: 'Herbs', description: 'Test herbs' },
    { id: 'oils', name: 'Oils', description: 'Test oils' }
  ]))
}))

describe('ProductsGrid', () => {
  it('renders products after loading', async () => {
    render(<ProductsGrid />)
    
    expect(screen.getByText('Loading products...')).toBeInTheDocument()
    
    await waitFor(() => {
      expect(screen.getByText('Test Product 1')).toBeInTheDocument()
      expect(screen.getByText('Test Product 2')).toBeInTheDocument()
    })
  })

  it('filters products by category', async () => {
    const user = userEvent.setup()
    render(<ProductsGrid />)
    
    await waitFor(() => {
      expect(screen.getByText('Test Product 1')).toBeInTheDocument()
    })
    
    const herbsButton = screen.getByText('Herbs')
    await user.click(herbsButton)
    
    await waitFor(() => {
      expect(screen.getByText('Test Product 1')).toBeInTheDocument()
      expect(screen.queryByText('Test Product 2')).not.toBeInTheDocument()
    })
  })

  it('shows product count', async () => {
    render(<ProductsGrid />)
    
    await waitFor(() => {
      expect(screen.getByText(/Showing 2 products/)).toBeInTheDocument()
    })
  })
})