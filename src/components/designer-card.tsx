"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Star, MapPin, Award, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
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

export default function DesignerCard({ designer }: { designer: Designer }) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/designer/${designer.id}`);
  };

  return (
    <Card
      onClick={handleCardClick}
      className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group"
    >
      {/* Image Section */}
      <div className="relative overflow-hidden h-64 bg-muted">
        <Image
          src={designer.image || "/placeholder.svg"}
          width={400}
          height={256}
          alt={designer.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
          <Star size={14} fill="currentColor" />
          {designer.rating}
        </div>

        {/* Free Trial Badge */}
        {designer.freeTrial && (
          <div className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
            <Zap size={12} />
            Free Trial
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-accent transition">
          {designer.name}
        </h3>
        <p className="text-sm text-accent font-semibold mb-3">
          {designer.specialty}
        </p>

        {/* Info Grid */}
        <div className="space-y-2 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-accent" />
            {designer.location}
          </div>
          <div className="flex items-center gap-2">
            <Award size={16} className="text-accent" />
            {designer.experience} years experience
          </div>
          <div className="flex items-center gap-2">
            <Star size={16} className="text-accent" />
            {designer.reviews} reviews
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-4" />

        {/* Price & Clients */}
        <div className="mb-4">
          <p className="text-sm font-semibold text-foreground mb-1">
            ₹{(designer.price.min / 1000).toFixed(0)}K - ₹
            {(designer.price.max / 1000).toFixed(0)}K
          </p>
          <p className="text-xs text-muted-foreground">
            {designer.clients}+ clients served
          </p>
        </div>

        {/* CTA Button */}
        <Button
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
          asChild
          onClick={(e) => e.stopPropagation()} // prevent triggering card click
        >
          <Link href={`/designer/${designer.id}`}>View Profile</Link>
        </Button>
      </div>
    </Card>
  );
}
