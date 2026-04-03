
export interface ImageVariation {
  name: string
  url: string
}

export interface DrupalImage {
  url: string
  alt?: string
  width?: number
  height?: number
  variations?: ImageVariation[]
}

export interface DrupalNode {
  __typename?: string
  id: string
  title: string
  path?: string
  created?: {
    timestamp: number
  }
  changed?: {
    timestamp: number
  }
}

export interface DrupalPage extends DrupalNode {
  body?: {
    processed: string
  }
}

export interface DrupalStatItem {
  id: string
  number?: string
  label?: string
}

export interface DrupalHomepage extends DrupalNode {
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: {
    processed: string
  }
  statsItems?: DrupalStatItem[]
  featuredItemsTitle?: string
  ctaTitle?: string
  ctaDescription?: {
    processed: string
  }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface HomepageData {
  nodeHomepages: {
    nodes: DrupalHomepage[]
  }
}

export interface DrupalArrangement extends DrupalNode {
  body?: { processed: string; summary?: string }
  price?: string
  flowerTypes?: string[]
  arrangementSize?: string
  availability?: string
  bestFor?: string
  image?: DrupalImage
}

export interface ArrangementsData {
  nodeArrangements: {
    nodes: DrupalArrangement[]
  }
}

export interface DrupalOccasion extends DrupalNode {
  body?: { processed: string; summary?: string }
  summary?: string
  startingPrice?: string
  leadTime?: string
  consultationIncluded?: boolean
  image?: DrupalImage
}

export interface OccasionsData {
  nodeOccasions: {
    nodes: DrupalOccasion[]
  }
}

export interface DrupalTestimonial extends DrupalNode {
  body?: { processed: string; summary?: string }
  clientName?: string
  clientLocation?: string
  rating?: number
  occasionType?: string
  photo?: DrupalImage
}

export interface TestimonialsData {
  nodeTestimonials: {
    nodes: DrupalTestimonial[]
  }
}
