"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Sparkles,
  Star,
  Users,
  Palette,
} from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      alert("Login successful! (Demo)");
    }, 1500);
  };

  return (
    <>
      <Navigation />
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
                Welcome Back
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Sign in to your account to continue your style journey
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { icon: Users, value: "10K+", label: "Users" },
                { icon: Star, value: "4.9★", label: "Rating" },
                { icon: Palette, value: "500+", label: "Designers" },
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

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div
                className="space-y-3 animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email Address
                </label>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 to-amber-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm border-0 focus:outline-none focus:ring-2 focus:ring-rose-300 dark:focus:ring-rose-500 transition-all duration-300 relative"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Password Field */}
              <div
                className="space-y-3 animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Password
                </label>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-12 pr-12 py-4 rounded-xl bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm border-0 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-500 transition-all duration-300 relative"
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

              {/* Remember & Forgot */}
              <div
                className="flex items-center justify-between text-sm animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative">
                    <input
                      type="checkbox"
                      className="w-5 h-5 rounded border-2 border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 checked:bg-rose-500 checked:border-rose-500 transition-all duration-300"
                    />
                  </div>
                  <span className="text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                    Remember me
                  </span>
                </label>
                <Link
                  href="#"
                  className="text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 transition-colors font-medium group"
                >
                  Forgot password?
                  <div className="w-0 group-hover:w-full h-0.5 bg-rose-500 transition-all duration-300" />
                </Link>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl group animate-fade-in-up"
                style={{ animationDelay: "0.5s" }}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Signing in...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    Sign In
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                )}
              </Button>
            </form>

            {/* Divider */}
            <div
              className="relative my-8 animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200 dark:border-gray-700" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white/80 dark:bg-gray-800/80 text-gray-500 dark:text-gray-400 backdrop-blur-sm">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Social Login */}
            <div
              className="grid grid-cols-2 gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.7s" }}
            >
              <Button
                variant="outline"
                className="w-full bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm border-gray-200 dark:border-gray-600 hover:bg-white dark:hover:bg-gray-600 hover:scale-105 transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </Button>
              <Button
                variant="outline"
                className="w-full bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm border-gray-200 dark:border-gray-600 hover:bg-white dark:hover:bg-gray-600 hover:scale-105 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.36 3.51 7.79 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                Apple
              </Button>
            </div>

            {/* Sign Up Link */}
            <p
              className="text-center text-gray-600 dark:text-gray-400 mt-8 animate-fade-in-up"
              style={{ animationDelay: "0.8s" }}
            >
              Don&apos;t have an account?{" "}
              <Link
                href="/auth/register"
                className="text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 font-medium transition-colors group"
              >
                Sign up
                <span className="block w-0 group-hover:w-full h-0.5 bg-rose-500 transition-all duration-300" />
              </Link>
            </p>
          </div>

          {/* Footer Link */}
          <div
            className="text-center mt-8 animate-fade-in-up"
            style={{ animationDelay: "0.9s" }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors group"
            >
              <ArrowRight className="w-4 h-4 transform rotate-180 group-hover:-translate-x-1 transition-transform" />
              Back to home
            </Link>
          </div>
        </div>
      </main>
      <Footer />

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
