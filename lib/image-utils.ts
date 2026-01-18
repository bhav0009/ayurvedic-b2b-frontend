import { urlForImage } from './sanity'

// Image size presets
export const imageSizes = {
  thumbnail: { width: 150, height: 150 },
  card: { width: 400, height: 300 },
  hero: { width: 1200, height: 600 },
  full: { width: 1920, height: 1080 },
} as const

// Generate optimized image URL with size and quality
export function getOptimizedImageUrl(
  source: any,
  size: keyof typeof imageSizes = 'card',
  quality: number = 80
) {
  if (typeof source === 'string') {
    return source // Return static image URLs as-is
  }

  const { width, height } = imageSizes[size]
  
  return urlForImage(source)
    .width(width)
    .height(height)
    .quality(quality)
    .auto('format')
    .fit('crop')
    .crop('center')
    .url()
}

// Generate responsive image srcSet
export function getResponsiveSrcSet(source: any, quality: number = 80) {
  if (typeof source === 'string') {
    return undefined // No srcSet for static images
  }

  const sizes = [400, 600, 800, 1200]
  
  return sizes
    .map(width => {
      const url = urlForImage(source)
        .width(width)
        .quality(quality)
        .auto('format')
        .fit('max')
        .url()
      return `${url} ${width}w`
    })
    .join(', ')
}

// Get image dimensions from Sanity asset
export function getImageDimensions(source: any) {
  if (typeof source === 'string' || !source?.asset?._ref) {
    return { width: 400, height: 300 } // Default dimensions
  }

  // Extract dimensions from Sanity asset reference
  const ref = source.asset._ref
  const dimensions = ref.split('-')[2]
  
  if (dimensions) {
    const [width, height] = dimensions.split('x').map(Number)
    return { width, height }
  }

  return { width: 400, height: 300 }
}