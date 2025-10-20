// "use client"

// import Link from "next/link"
// import { Heart, Sparkles, Briefcase, Gift, Users } from "lucide-react"
// import { Card } from "@/components/ui/card"

// const categories = [
//   {
//     id: "wedding",
//     name: "Wedding",
//     description: "Bridal wear and wedding styling",
//     icon: Heart,
//     color: "bg-[#E91E63]",
//     count: "120+ designers",
//   },
//   {
//     id: "casual",
//     name: "Casual Wear",
//     description: "Everyday fashion and styling",
//     icon: Sparkles,
//     color: "bg-[#00BCD4]",
//     count: "85+ designers",
//   },
//   {
//     id: "corporate",
//     name: "Corporate",
//     description: "Professional and business attire",
//     icon: Briefcase,
//     color: "bg-[#9C27B0]",
//     count: "95+ designers",
//   },
//   {
//     id: "party",
//     name: "Party & Events",
//     description: "Evening wear and special occasions",
//     icon: Gift,
//     color: "bg-[#FFC107]",
//     count: "110+ designers",
//   },
//   {
//     id: "birthday",
//     name: "Birthday",
//     description: "Birthday outfit styling",
//     icon: Users,
//     color: "bg-[#FF6B6B]",
//     count: "75+ designers",
//   },
// ]

// export default function CategoryGrid() {
//   return (
//     <section className="py-20 bg-background">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Find Designers for Every Vibe</h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Discover curated fashion professionals specialized in your style needs
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
//           {categories.map((category) => {
//             const Icon = category.icon
//             return (
//               <Link key={category.id} href={`/designers?category=${category.id}`}>
//                 <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer group overflow-hidden">
//                   <div className="p-6 flex flex-col h-full">
//                     <div
//                       className={`${category.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
//                     >
//                       <Icon size={24} className="text-white" />
//                     </div>
//                     <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition">
//                       {category.name}
//                     </h3>
//                     <p className="text-sm text-muted-foreground mb-4 flex-1">{category.description}</p>
//                     <p className="text-xs font-semibold text-accent">{category.count}</p>
//                   </div>
//                 </Card>
//               </Link>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }












"use client"

import Link from "next/link"
import { Heart, Sparkles, Briefcase, Gift, Users, ArrowRight, Star } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useState, useEffect } from "react"

const categories = [
  {
    id: "wedding",
    name: "Wedding",
    description: "Bridal wear and wedding styling",
    icon: Heart,
    color: "from-rose-500 to-pink-600",
    bgColor: "bg-gradient-to-br from-rose-50 to-pink-100",
    hoverBg: "bg-gradient-to-br from-rose-100 to-pink-200",
    count: "120+ designers",
    stars: 4.9,
  },
  {
    id: "casual",
    name: "Casual Wear",
    description: "Everyday fashion and styling",
    icon: Sparkles,
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-gradient-to-br from-blue-50 to-cyan-100",
    hoverBg: "bg-gradient-to-br from-blue-100 to-cyan-200",
    count: "85+ designers",
    stars: 4.8,
  },
  {
    id: "corporate",
    name: "Corporate",
    description: "Professional and business attire",
    icon: Briefcase,
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-gradient-to-br from-purple-50 to-violet-100",
    hoverBg: "bg-gradient-to-br from-purple-100 to-violet-200",
    count: "95+ designers",
    stars: 4.7,
  },
  {
    id: "party",
    name: "Party & Events",
    description: "Evening wear and special occasions",
    icon: Gift,
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-gradient-to-br from-amber-50 to-orange-100",
    hoverBg: "bg-gradient-to-br from-amber-100 to-orange-200",
    count: "110+ designers",
    stars: 4.9,
  },
  {
    id: "birthday",
    name: "Birthday",
    description: "Birthday outfit styling",
    icon: Users,
    color: "from-red-500 to-rose-600",
    bgColor: "bg-gradient-to-br from-red-50 to-rose-100",
    hoverBg: "bg-gradient-to-br from-red-100 to-rose-200",
    count: "75+ designers",
    stars: 4.6,
  },
]

export default function CategoryGrid() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-b from-white via-rose-50/20 to-amber-50/10 dark:from-gray-900 dark:via-rose-900/10 dark:to-amber-900/5 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/50 to-transparent dark:from-gray-900/50" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-rose-50/30 to-transparent dark:from-rose-900/10" />
      
      {/* Floating Particles */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-rose-400 rounded-full animate-float-particle opacity-60" />
      <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-float-particle opacity-40" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-amber-400 rounded-full animate-float-particle opacity-50" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-float-particle opacity-30" style={{ animationDelay: "3s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-glow-in' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 px-4 py-2 rounded-full text-sm mb-6 shadow-lg animate-pulse-slow">
            <Sparkles className="w-4 h-4 animate-spin-slow" />
            Browse Categories
            <Sparkles className="w-4 h-4 animate-spin-slow" style={{ animationDelay: "0.5s" }} />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-text-shimmer">
            Find Designers for
            <span className="block bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 bg-clip-text text-transparent animate-gradient-flow">
              Every Style
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
            Discover curated fashion professionals specialized in your style needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <Link 
                key={category.id} 
                href={`/designers?category=${category.id}`}
                className="block group"
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-700 cursor-pointer overflow-hidden border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl relative 
                  hover:scale-105 hover:-translate-y-3 animate-card-float"
                  style={{ 
                    animationDelay: `${index * 0.2}s`,
                    animationDuration: '6s'
                  }}
                >
                  {/* Animated Border */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                    <div className="absolute inset-[2px] bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-xl" />
                  </div>

                  {/* Floating Icon Background */}
                  <div className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br ${category.color} rounded-full opacity-5 group-hover:opacity-10 transition-all duration-1000 group-hover:scale-150`} />
                  
                  <div className="relative p-6 flex flex-col h-full z-10">
                    {/* Icon with floating animation */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-6 
                      group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg relative overflow-hidden`}>
                      <Icon size={32} className="text-white z-10 relative" />
                      <div className="absolute inset-0 bg-white/20 animate-shine" />
                    </div>
                    
                    {/* Rating Stars */}
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          size={14}
                          className={`${
                            i < Math.floor(category.stars) 
                              ? "fill-amber-400 text-amber-400" 
                              : "fill-gray-300 text-gray-300 dark:fill-gray-600 dark:text-gray-600"
                          }`}
                        />
                      ))}
                      <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
                        {category.stars}
                      </span>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 flex-1 leading-relaxed group-hover:translate-x-1 transition-transform duration-300 delay-100">
                      {category.description}
                    </p>
                    
                    {/* Footer with animated elements */}
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-semibold bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent">
                        {category.count}
                      </p>
                      <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center 
                          opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500 group-hover:rotate-180`}>
                          <ArrowRight size={16} className="text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl blur-xl`} />
                  
                  {/* Animated Dots Pattern */}
                  <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    <div className="flex gap-1">
                      {[...Array(3)].map((_, i) => (
                        <div 
                          key={i}
                          className={`w-1 h-1 rounded-full bg-gradient-to-r ${category.color} animate-bounce`}
                          style={{ animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>

        {/* Animated Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: "1.2s" }}>
          <div className="inline-flex items-center gap-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl px-6 py-4 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 group">
            <Sparkles className="w-5 h-5 text-rose-500 animate-pulse" />
            <p className="text-gray-700 dark:text-gray-300 font-medium">
              Can't find what you're looking for?{" "}
              <Link href="/designers" className="text-rose-600 dark:text-rose-400 hover:underline font-semibold group-hover:tracking-wide transition-all">
                Browse all designers
              </Link>
            </p>
            <ArrowRight className="w-5 h-5 text-rose-500 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes glow-in {
          0% {
            opacity: 0;
            transform: scale(0.9);
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            transform: scale(1);
            filter: blur(0);
          }
        }
        @keyframes text-shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        @keyframes gradient-flow {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes card-float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(20px);
          }
          75% {
            transform: translateY(-15px) translateX(-10px);
          }
        }
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        .animate-glow-in {
          animation: glow-in 1.5s ease-out forwards;
        }
        .animate-text-shimmer {
          background: linear-gradient(90deg, #000, #fff, #000);
          background-size: 200% 100%;
          animation: text-shimmer 3s infinite linear;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .animate-gradient-flow {
          animation: gradient-flow 4s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        .animate-card-float {
          animation: card-float 6s ease-in-out infinite;
        }
        .animate-float-particle {
          animation: float-particle 8s ease-in-out infinite;
        }
        .animate-shine {
          animation: shine 2s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}