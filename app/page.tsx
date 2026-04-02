import { getClient } from '@/lib/drupal-client'
import HomepageRenderer from './components/HomepageRenderer'
import SetupGuide from './components/SetupGuide'
import ContentSetupGuide from './components/ContentSetupGuide'
import { Metadata } from 'next'
import { checkConfiguration } from '../lib/config-check'

// Enable ISR with 1 hour revalidation
export const revalidate = 3600
export const dynamic = 'force-dynamic'



export async function generateMetadata(): Promise<Metadata> {
  const title = 'Petal & Stem Florist — Beautiful Blooms for Every Moment'
  const description = 'Artisan floral design in Portland since 2008. Stunning arrangements for weddings, events, and everyday occasions using locally sourced seasonal blooms.'

  return {
    title,
    description,
    keywords: ['Florist', 'Floral Arrangements', 'Wedding Flowers', 'Bouquets', 'Portland Florist', 'Flower Delivery'],
    openGraph: {
      title: `${title} - Petal & Stem`,
      description,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} - Petal & Stem`,
      description,
    },
  }
}

export default async function Home() {
  // Check if the app is properly configured
  const configStatus = checkConfiguration()

  if (!configStatus.isConfigured) {
    return <SetupGuide missingVars={configStatus.missingVars} />
  }

  const client = getClient()
  const homepageContent = await client.getEntryByPath('/') as any

  // Check if connected but no content exists - show content import guide
  if (!homepageContent) {
    const drupalBaseUrl = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL
    return <ContentSetupGuide drupalBaseUrl={drupalBaseUrl} />
  }

  return <HomepageRenderer homepageContent={homepageContent} />
}
