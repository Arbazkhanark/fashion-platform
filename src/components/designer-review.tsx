"use client";

import { Star, BadgeCheck, ThumbsUp, MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  text: string;
  verified: boolean;
  avatar: string;
}

export default function DesignerReviews({ reviews }: { reviews: Review[] }) {
  const averageRating = (
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
  ).toFixed(1);

  // Calculate rating distribution
  const ratingDistribution = [5, 4, 3, 2, 1].map((rating) => {
    const count = reviews.filter((r) => r.rating === rating).length;
    const percentage = (count / reviews.length) * 100;
    return { rating, count, percentage };
  });

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Client Reviews & Testimonials
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          What {reviews.length} clients say about their experience
        </p>
      </motion.div>

      {/* Rating Summary */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="p-8 mb-8 bg-gradient-to-br from-rose-50 to-amber-50 dark:from-gray-800 dark:to-gray-900 border-rose-200 dark:border-rose-800">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Overall Rating */}
            <div className="text-center lg:text-left">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gradient-to-r from-rose-500 to-amber-500 text-white p-4 rounded-2xl">
                  <p className="text-4xl font-bold">{averageRating}</p>
                </div>
                <div>
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={24}
                        className={
                          i < Math.floor(Number.parseFloat(averageRating))
                            ? "fill-amber-400 text-amber-400"
                            : "text-gray-300 dark:text-gray-600"
                        }
                      />
                    ))}
                  </div>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    Excellent
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Based on {reviews.length} reviews
                  </p>
                </div>
              </div>
            </div>

            {/* Rating Distribution */}
            <div className="flex-1 space-y-3 min-w-[200px]">
              {ratingDistribution.map(({ rating, count, percentage }) => (
                <div key={rating} className="flex items-center gap-3">
                  <span className="text-sm text-gray-600 dark:text-gray-400 w-8">
                    {rating}★
                  </span>
                  <div className="flex-1 h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{ duration: 1, delay: rating * 0.1 }}
                      className="h-full bg-gradient-to-r from-rose-500 to-amber-500"
                    />
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 w-8 text-right">
                    {count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Individual Reviews */}
      <div className="grid gap-6">
        {reviews.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-rose-200 dark:border-rose-800 hover:shadow-lg transition-all duration-300">
              <div className="flex gap-4">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-400 to-amber-400 flex items-center justify-center text-white font-bold text-lg">
                    {review.author.charAt(0)}
                  </div>
                </div>

                <div className="flex-1">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div className="flex items-center gap-2 mb-2 sm:mb-0">
                      <h3 className="font-bold text-gray-900 dark:text-white">
                        {review.author}
                      </h3>
                      {review.verified && (
                        <BadgeCheck className="w-5 h-5 text-blue-500" />
                      )}
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={
                              i < review.rating
                                ? "fill-amber-400 text-amber-400"
                                : "text-gray-300 dark:text-gray-600"
                            }
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(review.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    {review.text}
                  </p>

                  {/* Actions */}
                  <div className="flex items-center gap-4 pt-3 border-t border-gray-200 dark:border-gray-700">
                    <button className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-rose-500 transition-colors">
                      <ThumbsUp className="w-4 h-4" />
                      <span className="text-sm">Helpful</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-rose-500 transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm">Reply</span>
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}