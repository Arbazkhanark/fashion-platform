"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight, CheckCircle, Sparkles, Users, Star, Award } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"

const categories = [
  { id: "wedding-designer", label: "Wedding Designer", icon: "💍", color: "from-rose-500 to-pink-600" },
  { id: "casual-wear", label: "Casual Wear Designer", icon: "👕", color: "from-blue-500 to-cyan-600" },
  { id: "party-stylist", label: "Party Stylist", icon: "🎉", color: "from-purple-500 to-violet-600" },
  { id: "office-stylist", label: "Office Event Stylist", icon: "💼", color: "from-amber-500 to-orange-600" },
  { id: "makeup-artist", label: "Makeup Artist", icon: "💄", color: "from-red-500 to-rose-600" },
  { id: "hair-stylist", label: "Hair Stylist", icon: "💇", color: "from-green-500 to-emerald-600" },
  { id: "personal-shopper", label: "Personal Shopper", icon: "🛍️", color: "from-indigo-500 to-blue-600" },
  { id: "fashion-consultant", label: "Fashion Consultant", icon: "👔", color: "from-yellow-500 to-amber-600" },
]

export default function BecomeProviderPage() {
  const [step, setStep] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    // Basic Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    bio: "",

    // Professional Info
    experience: "",
    specialties: [] as string[],
    portfolio: "",
    priceMin: "",
    priceMax: "",

    // Availability
    availableDays: [] as string[],
    workingHours: "",

    // Social & Links
    instagram: "",
    facebook: "",
    website: "",

    // Offerings
    freeTrial: false,
    discountCoupons: "",
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSpecialtyToggle = (specialty: string) => {
    setFormData((prev) => ({
      ...prev,
      specialties: prev.specialties.includes(specialty)
        ? prev.specialties.filter((s) => s !== specialty)
        : [...prev.specialties, specialty],
    }))
  }

  const handleDayToggle = (day: string) => {
    setFormData((prev) => ({
      ...prev,
      availableDays: prev.availableDays.includes(day)
        ? prev.availableDays.filter((d) => d !== day)
        : [...prev.availableDays, day],
    }))
  }

  const handleSubmit = () => {
    if (!selectedCategory || !formData.firstName || !formData.email || !formData.phone) {
      alert("Please fill in all required fields")
      return
    }
    alert("Registration submitted! We will review your profile and get back to you soon.")
    setStep(1)
    setSelectedCategory("")
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      location: "",
      bio: "",
      experience: "",
      specialties: [],
      portfolio: "",
      priceMin: "",
      priceMax: "",
      availableDays: [],
      workingHours: "",
      instagram: "",
      facebook: "",
      website: "",
      freeTrial: false,
      discountCoupons: "",
    })
  }

  const specialtyOptions: Record<string, string[]> = {
    "wedding-designer": ["Bridal Wear", "Lehengas", "Sarees", "Embroidery", "Customization"],
    "casual-wear": ["Street Wear", "Minimalist", "Fusion", "Sustainable Fashion", "Everyday Wear"],
    "party-stylist": ["Party Outfits", "Event Styling", "Color Coordination", "Accessorizing"],
    "office-stylist": ["Corporate Wear", "Professional Styling", "Wardrobe Planning"],
    "makeup-artist": ["Bridal Makeup", "Party Makeup", "HD Makeup", "Airbrush", "Special Effects"],
    "hair-stylist": ["Hair Cutting", "Coloring", "Styling", "Hair Treatment", "Bridal Hair"],
    "personal-shopper": ["Wardrobe Consultation", "Shopping", "Style Advice", "Seasonal Updates"],
    "fashion-consultant": ["Style Advice", "Color Analysis", "Body Type Consultation", "Trend Forecasting"],
  }

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

  return (
    <>
    <Navigation/>
        <main className="min-h-screen bg-gradient-to-b from-white to-rose-50/30 dark:from-gray-900 dark:to-rose-900/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Header */}
            <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'animate-glow-in' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 px-4 py-2 rounded-full text-sm mb-6">
                <Sparkles className="w-4 h-4" />
                Join Our Community
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Become a
                <span className="block bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">
                Service Provider
                </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Join our platform and connect with thousands of clients looking for your expertise
            </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
                { icon: Users, value: "10K+", label: "Active Clients" },
                { icon: Star, value: "4.9★", label: "Avg Rating" },
                { icon: Award, value: "500+", label: "Providers" },
                { icon: Sparkles, value: "95%", label: "Success Rate" },
            ].map((stat, index) => (
                <div 
                key={index}
                className="text-center p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                >
                <stat.icon className="w-8 h-8 text-rose-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
            ))}
            </div>

            {/* Step Indicator */}
            <div className="flex gap-2 mb-12 relative">
            <div className="absolute top-4 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 -z-10" />
            {[1, 2, 3, 4].map((s) => (
                <div key={s} className="flex-1 text-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 transition-all duration-500 ${
                    s <= step 
                    ? `bg-gradient-to-r ${categories.find(c => c.id === selectedCategory)?.color || 'from-rose-500 to-amber-500'} text-white scale-110` 
                    : "bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-400"
                }`}>
                    {s}
                </div>
                <p className={`text-xs transition-all duration-300 ${
                    s <= step ? "text-gray-900 dark:text-white font-semibold" : "text-gray-500 dark:text-gray-500"
                }`}>
                    {s === 1 && "Category"}
                    {s === 2 && "Basic Info"}
                    {s === 3 && "Professional"}
                    {s === 4 && "Review"}
                </p>
                </div>
            ))}
            </div>

            {/* Step 1: Category Selection */}
            {step === 1 && (
            <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl animate-slide-up">
                <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    Select Your Category
                </CardTitle>
                <CardDescription className="text-lg text-gray-600 dark:text-gray-400">
                    What type of service do you provide?
                </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {categories.map((cat, index) => (
                    <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`p-6 rounded-2xl border-2 transition-all duration-500 text-left group hover:scale-105 hover:-translate-y-1 animate-fade-in-up ${
                        selectedCategory === cat.id
                            ? `border-transparent bg-gradient-to-r ${cat.color} text-white shadow-2xl`
                            : "border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-700/50 hover:border-rose-300 dark:hover:border-rose-600"
                        }`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className="flex items-center gap-4">
                        <span className="text-2xl">{cat.icon}</span>
                        <div>
                            <p className={`font-semibold text-lg ${
                            selectedCategory === cat.id ? "text-white" : "text-gray-900 dark:text-white"
                            }`}>
                            {cat.label}
                            </p>
                            <p className={`text-sm mt-1 ${
                            selectedCategory === cat.id ? "text-rose-100" : "text-gray-600 dark:text-gray-400"
                            }`}>
                            {specialtyOptions[cat.id]?.slice(0, 2).join(", ")}
                            </p>
                        </div>
                        </div>
                    </button>
                    ))}
                </div>

                <div className="flex gap-3 pt-6">
                    <Link href="/browse" className="flex-1">
                    <Button variant="outline" className="w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 hover:bg-rose-50 dark:hover:bg-rose-900/20">
                        Back to Browse
                    </Button>
                    </Link>
                    <Button 
                    className="flex-1 bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white py-3 rounded-xl transition-all duration-300 hover:scale-105 group"
                    disabled={!selectedCategory}
                    onClick={() => setStep(2)}
                    >
                    Continue
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
                </CardContent>
            </Card>
            )}

            {/* Step 2: Basic Information */}
            {step === 2 && (
            <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl animate-slide-up">
                <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    Basic Information
                </CardTitle>
                <CardDescription className="text-lg text-gray-600 dark:text-gray-400">
                    Tell us about yourself
                </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                    <label className="text-sm font-medium mb-3 block text-gray-700 dark:text-gray-300">First Name *</label>
                    <Input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Enter your first name"
                        className="bg-white/50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-600 focus:border-rose-300 dark:focus:border-rose-500"
                    />
                    </div>
                    <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                    <label className="text-sm font-medium mb-3 block text-gray-700 dark:text-gray-300">Last Name *</label>
                    <Input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Enter your last name"
                        className="bg-white/50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-600 focus:border-rose-300 dark:focus:border-rose-500"
                    />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                    <label className="text-sm font-medium mb-3 block text-gray-700 dark:text-gray-300">Email *</label>
                    <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className="bg-white/50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-600 focus:border-rose-300 dark:focus:border-rose-500"
                    />
                    </div>
                    <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                    <label className="text-sm font-medium mb-3 block text-gray-700 dark:text-gray-300">Phone Number *</label>
                    <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        className="bg-white/50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-600 focus:border-rose-300 dark:focus:border-rose-500"
                    />
                    </div>
                </div>

                <div className="animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                    <label className="text-sm font-medium mb-3 block text-gray-700 dark:text-gray-300">Location *</label>
                    <Input
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="City, State"
                    className="bg-white/50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-600 focus:border-rose-300 dark:focus:border-rose-500"
                    />
                </div>

                <div className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                    <label className="text-sm font-medium mb-3 block text-gray-700 dark:text-gray-300">Bio</label>
                    <Textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    placeholder="Tell us about yourself and your expertise..."
                    rows={4}
                    className="bg-white/50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-600 focus:border-rose-300 dark:focus:border-rose-500"
                    />
                </div>

                <div className="flex gap-3 pt-6">
                    <Button 
                    variant="outline" 
                    className="flex-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 hover:bg-rose-50 dark:hover:bg-rose-900/20"
                    onClick={() => setStep(1)}
                    >
                    Back
                    </Button>
                    <Button
                    className="flex-1 bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white py-3 rounded-xl transition-all duration-300 hover:scale-105 group"
                    disabled={!formData.firstName || !formData.email || !formData.phone}
                    onClick={() => setStep(3)}
                    >
                    Continue
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
                </CardContent>
            </Card>
            )}

            {/* Step 3: Professional Information */}
            {step === 3 && (
            <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl animate-slide-up">
                <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    Professional Information
                </CardTitle>
                <CardDescription className="text-lg text-gray-600 dark:text-gray-400">
                    Share your expertise and pricing
                </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                    <label className="text-sm font-medium mb-3 block text-gray-700 dark:text-gray-300">Years of Experience *</label>
                    <Input
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    placeholder="e.g., 5 years"
                    className="bg-white/50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-600 focus:border-rose-300 dark:focus:border-rose-500"
                    />
                </div>

                <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                    <label className="text-sm font-medium mb-3 block text-gray-700 dark:text-gray-300">Specialties</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {(specialtyOptions[selectedCategory] || []).map((specialty, index) => (
                        <div key={specialty} className="flex items-center gap-3 p-3 rounded-lg bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 hover:border-rose-300 dark:hover:border-rose-500 transition-colors">
                        <Checkbox
                            id={specialty}
                            checked={formData.specialties.includes(specialty)}
                            onCheckedChange={() => handleSpecialtyToggle(specialty)}
                            className="data-[state=checked]:bg-rose-500 data-[state=checked]:border-rose-500"
                        />
                        <label htmlFor={specialty} className="text-sm cursor-pointer text-gray-700 dark:text-gray-300">
                            {specialty}
                        </label>
                        </div>
                    ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                    <label className="text-sm font-medium mb-3 block text-gray-700 dark:text-gray-300">Minimum Price (₹) *</label>
                    <Input
                        name="priceMin"
                        type="number"
                        value={formData.priceMin}
                        onChange={handleInputChange}
                        placeholder="e.g., 5000"
                        className="bg-white/50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-600 focus:border-rose-300 dark:focus:border-rose-500"
                    />
                    </div>
                    <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                    <label className="text-sm font-medium mb-3 block text-gray-700 dark:text-gray-300">Maximum Price (₹) *</label>
                    <Input
                        name="priceMax"
                        type="number"
                        value={formData.priceMax}
                        onChange={handleInputChange}
                        placeholder="e.g., 50000"
                        className="bg-white/50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-600 focus:border-rose-300 dark:focus:border-rose-500"
                    />
                    </div>
                </div>

                <div className="animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                    <label className="text-sm font-medium mb-3 block text-gray-700 dark:text-gray-300">Available Days</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {days.map((day) => (
                        <div key={day} className="flex items-center gap-3 p-3 rounded-lg bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 hover:border-rose-300 dark:hover:border-rose-500 transition-colors">
                        <Checkbox
                            id={day}
                            checked={formData.availableDays.includes(day)}
                            onCheckedChange={() => handleDayToggle(day)}
                            className="data-[state=checked]:bg-rose-500 data-[state=checked]:border-rose-500"
                        />
                        <label htmlFor={day} className="text-sm cursor-pointer text-gray-700 dark:text-gray-300">
                            {day}
                        </label>
                        </div>
                    ))}
                    </div>
                </div>

                <div className="flex gap-3 pt-6">
                    <Button 
                    variant="outline" 
                    className="flex-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 hover:bg-rose-50 dark:hover:bg-rose-900/20"
                    onClick={() => setStep(2)}
                    >
                    Back
                    </Button>
                    <Button
                    className="flex-1 bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white py-3 rounded-xl transition-all duration-300 hover:scale-105 group"
                    disabled={!formData.experience || !formData.priceMin || !formData.priceMax}
                    onClick={() => setStep(4)}
                    >
                    Continue
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
                </CardContent>
            </Card>
            )}

            {/* Step 4: Review & Submit */}
            {step === 4 && (
            <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl animate-slide-up">
                <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    Review Your Profile
                </CardTitle>
                <CardDescription className="text-lg text-gray-600 dark:text-gray-400">
                    Make sure everything looks good before submitting
                </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                    <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">Basic Information</h3>
                    <div className="space-y-3 text-sm bg-white/50 dark:bg-gray-700/50 rounded-xl p-4">
                        <p>
                        <span className="text-muted-foreground">Name:</span> {formData.firstName} {formData.lastName}
                        </p>
                        <p>
                        <span className="text-muted-foreground">Email:</span> {formData.email}
                        </p>
                        <p>
                        <span className="text-muted-foreground">Phone:</span> {formData.phone}
                        </p>
                        <p>
                        <span className="text-muted-foreground">Location:</span> {formData.location}
                        </p>
                    </div>
                    </div>

                    <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                    <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">Professional Details</h3>
                    <div className="space-y-3 text-sm bg-white/50 dark:bg-gray-700/50 rounded-xl p-4">
                        <p>
                        <span className="text-muted-foreground">Category:</span>{" "}
                        {categories.find((c) => c.id === selectedCategory)?.label}
                        </p>
                        <p>
                        <span className="text-muted-foreground">Experience:</span> {formData.experience}
                        </p>
                        <p>
                        <span className="text-muted-foreground">Price Range:</span> ₹{formData.priceMin} - ₹
                        {formData.priceMax}
                        </p>
                    </div>
                    </div>
                </div>

                {formData.specialties.length > 0 && (
                    <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                    <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">Specialties</h3>
                    <div className="flex flex-wrap gap-2">
                        {formData.specialties.map((specialty) => (
                        <span key={specialty} className="bg-gradient-to-r from-rose-500 to-amber-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                            {specialty}
                        </span>
                        ))}
                    </div>
                    </div>
                )}

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                    <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                        <p className="font-semibold text-green-900 dark:text-green-100">Profile Ready for Review</p>
                        <p className="text-sm text-green-800 dark:text-green-200 mt-2">
                        Your profile will be reviewed by our team within 24-48 hours. You&apos;ll receive an email confirmation
                        once approved.
                        </p>
                    </div>
                    </div>
                </div>

                <div className="flex gap-3 pt-6">
                    <Button 
                    variant="outline" 
                    className="flex-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 hover:bg-rose-50 dark:hover:bg-rose-900/20"
                    onClick={() => setStep(3)}
                    >
                    Back
                    </Button>
                    <Button 
                    className="flex-1 bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white py-3 rounded-xl transition-all duration-300 hover:scale-105 group"
                    onClick={handleSubmit}
                    >
                    Submit Profile
                    <CheckCircle className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
                    </Button>
                </div>
                </CardContent>
            </Card>
            )}
        </div>
            <Footer />

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
        `}</style>
        </main>
    </>
  )
}