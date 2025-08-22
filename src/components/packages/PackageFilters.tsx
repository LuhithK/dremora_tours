'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useCallback } from 'react'
import { X, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Slider } from '@/components/ui/slider'
import { Label } from '@/components/ui/label'

const regions = [
  'Central',
  'Southern',
  'Western',
  'Northern',
  'Eastern',
  'Hill Country',
  'Multiple'
]

const themes = [
  'Cultural',
  'Beach',
  'Wildlife',
  'Adventure',
  'Scenic',
  'Historical',
  'Religious',
  'Nature',
  'Relaxation'
]

const durations = [
  { label: '1-3 Days', value: '1-3' },
  { label: '4-7 Days', value: '4-7' },
  { label: '8-14 Days', value: '8-14' },
  { label: '15+ Days', value: '15-30' }
]

export default function PackageFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '')
  const [selectedRegions, setSelectedRegions] = useState<string[]>(
    searchParams.get('region')?.split(',') || []
  )
  const [selectedThemes, setSelectedThemes] = useState<string[]>(
    searchParams.get('theme')?.split(',') || []
  )
  const [selectedDurations, setSelectedDurations] = useState<string[]>(
    searchParams.get('duration')?.split(',') || []
  )
  const [priceRange, setPriceRange] = useState<number[]>([
    parseInt(searchParams.get('minPrice') || '0'),
    parseInt(searchParams.get('maxPrice') || '2500')
  ])

  const updateFilters = useCallback(() => {
    const params = new URLSearchParams()
    
    if (searchTerm) params.set('search', searchTerm)
    if (selectedRegions.length) params.set('region', selectedRegions.join(','))
    if (selectedThemes.length) params.set('theme', selectedThemes.join(','))
    if (selectedDurations.length) params.set('duration', selectedDurations.join(','))
    if (priceRange[0] > 0 || priceRange[1] < 2500) {
      params.set('minPrice', priceRange[0].toString())
      params.set('maxPrice', priceRange[1].toString())
    }
    
    router.push(`/packages?${params.toString()}`)
  }, [searchTerm, selectedRegions, selectedThemes, selectedDurations, priceRange, router])

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedRegions([])
    setSelectedThemes([])
    setSelectedDurations([])
    setPriceRange([0, 2500])
    router.push('/packages')
  }

  const hasActiveFilters = searchTerm || selectedRegions.length || selectedThemes.length || 
    selectedDurations.length || priceRange[0] > 0 || priceRange[1] < 2500

  return (
    <div className="space-y-6">
      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Search Packages</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search tours..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && updateFilters()}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Regions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Regions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {regions.map((region) => (
            <div key={region} className="flex items-center space-x-2">
              <Checkbox
                id={`region-${region}`}
                checked={selectedRegions.includes(region)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedRegions([...selectedRegions, region])
                  } else {
                    setSelectedRegions(selectedRegions.filter(r => r !== region))
                  }
                }}
              />
              <Label htmlFor={`region-${region}`} className="text-sm">
                {region}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Themes */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Themes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {themes.map((theme) => (
            <div key={theme} className="flex items-center space-x-2">
              <Checkbox
                id={`theme-${theme}`}
                checked={selectedThemes.includes(theme)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedThemes([...selectedThemes, theme])
                  } else {
                    setSelectedThemes(selectedThemes.filter(t => t !== theme))
                  }
                }}
              />
              <Label htmlFor={`theme-${theme}`} className="text-sm">
                {theme}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Duration */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Duration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {durations.map((duration) => (
            <div key={duration.value} className="flex items-center space-x-2">
              <Checkbox
                id={`duration-${duration.value}`}
                checked={selectedDurations.includes(duration.value)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedDurations([...selectedDurations, duration.value])
                  } else {
                    setSelectedDurations(selectedDurations.filter(d => d !== duration.value))
                  }
                }}
              />
              <Label htmlFor={`duration-${duration.value}`} className="text-sm">
                {duration.label}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Price Range */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Price Range (USD)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={2500}
            min={0}
            step={50}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </CardContent>
      </Card>

      {/* Apply/Clear Buttons */}
      <div className="space-y-2">
        <Button onClick={updateFilters} className="w-full">
          Apply Filters
        </Button>
        {hasActiveFilters && (
          <Button onClick={clearFilters} variant="outline" className="w-full">
            <X className="h-4 w-4 mr-2" />
            Clear All
          </Button>
        )}
      </div>
    </div>
  )
}