"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Star, Filter } from "lucide-react";

interface Review {
  id: number;
  author: string;
  designer: string;
  rating: number;
  date: string;
  title: string;
  text: string;
  verified: boolean;
  helpful: number;
}

const allReviews: Review[] = [
  {
    id: 1,
    author: "Anjali Verma",
    designer: "Priya Sharma",
    rating: 5,
    date: "2024-10-15",
    title: "Absolutely stunning bridal wear!",
    text: "Priya made my wedding day special! Her designs were stunning and she understood my vision perfectly. The attention to detail is incredible. Highly recommended!",
    verified: true,
    helpful: 45,
  },
  {
    id: 2,
    author: "Neha Singh",
    designer: "Zara Khan",
    rating: 5,
    date: "2024-09-20",
    title: "Perfect party outfit",
    text: "Zara helped me find the perfect outfit for my sister's wedding. She has great taste and was very professional throughout the process.",
    verified: true,
    helpful: 32,
  },
  {
    id: 3,
    author: "Pooja Desai",
    designer: "Arjun Kapoor",
    rating: 4,
    date: "2024-08-10",
    title: "Great corporate styling",
    text: "Arjun provided excellent advice for my corporate wardrobe. Would definitely work with him again.",
    verified: true,
    helpful: 28,
  },
  {
    id: 4,
    author: "Priya Patel",
    designer: "Priya Sharma",
    rating: 5,
    date: "2024-07-25",
    title: "Best designer in Mumbai",
    text: "I've worked with Priya multiple times and she never disappoints. Her creativity and professionalism are unmatched.",
    verified: true,
    helpful: 56,
  },
  {
    id: 5,
    author: "Rahul Kumar",
    designer: "Vikram Singh",
    rating: 4,
    date: "2024-06-30",
    title: "Great casual styling",
    text: "Vikram helped me revamp my casual wardrobe. Very knowledgeable and friendly.",
    verified: true,
    helpful: 19,
  },
];

export default function ReviewsPage() {
  const [sortBy, setSortBy] = useState<"recent" | "helpful" | "rating">(
    "recent"
  );
  const [filterRating, setFilterRating] = useState<number | null>(null);

  const filteredReviews = allReviews
    .filter((review) => !filterRating || review.rating === filterRating)
    .sort((a, b) => {
      if (sortBy === "recent")
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      if (sortBy === "helpful") return b.helpful - a.helpful;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });

  const averageRating = (
    allReviews.reduce((sum, r) => sum + r.rating, 0) / allReviews.length
  ).toFixed(1);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Community Reviews
        </h1>
        <p className="text-lg text-muted-foreground">
          See what clients say about our designers
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar - Stats & Filters */}
        <div className="lg:col-span-1">
          <Card className="p-6 border border-border sticky top-20">
            <h2 className="text-xl font-bold text-foreground mb-6">
              Rating Summary
            </h2>

            {/* Overall Rating */}
            <div className="text-center mb-8">
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
                Based on {allReviews.length} reviews
              </p>
            </div>

            {/* Rating Filter */}
            <div className="space-y-2 mb-8">
              <p className="text-sm font-semibold text-foreground mb-3">
                Filter by Rating
              </p>
              {[5, 4, 3, 2, 1].map((rating) => {
                const count = allReviews.filter(
                  (r) => r.rating === rating
                ).length;
                return (
                  <button
                    key={rating}
                    onClick={() =>
                      setFilterRating(filterRating === rating ? null : rating)
                    }
                    className={`w-full text-left px-3 py-2 rounded text-sm transition ${
                      filterRating === rating
                        ? "bg-accent text-accent-foreground"
                        : "hover:bg-secondary text-foreground"
                    }`}
                  >
                    <span className="font-semibold">{rating}★</span> ({count})
                  </button>
                );
              })}
            </div>

            {/* Sort Options */}
            <div className="space-y-2">
              <p className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <Filter size={16} />
                Sort By
              </p>
              {(["recent", "helpful", "rating"] as const).map((option) => (
                <button
                  key={option}
                  onClick={() => setSortBy(option)}
                  className={`w-full text-left px-3 py-2 rounded text-sm transition capitalize ${
                    sortBy === option
                      ? "bg-accent text-accent-foreground"
                      : "hover:bg-secondary text-foreground"
                  }`}
                >
                  {option === "recent" && "Most Recent"}
                  {option === "helpful" && "Most Helpful"}
                  {option === "rating" && "Highest Rated"}
                </button>
              ))}
            </div>
          </Card>
        </div>

        {/* Main Content - Reviews */}
        <div className="lg:col-span-3 space-y-4">
          {filteredReviews.length > 0 ? (
            filteredReviews.map((review) => (
              <Card
                key={review.id}
                className="p-6 border border-border hover:shadow-lg transition"
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="font-bold text-foreground">{review.author}</p>
                    <p className="text-sm text-muted-foreground">
                      Reviewed {review.designer} on{" "}
                      {new Date(review.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
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

                {/* Verified Badge */}
                {review.verified && (
                  <p className="text-xs text-green-600 font-semibold mb-3">
                    ✓ Verified Purchase
                  </p>
                )}

                {/* Review Content */}
                <h3 className="font-bold text-foreground mb-2">
                  {review.title}
                </h3>
                <p className="text-muted-foreground mb-4">{review.text}</p>

                {/* Helpful Button */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <button className="text-sm text-muted-foreground hover:text-accent transition">
                    👍 Helpful ({review.helpful})
                  </button>
                  <button className="text-sm text-muted-foreground hover:text-accent transition">
                    👎 Not Helpful
                  </button>
                </div>
              </Card>
            ))
          ) : (
            <Card className="p-12 text-center border border-border">
              <p className="text-lg text-muted-foreground">
                No reviews found for the selected filters
              </p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
