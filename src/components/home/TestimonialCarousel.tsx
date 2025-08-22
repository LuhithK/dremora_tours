'use client'

import { useState, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    country: 'United Kingdom',
    rating: 5,
    text: 'Absolutely incredible experience! Dremora Tours showed us the real Sri Lanka. Our guide was knowledgeable and the itinerary was perfectly planned. The cultural sites were breathtaking.',
    package: 'Cultural Triangle & Kandy',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
  },
  {
    id: 2,
    name: 'Michael Chen',
    country: 'Australia',
    rating: 5,
    text: 'The wildlife safari was beyond our expectations. We saw leopards, elephants, and countless birds. The accommodation was excellent and the team was very professional.',
    package: 'Wildlife Safari Circuit',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg'
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    country: 'United States',
    rating: 5,
    text: 'Perfect honeymoon trip! The beaches were pristine, the hill country was magical, and the train ride was unforgettable. Thank you for making our trip so special.',
    package: 'Grand Sri Lanka Tour',
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg'
  },
  {
    id: 4,
    name: 'Raj Patel',
    country: 'India',
    rating: 5,
    text: 'Excellent service from start to finish. The local insights and hidden gems they showed us made this trip truly unique. Highly recommend for anyone visiting Sri Lanka.',
    package: 'South Coast Beaches',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg'
  }
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>
                  
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-dark">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.country}</p>
                      <p className="text-xs text-primary font-medium">{testimonial.package}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation */}
      <div className="flex justify-center gap-4 mt-8">
        <Button
          variant="outline"
          size="icon"
          onClick={prevTestimonial}
          className="rounded-full"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <div className="flex gap-2 items-center">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
        
        <Button
          variant="outline"
          size="icon"
          onClick={nextTestimonial}
          className="rounded-full"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}