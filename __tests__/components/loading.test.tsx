import { render, screen } from '@testing-library/react'
import { Loading } from '../../components/loading'

describe('Loading', () => {
  it('renders default loading text', () => {
    render(<Loading />)
    
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('renders custom loading text', () => {
    render(<Loading text="Loading products..." />)
    
    expect(screen.getByText('Loading products...')).toBeInTheDocument()
  })

  it('renders spinner', () => {
    render(<Loading />)
    
    const spinner = document.querySelector('.animate-spin')
    expect(spinner).toBeInTheDocument()
  })
})