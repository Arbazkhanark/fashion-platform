"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Palette, Scissors, ImageUp as Makeup, Shirt, Zap, Heart, Crown } from "lucide-react"

const categories = [
  {
    id: "wedding-designer",
    title: "Wedding Designers",
    description: "Bridal wear and wedding styling",
    icon: Crown,
    color: "from-pink-500 to-rose-500",
    count: "450+",
  },
  {
    id: "casual-wear",
    title: "Casual Wear Designers",
    description: "Everyday fashion and styling",
    icon: Shirt,
    color: "from-blue-500 to-cyan-500",
    count: "680+",
  },
  {
    id: "party-stylist",
    title: "Party Stylists",
    description: "Event and celebration styling",
    icon: Sparkles,
    color: "from-purple-500 to-pink-500",
    count: "320+",
  },
  {
    id: "office-stylist",
    title: "Office Event Stylists",
    description: "Corporate and professional styling",
    icon: Palette,
    color: "from-amber-500 to-orange-500",
    count: "280+",
  },
  {
    id: "makeup-artist",
    title: "Makeup Artists",
    description: "Professional makeup services",
    icon: Makeup,
    color: "from-red-500 to-pink-500",
    count: "520+",
  },
  {
    id: "hair-stylist",
    title: "Hair Stylists",
    description: "Hair cutting and styling",
    icon: Scissors,
    color: "from-yellow-500 to-amber-500",
    count: "610+",
  },
  {
    id: "personal-shopper",
    title: "Personal Shoppers",
    description: "Shopping and wardrobe consultation",
    icon: Heart,
    color: "from-green-500 to-emerald-500",
    count: "190+",
  },
  {
    id: "fashion-consultant",
    title: "Fashion Consultants",
    description: "Style advice and consultation",
    icon: Zap,
    color: "from-indigo-500 to-blue-500",
    count: "240+",
  },
]

export default function CategoryGrid() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Find the perfect expert for your needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, idx) => {
            const Icon = category.icon
            return (
              <Link key={category.id} href={`/browse?category=${category.id}`}>
                <Card
                  className="h-full hover:shadow-lg transition-smooth cursor-pointer group animate-fade-in"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <CardHeader>
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-semibold text-primary">{category.count} experts</p>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
