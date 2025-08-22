export interface TourPackage {
  id: string
  slug: string
  title: string
  subtitle: string
  description: string
  duration: number
  price: {
    usd: number
    lkr: number
  }
  originalPrice?: {
    usd: number
    lkr: number
  }
  region: string
  theme: string[]
  difficulty: 'Easy' | 'Moderate' | 'Challenging'
  groupSize: {
    min: number
    max: number
  }
  highlights: string[]
  inclusions: string[]
  exclusions: string[]
  itinerary: {
    day: number
    title: string
    description: string
    activities: string[]
    accommodation?: string
    meals: string[]
  }[]
  images: {
    hero: string
    gallery: string[]
  }
  bestTime: string[]
  featured: boolean
  popular: boolean
  createdAt: string
}

export const tourPackages: TourPackage[] = [
  {
    id: '1',
    slug: 'cultural-triangle-kandy-5d4n',
    title: 'Cultural Triangle & Kandy',
    subtitle: 'Ancient Cities & Sacred Sites',
    description: 'Explore Sri Lanka\'s rich cultural heritage with visits to ancient cities of Anuradhapura, Polonnaruwa, and the sacred city of Kandy. Experience the iconic Sigiriya Rock Fortress and immerse yourself in centuries of history.',
    duration: 5,
    price: {
      usd: 650,
      lkr: 195000
    },
    originalPrice: {
      usd: 750,
      lkr: 225000
    },
    region: 'Central',
    theme: ['Cultural', 'Historical', 'Religious'],
    difficulty: 'Easy',
    groupSize: {
      min: 2,
      max: 15
    },
    highlights: [
      'Sigiriya Rock Fortress - UNESCO World Heritage Site',
      'Temple of the Tooth Relic in Kandy',
      'Ancient city of Polonnaruwa',
      'Dambulla Cave Temple complex',
      'Traditional Kandyan cultural show'
    ],
    inclusions: [
      'Accommodation in 3-star hotels',
      'All entrance fees to monuments',
      'Professional English-speaking guide',
      'Air-conditioned vehicle with driver',
      'Daily breakfast',
      'Airport transfers'
    ],
    exclusions: [
      'International flights',
      'Lunch and dinner',
      'Personal expenses',
      'Tips and gratuities',
      'Travel insurance'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Transfer to Sigiriya',
        description: 'Welcome to Sri Lanka! Upon arrival at Colombo Airport, meet your guide and transfer to Sigiriya.',
        activities: ['Airport pickup', 'Transfer to Sigiriya', 'Hotel check-in'],
        accommodation: 'Sigiriya Village Hotel',
        meals: ['Dinner']
      },
      {
        day: 2,
        title: 'Sigiriya Rock Fortress & Dambulla',
        description: 'Early morning climb of the magnificent Sigiriya Rock Fortress, followed by exploration of the ancient Dambulla Cave Temple.',
        activities: ['Sigiriya Rock climb', 'Dambulla Cave Temple visit', 'Local village tour'],
        accommodation: 'Sigiriya Village Hotel',
        meals: ['Breakfast']
      },
      {
        day: 3,
        title: 'Polonnaruwa Ancient City',
        description: 'Discover the medieval capital of Sri Lanka with its well-preserved ruins and ancient monuments.',
        activities: ['Polonnaruwa archaeological site', 'Bicycle tour of ruins', 'Transfer to Kandy'],
        accommodation: 'Kandy City Hotel',
        meals: ['Breakfast']
      },
      {
        day: 4,
        title: 'Kandy City & Temple of Tooth',
        description: 'Explore the last kingdom of Sri Lanka, visit the sacred Temple of the Tooth Relic, and enjoy a cultural show.',
        activities: ['Temple of the Tooth visit', 'Kandy city tour', 'Royal Botanical Gardens', 'Cultural dance show'],
        accommodation: 'Kandy City Hotel',
        meals: ['Breakfast']
      },
      {
        day: 5,
        title: 'Departure',
        description: 'Transfer back to Colombo Airport for your departure flight.',
        activities: ['Hotel checkout', 'Transfer to airport', 'Departure'],
        meals: ['Breakfast']
      }
    ],
    images: {
      hero: 'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg',
      gallery: [
        'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg',
        'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg',
        'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
      ]
    },
    bestTime: ['December', 'January', 'February', 'March', 'April'],
    featured: true,
    popular: true,
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    slug: 'south-coast-beaches-7d6n',
    title: 'South Coast Beaches',
    subtitle: 'Tropical Paradise & Marine Life',
    description: 'Relax on pristine beaches, spot whales and dolphins, explore historic Galle Fort, and enjoy water sports along Sri Lanka\'s stunning southern coastline.',
    duration: 7,
    price: {
      usd: 850,
      lkr: 255000
    },
    region: 'Southern',
    theme: ['Beach', 'Wildlife', 'Relaxation'],
    difficulty: 'Easy',
    groupSize: {
      min: 2,
      max: 12
    },
    highlights: [
      'Whale watching in Mirissa',
      'Historic Galle Fort - UNESCO World Heritage Site',
      'Pristine beaches of Unawatuna and Hikkaduwa',
      'Turtle hatchery visit',
      'Stilt fishermen of Koggala'
    ],
    inclusions: [
      'Beachfront accommodation',
      'Whale watching boat trip',
      'All transfers and transportation',
      'Professional guide',
      'Daily breakfast',
      'Airport transfers'
    ],
    exclusions: [
      'International flights',
      'Lunch and dinner',
      'Water sports activities',
      'Personal expenses',
      'Travel insurance'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Transfer to Galle',
        description: 'Arrive in Colombo and transfer to the historic coastal city of Galle.',
        activities: ['Airport pickup', 'Transfer to Galle', 'Galle Fort exploration'],
        accommodation: 'Galle Fort Hotel',
        meals: ['Dinner']
      },
      {
        day: 2,
        title: 'Galle Fort & Unawatuna Beach',
        description: 'Explore the Dutch colonial architecture of Galle Fort and relax on Unawatuna Beach.',
        activities: ['Galle Fort walking tour', 'Unawatuna Beach', 'Snorkeling'],
        accommodation: 'Unawatuna Beach Resort',
        meals: ['Breakfast']
      },
      {
        day: 3,
        title: 'Whale Watching in Mirissa',
        description: 'Early morning whale watching expedition to spot blue whales and dolphins.',
        activities: ['Whale watching boat trip', 'Mirissa Beach', 'Coconut Hill sunset'],
        accommodation: 'Mirissa Beach Hotel',
        meals: ['Breakfast']
      },
      {
        day: 4,
        title: 'Turtle Hatchery & Hikkaduwa',
        description: 'Visit a turtle conservation project and enjoy water sports in Hikkaduwa.',
        activities: ['Turtle hatchery visit', 'Hikkaduwa coral reef', 'Glass-bottom boat ride'],
        accommodation: 'Hikkaduwa Beach Hotel',
        meals: ['Breakfast']
      },
      {
        day: 5,
        title: 'Stilt Fishermen & Bentota',
        description: 'Witness the traditional stilt fishermen and enjoy water sports in Bentota.',
        activities: ['Stilt fishermen photography', 'Bentota River safari', 'Water sports'],
        accommodation: 'Bentota Beach Resort',
        meals: ['Breakfast']
      },
      {
        day: 6,
        title: 'Relaxation Day',
        description: 'Free day to relax on the beach or explore local markets.',
        activities: ['Beach relaxation', 'Spa treatments', 'Local market visit'],
        accommodation: 'Bentota Beach Resort',
        meals: ['Breakfast']
      },
      {
        day: 7,
        title: 'Departure',
        description: 'Transfer to Colombo Airport for departure.',
        activities: ['Hotel checkout', 'Transfer to airport', 'Departure'],
        meals: ['Breakfast']
      }
    ],
    images: {
      hero: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      gallery: [
        'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
        'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg',
        'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg'
      ]
    },
    bestTime: ['November', 'December', 'January', 'February', 'March', 'April'],
    featured: true,
    popular: false,
    createdAt: '2024-01-10'
  },
  {
    id: '3',
    slug: 'sigiriya-safari-3d2n',
    title: 'Sigiriya & Safari Adventure',
    subtitle: 'Rock Fortress & Wildlife',
    description: 'Perfect short getaway combining the iconic Sigiriya Rock Fortress with an exciting safari experience in Minneriya National Park.',
    duration: 3,
    price: {
      usd: 450,
      lkr: 135000
    },
    region: 'Central',
    theme: ['Adventure', 'Wildlife', 'Cultural'],
    difficulty: 'Moderate',
    groupSize: {
      min: 2,
      max: 8
    },
    highlights: [
      'Sigiriya Rock Fortress climb',
      'Minneriya National Park safari',
      'Elephant gathering experience',
      'Village tour and cooking class',
      'Dambulla Cave Temple'
    ],
    inclusions: [
      'Accommodation with breakfast',
      'Safari jeep and entrance fees',
      'Professional guide',
      'All transfers',
      'Village tour and cooking class'
    ],
    exclusions: [
      'International flights',
      'Lunch and dinner (except cooking class)',
      'Personal expenses',
      'Tips',
      'Travel insurance'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Sigiriya Rock',
        description: 'Transfer from Colombo and climb the magnificent Sigiriya Rock Fortress.',
        activities: ['Transfer from Colombo', 'Sigiriya Rock climb', 'Sunset at Pidurangala Rock'],
        accommodation: 'Sigiriya Eco Lodge',
        meals: ['Dinner']
      },
      {
        day: 2,
        title: 'Safari & Village Experience',
        description: 'Morning safari in Minneriya National Park followed by authentic village experience.',
        activities: ['Minneriya safari', 'Village tour', 'Traditional cooking class', 'Bullock cart ride'],
        accommodation: 'Sigiriya Eco Lodge',
        meals: ['Breakfast', 'Village lunch']
      },
      {
        day: 3,
        title: 'Dambulla & Departure',
        description: 'Visit Dambulla Cave Temple before departure.',
        activities: ['Dambulla Cave Temple', 'Transfer to Colombo', 'Departure'],
        meals: ['Breakfast']
      }
    ],
    images: {
      hero: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg',
      gallery: [
        'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg',
        'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg',
        'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
      ]
    },
    bestTime: ['May', 'June', 'July', 'August', 'September'],
    featured: true,
    popular: true,
    createdAt: '2024-01-20'
  },
  {
    id: '4',
    slug: 'hill-country-tea-trails-6d5n',
    title: 'Hill Country Tea Trails',
    subtitle: 'Misty Mountains & Tea Plantations',
    description: 'Journey through Sri Lanka\'s scenic hill country, visit tea plantations, ride the famous train, and explore charming colonial towns.',
    duration: 6,
    price: {
      usd: 750,
      lkr: 225000
    },
    region: 'Hill Country',
    theme: ['Scenic', 'Cultural', 'Adventure'],
    difficulty: 'Moderate',
    groupSize: {
      min: 2,
      max: 10
    },
    highlights: [
      'Scenic train ride from Kandy to Ella',
      'Tea plantation and factory visits',
      'Nine Arch Bridge in Ella',
      'Little Adam\'s Peak hike',
      'Horton Plains National Park'
    ],
    inclusions: [
      'Hill country accommodation',
      'Train tickets (Kandy to Ella)',
      'Tea plantation tours',
      'Professional guide',
      'All transfers and entrance fees',
      'Daily breakfast'
    ],
    exclusions: [
      'International flights',
      'Lunch and dinner',
      'Personal expenses',
      'Tips and gratuities',
      'Travel insurance'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Colombo to Kandy',
        description: 'Transfer to Kandy and explore the cultural capital.',
        activities: ['Transfer to Kandy', 'Temple of Tooth visit', 'Kandy Lake walk'],
        accommodation: 'Kandy Hills Hotel',
        meals: ['Dinner']
      },
      {
        day: 2,
        title: 'Scenic Train to Nuwara Eliya',
        description: 'Take the famous hill country train through tea plantations.',
        activities: ['Morning train journey', 'Tea plantation visit', 'Nuwara Eliya city tour'],
        accommodation: 'Nuwara Eliya Grand Hotel',
        meals: ['Breakfast']
      },
      {
        day: 3,
        title: 'Horton Plains & World\'s End',
        description: 'Early morning visit to Horton Plains National Park.',
        activities: ['Horton Plains trek', 'World\'s End viewpoint', 'Baker\'s Falls'],
        accommodation: 'Nuwara Eliya Grand Hotel',
        meals: ['Breakfast']
      },
      {
        day: 4,
        title: 'Transfer to Ella',
        description: 'Journey to the charming town of Ella.',
        activities: ['Transfer to Ella', 'Nine Arch Bridge visit', 'Ella Rock viewpoint'],
        accommodation: 'Ella Mountain View Hotel',
        meals: ['Breakfast']
      },
      {
        day: 5,
        title: 'Little Adam\'s Peak & Tea Factory',
        description: 'Hike Little Adam\'s Peak and visit a working tea factory.',
        activities: ['Little Adam\'s Peak hike', 'Tea factory tour', 'Ravana Falls visit'],
        accommodation: 'Ella Mountain View Hotel',
        meals: ['Breakfast']
      },
      {
        day: 6,
        title: 'Return to Colombo',
        description: 'Transfer back to Colombo for departure.',
        activities: ['Transfer to Colombo', 'City tour (if time permits)', 'Departure'],
        meals: ['Breakfast']
      }
    ],
    images: {
      hero: 'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg',
      gallery: [
        'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg',
        'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg',
        'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
      ]
    },
    bestTime: ['December', 'January', 'February', 'March'],
    featured: false,
    popular: true,
    createdAt: '2024-01-12'
  },
  {
    id: '5',
    slug: 'wildlife-safari-circuit-8d7n',
    title: 'Wildlife Safari Circuit',
    subtitle: 'Big Game & Bird Watching',
    description: 'Comprehensive wildlife tour covering multiple national parks including Yala, Udawalawe, and Sinharaja rainforest for the ultimate Sri Lankan safari experience.',
    duration: 8,
    price: {
      usd: 1200,
      lkr: 360000
    },
    region: 'Multiple',
    theme: ['Wildlife', 'Adventure', 'Nature'],
    difficulty: 'Moderate',
    groupSize: {
      min: 2,
      max: 6
    },
    highlights: [
      'Yala National Park - highest leopard density',
      'Udawalawe elephant sanctuary',
      'Sinharaja rainforest - UNESCO site',
      'Bird watching in multiple habitats',
      'Camping under the stars'
    ],
    inclusions: [
      'Safari lodge accommodation',
      'All safari jeep rides',
      'Professional naturalist guide',
      'Park entrance fees',
      'All meals during safari',
      'Camping equipment'
    ],
    exclusions: [
      'International flights',
      'Alcoholic beverages',
      'Personal expenses',
      'Tips for guides and drivers',
      'Travel insurance'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Transfer to Yala',
        description: 'Arrive and transfer to Yala National Park area.',
        activities: ['Airport pickup', 'Transfer to Yala', 'Evening safari'],
        accommodation: 'Yala Safari Lodge',
        meals: ['Lunch', 'Dinner']
      },
      {
        day: 2,
        title: 'Full Day Yala Safari',
        description: 'Full day exploring Yala National Park.',
        activities: ['Morning safari', 'Afternoon safari', 'Wildlife photography'],
        accommodation: 'Yala Safari Lodge',
        meals: ['Breakfast', 'Lunch', 'Dinner']
      },
      {
        day: 3,
        title: 'Transfer to Udawalawe',
        description: 'Morning safari then transfer to Udawalawe.',
        activities: ['Morning Yala safari', 'Transfer to Udawalawe', 'Elephant orphanage visit'],
        accommodation: 'Udawalawe Safari Resort',
        meals: ['Breakfast', 'Lunch', 'Dinner']
      },
      {
        day: 4,
        title: 'Udawalawe Elephant Safari',
        description: 'Full day dedicated to elephant watching.',
        activities: ['Morning elephant safari', 'Afternoon safari', 'Elephant feeding experience'],
        accommodation: 'Udawalawe Safari Resort',
        meals: ['Breakfast', 'Lunch', 'Dinner']
      },
      {
        day: 5,
        title: 'Transfer to Sinharaja',
        description: 'Journey to the ancient Sinharaja rainforest.',
        activities: ['Transfer to Sinharaja', 'Rainforest introduction walk', 'Night sounds tour'],
        accommodation: 'Sinharaja Eco Lodge',
        meals: ['Breakfast', 'Lunch', 'Dinner']
      },
      {
        day: 6,
        title: 'Sinharaja Rainforest Trek',
        description: 'Full day trekking in the UNESCO World Heritage rainforest.',
        activities: ['Guided rainforest trek', 'Bird watching', 'Endemic species spotting'],
        accommodation: 'Sinharaja Eco Lodge',
        meals: ['Breakfast', 'Lunch', 'Dinner']
      },
      {
        day: 7,
        title: 'Camping Experience',
        description: 'Unique camping experience in the wilderness.',
        activities: ['Bush camping setup', 'Night safari', 'Stargazing'],
        accommodation: 'Bush Camping',
        meals: ['Breakfast', 'Lunch', 'Dinner']
      },
      {
        day: 8,
        title: 'Departure',
        description: 'Final morning safari and departure.',
        activities: ['Morning safari', 'Transfer to Colombo', 'Departure'],
        meals: ['Breakfast']
      }
    ],
    images: {
      hero: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg',
      gallery: [
        'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg',
        'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg',
        'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg'
      ]
    },
    bestTime: ['February', 'March', 'April', 'May', 'June', 'July'],
    featured: false,
    popular: false,
    createdAt: '2024-01-08'
  },
  {
    id: '6',
    slug: 'grand-sri-lanka-tour-14d13n',
    title: 'Grand Sri Lanka Tour',
    subtitle: 'Complete Island Experience',
    description: 'The ultimate Sri Lankan adventure covering cultural sites, beaches, wildlife, hill country, and everything in between. Perfect for first-time visitors who want to see it all.',
    duration: 14,
    price: {
      usd: 1850,
      lkr: 555000
    },
    originalPrice: {
      usd: 2100,
      lkr: 630000
    },
    region: 'Island-wide',
    theme: ['Cultural', 'Beach', 'Wildlife', 'Adventure', 'Scenic'],
    difficulty: 'Easy',
    groupSize: {
      min: 2,
      max: 12
    },
    highlights: [
      'Complete cultural triangle exploration',
      'Scenic hill country train journey',
      'Multiple wildlife safaris',
      'Southern coast beaches',
      'Colombo city experience',
      'Traditional cooking classes'
    ],
    inclusions: [
      'All accommodation (3-4 star)',
      'All transportation and transfers',
      'Professional guide throughout',
      'All entrance fees and activities',
      'Daily breakfast',
      'Selected lunches and dinners',
      'Train tickets',
      'Safari jeep rides'
    ],
    exclusions: [
      'International flights',
      'Some meals as specified',
      'Personal expenses and shopping',
      'Tips and gratuities',
      'Travel insurance',
      'Visa fees'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Colombo',
        description: 'Welcome to Sri Lanka! City orientation and rest.',
        activities: ['Airport pickup', 'Colombo city tour', 'Hotel check-in'],
        accommodation: 'Colombo City Hotel',
        meals: ['Dinner']
      },
      {
        day: 2,
        title: 'Colombo to Anuradhapura',
        description: 'Journey to the ancient capital and explore sacred sites.',
        activities: ['Transfer to Anuradhapura', 'Ancient city tour', 'Sacred Bodhi Tree visit'],
        accommodation: 'Anuradhapura Heritage Hotel',
        meals: ['Breakfast', 'Dinner']
      },
      {
        day: 3,
        title: 'Anuradhapura to Sigiriya',
        description: 'Transfer to Sigiriya and afternoon exploration.',
        activities: ['Transfer to Sigiriya', 'Sigiriya Museum visit', 'Sunset at Pidurangala'],
        accommodation: 'Sigiriya Rock Resort',
        meals: ['Breakfast']
      },
      {
        day: 4,
        title: 'Sigiriya Rock & Dambulla',
        description: 'Climb the famous rock fortress and visit cave temples.',
        activities: ['Sigiriya Rock climb', 'Dambulla Cave Temple', 'Village safari'],
        accommodation: 'Sigiriya Rock Resort',
        meals: ['Breakfast', 'Village lunch']
      },
      {
        day: 5,
        title: 'Polonnaruwa & Minneriya Safari',
        description: 'Ancient city exploration and wildlife safari.',
        activities: ['Polonnaruwa ruins tour', 'Minneriya National Park safari'],
        accommodation: 'Sigiriya Rock Resort',
        meals: ['Breakfast']
      },
      {
        day: 6,
        title: 'Transfer to Kandy',
        description: 'Journey to the hill capital of Sri Lanka.',
        activities: ['Transfer to Kandy', 'Temple of Tooth visit', 'Kandy Lake walk'],
        accommodation: 'Kandy Heritage Hotel',
        meals: ['Breakfast']
      },
      {
        day: 7,
        title: 'Kandy Exploration',
        description: 'Full day exploring Kandy and surroundings.',
        activities: ['Royal Botanical Gardens', 'Tea plantation visit', 'Cultural show'],
        accommodation: 'Kandy Heritage Hotel',
        meals: ['Breakfast', 'Dinner']
      },
      {
        day: 8,
        title: 'Scenic Train to Nuwara Eliya',
        description: 'Famous hill country train journey.',
        activities: ['Morning train to Nuwara Eliya', 'City tour', 'Tea factory visit'],
        accommodation: 'Nuwara Eliya Grand Hotel',
        meals: ['Breakfast']
      },
      {
        day: 9,
        title: 'Horton Plains & Transfer to Ella',
        description: 'Early morning trek and transfer to Ella.',
        activities: ['Horton Plains trek', 'World\'s End viewpoint', 'Transfer to Ella'],
        accommodation: 'Ella Eco Resort',
        meals: ['Breakfast']
      },
      {
        day: 10,
        title: 'Ella Adventures',
        description: 'Hiking and sightseeing in Ella.',
        activities: ['Little Adam\'s Peak hike', 'Nine Arch Bridge', 'Ravana Falls'],
        accommodation: 'Ella Eco Resort',
        meals: ['Breakfast']
      },
      {
        day: 11,
        title: 'Transfer to Yala',
        description: 'Journey to Yala National Park.',
        activities: ['Transfer to Yala', 'Afternoon safari', 'Wildlife photography'],
        accommodation: 'Yala Safari Lodge',
        meals: ['Breakfast', 'Dinner']
      },
      {
        day: 12,
        title: 'Yala Safari & Transfer to Galle',
        description: 'Morning safari then coastal transfer.',
        activities: ['Morning Yala safari', 'Transfer to Galle', 'Galle Fort exploration'],
        accommodation: 'Galle Heritage Hotel',
        meals: ['Breakfast']
      },
      {
        day: 13,
        title: 'South Coast Beaches',
        description: 'Beach relaxation and water activities.',
        activities: ['Unawatuna Beach', 'Whale watching (seasonal)', 'Beach relaxation'],
        accommodation: 'Beach Resort',
        meals: ['Breakfast']
      },
      {
        day: 14,
        title: 'Departure',
        description: 'Transfer to airport for departure.',
        activities: ['Beach morning', 'Transfer to Colombo Airport', 'Departure'],
        meals: ['Breakfast']
      }
    ],
    images: {
      hero: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      gallery: [
        'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
        'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg',
        'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg'
      ]
    },
    bestTime: ['December', 'January', 'February', 'March', 'April'],
    featured: true,
    popular: true,
    createdAt: '2024-01-05'
  }
]

export function getFeaturedPackages(): TourPackage[] {
  return tourPackages.filter(pkg => pkg.featured).slice(0, 6)
}

export function getPackageBySlug(slug: string): TourPackage | undefined {
  return tourPackages.find(pkg => pkg.slug === slug)
}

export function getRelatedPackages(currentPackage: TourPackage, limit: number = 3): TourPackage[] {
  return tourPackages
    .filter(pkg => 
      pkg.id !== currentPackage.id && 
      (pkg.region === currentPackage.region || 
       pkg.theme.some(theme => currentPackage.theme.includes(theme)))
    )
    .slice(0, limit)
}