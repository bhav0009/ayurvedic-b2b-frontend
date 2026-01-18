import { client } from './sanity'
import { products as staticProducts, categories as staticCategories, certifications as staticCertifications } from './data'

// Sanity queries
const PRODUCTS_QUERY = `*[_type == "product"]{
  _id,
  name,
  category,
  shortDescription,
  description,
  ingredients,
  benefits,
  usage,
  "image": image.asset->url
}`

const CATEGORIES_QUERY = `*[_type == "category"]{
  _id,
  name,
  description,
  icon
}`

const CERTIFICATIONS_QUERY = `*[_type == "certification"]{
  _id,
  name,
  description
}`

// Fetch functions with fallback to static data
export async function getProducts() {
  // Return static data immediately if no Sanity config
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return staticProducts
  }
  
  try {
    const products = await client.fetch(PRODUCTS_QUERY)
    return products.length > 0 ? products : staticProducts
  } catch (error) {
    console.warn('Failed to fetch products from Sanity, using static data:', error)
    return staticProducts
  }
}

export async function getCategories() {
  // Return static data immediately if no Sanity config
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return staticCategories
  }
  
  try {
    const categories = await client.fetch(CATEGORIES_QUERY)
    return categories.length > 0 ? categories : staticCategories
  } catch (error) {
    console.warn('Failed to fetch categories from Sanity, using static data:', error)
    return staticCategories
  }
}

export async function getCertifications() {
  try {
    const certifications = await client.fetch(CERTIFICATIONS_QUERY)
    return certifications.length > 0 ? certifications : staticCertifications
  } catch (error) {
    console.warn('Failed to fetch certifications from Sanity, using static data:', error)
    return staticCertifications
  }
}

export async function getProduct(id: string) {
  try {
    const product = await client.fetch(`*[_type == "product" && _id == $id][0]`, { id })
    return product || staticProducts.find(p => p.id === id)
  } catch (error) {
    console.warn('Failed to fetch product from Sanity, using static data:', error)
    return staticProducts.find(p => p.id === id)
  }
}