"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Users,
  Star,
  Palette,
} from "lucide-react";

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "customer",
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (step === 1 && formData.fullName && formData.email) {
      setStep(2);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(3);
    }, 1500);
  };

  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-white via-rose-50/30 to-amber-50/20 dark:from-gray-900 dark:via-rose-900/10 dark:to-amber-900/5 flex items-center justify-center px-4 py-12 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-rose-200 to-pink-200 rounded-full opacity-20 blur-3xl animate-soft-float" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-amber-200 to-orange-200 rounded-full opacity-15 blur-3xl animate-soft-float"
            style={{ animationDelay: "2s" }}
          />
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full opacity-30 animate-float-particle" />
          <div
            className="absolute bottom-1/3 right-1/4 w-8 h-8 bg-gradient-to-r from-purple-200 to-violet-200 rounded-full opacity-25 animate-float-particle"
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        <div className="w-full max-w-md">
          {/* Card */}
          <div
            className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-3xl p-8 shadow-2xl transition-all duration-1000 ${
              isVisible ? "animate-glow-in" : "opacity-0"
            }`}
          >
            {/* Header */}
            <div className="text-center mb-8">
              <Link
                href="/"
                className="inline-flex items-center gap-3 mb-6 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="font-bold text-2xl bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                  StyleConnect
                </span>
              </Link>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
                Join Our Community
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Create your account and start your style journey
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { icon: Users, value: "10K+", label: "Members" },
                { icon: Star, value: "4.9★", label: "Rating" },
                { icon: Palette, value: "500+", label: "Experts" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-3 bg-white/50 dark:bg-gray-700/50 rounded-xl border border-gray-200/50 dark:border-gray-600/50 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <stat.icon className="w-4 h-4 text-rose-500 mx-auto mb-1" />
                  <div className="text-sm font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Progress Steps */}
            <div className="flex gap-2 mb-8 relative">
              <div className="absolute top-3 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 -z-10" />
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex-1 text-center">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center mx-auto mb-2 transition-all duration-500 ${
                      s <= step
                        ? "bg-gradient-to-r from-rose-500 to-amber-500 text-white scale-110"
                        : "bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-400"
                    }`}
                  >
                    {s}
                  </div>
                  <p
                    className={`text-xs transition-all duration-300 ${
                      s <= step
                        ? "text-gray-900 dark:text-white font-semibold"
                        : "text-gray-500 dark:text-gray-500"
                    }`}
                  >
                    {s === 1 && "Basic Info"}
                    {s === 2 && "Security"}
                    {s === 3 && "Complete"}
                  </p>
                </div>
              ))}
            </div>

            {/* Success State */}
            {step === 3 ? (
              <div className="text-center py-8 animate-fade-in-up">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                  Welcome to StyleConnect!
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
                  Your account has been created successfully.
                </p>
                <div className="space-y-4">
                  <Button className="w-full bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                    Go to Dashboard
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 transition-colors group text-sm"
                  >
                    <ArrowRight className="w-4 h-4 transform rotate-180 group-hover:-translate-x-1 transition-transform" />
                    Back to home
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 1: Basic Info */}
                {step === 1 && (
                  <div className="space-y-6 animate-slide-up">
                    {/* User Type */}
                    <div
                      className="space-y-3 animate-fade-in-up"
                      style={{ animationDelay: "0.1s" }}
                    >
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        I am a
                      </label>
                      <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 to-amber-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <select
                          name="userType"
                          value={formData.userType}
                          onChange={handleChange}
                          className="w-full px-4 py-4 rounded-xl bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm border-0 focus:outline-none focus:ring-2 focus:ring-rose-300 dark:focus:ring-rose-500 transition-all duration-300 relative"
                        >
                          <option value="customer">👤 Customer</option>
                          <option value="provider">✨ Service Provider</option>
                        </select>
                      </div>
                    </div>

                    {/* Full Name */}
                    <div
                      className="space-y-3 animate-fade-in-up"
                      style={{ animationDelay: "0.2s" }}
                    >
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Full Name
                      </label>
                      <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
                          <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm border-0 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-500 transition-all duration-300 relative"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div
                      className="space-y-3 animate-fade-in-up"
                      style={{ animationDelay: "0.3s" }}
                    >
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Email Address
                      </label>
                      <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-violet-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm border-0 focus:outline-none focus:ring-2 focus:ring-purple-300 dark:focus:ring-purple-500 transition-all duration-300 relative"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Next Button */}
                    <Button
                      type="button"
                      onClick={handleNext}
                      disabled={!formData.fullName || !formData.email}
                      className="w-full py-4 bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl group animate-fade-in-up"
                      style={{ animationDelay: "0.4s" }}
                    >
                      Continue
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                )}

                {/* Step 2: Password */}
                {step === 2 && (
                  <div className="space-y-6 animate-slide-up">
                    {/* Password */}
                    <div
                      className="space-y-3 animate-fade-in-up"
                      style={{ animationDelay: "0.1s" }}
                    >
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Password
                      </label>
                      <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative">
                          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
                          <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="••••••••"
                            className="w-full pl-12 pr-12 py-4 rounded-xl bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm border-0 focus:outline-none focus:ring-2 focus:ring-green-300 dark:focus:ring-green-500 transition-all duration-300 relative"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors z-10"
                          >
                            {showPassword ? (
                              <EyeOff className="w-5 h-5" />
                            ) : (
                              <Eye className="w-5 h-5" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Confirm Password */}
                    <div
                      className="space-y-3 animate-fade-in-up"
                      style={{ animationDelay: "0.2s" }}
                    >
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Confirm Password
                      </label>
                      <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative">
                          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
                          <input
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="••••••••"
                            className="w-full pl-12 pr-12 py-4 rounded-xl bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm border-0 focus:outline-none focus:ring-2 focus:ring-amber-300 dark:focus:ring-amber-500 transition-all duration-300 relative"
                            required
                          />
                          <button
                            type="button"
                            onClick={() =>
                              setShowConfirmPassword(!showConfirmPassword)
                            }
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors z-10"
                          >
                            {showConfirmPassword ? (
                              <EyeOff className="w-5 h-5" />
                            ) : (
                              <Eye className="w-5 h-5" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Terms */}
                    <label
                      className="flex items-start gap-3 text-sm animate-fade-in-up"
                      style={{ animationDelay: "0.3s" }}
                    >
                      <div className="relative">
                        <input
                          type="checkbox"
                          className="w-5 h-5 rounded border-2 border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 checked:bg-rose-500 checked:border-rose-500 transition-all duration-300"
                          required
                        />
                      </div>
                      <span className="text-gray-600 dark:text-gray-400">
                        I agree to the{" "}
                        <Link
                          href="#"
                          className="text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 font-medium transition-colors group"
                        >
                          Terms of Service
                          <span className="block w-0 group-hover:w-full h-0.5 bg-rose-500 transition-all duration-300" />
                        </Link>{" "}
                        and{" "}
                        <Link
                          href="#"
                          className="text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 font-medium transition-colors group"
                        >
                          Privacy Policy
                          <span className="block w-0 group-hover:w-full h-0.5 bg-rose-500 transition-all duration-300" />
                        </Link>
                      </span>
                    </label>

                    {/* Buttons */}
                    <div
                      className="flex gap-3 animate-fade-in-up"
                      style={{ animationDelay: "0.4s" }}
                    >
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setStep(1)}
                        className="flex-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 hover:bg-rose-50 dark:hover:bg-rose-900/20"
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        disabled={
                          isLoading ||
                          !formData.password ||
                          !formData.confirmPassword
                        }
                        className="flex-1 bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                      >
                        {isLoading ? (
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Creating Account...
                          </div>
                        ) : (
                          "Create Account"
                        )}
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            )}

            {/* Sign In Link */}
            {step !== 3 && (
              <p
                className="text-center text-gray-600 dark:text-gray-400 mt-8 animate-fade-in-up"
                style={{ animationDelay: "0.5s" }}
              >
                Already have an account?{" "}
                <Link
                  href="/auth/login"
                  className="text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 font-medium transition-colors group"
                >
                  Sign in
                  <span className="block w-0 group-hover:w-full h-0.5 bg-rose-500 transition-all duration-300" />
                </Link>
              </p>
            )}
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes glow-in {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
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
        @keyframes slide-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
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
        @keyframes float-particle {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-15px) translateX(10px);
          }
          50% {
            transform: translateY(-8px) translateX(15px);
          }
          75% {
            transform: translateY(-12px) translateX(-8px);
          }
        }
        .animate-glow-in {
          animation: glow-in 1.2s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }
        .animate-soft-float {
          animation: soft-float 8s ease-in-out infinite;
        }
        .animate-float-particle {
          animation: float-particle 12s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
