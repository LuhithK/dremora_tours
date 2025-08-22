import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number, currency: 'USD' | 'LKR' = 'USD'): string {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
  
  return formatter.format(price)
}

export function formatDuration(days: number): string {
  if (days === 1) return '1 Day'
  return `${days} Days / ${days - 1} Nights`
}

export function generateWhatsAppLink(packageName: string, dates?: string): string {
  const baseNumber = '+94771234567' // Replace with actual WhatsApp number
  const message = `Hi Dremora Tours, I'm interested in ${packageName}${dates ? ` for ${dates}` : ''}. Could you please provide more details?`
  return `https://wa.me/${baseNumber.replace('+', '')}?text=${encodeURIComponent(message)}`
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}