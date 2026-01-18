import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { sanityConfig } from './env'

export const client = createClient({
  projectId: sanityConfig.projectId || 'your-project-id',
  dataset: sanityConfig.dataset,
  useCdn: sanityConfig.useCdn,
  token: sanityConfig.token,
  apiVersion: '2024-01-01',
})

const builder = imageUrlBuilder(client)

export function urlForImage(source: any) {
  return builder.image(source).auto('format').fit('max')
}