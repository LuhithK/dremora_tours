import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/layout/WhatsAppFloat'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
})

export const metadata: Metadata = {
  title: {
    default: 'Dremora Tours - Discover Sri Lanka | Authentic Travel Experiences',
    template: '%s | Dremora Tours'
  },
  description: 'Explore Sri Lanka with Dremora Tours. Authentic cultural experiences, pristine beaches, wildlife safaris, and hill country adventures. Licensed tour operator serving travelers worldwide.',
  keywords: ['Sri Lanka tours', 'travel packages', 'cultural tours', 'beach holidays', 'wildlife safari', 'hill country'],
  authors: [{ name: 'Dremora Tours' }],
  creator: 'Dremora Tours',
  publisher: 'Dremora Tours',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dremoratours.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'si-LK': '/si-LK',
      'ta-LK': '/ta-LK',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dremoratours.com',
    title: 'Dremora Tours - Discover Sri Lanka',
    description: 'Authentic Sri Lankan travel experiences with licensed tour operator',
    siteName: 'Dremora Tours',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dremora Tours - Discover Sri Lanka',
    description: 'Authentic Sri Lankan travel experiences with licensed tour operator',
    creator: '@dremoratours',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <Toaster />
      </body>
    </html>
  )
}