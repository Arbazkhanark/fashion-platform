"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Star,
  MapPin,
  Calendar,
  Heart,
  Share2,
  MessageCircle,
  Instagram,
  Facebook,
  Globe,
  Zap,
  Check,
} from "lucide-react"
import { mockExperts } from "@/lib/mock-data"
import BookingModal from "@/components/appointments-management"
const BookingModalAny = BookingModal as any

export default function ExpertProfilePage({ params }: { params: { id: string } }) {
  const expert = mockExperts.find((e) => e.id === params.id)
  const [isFavorite, setIsFavorite] = useState(false)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [bookings, setBookings] = useState<any[]>([])

  if (!expert) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <Card>
          <CardContent className="pt-6">
            <p className="text-muted-foreground">Expert not found</p>
          </CardContent>
        </Card>
      </main>
    )
  }

  const handleBookingConfirm = (booking: any) => {
    setBookings((prev) => [...prev, booking])
    setIsBookingOpen(false)
    alert("Booking confirmed! You will receive a confirmation email shortly.")
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Image */}
          <div className="md:col-span-1">
            <div className="relative rounded-xl overflow-hidden h-80 bg-muted mb-4">
              <img src={expert.image || "/placeholder.svg"} alt={expert.name} className="w-full h-full object-cover" />
            </div>
            <Button className="w-full mb-2 gap-2" onClick={() => setIsBookingOpen(true)}>
              <Calendar className="w-4 h-4" />
              Book Appointment
            </Button>
            <Button variant="outline" className="w-full mb-2 gap-2 bg-transparent">
              <MessageCircle className="w-4 h-4" />
              Send Message
            </Button>
            <div className="flex gap-2">
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="flex-1 p-2 hover:bg-secondary rounded-lg transition-smooth border border-border"
              >
                <Heart className={`w-5 h-5 mx-auto ${isFavorite ? "fill-destructive text-destructive" : ""}`} />
              </button>
              <button className="flex-1 p-2 hover:bg-secondary rounded-lg transition-smooth border border-border">
                <Share2 className="w-5 h-5 mx-auto" />
              </button>
            </div>
          </div>

          {/* Info */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <h1 className="text-4xl font-bold mb-2">{expert.name}</h1>
              <p className="text-xl text-primary font-semibold mb-4">{expert.title}</p>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(expert.rating) ? "fill-accent text-accent" : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-semibold">{expert.rating}</span>
                  <span className="text-muted-foreground">({expert.reviews} reviews)</span>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <Card className="bg-secondary/50">
                  <CardContent className="pt-4">
                    <p className="text-2xl font-bold text-primary">{expert.clientsServed}+</p>
                    <p className="text-sm text-muted-foreground">Clients Served</p>
                  </CardContent>
                </Card>
                <Card className="bg-secondary/50">
                  <CardContent className="pt-4">
                    <p className="text-2xl font-bold text-primary">{expert.experience}</p>
                    <p className="text-sm text-muted-foreground">Experience</p>
                  </CardContent>
                </Card>
                <Card className="bg-secondary/50">
                  <CardContent className="pt-4">
                    <p className="text-2xl font-bold text-primary">₹{expert.priceRange.min.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">Starting Price</p>
                  </CardContent>
                </Card>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <MapPin className="w-5 h-5" />
                {expert.location}
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                {expert.freeTrial && (
                  <div className="flex items-center gap-1 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    <Zap className="w-4 h-4" />
                    Free Trial Available
                  </div>
                )}
                {expert.discountCoupons.length > 0 && (
                  <div className="flex items-center gap-1 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    <Check className="w-4 h-4" />
                    Discount Available
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="about" className="mb-8">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="availability">Availability</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>

          {/* About Tab */}
          <TabsContent value="about" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{expert.bio}</p>

                <div>
                  <h3 className="font-semibold mb-3">Specialties</h3>
                  <div className="flex flex-wrap gap-2">
                    {expert.specialties.map((specialty) => (
                      <span key={specialty} className="bg-secondary px-3 py-1 rounded-full text-sm">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {expert.discountCoupons.length > 0 && (
                  <div>
                    <h3 className="font-semibold mb-3">Available Discounts</h3>
                    <div className="space-y-2">
                      {expert.discountCoupons.map((coupon) => (
                        <Card key={coupon.code} className="bg-accent/10">
                          <CardContent className="pt-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <p className="font-semibold text-lg">{coupon.discount}% OFF</p>
                                <p className="text-sm text-muted-foreground">{coupon.description}</p>
                                <p className="text-xs text-muted-foreground mt-1">
                                  Code: <span className="font-mono font-semibold">{coupon.code}</span>
                                </p>
                              </div>
                              <p className="text-xs text-muted-foreground">Expires: {coupon.expiryDate}</p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Portfolio Tab */}
          <TabsContent value="portfolio">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {expert.portfolio.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-smooth">
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <CardContent className="pt-4">
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                    <span className="text-xs bg-secondary px-2 py-1 rounded">{item.category}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Availability Tab */}
          <TabsContent value="availability">
            <Card>
              <CardHeader>
                <CardTitle>Available Slots</CardTitle>
                <CardDescription>Select a date to view available time slots</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {expert.availability.slice(0, 7).map((day) => (
                    <div key={day.date} className="border border-border rounded-lg p-4">
                      <p className="font-semibold mb-3">{day.date}</p>
                      <div className="grid grid-cols-4 gap-2">
                        {day.slots.map((slot) => (
                          <button
                            key={slot.time}
                            disabled={!slot.available}
                            className={`p-2 rounded-lg text-sm font-medium transition-smooth ${
                              slot.available
                                ? "bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer"
                                : "bg-muted text-muted-foreground cursor-not-allowed"
                            }`}
                          >
                            {slot.time}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews">
            <Card>
              <CardHeader>
                <CardTitle>Customer Reviews</CardTitle>
                <CardDescription>
                  {expert.reviewsList && Array.isArray(expert.reviewsList) ? expert.reviewsList.length : 0} reviews from
                  verified customers
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {expert.reviewsList && Array.isArray(expert.reviewsList) && expert.reviewsList.length > 0 ? (
                  expert.reviewsList.map((review) => (
                    <div key={review.id} className="border-b border-border pb-4 last:border-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="font-semibold">{review.userName}</p>
                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < review.rating ? "fill-accent text-accent" : "text-muted-foreground"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-muted-foreground">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{review.comment}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-muted-foreground">No reviews yet</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Contact Tab */}
          <TabsContent value="contact">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Social Media</p>
                  <div className="flex gap-3">
                    {expert.socialMedia.instagram && (
                      <a
                        href={expert.socialMedia.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-secondary rounded-lg transition-smooth"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                    )}
                    {expert.socialMedia.facebook && (
                      <a
                        href={expert.socialMedia.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-secondary rounded-lg transition-smooth"
                      >
                        <Facebook className="w-5 h-5" />
                      </a>
                    )}
                    {expert.socialMedia.website && (
                      <a
                        href={expert.socialMedia.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-secondary rounded-lg transition-smooth"
                      >
                        <Globe className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <div>
                  <Button className="w-full gap-2">
                    <MessageCircle className="w-4 h-4" />
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        {/* Booking Modal */}
        <BookingModalAny
          expert={expert}
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          onConfirm={handleBookingConfirm}
        />
      </div>
    </main>
  )
}
}
