import { Metadata } from 'next'
import { headers } from 'next/headers'
import { getServerApolloClient } from '@/lib/apollo-client'
import { GET_ARRANGEMENTS } from '@/lib/queries'
import { ArrangementsData } from '@/lib/types'
import Header from '../components/Header'
import ArrangementCard from '../components/ArrangementCard'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Arrangements | Florist',
  description: 'Browse our arrangements.',
}

async function getArrangements() {
  try {
    const requestHeaders = await headers()
    const apolloClient = getServerApolloClient(requestHeaders)
    const { data } = await apolloClient.query<ArrangementsData>({
      query: GET_ARRANGEMENTS,
      variables: { first: 50 },
      fetchPolicy: 'cache-first',
    })
    return data?.nodeArrangements?.nodes || []
  } catch (error) {
    console.error('Error fetching arrangements:', error)
    return []
  }
}

export default async function ArrangementsPage() {
  const items = await getArrangements()

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="bg-gradient-to-br from-fuchsia-900 via-fuchsia-800 to-fuchsia-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Arrangements
            </h1>
            <p className="text-xl text-fuchsia-100 max-w-3xl mx-auto">
              Explore our arrangements.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">No Arrangements Yet</h2>
              <p className="text-gray-500">
                Arrangements will appear here once content is imported.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item) => (
                <ArrangementCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
