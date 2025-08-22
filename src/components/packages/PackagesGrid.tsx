'use client'

import { useState, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { Grid, List, SlidersHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { tourPackages, TourPackage } from '@/lib/data/packages'
import PackageCard from './PackageCard'
import PackageListItem from './PackageListItem'

interface SearchParams {
  region?: string
  theme?: string
  duration?: string
  budget?: string
  sort?: string
  search?: string
}

interface PackagesGridProps {
  searchParams: SearchParams
}

export default function PackagesGrid({ searchParams }: PackagesGridProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState(searchParams.sort || 'popularity')

  const filteredAndSortedPackages = useMemo(() => {
    let filtered = [...tourPackages]

    // Apply filters
    if (searchParams.region) {
      filtered = filtered.filter(pkg => 
        pkg.region.toLowerCase().includes(searchParams.region!.toLowerCase())
      )
    }

    if (searchParams.theme) {
      filtered = filtered.filter(pkg =>
        pkg.theme.some(theme => 
          theme.toLowerCase().includes(searchParams.theme!.toLowerCase())
        )
      )
    }

    if (searchParams.duration) {
      const [min, max] = searchParams.duration.split('-').map(Number)
      filtered = filtered.filter(pkg => {
        if (max) {
          return pkg.duration >= min && pkg.duration <= max
        }
        return pkg.duration >= min
      })
    }

    if (searchParams.budget) {
      const [min, max] = searchParams.budget.split('-').map(Number)
      filtered = filtered.filter(pkg => {
        if (max) {
          return pkg.price.usd >= min && pkg.price.usd <= max
        }
        return pkg.price.usd >= min
      })
    }

    if (searchParams.search) {
      const searchTerm = searchParams.search.toLowerCase()
      filtered = filtered.filter(pkg =>
        pkg.title.toLowerCase().includes(searchTerm) ||
        pkg.description.toLowerCase().includes(searchTerm) ||
        pkg.highlights.some(highlight => 
          highlight.toLowerCase().includes(searchTerm)
        )
      )
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price.usd - b.price.usd)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price.usd - a.price.usd)
        break
      case 'duration-short':
        filtered.sort((a, b) => a.duration - b.duration)
        break
      case 'duration-long':
        filtered.sort((a, b) => b.duration - a.duration)
        break
      case 'newest':
        filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        break
      case 'popularity':
      default:
        filtered.sort((a, b) => {
          if (a.featured && !b.featured) return -1
          if (!a.featured && b.featured) return 1
          if (a.popular && !b.popular) return -1
          if (!a.popular && b.popular) return 1
          return 0
        })
        break
    }

    return filtered
  }, [searchParams, sortBy])

  return (
    <div className="space-y-6">
      {/* Results Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-dark">
            {filteredAndSortedPackages.length} Package{filteredAndSortedPackages.length !== 1 ? 's' : ''} Found
          </h2>
          {Object.keys(searchParams).length > 0 && (
            <p className="text-gray-600 mt-1">
              Filtered results based on your preferences
            </p>
          )}
        </div>
        
        <div className="flex items-center gap-4">
          {/* Sort */}
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popularity">Most Popular</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="duration-short">Duration: Short to Long</SelectItem>
              <SelectItem value="duration-long">Duration: Long to Short</SelectItem>
              <SelectItem value="newest">Newest First</SelectItem>
            </SelectContent>
          </Select>
          
          {/* View Mode */}
          <div className="flex border rounded-lg">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('grid')}
              className="rounded-r-none"
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('list')}
              className="rounded-l-none"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Results */}
      {filteredAndSortedPackages.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg mb-4">No packages found matching your criteria</p>
          <Button variant="outline" onClick={() => window.location.href = '/packages'}>
            Clear Filters
          </Button>
        </div>
      ) : (
        <div className={
          viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'
            : 'space-y-6'
        }>
          {filteredAndSortedPackages.map((pkg) => (
            viewMode === 'grid' ? (
              <PackageCard key={pkg.id} package={pkg} />
            ) : (
              <PackageListItem key={pkg.id} package={pkg} />
            )
          ))}
        </div>
      )}
    </div>
  )
}