"use client";

import { Star, MapPin, Award, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Designer {
  id: number;
  name: string;
  specialty: string;
  location: string;
  rating: number;
  reviews: number;
  experience: number;
  image: string;
  price: { min: number; max: number };
  clients: number;
  freeTrial: boolean;
}

export default function DesignerProfileHeader({
  designer,
}: {
  designer: Designer;
}) {
  return (
    <section className="bg-secondary/50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Profile Image */}
          <div className="md:col-span-1">
            <div className="relative rounded-lg overflow-hidden h-80 bg-muted">
              <Image
                src={designer.image || "/placeholder.svg"}
                width={400}
                height={320}
                alt={designer.name}
                className="w-full h-full object-cover"
              />
              {designer.freeTrial && (
                <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
                  Free Trial Available
                </div>
              )}
            </div>
          </div>

          {/* Profile Info */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <h1 className="text-4xl font-bold text-foreground mb-2">
                {designer.name}
              </h1>
              <p className="text-xl text-accent font-semibold mb-4">
                {designer.specialty}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={
                          i < Math.floor(designer.rating)
                            ? "fill-accent text-accent"
                            : "text-muted"
                        }
                      />
                    ))}
                  </div>
                  <span className="font-bold text-lg text-foreground">
                    {designer.rating}
                  </span>
                  <span className="text-muted-foreground">
                    ({designer.reviews} reviews)
                  </span>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-card rounded-lg p-4 border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Award size={20} className="text-accent" />
                  <span className="text-sm text-muted-foreground">
                    Experience
                  </span>
                </div>
                <p className="text-2xl font-bold text-foreground">
                  {designer.experience}+
                </p>
                <p className="text-xs text-muted-foreground">years</p>
              </div>

              <div className="bg-card rounded-lg p-4 border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Users size={20} className="text-accent" />
                  <span className="text-sm text-muted-foreground">Clients</span>
                </div>
                <p className="text-2xl font-bold text-foreground">
                  {designer.clients}+
                </p>
              </div>

              <div className="bg-card rounded-lg p-4 border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={20} className="text-accent" />
                  <span className="text-sm text-muted-foreground">
                    Location
                  </span>
                </div>
                <p className="text-lg font-bold text-foreground">
                  {designer.location}
                </p>
              </div>

              <div className="bg-card rounded-lg p-4 border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Heart size={20} className="text-accent" />
                  <span className="text-sm text-muted-foreground">
                    Price Range
                  </span>
                </div>
                <p className="text-sm font-bold text-foreground">
                  ₹{(designer.price.min / 1000).toFixed(0)}K - ₹
                  {(designer.price.max / 1000).toFixed(0)}K
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground flex-1">
                Book Appointment
              </Button>
              <Button variant="outline" className="bg-transparent">
                Save Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
