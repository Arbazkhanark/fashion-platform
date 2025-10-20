export interface Expert {
  id: string
  name: string
  title: string
  category: string
  location: string
  rating: number
  reviews: number
  image: string
  specialties: string[]
  experience: string
  clientsServed: number
  priceRange: {
    min: number
    max: number
  }
  bio: string
  portfolio: PortfolioItem[]
  availability: Availability[]
  socialMedia: SocialMedia
  freeTrial: boolean
  discountCoupons: DiscountCoupon[]
  reviewsList: ReviewItem[]
}

export interface PortfolioItem {
  id: string
  title: string
  image: string
  description: string
  category: string
}

export interface Availability {
  date: string
  slots: TimeSlot[]
}

export interface TimeSlot {
  time: string
  available: boolean
}

export interface SocialMedia {
  instagram?: string
  facebook?: string
  twitter?: string
  website?: string
}

export interface DiscountCoupon {
  code: string
  discount: number
  description: string
  expiryDate: string
}

export interface Booking {
  id: string
  expertId: string
  userId: string
  date: string
  time: string
  status: "pending" | "confirmed" | "completed" | "cancelled"
  notes: string
  totalPrice: number
}

export interface Review {
  id: string
  expertId: string
  userId: string
  rating: number
  comment: string
  createdAt: string
}

export interface ReviewItem {
  id: string
  userName: string
  rating: number
  comment: string
  date: string
}

export interface User {
  id: string
  name: string
  email: string
  phone: string
  avatar: string
  bookings: Booking[]
  reviews: Review[]
  favorites: string[]
}
