// "use client";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Search,
//   Sparkles,
//   Users,
//   Star,
//   Clock,
//   Scissors,
//   Gem,
//   Palette,
// } from "lucide-react";
// import { useState, useEffect, useMemo } from "react";

// interface SearchItem {
//   name: string;
//   role?: string;
//   location?: string;
//   rating?: string;
// }

// export default function HeroSection() {
//   const [searchCategory, setSearchCategory] = useState("designers");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [results, setResults] = useState<SearchItem[]>([]);

//   // ✅ Memoized dummy data (prevents ESLint dependency warning)
//   const dummyData = useMemo(
//     () => ({
//       designers: [
//         {
//           name: "Aarav Mehta",
//           role: "Bridal Designer",
//           location: "Mumbai",
//           rating: "4.8★",
//         },
//         {
//           name: "Neha Kapoor",
//           role: "Fashion Consultant",
//           location: "Delhi",
//           rating: "4.9★",
//         },
//         {
//           name: "Ritika Sharma",
//           role: "Casual Wear Specialist",
//           location: "Bangalore",
//           rating: "4.7★",
//         },
//       ],
//       stylists: [
//         {
//           name: "Rohan Verma",
//           role: "Celebrity Stylist",
//           location: "Delhi",
//           rating: "4.9★",
//         },
//         {
//           name: "Isha Patel",
//           role: "Makeup & Hair Stylist",
//           location: "Pune",
//           rating: "4.8★",
//         },
//       ],
//       tailors: [
//         {
//           name: "Arjun Tailors",
//           role: "Custom Suit Tailor",
//           location: "Lucknow",
//           rating: "4.6★",
//         },
//         {
//           name: "Classic Stitch",
//           role: "Traditional Tailor",
//           location: "Chennai",
//           rating: "4.7★",
//         },
//       ],
//       brands: [
//         {
//           name: "Velvet Vogue",
//           role: "Luxury Brand",
//           location: "Mumbai",
//           rating: "4.9★",
//         },
//         {
//           name: "UrbanEdge",
//           role: "Streetwear Brand",
//           location: "Delhi",
//           rating: "4.8★",
//         },
//       ],
//     }),
//     []
//   );

//   // 🔍 Simulated search
//   useEffect(() => {
//     if (searchTerm.trim().length > 0) {
//       const allResults = dummyData[
//         searchCategory as keyof typeof dummyData
//       ].filter((item) =>
//         item.name.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       setResults(
//         allResults.length > 0 ? allResults : [{ name: "No results found." }]
//       );
//     } else {
//       setResults([]);
//     }
//   }, [searchTerm, searchCategory, dummyData]);

//   return (
//     <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-rose-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-rose-900">
//       {/* Pattern Background */}
//       <div className="absolute inset-0 opacity-[0.03]">
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%221%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-move-pattern" />
//       </div>

//       {/* Floating Icons */}
//       <div className="absolute top-20 right-20 animate-float-elegant">
//         <Gem className="w-16 h-16 text-rose-400 drop-shadow-lg" />
//       </div>
//       <div
//         className="absolute bottom-32 left-20 animate-float-elegant"
//         style={{ animationDelay: "2s" }}
//       >
//         <Scissors className="w-14 h-14 text-gray-600 drop-shadow-lg" />
//       </div>
//       <div
//         className="absolute top-1/2 left-1/3 animate-float-elegant"
//         style={{ animationDelay: "3s" }}
//       >
//         <Gem className="w-12 h-12 text-purple-400 drop-shadow-lg" />
//       </div>

//       {/* Gradient Circles */}
//       <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full opacity-20 animate-soft-float" />
//       <div
//         className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tr from-amber-200 to-orange-200 rounded-full opacity-15 animate-soft-float"
//         style={{ animationDelay: "2s" }}
//       />

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 px-4 py-2 rounded-full text-sm mb-8 animate-fade-in">
//             <Sparkles className="w-4 h-4" />
//             Find Your Style
//           </div>

//           <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-up">
//             Find the Perfect <br />
//             <span className="bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">
//               Fashion Designer
//             </span>
//           </h1>

//           <p
//             className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto animate-slide-up"
//             style={{ animationDelay: "0.3s" }}
//           >
//             Connect with professional designers and stylists for any occasion.
//             Get custom designs that match your style.
//           </p>
//         </div>

//         {/* Search Bar */}
//         <div
//           className="max-w-3xl mx-auto mb-10 animate-slide-up"
//           style={{ animationDelay: "0.5s" }}
//         >
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
//                     <p className="text-center text-gray-500 dark:text-gray-400">
//                       {item.name}
//                     </p>
//                   ) : (
//                     <div className="flex justify-between items-center">
//                       <div>
//                         <p className="font-semibold text-gray-800 dark:text-gray-100">
//                           {item.name}
//                         </p>
//                         <p className="text-sm text-gray-500 dark:text-gray-400">
//                           {item.role} • {item.location}
//                         </p>
//                       </div>
//                       <span className="text-rose-500 font-medium">
//                         {item.rating}
//                       </span>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Stats Section */}
//         <div
//           className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-slide-up"
//           style={{ animationDelay: "0.7s" }}
//         >
//           {[
//             {
//               icon: <Users className="w-8 h-8" />,
//               value: "500+",
//               label: "Designers",
//             },
//             {
//               icon: <Palette className="w-8 h-8" />,
//               value: "10K+",
//               label: "Clients",
//             },
//             {
//               icon: <Star className="w-8 h-8" />,
//               value: "4.9★",
//               label: "Rating",
//             },
//             {
//               icon: <Clock className="w-8 h-8" />,
//               value: "24/7",
//               label: "Support",
//             },
//           ].map((stat, index) => (
//             <div
//               key={index}
//               className="text-center p-4 rounded-xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
//             >
//               <div className="flex justify-center mb-3 text-rose-500">
//                 {stat.icon}
//               </div>
//               <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
//                 {stat.value}
//               </div>
//               <p className="text-sm text-gray-600 dark:text-gray-400">
//                 {stat.label}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Animations */}
//       <style jsx>{`
//         @keyframes float-elegant {
//           0%,
//           100% {
//             transform: translateY(0) rotate(0deg);
//           }
//           33% {
//             transform: translateY(-15px) rotate(2deg);
//           }
//           66% {
//             transform: translateY(-8px) rotate(-2deg);
//           }
//         }
//         @keyframes soft-float {
//           0%,
//           100% {
//             transform: translateY(0) scale(1);
//             opacity: 0.15;
//           }
//           50% {
//             transform: translateY(-20px) scale(1.05);
//             opacity: 0.2;
//           }
//         }
//         @keyframes slide-up {
//           0% {
//             opacity: 0;
//             transform: translateY(40px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         @keyframes fade-in {
//           0% {
//             opacity: 0;
//           }
//           100% {
//             opacity: 1;
//           }
//         }
//         @keyframes move-pattern {
//           0% {
//             background-position: 0 0;
//           }
//           100% {
//             background-position: 60px 60px;
//           }
//         }
//         .animate-float-elegant {
//           animation: float-elegant 8s ease-in-out infinite;
//         }
//         .animate-soft-float {
//           animation: soft-float 12s ease-in-out infinite;
//         }
//         .animate-slide-up {
//           animation: slide-up 1s ease-out forwards;
//         }
//         .animate-fade-in {
//           animation: fade-in 1s ease-out forwards;
//         }
//         .animate-move-pattern {
//           animation: move-pattern 20s linear infinite;
//         }
//       `}</style>
//     </section>
//   );
// }














"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  Sparkles,
  Users,
  Star,
  Clock,
  Scissors,
  Gem,
  Palette,
  Quote,
  ArrowRight,
  Play,
} from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import Image from "next/image";

interface SearchItem {
  name: string;
  role?: string;
  location?: string;
  rating?: string;
}

interface SuccessStory {
  id: number;
  name: string;
  role: string;
  location: string;
  rating: string;
  story: string;
  image: string;
  beforeAfter: {
    before: string;
    after: string;
  };
}

export default function HeroSection() {
  const [searchCategory, setSearchCategory] = useState("designers");
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const [activeStory, setActiveStory] = useState(0);

  // ✅ Memoized dummy data (prevents ESLint dependency warning)
  const dummyData = useMemo(
    () => ({
      designers: [
        {
          name: "Aarav Mehta",
          role: "Bridal Designer",
          location: "Mumbai",
          rating: "4.8★",
        },
        {
          name: "Neha Kapoor",
          role: "Fashion Consultant",
          location: "Delhi",
          rating: "4.9★",
        },
        {
          name: "Ritika Sharma",
          role: "Casual Wear Specialist",
          location: "Bangalore",
          rating: "4.7★",
        },
      ],
      stylists: [
        {
          name: "Rohan Verma",
          role: "Celebrity Stylist",
          location: "Delhi",
          rating: "4.9★",
        },
        {
          name: "Isha Patel",
          role: "Makeup & Hair Stylist",
          location: "Pune",
          rating: "4.8★",
        },
      ],
      tailors: [
        {
          name: "Arjun Tailors",
          role: "Custom Suit Tailor",
          location: "Lucknow",
          rating: "4.6★",
        },
        {
          name: "Classic Stitch",
          role: "Traditional Tailor",
          location: "Chennai",
          rating: "4.7★",
        },
      ],
      brands: [
        {
          name: "Velvet Vogue",
          role: "Luxury Brand",
          location: "Mumbai",
          rating: "4.9★",
        },
        {
          name: "UrbanEdge",
          role: "Streetwear Brand",
          location: "Delhi",
          rating: "4.8★",
        },
      ],
    }),
    []
  );

  // Success Stories Data
  const successStories: SuccessStory[] = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Bridal Client",
      location: "Delhi",
      rating: "5.0★",
      story: "Neha Kapoor designed my wedding lehenga and it was absolutely stunning! The attention to detail and personalized touch made me feel like a princess.",
      image: "https://images.pexels.com/photos/20384617/pexels-photo-20384617.jpeg",
      beforeAfter: {
        before: "https://images.pexels.com/photos/29630069/pexels-photo-29630069.jpeg",
        after: "https://images.pexels.com/photos/29630062/pexels-photo-29630062.jpeg"
      }
    },
    {
      id: 2,
      name: "Rahul Mehta",
      role: "Corporate Client",
      location: "Mumbai",
      rating: "4.9★",
      story: "Aarav Mehta transformed my professional wardrobe. His understanding of fabrics and fit is exceptional. Highly recommended!",
      image: "https://images.pexels.com/photos/34367100/pexels-photo-34367100.jpeg",
      beforeAfter: {
        before: "https://images.pexels.com/photos/34371087/pexels-photo-34371087.jpeg",
        after: "https://images.pexels.com/photos/34371091/pexels-photo-34371091.jpeg"
      }
    },
    {
      id: 3,
      name: "Ananya Reddy",
      role: "Fashion Enthusiast",
      location: "Bangalore",
      rating: "4.8★",
      story: "Working with Ritika Sharma was amazing! She understood my style and created outfits that were both trendy and comfortable.",
      image: "https://images.pexels.com/photos/7020796/pexels-photo-7020796.jpeg",
      beforeAfter: {
        before: "https://images.pexels.com/photos/7020594/pexels-photo-7020594.jpeg",
        after: "https://images.pexels.com/photos/7020547/pexels-photo-7020547.jpeg"
      }
    }
  ];

  // Auto-rotate stories
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStory((prev) => (prev + 1) % successStories.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [successStories.length]);

  // 🔍 Simulated search
  useEffect(() => {
    if (searchTerm.trim().length > 0) {
      const allResults = dummyData[
        searchCategory as keyof typeof dummyData
      ].filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setResults(
        allResults.length > 0 ? allResults : [{ name: "No results found." }]
      );
    } else {
      setResults([]);
    }
  }, [searchTerm, searchCategory, dummyData]);

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
      <div
        className="absolute bottom-32 left-20 animate-float-elegant"
        style={{ animationDelay: "2s" }}
      >
        <Scissors className="w-14 h-14 text-gray-600 drop-shadow-lg" />
      </div>
      <div
        className="absolute top-1/2 left-1/3 animate-float-elegant"
        style={{ animationDelay: "3s" }}
      >
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
            Connect with professional designers and stylists for any occasion.
            Get custom designs that match your style.
          </p>
        </div>

        {/* Search Bar */}
        <div
          className="max-w-3xl mx-auto mb-10 animate-slide-up"
          style={{ animationDelay: "0.5s" }}
        >
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
                    <p className="text-center text-gray-500 dark:text-gray-400">
                      {item.name}
                    </p>
                  ) : (
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold text-gray-800 dark:text-gray-100">
                          {item.name}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {item.role} • {item.location}
                        </p>
                      </div>
                      <span className="text-rose-500 font-medium">
                        {item.rating}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Stats Section */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-slide-up mb-20"
          style={{ animationDelay: "0.7s" }}
        >
          {[
            {
              icon: <Users className="w-8 h-8" />,
              value: "500+",
              label: "Designers",
            },
            {
              icon: <Palette className="w-8 h-8" />,
              value: "10K+",
              label: "Clients",
            },
            {
              icon: <Star className="w-8 h-8" />,
              value: "4.9★",
              label: "Rating",
            },
            {
              icon: <Clock className="w-8 h-8" />,
              value: "24/7",
              label: "Support",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 rounded-xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-center mb-3 text-rose-500">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Success Stories Section */}
        <div className="max-w-6xl mx-auto animate-slide-up" style={{ animationDelay: "0.9s" }}>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Left Content */}
              <div className="flex-1 p-8 lg:p-12">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-8 bg-gradient-to-b from-rose-500 to-amber-500 rounded-full"></div>
                  <h3 className="text-sm font-semibold text-rose-600 dark:text-rose-400 uppercase tracking-wide">
                    Success Stories
                  </h3>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Real People, <span className="bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">Amazing Transformations</span>
                </h2>

                {/* Story Content */}
                <div className="space-y-6">
                  {successStories.map((story, index) => (
                    <div
                      key={story.id}
                      className={`p-6 rounded-2xl transition-all duration-500 ${
                        index === activeStory
                          ? "bg-white dark:bg-gray-700 shadow-lg border border-rose-100 dark:border-rose-900"
                          : "bg-transparent opacity-0 absolute"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="relative">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-400 to-amber-400 p-0.5">
                            <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 p-0.5">
                              <Image
                                src={story.image}
                                alt={story.name}
                                width={64}
                                height={64}
                                className="rounded-full object-cover"
                              />
                            </div>
                          </div>
                          <Quote className="absolute -top-1 -right-1 w-6 h-6 text-rose-500 bg-white dark:bg-gray-800 rounded-full p-1" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                                {story.name}
                              </h4>
                              <p className="text-gray-600 dark:text-gray-400 text-sm">
                                {story.role} • {story.location}
                              </p>
                            </div>
                            <span className="flex items-center gap-1 bg-rose-50 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 px-3 py-1 rounded-full text-sm font-medium">
                              <Star className="w-4 h-4 fill-current" />
                              {story.rating}
                            </span>
                          </div>
                          
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {story.story}
                          </p>
                          
                          {/* Before-After Preview */}
                          <div className="flex items-center gap-4 mt-4">
                            <div className="text-center">
                              <div className="w-20 h-24 rounded-lg overflow-hidden shadow-md mb-2">
                                <Image
                                  src={story.beforeAfter.before}
                                  alt="Before"
                                  width={80}
                                  height={96}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <span className="text-xs text-gray-500 dark:text-gray-400">Before</span>
                            </div>
                            
                            <ArrowRight className="w-5 h-5 text-rose-500" />
                            
                            <div className="text-center">
                              <div className="w-20 h-24 rounded-lg overflow-hidden shadow-md mb-2 relative">
                                <Image
                                  src={story.beforeAfter.after}
                                  alt="After"
                                  width={80}
                                  height={96}
                                  className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                              </div>
                              <span className="text-xs text-gray-500 dark:text-gray-400">After</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Story Indicators */}
                  <div className="flex items-center gap-2">
                    {successStories.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveStory(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === activeStory
                            ? "bg-gradient-to-r from-rose-500 to-amber-500 w-8"
                            : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side - CTA */}
              <div className="lg:w-96 bg-gradient-to-br from-rose-50 to-amber-50 dark:from-gray-700 dark:to-gray-800 p-8 lg:p-12 flex flex-col justify-center items-center text-center border-l border-gray-200 dark:border-gray-700">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-rose-500 to-amber-500 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Watch Their Journey
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    See how our designers transformed their style and confidence
                  </p>
                </div>

                <Button className="group bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  View All Stories
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                  200+ inspiring transformations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float-elegant {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          33% {
            transform: translateY(-15px) rotate(2deg);
          }
          66% {
            transform: translateY(-8px) rotate(-2deg);
          }
        }
        @keyframes soft-float {
          0%,
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.15;
          }
          50% {
            transform: translateY(-20px) scale(1.05);
            opacity: 0.2;
          }
        }
        @keyframes slide-up {
          0% {
            opacity: 0;
            transform: translateY(40px);
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
        @keyframes move-pattern {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 60px 60px;
          }
        }
        .animate-float-elegant {
          animation: float-elegant 8s ease-in-out infinite;
        }
        .animate-soft-float {
          animation: soft-float 12s ease-in-out infinite;
        }
        .animate-slide-up {
          animation: slide-up 1s ease-out forwards;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-move-pattern {
          animation: move-pattern 20s linear infinite;
        }
      `}</style>
    </section>
  );
}






















// "use client";

// import { useState, useEffect, useRef } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Search,
//   Sparkles,
//   Users,
//   Star,
//   Clock,
//   Scissors,
//   Gem,
//   Palette,
//   Quote,
//   ArrowRight,
//   Play,
//   Heart,
//   Zap,
//   TrendingUp,
//   Crown,
// } from "lucide-react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";

// interface SuccessStory {
//   id: number;
//   name: string;
//   role: string;
//   location: string;
//   rating: string;
//   story: string;
//   image: string;
//   transformation: string;
// }

// export default function EnhancedHeroSection() {
//   const [searchCategory, setSearchCategory] = useState("designers");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [activeStory, setActiveStory] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   // Success Stories Data
//   const successStories: SuccessStory[] = [
//     {
//       id: 1,
//       name: "Priya Sharma",
//       role: "Bridal Client",
//       location: "Delhi",
//       rating: "5.0",
//       story: "My wedding lehenga was a dream come true! The intricate work and perfect fit made me feel like a princess.",
//       image: "/api/placeholder/80/80",
//       transformation: "Bridal Makeover",
//     },
//     {
//       id: 2,
//       name: "Rahul Mehta",
//       role: "Corporate Client",
//       location: "Mumbai",
//       rating: "4.9",
//       story: "Transformed my professional wardrobe with impeccable tailoring and modern designs that stand out.",
//       image: "/api/placeholder/80/80",
//       transformation: "Style Revolution",
//     },
//     {
//       id: 3,
//       name: "Ananya Reddy",
//       role: "Fashion Enthusiast",
//       location: "Bangalore",
//       rating: "4.8",
//       story: "Found my signature style! The designs are both trendy and timeless, perfect for any occasion.",
//       image: "/api/placeholder/80/80",
//       transformation: "Personal Style",
//     },
//   ];

//   // Floating elements data
//   const floatingElements = [
//     { icon: Gem, color: "text-rose-400", delay: 0, position: "top-20 right-20" },
//     { icon: Scissors, color: "text-purple-400", delay: 2, position: "bottom-32 left-20" },
//     { icon: Heart, color: "text-amber-400", delay: 1, position: "top-1/3 left-1/4" },
//     { icon: Crown, color: "text-blue-400", delay: 3, position: "bottom-20 right-1/3" },
//     { icon: Zap, color: "text-green-400", delay: 4, position: "top-40 left-1/2" },
//   ];

//   // Auto-rotate stories
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveStory((prev) => (prev + 1) % successStories.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [successStories.length]);

//   // Intersection Observer for animations
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section 
//       ref={sectionRef}
//       className="relative min-h-screen py-20 md:py-32 overflow-hidden bg-gradient-to-br from-rose-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-rose-900"
//     >
//       {/* Animated Background Pattern */}
//       <div className="absolute inset-0 opacity-[0.02]">
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M11%2018c3.866%200%207-3.134%207-7s-3.134-7-7-7-7%203.134-7%207%203.134%207%207%207zm48%2025c3.866%200%207-3.134%207-7s-3.134-7-7-7-7%203.134-7%207%203.134%207%207%207zm-43-7c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zm63%2031c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zM34%2090c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zm56-76c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zM12%2086c2.21%200%204-1.79%204-4s-1.79-4-4-4-4%201.79-4%204%201.79%204%204%204zm28-65c2.21%200%204-1.79%204-4s-1.79-4-4-4-4%201.79-4%204%201.79%204%204%204zm23-11c2.76%200%205-2.24%205-5s-2.24-5-5-5-5%202.24-5%205%202.24%205%205%205zm-6%2060c2.21%200%204-1.79%204-4s-1.79-4-4-4-4%201.79-4%204%201.79%204%204%204zm29%2022c2.76%200%205-2.24%205-5s-2.24-5-5-5-5%202.24-5%205%202.24%205%205%205zM32%2063c2.76%200%205-2.24%205-5s-2.24-5-5-5-5%202.24-5%205%202.24%205%205%205zm57-13c2.76%200%205-2.24%205-5s-2.24-5-5-5-5%202.24-5%205%202.24%205%205%205zm-9-21c1.105%200%202-.895%202-2s-.895-2-2-2-2%20.895-2%202%20.895%202%202%202zM60%2091c1.105%200%202-.895%202-2s-.895-2-2-2-2%20.895-2%202%20.895%202%202%202zM35%2041c1.105%200%202-.895%202-2s-.895-2-2-2-2%20.895-2%202%20.895%202%202%202zM12%2060c1.105%200%202-.895%202-2s-.895-2-2-2-2%20.895-2%202%20.895%202%202%202z%22%20fill%3D%22%23000000%22%20fill-opacity%3D%221%22/%3E%3C/svg%3E')] animate-move-pattern" />
//       </div>

//       {/* Floating Animated Icons */}
//       {floatingElements.map((element, index) => {
//         const IconComponent = element.icon;
//         return (
//           <motion.div
//             key={index}
//             className={`absolute ${element.position} z-0`}
//             initial={{ y: 0, rotate: 0 }}
//             animate={{
//               y: [0, -20, 0],
//               rotate: [0, 5, -5, 0],
//             }}
//             transition={{
//               duration: 4,
//               delay: element.delay,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           >
//             <IconComponent className={`w-12 h-12 ${element.color} opacity-60 drop-shadow-lg`} />
//           </motion.div>
//         );
//       })}

//       {/* Gradient Orbs */}
//       <motion.div
//         className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full opacity-20"
//         animate={{
//           scale: [1, 1.1, 1],
//           opacity: [0.15, 0.25, 0.15],
//         }}
//         transition={{
//           duration: 8,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />
//       <motion.div
//         className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tr from-amber-200 to-orange-200 rounded-full opacity-15"
//         animate={{
//           scale: [1, 1.2, 1],
//           opacity: [0.1, 0.2, 0.1],
//         }}
//         transition={{
//           duration: 10,
//           delay: 2,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Hero Content */}
//         <div className="text-center mb-16">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={isVisible ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6 }}
//             className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 px-4 py-2 rounded-full text-sm mb-8"
//           >
//             <Sparkles className="w-4 h-4" />
//             <span>Where Style Meets Perfection</span>
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={isVisible ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.7, delay: 0.2 }}
//             className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
//           >
//             Discover Your
//             <br />
//             <span className="bg-gradient-to-r from-rose-600 via-purple-600 to-amber-600 bg-clip-text text-transparent animate-gradient-x">
//               Signature Style
//             </span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={isVisible ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.7, delay: 0.4 }}
//             className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed"
//           >
//             Connect with India's top fashion designers and stylists. From bridal wear to 
//             contemporary fashion, find the perfect creative partner for your style journey.
//           </motion.p>
//         </div>

//         {/* Enhanced Search Bar */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={isVisible ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8, delay: 0.6 }}
//           className="max-w-4xl mx-auto mb-16"
//         >
//           <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl p-2 shadow-2xl border border-gray-200 dark:border-gray-700">
//             <div className="flex flex-col sm:flex-row gap-3">
//               {/* Category Selector */}
//               <motion.div 
//                 className="relative"
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <select
//                   value={searchCategory}
//                   onChange={(e) => setSearchCategory(e.target.value)}
//                   className="appearance-none bg-gradient-to-br from-rose-50 to-amber-50 dark:from-gray-700 dark:to-gray-800 border-0 py-4 pl-6 pr-10 text-base rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 cursor-pointer font-medium w-full sm:w-48"
//                 >
//                   <option value="designers">👗 Designers</option>
//                   <option value="stylists">💇 Stylists</option>
//                   <option value="tailors">✂️ Tailors</option>
//                   <option value="brands">🏷️ Brands</option>
//                 </select>
//                 <TrendingUp className="absolute right-3 top-1/2 transform -translate-y-1/2 text-rose-500 w-5 h-5" />
//               </motion.div>

//               {/* Search Input */}
//               <div className="flex-1 relative">
//                 <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-rose-500 w-6 h-6" />
//                 <Input
//                   placeholder={`Search for ${searchCategory}...`}
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="pl-12 py-6 text-lg border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 placeholder-gray-500 dark:placeholder-gray-400"
//                 />
//               </div>

//               {/* Search Button */}
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Button className="bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 px-8 py-6 text-lg rounded-xl font-semibold transition-all duration-300 border-0 text-white shadow-lg hover:shadow-xl w-full sm:w-auto">
//                   <Search className="w-5 h-5 mr-2" />
//                   Find Experts
//                 </Button>
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Stats Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={isVisible ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8, delay: 0.8 }}
//           className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-20"
//         >
//           {[
//             {
//               icon: <Users className="w-10 h-10" />,
//               value: "1K+",
//               label: "Expert Designers",
//               color: "from-blue-500 to-cyan-500",
//             },
//             {
//               icon: <Palette className="w-10 h-10" />,
//               value: "25K+",
//               label: "Happy Clients",
//               color: "from-rose-500 to-pink-500",
//             },
//             {
//               icon: <Star className="w-10 h-10" />,
//               value: "4.9★",
//               label: "Avg Rating",
//               color: "from-amber-500 to-orange-500",
//             },
//             {
//               icon: <Clock className="w-10 h-10" />,
//               value: "24/7",
//               label: "Support",
//               color: "from-purple-500 to-indigo-500",
//             },
//           ].map((stat, index) => (
//             <motion.div
//               key={index}
//               className="text-center p-6 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group cursor-pointer"
//               whileHover={{ scale: 1.05 }}
//             >
//               <div className={`flex justify-center mb-4 bg-gradient-to-r ${stat.color} p-3 rounded-2xl w-16 h-16 mx-auto items-center group-hover:scale-110 transition-transform duration-300`}>
//                 <div className="text-white">
//                   {stat.icon}
//                 </div>
//               </div>
//               <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
//                 {stat.value}
//               </div>
//               <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
//                 {stat.label}
//               </p>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Success Stories Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           animate={isVisible ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 1, delay: 1 }}
//           className="max-w-6xl mx-auto"
//         >
//           <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
//             <div className="flex flex-col lg:flex-row">
//               {/* Stories Content */}
//               <div className="flex-1 p-8 lg:p-12">
//                 <motion.div 
//                   className="flex items-center gap-3 mb-6"
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={isVisible ? { opacity: 1, x: 0 } : {}}
//                   transition={{ delay: 1.2 }}
//                 >
//                   <div className="w-3 h-12 bg-gradient-to-b from-rose-500 to-amber-500 rounded-full"></div>
//                   <div>
//                     <h3 className="text-sm font-semibold text-rose-600 dark:text-rose-400 uppercase tracking-wider">
//                       Success Stories
//                     </h3>
//                     <p className="text-xs text-gray-500 dark:text-gray-400">
//                       Real transformations, real happiness
//                     </p>
//                   </div>
//                 </motion.div>
                
//                 <motion.h2
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={isVisible ? { opacity: 1, x: 0 } : {}}
//                   transition={{ delay: 1.3 }}
//                   className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8 leading-tight"
//                 >
//                   Where Dreams
//                   <br />
//                   <span className="bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">
//                     Become Fashion
//                   </span>
//                 </motion.h2>

//                 {/* Animated Stories */}
//                 <div className="relative h-64">
//                   <AnimatePresence mode="wait">
//                     <motion.div
//                       key={activeStory}
//                       initial={{ opacity: 0, x: 50 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       exit={{ opacity: 0, x: -50 }}
//                       transition={{ duration: 0.5 }}
//                       className="absolute inset-0"
//                     >
//                       <div className="p-6 bg-gradient-to-br from-rose-50 to-amber-50 dark:from-gray-700 dark:to-gray-800 rounded-2xl border border-rose-100 dark:border-rose-900">
//                         <div className="flex items-start gap-6">
//                           <div className="relative flex-shrink-0">
//                             <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-rose-400 to-amber-400 p-0.5">
//                               <div className="w-full h-full rounded-2xl bg-white dark:bg-gray-800 p-0.5">
//                                 <Image
//                                   src={successStories[activeStory].image}
//                                   alt={successStories[activeStory].name}
//                                   width={80}
//                                   height={80}
//                                   className="rounded-xl object-cover"
//                                 />
//                               </div>
//                             </div>
//                             <Quote className="absolute -top-2 -right-2 w-6 h-6 text-rose-500 bg-white dark:bg-gray-800 rounded-full p-1 shadow-lg" />
//                           </div>
                          
//                           <div className="flex-1">
//                             <div className="flex items-start justify-between mb-4">
//                               <div>
//                                 <h4 className="font-bold text-gray-900 dark:text-white text-xl">
//                                   {successStories[activeStory].name}
//                                 </h4>
//                                 <p className="text-gray-600 dark:text-gray-400">
//                                   {successStories[activeStory].role} • {successStories[activeStory].location}
//                                 </p>
//                               </div>
//                               <span className="flex items-center gap-1 bg-rose-500 text-white px-4 py-2 rounded-full text-sm font-bold">
//                                 <Star className="w-4 h-4 fill-current" />
//                                 {successStories[activeStory].rating}
//                               </span>
//                             </div>
                            
//                             <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
//                               "{successStories[activeStory].story}"
//                             </p>
                            
//                             <div className="flex items-center gap-2">
//                               <span className="bg-gradient-to-r from-rose-500 to-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold">
//                                 {successStories[activeStory].transformation}
//                               </span>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </motion.div>
//                   </AnimatePresence>
                  
//                   {/* Story Indicators */}
//                   <div className="flex items-center gap-3 mt-6">
//                     {successStories.map((_, index) => (
//                       <button
//                         key={index}
//                         onClick={() => setActiveStory(index)}
//                         className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                           index === activeStory
//                             ? "bg-gradient-to-r from-rose-500 to-amber-500 w-10"
//                             : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400"
//                         }`}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* CTA Section */}
//               <div className="lg:w-96 bg-gradient-to-br from-rose-500 to-amber-500 p-8 lg:p-12 flex flex-col justify-center items-center text-center text-white relative overflow-hidden">
//                 {/* Background Pattern */}
//                 <div className="absolute inset-0 opacity-10">
//                   <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%221%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-move-pattern" />
//                 </div>
                
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={isVisible ? { opacity: 1, scale: 1 } : {}}
//                   transition={{ delay: 1.5 }}
//                   className="relative z-10"
//                 >
//                   <div className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center mb-6 mx-auto backdrop-blur-sm">
//                     <Play className="w-12 h-12 text-white ml-2" />
//                   </div>
//                   <h3 className="text-3xl font-bold mb-4">
//                     Your Style Journey
//                   </h3>
//                   <p className="text-rose-100 mb-8 text-lg">
//                     Watch how we transform ordinary into extraordinary
//                   </p>

//                   <motion.div
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <Button className="bg-white text-rose-600 hover:bg-rose-50 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl border-0">
//                       View All Stories
//                       <ArrowRight className="w-5 h-5 ml-2" />
//                     </Button>
//                   </motion.div>

//                   <p className="text-rose-200 text-sm mt-6 font-medium">
//                     Join 25,000+ satisfied clients
//                   </p>
//                 </motion.div>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Custom Animations */}
//       <style jsx>{`
//         @keyframes move-pattern {
//           0% {
//             background-position: 0 0;
//           }
//           100% {
//             background-position: 100px 100px;
//           }
//         }
//         @keyframes gradient-x {
//           0%, 100% {
//             background-size: 200% 200%;
//             background-position: 0% 50%;
//           }
//           50% {
//             background-size: 200% 200%;
//             background-position: 100% 50%;
//           }
//         }
//         .animate-gradient-x {
//           animation: gradient-x 3s ease infinite;
//         }
//         .animate-move-pattern {
//           animation: move-pattern 20s linear infinite;
//         }
//       `}</style>
//     </section>
//   );
// }