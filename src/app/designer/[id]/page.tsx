"use client";

import { useState, useEffect, useRef } from "react";
import DesignerProfileHeader from "@/components/designer-profile-header";
import DesignerPortfolio from "@/components/designer-portfolio";
import AppointmentBooking from "@/components/appointment-booking";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DesignerReviews from "@/components/designer-review";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Star, 
  Users, 
  Award, 
  Sparkles, 
  Heart, 
  Share2, 
  MapPin, 
  Ribbon,
  BadgeCheck,
  TrendingUp,
  Camera,
  Palette
} from "lucide-react";

// Mock designer data
const designerData = {
  1: {
    id: 1,
    name: "Priya Sharma",
    specialty: "Bridal & Wedding Wear Specialist",
    location: "Mumbai, India",
    rating: 4.9,
    reviews: 245,
    experience: 12,
    image: "https://images.pexels.com/photos/160414/female-portrait-studio-attractive-160414.jpeg",
    price: { min: 50000, max: 200000 },
    clients: 500,
    bio: "Expert in bridal wear with 12 years of experience creating stunning wedding outfits. Specializes in traditional and contemporary designs.",
    about:
      "I am a passionate fashion designer with over 12 years of experience in creating beautiful bridal wear. My designs blend traditional aesthetics with modern trends, ensuring every bride feels confident and beautiful on their special day. I believe in creating timeless pieces that tell a story and celebrate individuality. Every design is crafted with precision, love, and attention to detail to make your special moments unforgettable.",
    specialties: [
      "Bridal Lehengas",
      "Wedding Styling",
      "Custom Embroidery",
      "Saree Draping",
      "Fusion Wear",
      "Jewelry Coordination",
      "Makeup & Hair",
      "Bridal Consultation"
    ],
    socialLinks: {
      instagram: "https://instagram.com/priyasharma",
      facebook: "https://facebook.com/priyasharma",
      pinterest: "https://pinterest.com/priyasharma",
    },
    freeTrial: true,
    portfolio: [
      {
        id: 1,
        title: "Royal Bridal Collection 2024",
        image: "https://images.pexels.com/photos/34328151/pexels-photo-34328151.jpeg",
        category: "Bridal",
        likes: 124,
        description: "Exquisite bridal wear with traditional embroidery"
      },
      {
        id: 2,
        title: "Contemporary Wedding Styling",
        image: "https://images.pexels.com/photos/16448463/pexels-photo-16448463.jpeg",
        category: "Styling",
        likes: 89,
        description: "Modern wedding looks with contemporary touch"
      },
      {
        id: 3,
        title: "Traditional Lehenga Designs",
        image: "https://images.pexels.com/photos/33684732/pexels-photo-33684732.jpeg",
        category: "Bridal",
        likes: 156,
        description: "Traditional craftsmanship meets modern design"
      },
      {
        id: 4,
        title: "Modern Saree Collection",
        image: "https://images.pexels.com/photos/1139450/pexels-photo-1139450.jpeg",
        category: "Saree",
        likes: 92,
        description: "Contemporary sarees for the modern woman"
      },
      {
        id: 5,
        title: "Customized Couture",
        image: "https://images.pexels.com/photos/8526968/pexels-photo-8526968.jpeg",
        category: "Couture",
        likes: 167,
        description: "Bespoke designs tailored to perfection"
      },
      {
        id: 6,
        title: "Bridal Makeup & Styling",
        image: "https://images.pexels.com/photos/2218558/pexels-photo-2218558.jpeg",
        category: "Styling",
        likes: 78,
        description: "Complete bridal transformation packages"
      },
    ],
    reviewEntries: [
      {
        id: 1,
        author: "Anjali Verma",
        rating: 5,
        date: "2024-10-15",
        text: "Priya made my wedding day absolutely magical! Her attention to detail and understanding of my vision was incredible. The lehenga was beyond my expectations and everyone couldn't stop complimenting!",
        verified: true,
        avatar: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg"
      },
      {
        id: 2,
        author: "Neha Singh",
        rating: 5,
        date: "2024-09-20",
        text: "Working with Priya was a dream come true. She transformed my ideas into reality with such elegance and precision. The craftsmanship is exceptional and the fit was perfect!",
        verified: true,
        avatar: "https://images.pexels.com/photos/31528930/pexels-photo-31528930.jpeg"
      },
      {
        id: 3,
        author: "Pooja Desai",
        rating: 4,
        date: "2024-08-10",
        text: "Great designer with excellent communication skills. The outfit was beautiful and perfectly fitted. Would definitely recommend her for bridal wear!",
        verified: true,
        avatar: "https://images.pexels.com/photos/31391531/pexels-photo-31391531.jpeg"
      },
      {
        id: 4,
        author: "Riya Mehta",
        rating: 5,
        date: "2024-07-22",
        text: "Absolutely stunning designs! Priya understood exactly what I wanted and delivered beyond expectations. The quality and attention to detail are remarkable.",
        verified: true,
        avatar: "https://images.pexels.com/photos/34326597/pexels-photo-34326597.jpeg"
      },
    ],
    availableSlots: [
      { date: "2024-11-25", time: "10:00 AM", available: true },
      { date: "2024-11-25", time: "02:00 PM", available: true },
      { date: "2024-11-25", time: "04:00 PM", available: false },
      { date: "2024-11-26", time: "10:00 AM", available: true },
      { date: "2024-11-26", time: "03:00 PM", available: true },
      { date: "2024-11-27", time: "11:00 AM", available: true },
      { date: "2024-11-27", time: "04:00 PM", available: true },
      { date: "2024-11-28", time: "10:00 AM", available: true },
    ],
    coupons: [
      {
        code: "WEDDING20",
        discount: 20,
        description: "20% off on complete bridal packages",
        validUntil: "2024-12-31"
      },
      {
        code: "FIRST10",
        discount: 10,
        description: "10% off for first-time clients",
        validUntil: "2024-11-30"
      },
      {
        code: "SEASON15",
        discount: 15,
        description: "15% off on seasonal collections",
        validUntil: "2024-12-15"
      },
    ],
    achievements: [
      "Best Bridal Designer Award 2023",
      "Fashion Excellence Award 2022", 
      "Top Rated Designer - WeddingWire",
      "Client Choice Award 2024",
      "Featured in Vogue India",
      "10K+ Happy Clients"
    ],
    stats: {
      projectsCompleted: 850,
      satisfactionRate: 98,
      repeatClients: 65
    }
  },
};

interface DesignerProfilePageProps {
  params: Promise<{ id: string }>;
}

export default function DesignerProfilePage({
  params,
}: DesignerProfilePageProps) {
  const [selectedTab, setSelectedTab] = useState("portfolio");
  const [designerId, setDesignerId] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const sectionRef = useRef(null);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Handle params
  useEffect(() => {
    params.then((resolvedParams) => {
      setDesignerId(resolvedParams.id);
    });
  }, [params]);

  // If params haven't resolved yet, show loading
  if (!designerId) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-rose-900">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="animate-pulse space-y-4"
          >
            <div className="h-8 bg-rose-200 rounded w-1/4 mx-auto mb-4"></div>
            <div className="h-4 bg-rose-200 rounded w-1/2 mx-auto"></div>
            <div className="h-4 bg-rose-200 rounded w-1/3 mx-auto"></div>
          </motion.div>
        </div>
      </main>
    );
  }

  const designer = designerData[designerId as unknown as keyof typeof designerData];

  if (!designer) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-rose-900">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold text-rose-600"
          >
            Designer not found
          </motion.h1>
        </div>
      </main>
    );
  }

  return (
    <>
        <main className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-rose-900">

        {/* Enhanced Designer Header */}
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <DesignerProfileHeader designer={designer} />
        </motion.div>

        {/* Main Content */}
        <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Tabs */}
            <div className="lg:col-span-2">
                <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                >
                <Tabs
                    value={selectedTab}
                    onValueChange={setSelectedTab}
                    className="w-full"
                >
                    <TabsList className="grid w-full grid-cols-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl  border border-rose-200 dark:border-rose-800 shadow-lg">
                    <TabsTrigger 
                        value="portfolio"
                        className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-rose-500 data-[state=active]:to-amber-500 data-[state=active]:text-white rounded-xl transition-all duration-300 font-semibold"
                    >
                        <Palette className="w-4 h-4 mr-2" />
                        Portfolio
                    </TabsTrigger>
                    <TabsTrigger 
                        value="about"
                        className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-rose-500 data-[state=active]:to-amber-500 data-[state=active]:text-white rounded-xl transition-all duration-300 font-semibold"
                    >
                        <Users className="w-4 h-4 mr-2" />
                        About
                    </TabsTrigger>
                    <TabsTrigger 
                        value="reviews"
                        className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-rose-500 data-[state=active]:to-amber-500 data-[state=active]:text-white rounded-xl transition-all duration-300 font-semibold"
                    >
                        <Star className="w-4 h-4 mr-2" />
                        Reviews
                    </TabsTrigger>
                    </TabsList>

                    <TabsContent value="portfolio" className="mt-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <DesignerPortfolio portfolio={designer.portfolio} />
                    </motion.div>
                    </TabsContent>

                    <TabsContent value="about" className="mt-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 border border-rose-200 dark:border-rose-800 shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                            About {designer.name}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg">
                            {designer.about}
                        </p>

                        {/* Achievements */}
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <Award className="w-6 h-6 text-amber-500" />
                            Awards & Achievements
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {designer.achievements.map((achievement, index) => (
                                <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                className="flex items-center gap-3 bg-gradient-to-r from-rose-50 to-amber-50 dark:from-gray-700 dark:to-gray-800 p-4 rounded-2xl border border-rose-100 dark:border-rose-900"
                                >
                                <Ribbon className="w-5 h-5 text-rose-500" />
                                <span className="text-gray-700 dark:text-gray-300 font-medium">
                                    {achievement}
                                </span>
                                </motion.div>
                            ))}
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <BadgeCheck className="w-6 h-6 text-rose-500" />
                            Specialties & Services
                        </h3>
                        <div className="flex flex-wrap gap-3 mb-8">
                            {designer.specialties.map((specialty, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.4, delay: 0.05 * index }}
                                className="bg-gradient-to-r from-rose-500 to-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                            >
                                {specialty}
                            </motion.span>
                            ))}
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <Share2 className="w-6 h-6 text-purple-500" />
                            Connect on Social Media
                        </h3>
                        <div className="flex gap-4">
                            {Object.entries(designer.socialLinks).map(([platform, url], index) => (
                            <motion.a
                                key={platform}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                className="bg-white dark:bg-gray-700 p-4 rounded-2xl border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-gray-700 dark:text-gray-300 font-medium capitalize flex items-center gap-2"
                            >
                                <span className="w-2 h-2 bg-rose-500 rounded-full"></span>
                                {platform}
                            </motion.a>
                            ))}
                        </div>
                        </div>
                    </motion.div>
                    </TabsContent>

                    <TabsContent value="reviews" className="mt-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <DesignerReviews reviews={designer.reviewEntries} />
                    </motion.div>
                    </TabsContent>
                </Tabs>
                </motion.div>
            </div>

            {/* Right Column - Booking & Info */}
            <div className="lg:col-span-1">
                <div className="sticky top-20 space-y-6">
                {/* Quick Stats */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-6 border border-rose-200 dark:border-rose-800 shadow-lg"
                >
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-rose-500" />
                    Designer Stats
                    </h3>
                    <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-400">Experience</span>
                        <span className="font-bold text-gray-900 dark:text-white">{designer.experience} years</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-400">Clients</span>
                        <span className="font-bold text-gray-900 dark:text-white">{designer.clients}+</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-400">Projects</span>
                        <span className="font-bold text-gray-900 dark:text-white">{designer.stats.projectsCompleted}+</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-400">Satisfaction</span>
                        <span className="font-bold text-rose-500">{designer.stats.satisfactionRate}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-400">Rating</span>
                        <span className="font-bold text-amber-500 flex items-center gap-1">
                        <Star className="w-4 h-4 fill-current" />
                        {designer.rating}
                        </span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-400">Location</span>
                        <span className="font-bold text-gray-900 dark:text-white flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {designer.location}
                        </span>
                    </div>
                    </div>
                </motion.div>

                {/* Coupons */}
                {designer.coupons.length > 0 && (
                    <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="bg-gradient-to-br from-rose-500 to-amber-500 rounded-3xl p-6 text-white shadow-2xl"
                    >
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <Sparkles className="w-5 h-5" />
                        Special Offers
                    </h3>
                    <div className="space-y-3">
                        {designer.coupons.map((coupon, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                            className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-300 cursor-pointer"
                        >
                            <div className="flex justify-between items-center mb-2">
                            <span className="font-bold text-lg">{coupon.code}</span>
                            <span className="bg-white text-rose-600 px-3 py-1 rounded-full text-sm font-bold">
                                {coupon.discount}% OFF
                            </span>
                            </div>
                            <p className="text-rose-100 text-sm mb-1">{coupon.description}</p>
                            <p className="text-rose-200 text-xs">Valid until {coupon.validUntil}</p>
                        </motion.div>
                        ))}
                    </div>
                    </motion.div>
                )}

                {/* Appointment Booking */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 }}
                >
                    <AppointmentBooking designer={designer} />
                </motion.div>
                </div>
            </div>
            </div>
        </div>
        </main>
    </>
  );
}