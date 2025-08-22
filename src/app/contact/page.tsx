import { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import ContactForm from '@/components/contact/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us - Dremora Tours',
  description: 'Get in touch with Dremora Tours. Contact our Sri Lankan travel experts for personalized tour planning and travel advice.',
}

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['+94 77 123 4567', '+94 11 234 5678'],
    action: 'tel:+94771234567'
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@dremoratours.com', 'bookings@dremoratours.com'],
    action: 'mailto:info@dremoratours.com'
  },
  {
    icon: MapPin,
    title: 'Address',
    details: ['123 Galle Road', 'Colombo 03, Sri Lanka'],
    action: 'https://maps.google.com/?q=123+Galle+Road+Colombo+03+Sri+Lanka'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Mon - Fri: 8:00 AM - 6:00 PM', 'Sat - Sun: 9:00 AM - 5:00 PM'],
    action: null
  }
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Ready to plan your Sri Lankan adventure? Get in touch with our travel experts
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-bold text-dark mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-600 mb-8">
                  Our friendly team is here to help you plan the perfect Sri Lankan experience. 
                  Contact us through any of the methods below.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-0 shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-dark mb-2">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-600 text-sm">
                              {info.action && idx === 0 ? (
                                <a 
                                  href={info.action}
                                  className="hover:text-primary transition-colors"
                                  target={info.action.startsWith('http') ? '_blank' : undefined}
                                  rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                                >
                                  {detail}
                                </a>
                              ) : (
                                detail
                              )}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <Card className="border-0 shadow-md bg-green-50">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-dark mb-2">Prefer WhatsApp?</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Get instant responses to your travel questions
                  </p>
                  <a
                    href="https://wa.me/94771234567?text=Hi%20Dremora%20Tours%2C%20I%27d%20like%20to%20inquire%20about%20your%20tour%20packages"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Chat on WhatsApp
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">Send us a Message</CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-dark mb-4">
              Visit Our Office
            </h2>
            <p className="text-xl text-gray-600">
              Located in the heart of Colombo, we're easy to find
            </p>
          </div>
          
          <div className="aspect-[16/9] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798467128!2d79.84731831477!3d6.914712994999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259684e2f8b7b%3A0x8c4b8b8b8b8b8b8b!2sGalle%20Road%2C%20Colombo!5e0!3m2!1sen!2slk!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dremora Tours Office Location"
            />
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "mainEntity": {
              "@type": "TravelAgency",
              "name": "Dremora Tours",
              "telephone": "+94771234567",
              "email": "info@dremoratours.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Galle Road",
                "addressLocality": "Colombo",
                "postalCode": "00300",
                "addressCountry": "LK"
              },
              "openingHours": [
                "Mo-Fr 08:00-18:00",
                "Sa-Su 09:00-17:00"
              ]
            }
          })
        }}
      />
    </div>
  )
}