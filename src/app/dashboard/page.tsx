"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Star,
  Calendar,
  Clock,
  MessageCircle,
  Edit2,
  Heart,
  Sparkles,
  Users,
  Award,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Booking {
  id: string;
  expertId: string;
  expertName: string;
  expertImage: string;
  date: string;
  time: string;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  totalPrice: number;
  location: string;
}

interface Favorite {
  id: string;
  name: string;
  title: string;
  image: string;
  rating: number;
  reviews: number;
}

interface Review {
  id: string;
  expertId: string;
  expertName: string;
  rating: number;
  comment: string;
  date: string;
}

export default function DashboardPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [bookings, setBookings] = useState<Booking[]>([
    {
      id: "b1",
      expertId: "1",
      expertName: "Priya Sharma",
      expertImage:
        "https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg",
      date: "2024-11-25",
      time: "2:00 PM",
      status: "confirmed",
      totalPrice: 50000,
      location: "Mumbai, India",
    },
    {
      id: "b2",
      expertId: "3",
      expertName: "Neha Patel",
      expertImage:
        "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
      date: "2024-11-20",
      time: "10:00 AM",
      status: "completed",
      totalPrice: 8000,
      location: "Bangalore, India",
    },
  ]);

  const [favorites, setFavorites] = useState<Favorite[]>([
    {
      id: "1",
      name: "Priya Sharma",
      title: "Wedding Designer",
      image: "https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg",
      rating: 4.9,
      reviews: 342,
    },
    {
      id: "3",
      name: "Neha Patel",
      title: "Makeup Artist",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
      rating: 4.9,
      reviews: 421,
    },
  ]);

  const [reviews, setReviews] = useState<Review[]>([
    {
      id: "r1",
      expertId: "3",
      expertName: "Neha Patel",
      rating: 5,
      comment: "Excellent makeup artist! Very professional and talented.",
      date: "2024-10-15",
    },
  ]);

  const [newReview, setNewReview] = useState({
    expertId: "",
    rating: 5,
    comment: "",
  });
  const [editingProfile, setEditingProfile] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+91 9876543210",
    location: "Mumbai, India",
    bio: "Fashion enthusiast and style lover",
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCancelBooking = (bookingId: string) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === bookingId ? { ...b, status: "cancelled" } : b))
    );
  };

  const handleRemoveFavorite = (favoriteId: string) => {
    setFavorites((prev) => prev.filter((f) => f.id !== favoriteId));
  };

  const handleSubmitReview = () => {
    if (!newReview.expertId || !newReview.comment) {
      alert("Please select an expert and write a review");
      return;
    }
    const expert = favorites.find((f) => f.id === newReview.expertId);
    if (expert) {
      setReviews((prev) => [
        ...prev,
        {
          id: `r${Date.now()}`,
          expertId: newReview.expertId,
          expertName: expert.name,
          rating: newReview.rating,
          comment: newReview.comment,
          date: new Date().toISOString().split("T")[0],
        },
      ]);
      setNewReview({ expertId: "", rating: 5, comment: "" });
      alert("Review submitted successfully!");
    }
  };

  const upcomingBookings = bookings.filter(
    (b) => b.status === "confirmed" || b.status === "pending"
  );
  const pastBookings = bookings.filter(
    (b) => b.status === "completed" || b.status === "cancelled"
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300";
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300";
      case "completed":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300";
      case "cancelled":
        return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300";
    }
  };

  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-white to-rose-50/30 dark:from-gray-900 dark:to-rose-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div
            className={`text-center mb-12 transition-all duration-1000 ${
              isVisible ? "animate-glow-in" : "opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 px-4 py-2 rounded-full text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              Welcome Back
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              My{" "}
              <span className="bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">
                Dashboard
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Manage your bookings, favorites, and profile in one place
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: Calendar,
                value: upcomingBookings.length,
                label: "Upcoming",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Heart,
                value: favorites.length,
                label: "Favorites",
                color: "from-rose-500 to-pink-500",
              },
              {
                icon: Star,
                value: reviews.length,
                label: "Reviews",
                color: "from-amber-500 to-orange-500",
              },
              {
                icon: Award,
                value: "VIP",
                label: "Member",
                color: "from-purple-500 to-violet-500",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <Tabs defaultValue="bookings" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-1">
              {[
                { value: "bookings", label: "Bookings", icon: Calendar },
                { value: "favorites", label: "Favorites", icon: Heart },
                { value: "reviews", label: "Reviews", icon: Star },
                { value: "profile", label: "Profile", icon: Users },
              ].map((tab, index) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="flex items-center gap-2 transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-rose-500 data-[state=active]:to-amber-500 data-[state=active]:text-white rounded-xl animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Bookings Tab */}
            <TabsContent value="bookings" className="space-y-8">
              {/* Upcoming Bookings */}
              <div className="animate-slide-up">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Upcoming Appointments
                </h2>
                {upcomingBookings.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {upcomingBookings.map((booking, index) => (
                      <Card
                        key={booking.id}
                        className="overflow-hidden border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-600 dark:to-gray-700">
                          <Image
                            src={booking.expertImage}
                            width={400}
                            height={192}
                            alt={booking.expertName}
                            className="w-full h-full object-cover"
                          />
                          <div
                            className={`absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm ${getStatusColor(
                              booking.status
                            )}`}
                          >
                            {booking.status.charAt(0).toUpperCase() +
                              booking.status.slice(1)}
                          </div>
                        </div>
                        <CardContent className="pt-6 space-y-4">
                          <div>
                            <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-1">
                              {booking.expertName}
                            </h3>
                            <p className="text-rose-600 dark:text-rose-400 font-medium">
                              {booking.location}
                            </p>
                          </div>

                          <div className="space-y-3 text-sm">
                            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                              <Calendar className="w-4 h-4 text-rose-500" />
                              <span>
                                {new Date(booking.date).toLocaleDateString()}
                              </span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                              <Clock className="w-4 h-4 text-rose-500" />
                              <span>{booking.time}</span>
                            </div>
                            <div className="flex items-center gap-3 font-semibold text-gray-900 dark:text-white">
                              <TrendingUp className="w-4 h-4 text-amber-500" />₹
                              {booking.totalPrice.toLocaleString()}
                            </div>
                          </div>

                          <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex-1 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 hover:bg-rose-50 dark:hover:bg-rose-900/20 gap-2"
                            >
                              <MessageCircle className="w-4 h-4" />
                              Message
                            </Button>
                            {booking.status === "confirmed" && (
                              <Button
                                variant="outline"
                                size="sm"
                                className="flex-1 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20"
                                onClick={() => handleCancelBooking(booking.id)}
                              >
                                Cancel
                              </Button>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                    <CardContent className="pt-6 text-center py-12">
                      <Calendar className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                      <p className="text-gray-600 dark:text-gray-400 mb-4 text-lg">
                        No upcoming appointments
                      </p>
                      <Link href="/designers">
                        <Button className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white">
                          Browse Experts
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Past Bookings */}
              <div
                className="animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Past Appointments
                </h2>
                {pastBookings.length > 0 ? (
                  <div className="space-y-4">
                    {pastBookings.map((booking, index) => (
                      <Card
                        key={booking.id}
                        className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <CardContent className="pt-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <Image
                                src={booking.expertImage}
                                width={64}
                                height={64}
                                alt={booking.expertName}
                                className="w-16 h-16 rounded-2xl object-cover shadow-lg"
                              />
                              <div>
                                <h3 className="font-bold text-gray-900 dark:text-white">
                                  {booking.expertName}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                  {new Date(booking.date).toLocaleDateString()}{" "}
                                  at {booking.time}
                                </p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p
                                className={`text-sm font-semibold px-4 py-2 rounded-full backdrop-blur-sm ${getStatusColor(
                                  booking.status
                                )}`}
                              >
                                {booking.status.charAt(0).toUpperCase() +
                                  booking.status.slice(1)}
                              </p>
                              {booking.status === "completed" && (
                                <Link
                                  href={`/dashboard/review/${booking.expertId}`}
                                >
                                  <Button
                                    size="sm"
                                    className="mt-2 bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white"
                                  >
                                    Leave Review
                                  </Button>
                                </Link>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                    <CardContent className="pt-6 text-center py-8">
                      <p className="text-gray-600 dark:text-gray-400">
                        No past appointments
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>

            {/* Favorites Tab */}
            <TabsContent
              value="favorites"
              className="space-y-8 animate-slide-up"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Saved Favorites
              </h2>
              {favorites.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {favorites.map((favorite, index) => (
                    <Card
                      key={favorite.id}
                      className="overflow-hidden border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-600 dark:to-gray-700">
                        <Image
                          src={favorite.image}
                          width={400}
                          height={192}
                          alt={favorite.name}
                          className="w-full h-full object-cover"
                        />
                        <button
                          onClick={() => handleRemoveFavorite(favorite.id)}
                          className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-300 hover:scale-110"
                        >
                          <Heart className="w-5 h-5 fill-red-500 text-red-500" />
                        </button>
                      </div>
                      <CardContent className="pt-6 space-y-4">
                        <div>
                          <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-1">
                            {favorite.name}
                          </h3>
                          <p className="text-rose-600 dark:text-rose-400 font-medium">
                            {favorite.title}
                          </p>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(favorite.rating)
                                    ? "fill-amber-400 text-amber-400"
                                    : "text-gray-300 dark:text-gray-600"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm font-semibold text-gray-900 dark:text-white">
                            {favorite.rating}
                          </span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            ({favorite.reviews})
                          </span>
                        </div>

                        <Link href={`/designer/${favorite.id}`}>
                          <Button className="w-full bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white transition-all duration-300 hover:scale-105">
                            View Profile
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                  <CardContent className="pt-6 text-center py-12">
                    <Heart className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-lg">
                      No favorites yet
                    </p>
                    <Link href="/designers">
                      <Button className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white">
                        Browse Experts
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            {/* Reviews Tab */}
            <TabsContent value="reviews" className="space-y-8 animate-slide-up">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Write a Review
                </h2>
                <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-6">
                    <div className="animate-fade-in-up">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 block">
                        Select Expert
                      </label>
                      <select
                        value={newReview.expertId}
                        onChange={(e) =>
                          setNewReview((prev) => ({
                            ...prev,
                            expertId: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-rose-300 dark:focus:ring-rose-500"
                      >
                        <option value="">Choose an expert...</option>
                        {favorites.map((fav) => (
                          <option key={fav.id} value={fav.id}>
                            {fav.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div
                      className="animate-fade-in-up"
                      style={{ animationDelay: "0.1s" }}
                    >
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 block">
                        Rating
                      </label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            onClick={() =>
                              setNewReview((prev) => ({
                                ...prev,
                                rating: star,
                              }))
                            }
                            className="p-3 hover:bg-rose-50 dark:hover:bg-rose-900/20 rounded-xl transition-all duration-300 hover:scale-110"
                          >
                            <Star
                              className={`w-6 h-6 ${
                                star <= newReview.rating
                                  ? "fill-amber-400 text-amber-400"
                                  : "text-gray-300 dark:text-gray-600"
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div
                      className="animate-fade-in-up"
                      style={{ animationDelay: "0.2s" }}
                    >
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 block">
                        Your Review
                      </label>
                      <Textarea
                        value={newReview.comment}
                        onChange={(e) =>
                          setNewReview((prev) => ({
                            ...prev,
                            comment: e.target.value,
                          }))
                        }
                        placeholder="Share your experience..."
                        rows={4}
                        className="bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm border border-gray-200 dark:border-gray-600 focus:border-rose-300 dark:focus:border-rose-500"
                      />
                    </div>

                    <Button
                      onClick={handleSubmitReview}
                      className="w-full bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white py-3 rounded-xl transition-all duration-300 hover:scale-105 animate-fade-in-up"
                      style={{ animationDelay: "0.3s" }}
                    >
                      Submit Review
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* My Reviews */}
              <div
                className="animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  My Reviews
                </h2>
                {reviews.length > 0 ? (
                  <div className="space-y-6">
                    {reviews.map((review, index) => (
                      <Card
                        key={review.id}
                        className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <CardContent className="pt-6">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="font-bold text-xl text-gray-900 dark:text-white">
                                {review.expertName}
                              </h3>
                              <div className="flex items-center gap-3 mt-2">
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`w-4 h-4 ${
                                        i < review.rating
                                          ? "fill-amber-400 text-amber-400"
                                          : "text-gray-300 dark:text-gray-600"
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                  {review.date}
                                </span>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {review.comment}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                    <CardContent className="pt-6 text-center py-8">
                      <p className="text-gray-600 dark:text-gray-400">
                        No reviews yet
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>

            {/* Profile Tab */}
            <TabsContent value="profile" className="space-y-8 animate-slide-up">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                My Profile
              </h2>
              <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardContent className="pt-6 space-y-6">
                  {!editingProfile ? (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up">
                        <div className="p-4 rounded-xl bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50">
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                            Full Name
                          </p>
                          <p className="font-bold text-lg text-gray-900 dark:text-white">
                            {profileData.name}
                          </p>
                        </div>
                        <div className="p-4 rounded-xl bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50">
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                            Email
                          </p>
                          <p className="font-bold text-lg text-gray-900 dark:text-white">
                            {profileData.email}
                          </p>
                        </div>
                        <div className="p-4 rounded-xl bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50">
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                            Phone
                          </p>
                          <p className="font-bold text-lg text-gray-900 dark:text-white">
                            {profileData.phone}
                          </p>
                        </div>
                        <div className="p-4 rounded-xl bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50">
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                            Location
                          </p>
                          <p className="font-bold text-lg text-gray-900 dark:text-white">
                            {profileData.location}
                          </p>
                        </div>
                      </div>
                      <div
                        className="p-4 rounded-xl bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 animate-fade-in-up"
                        style={{ animationDelay: "0.1s" }}
                      >
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          Bio
                        </p>
                        <p className="font-bold text-gray-900 dark:text-white">
                          {profileData.bio}
                        </p>
                      </div>
                      <Button
                        onClick={() => setEditingProfile(true)}
                        className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white gap-3 py-3 rounded-xl transition-all duration-300 hover:scale-105 animate-fade-in-up"
                        style={{ animationDelay: "0.2s" }}
                      >
                        <Edit2 className="w-5 h-5" />
                        Edit Profile
                      </Button>
                    </>
                  ) : (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up">
                        <div>
                          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 block">
                            Full Name
                          </label>
                          <Input
                            value={profileData.name}
                            onChange={(e) =>
                              setProfileData((prev) => ({
                                ...prev,
                                name: e.target.value,
                              }))
                            }
                            className="bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm border border-gray-200 dark:border-gray-600 focus:border-rose-300 dark:focus:border-rose-500"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 block">
                            Email
                          </label>
                          <Input
                            type="email"
                            value={profileData.email}
                            onChange={(e) =>
                              setProfileData((prev) => ({
                                ...prev,
                                email: e.target.value,
                              }))
                            }
                            className="bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm border border-gray-200 dark:border-gray-600 focus:border-rose-300 dark:focus:border-rose-500"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 block">
                            Phone
                          </label>
                          <Input
                            value={profileData.phone}
                            onChange={(e) =>
                              setProfileData((prev) => ({
                                ...prev,
                                phone: e.target.value,
                              }))
                            }
                            className="bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm border border-gray-200 dark:border-gray-600 focus:border-rose-300 dark:focus:border-rose-500"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 block">
                            Location
                          </label>
                          <Input
                            value={profileData.location}
                            onChange={(e) =>
                              setProfileData((prev) => ({
                                ...prev,
                                location: e.target.value,
                              }))
                            }
                            className="bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm border border-gray-200 dark:border-gray-600 focus:border-rose-300 dark:focus:border-rose-500"
                          />
                        </div>
                      </div>
                      <div
                        className="animate-fade-in-up"
                        style={{ animationDelay: "0.1s" }}
                      >
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 block">
                          Bio
                        </label>
                        <Textarea
                          value={profileData.bio}
                          onChange={(e) =>
                            setProfileData((prev) => ({
                              ...prev,
                              bio: e.target.value,
                            }))
                          }
                          rows={3}
                          className="bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm border border-gray-200 dark:border-gray-600 focus:border-rose-300 dark:focus:border-rose-500"
                        />
                      </div>
                      <div
                        className="flex gap-3 animate-fade-in-up"
                        style={{ animationDelay: "0.2s" }}
                      >
                        <Button
                          variant="outline"
                          className="flex-1 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 hover:bg-rose-50 dark:hover:bg-rose-900/20"
                          onClick={() => setEditingProfile(false)}
                        >
                          Cancel
                        </Button>
                        <Button
                          className="flex-1 bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white transition-all duration-300 hover:scale-105"
                          onClick={() => {
                            setEditingProfile(false);
                            alert("Profile updated successfully!");
                          }}
                        >
                          Save Changes
                        </Button>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <style jsx>{`
        @keyframes glow-in {
          0% {
            opacity: 0;
            transform: translateY(20px);
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-glow-in {
          animation: glow-in 1.2s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }
      `}</style>
    </>
  );
}
