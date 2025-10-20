"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Upload, 
  Camera, 
  Star, 
  MapPin, 
  Calendar, 
  User, 
  Sparkles, 
  ArrowLeft,
  X,
  CheckCircle,
  Image as ImageIcon
} from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"

interface StoryForm {
  userName: string
  userAge: string
  userLocation: string
  userEmail: string
  designerName: string
  designerSpecialty: string
  rating: number
  story: string
  occasion: string
  tags: string[]
  beforeImage: File | null
  afterImage: File | null
  videoUrl: string
  consent: boolean
}

const initialForm: StoryForm = {
  userName: "",
  userAge: "",
  userLocation: "",
  userEmail: "",
  designerName: "",
  designerSpecialty: "",
  rating: 5,
  story: "",
  occasion: "",
  tags: [],
  beforeImage: null,
  afterImage: null,
  videoUrl: "",
  consent: false
}

const occasions = [
  "Wedding",
  "Engagement",
  "Birthday",
  "Corporate Event",
  "Party",
  "Vacation",
  "Everyday Style",
  "Special Occasion",
  "Festival",
  "Other"
]

const specialties = [
  "Bridal Designer",
  "Makeup Artist",
  "Hair Stylist",
  "Personal Shopper",
  "Fashion Consultant",
  "Corporate Stylist",
  "Traditional Wear Expert",
  "Western Wear Specialist",
  "Men's Fashion",
  "Other"
]

const popularTags = [
  "Bridal", "Traditional", "Modern", "Casual", "Formal",
  "Colorful", "Minimalist", "Vintage", "Contemporary", "Custom"
]

export default function ShareStoryPage() {
  const [form, setForm] = useState<StoryForm>(initialForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [beforeImagePreview, setBeforeImagePreview] = useState<string>("")
  const [afterImagePreview, setAfterImagePreview] = useState<string>("")
  const [currentStep, setCurrentStep] = useState(1)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleInputChange = (field: keyof StoryForm, value: any) => {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  const handleImageUpload = (type: 'before' | 'after', file: File) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      if (type === 'before') {
        setBeforeImagePreview(e.target?.result as string)
        handleInputChange('beforeImage', file)
      } else {
        setAfterImagePreview(e.target?.result as string)
        handleInputChange('afterImage', file)
      }
    }
    reader.readAsDataURL(file)
  }

  const handleTagToggle = (tag: string) => {
    setForm(prev => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter(t => t !== tag)
        : [...prev.tags, tag]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const resetForm = () => {
    setForm(initialForm)
    setBeforeImagePreview("")
    setAfterImagePreview("")
    setCurrentStep(1)
    setIsSubmitted(false)
  }

  const steps = [
    { number: 1, title: "Your Details", description: "Tell us about yourself" },
    { number: 2, title: "Transformation", description: "Share your style journey" },
    { number: 3, title: "Review", description: "Preview and submit" }
  ]

  if (isSubmitted) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen bg-gradient-to-b from-white to-rose-50/30 dark:from-gray-900 dark:to-rose-900/20 flex items-center justify-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-12 border border-gray-200/50 dark:border-gray-700/50 transition-all duration-1000 ${isVisible ? 'animate-glow-in' : 'opacity-0'}`}>
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Story Submitted!
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Thank you for sharing your style transformation journey. Our team will review your story and it will be live on our platform within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={resetForm}
                  className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white"
                >
                  Share Another Story
                </Button>
                <Link href="/real-stories">
                  <Button variant="outline" className="bg-transparent border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300">
                    View All Stories
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-white to-rose-50/30 dark:from-gray-900 dark:to-rose-900/20">
        {/* Header */}
        <section className="py-16 bg-gradient-to-r from-rose-50/50 to-amber-50/30 dark:from-rose-900/10 dark:to-amber-900/5 border-b border-rose-100 dark:border-rose-800/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center transition-all duration-1000 ${isVisible ? 'animate-glow-in' : 'opacity-0'}`}>
              <Link href="/real-stories" className="inline-flex items-center gap-2 text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 mb-6 transition-colors group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Stories
              </Link>
              <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 px-4 py-2 rounded-full text-sm mb-6">
                <Sparkles className="w-4 h-4" />
                Share Your Journey
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Share Your
                <span className="block bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">
                  Style Story
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Inspire others by sharing your fashion transformation journey
              </p>
            </div>
          </div>
        </section>

        {/* Progress Steps */}
        <div className="py-8 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    currentStep >= step.number
                      ? "bg-gradient-to-r from-rose-500 to-amber-500 text-white scale-110"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-500"
                  }`}>
                    {step.number}
                  </div>
                  <div className="hidden sm:block">
                    <p className={`font-medium transition-colors ${
                      currentStep >= step.number ? "text-gray-900 dark:text-white" : "text-gray-500"
                    }`}>
                      {step.title}
                    </p>
                    <p className="text-sm text-gray-500">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-12 h-0.5 transition-colors ${
                      currentStep > step.number ? "bg-rose-500" : "bg-gray-200 dark:bg-gray-700"
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit}>
                  {/* Step 1: Personal Details */}
                  {currentStep === 1 && (
                    <div className="space-y-6 animate-fade-in-up">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Your Personal Details</h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                            Full Name *
                          </label>
                          <Input
                            value={form.userName}
                            onChange={(e) => handleInputChange('userName', e.target.value)}
                            placeholder="Enter your full name"
                            required
                            className="bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                            Age *
                          </label>
                          <Input
                            type="number"
                            value={form.userAge}
                            onChange={(e) => handleInputChange('userAge', e.target.value)}
                            placeholder="Your age"
                            required
                            className="bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                            Location *
                          </label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <Input
                              value={form.userLocation}
                              onChange={(e) => handleInputChange('userLocation', e.target.value)}
                              placeholder="City, State"
                              required
                              className="pl-10 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                            Email *
                          </label>
                          <Input
                            type="email"
                            value={form.userEmail}
                            onChange={(e) => handleInputChange('userEmail', e.target.value)}
                            placeholder="your@email.com"
                            required
                            className="bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm"
                          />
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <Button 
                          type="button"
                          onClick={nextStep}
                          disabled={!form.userName || !form.userAge || !form.userLocation || !form.userEmail}
                          className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white"
                        >
                          Continue
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Transformation Details */}
                  {currentStep === 2 && (
                    <div className="space-y-6 animate-fade-in-up">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Your Style Transformation</h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                            Designer Name *
                          </label>
                          <Input
                            value={form.designerName}
                            onChange={(e) => handleInputChange('designerName', e.target.value)}
                            placeholder="Designer's name"
                            required
                            className="bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                            Designer Specialty *
                          </label>
                          <select
                            value={form.designerSpecialty}
                            onChange={(e) => handleInputChange('designerSpecialty', e.target.value)}
                            required
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                          >
                            <option value="">Select specialty</option>
                            {specialties.map(specialty => (
                              <option key={specialty} value={specialty}>{specialty}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                          Rating *
                        </label>
                        <div className="flex gap-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => handleInputChange('rating', star)}
                              className="p-2 hover:scale-110 transition-transform"
                            >
                              <Star
                                className={`w-8 h-8 ${
                                  star <= form.rating ? "fill-amber-400 text-amber-400" : "text-gray-300 dark:text-gray-600"
                                }`}
                              />
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                          Occasion *
                        </label>
                        <select
                          value={form.occasion}
                          onChange={(e) => handleInputChange('occasion', e.target.value)}
                          required
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                        >
                          <option value="">Select occasion</option>
                          {occasions.map(occasion => (
                            <option key={occasion} value={occasion}>{occasion}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                          Your Story *
                        </label>
                        <Textarea
                          value={form.story}
                          onChange={(e) => handleInputChange('story', e.target.value)}
                          placeholder="Share your transformation journey... How did the designer help you? What was the experience like? How did it make you feel?"
                          rows={6}
                          required
                          className="bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                          Tags
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {popularTags.map(tag => (
                            <button
                              key={tag}
                              type="button"
                              onClick={() => handleTagToggle(tag)}
                              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                                form.tags.includes(tag)
                                  ? "bg-gradient-to-r from-rose-500 to-amber-500 text-white"
                                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-rose-50 dark:hover:bg-rose-900/20"
                              }`}
                            >
                              {tag}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-between">
                        <Button type="button" variant="outline" onClick={prevStep}>
                          Back
                        </Button>
                        <Button 
                          type="button"
                          onClick={nextStep}
                          disabled={!form.designerName || !form.designerSpecialty || !form.occasion || !form.story}
                          className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white"
                        >
                          Continue
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Media and Review */}
                  {currentStep === 3 && (
                    <div className="space-y-6 animate-fade-in-up">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Media & Final Review</h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {/* Before Image Upload */}
                        <div className="text-center">
                          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4 block">
                            Before Photo *
                          </label>
                          <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-6 hover:border-rose-400 dark:hover:border-rose-600 transition-colors cursor-pointer">
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => e.target.files?.[0] && handleImageUpload('before', e.target.files[0])}
                              className="hidden"
                              id="before-upload"
                              required
                            />
                            <label htmlFor="before-upload" className="cursor-pointer">
                              {beforeImagePreview ? (
                                <div className="relative">
                                  <img
                                    src={beforeImagePreview}
                                    alt="Before preview"
                                    className="w-full h-48 object-cover rounded-lg"
                                  />
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      setBeforeImagePreview("")
                                      handleInputChange('beforeImage', null)
                                    }}
                                    className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center"
                                  >
                                    <X className="w-4 h-4" />
                                  </button>
                                </div>
                              ) : (
                                <div className="space-y-3">
                                  <ImageIcon className="w-12 h-12 text-gray-400 mx-auto" />
                                  <p className="text-gray-600 dark:text-gray-400">Upload before photo</p>
                                  <p className="text-sm text-gray-500">JPG, PNG up to 5MB</p>
                                </div>
                              )}
                            </label>
                          </div>
                        </div>

                        {/* After Image Upload */}
                        <div className="text-center">
                          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4 block">
                            After Photo *
                          </label>
                          <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-6 hover:border-rose-400 dark:hover:border-rose-600 transition-colors cursor-pointer">
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => e.target.files?.[0] && handleImageUpload('after', e.target.files[0])}
                              className="hidden"
                              id="after-upload"
                              required
                            />
                            <label htmlFor="after-upload" className="cursor-pointer">
                              {afterImagePreview ? (
                                <div className="relative">
                                  <img
                                    src={afterImagePreview}
                                    alt="After preview"
                                    className="w-full h-48 object-cover rounded-lg"
                                  />
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      setAfterImagePreview("")
                                      handleInputChange('afterImage', null)
                                    }}
                                    className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center"
                                  >
                                    <X className="w-4 h-4" />
                                  </button>
                                </div>
                              ) : (
                                <div className="space-y-3">
                                  <Camera className="w-12 h-12 text-gray-400 mx-auto" />
                                  <p className="text-gray-600 dark:text-gray-400">Upload after photo</p>
                                  <p className="text-sm text-gray-500">JPG, PNG up to 5MB</p>
                                </div>
                              )}
                            </label>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                          Video URL (Optional)
                        </label>
                        <Input
                          value={form.videoUrl}
                          onChange={(e) => handleInputChange('videoUrl', e.target.value)}
                          placeholder="https://youtube.com/your-video"
                          className="bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm"
                        />
                      </div>

                      <div className="flex items-start gap-3 p-4 bg-rose-50 dark:bg-rose-900/20 rounded-lg">
                        <input
                          type="checkbox"
                          checked={form.consent}
                          onChange={(e) => handleInputChange('consent', e.target.checked)}
                          required
                          className="mt-1"
                        />
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            Consent Agreement
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            I give permission to StyleConnect to share my story and photos on their platform and social media channels.
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-between">
                        <Button type="button" variant="outline" onClick={prevStep}>
                          Back
                        </Button>
                        <Button 
                          type="submit"
                          disabled={!form.beforeImage || !form.afterImage || !form.consent || isSubmitting}
                          className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white"
                        >
                          {isSubmitting ? "Submitting..." : "Share Your Story"}
                        </Button>
                      </div>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
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
        .animate-glow-in {
          animation: glow-in 1.2s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </>
  )
}