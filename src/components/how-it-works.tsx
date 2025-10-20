"use client";

import {
  Search,
  User,
  Calendar,
  CheckCircle,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";

const steps = [
  {
    number: 1,
    title: "Search & Explore",
    description:
      "Browse through our curated collection of fashion designers and stylists",
    icon: Search,
    color: "from-rose-500 to-pink-600",
    bgColor: "bg-gradient-to-br from-rose-50 to-pink-100",
  },
  {
    number: 2,
    title: "View Profiles",
    description:
      "Check portfolios, reviews, ratings, and pricing of your favorite designers",
    icon: User,
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-gradient-to-br from-blue-50 to-cyan-100",
  },
  {
    number: 3,
    title: "Book Appointment",
    description:
      "Select available slots and book your styling session directly",
    icon: Calendar,
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-gradient-to-br from-amber-50 to-orange-100",
  },
  {
    number: 4,
    title: "Get Styled",
    description: "Receive expert styling advice and transform your wardrobe",
    icon: CheckCircle,
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-100",
  },
];

export default function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-rose-50/30 dark:from-gray-900 dark:to-rose-900/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/50 to-transparent dark:from-gray-900/50" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-amber-50/30 to-transparent dark:from-amber-900/10" />

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-rose-400 rounded-full animate-float-particle opacity-60" />
        <div
          className="absolute bottom-40 right-20 w-1.5 h-1.5 bg-blue-400 rounded-full animate-float-particle opacity-40"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/3 w-2 h-2 bg-amber-400 rounded-full animate-float-particle opacity-50"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "animate-glow-in" : "opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 px-4 py-2 rounded-full text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            Simple Process
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            How It
            <span className="block bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Simple steps to connect with your perfect fashion designer
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-rose-200 via-blue-200 to-emerald-200 dark:from-rose-800 dark:via-blue-800 dark:to-emerald-800 transform -translate-y-1/2" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative group">
                {/* Step Card */}
                <Card
                  className={`p-6 h-full hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm
                  hover:scale-105 hover:-translate-y-2 animate-step-float`}
                  style={{
                    animationDelay: `${index * 0.2}s`,
                    animationDuration: "6s",
                  }}
                >
                  {/* Animated Border */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  >
                    <div className="absolute inset-[2px] bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl" />
                  </div>

                  <div className="relative z-10">
                    {/* Number Badge */}
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-6 
                      group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg relative overflow-hidden`}
                    >
                      <span className="text-white font-bold text-lg relative z-10">
                        {step.number}
                      </span>
                      <div className="absolute inset-0 bg-white/20 animate-shine" />
                    </div>

                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-xl ${step.bgColor} flex items-center justify-center mb-4 
                      group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon
                        className={`w-6 h-6 bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}
                      />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed group-hover:translate-x-1 transition-transform duration-300 delay-100">
                      {step.description}
                    </p>
                  </div>

                  {/* Hover Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl`}
                  />
                </Card>

                {/* Connecting Arrow - Desktop */}
                {index < steps.length - 1 && (
                  <>
                    <div className="hidden lg:block absolute top-16 -right-4 transform -translate-y-1/2 z-20">
                      <div
                        className={`w-8 h-8 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center 
                        opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110`}
                      >
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Progress Bar */}
        <div className="lg:hidden mt-8">
          <div className="flex justify-between items-center px-4">
            {steps.map((step, index) => (
              <div key={step.number} className="flex flex-col items-center">
                <div
                  className={`w-3 h-3 rounded-full bg-gradient-to-r ${step.color} mb-2`}
                />
                {index < steps.length - 1 && (
                  <div className="w-12 h-0.5 bg-gradient-to-r from-rose-200 to-blue-200 dark:from-rose-800 dark:to-blue-800" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

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
        @keyframes step-float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        @keyframes float-particle {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-12px) translateX(6px);
          }
          50% {
            transform: translateY(-6px) translateX(12px);
          }
          75% {
            transform: translateY(-9px) translateX(-6px);
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
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-glow-in {
          animation: glow-in 1.2s ease-out forwards;
        }
        .animate-step-float {
          animation: step-float 6s ease-in-out infinite;
        }
        .animate-float-particle {
          animation: float-particle 8s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        .animate-shine {
          animation: shine 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
