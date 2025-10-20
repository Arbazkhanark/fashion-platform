// "use client"

// import { useState, useMemo } from "react"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Star, MapPin, Award, Heart, Share2, MessageCircle, Filter } from "lucide-react"
// import Link from "next/link"
// import { mockExperts } from "@/lib/mock-data"
// import AdvancedFilterSidebar from "@/components/appointment-booking"


// interface FilterOptions {
//   priceRange: [number, number]
//   experience: string[]
//   specialties: string[]
//   availability: string[]
//   freeTrial: boolean
//   hasDiscount: boolean
// }

// export default function BrowsePage() {
//   const [selectedCategory, setSelectedCategory] = useState<string>("all-categories")
//   const [searchQuery, setSearchQuery] = useState("")
//   const [sortBy, setSortBy] = useState("rating")
//   const [minRating, setMinRating] = useState(0)
//   const [favorites, setFavorites] = useState<string[]>([])
//   const [showAdvancedFilters, setShowAdvancedFilters] = useState(false)
//   const [filters, setFilters] = useState<FilterOptions>({
//     priceRange: [0, 500000],
//     experience: [],
//     specialties: [],
//     availability: [],
//     freeTrial: false,
//     hasDiscount: false,
//   })

//   const filteredExperts = useMemo(() => {
//     let filtered = mockExperts

//     if (selectedCategory !== "all-categories") {
//       filtered = filtered.filter((expert) => expert.category === selectedCategory)
//     }

//     if (searchQuery) {
//       filtered = filtered.filter(
//         (expert) =>
//           expert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           expert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           expert.specialties.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())),
//       )
//     }

//     if (minRating > 0) {
//       filtered = filtered.filter((expert) => expert.rating >= minRating)
//     }

//     // Price range filter
//     filtered = filtered.filter(
//       (expert) => expert.priceRange.min >= filters.priceRange[0] && expert.priceRange.max <= filters.priceRange[1],
//     )

//     // Experience filter
//     if (filters.experience.length > 0) {
//       filtered = filtered.filter((expert) => {
//         const years = Number.parseInt(expert.experience.split(" ")[0])
//         return filters.experience.some((exp) => {
//           if (exp === "0-2 years") return years <= 2
//           if (exp === "2-5 years") return years > 2 && years <= 5
//           if (exp === "5-10 years") return years > 5 && years <= 10
//           if (exp === "10+ years") return years > 10
//           return false
//         })
//       })
//     }

//     // Specialties filter
//     if (filters.specialties.length > 0) {
//       filtered = filtered.filter((expert) => filters.specialties.some((spec) => expert.specialties.includes(spec)))
//     }

//     // Free trial filter
//     if (filters.freeTrial) {
//       filtered = filtered.filter((expert) => expert.freeTrial)
//     }

//     // Discount filter
//     if (filters.hasDiscount) {
//       filtered = filtered.filter((expert) => expert.discountCoupons.length > 0)
//     }

//     // Sort
//     if (sortBy === "rating") {
//       filtered.sort((a, b) => b.rating - a.rating)
//     } else if (sortBy === "reviews") {
//       filtered.sort((a, b) => b.reviews - a.reviews)
//     } else if (sortBy === "price-low") {
//       filtered.sort((a, b) => a.priceRange.min - b.priceRange.min)
//     } else if (sortBy === "price-high") {
//       filtered.sort((a, b) => b.priceRange.max - a.priceRange.max)
//     }

//     return filtered
//   }, [selectedCategory, searchQuery, sortBy, minRating, filters])

//   const toggleFavorite = (expertId: string) => {
//     setFavorites((prev) => (prev.includes(expertId) ? prev.filter((id) => id !== expertId) : [...prev, expertId]))
//   }

//   const categories = [
//     "wedding-designer",
//     "casual-wear",
//     "party-stylist",
//     "office-stylist",
//     "makeup-artist",
//     "hair-stylist",
//     "personal-shopper",
//     "fashion-consultant",
//   ]

//   return (
//     <main className="min-h-screen bg-background">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-4xl font-bold mb-2">Browse All Experts</h1>
//           <p className="text-muted-foreground">Find the perfect professional for your needs</p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//           {/* Sidebar - Advanced Filters */}
//           <div className={`${showAdvancedFilters ? "block" : "hidden"} lg:block lg:col-span-1`}>
//             <AdvancedFilterSidebar
//               filters={filters}
//               onFilterChange={setFilters}
//               onClose={() => setShowAdvancedFilters(false)}
//             />
//           </div>

//           {/* Main Content */}
//           <div className="lg:col-span-3">
//             {/* Quick Filters */}
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
//               <div>
//                 <label className="text-sm font-medium mb-2 block">Search</label>
//                 <Input
//                   placeholder="Search by name or specialty..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                 />
//               </div>

//               <div>
//                 <label className="text-sm font-medium mb-2 block">Category</label>
//                 <Select value={selectedCategory} onValueChange={setSelectedCategory}>
//                   <SelectTrigger>
//                     <SelectValue placeholder="All Categories" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="all-categories">All Categories</SelectItem>
//                     {categories.map((cat) => (
//                       <SelectItem key={cat} value={cat}>
//                         {cat.replace(/-/g, " ").toUpperCase()}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>

//               <div>
//                 <label className="text-sm font-medium mb-2 block">Min Rating</label>
//                 <Select value={minRating.toString()} onValueChange={(v) => setMinRating(Number(v))}>
//                   <SelectTrigger>
//                     <SelectValue />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="0">All Ratings</SelectItem>
//                     <SelectItem value="4">4+ Stars</SelectItem>
//                     <SelectItem value="4.5">4.5+ Stars</SelectItem>
//                     <SelectItem value="4.8">4.8+ Stars</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>

//               <div>
//                 <label className="text-sm font-medium mb-2 block">Sort By</label>
//                 <Select value={sortBy} onValueChange={setSortBy}>
//                   <SelectTrigger>
//                     <SelectValue />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="rating">Highest Rating</SelectItem>
//                     <SelectItem value="reviews">Most Reviews</SelectItem>
//                     <SelectItem value="price-low">Price: Low to High</SelectItem>
//                     <SelectItem value="price-high">Price: High to Low</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//             </div>

//             {/* Advanced Filters Toggle */}
//             <div className="mb-6 flex justify-between items-center">
//               <p className="text-sm text-muted-foreground">
//                 Showing {filteredExperts.length} expert{filteredExperts.length !== 1 ? "s" : ""}
//               </p>
//               <button
//                 onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
//                 className="lg:hidden flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-secondary transition-smooth"
//               >
//                 <Filter className="w-4 h-4" />
//                 Advanced Filters
//               </button>
//             </div>

//             {/* Experts Grid */}
//             {filteredExperts.length > 0 ? (
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {filteredExperts.map((expert, idx) => (
//                   <Card
//                     key={expert.id}
//                     className="hover:shadow-lg transition-smooth overflow-hidden group animate-fade-in"
//                     style={{ animationDelay: `${idx * 50}ms` }}
//                   >
//                     {/* Image */}
//                     <div className="relative h-48 overflow-hidden bg-muted">
//                       <img
//                         src={expert.image || "/placeholder.svg"}
//                         alt={expert.name}
//                         className="w-full h-full object-cover group-hover:scale-105 transition-transform"
//                       />
//                       <button
//                         onClick={() => toggleFavorite(expert.id)}
//                         className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-secondary transition-smooth"
//                       >
//                         <Heart
//                           className={`w-5 h-5 ${
//                             favorites.includes(expert.id)
//                               ? "fill-destructive text-destructive"
//                               : "text-muted-foreground"
//                           }`}
//                         />
//                       </button>
//                     </div>

//                     <CardHeader className="pb-3">
//                       <div className="flex justify-between items-start gap-2">
//                         <div>
//                           <CardTitle className="text-lg">{expert.name}</CardTitle>
//                           <CardDescription>{expert.title}</CardDescription>
//                         </div>
//                       </div>
//                     </CardHeader>

//                     <CardContent className="space-y-3">
//                       {/* Location */}
//                       <div className="flex items-center gap-2 text-sm text-muted-foreground">
//                         <MapPin className="w-4 h-4" />
//                         {expert.location}
//                       </div>

//                       {/* Rating */}
//                       <div className="flex items-center gap-2">
//                         <div className="flex items-center gap-1">
//                           <Star className="w-4 h-4 fill-accent text-accent" />
//                           <span className="font-semibold">{expert.rating}</span>
//                         </div>
//                         <span className="text-sm text-muted-foreground">({expert.reviews})</span>
//                       </div>

//                       {/* Experience */}
//                       <div className="flex items-center gap-2 text-sm">
//                         <Award className="w-4 h-4 text-primary" />
//                         <span>{expert.experience}</span>
//                       </div>

//                       {/* Specialties */}
//                       <div className="flex flex-wrap gap-2">
//                         {expert.specialties.slice(0, 2).map((specialty) => (
//                           <span key={specialty} className="text-xs bg-secondary px-2 py-1 rounded-full">
//                             {specialty}
//                           </span>
//                         ))}
//                         {expert.specialties.length > 2 && (
//                           <span className="text-xs bg-secondary px-2 py-1 rounded-full">
//                             +{expert.specialties.length - 2}
//                           </span>
//                         )}
//                       </div>

//                       {/* Price */}
//                       <div className="pt-2 border-t border-border">
//                         <p className="text-sm font-semibold text-primary">
//                           ₹{expert.priceRange.min.toLocaleString()} - ₹{expert.priceRange.max.toLocaleString()}
//                         </p>
//                       </div>

//                       {/* Actions */}
//                       <div className="flex gap-2 pt-2">
//                         <Link href={`/expert/${expert.id}`} className="flex-1">
//                           <Button className="w-full">View Profile</Button>
//                         </Link>
//                         <button className="p-2 hover:bg-secondary rounded-lg transition-smooth">
//                           <MessageCircle className="w-5 h-5" />
//                         </button>
//                         <button className="p-2 hover:bg-secondary rounded-lg transition-smooth">
//                           <Share2 className="w-5 h-5" />
//                         </button>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             ) : (
//               <Card className="text-center py-12">
//                 <CardContent>
//                   <p className="text-muted-foreground mb-4">No experts found matching your criteria.</p>
//                   <Button
//                     variant="outline"
//                     onClick={() => {
//                       setSearchQuery("")
//                       setSelectedCategory("all-categories")
//                       setMinRating(0)
//                       setFilters({
//                         priceRange: [0, 500000],
//                         experience: [],
//                         specialties: [],
//                         availability: [],
//                         freeTrial: false,
//                         hasDiscount: false,
//                       })
//                     }}
//                   >
//                     Clear All Filters
//                   </Button>
//                 </CardContent>
//               </Card>
//             )}
//           </div>
//         </div>
//       </div>
//     </main>
//   )
// }




















"use client"

import { useState, useMemo, useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import DesignerFilters from "@/components/designer-filters"
import DesignerCard from "@/components/designer-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, SlidersHorizontal, Sparkles, Users, FilterX } from "lucide-react"

// Mock data - replace with API call
const allDesigners = [
  {
    id: 1,
    name: "Priya Sharma",
    specialty: "Bridal & Wedding",
    location: "Mumbai",
    rating: 4.9,
    reviews: 245,
    experience: 12,
    image: "/professional-fashion-designer-woman.jpg",
    price: { min: 50000, max: 200000 },
    clients: 500,
    category: "wedding",
    bio: "Expert in bridal wear with 12 years of experience",
    freeTrial: true,
  },
  {
    id: 2,
    name: "Arjun Kapoor",
    specialty: "Corporate & Formal",
    location: "Delhi",
    rating: 4.8,
    reviews: 189,
    experience: 8,
    image: "/professional-fashion-designer-man.png",
    price: { min: 30000, max: 150000 },
    clients: 350,
    category: "corporate",
    bio: "Specializing in professional and formal wear",
    freeTrial: false,
  },
  {
    id: 3,
    name: "Zara Khan",
    specialty: "Party & Evening Wear",
    location: "Bangalore",
    rating: 4.9,
    reviews: 312,
    experience: 10,
    image: "/fashion-stylist-woman-elegant.jpg",
    price: { min: 40000, max: 180000 },
    clients: 600,
    category: "party",
    bio: "Expert in party and evening wear styling",
    freeTrial: true,
  },
  {
    id: 4,
    name: "Vikram Singh",
    specialty: "Casual & Street Style",
    location: "Pune",
    rating: 4.7,
    reviews: 156,
    experience: 6,
    image: "/fashion-designer-casual-style.jpg",
    price: { min: 20000, max: 80000 },
    clients: 280,
    category: "casual",
    bio: "Casual wear and street style expert",
    freeTrial: true,
  },
  {
    id: 5,
    name: "Neha Verma",
    specialty: "Bridal & Wedding",
    location: "Jaipur",
    rating: 4.8,
    reviews: 198,
    experience: 11,
    image: "/professional-fashion-designer-woman.jpg",
    price: { min: 60000, max: 220000 },
    clients: 480,
    category: "wedding",
    bio: "Traditional and modern bridal designs",
    freeTrial: false,
  },
  {
    id: 6,
    name: "Rohan Desai",
    specialty: "Birthday & Casual",
    location: "Ahmedabad",
    rating: 4.6,
    reviews: 142,
    experience: 7,
    image: "/professional-fashion-designer-man.png",
    price: { min: 25000, max: 100000 },
    clients: 320,
    category: "birthday",
    bio: "Fun and trendy birthday outfit styling",
    freeTrial: true,
  },
  {
    id: 7,
    name: "Anjali Patel",
    specialty: "Corporate Events",
    location: "Hyderabad",
    rating: 4.9,
    reviews: 267,
    experience: 9,
    image: "/fashion-stylist-woman-elegant.jpg",
    price: { min: 35000, max: 160000 },
    clients: 420,
    category: "corporate",
    bio: "Corporate event styling specialist",
    freeTrial: true,
  },
  {
    id: 8,
    name: "Sanjay Kumar",
    specialty: "Party Wear",
    location: "Chennai",
    rating: 4.7,
    reviews: 178,
    experience: 8,
    image: "/fashion-designer-casual-style.jpg",
    price: { min: 38000, max: 170000 },
    clients: 390,
    category: "party",
    bio: "Glamorous party wear designs",
    freeTrial: false,
  },
]

export default function DesignersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filters, setFilters] = useState({
    category: "",
    minPrice: 0,
    maxPrice: 250000,
    minRating: 0,
    minExperience: 0,
    freeTrial: false,
  })
  const [showFilters, setShowFilters] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const filteredDesigners = useMemo(() => {
    return allDesigners.filter((designer) => {
      const matchesSearch =
        designer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        designer.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
        designer.location.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory = !filters.category || designer.category === filters.category
      const matchesPrice = designer.price.min >= filters.minPrice && designer.price.max <= filters.maxPrice
      const matchesRating = designer.rating >= filters.minRating
      const matchesExperience = designer.experience >= filters.minExperience
      const matchesFreeTrial = !filters.freeTrial || designer.freeTrial

      return matchesSearch && matchesCategory && matchesPrice && matchesRating && matchesExperience && matchesFreeTrial
    })
  }, [searchQuery, filters])

  const clearAllFilters = () => {
    setSearchQuery("")
    setFilters({
      category: "",
      minPrice: 0,
      maxPrice: 250000,
      minRating: 0,
      minExperience: 0,
      freeTrial: false,
    })
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-rose-50/30 dark:from-gray-900 dark:to-rose-900/20">
      <Navigation />

      {/* Page Header */}
      <section className="py-16 bg-gradient-to-r from-rose-50/50 to-amber-50/30 dark:from-rose-900/10 dark:to-amber-900/5 border-b border-rose-100 dark:border-rose-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'animate-glow-in' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 px-4 py-2 rounded-full text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              Find Your Style Expert
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Discover Amazing
              <span className="block bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">
                Fashion Designers
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Browse through our curated collection of fashion professionals
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-80 transition-all duration-500 ${showFilters ? "block animate-slide-in-left" : "hidden lg:block"}`}>
            <div className="sticky top-24">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <SlidersHorizontal className="w-5 h-5 text-rose-500" />
                    Filters
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearAllFilters}
                    className="text-rose-500 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/20"
                  >
                    <FilterX className="w-4 h-4 mr-1" />
                    Clear
                  </Button>
                </div>
                <DesignerFilters filters={filters} setFilters={setFilters} />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search Bar */}
            <div className="mb-8 animate-fade-in-up">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 to-amber-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl">
                  <Search
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <Input
                    type="text"
                    placeholder="Search by name, specialty, or location..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 py-6 text-base border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
              </div>
            </div>

            {/* Results Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-rose-500" />
                <p className="text-gray-600 dark:text-gray-400">
                  Showing <span className="font-bold text-gray-900 dark:text-white">{filteredDesigners.length}</span> designers
                </p>
              </div>
              
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="lg:hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 hover:bg-rose-50 dark:hover:bg-rose-900/20"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <SlidersHorizontal size={16} className="mr-2" />
                  {showFilters ? "Hide Filters" : "Show Filters"}
                </Button>
                
                {(searchQuery || filters.category || filters.minPrice > 0 || filters.minRating > 0 || filters.minExperience > 0 || filters.freeTrial) && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearAllFilters}
                    className="text-rose-500 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/20"
                  >
                    <FilterX className="w-4 h-4 mr-1" />
                    Clear All
                  </Button>
                )}
              </div>
            </div>

            {/* Designers Grid */}
            {filteredDesigners.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredDesigners.map((designer, index) => (
                  <div 
                    key={designer.id}
                    className="animate-card-float"
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      animationDuration: '8s'
                    }}
                  >
                    <DesignerCard designer={designer} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 p-12 max-w-md mx-auto">
                  <Search className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    No designers found
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Try adjusting your search criteria or filters
                  </p>
                  <Button
                    onClick={clearAllFilters}
                    className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white"
                  >
                    Clear All Filters
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />

      <style jsx>{`
        @keyframes glow-in {
          0% {
            opacity: 0;
            transform: translateY(20px);
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-in-left {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes card-float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        .animate-glow-in {
          animation: glow-in 1.2s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out forwards;
        }
        .animate-card-float {
          animation: card-float 8s ease-in-out infinite;
        }
      `}</style>
    </main>
  )
}