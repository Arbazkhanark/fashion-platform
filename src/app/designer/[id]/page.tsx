"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import DesignerProfileHeader from "@/components/designer-profile-header"
import DesignerPortfolio from "@/components/designer-portfolio"
import AppointmentBooking from "@/components/appointment-booking"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DesignerReviews from "@/components/designer-review"

// Mock designer data
const designerData = {
  1: {
    id: 1,
    name: "Priya Sharma",
    specialty: "Bridal & Wedding",
    location: "Mumbai",
    rating: 4.9,
    reviews: 245,
    experience: 12,
    image: "/professional-fashion-designer-woman.jpg",
    price: { min: 50000, max: 200000 },
    clients: 500,
    bio: "Expert in bridal wear with 12 years of experience creating stunning wedding outfits. Specializes in traditional and contemporary designs.",
    about:
      "I am a passionate fashion designer with over 12 years of experience in creating beautiful bridal wear. My designs blend traditional aesthetics with modern trends, ensuring every bride feels confident and beautiful on their special day.",
    specialties: ["Bridal Wear", "Wedding Styling", "Lehenga Design", "Saree Draping", "Customization"],
    socialLinks: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      pinterest: "https://pinterest.com",
    },
    freeTrial: true,
    portfolio: [
      { id: 1, title: "Bridal Collection 2024", image: "/professional-fashion-designer-woman.jpg" },
      { id: 2, title: "Wedding Styling", image: "/fashion-stylist-woman-elegant.jpg" },
      { id: 3, title: "Lehenga Designs", image: "/professional-fashion-designer-woman.jpg" },
      { id: 4, title: "Saree Collection", image: "/fashion-stylist-woman-elegant.jpg" },
      { id: 5, title: "Customized Outfits", image: "/professional-fashion-designer-woman.jpg" },
      { id: 6, title: "Bridal Makeup", image: "/fashion-stylist-woman-elegant.jpg" },
    ],
    reviewEntries: [
      {
        id: 1,
        author: "Anjali Verma",
        rating: 5,
        date: "2024-10-15",
        text: "Priya made my wedding day special! Her designs were stunning and she understood my vision perfectly.",
        verified: true,
      },
      {
        id: 2,
        author: "Neha Singh",
        rating: 5,
        date: "2024-09-20",
        text: "Absolutely amazing work! The attention to detail is incredible. Highly recommended!",
        verified: true,
      },
      {
        id: 3,
        author: "Pooja Desai",
        rating: 4,
        date: "2024-08-10",
        text: "Great designer with excellent communication. Would definitely work with her again.",
        verified: true,
      },
    ],
    availableSlots: [
      { date: "2025-10-25", time: "10:00 AM", available: true },
      { date: "2025-10-25", time: "02:00 PM", available: true },
      { date: "2025-10-25", time: "04:00 PM", available: false },
      { date: "2025-10-26", time: "10:00 AM", available: true },
      { date: "2025-10-26", time: "03:00 PM", available: true },
      { date: "2025-10-27", time: "11:00 AM", available: true },
    ],
    coupons: [
      { code: "WEDDING20", discount: 20, description: "20% off on bridal packages" },
      { code: "FIRST10", discount: 10, description: "10% off for first-time clients" },
    ],
  },
}

export default function DesignerProfilePage({ params }: { params: { id: string } }) {
  const designer = designerData[params.id as unknown as keyof typeof designerData]
  const [selectedTab, setSelectedTab] = useState("portfolio")

  if (!designer) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground">Designer not found</h1>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Designer Header */}
      <DesignerProfileHeader designer={designer} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Tabs */}
          <div className="lg:col-span-2">
            <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-secondary">
                <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="portfolio" className="mt-8">
                <DesignerPortfolio portfolio={designer.portfolio} />
              </TabsContent>

              <TabsContent value="about" className="mt-8">
                <div className="bg-card rounded-lg p-8 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-4">About {designer.name}</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{designer.about}</p>

                  <h3 className="text-xl font-bold text-foreground mb-4">Specialties</h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {designer.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-4">Connect on Social Media</h3>
                  <div className="flex gap-4">
                    <a
                      href={designer.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent/80 transition"
                    >
                      Instagram
                    </a>
                    <a
                      href={designer.socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent/80 transition"
                    >
                      Facebook
                    </a>
                    <a
                      href={designer.socialLinks.pinterest}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent/80 transition"
                    >
                      Pinterest
                    </a>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="mt-8">
                <DesignerReviews reviews={designer.reviewEntries} />
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Booking & Info */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-6">
              {/* Coupons */}
              {designer.coupons.length > 0 && (
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h3 className="text-lg font-bold text-foreground mb-4">Available Coupons</h3>
                  <div className="space-y-3">
                    {designer.coupons.map((coupon, index) => (
                      <div key={index} className="bg-accent/10 p-3 rounded-lg">
                        <p className="font-bold text-accent text-sm">{coupon.code}</p>
                        <p className="text-xs text-muted-foreground">{coupon.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Appointment Booking */}
              <AppointmentBooking designer={designer} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
