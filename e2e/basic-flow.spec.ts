import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('should load homepage successfully', async ({ page }) => {
    await page.goto('/')
    
    await expect(page.getByText('Maharishi Atreya')).toBeVisible()
    await expect(page.getByText('Premium Ayurvedic Products')).toBeVisible()
  })

  test('should navigate to products page', async ({ page }) => {
    await page.goto('/')
    
    await page.getByText('Products').click()
    await expect(page).toHaveURL('/products')
    await expect(page.getByText('Premium Ayurvedic Products')).toBeVisible()
  })
})

test.describe('Products Page', () => {
  test('should filter products by category', async ({ page }) => {
    await page.goto('/products')
    
    await page.getByText('Herbs').click()
    await expect(page.getByText(/in herbs/)).toBeVisible()
  })

  test('should show product pagination', async ({ page }) => {
    await page.goto('/products')
    
    // Check if pagination appears (only if more than 8 products)
    const nextButton = page.getByText('Next')
    if (await nextButton.isVisible()) {
      await nextButton.click()
      await expect(page.getByText('2')).toBeVisible()
    }
  })
})

test.describe('Contact Page', () => {
  test('should load contact form', async ({ page }) => {
    await page.goto('/contact')
    
    await expect(page.getByText('Get in Touch')).toBeVisible()
    await expect(page.getByRole('textbox', { name: /name/i })).toBeVisible()
  })
})