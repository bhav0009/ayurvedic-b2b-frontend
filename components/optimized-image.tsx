import Image from 'next/image'
import { urlForImage } from '@/lib/sanity'
import { getOptimizedImageUrl, getResponsiveSrcSet, getImageDimensions } from '@/lib/image-utils'

interface OptimizedImageProps {
  src: string | any // Sanity image object or URL string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  fill?: boolean
  sizes?: string
  quality?: number
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  fill = false,
  sizes,
  quality = 80,
}: OptimizedImageProps) {
  // Handle Sanity image objects with optimization
  const imageUrl = typeof src === 'string' 
    ? src 
    : getOptimizedImageUrl(src, 'card', quality)

  // Get responsive srcSet for Sanity images
  const srcSet = typeof src === 'string' ? undefined : getResponsiveSrcSet(src, quality)

  // Get image dimensions for Sanity images
  const dimensions = typeof src === 'string' 
    ? { width: width || 400, height: height || 300 }
    : getImageDimensions(src)

  if (fill) {
    return (
      <Image
        src={imageUrl}
        alt={alt}
        fill
        className={className}
        priority={priority}
        sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
      />
    )
  }

  return (
    <Image
      src={imageUrl}
      alt={alt}
      width={width || dimensions.width}
      height={height || dimensions.height}
      className={className}
      priority={priority}
      sizes={sizes}
      {...(srcSet && { srcSet })}
    />
  )
}