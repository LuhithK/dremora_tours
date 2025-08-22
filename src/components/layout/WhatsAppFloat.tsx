'use client'

import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function WhatsAppFloat() {
  return (
    <div className="floating-whatsapp">
      <Button
        size="lg"
        className="rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 shadow-lg"
        asChild
      >
        <a
          href="https://wa.me/94771234567?text=Hi%20Dremora%20Tours%2C%20I%27d%20like%20to%20inquire%20about%20your%20tour%20packages"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </Button>
    </div>
  )
}