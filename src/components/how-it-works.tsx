"use client"

import { Search, User, Calendar, CheckCircle } from "lucide-react"
import { Card } from "@/components/ui/card"

const steps = [
  {
    number: 1,
    title: "Search & Explore",
    description: "Browse through our curated collection of fashion designers and stylists",
    icon: Search,
  },
  {
    number: 2,
    title: "View Profiles",
    description: "Check portfolios, reviews, ratings, and pricing of your favorite designers",
    icon: User,
  },
  {
    number: 3,
    title: "Book Appointment",
    description: "Select available slots and book your styling session directly",
    icon: Calendar,
  },
  {
    number: 4,
    title: "Get Styled",
    description: "Receive expert styling advice and transform your wardrobe",
    icon: CheckCircle,
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple steps to connect with your perfect fashion designer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="relative">
                <Card className="p-6 h-full">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground font-bold text-lg mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </Card>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent/30 transform -translate-y-1/2" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
