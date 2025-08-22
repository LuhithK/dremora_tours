'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search, MapPin, Calendar, DollarSign } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card } from '@/components/ui/card'

const destinations = [
  'Cultural Triangle',
  'Southern Coast',
  'Hill Country',
  'Western Province',
  'Eastern Coast',
  'Northern Province'
]

const budgetRanges = [
  { label: 'Under $500', value: '0-500' },
  { label: '$500 - $1000', value: '500-1000' },
  { label: '$1000 - $1500', value: '1000-1500' },
  { label: '$1500 - $2000', value: '1500-2000' },
  { label: 'Over $2000', value: '2000+' }
]

export default function QuickSearch() {
  const [destination, setDestination] = useState('')
  const [dates, setDates] = useState('')
  const [budget, setBudget] = useState('')
  const router = useRouter()

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (destination) params.set('region', destination)
    if (budget) params.set('budget', budget)
    if (dates) params.set('dates', dates)
    
    router.push(`/packages?${params.toString()}`)
  }

  return (
    <Card className="glass-effect p-6 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-white flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Destination
          </label>
          <Select value={destination} onValueChange={setDestination}>
            <SelectTrigger className="bg-white/90">
              <SelectValue placeholder="Where to?" />
            </SelectTrigger>
            <SelectContent>
              {destinations.map((dest) => (
                <SelectItem key={dest} value={dest.toLowerCase().replace(' ', '-')}>
                  {dest}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-white flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Travel Dates
          </label>
          <Input
            type="month"
            value={dates}
            onChange={(e) => setDates(e.target.value)}
            className="bg-white/90"
            placeholder="When?"
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-white flex items-center gap-2">
            <DollarSign className="h-4 w-4" />
            Budget
          </label>
          <Select value={budget} onValueChange={setBudget}>
            <SelectTrigger className="bg-white/90">
              <SelectValue placeholder="Budget range" />
            </SelectTrigger>
            <SelectContent>
              {budgetRanges.map((range) => (
                <SelectItem key={range.value} value={range.value}>
                  {range.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex items-end">
          <Button 
            onClick={handleSearch}
            className="w-full bg-accent hover:bg-accent/90 text-white"
            size="lg"
          >
            <Search className="h-4 w-4 mr-2" />
            Search Tours
          </Button>
        </div>
      </div>
    </Card>
  )
}