"use client";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ReviewsPage from "@/components/reviews-page";

export default function ReviewsPageWrapper() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ReviewsPage />
      <Footer />
    </main>
  );
}
