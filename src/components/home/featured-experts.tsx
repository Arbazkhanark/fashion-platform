"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const featuredExperts = [
  {
    id: 1,
    name: "Priya Sharma",
    title: "Wedding Designer",
    location: "Mumbai, India",
    rating: 4.9,
    reviews: 342,
    image: "/professional-woman-designer.jpg",
    specialties: ["Bridal Wear", "Lehengas", "Sarees"],
    experience: "12 years",
    clients: "500+",
    price: "₹50,000 - ₹2,00,000",
  },
  {
    id: 2,
    name: "Arjun Verma",
    title: "Casual Wear Designer",
    location: "Delhi, India",
    rating: 4.8,
    reviews: 287,
    image: "/professional-man-designer.jpg",
    specialties: ["Street Wear", "Minimalist", "Fusion"],
    experience: "8 years",
    clients: "350+",
    price: "₹15,000 - ₹50,000",
  },
  {
    id: 3,
    name: "Neha Patel",
    title: "Makeup Artist",
    location: "Bangalore, India",
    rating: 4.9,
    reviews: 421,
    image: "/professional-makeup-artist.jpg",
    specialties: ["Bridal Makeup", "Party Makeup", "HD Makeup"],
    experience: "10 years",
    clients: "600+",
    price: "₹5,000 - ₹25,000",
  },
  {
    id: 4,
    name: "Vikram Singh",
    title: "Hair Stylist",
    location: "Pune, India",
    rating: 4.7,
    reviews: 198,
    image: "/professional-hair-stylist.jpg",
    specialties: ["Hair Cutting", "Coloring", "Styling"],
    experience: "9 years",
    clients: "400+",
    price: "₹2,000 - ₹10,000",
  },
];

export default function FeaturedExperts() {
  return (
    <section className="py-16 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Experts</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our top-rated professionals with exceptional reviews
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredExperts.map((expert, idx) => (
            <Link key={expert.id} href={`/expert/${expert.id}`}>
              <Card
                className="h-full hover:shadow-xl transition-smooth cursor-pointer group overflow-hidden animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <CardHeader className="pb-3">
                  <div className="relative mb-4 overflow-hidden rounded-lg h-40 bg-muted">
                    <Image
                      src={expert.image || "/placeholder.svg"}
                      alt={expert.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <CardTitle className="text-lg">{expert.name}</CardTitle>
                  <CardDescription>{expert.title}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {expert.location}
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <span className="font-semibold">{expert.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({expert.reviews})
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <Award className="w-4 h-4 text-primary" />
                    <span>{expert.experience} experience</span>
                  </div>

                  <div className="pt-2 border-t border-border">
                    <p className="text-sm font-semibold text-primary">
                      {expert.price}
                    </p>
                  </div>

                  <Button className="w-full mt-2">View Profile</Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/browse">
            <Button size="lg" variant="outline">
              View All Experts
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
