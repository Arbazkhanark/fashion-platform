"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Star, MapPin } from "lucide-react"

const savedDesigners = [
  {
    id: 1,
    name: "Priya Sharma",
    specialty: "Bridal & Wedding",
    location: "Mumbai",
    rating: 4.9,
    reviews: 245,
    image: "/professional-fashion-designer-woman.jpg",
  },
  {
    id: 3,
    name: "Zara Khan",
    specialty: "Party & Evening Wear",
    location: "Bangalore",
    rating: 4.9,
    reviews: 312,
    image: "/fashion-stylist-woman-elegant.jpg",
  },
  {
    id: 2,
    name: "Arjun Kapoor",
    specialty: "Corporate & Formal",
    location: "Delhi",
    rating: 4.8,
    reviews: 189,
    image: "/professional-fashion-designer-man.png",
  },
]

export default function SavedDesigners() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Saved Designers</h1>
        <p className="text-muted-foreground">Your favorite designers and stylists</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {savedDesigners.map((designer) => (
          <Card key={designer.id} className="overflow-hidden hover:shadow-lg transition">
            <div className="relative h-48 bg-muted overflow-hidden">
              <img
                src={designer.image || "/placeholder.svg"}
                alt={designer.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
              <button className="absolute top-3 right-3 p-2 bg-white rounded-full hover:bg-gray-100 transition">
                <Heart size={20} className="fill-red-500 text-red-500" />
              </button>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-bold text-foreground mb-1">{designer.name}</h3>
              <p className="text-sm text-accent font-semibold mb-3">{designer.specialty}</p>

              <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-accent" />
                  {designer.location}
                </div>
                <div className="flex items-center gap-2">
                  <Star size={16} className="fill-accent text-accent" />
                  {designer.rating} ({designer.reviews} reviews)
                </div>
              </div>

              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                <Link href={`/designer/${designer.id}`}>View Profile</Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
