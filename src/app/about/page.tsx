import { Metadata } from 'next'
import Image from 'next/image'
import { Award, Users, Globe, Leaf, Shield, Heart } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'About Us - Dremora Tours',
  description: 'Learn about Dremora Tours, Sri Lanka\'s trusted travel partner. Our story, team, certifications, and commitment to sustainable tourism.',
}

const values = [
  {
    icon: Heart,
    title: 'Authentic Experiences',
    description: 'We believe in showing you the real Sri Lanka, beyond the tourist facade, through genuine cultural interactions and local insights.'
  },
  {
    icon: Shield,
    title: 'Trust & Safety',
    description: 'Your safety and satisfaction are our top priorities. We maintain the highest standards in all our operations.'
  },
  {
    icon: Leaf,
    title: 'Sustainable Tourism',
    description: 'We are committed to responsible tourism that benefits local communities and preserves Sri Lanka\'s natural heritage.'
  },
  {
    icon: Users,
    title: 'Personal Service',
    description: 'Every traveler is unique. We tailor each experience to match your interests, preferences, and travel style.'
  }
]

const certifications = [
  {
    title: 'Sri Lanka Tourism Development Authority',
    description: 'Licensed tour operator (License #TO-123456)',
    icon: Award
  },
  {
    title: 'Association of Small & Medium Tourism Enterprises',
    description: 'Certified member promoting sustainable tourism',
    icon: Globe
  },
  {
    title: 'Travelife Certified',
    description: 'Committed to sustainable and responsible tourism practices',
    icon: Leaf
  }
]

const team = [
  {
    name: 'Samantha Perera',
    role: 'Founder & CEO',
    bio: 'With over 15 years in Sri Lankan tourism, Samantha founded Dremora Tours to share her passion for authentic travel experiences.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
  },
  {
    name: 'Rohan Silva',
    role: 'Head of Operations',
    bio: 'Former wildlife guide turned operations expert, Rohan ensures every tour runs smoothly and safely.',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg'
  },
  {
    name: 'Priya Jayawardena',
    role: 'Cultural Experience Curator',
    bio: 'Cultural anthropologist and local expert who designs our authentic cultural immersion experiences.',
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg'
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-primary text-white">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg"
            alt="Sri Lankan landscape"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 leading-relaxed">
            Born from a passion for Sri Lanka's incredible heritage and natural beauty, 
            Dremora Tours has been creating unforgettable experiences for travelers from around the world since 2009.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                To showcase the authentic beauty, rich culture, and warm hospitality of Sri Lanka 
                while creating meaningful connections between travelers and local communities.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe that travel should be transformative – not just for the places you visit, 
                but for the person you become through the journey.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg"
                alt="Local Sri Lankan community"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate people behind your Sri Lankan adventure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-primary font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-4">
              Licenses & Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your assurance of quality and responsible tourism
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <cert.icon className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Statement */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Our Commitment to Sustainability
          </h2>
          <p className="text-xl text-primary-100 mb-8 leading-relaxed">
            We believe that tourism should benefit everyone – travelers, local communities, and the environment. 
            That's why we're committed to sustainable practices that preserve Sri Lanka's natural beauty and 
            cultural heritage for future generations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="text-xl font-semibold mb-4">Environmental Responsibility</h3>
              <ul className="space-y-2 text-primary-100">
                <li>• Supporting eco-friendly accommodations</li>
                <li>• Promoting wildlife conservation</li>
                <li>• Minimizing plastic waste</li>
                <li>• Carbon offset programs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Community Impact</h3>
              <ul className="space-y-2 text-primary-100">
                <li>• Working with local guides and suppliers</li>
                <li>• Supporting community-based tourism</li>
                <li>• Fair wages and working conditions</li>
                <li>• Cultural preservation initiatives</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-6">
            Ready to Explore Sri Lanka with Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let our experienced team create your perfect Sri Lankan adventure
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="/contact">Get in Touch</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://wa.me/94771234567?text=Hi%20Dremora%20Tours%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20services">
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}