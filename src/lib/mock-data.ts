// import { Expert } from "./types";


// export const mockExperts: Expert[] = [
//   {
//     id: "1",
//     name: "Priya Sharma",
//     title: "Wedding Designer",
//     category: "wedding-designer",
//     location: "Mumbai, India",
//     rating: 4.9,
//     reviews: 342,
//     image: "/professional-woman-designer.jpg",
//     specialties: ["Bridal Wear", "Lehengas", "Sarees", "Embroidery"],
//     experience: "12 years",
//     clientsServed: 500,
//     priceRange: { min: 50000, max: 200000 },
//     bio: "Priya is a renowned wedding designer with over 12 years of experience creating stunning bridal wear. She specializes in traditional Indian wedding attire with modern twists, combining intricate embroidery with contemporary designs.",
//     portfolio: [
//       {
//         id: "p1",
//         title: "Bridal Lehenga",
//         image: "/bridal-lehenga.jpg",
//         description: "Stunning red bridal lehenga with gold embroidery",
//         category: "Bridal Wear",
//       },
//       {
//         id: "p2",
//         title: "Wedding Saree",
//         image: "/wedding-saree.jpg",
//         description: "Elegant silk saree for wedding ceremonies",
//         category: "Bridal Wear",
//       },
//       {
//         id: "p3",
//         title: "Mehendi Outfit",
//         image: "/mehendi-outfit.jpg",
//         description: "Colorful mehendi function outfit",
//         category: "Wedding Events",
//       },
//     ],
//     availability: [
//       {
//         date: "2024-11-20",
//         slots: [
//           { time: "10:00 AM", available: true },
//           { time: "11:00 AM", available: true },
//           { time: "2:00 PM", available: false },
//           { time: "3:00 PM", available: true },
//         ],
//       },
//       {
//         date: "2024-11-21",
//         slots: [
//           { time: "10:00 AM", available: true },
//           { time: "11:00 AM", available: false },
//           { time: "2:00 PM", available: true },
//           { time: "3:00 PM", available: true },
//         ],
//       },
//       {
//         date: "2024-11-22",
//         slots: [
//           { time: "10:00 AM", available: true },
//           { time: "11:00 AM", available: true },
//           { time: "2:00 PM", available: true },
//           { time: "3:00 PM", available: false },
//         ],
//       },
//       {
//         date: "2024-11-23",
//         slots: [
//           { time: "10:00 AM", available: false },
//           { time: "11:00 AM", available: true },
//           { time: "2:00 PM", available: true },
//           { time: "3:00 PM", available: true },
//         ],
//       },
//       {
//         date: "2024-11-24",
//         slots: [
//           { time: "10:00 AM", available: true },
//           { time: "11:00 AM", available: true },
//           { time: "2:00 PM", available: false },
//           { time: "3:00 PM", available: true },
//         ],
//       },
//       {
//         date: "2024-11-25",
//         slots: [
//           { time: "10:00 AM", available: true },
//           { time: "11:00 AM", available: true },
//           { time: "2:00 PM", available: true },
//           { time: "3:00 PM", available: true },
//         ],
//       },
//       {
//         date: "2024-11-26",
//         slots: [
//           { time: "10:00 AM", available: false },
//           { time: "11:00 AM", available: false },
//           { time: "2:00 PM", available: true },
//           { time: "3:00 PM", available: true },
//         ],
//       },
//     ],
//     socialMedia: {
//       instagram: "https://instagram.com",
//       facebook: "https://facebook.com",
//       website: "https://example.com",
//     },
//     freeTrial: true,
//     discountCoupons: [
//       {
//         code: "WEDDING20",
//         discount: 20,
//         description: "20% off on bridal wear",
//         expiryDate: "2024-12-31",
//       },
//       {
//         code: "FIRST10",
//         discount: 10,
//         description: "10% off for first-time customers",
//         expiryDate: "2024-12-15",
//       },
//     ],
//     reviews: [
//       {
//         id: "r1",
//         userName: "Anjali Verma",
//         rating: 5,
//         comment: "Priya created the most beautiful bridal outfit for my wedding. Highly recommended!",
//         date: "2024-10-15",
//       },
//       {
//         id: "r2",
//         userName: "Neha Singh",
//         rating: 5,
//         comment: "Exceptional craftsmanship and attention to detail. Worth every penny!",
//         date: "2024-09-20",
//       },
//       {
//         id: "r3",
//         userName: "Meera Patel",
//         rating: 4,
//         comment: "Great designs and professional service. Delivery was on time.",
//         date: "2024-08-10",
//       },
//     ],
//   },
//   {
//     id: "2",
//     name: "Arjun Verma",
//     title: "Casual Wear Designer",
//     category: "casual-wear",
//     location: "Delhi, India",
//     rating: 4.8,
//     reviews: 287,
//     image: "/professional-man-designer.jpg",
//     specialties: ["Street Wear", "Minimalist", "Fusion", "Sustainable Fashion"],
//     experience: "8 years",
//     clientsServed: 350,
//     priceRange: { min: 15000, max: 50000 },
//     bio: "Arjun is a contemporary fashion designer known for his minimalist and sustainable approach to casual wear. He blends traditional Indian elements with modern aesthetics.",
//     portfolio: [
//       {
//         id: "p1",
//         title: "Casual Kurta",
//         image: "/casual-kurta.jpg",
//         description: "Modern casual kurta with traditional prints",
//         category: "Casual Wear",
//       },
//       {
//         id: "p2",
//         title: "Fusion Outfit",
//         image: "/fusion-outfit.jpg",
//         description: "Fusion of Indian and Western styles",
//         category: "Fusion",
//       },
//       {
//         id: "p3",
//         title: "Street Wear",
//         image: "/street-wear.jpg",
//         description: "Contemporary street wear collection",
//         category: "Street Wear",
//       },
//     ],
//     availability: [
//       {
//         date: "2024-11-20",
//         slots: [
//           { time: "10:00 AM", available: true },
//           { time: "11:00 AM", available: true },
//           { time: "2:00 PM", available: true },
//           { time: "3:00 PM", available: false },
//         ],
//       },
//       {
//         date: "2024-11-21",
//         slots: [
//           { time: "10:00 AM", available: true },
//           { time: "11:00 AM", available: true },
//           { time: "2:00 PM", available: true },
//           { time: "3:00 PM", available: true },
//         ],
//       },
//       {
//         date: "2024-11-22",
//         slots: [
//           { time: "10:00 AM", available: false },
//           { time: "11:00 AM", available: true },
//           { time: "2:00 PM", available: true },
//           { time: "3:00 PM", available: true },
//         ],
//       },
//       {
//         date: "2024-11-23",
//         slots: [
//           { time: "10:00 AM", available: true },
//           { time: "11:00 AM", available: true },
//           { time: "2:00 PM", available: false },
//           { time: "3:00 PM", available: true },
//         ],
//       },
//       {
//         date: "2024-11-24",
//         slots: [
//           { time: "10:00 AM", available: true },
//           { time: "11:00 AM", available: false },
//           { time: "2:00 PM", available: true },
//           { time: "3:00 PM", available: true },
//         ],
//       },
//       {
//         date: "2024-11-25",
//         slots: [
//           { time: "10:00 AM", available: true },
//           { time: "11:00 AM", available: true },
//           { time: "2:00 PM", available: true },
//           { time: "3:00 PM", available: true },
//         ],
//       },
//       {
//         date: "2024-11-26",
//         slots: [
//           { time: "10:00 AM", available: true },
//           { time: "11:00 AM", available: true },
//           { time: "2:00 PM", available: true },
//           { time: "3:00 PM", available: false },
//         ],
//       },
//     ],
//     socialMedia: {
//       instagram: "https://instagram.com",
//       website: "https://example.com",
//     },
//     freeTrial: false,
//     discountCoupons: [
//       {
//         code: "CASUAL15",
//         discount: 15,
//         description: "15% off on casual wear",
//         expiryDate: "2024-12-31",
//       },
//     ],
//     reviews: [
//       {
//         id: "r1",
//         userName: "Rahul Kumar",
//         rating: 5,
//         comment: "Amazing designs with perfect fit. Arjun is very professional.",
//         date: "2024-10-10",
//       },
//       {
//         id: "r2",
//         userName: "Priya Desai",
//         rating: 4,
//         comment: "Great quality and unique designs. Highly satisfied!",
//         date: "2024-09-15",
//       },
//     ],
//   },
//   {
//     id: "3",
//     name: "Neha Patel",
//     title: "Makeup Artist",
//     category: "makeup-artist",
//     location: "Bangalore, India",
//     rating: 4.9,
//     reviews: 421,
//     image: "/professional-makeup-artist.jpg",
//     specialties: ["Bridal Makeup", "Party Makeup", "HD Makeup", "Airbrush"],
//     experience: "10 years",
//     clientsServed: 600,
//     priceRange: { min: 5000, max: 25000 },
//     bio: "Neha is an award-winning makeup artist specializing in bridal and party makeup. She uses premium products and latest techniques to create stunning looks.",
//     portfolio: [
//       {
//         id: "p1",
//         title: "Bridal Makeup",
//         image: "/bridal-makeup.jpg",
//         description: "Elegant bridal makeup look",
//         category: "Bridal",
//       },
//       {
//         id: "p2",
//         title: "Party Makeup",
//         image: "/party-makeup.jpg",
//         description: "Glamorous party makeup",
//         category: "Party",
//       },
//       {
//         id: "p3",
//         title: "HD Makeup",
//         image: "/hd-makeup.jpg",
//         description: "HD makeup for photography",
//         category: "HD",
//       },
//     ],
//     availability: [
//       {
//         date: "2024-11-20",
//         slots: [
//           { time: "10:00 AM", available: true },
//           { time: "11:00 AM", available: true },
//           { time: "2:00 PM", available: true },
//           { time: "3:00 PM", available: true },
//         ],
//       },
//       {
//         date: "2024-11-21",
//         slots: [
//           { time: "10:00 AM", available: false },
//           { time: "11:00 AM", available: true },
//           { time: "2:00 PM", available: true },
//           { time: "3:00 PM", available: true },
//         ],
//       },
//       {
//         date: "2024-11-22",
//         slots: [
//           { time: "10:00 AM", available: true },
//           { time: "11:00 AM", available: true },
//           { time: "2:00 PM", available: false },
//           { time: "3:00 PM", available: true },
//         ],
//       },
//       {
//         date: "2024-11-23",
//         slots: [
//           { time: "10:00 AM", available: true },
//           { time: "11:00 AM", available: true },
//           { time: "2:00 PM", available: true },
//           { time: "3:00 PM", available: true },
//         ],
//       },
//       {
//         date: "2024-11-24",
//         slots: [
//           { time: "10:00 AM", available: true },
//           { time: "11:00 AM", available: true },
//           { time: "2:00 PM", available: true },
//           { time: "3:00 PM", available: false },
//         ],
//       },
//       {
//         date: "2024-11-25",
//         slots: [
//           { time: "10:00 AM", available: true },
//           { time: "11:00 AM", available: false },
//           { time: "2:00 PM", available: true },
//           { time: "3:00 PM", available: true },
//         ],
//       },
//       {
//         date: "2024-11-26",
//         slots: [
//           { time: "10:00 AM", available: true },
//           { time: "11:00 AM", available: true },
//           { time: "2:00 PM", available: true },
//           { time: "3:00 PM", available: true },
//         ],
//       },
//     ],
//     socialMedia: {
//       instagram: "https://instagram.com",
//       facebook: "https://facebook.com",
//     },
//     freeTrial: true,
//     discountCoupons: [
//       {
//         code: "MAKEUP25",
//         discount: 25,
//         description: "25% off on makeup services",
//         expiryDate: "2024-12-31",
//       },
//     ],
//     reviews: [
//       {
//         id: "r1",
//         userName: "Divya Sharma",
//         rating: 5,
//         comment: "Neha's makeup was absolutely flawless! My wedding day was perfect.",
//         date: "2024-10-20",
//       },
//       {
//         id: "r2",
//         userName: "Pooja Singh",
//         rating: 5,
//         comment: "Professional, punctual, and incredibly talented. Highly recommended!",
//         date: "2024-09-25",
//       },
//       {
//         id: "r3",
//         userName: "Kavya Nair",
//         rating: 4,
//         comment: "Great makeup artist. Very attentive to details.",
//         date: "2024-08-30",
//       },
//     ],
//   },
//   {
//     id: "4",
//     name: "Vikram Singh",
//     title: "Hair Stylist",
//     category: "hair-stylist",
//     location: "Pune, India",
//     rating: 4.7,
//     reviews: 198,
//     image: "/professional-hair-stylist.jpg",
//     specialties: ["Hair Cutting", "Coloring", "Styling", "Hair Treatment"],
//     experience: "9 years",
//     clientsServed: 400,
//     priceRange: { min: 2000, max: 10000 },
//     bio: "Vikram is a skilled hair stylist with expertise in modern cuts and coloring techniques. He stays updated with latest trends and uses premium hair care products.",
//     portfolio: [
//       {
//         id: "p1",
//         title: "Modern Haircut",
//         image: "/modern-haircut.jpg",
//         description: "Contemporary haircut style",
//         category: "Cutting",
//       },
//       {
//         id: "p2",
//         title: "Hair Coloring",
//         image: "/hair-coloring.jpg",
//         description: "Professional hair coloring",
//         category: "Coloring",
//       },
//       {
//         id: "p3",
//         title: "Bridal Styling",
//         image: "/bridal-hair.jpg",
//         description: "Elegant bridal hair styling",
//         category: "Styling",
//       },
//     ],
//     availability: [
//       {
//         date: "2024-11-20",
//         slots: [
//           { time: "10:00 AM", available: true },
//           { time: "11:00 AM", available: true },
//           { time: "2:00 PM", available: true },
//           { time: "3:00 PM", available: true },
//         ],
//       },
//       {
//         date: "2024-11-21",
//         slots: [
//           { time: "10:00 AM", available: true },
//           { time: "11:00 AM", available: true },
//           { time: "2:00 PM", available: true },
//           { time: "3:00 PM", available: true },
//         ],
//       },
//       {
//         date: "2024-11-22",
//         slots: [
//           { time: "10:00 AM", available: true },
//           { time: "11:00 AM", available: false },
//           { time: "2:00 PM", available: true },
//           { time: "3:00 PM", available: true },
//         ],
//       },
//       {
//         date: "2024-11-23",
//         slots: [
//           { time: "10:00 AM", available: true },
//           { time: "11:00 AM", available: true },
//           { time: "2:00 PM", available: true },
//           { time: "3:00 PM", available: false },
//         ],
//       },
//       {
//         date: "2024-11-24",
//         slots: [
//           { time: "10:00 AM", available: true },
//           { time: "11:00 AM", available: true },
//           { time: "2:00 PM", available: false },
//           { time: "3:00 PM", available: true },
//         ],
//       },
//       {
//         date: "2024-11-25",
//         slots: [
//           { time: "10:00 AM", available: true },
//           { time: "11:00 AM", available: true },
//           { time: "2:00 PM", available: true },
//           { time: "3:00 PM", available: true },
//         ],
//       },
//       {
//         date: "2024-11-26",
//         slots: [
//           { time: "10:00 AM", available: false },
//           { time: "11:00 AM", available: true },
//           { time: "2:00 PM", available: true },
//           { time: "3:00 PM", available: true },
//         ],
//       },
//     ],
//     socialMedia: {
//       instagram: "https://instagram.com",
//     },
//     freeTrial: false,
//     discountCoupons: [
//       {
//         code: "HAIR10",
//         discount: 10,
//         description: "10% off on hair services",
//         expiryDate: "2024-12-31",
//       },
//     ],
//     reviews: [
//       {
//         id: "r1",
//         userName: "Aditya Patel",
//         rating: 5,
//         comment: "Best haircut I've ever had. Vikram is very skilled!",
//         date: "2024-10-05",
//       },
//       {
//         id: "r2",
//         userName: "Sanjana Gupta",
//         rating: 4,
//         comment: "Great service and friendly staff. Will visit again.",
//         date: "2024-09-10",
//       },
//     ],
//   },
// ]












export interface Expert {
  id: string
  name: string
  title: string
  category: string
  location: string
  rating: number
  reviewsCount: number
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
  reviews: ReviewItem[]
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

export const mockExperts: Expert[] = [
  {
    id: "1",
    name: "Priya Sharma",
    title: "Wedding Designer",
    category: "wedding-designer",
    location: "Mumbai, India",
    rating: 4.9,
    reviewsCount: 342,
    image: "/professional-woman-designer.jpg",
    specialties: ["Bridal Wear", "Lehengas", "Sarees", "Embroidery"],
    experience: "12 years",
    clientsServed: 500,
    priceRange: { min: 50000, max: 200000 },
    bio: "Priya is a renowned wedding designer with over 12 years of experience creating stunning bridal wear. She specializes in traditional Indian wedding attire with modern twists, combining intricate embroidery with contemporary designs.",
    portfolio: [
      {
        id: "p1",
        title: "Bridal Lehenga",
        image: "/bridal-lehenga.jpg",
        description: "Stunning red bridal lehenga with gold embroidery",
        category: "Bridal Wear",
      },
      {
        id: "p2",
        title: "Wedding Saree",
        image: "/wedding-saree.jpg",
        description: "Elegant silk saree for wedding ceremonies",
        category: "Bridal Wear",
      },
      {
        id: "p3",
        title: "Mehendi Outfit",
        image: "/mehendi-outfit.jpg",
        description: "Colorful mehendi function outfit",
        category: "Wedding Events",
      },
    ],
    availability: [
      {
        date: "2024-11-20",
        slots: [
          { time: "10:00 AM", available: true },
          { time: "11:00 AM", available: true },
          { time: "2:00 PM", available: false },
          { time: "3:00 PM", available: true },
        ],
      },
      {
        date: "2024-11-21",
        slots: [
          { time: "10:00 AM", available: true },
          { time: "11:00 AM", available: false },
          { time: "2:00 PM", available: true },
          { time: "3:00 PM", available: true },
        ],
      },
      {
        date: "2024-11-22",
        slots: [
          { time: "10:00 AM", available: true },
          { time: "11:00 AM", available: true },
          { time: "2:00 PM", available: true },
          { time: "3:00 PM", available: false },
        ],
      },
      {
        date: "2024-11-23",
        slots: [
          { time: "10:00 AM", available: false },
          { time: "11:00 AM", available: true },
          { time: "2:00 PM", available: true },
          { time: "3:00 PM", available: true },
        ],
      },
      {
        date: "2024-11-24",
        slots: [
          { time: "10:00 AM", available: true },
          { time: "11:00 AM", available: true },
          { time: "2:00 PM", available: false },
          { time: "3:00 PM", available: true },
        ],
      },
      {
        date: "2024-11-25",
        slots: [
          { time: "10:00 AM", available: true },
          { time: "11:00 AM", available: true },
          { time: "2:00 PM", available: true },
          { time: "3:00 PM", available: true },
        ],
      },
      {
        date: "2024-11-26",
        slots: [
          { time: "10:00 AM", available: false },
          { time: "11:00 AM", available: false },
          { time: "2:00 PM", available: true },
          { time: "3:00 PM", available: true },
        ],
      },
    ],
    socialMedia: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      website: "https://example.com",
    },
    freeTrial: true,
    discountCoupons: [
      {
        code: "WEDDING20",
        discount: 20,
        description: "20% off on bridal wear",
        expiryDate: "2024-12-31",
      },
      {
        code: "FIRST10",
        discount: 10,
        description: "10% off for first-time customers",
        expiryDate: "2024-12-15",
      },
    ],
    reviews: [
      {
        id: "r1",
        userName: "Anjali Verma",
        rating: 5,
        comment: "Priya created the most beautiful bridal outfit for my wedding. Highly recommended!",
        date: "2024-10-15",
      },
      {
        id: "r2",
        userName: "Neha Singh",
        rating: 5,
        comment: "Exceptional craftsmanship and attention to detail. Worth every penny!",
        date: "2024-09-20",
      },
      {
        id: "r3",
        userName: "Meera Patel",
        rating: 4,
        comment: "Great designs and professional service. Delivery was on time.",
        date: "2024-08-10",
      },
    ],
  },
  {
    id: "2",
    name: "Arjun Verma",
    title: "Casual Wear Designer",
    category: "casual-wear",
    location: "Delhi, India",
    rating: 4.8,
    reviewsCount: 287,
    image: "/professional-man-designer.jpg",
    specialties: ["Street Wear", "Minimalist", "Fusion", "Sustainable Fashion"],
    experience: "8 years",
    clientsServed: 350,
    priceRange: { min: 15000, max: 50000 },
    bio: "Arjun is a contemporary fashion designer known for his minimalist and sustainable approach to casual wear. He blends traditional Indian elements with modern aesthetics.",
    portfolio: [
      {
        id: "p1",
        title: "Casual Kurta",
        image: "/casual-kurta.jpg",
        description: "Modern casual kurta with traditional prints",
        category: "Casual Wear",
      },
      {
        id: "p2",
        title: "Fusion Outfit",
        image: "/fusion-outfit.jpg",
        description: "Fusion of Indian and Western styles",
        category: "Fusion",
      },
      {
        id: "p3",
        title: "Street Wear",
        image: "/street-wear.jpg",
        description: "Contemporary street wear collection",
        category: "Street Wear",
      },
    ],
    availability: [
      {
        date: "2024-11-20",
        slots: [
          { time: "10:00 AM", available: true },
          { time: "11:00 AM", available: true },
          { time: "2:00 PM", available: true },
          { time: "3:00 PM", available: false },
        ],
      },
      {
        date: "2024-11-21",
        slots: [
          { time: "10:00 AM", available: true },
          { time: "11:00 AM", available: true },
          { time: "2:00 PM", available: true },
          { time: "3:00 PM", available: true },
        ],
      },
      {
        date: "2024-11-22",
        slots: [
          { time: "10:00 AM", available: false },
          { time: "11:00 AM", available: true },
          { time: "2:00 PM", available: true },
          { time: "3:00 PM", available: true },
        ],
      },
      {
        date: "2024-11-23",
        slots: [
          { time: "10:00 AM", available: true },
          { time: "11:00 AM", available: true },
          { time: "2:00 PM", available: false },
          { time: "3:00 PM", available: true },
        ],
      },
      {
        date: "2024-11-24",
        slots: [
          { time: "10:00 AM", available: true },
          { time: "11:00 AM", available: false },
          { time: "2:00 PM", available: true },
          { time: "3:00 PM", available: true },
        ],
      },
      {
        date: "2024-11-25",
        slots: [
          { time: "10:00 AM", available: true },
          { time: "11:00 AM", available: true },
          { time: "2:00 PM", available: true },
          { time: "3:00 PM", available: true },
        ],
      },
      {
        date: "2024-11-26",
        slots: [
          { time: "10:00 AM", available: true },
          { time: "11:00 AM", available: true },
          { time: "2:00 PM", available: true },
          { time: "3:00 PM", available: false },
        ],
      },
    ],
    socialMedia: {
      instagram: "https://instagram.com",
      website: "https://example.com",
    },
    freeTrial: false,
    discountCoupons: [
      {
        code: "CASUAL15",
        discount: 15,
        description: "15% off on casual wear",
        expiryDate: "2024-12-31",
      },
    ],
    reviews: [
      {
        id: "r1",
        userName: "Rahul Kumar",
        rating: 5,
        comment: "Amazing designs with perfect fit. Arjun is very professional.",
        date: "2024-10-10",
      },
      {
        id: "r2",
        userName: "Priya Desai",
        rating: 4,
        comment: "Great quality and unique designs. Highly satisfied!",
        date: "2024-09-15",
      },
    ],
  },
  {
    id: "3",
    name: "Neha Patel",
    title: "Makeup Artist",
    category: "makeup-artist",
    location: "Bangalore, India",
    rating: 4.9,
    reviewsCount: 421,
    image: "/professional-makeup-artist.jpg",
    specialties: ["Bridal Makeup", "Party Makeup", "HD Makeup", "Airbrush"],
    experience: "10 years",
    clientsServed: 600,
    priceRange: { min: 5000, max: 25000 },
    bio: "Neha is an award-winning makeup artist specializing in bridal and party makeup. She uses premium products and latest techniques to create stunning looks.",
    portfolio: [
      {
        id: "p1",
        title: "Bridal Makeup",
        image: "/bridal-makeup.jpg",
        description: "Elegant bridal makeup look",
        category: "Bridal",
      },
      {
        id: "p2",
        title: "Party Makeup",
        image: "/party-makeup.jpg",
        description: "Glamorous party makeup",
        category: "Party",
      },
      {
        id: "p3",
        title: "HD Makeup",
        image: "/hd-makeup.jpg",
        description: "HD makeup for photography",
        category: "HD",
      },
    ],
    availability: [
      {
        date: "2024-11-20",
        slots: [
          { time: "10:00 AM", available: true },
          { time: "11:00 AM", available: true },
          { time: "2:00 PM", available: true },
          { time: "3:00 PM", available: true },
        ],
      },
      {
        date: "2024-11-21",
        slots: [
          { time: "10:00 AM", available: false },
          { time: "11:00 AM", available: true },
          { time: "2:00 PM", available: true },
          { time: "3:00 PM", available: true },
        ],
      },
      {
        date: "2024-11-22",
        slots: [
          { time: "10:00 AM", available: true },
          { time: "11:00 AM", available: true },
          { time: "2:00 PM", available: false },
          { time: "3:00 PM", available: true },
        ],
      },
      {
        date: "2024-11-23",
        slots: [
          { time: "10:00 AM", available: true },
          { time: "11:00 AM", available: true },
          { time: "2:00 PM", available: true },
          { time: "3:00 PM", available: true },
        ],
      },
      {
        date: "2024-11-24",
        slots: [
          { time: "10:00 AM", available: true },
          { time: "11:00 AM", available: true },
          { time: "2:00 PM", available: true },
          { time: "3:00 PM", available: false },
        ],
      },
      {
        date: "2024-11-25",
        slots: [
          { time: "10:00 AM", available: true },
          { time: "11:00 AM", available: false },
          { time: "2:00 PM", available: true },
          { time: "3:00 PM", available: true },
        ],
      },
      {
        date: "2024-11-26",
        slots: [
          { time: "10:00 AM", available: true },
          { time: "11:00 AM", available: true },
          { time: "2:00 PM", available: true },
          { time: "3:00 PM", available: true },
        ],
      },
    ],
    socialMedia: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
    },
    freeTrial: true,
    discountCoupons: [
      {
        code: "MAKEUP25",
        discount: 25,
        description: "25% off on makeup services",
        expiryDate: "2024-12-31",
      },
    ],
    reviews: [
      {
        id: "r1",
        userName: "Divya Sharma",
        rating: 5,
        comment: "Neha's makeup was absolutely flawless! My wedding day was perfect.",
        date: "2024-10-20",
      },
      {
        id: "r2",
        userName: "Pooja Singh",
        rating: 5,
        comment: "Professional, punctual, and incredibly talented. Highly recommended!",
        date: "2024-09-25",
      },
      {
        id: "r3",
        userName: "Kavya Nair",
        rating: 4,
        comment: "Great makeup artist. Very attentive to details.",
        date: "2024-08-30",
      },
    ],
  },
  {
    id: "4",
    name: "Vikram Singh",
    title: "Hair Stylist",
    category: "hair-stylist",
    location: "Pune, India",
    rating: 4.7,
    reviewsCount: 198,
    image: "/professional-hair-stylist.jpg",
    specialties: ["Hair Cutting", "Coloring", "Styling", "Hair Treatment"],
    experience: "9 years",
    clientsServed: 400,
    priceRange: { min: 2000, max: 10000 },
    bio: "Vikram is a skilled hair stylist with expertise in modern cuts and coloring techniques. He stays updated with latest trends and uses premium hair care products.",
    portfolio: [
      {
        id: "p1",
        title: "Modern Haircut",
        image: "/modern-haircut.jpg",
        description: "Contemporary haircut style",
        category: "Cutting",
      },
      {
        id: "p2",
        title: "Hair Coloring",
        image: "/hair-coloring.jpg",
        description: "Professional hair coloring",
        category: "Coloring",
      },
      {
        id: "p3",
        title: "Bridal Styling",
        image: "/bridal-hair.jpg",
        description: "Elegant bridal hair styling",
        category: "Styling",
      },
    ],
    availability: [
      {
        date: "2024-11-20",
        slots: [
          { time: "10:00 AM", available: true },
          { time: "11:00 AM", available: true },
          { time: "2:00 PM", available: true },
          { time: "3:00 PM", available: true },
        ],
      },
      {
        date: "2024-11-21",
        slots: [
          { time: "10:00 AM", available: true },
          { time: "11:00 AM", available: true },
          { time: "2:00 PM", available: true },
          { time: "3:00 PM", available: true },
        ],
      },
      {
        date: "2024-11-22",
        slots: [
          { time: "10:00 AM", available: true },
          { time: "11:00 AM", available: false },
          { time: "2:00 PM", available: true },
          { time: "3:00 PM", available: true },
        ],
      },
      {
        date: "2024-11-23",
        slots: [
          { time: "10:00 AM", available: true },
          { time: "11:00 AM", available: true },
          { time: "2:00 PM", available: true },
          { time: "3:00 PM", available: false },
        ],
      },
      {
        date: "2024-11-24",
        slots: [
          { time: "10:00 AM", available: true },
          { time: "11:00 AM", available: true },
          { time: "2:00 PM", available: false },
          { time: "3:00 PM", available: true },
        ],
      },
      {
        date: "2024-11-25",
        slots: [
          { time: "10:00 AM", available: true },
          { time: "11:00 AM", available: true },
          { time: "2:00 PM", available: true },
          { time: "3:00 PM", available: true },
        ],
      },
      {
        date: "2024-11-26",
        slots: [
          { time: "10:00 AM", available: false },
          { time: "11:00 AM", available: true },
          { time: "2:00 PM", available: true },
          { time: "3:00 PM", available: true },
        ],
      },
    ],
    socialMedia: {
      instagram: "https://instagram.com",
    },
    freeTrial: false,
    discountCoupons: [
      {
        code: "HAIR10",
        discount: 10,
        description: "10% off on hair services",
        expiryDate: "2024-12-31",
      },
    ],
    reviews: [
      {
        id: "r1",
        userName: "Aditya Patel",
        rating: 5,
        comment: "Best haircut I've ever had. Vikram is very skilled!",
        date: "2024-10-05",
      },
      {
        id: "r2",
        userName: "Sanjana Gupta",
        rating: 4,
        comment: "Great service and friendly staff. Will visit again.",
        date: "2024-09-10",
      },
    ],
  },
]