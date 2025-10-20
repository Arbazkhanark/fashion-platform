"use client";

import { Star, BadgeCheck, ThumbsUp, MessageCircle, Plus, Send, ChevronDown, ChevronUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Reply {
  id: number;
  author: string;
  text: string;
  date: string;
  isDesigner: boolean;
}

interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  text: string;
  verified: boolean;
  avatar: string;
  helpful?: number;
  replies?: Reply[];
  showReplies?: boolean;
  showReplyForm?: boolean;
}

export default function DesignerReviews({ reviews }: { reviews: Review[] }) {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({
    rating: 0,
    text: "",
    author: "You"
  });
  const [replyTexts, setReplyTexts] = useState<{ [key: number]: string }>({});
  const [hoverRating, setHoverRating] = useState(0);
  const [allReviews, setAllReviews] = useState<Review[]>(reviews.map(review => ({
    ...review,
    replies: review.replies || [],
    showReplies: false,
    showReplyForm: false
  })));

  const averageRating = (
    allReviews.reduce((sum, r) => sum + r.rating, 0) / allReviews.length
  ).toFixed(1);

  // Calculate rating distribution
  const ratingDistribution = [5, 4, 3, 2, 1].map((rating) => {
    const count = allReviews.filter((r) => r.rating === rating).length;
    const percentage = (count / allReviews.length) * 100;
    return { rating, count, percentage };
  });

  const handleSubmitReview = () => {
    if (newReview.rating === 0 || !newReview.text.trim()) {
      alert("Please provide both rating and review text");
      return;
    }

    const review: Review = {
      id: allReviews.length + 1,
      author: newReview.author,
      rating: newReview.rating,
      date: new Date().toISOString().split('T')[0],
      text: newReview.text,
      verified: true,
      avatar: "",
      helpful: 0,
      replies: [],
      showReplies: false,
      showReplyForm: false
    };

    setAllReviews([review, ...allReviews]);
    setNewReview({ rating: 0, text: "", author: "You" });
    setShowReviewForm(false);
  };

  const handleHelpful = (reviewId: number) => {
    setAllReviews(allReviews.map(review => 
      review.id === reviewId 
        ? { ...review, helpful: (review.helpful || 0) + 1 }
        : review
    ));
  };

  const toggleReplies = (reviewId: number) => {
    setAllReviews(allReviews.map(review => 
      review.id === reviewId 
        ? { ...review, showReplies: !review.showReplies }
        : review
    ));
  };

  const toggleReplyForm = (reviewId: number) => {
    setAllReviews(allReviews.map(review => 
      review.id === reviewId 
        ? { ...review, showReplyForm: !review.showReplyForm }
        : review
    ));
    setReplyTexts({ ...replyTexts, [reviewId]: "" });
  };

  const handleReplySubmit = (reviewId: number) => {
    const replyText = replyTexts[reviewId]?.trim();
    if (!replyText) return;

    const newReply: Reply = {
      id: Date.now(),
      author: "You", // In real app, this would be the logged in user
      text: replyText,
      date: new Date().toISOString().split('T')[0],
      isDesigner: false
    };

    setAllReviews(allReviews.map(review => 
      review.id === reviewId 
        ? { 
            ...review, 
            replies: [...(review.replies || []), newReply],
            showReplyForm: false
          }
        : review
    ));

    setReplyTexts({ ...replyTexts, [reviewId]: "" });
  };

  const handleReplyChange = (reviewId: number, text: string) => {
    setReplyTexts({ ...replyTexts, [reviewId]: text });
  };

  const getTotalRepliesCount = (review: Review) => {
    return (review.replies || []).length;
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Client Reviews & Testimonials
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              What {allReviews.length} clients say about their experience
            </p>
          </div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              onClick={() => setShowReviewForm(true)}
              className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              Write a Review
            </Button>
          </motion.div>
        </div>
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
                    Based on {allReviews.length} reviews
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

      {/* Write Review Form */}
      <AnimatePresence>
        {showReviewForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-8 overflow-hidden"
          >
            <Card className="p-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-rose-200 dark:border-rose-800">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Write Your Review
              </h3>
              
              {/* Rating Stars */}
              <div className="mb-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  How would you rate your experience?
                </p>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setNewReview({ ...newReview, rating: star })}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="p-1 transition-transform hover:scale-110"
                    >
                      <Star
                        size={32}
                        className={
                          star <= (hoverRating || newReview.rating)
                            ? "fill-amber-400 text-amber-400"
                            : "text-gray-300 dark:text-gray-600"
                        }
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <div className="mb-4">
                <Textarea
                  placeholder="Share your experience with this designer... What did you like? What could be improved?"
                  value={newReview.text}
                  onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                  className="min-h-[120px] resize-none border-rose-200 dark:border-rose-800 focus:border-rose-500"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button 
                  onClick={handleSubmitReview}
                  disabled={!newReview.rating || !newReview.text.trim()}
                  className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Submit Review
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => setShowReviewForm(false)}
                  className="border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-400"
                >
                  Cancel
                </Button>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Individual Reviews */}
      <div className="grid gap-6">
        {allReviews.map((review, index) => (
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
                      {review.author === "You" && (
                        <span className="bg-rose-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                          Your Review
                        </span>
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
                  <div className="flex items-center gap-6 pt-3 border-t border-gray-200 dark:border-gray-700">
                    <button 
                      onClick={() => handleHelpful(review.id)}
                      className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-rose-500 transition-colors"
                    >
                      <ThumbsUp className="w-4 h-4" />
                      <span className="text-sm">
                        Helpful {review.helpful ? `(${review.helpful})` : ''}
                      </span>
                    </button>
                    
                    <button 
                      onClick={() => toggleReplyForm(review.id)}
                      className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-rose-500 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm">Reply</span>
                    </button>

                    {/* View Replies Toggle */}
                    {getTotalRepliesCount(review) > 0 && (
                      <button 
                        onClick={() => toggleReplies(review.id)}
                        className="flex items-center gap-1 text-rose-500 hover:text-rose-600 transition-colors text-sm font-medium"
                      >
                        {review.showReplies ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        {getTotalRepliesCount(review)} {getTotalRepliesCount(review) === 1 ? 'Reply' : 'Replies'}
                      </button>
                    )}
                  </div>

                  {/* Reply Form */}
                  <AnimatePresence>
                    {review.showReplyForm && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 overflow-hidden"
                      >
                        <div className="flex gap-3">
                          <div className="flex-1">
                            <Textarea
                              placeholder="Write your reply..."
                              value={replyTexts[review.id] || ""}
                              onChange={(e) => handleReplyChange(review.id, e.target.value)}
                              className="min-h-[80px] resize-none border-rose-200 dark:border-rose-800 focus:border-rose-500"
                            />
                          </div>
                          <div className="flex flex-col gap-2">
                            <Button 
                              onClick={() => handleReplySubmit(review.id)}
                              disabled={!replyTexts[review.id]?.trim()}
                              size="sm"
                              className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white"
                            >
                              <Send className="w-3 h-3 mr-1" />
                              Send
                            </Button>
                            <Button 
                              variant="outline"
                              size="sm"
                              onClick={() => toggleReplyForm(review.id)}
                              className="border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-400"
                            >
                              Cancel
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Replies Section */}
                  <AnimatePresence>
                    {review.showReplies && (review.replies || []).length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 overflow-hidden"
                      >
                        <div className="space-y-3 ml-4 pl-4 border-l-2 border-rose-200 dark:border-rose-800">
                          {(review.replies || []).map((reply) => (
                            <motion.div
                              key={reply.id}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="flex gap-3 p-3 bg-rose-50 dark:bg-rose-900/20 rounded-lg"
                            >
                              <div className="flex-shrink-0">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                                  reply.isDesigner 
                                    ? "bg-gradient-to-br from-blue-500 to-purple-500" 
                                    : "bg-gradient-to-br from-rose-400 to-amber-400"
                                }`}>
                                  {reply.author.charAt(0)}
                                </div>
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="font-semibold text-gray-900 dark:text-white text-sm">
                                    {reply.author}
                                  </span>
                                  {reply.isDesigner && (
                                    <span className="bg-blue-500 text-white px-2 py-0.5 rounded-full text-xs font-medium">
                                      Designer
                                    </span>
                                  )}
                                  <span className="text-xs text-gray-500 dark:text-gray-400">
                                    {new Date(reply.date).toLocaleDateString("en-US", {
                                      month: "short",
                                      day: "numeric",
                                    })}
                                  </span>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 text-sm">
                                  {reply.text}
                                </p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* No Reviews Message */}
      {allReviews.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12"
        >
          <div className="w-24 h-24 bg-gradient-to-br from-rose-100 to-amber-100 dark:from-gray-700 dark:to-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <Star className="w-10 h-10 text-rose-400" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            No Reviews Yet
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Be the first to share your experience with this designer!
          </p>
          <Button 
            onClick={() => setShowReviewForm(true)}
            className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white"
          >
            <Plus className="w-4 h-4 mr-2" />
            Write First Review
          </Button>
        </motion.div>
      )}
    </div>
  );
}