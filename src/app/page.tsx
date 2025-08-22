import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star, Users, Shield, Award, Clock, MapPin, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { getFeaturedPackages } from '@/lib/data/packages'
import PackageCard from '@/components/packages/PackageCard'
import TestimonialCarousel from '@/components/home/TestimonialCarousel'
import QuickSearch from '@/components/home/QuickSearch'

const whyChooseUs = [
  {
    icon: Shield,
    title: 'Licensed & Trusted',
    description: 'Fully licensed by Sri Lanka Tourism Development Authority with 15+ years of experience'
  },
  {
    icon: Users,
    title: 'Expert Local Guides',
    description: 'Professional English-speaking guides with deep knowledge of Sri Lankan culture and history'
  },
  {
    icon: Award,
    title: 'Tailored Experiences',
    description: 'Customized itineraries designed to match your interests, budget, and travel style'
  }
]

export default function HomePage() {
  const featuredPackages = getFeaturedPackages()

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg"
            alt="Beautiful Sri Lankan landscape with ancient temple"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover the Pearl of the
            <span className="block text-accent">Indian Ocean</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Experience authentic Sri Lankan culture, pristine beaches, and breathtaking landscapes 
            with our expertly crafted tours
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-4" asChild>
              <Link href="/packages">
                Explore Packages
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
              <a href="https://wa.me/94771234567?text=Hi%20Dremora%20Tours%2C%20I%27d%20like%20to%20plan%20my%20trip%20to%20Sri%20Lanka">
                Plan My Trip
              </a>
            </Button>
          </div>
          
          {/* Quick Search */}
          <QuickSearch />
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark mb-4">
              Featured Experiences
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked tours showcasing the best of Sri Lanka's culture, nature, and adventure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredPackages.map((pkg) => (
              <PackageCard key={pkg.id} package={pkg} />
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <Link href="/packages">
                View All Packages
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark mb-4">
              Why Choose Dremora Tours
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your trusted partner for authentic Sri Lankan adventures
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark mb-4">
              What Our Travelers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real experiences from real travelers who discovered Sri Lanka with us
            </p>
          </div>
          
          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Ready to Explore Sri Lanka?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Let our local experts create your perfect Sri Lankan adventure. 
            Get a personalized itinerary within 24 hours.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4" asChild>
              <Link href="/contact">
                Get Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary" asChild>
              <a href="https://wa.me/94771234567?text=Hi%20Dremora%20Tours%2C%20I%27d%20like%20to%20get%20a%20custom%20quote%20for%20my%20Sri%20Lanka%20trip">
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            "name": "Dremora Tours",
            "description": "Licensed Sri Lankan tour operator offering authentic travel experiences",
            "url": "https://dremoratours.com",
            "telephone": "+94771234567",
            "email": "info@dremoratours.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Galle Road",
              "addressLocality": "Colombo",
              "postalCode": "00300",
              "addressCountry": "LK"
            },
            "sameAs": [
              "https://facebook.com/dremoratours",
              "https://instagram.com/dremoratours"
            ]
          })
        }}
      />
    </>
  )
}