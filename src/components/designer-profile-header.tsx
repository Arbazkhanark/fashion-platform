// "use client";

// import { Star, MapPin, Award, Users, Heart } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";

// interface Designer {
//   id: number;
//   name: string;
//   specialty: string;
//   location: string;
//   rating: number;
//   reviews: number;
//   experience: number;
//   image: string;
//   price: { min: number; max: number };
//   clients: number;
//   freeTrial: boolean;
// }

// export default function DesignerProfileHeader({
//   designer,
// }: {
//   designer: Designer;
// }) {
//   return (
//     <section className="bg-secondary/50 border-b border-border">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
//           {/* Profile Image */}
//           <div className="md:col-span-1">
//             <div className="relative rounded-lg overflow-hidden h-80 bg-muted">
//               <Image
//                 src={designer.image || "/placeholder.svg"}
//                 width={400}
//                 height={320}
//                 alt={designer.name}
//                 className="w-full h-full object-cover"
//               />
//               {designer.freeTrial && (
//                 <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
//                   Free Trial Available
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Profile Info */}
//           <div className="md:col-span-2">
//             <div className="mb-4">
//               <h1 className="text-4xl font-bold text-foreground mb-2">
//                 {designer.name}
//               </h1>
//               <p className="text-xl text-accent font-semibold mb-4">
//                 {designer.specialty}
//               </p>

//               {/* Rating */}
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="flex items-center gap-2">
//                   <div className="flex items-center gap-1">
//                     {[...Array(5)].map((_, i) => (
//                       <Star
//                         key={i}
//                         size={20}
//                         className={
//                           i < Math.floor(designer.rating)
//                             ? "fill-accent text-accent"
//                             : "text-muted"
//                         }
//                       />
//                     ))}
//                   </div>
//                   <span className="font-bold text-lg text-foreground">
//                     {designer.rating}
//                   </span>
//                   <span className="text-muted-foreground">
//                     ({designer.reviews} reviews)
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* Stats Grid */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
//               <div className="bg-card rounded-lg p-4 border border-border">
//                 <div className="flex items-center gap-2 mb-2">
//                   <Award size={20} className="text-accent" />
//                   <span className="text-sm text-muted-foreground">
//                     Experience
//                   </span>
//                 </div>
//                 <p className="text-2xl font-bold text-foreground">
//                   {designer.experience}+
//                 </p>
//                 <p className="text-xs text-muted-foreground">years</p>
//               </div>

//               <div className="bg-card rounded-lg p-4 border border-border">
//                 <div className="flex items-center gap-2 mb-2">
//                   <Users size={20} className="text-accent" />
//                   <span className="text-sm text-muted-foreground">Clients</span>
//                 </div>
//                 <p className="text-2xl font-bold text-foreground">
//                   {designer.clients}+
//                 </p>
//               </div>

//               <div className="bg-card rounded-lg p-4 border border-border">
//                 <div className="flex items-center gap-2 mb-2">
//                   <MapPin size={20} className="text-accent" />
//                   <span className="text-sm text-muted-foreground">
//                     Location
//                   </span>
//                 </div>
//                 <p className="text-lg font-bold text-foreground">
//                   {designer.location}
//                 </p>
//               </div>

//               <div className="bg-card rounded-lg p-4 border border-border">
//                 <div className="flex items-center gap-2 mb-2">
//                   <Heart size={20} className="text-accent" />
//                   <span className="text-sm text-muted-foreground">
//                     Price Range
//                   </span>
//                 </div>
//                 <p className="text-sm font-bold text-foreground">
//                   ₹{(designer.price.min / 1000).toFixed(0)}K - ₹
//                   {(designer.price.max / 1000).toFixed(0)}K
//                 </p>
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex gap-4">
//               <Button className="bg-accent hover:bg-accent/90 text-accent-foreground flex-1">
//                 Book Appointment
//               </Button>
//               <Button variant="outline" className="bg-transparent">
//                 Save Profile
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


















"use client";

import { motion } from "framer-motion";
import { Star, MapPin, Award, Users, Heart, Share2, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Designer {
  id: number;
  name: string;
  specialty: string;
  location: string;
  rating: number;
  reviews: number;
  experience: number;
  image: string;
  price: { min: number; max: number };
  clients: number;
  bio: string;
  freeTrial: boolean;
}

interface DesignerProfileHeaderProps {
  designer: Designer;
}

export default function DesignerProfileHeader({ designer }: DesignerProfileHeaderProps) {
  return (
    <div className="relative bg-gradient-to-br from-rose-500 via-rose-600 to-amber-500 py-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/160414/female-portrait-studio-attractive-160414.jpeg')] " />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Designer Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="w-48 h-48 rounded-3xl bg-white/20 backdrop-blur-sm p-2 shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-rose-200 to-amber-200 rounded-2xl flex items-center justify-center">
                <img 
                 src={'https://images.pexels.com/photos/160414/female-portrait-studio-attractive-160414.jpeg'}
                 />
                {/* <div className="text-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                    <span className="text-rose-500 text-2xl">👑</span>
                  </div>
                  <span className="text-rose-700 font-semibold">Designer</span>
                </div> */}
              </div>
            </div>
            {designer.freeTrial && (
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
              >
                FREE TRIAL
              </motion.div>
            )}
          </motion.div>

          {/* Designer Info */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">
                {designer.name}
              </h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-rose-100 mb-4"
              >
                {designer.specialty}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-rose-100 mb-8 max-w-2xl text-lg leading-relaxed"
              >
                {designer.bio}
              </motion.p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-6 justify-center lg:justify-start mb-6"
            >
              <div className="flex items-center gap-2 text-white bg-white/20 backdrop-blur-sm px-4 py-2 rounded-2xl">
                <Star className="w-5 h-5 fill-current text-amber-300" />
                <span className="font-bold text-lg">{designer.rating}</span>
                <span className="text-rose-100">({designer.reviews} reviews)</span>
              </div>
              
              <div className="flex items-center gap-2 text-white bg-white/20 backdrop-blur-sm px-4 py-2 rounded-2xl">
                <MapPin className="w-5 h-5" />
                <span>{designer.location}</span>
              </div>
              
              <div className="flex items-center gap-2 text-white bg-white/20 backdrop-blur-sm px-4 py-2 rounded-2xl">
                <Users className="w-5 h-5" />
                <span>{designer.clients}+ clients</span>
              </div>
              
              <div className="flex items-center gap-2 text-white bg-white/20 backdrop-blur-sm px-4 py-2 rounded-2xl">
                <Award className="w-5 h-5" />
                <span>{designer.experience} years exp</span>
              </div>
            </motion.div>

            {/* Price Range & Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-2xl">
                <span className="text-rose-100 text-sm">Starting from</span>
                <div className="text-white font-bold text-2xl">
                  ₹{designer.price.min.toLocaleString()}
                </div>
              </div>
              
              <div className="flex gap-3">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-white text-rose-600 hover:bg-rose-50 px-8 py-3 rounded-xl font-bold shadow-lg">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Now
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/20 px-6 py-3 rounded-xl font-bold">
                    <Heart className="w-5 h-5 mr-2" />
                    Save
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/20 px-6 py-3 rounded-xl font-bold">
                    <Share2 className="w-5 h-5 mr-2" />
                    Share
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes move-pattern {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 60px 60px;
          }
        }
        .animate-move-pattern {
          animation: move-pattern 20s linear infinite;
        }
      `}</style>
    </div>
  );
}