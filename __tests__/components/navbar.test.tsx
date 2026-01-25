import { render, screen, fireEvent } from '@testing-library/react'
import { Navbar } from '../../components/navbar'

describe('Navbar', () => {
  it('renders navigation links', () => {
    render(<Navbar />)
    
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('Products')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders logo and company name', () => {
    render(<Navbar />)
    
    expect(screen.getByText('Maharishi Atreya')).toBeInTheDocument()
  })

  it('toggles mobile menu', () => {
    render(<Navbar />)
    
    const menuButton = screen.getByLabelText('Open menu')
    fireEvent.click(menuButton)
    
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()
  })

  it('renders CTA button', () => {
    render(<Navbar />)
    
    expect(screen.getByText('Request Inquiry')).toBeInTheDocument()
  })
})