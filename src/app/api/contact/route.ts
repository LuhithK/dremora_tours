import { NextRequest, NextResponse } from 'next/server'
import { writeFile, readFile } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

interface ContactFormData {
  name: string
  email: string
  phone: string
  country: string
  travelDates: string
  groupSize: string
  interests: string
  message: string
}

interface ContactLead extends ContactFormData {
  id: string
  timestamp: string
  status: 'new' | 'contacted' | 'converted'
}

const LEADS_FILE = path.join(process.cwd(), 'data', 'leads.json')

async function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), 'data')
  if (!existsSync(dataDir)) {
    await writeFile(path.join(dataDir, '.gitkeep'), '')
  }
}

async function getLeads(): Promise<ContactLead[]> {
  try {
    if (!existsSync(LEADS_FILE)) {
      return []
    }
    const data = await readFile(LEADS_FILE, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error reading leads file:', error)
    return []
  }
}

async function saveLeads(leads: ContactLead[]): Promise<void> {
  try {
    await ensureDataDirectory()
    await writeFile(LEADS_FILE, JSON.stringify(leads, null, 2))
  } catch (error) {
    console.error('Error saving leads file:', error)
    throw error
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData: ContactFormData = await request.json()
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Create new lead
    const newLead: ContactLead = {
      ...formData,
      id: `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date().toISOString(),
      status: 'new'
    }

    // Save to leads file
    const leads = await getLeads()
    leads.push(newLead)
    await saveLeads(leads)

    // In a real application, you would send an email here
    // For now, we'll just log the lead
    console.log('New contact form submission:', newLead)

    // TODO: Send email notification
    // await sendEmailNotification(newLead)

    return NextResponse.json(
      { message: 'Contact form submitted successfully', leadId: newLead.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const leads = await getLeads()
    return NextResponse.json({ leads, count: leads.length })
  } catch (error) {
    console.error('Error fetching leads:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}