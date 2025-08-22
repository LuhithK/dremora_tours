import Image from 'next/image'
import Link from 'next/link'
import { Clock, MapPin, Users, Star, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { TourPackage } from '@/lib/data/packages'
import { formatPrice, formatDuration } from '@/lib/utils'

interface PackageCardProps {
  package: TourPackage
  className?: string
}

export default function PackageCard({ package: pkg, className }: PackageCardProps) {
  const hasDiscount = pkg.originalPrice && pkg.originalPrice.usd > pkg.price.usd

  return (
    <Card className={`group overflow-hidden hover:shadow-xl transition-all duration-300 ${className}`}>
      <CardHeader className="p-0">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={pkg.images.hero}
            alt={pkg.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
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
            {hasDiscount && (
              <Badge className="bg-red-500 text-white">
                Save {formatPrice(pkg.originalPrice!.usd - pkg.price.usd)}
              </Badge>
            )}
          </div>
          
          {/* Duration */}
          <div className="absolute bottom-4 left-4">
            <div className="flex items-center gap-1 text-white text-sm font-medium">
              <Clock className="h-4 w-4" />
              {formatDuration(pkg.duration)}
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <MapPin className="h-4 w-4" />
            {pkg.region}
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <Users className="h-4 w-4" />
            {pkg.groupSize.min}-{pkg.groupSize.max} people
          </div>
        </div>
        
        <h3 className="font-serif text-xl font-semibold text-dark mb-2 group-hover:text-primary transition-colors">
          {pkg.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-2 font-medium">
          {pkg.subtitle}
        </p>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {pkg.description}
        </p>
        
        {/* Themes */}
        <div className="flex flex-wrap gap-1 mb-4">
          {pkg.theme.slice(0, 3).map((theme) => (
            <Badge key={theme} variant="secondary" className="text-xs">
              {theme}
            </Badge>
          ))}
          {pkg.theme.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{pkg.theme.length - 3} more
            </Badge>
          )}
        </div>
        
        {/* Highlights */}
        <div className="mb-6">
          <ul className="text-sm text-gray-600 space-y-1">
            {pkg.highlights.slice(0, 2).map((highlight, index) => (
              <li key={index} className="flex items-start gap-2">
                <Star className="h-3 w-3 text-accent mt-0.5 flex-shrink-0" />
                <span className="line-clamp-1">{highlight}</span>
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
          
          <Button asChild className="group/btn">
            <Link href={`/packages/${pkg.slug}`}>
              View Details
              <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}