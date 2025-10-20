"use client";

import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  text: string;
  verified: boolean;
}

export default function DesignerReviews({ reviews }: { reviews: Review[] }) {
  const averageRating = (
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
  ).toFixed(1);

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Reviews & Ratings
        </h2>

        {/* Rating Summary */}
        <Card className="p-6 mb-8">
          <div className="flex items-center gap-8">
            <div className="text-center">
              <p className="text-5xl font-bold text-accent mb-2">
                {averageRating}
              </p>
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={
                      i < Math.floor(Number.parseFloat(averageRating))
                        ? "fill-accent text-accent"
                        : "text-muted"
                    }
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Based on {reviews.length} reviews
              </p>
            </div>

            {/* Rating Distribution */}
            <div className="flex-1 space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => {
                const count = reviews.filter((r) => r.rating === rating).length;
                const percentage = (count / reviews.length) * 100;
                return (
                  <div key={rating} className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground w-8">
                      {rating}★
                    </span>
                    <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground w-8 text-right">
                      {count}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </Card>
      </div>

      {/* Individual Reviews */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id} className="p-6">
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="font-bold text-foreground">{review.author}</p>
                {review.verified && (
                  <p className="text-xs text-green-600 font-semibold">
                    ✓ Verified Purchase
                  </p>
                )}
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < review.rating
                        ? "fill-accent text-accent"
                        : "text-muted"
                    }
                  />
                ))}
              </div>
            </div>
            <p className="text-muted-foreground mb-3">{review.text}</p>
            <p className="text-xs text-muted-foreground">
              {new Date(review.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
