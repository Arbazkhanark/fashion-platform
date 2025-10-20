// "use client"

// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Search, Sparkles, Users, Star, Clock, Scissors, Gem, Palette } from "lucide-react"
// import { useState, useEffect } from "react"

// export default function HeroSection() {
//   const [searchCategory, setSearchCategory] = useState("designers")
//   const [searchTerm, setSearchTerm] = useState("")
//   const [results, setResults] = useState<any[]>([])

//   // 🧠 Dummy Data (static for now)
//   const dummyData = {
//     designers: [
//       { name: "Aarav Mehta", role: "Bridal Designer", location: "Mumbai", rating: "4.8★" },
//       { name: "Neha Kapoor", role: "Fashion Consultant", location: "Delhi", rating: "4.9★" },
//       { name: "Ritika Sharma", role: "Casual Wear Specialist", location: "Bangalore", rating: "4.7★" },
//     ],
//     stylists: [
//       { name: "Rohan Verma", role: "Celebrity Stylist", location: "Delhi", rating: "4.9★" },
//       { name: "Isha Patel", role: "Makeup & Hair Stylist", location: "Pune", rating: "4.8★" },
//     ],
//     tailors: [
//       { name: "Arjun Tailors", role: "Custom Suit Tailor", location: "Lucknow", rating: "4.6★" },
//       { name: "Classic Stitch", role: "Traditional Tailor", location: "Chennai", rating: "4.7★" },
//     ],
//     brands: [
//       { name: "Velvet Vogue", role: "Luxury Brand", location: "Mumbai", rating: "4.9★" },
//       { name: "UrbanEdge", role: "Streetwear Brand", location: "Delhi", rating: "4.8★" },
//     ],
//   }

//   // 🪄 Simulate search
//   useEffect(() => {
//     if (searchTerm.trim().length > 0) {
//       const allResults = dummyData[searchCategory].filter((item) =>
//         item.name.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//       setResults(allResults.length > 0 ? allResults : [{ name: "No results found." }])
//     } else {
//       setResults([])
//     }
//   }, [searchTerm, searchCategory])

//   return (
//     <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-rose-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-rose-900">
//       {/* Pattern Background */}
//       <div className="absolute inset-0 opacity-[0.03]">
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%221%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-move-pattern" />
//       </div>

//       {/* Floating Elements */}
//       <div className="absolute top-20 right-20 animate-float-elegant">
//         <Gem className="w-16 h-16 text-rose-400 drop-shadow-lg" />
//       </div>

//       <div className="absolute bottom-32 left-20 animate-float-elegant" style={{ animationDelay: "2s" }}>
//         <Scissors className="w-14 h-14 text-gray-600 drop-shadow-lg" />
//       </div>

//       <div className="absolute top-1/2 left-1/3 animate-float-elegant" style={{ animationDelay: "3s" }}>
//         <Gem className="w-12 h-12 text-purple-400 drop-shadow-lg" />
//       </div>

//       {/* Gradient Circles */}
//       <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full opacity-20 animate-soft-float" />
//       <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tr from-amber-200 to-orange-200 rounded-full opacity-15 animate-soft-float" style={{ animationDelay: "2s" }} />

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 px-4 py-2 rounded-full text-sm mb-8 animate-fade-in">
//             <Sparkles className="w-4 h-4" />
//             Find Your Style
//           </div>
//           <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-up">
//             Find the Perfect <br />
//             <span className="bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">Fashion Designer</span>
//           </h1>
//           <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.3s" }}>
//             Connect with professional designers and stylists for any occasion. Get custom designs that match your style.
//           </p>
//         </div>

//         {/* Search Bar */}
//         <div className="max-w-3xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.5s" }}>
//           <div className="flex flex-col sm:flex-row gap-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl p-2 shadow-lg border border-gray-200 dark:border-gray-700">
//             <div className="flex-1 flex">
//               <div className="relative flex items-center">
//                 <select
//                   value={searchCategory}
//                   onChange={(e) => setSearchCategory(e.target.value)}
//                   className="appearance-none bg-transparent border-0 py-3 pl-4 pr-8 text-base focus:outline-none focus:ring-0 cursor-pointer"
//                 >
//                   <option value="designers">Designers</option>
//                   <option value="stylists">Stylists</option>
//                   <option value="tailors">Tailors</option>
//                   <option value="brands">Brands</option>
//                 </select>
//               </div>
//               <div className="flex-1 relative">
//                 <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
//                 <Input
//                   placeholder={`Search ${searchCategory}...`}
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="pl-12 py-6 text-base border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
//                 />
//               </div>
//             </div>
//             <Button className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 px-8 py-6 text-base rounded-lg transition-all duration-300 hover:scale-105 border-0 text-white">
//               <Search className="w-5 h-5 mr-2" />
//               Search
//             </Button>
//           </div>

//           {/* 🔥 Dynamic Dummy Results */}
//           {results.length > 0 && (
//             <div className="mt-6 bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-4 animate-fade-in">
//               {results.map((item, i) => (
//                 <div
//                   key={i}
//                   className="p-3 border-b last:border-b-0 border-gray-100 dark:border-gray-700 hover:bg-rose-50 dark:hover:bg-gray-700/40 rounded-md transition"
//                 >
//                   {item.name === "No results found." ? (
//                     <p className="text-center text-gray-500 dark:text-gray-400">{item.name}</p>
//                   ) : (
//                     <div className="flex justify-between items-center">
//                       <div>
//                         <p className="font-semibold text-gray-800 dark:text-gray-100">{item.name}</p>
//                         <p className="text-sm text-gray-500 dark:text-gray-400">{item.role} • {item.location}</p>
//                       </div>
//                       <span className="text-rose-500 font-medium">{item.rating}</span>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Stats */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: "0.7s" }}>
//           {[
//             { icon: <Users className="w-8 h-8" />, value: "500+", label: "Designers" },
//             { icon: <Palette className="w-8 h-8" />, value: "10K+", label: "Clients" },
//             { icon: <Star className="w-8 h-8" />, value: "4.9★", label: "Rating" },
//             { icon: <Clock className="w-8 h-8" />, value: "24/7", label: "Support" },
//           ].map((stat, index) => (
//             <div
//               key={index}
//               className="text-center p-4 rounded-xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
//             >
//               <div className="flex justify-center mb-3 text-rose-500">{stat.icon}</div>
//               <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
//               <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Animations */}
//       <style jsx>{`
//         @keyframes float-elegant {
//           0%, 100% { transform: translateY(0) rotate(0deg); }
//           33% { transform: translateY(-15px) rotate(2deg); }
//           66% { transform: translateY(-8px) rotate(-2deg); }
//         }
//         @keyframes soft-float {
//           0%, 100% { transform: translateY(0) scale(1); opacity: 0.15; }
//           50% { transform: translateY(-20px) scale(1.05); opacity: 0.2; }
//         }
//         @keyframes slide-up {
//           0% { opacity: 0; transform: translateY(40px); }
//           100% { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes fade-in {
//           0% { opacity: 0; }
//           100% { opacity: 1; }
//         }
//         @keyframes move-pattern {
//           0% { background-position: 0 0; }
//           100% { background-position: 60px 60px; }
//         }
//         .animate-float-elegant { animation: float-elegant 8s ease-in-out infinite; }
//         .animate-soft-float { animation: soft-float 12s ease-in-out infinite; }
//         .animate-slide-up { animation: slide-up 1s ease-out forwards; }
//         .animate-fade-in { animation: fade-in 1s ease-out forwards; }
//         .animate-move-pattern { animation: move-pattern 20s linear infinite; }
//       `}</style>
//     </section>
//   )
// }








"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Sparkles, Users, Star, Clock, Scissors, Gem, Palette } from "lucide-react"
import { useState, useEffect, useMemo } from "react"

interface SearchItem {
  name: string
  role?: string
  location?: string
  rating?: string
}

export default function HeroSection() {
  const [searchCategory, setSearchCategory] = useState("designers")
  const [searchTerm, setSearchTerm] = useState("")
  const [results, setResults] = useState<SearchItem[]>([])

  // ✅ Memoized dummy data (prevents ESLint dependency warning)
  const dummyData = useMemo(
    () => ({
      designers: [
        { name: "Aarav Mehta", role: "Bridal Designer", location: "Mumbai", rating: "4.8★" },
        { name: "Neha Kapoor", role: "Fashion Consultant", location: "Delhi", rating: "4.9★" },
        { name: "Ritika Sharma", role: "Casual Wear Specialist", location: "Bangalore", rating: "4.7★" },
      ],
      stylists: [
        { name: "Rohan Verma", role: "Celebrity Stylist", location: "Delhi", rating: "4.9★" },
        { name: "Isha Patel", role: "Makeup & Hair Stylist", location: "Pune", rating: "4.8★" },
      ],
      tailors: [
        { name: "Arjun Tailors", role: "Custom Suit Tailor", location: "Lucknow", rating: "4.6★" },
        { name: "Classic Stitch", role: "Traditional Tailor", location: "Chennai", rating: "4.7★" },
      ],
      brands: [
        { name: "Velvet Vogue", role: "Luxury Brand", location: "Mumbai", rating: "4.9★" },
        { name: "UrbanEdge", role: "Streetwear Brand", location: "Delhi", rating: "4.8★" },
      ],
    }),
    []
  )

  // 🔍 Simulated search
  useEffect(() => {
    if (searchTerm.trim().length > 0) {
      const allResults = dummyData[searchCategory as keyof typeof dummyData].filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setResults(allResults.length > 0 ? allResults : [{ name: "No results found." }])
    } else {
      setResults([])
    }
  }, [searchTerm, searchCategory, dummyData])

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-rose-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-rose-900">
      {/* Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%221%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-move-pattern" />
      </div>

      {/* Floating Icons */}
      <div className="absolute top-20 right-20 animate-float-elegant">
        <Gem className="w-16 h-16 text-rose-400 drop-shadow-lg" />
      </div>
      <div className="absolute bottom-32 left-20 animate-float-elegant" style={{ animationDelay: "2s" }}>
        <Scissors className="w-14 h-14 text-gray-600 drop-shadow-lg" />
      </div>
      <div className="absolute top-1/2 left-1/3 animate-float-elegant" style={{ animationDelay: "3s" }}>
        <Gem className="w-12 h-12 text-purple-400 drop-shadow-lg" />
      </div>

      {/* Gradient Circles */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full opacity-20 animate-soft-float" />
      <div
        className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tr from-amber-200 to-orange-200 rounded-full opacity-15 animate-soft-float"
        style={{ animationDelay: "2s" }}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 px-4 py-2 rounded-full text-sm mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            Find Your Style
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-up">
            Find the Perfect <br />
            <span className="bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">
              Fashion Designer
            </span>
          </h1>

          <p
            className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            Connect with professional designers and stylists for any occasion. Get custom designs that match your style.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.5s" }}>
          <div className="flex flex-col sm:flex-row gap-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl p-2 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex-1 flex">
              <div className="relative flex items-center">
                <select
                  value={searchCategory}
                  onChange={(e) => setSearchCategory(e.target.value)}
                  className="appearance-none bg-transparent border-0 py-3 pl-4 pr-8 text-base focus:outline-none focus:ring-0 cursor-pointer"
                >
                  <option value="designers">Designers</option>
                  <option value="stylists">Stylists</option>
                  <option value="tailors">Tailors</option>
                  <option value="brands">Brands</option>
                </select>
              </div>

              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder={`Search ${searchCategory}...`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 py-6 text-base border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
            </div>

            <Button className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 px-8 py-6 text-base rounded-lg transition-all duration-300 hover:scale-105 border-0 text-white">
              <Search className="w-5 h-5 mr-2" />
              Search
            </Button>
          </div>

          {/* 🔥 Dynamic Dummy Results */}
          {results.length > 0 && (
            <div className="mt-6 bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-4 animate-fade-in">
              {results.map((item, i) => (
                <div
                  key={i}
                  className="p-3 border-b last:border-b-0 border-gray-100 dark:border-gray-700 hover:bg-rose-50 dark:hover:bg-gray-700/40 rounded-md transition"
                >
                  {item.name === "No results found." ? (
                    <p className="text-center text-gray-500 dark:text-gray-400">{item.name}</p>
                  ) : (
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold text-gray-800 dark:text-gray-100">{item.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {item.role} • {item.location}
                        </p>
                      </div>
                      <span className="text-rose-500 font-medium">{item.rating}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Stats Section */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-slide-up"
          style={{ animationDelay: "0.7s" }}
        >
          {[
            { icon: <Users className="w-8 h-8" />, value: "500+", label: "Designers" },
            { icon: <Palette className="w-8 h-8" />, value: "10K+", label: "Clients" },
            { icon: <Star className="w-8 h-8" />, value: "4.9★", label: "Rating" },
            { icon: <Clock className="w-8 h-8" />, value: "24/7", label: "Support" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 rounded-xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-center mb-3 text-rose-500">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float-elegant {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(2deg); }
          66% { transform: translateY(-8px) rotate(-2deg); }
        }
        @keyframes soft-float {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.15; }
          50% { transform: translateY(-20px) scale(1.05); opacity: 0.2; }
        }
        @keyframes slide-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes move-pattern {
          0% { background-position: 0 0; }
          100% { background-position: 60px 60px; }
        }
        .animate-float-elegant { animation: float-elegant 8s ease-in-out infinite; }
        .animate-soft-float { animation: soft-float 12s ease-in-out infinite; }
        .animate-slide-up { animation: slide-up 1s ease-out forwards; }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-move-pattern { animation: move-pattern 20s linear infinite; }
      `}</style>
    </section>
  )
}
