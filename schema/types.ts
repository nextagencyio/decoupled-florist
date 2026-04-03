// Auto-generated TypeScript types from Drupal GraphQL schema.
// Run `decoupled-cli schema sync` to regenerate.

export interface NodeArrangement {
  id: string;
  arrangementSize: string;
  availability: string;
  bestFor: string;
  body: { value: string; summary?: string };
  flowerTypes: string[];
  image: { url: string; alt: string; width: number; height: number };
  path: string;
  price: string;
  title: string;
}

export interface NodeHomepage {
  id: string;
  ctaDescription: { value: string };
  ctaPrimary: string;
  ctaSecondary: string;
  ctaTitle: string;
  featuredItemsTitle: string;
  heroDescription: { value: string };
  heroSubtitle: string;
  heroTitle: string;
  path: string;
  statsItems: any[];
  title: string;
}

export interface ParagraphStatItem {
  id: string;
  label: string;
  number: string;
}

export interface NodeOccasion {
  id: string;
  body: { value: string; summary?: string };
  consultationIncluded: boolean;
  image: { url: string; alt: string; width: number; height: number };
  leadTime: string;
  path: string;
  startingPrice: string;
  summary: string;
  title: string;
}

export interface NodePage {
  id: string;
  body: { value: string; summary?: string };
  path: string;
  title: string;
}

export interface NodeTestimonial {
  id: string;
  body: { value: string; summary?: string };
  clientLocation: string;
  clientName: string;
  occasionType: string;
  path: string;
  photo: { url: string; alt: string; width: number; height: number };
  rating: number;
  title: string;
}
