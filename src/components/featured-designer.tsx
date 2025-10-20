// "use client"

// import Link from "next/link"
// import { Star, MapPin, Award, Sparkles, ArrowRight } from "lucide-react"
// import { Card } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { useState, useEffect } from "react"

// const featuredDesigners = [
//   {
//     id: 1,
//     name: "Priya Sharma",
//     specialty: "Bridal & Wedding",
//     location: "Mumbai",
//     rating: 4.9,
//     reviews: 245,
//     experience: "12 years",
//     image: "https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg",
//     price: "₹50,000 - ₹2,00,000",
//     clients: "500+",
//   },
//   {
//     id: 2,
//     name: "Arjun Kapoor",
//     specialty: "Corporate & Formal",
//     location: "Delhi",
//     rating: 4.8,
//     reviews: 189,
//     experience: "8 years",
//     image: "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg",
//     price: "₹30,000 - ₹1,50,000",
//     clients: "350+",
//   },
//   {
//     id: 3,
//     name: "Zara Khan",
//     specialty: "Party & Evening Wear",
//     location: "Bangalore",
//     rating: 4.9,
//     reviews: 312,
//     experience: "10 years",
//     image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
//     price: "₹40,000 - ₹1,80,000",
//     clients: "600+",
//   },
//   {
//     id: 4,
//     name: "Vikram Singh",
//     specialty: "Casual & Street Style",
//     location: "Pune",
//     rating: 4.7,
//     reviews: 156,
//     experience: "6 years",
//     image: "https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg",
//     price: "₹20,000 - ₹80,000",
//     clients: "280+",
//   },
// ]

// export default function FeaturedDesigners() {
//   const [isVisible, setIsVisible] = useState(false)
//   const [imagesLoaded, setImagesLoaded] = useState({})

//   useEffect(() => {
//     setIsVisible(true)
//   }, [])

//   const handleImageLoad = (id) => {
//     setImagesLoaded(prev => ({ ...prev, [id]: true }))
//   }

//   const handleImageError = (id) => {
//     setImagesLoaded(prev => ({ ...prev, [id]: false }))
//   }

//   return (
//     <section className="py-20 bg-white dark:bg-gray-900">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
//           <div className="inline-flex items-center gap-2 bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-300 px-4 py-2 rounded-full text-sm mb-6">
//             <Sparkles className="w-4 h-4" />
//             Featured Designers
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
//             Meet Top Fashion Experts
//           </h2>
//           <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//             Handpicked designers ready to bring your style vision to life
//           </p>
//         </div>

//         {/* Designers Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {featuredDesigners.map((designer, index) => (
//             <Link 
//               key={designer.id} 
//               href={`/designer/${designer.id}`}
//               className="block group"
//             >
//               <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800
//                 hover:border-rose-200 dark:hover:border-rose-800 hover:translate-y-[-4px]"
//                 style={{ 
//                   transitionDelay: `${index * 50}ms` 
//                 }}
//               >
//                 {/* Image Section */}
//                 <div className="relative h-48 bg-gray-100 dark:bg-gray-700 overflow-hidden">
//                   {/* Loading Skeleton */}
//                   {!imagesLoaded[designer.id] && (
//                     <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 animate-pulse" />
//                   )}
                  
//                   {/* Actual Image */}
//                   <img
//                     src={designer.image}
//                     alt={designer.name}
//                     className={`w-full h-full object-cover transition-opacity duration-300 ${
//                       imagesLoaded[designer.id] ? 'opacity-100' : 'opacity-0'
//                     } group-hover:scale-105 transition-transform duration-300`}
//                     onLoad={() => handleImageLoad(designer.id)}
//                     onError={() => handleImageError(designer.id)}
//                   />
                  
//                   {/* Rating Badge */}
//                   <div className="absolute top-3 right-3 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
//                     <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
//                     <span className="text-xs font-semibold text-gray-900 dark:text-white">{designer.rating}</span>
//                   </div>
//                 </div>

//                 {/* Content Section */}
//                 <div className="p-5">
//                   {/* Name & Specialty */}
//                   <div className="mb-3">
//                     <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
//                       {designer.name}
//                     </h3>
//                     <p className="text-sm text-rose-600 dark:text-rose-400 font-medium">
//                       {designer.specialty}
//                     </p>
//                   </div>

//                   {/* Location & Experience */}
//                   <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
//                     <div className="flex items-center gap-1">
//                       <MapPin className="w-4 h-4" />
//                       {designer.location}
//                     </div>
//                     <div className="flex items-center gap-1">
//                       <Award className="w-4 h-4" />
//                       {designer.experience}
//                     </div>
//                   </div>

//                   {/* Stats */}
//                   <div className="flex items-center justify-between text-sm mb-4">
//                     <span className="text-gray-600 dark:text-gray-400">
//                       {designer.reviews} reviews
//                     </span>
//                     <span className="text-gray-600 dark:text-gray-400">
//                       {designer.clients} clients
//                     </span>
//                   </div>

//                   {/* Price & CTA */}
//                   <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
//                     <div>
//                       <p className="text-base font-semibold text-gray-900 dark:text-white">
//                         {designer.price}
//                       </p>
//                     </div>
//                     <div className="w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       <ArrowRight className="w-4 h-4 text-white" />
//                     </div>
//                   </div>
//                 </div>
//               </Card>
//             </Link>
//           ))}
//         </div>

//         {/* CTA Button */}
//         <div className="text-center mt-12">
//           <Button 
//             className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 group"
//             asChild
//           >
//             <Link href="/designers" className="flex items-center gap-2">
//               View All Designers
//               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//             </Link>
//           </Button>
//         </div>
//       </div>
//     </section>
//   )
// }
















"use client"

import Link from "next/link"
import { Star, MapPin, Award, Sparkles, ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

const featuredDesigners = [
  {
    id: 1,
    name: "Priya Sharma",
    specialty: "Bridal & Wedding",
    location: "Mumbai",
    rating: 4.9,
    reviews: 245,
    experience: "12 years",
    image: "https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg",
    price: "₹50,000 - ₹2,00,000",
    clients: "500+",
  },
  {
    id: 2,
    name: "Arjun Kapoor",
    specialty: "Corporate & Formal",
    location: "Delhi",
    rating: 4.8,
    reviews: 189,
    experience: "8 years",
    image: "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg",
    price: "₹30,000 - ₹1,50,000",
    clients: "350+",
  },
  {
    id: 3,
    name: "Zara Khan",
    specialty: "Party & Evening Wear",
    location: "Bangalore",
    rating: 4.9,
    reviews: 312,
    experience: "10 years",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
    price: "₹40,000 - ₹1,80,000",
    clients: "600+",
  },
  {
    id: 4,
    name: "Vikram Singh",
    specialty: "Casual & Street Style",
    location: "Pune",
    rating: 4.7,
    reviews: 156,
    experience: "6 years",
    image: "https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg",
    price: "₹20,000 - ₹80,000",
    clients: "280+",
  },
]

// Type definitions
interface Designer {
  id: number
  name: string
  specialty: string
  location: string
  rating: number
  reviews: number
  experience: string
  image: string
  price: string
  clients: string
}

interface ImagesLoadedState {
  [key: number]: boolean
}

export default function FeaturedDesigners() {
  const [isVisible, setIsVisible] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState<ImagesLoadedState>({})

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleImageLoad = (id: number) => {
    setImagesLoaded(prev => ({ ...prev, [id]: true }))
  }

  const handleImageError = (id: number) => {
    setImagesLoaded(prev => ({ ...prev, [id]: false }))
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-300 px-4 py-2 rounded-full text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            Featured Designers
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Meet Top Fashion Experts
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Handpicked designers ready to bring your style vision to life
          </p>
        </div>

        {/* Designers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredDesigners.map((designer, index) => (
            <Link 
              key={designer.id} 
              href={`/designer/${designer.id}`}
              className="block group"
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800
                hover:border-rose-200 dark:hover:border-rose-800 hover:translate-y-[-4px]"
                style={{ 
                  transitionDelay: `${index * 50}ms` 
                }}
              >
                {/* Image Section */}
                <div className="relative h-48 bg-gray-100 dark:bg-gray-700 overflow-hidden">
                  {/* Loading Skeleton */}
                  {!imagesLoaded[designer.id] && (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 animate-pulse" />
                  )}
                  
                  {/* Actual Image */}
                  <img
                    src={designer.image}
                    alt={designer.name}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${
                      imagesLoaded[designer.id] ? 'opacity-100' : 'opacity-0'
                    } group-hover:scale-105 transition-transform duration-300`}
                    onLoad={() => handleImageLoad(designer.id)}
                    onError={() => handleImageError(designer.id)}
                  />
                  
                  {/* Rating Badge */}
                  <div className="absolute top-3 right-3 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span className="text-xs font-semibold text-gray-900 dark:text-white">{designer.rating}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5">
                  {/* Name & Specialty */}
                  <div className="mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {designer.name}
                    </h3>
                    <p className="text-sm text-rose-600 dark:text-rose-400 font-medium">
                      {designer.specialty}
                    </p>
                  </div>

                  {/* Location & Experience */}
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {designer.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      {designer.experience}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm mb-4">
                    <span className="text-gray-600 dark:text-gray-400">
                      {designer.reviews} reviews
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {designer.clients} clients
                    </span>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div>
                      <p className="text-base font-semibold text-gray-900 dark:text-white">
                        {designer.price}
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button 
            className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 group"
            asChild
          >
            <Link href="/designers" className="flex items-center gap-2">
              View All Designers
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}