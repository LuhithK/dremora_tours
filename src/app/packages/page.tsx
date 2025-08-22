import { Suspense } from 'react'
import { Metadata } from 'next'
import PackagesGrid from '@/components/packages/PackagesGrid'
import PackageFilters from '@/components/packages/PackageFilters'
import { tourPackages } from '@/lib/data/packages'

export const metadata: Metadata = {
  title: 'Tour Packages - Explore Sri Lanka',
  description: 'Browse our collection of carefully crafted Sri Lankan tour packages. From cultural tours to beach holidays, wildlife safaris to hill country adventures.',
  keywords: ['Sri Lanka tour packages', 'travel packages', 'holiday packages', 'cultural tours', 'beach holidays'],
}

interface SearchParams {
  region?: string
  theme?: string
  duration?: string
  budget?: string
  sort?: string
  search?: string
}

interface PackagesPageProps {
  searchParams: SearchParams
}

export default function PackagesPage({ searchParams }: PackagesPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Sri Lanka Tour Packages
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Discover our handpicked collection of authentic Sri Lankan experiences, 
              from ancient temples to pristine beaches
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Results */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <Suspense fallback={<div>Loading filters...</div>}>
                <PackageFilters />
              </Suspense>
            </div>
            
            {/* Results Grid */}
            <div className="lg:col-span-3">
              <Suspense fallback={<div>Loading packages...</div>}>
                <PackagesGrid searchParams={searchParams} />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Sri Lanka Tour Packages",
            "description": "Collection of Sri Lankan tour packages offered by Dremora Tours",
            "numberOfItems": tourPackages.length,
            "itemListElement": tourPackages.map((pkg, index) => ({
              "@type": "TourPackage",
              "position": index + 1,
              "name": pkg.title,
              "description": pkg.description,
              "url": `https://dremoratours.com/packages/${pkg.slug}`,
              "offers": {
                "@type": "Offer",
                "price": pkg.price.usd,
                "priceCurrency": "USD"
              }
            }))
          })
        }}
      />
    </div>
  )
}