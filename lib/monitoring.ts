// Performance monitoring
export function trackPageView(url: string) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
      page_path: url,
    })
  }
}

// Error tracking
export function trackError(error: Error, context?: Record<string, any>) {
  console.error('Error tracked:', error, context)
}

// Custom event tracking
export function trackEvent(action: string, category: string, label?: string) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
    })
  }
}

// Performance metrics
export function trackPerformance(name: string, duration: number) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'timing_complete', {
      name,
      value: Math.round(duration),
    })
  }
}

// Web Vitals tracking
export function trackWebVitals(metric: any) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', metric.name, {
      event_category: 'Web Vitals',
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_label: metric.id,
      non_interaction: true,
    })
  }
}

// Security event tracking
export function trackSecurityEvent(event: string, details?: Record<string, any>) {
  console.warn('Security event:', event, details)
}