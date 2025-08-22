'use client'

import { useState } from 'react'
import { Send, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'

interface FormData {
  name: string
  email: string
  phone: string
  country: string
  travelDates: string
  groupSize: string
  interests: string
  message: string
}

const countries = [
  'United Kingdom', 'United States', 'Australia', 'Canada', 'Germany',
  'France', 'Netherlands', 'India', 'Russia', 'Japan', 'Other'
]

const interests = [
  'Cultural Tours', 'Beach Holidays', 'Wildlife Safaris', 'Hill Country',
  'Adventure Tours', 'Luxury Travel', 'Budget Travel', 'Family Tours',
  'Honeymoon Packages', 'Photography Tours'
]

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    country: '',
    travelDates: '',
    groupSize: '',
    interests: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you within 24 hours.",
        })
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          country: '',
          travelDates: '',
          groupSize: '',
          interests: '',
          message: ''
        })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            required
            placeholder="Your full name"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            required
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            placeholder="+1 234 567 8900"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="country">Country *</Label>
          <Select value={formData.country} onValueChange={(value) => handleInputChange('country', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select your country" />
            </SelectTrigger>
            <SelectContent>
              {countries.map((country) => (
                <SelectItem key={country} value={country}>
                  {country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="travelDates">Preferred Travel Dates</Label>
          <Input
            id="travelDates"
            type="text"
            value={formData.travelDates}
            onChange={(e) => handleInputChange('travelDates', e.target.value)}
            placeholder="e.g., March 2024 or Flexible"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="groupSize">Group Size</Label>
          <Select value={formData.groupSize} onValueChange={(value) => handleInputChange('groupSize', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Number of travelers" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 person</SelectItem>
              <SelectItem value="2">2 people</SelectItem>
              <SelectItem value="3-4">3-4 people</SelectItem>
              <SelectItem value="5-8">5-8 people</SelectItem>
              <SelectItem value="9+">9+ people</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="interests">Travel Interests</Label>
        <Select value={formData.interests} onValueChange={(value) => handleInputChange('interests', value)}>
          <SelectTrigger>
            <SelectValue placeholder="What interests you most?" />
          </SelectTrigger>
          <SelectContent>
            {interests.map((interest) => (
              <SelectItem key={interest} value={interest}>
                {interest}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleInputChange('message', e.target.value)}
          required
          placeholder="Tell us about your dream Sri Lankan adventure..."
          rows={5}
        />
      </div>

      <Button 
        type="submit" 
        size="lg" 
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Send Message
          </>
        )}
      </Button>

      <p className="text-sm text-gray-500 text-center">
        By submitting this form, you agree to our privacy policy. 
        We'll only use your information to respond to your inquiry.
      </p>
    </form>
  )
}