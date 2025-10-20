"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Sparkles } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Connect with Top <span className="text-primary">Fashion & Beauty</span> Experts
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-balance">
            Discover talented designers, stylists, makeup artists, and beauty professionals. Book appointments, view
            portfolios, and transform your style.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input placeholder="Search experts, services, or styles..." className="pl-12 h-12 text-base" />
              </div>
              <Button size="lg" className="gap-2">
                Search
              </Button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/style-assistant">
              <Button variant="outline" size="lg" className="gap-2 w-full sm:w-auto bg-transparent">
                <Sparkles className="w-4 h-4" />
                Try AI Style Assistant
              </Button>
            </Link>
            <Link href="/browse">
              <Button size="lg" className="w-full sm:w-auto">
                Browse All Experts
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
