import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('loads and displays hero section', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Petal.*Stem/)
    // Hero section should be visible with the title from Drupal
    const hero = page.locator('section').first()
    await expect(hero).toBeVisible()
  })

  test('displays navigation links', async ({ page }) => {
    await page.goto('/')
    const nav = page.getByRole('navigation')
    await expect(nav.getByRole('link', { name: 'Arrangements' })).toBeVisible()
    await expect(nav.getByRole('link', { name: 'Occasions' })).toBeVisible()
    await expect(nav.getByRole('link', { name: 'About' })).toBeVisible()
  })

  test('displays stats section', async ({ page }) => {
    await page.goto('/')
    // Stats from the homepage content (850+, 18, 25,000+, 4.9)
    await expect(page.getByText('850+')).toBeVisible()
    await expect(page.getByText('Weddings Designed')).toBeVisible()
  })
})

test.describe('Arrangements', () => {
  test('listing page shows arrangement cards', async ({ page }) => {
    await page.goto('/arrangements')
    await expect(page.getByRole('heading', { name: 'Arrangements', level: 1 })).toBeVisible()
    await expect(page.getByText('Garden Romance')).toBeVisible()
    await expect(page.getByText('Wild Meadow')).toBeVisible()
    await expect(page.getByText('Modern Luxe')).toBeVisible()
  })

  test('detail page loads with content', async ({ page }) => {
    await page.goto('/arrangements/garden-romance')
    await expect(page.getByRole('heading', { name: 'Garden Romance' })).toBeVisible()
    // Should have back link
    await expect(page.getByText('Back to Arrangements')).toBeVisible()
  })
})

test.describe('Occasions', () => {
  test('listing page shows occasion cards', async ({ page }) => {
    await page.goto('/occasions')
    await expect(page.getByRole('heading', { name: 'Occasions', level: 1 })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Wedding Flowers' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Corporate Events' })).toBeVisible()
  })

  test('detail page loads with content', async ({ page }) => {
    await page.goto('/occasions/wedding-flowers')
    await expect(page.getByRole('heading', { name: 'Wedding Flowers' })).toBeVisible()
    await expect(page.getByText('Back to Occasions')).toBeVisible()
  })
})

test.describe('Testimonials', () => {
  test('listing page shows testimonial cards', async ({ page }) => {
    await page.goto('/testimonials')
    await expect(page.getByRole('heading', { name: 'Testimonials', level: 1 })).toBeVisible()
    // Check for testimonial content
    await expect(page.getByText('Our Wedding Was a Floral Dream')).toBeVisible()
  })

  test('detail page loads with content', async ({ page }) => {
    await page.goto('/testimonials/martinez-wedding')
    await expect(page.getByRole('heading', { name: /Floral Dream/ })).toBeVisible()
    await expect(page.getByText('Back to Testimonials')).toBeVisible()
  })
})

test.describe('Static pages', () => {
  test('contact page loads', async ({ page }) => {
    await page.goto('/contact')
    await expect(page.getByRole('heading', { name: 'Contact Us', level: 1 })).toBeVisible()
  })

  test('about page loads', async ({ page }) => {
    await page.goto('/about')
    await expect(page).toHaveTitle(/About/)
  })
})

test.describe('Navigation', () => {
  test('can navigate from homepage to arrangements', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: /arrangements/i }).first().click()
    await expect(page).toHaveURL(/\/arrangements/)
    await expect(page.getByRole('heading', { name: 'Arrangements', level: 1 })).toBeVisible()
  })

  test('can navigate from listing to detail and back', async ({ page }) => {
    await page.goto('/arrangements')
    await page.getByText('Garden Romance').first().click()
    await expect(page).toHaveURL(/\/arrangements\/garden-romance/)
    await page.getByText('Back to Arrangements').click()
    await expect(page).toHaveURL(/\/arrangements/)
  })
})
