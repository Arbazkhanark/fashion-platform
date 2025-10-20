"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Shield, CheckCircle, Star, Users } from "lucide-react"
import { useState, useEffect } from "react"

export default function CTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-amber-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-rose-900/20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-24 h-24 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full opacity-20 animate-float" />
        <div className="absolute bottom-20 left-10 w-20 h-20 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full opacity-20 animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 animate-float" style={{ animationDelay: "2.5s" }} />
        
        {/* Gradient Orbs */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full opacity-10 blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full opacity-10 blur-3xl animate-pulse-slow" style={{ animationDelay: "3s" }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'animate-glow-in' : 'opacity-0'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 px-6 py-3 rounded-full text-sm mb-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 cursor-pointer">
            <Sparkles className="w-4 h-4 animate-pulse" />
            Join Our Fashion Community
            <Sparkles className="w-4 h-4 animate-pulse" style={{ animationDelay: "0.5s" }} />
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Transform
            <span className="block bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">
              Your Style?
            </span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied clients who have found their perfect fashion match on StyleConnect
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white px-12 py-6 text-lg rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl group"
            >
              Find Your Designer
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              className="px-12 py-6 text-lg rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 hover:bg-rose-50 dark:hover:bg-rose-900/20 hover:scale-105 transition-all duration-500"
            >
              Become a Designer
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Users,
                value: "100%",
                label: "Verified Designers",
                description: "Background checked professionals",
                color: "from-rose-500 to-pink-500",
                delay: "0.1s"
              },
              {
                icon: Shield,
                value: "Secure",
                label: "Payment & Booking",
                description: "Safe and encrypted transactions",
                color: "from-blue-500 to-cyan-500",
                delay: "0.2s"
              },
              {
                icon: CheckCircle,
                value: "Guaranteed",
                label: "Satisfaction",
                description: "Money-back guarantee",
                color: "from-green-500 to-emerald-500",
                delay: "0.3s"
              }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up group"
                style={{ animationDelay: stat.delay }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>

                {/* Value */}
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  {stat.label}
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Trust Indicators */}
          <div className="mt-16 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-semibold">4.9/5 Rating</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-gray-300 dark:bg-gray-600" />
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-rose-500" />
                <span className="font-semibold">10,000+ Happy Clients</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-gray-300 dark:bg-gray-600" />
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-semibold">500+ Top Designers</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes glow-in {
          0% {
            opacity: 0;
            transform: translateY(30px);
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
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
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.15;
            transform: scale(1.1);
          }
        }
        .animate-glow-in {
          animation: glow-in 1.5s ease-out forwards;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
          opacity: 0;
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}