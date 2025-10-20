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