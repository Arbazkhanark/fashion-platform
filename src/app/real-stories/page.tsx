// "use client"

// import { useState, useEffect } from "react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Star, Quote, Play, Calendar, MapPin, Sparkles, Heart, Share2, ArrowRight } from "lucide-react"
// import Navigation from "@/components/navigation"
// import Footer from "@/components/footer"

// interface Story {
//   id: string
//   userName: string
//   userImage: string
//   userAge: number
//   userLocation: string
//   designerName: string
//   designerSpecialty: string
//   rating: number
//   story: string
//   beforeImage: string
//   afterImage: string
//   date: string
//   occasion: string
//   likes: number
//   videoUrl?: string
//   tags: string[]
// }

// const realStories: Story[] = [
//   {
//     id: "1",
//     userName: "Priya Sharma",
//     userImage: "https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg",
//     userAge: 28,
//     userLocation: "Mumbai",
//     designerName: "Rohan Mehta",
//     designerSpecialty: "Wedding Designer",
//     rating: 5,
//     story: "I was completely lost when it came to my wedding outfit. Rohan not only designed the most beautiful lehenga but also helped me understand what would work best for my body type. The attention to detail was incredible!",
//     beforeImage: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg",
//     afterImage: "https://images.pexels.com/photos/1269036/pexels-photo-1269036.jpeg",
//     date: "2024-10-15",
//     occasion: "Wedding",
//     likes: 234,
//     videoUrl: "https://example.com/video1",
//     tags: ["Bridal", "Traditional", "Custom Design"]
//   },
//   {
//     id: "2",
//     userName: "Arjun Kapoor",
//     userImage: "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg",
//     userAge: 32,
//     userLocation: "Delhi",
//     designerName: "Neha Patel",
//     designerSpecialty: "Corporate Stylist",
//     rating: 5,
//     story: "As a corporate professional, I needed a wardrobe that reflected both professionalism and personality. Neha transformed my entire work wardrobe with pieces that are both stylish and comfortable.",
//     beforeImage: "https://images.pexels.com/photos/1300550/pexels-photo-1300550.jpeg",
//     afterImage: "https://images.pexels.com/photos/1182825/pexels-photo-1182825.jpeg",
//     date: "2024-09-22",
//     occasion: "Corporate Makeover",
//     likes: 189,
//     tags: ["Professional", "Minimalist", "Wardrobe Revamp"]
//   },
//   {
//     id: "3",
//     userName: "Zara Khan",
//     userImage: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
//     userAge: 25,
//     userLocation: "Bangalore",
//     designerName: "Vikram Singh",
//     designerSpecialty: "Party Wear Expert",
//     rating: 4,
//     story: "For my best friend's wedding, I wanted something extraordinary. Vikram created a stunning gown that made me feel like a celebrity. The compliments kept coming all night!",
//     beforeImage: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg",
//     afterImage: "https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg",
//     date: "2024-11-05",
//     occasion: "Destination Wedding",
//     likes: 312,
//     videoUrl: "https://example.com/video2",
//     tags: ["Evening Wear", "Glamorous", "Custom Fit"]
//   },
//   {
//     id: "4",
//     userName: "Rahul Desai",
//     userImage: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
//     userAge: 30,
//     userLocation: "Pune",
//     designerName: "Anjali Joshi",
//     designerSpecialty: "Traditional Wear Specialist",
//     rating: 5,
//     story: "Anjali helped me rediscover my love for traditional wear with a modern twist. Her understanding of fabrics and colors is exceptional. I've never felt more confident in ethnic wear!",
//     beforeImage: "https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg",
//     afterImage: "https://images.pexels.com/photos/14541208/pexels-photo-14541208.jpeg",
//     date: "2024-08-18",
//     occasion: "Family Function",
//     likes: 167,
//     tags: ["Ethnic", "Modern Traditional", "Color Consulting"]
//   },
//   {
//     id: "5",
//     userName: "Sonia Reddy",
//     userImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
//     userAge: 29,
//     userLocation: "Hyderabad",
//     designerName: "Karan Malhotra",
//     designerSpecialty: "Bridal Makeup Artist",
//     rating: 5,
//     story: "Karan's makeup artistry is pure magic! He understood exactly what I wanted for my wedding day and created a look that was both natural and glamorous. I felt like the best version of myself.",
//     beforeImage: "https://images.pexels.com/photos/3720424/pexels-photo-3720424.jpeg",
//     afterImage: "https://images.pexels.com/photos/2531553/pexels-photo-2531553.jpeg",
//     date: "2024-07-12",
//     occasion: "Bridal Makeup",
//     likes: 298,
//     videoUrl: "https://example.com/video3",
//     tags: ["Bridal Makeup", "Natural Glam", "Skincare"]
//   },
//   {
//     id: "6",
//     userName: "Aditya Verma",
//     userImage: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
//     userAge: 35,
//     userLocation: "Chennai",
//     designerName: "Meera Nair",
//     designerSpecialty: "Men's Fashion Consultant",
//     rating: 4,
//     story: "Meera completely transformed my casual wardrobe. Her suggestions were practical yet stylish, and I've received so many compliments from colleagues and friends about my new style.",
//     beforeImage: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
//     afterImage: "https://images.pexels.com/photos/953929/pexels-photo-953929.jpeg",
//     date: "2024-06-30",
//     occasion: "Personal Style Revamp",
//     likes: 145,
//     tags: ["Men's Fashion", "Casual Wear", "Style Transformation"]
//   }
// ]

// export default function RealStoriesPage() {
//   const [isVisible, setIsVisible] = useState(false)
//   const [selectedStory, setSelectedStory] = useState<Story | null>(null)
//   const [activeFilter, setActiveFilter] = useState("all")
//   const [likedStories, setLikedStories] = useState<Set<string>>(new Set())

//   useEffect(() => {
//     setIsVisible(true)
//   }, [])

//   const filteredStories = activeFilter === "all"
//     ? realStories
//     : realStories.filter(story => story.tags.some(tag => tag.toLowerCase().includes(activeFilter.toLowerCase())))

//   const handleLike = (storyId: string) => {
//     setLikedStories(prev => {
//       const newLiked = new Set(prev)
//       if (newLiked.has(storyId)) {
//         newLiked.delete(storyId)
//       } else {
//         newLiked.add(storyId)
//       }
//       return newLiked
//     })
//   }

//   const openStoryModal = (story: Story) => {
//     setSelectedStory(story)
//   }

//   const closeStoryModal = () => {
//     setSelectedStory(null)
//   }

//   const filters = [
//     { key: "all", label: "All Stories" },
//     { key: "bridal", label: "Bridal" },
//     { key: "corporate", label: "Corporate" },
//     { key: "traditional", label: "Traditional" },
//     { key: "makeover", label: "Makeover" }
//   ]

//   return (
//     <>
//       <Navigation />
//       <main className="min-h-screen bg-gradient-to-b from-white to-rose-50/30 dark:from-gray-900 dark:to-rose-900/20">

//         {/* Header Section */}
//         <section className="py-20 bg-gradient-to-r from-rose-50/50 to-amber-50/30 dark:from-rose-900/10 dark:to-amber-900/5 border-b border-rose-100 dark:border-rose-800/30">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className={`text-center transition-all duration-1000 ${isVisible ? 'animate-glow-in' : 'opacity-0'}`}>
//               <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 px-4 py-2 rounded-full text-sm mb-6">
//                 <Sparkles className="w-4 h-4" />
//                 Real Transformations
//               </div>
//               <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
//                 Success
//                 <span className="block bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">
//                   Stories
//                 </span>
//               </h1>
//               <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//                 Discover how real people transformed their style with our expert designers
//               </p>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
//               {[
//                 { value: "500+", label: "Success Stories" },
//                 { value: "4.9★", label: "Average Rating" },
//                 { value: "98%", label: "Satisfaction Rate" },
//                 { value: "50+", label: "Cities Covered" },
//               ].map((stat, index) => (
//                 <div
//                   key={index}
//                   className="text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 animate-fade-in-up"
//                   style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
//                 >
//                   <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
//                   <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Filters */}
//         <section className="py-8 border-b border-gray-200 dark:border-gray-700">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex flex-wrap gap-3 justify-center animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
//               {filters.map((filter) => (
//                 <button
//                   key={filter.key}
//                   onClick={() => setActiveFilter(filter.key)}
//                   className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
//                     activeFilter === filter.key
//                       ? "bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-lg"
//                       : "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-rose-200 dark:hover:border-rose-800"
//                   }`}
//                 >
//                   {filter.label}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Stories Grid */}
//         <section className="py-16">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {filteredStories.map((story, index) => (
//                 <Card
//                   key={story.id}
//                   className="overflow-hidden border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in-up group cursor-pointer"
//                   style={{ animationDelay: `${index * 0.1}s` }}
//                   onClick={() => openStoryModal(story)}
//                 >
//                   {/* Before/After Images */}
//                   <div className="relative h-64 overflow-hidden">
//                     <div className="flex h-full">
//                       <div className="flex-1 relative">
//                         <img
//                           src={story.beforeImage}
//                           alt="Before"
//                           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                         />
//                         <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
//                           Before
//                         </div>
//                       </div>
//                       <div className="flex-1 relative">
//                         <img
//                           src={story.afterImage}
//                           alt="After"
//                           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                         />
//                         <div className="absolute bottom-2 right-2 bg-green-600 text-white px-2 py-1 rounded text-xs">
//                           After
//                         </div>
//                       </div>
//                     </div>

//                     {/* Video Play Button */}
//                     {story.videoUrl && (
//                       <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
//                         <Play className="w-5 h-5 text-rose-600" />
//                       </div>
//                     )}
//                   </div>

//                   <CardContent className="p-6">
//                     {/* User Info */}
//                     <div className="flex items-center gap-3 mb-4">
//                       <img
//                         src={story.userImage}
//                         alt={story.userName}
//                         className="w-12 h-12 rounded-full object-cover"
//                       />
//                       <div>
//                         <h3 className="font-semibold text-gray-900 dark:text-white">{story.userName}</h3>
//                         <p className="text-sm text-gray-600 dark:text-gray-400">
//                           {story.userAge} • {story.userLocation}
//                         </p>
//                       </div>
//                     </div>

//                     {/* Designer Info */}
//                     <div className="mb-4">
//                       <p className="text-sm text-gray-600 dark:text-gray-400">Styled by</p>
//                       <p className="font-semibold text-rose-600 dark:text-rose-400">
//                         {story.designerName} • {story.designerSpecialty}
//                       </p>
//                     </div>

//                     {/* Rating */}
//                     <div className="flex items-center gap-2 mb-3">
//                       <div className="flex">
//                         {[...Array(5)].map((_, i) => (
//                           <Star
//                             key={i}
//                             className={`w-4 h-4 ${
//                               i < story.rating ? "fill-amber-400 text-amber-400" : "text-gray-300 dark:text-gray-600"
//                             }`}
//                           />
//                         ))}
//                       </div>
//                       <span className="text-sm font-semibold text-gray-900 dark:text-white">{story.rating}.0</span>
//                     </div>

//                     {/* Story Excerpt */}
//                     <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-4">
//                       {story.story}
//                     </p>

//                     {/* Tags */}
//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {story.tags.slice(0, 2).map((tag, tagIndex) => (
//                         <span
//                           key={tagIndex}
//                           className="px-3 py-1 bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 rounded-full text-xs font-medium"
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                       {story.tags.length > 2 && (
//                         <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-xs">
//                           +{story.tags.length - 2}
//                         </span>
//                       )}
//                     </div>

//                     {/* Actions */}
//                     <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
//                       <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
//                         <button
//                           onClick={(e) => {
//                             e.stopPropagation()
//                             handleLike(story.id)
//                           }}
//                           className="flex items-center gap-1 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
//                         >
//                           <Heart
//                             className={`w-4 h-4 ${likedStories.has(story.id) ? 'fill-rose-500 text-rose-500' : ''}`}
//                           />
//                           {story.likes + (likedStories.has(story.id) ? 1 : 0)}
//                         </button>
//                         <button className="flex items-center gap-1 hover:text-rose-600 dark:hover:text-rose-400 transition-colors">
//                           <Share2 className="w-4 h-4" />
//                           Share
//                         </button>
//                       </div>
//                       <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-500">
//                         <Calendar className="w-3 h-3" />
//                         {new Date(story.date).toLocaleDateString()}
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>

//             {/* Load More Button */}
//             <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
//               <Button className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 group">
//                 Load More Stories
//                 <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
//               </Button>
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="py-20 bg-gradient-to-r from-rose-50 to-amber-50 dark:from-rose-900/10 dark:to-amber-900/10">
//           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//             <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-12 border border-gray-200/50 dark:border-gray-700/50">
//               <Quote className="w-12 h-12 text-rose-400 mx-auto mb-6" />
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
//                 Ready to Create Your Own Success Story?
//               </h2>
//               <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
//                 Join thousands of satisfied clients who transformed their style with our expert designers
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Button className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105">
//                   Find Your Designer
//                 </Button>
//                 <Button variant="outline" className="px-8 py-3 rounded-xl bg-transparent border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300">
//                   Share Your Story
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer />

//       <style jsx>{`
//         @keyframes glow-in {
//           0% {
//             opacity: 0;
//             transform: translateY(20px);
//             filter: blur(10px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//             filter: blur(0);
//           }
//         }
//         @keyframes fade-in-up {
//           0% {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-glow-in {
//           animation: glow-in 1.2s ease-out forwards;
//         }
//         .animate-fade-in-up {
//           animation: fade-in-up 0.8s ease-out forwards;
//           opacity: 0;
//         }
//         .line-clamp-3 {
//           display: -webkit-box;
//           -webkit-line-clamp: 3;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//       `}</style>
//     </>
//   )
// }

"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Star,
  Quote,
  Play,
  Calendar,
  MapPin,
  Sparkles,
  Heart,
  Share2,
  ArrowRight,
  Plus,
} from "lucide-react";
import Link from "next/link";

interface Story {
  id: string;
  userName: string;
  userImage: string;
  userAge: number;
  userLocation: string;
  designerName: string;
  designerSpecialty: string;
  rating: number;
  story: string;
  beforeImage: string;
  afterImage: string;
  date: string;
  occasion: string;
  likes: number;
  videoUrl?: string;
  tags: string[];
}

const realStories: Story[] = [
  {
    id: "1",
    userName: "Priya Sharma",
    userImage:
      "https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg",
    userAge: 28,
    userLocation: "Mumbai",
    designerName: "Rohan Mehta",
    designerSpecialty: "Wedding Designer",
    rating: 5,
    story:
      "I was completely lost when it came to my wedding outfit. Rohan not only designed the most beautiful lehenga but also helped me understand what would work best for my body type. The attention to detail was incredible!",
    beforeImage:
      "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg",
    afterImage:
      "https://images.pexels.com/photos/1269036/pexels-photo-1269036.jpeg",
    date: "2024-10-15",
    occasion: "Wedding",
    likes: 234,
    videoUrl: "https://example.com/video1",
    tags: ["Bridal", "Traditional", "Custom Design"],
  },
  {
    id: "2",
    userName: "Arjun Kapoor",
    userImage:
      "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg",
    userAge: 32,
    userLocation: "Delhi",
    designerName: "Neha Patel",
    designerSpecialty: "Corporate Stylist",
    rating: 5,
    story:
      "As a corporate professional, I needed a wardrobe that reflected both professionalism and personality. Neha transformed my entire work wardrobe with pieces that are both stylish and comfortable.",
    beforeImage:
      "https://images.pexels.com/photos/1300550/pexels-photo-1300550.jpeg",
    afterImage:
      "https://images.pexels.com/photos/1182825/pexels-photo-1182825.jpeg",
    date: "2024-09-22",
    occasion: "Corporate Makeover",
    likes: 189,
    tags: ["Professional", "Minimalist", "Wardrobe Revamp"],
  },
  {
    id: "3",
    userName: "Zara Khan",
    userImage:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
    userAge: 25,
    userLocation: "Bangalore",
    designerName: "Vikram Singh",
    designerSpecialty: "Party Wear Expert",
    rating: 4,
    story:
      "For my best friend's wedding, I wanted something extraordinary. Vikram created a stunning gown that made me feel like a celebrity. The compliments kept coming all night!",
    beforeImage:
      "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg",
    afterImage:
      "https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg",
    date: "2024-11-05",
    occasion: "Destination Wedding",
    likes: 312,
    videoUrl: "https://example.com/video2",
    tags: ["Evening Wear", "Glamorous", "Custom Fit"],
  },
  {
    id: "4",
    userName: "Rahul Desai",
    userImage:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
    userAge: 30,
    userLocation: "Pune",
    designerName: "Anjali Joshi",
    designerSpecialty: "Traditional Wear Specialist",
    rating: 5,
    story:
      "Anjali helped me rediscover my love for traditional wear with a modern twist. Her understanding of fabrics and colors is exceptional. I've never felt more confident in ethnic wear!",
    beforeImage:
      "https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg",
    afterImage:
      "https://images.pexels.com/photos/14541208/pexels-photo-14541208.jpeg",
    date: "2024-08-18",
    occasion: "Family Function",
    likes: 167,
    tags: ["Ethnic", "Modern Traditional", "Color Consulting"],
  },
  {
    id: "5",
    userName: "Sonia Reddy",
    userImage:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    userAge: 29,
    userLocation: "Hyderabad",
    designerName: "Karan Malhotra",
    designerSpecialty: "Bridal Makeup Artist",
    rating: 5,
    story:
      "Karan's makeup artistry is pure magic! He understood exactly what I wanted for my wedding day and created a look that was both natural and glamorous. I felt like the best version of myself.",
    beforeImage:
      "https://images.pexels.com/photos/3720424/pexels-photo-3720424.jpeg",
    afterImage:
      "https://images.pexels.com/photos/2531553/pexels-photo-2531553.jpeg",
    date: "2024-07-12",
    occasion: "Bridal Makeup",
    likes: 298,
    videoUrl: "https://example.com/video3",
    tags: ["Bridal Makeup", "Natural Glam", "Skincare"],
  },
  {
    id: "6",
    userName: "Aditya Verma",
    userImage:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    userAge: 35,
    userLocation: "Chennai",
    designerName: "Meera Nair",
    designerSpecialty: "Men's Fashion Consultant",
    rating: 4,
    story:
      "Meera completely transformed my casual wardrobe. Her suggestions were practical yet stylish, and I've received so many compliments from colleagues and friends about my new style.",
    beforeImage:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
    afterImage:
      "https://images.pexels.com/photos/953929/pexels-photo-953929.jpeg",
    date: "2024-06-30",
    occasion: "Personal Style Revamp",
    likes: 145,
    tags: ["Men's Fashion", "Casual Wear", "Style Transformation"],
  },
];

export default function RealStoriesPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [likedStories, setLikedStories] = useState<Set<string>>(new Set());

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredStories =
    activeFilter === "all"
      ? realStories
      : realStories.filter((story) =>
          story.tags.some((tag) =>
            tag.toLowerCase().includes(activeFilter.toLowerCase())
          )
        );

  const handleLike = (storyId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setLikedStories((prev) => {
      const newLiked = new Set(prev);
      if (newLiked.has(storyId)) {
        newLiked.delete(storyId);
      } else {
        newLiked.add(storyId);
      }
      return newLiked;
    });
  };

  const openStoryModal = (story: Story) => {
    setSelectedStory(story);
  };

  const closeStoryModal = () => {
    setSelectedStory(null);
  };

  const filters = [
    { key: "all", label: "All Stories" },
    { key: "bridal", label: "Bridal" },
    { key: "corporate", label: "Corporate" },
    { key: "traditional", label: "Traditional" },
    { key: "makeover", label: "Makeover" },
  ];

  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-white to-rose-50/30 dark:from-gray-900 dark:to-rose-900/20">
        {/* Header Section */}
        <section className="py-20 bg-gradient-to-r from-rose-50/50 to-amber-50/30 dark:from-rose-900/10 dark:to-amber-900/5 border-b border-rose-100 dark:border-rose-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`text-center transition-all duration-1000 ${
                isVisible ? "animate-glow-in" : "opacity-0"
              }`}
            >
              <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 px-4 py-2 rounded-full text-sm mb-6">
                <Sparkles className="w-4 h-4" />
                Real Transformations
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Success
                <span className="block bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">
                  Stories
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Discover how real people transformed their style with our expert
                designers
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
              {[
                { value: "500+", label: "Success Stories" },
                { value: "4.9★", label: "Average Rating" },
                { value: "98%", label: "Satisfaction Rate" },
                { value: "50+", label: "Cities Covered" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                >
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Share Your Story Button - Added in Header */}
            <div
              className="text-center mt-12 animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <Link href="/share-story">
                <Button className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 group shadow-lg">
                  <Plus className="w-5 h-5 mr-2" />
                  Share Your Story
                  <Sparkles className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
                </Button>
              </Link>
              <p className="text-gray-600 dark:text-gray-400 mt-3 text-sm">
                Inspire others with your style transformation journey
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="flex flex-wrap gap-3 justify-center animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    activeFilter === filter.key
                      ? "bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-lg"
                      : "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-rose-200 dark:hover:border-rose-800"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Stories Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStories.map((story, index) => (
                <Card
                  key={story.id}
                  className="overflow-hidden border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in-up group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => openStoryModal(story)}
                >
                  {/* Before/After Images */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="flex h-full">
                      <div className="flex-1 relative">
                        <img
                          src={story.beforeImage}
                          alt="Before"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                          Before
                        </div>
                      </div>
                      <div className="flex-1 relative">
                        <img
                          src={story.afterImage}
                          alt="After"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute bottom-2 right-2 bg-green-600 text-white px-2 py-1 rounded text-xs">
                          After
                        </div>
                      </div>
                    </div>

                    {/* Video Play Button */}
                    {story.videoUrl && (
                      <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                        <Play className="w-5 h-5 text-rose-600" />
                      </div>
                    )}
                  </div>

                  <CardContent className="p-6">
                    {/* User Info */}
                    <div className="flex items-center gap-3 mb-4">
                      <img
                        src={story.userImage}
                        alt={story.userName}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {story.userName}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {story.userAge} • {story.userLocation}
                        </p>
                      </div>
                    </div>

                    {/* Designer Info */}
                    <div className="mb-4">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Styled by
                      </p>
                      <p className="font-semibold text-rose-600 dark:text-rose-400">
                        {story.designerName} • {story.designerSpecialty}
                      </p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < story.rating
                                ? "fill-amber-400 text-amber-400"
                                : "text-gray-300 dark:text-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        {story.rating}.0
                      </span>
                    </div>

                    {/* Story Excerpt */}
                    <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-4">
                      {story.story}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {story.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                      {story.tags.length > 2 && (
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-xs">
                          +{story.tags.length - 2}
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <button
                          onClick={(e) => handleLike(story.id, e)}
                          className="flex items-center gap-1 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                        >
                          <Heart
                            className={`w-4 h-4 ${
                              likedStories.has(story.id)
                                ? "fill-rose-500 text-rose-500"
                                : ""
                            }`}
                          />
                          {story.likes + (likedStories.has(story.id) ? 1 : 0)}
                        </button>
                        <button className="flex items-center gap-1 hover:text-rose-600 dark:hover:text-rose-400 transition-colors">
                          <Share2 className="w-4 h-4" />
                          Share
                        </button>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-500">
                        <Calendar className="w-3 h-3" />
                        {new Date(story.date).toLocaleDateString()}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More Button */}
            <div
              className="text-center mt-12 animate-fade-in-up"
              style={{ animationDelay: "0.7s" }}
            >
              <Button className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 group">
                Load More Stories
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-rose-50 to-amber-50 dark:from-rose-900/10 dark:to-amber-900/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-12 border border-gray-200/50 dark:border-gray-700/50">
              <Quote className="w-12 h-12 text-rose-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Create Your Own Success Story?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied clients who transformed their style
                with our expert designers
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/share-story">
                  <Button className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 group">
                    <Plus className="w-5 h-5 mr-2" />
                    Share Your Story
                  </Button>
                </Link>
                <Link href="/designers">
                  <Button
                    variant="outline"
                    className="px-8 py-3 rounded-xl bg-transparent border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300"
                  >
                    Find a Designer
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Story Modal */}
      {selectedStory && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white dark:bg-gray-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={closeStoryModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
              >
                <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>

              {/* Before/After Images */}
              <div className="grid grid-cols-2 gap-0 h-96">
                <div className="relative">
                  <img
                    src={selectedStory.beforeImage}
                    alt="Before"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
                    Before
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={selectedStory.afterImage}
                    alt="After"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 right-4 bg-green-600 text-white px-3 py-1 rounded text-sm">
                    After
                  </div>
                </div>
              </div>

              {/* Story Content */}
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={selectedStory.userImage}
                    alt={selectedStory.userName}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {selectedStory.userName}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {selectedStory.userAge} • {selectedStory.userLocation}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Styled by
                  </p>
                  <p className="text-lg font-semibold text-rose-600 dark:text-rose-400">
                    {selectedStory.designerName} •{" "}
                    {selectedStory.designerSpecialty}
                  </p>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < selectedStory.rating
                            ? "fill-amber-400 text-amber-400"
                            : "text-gray-300 dark:text-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    {selectedStory.rating}.0
                  </span>
                  <div className="flex items-center gap-1 text-gray-500 dark:text-gray-500">
                    <Calendar className="w-4 h-4" />
                    {new Date(selectedStory.date).toLocaleDateString()}
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                    {selectedStory.story}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedStory.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .animate-glow-in {
          animation: glow-in 1.2s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
}

// Add the missing X icon component
const X = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);
