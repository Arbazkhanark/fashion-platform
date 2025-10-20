"use client";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import CategoryGrid from "@/components/category-grid";
import FeaturedDesigners from "@/components/featured-designer";
import HowItWorks from "@/components/how-it-works";
import CTA from "@/components/cta";
// import HeroSection from "@/components/home/hero-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      {/* <HeroSection /> */}
      <CategoryGrid />
      <FeaturedDesigners />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  );
}
