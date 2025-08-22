import Image from 'next/image'
import Link from 'next/link'
import { Clock, MapPin, Users, Star, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { TourPackage } from '@/lib/data/packages'
import { formatPrice, formatDuration } from '@/lib/utils'

interface PackageListItemProps {
  package: TourPackage
}

export default function PackageListItem({ package: pkg }: PackageListItemProps) {
  const hasDiscount = pkg.originalPrice && pkg.originalPrice.usd > pkg.price.usd

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardContent className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {/* Image */}
          <div className="relative aspect-[4/3] md:aspect-square">
            <Image
              src={pkg.images.hero}
              alt={pkg.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              {pkg.featured && (
                <Badge className="bg-accent text-white">Featured</Badge>
              )}
              {pkg.popular && (
                <Badge className="bg-primary text-white">Popular</Badge>
              )}
            </div>
          </div>
          
          {/* Content */}
          <div className="md:col-span-2 p-6">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {pkg.region}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {formatDuration(pkg.duration)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {pkg.groupSize.min}-{pkg.groupSize.max} people
                  </div>
                </div>
              </div>
              
              {/* Title and Description */}
              <div className="mb-4">
                <h3 className="font-serif text-xl font-semibold text-dark mb-2">
                  {pkg.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2 font-medium">
                  {pkg.subtitle}
                </p>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {pkg.description}
                </p>
              </div>
              
              {/* Themes */}
              <div className="flex flex-wrap gap-1 mb-4">
                {pkg.theme.map((theme) => (
                  <Badge key={theme} variant="secondary" className="text-xs">
                    {theme}
                  </Badge>
                ))}
              </div>
              
              {/* Highlights */}
              <div className="mb-6 flex-grow">
                <ul className="text-sm text-gray-600 space-y-1">
                  {pkg.highlights.slice(0, 3).map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Star className="h-3 w-3 text-accent mt-0.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Price and CTA */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-primary">
                      {formatPrice(pkg.price.usd)}
                    </span>
                    {hasDiscount && (
                      <span className="text-sm text-gray-500 line-through">
                        {formatPrice(pkg.originalPrice!.usd)}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500">per person</p>
                </div>
                
                <Button asChild>
                  <Link href={`/packages/${pkg.slug}`}>
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}