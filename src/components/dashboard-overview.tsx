"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Heart, Star, TrendingUp } from "lucide-react"

export default function DashboardOverview() {
  const stats = [
    { label: "Total Bookings", value: "12", icon: Calendar, color: "bg-blue-500/20 text-blue-600" },
    { label: "Saved Designers", value: "8", icon: Heart, color: "bg-red-500/20 text-red-600" },
    { label: "Average Rating", value: "4.8", icon: Star, color: "bg-yellow-500/20 text-yellow-600" },
    { label: "Upcoming", value: "3", icon: TrendingUp, color: "bg-green-500/20 text-green-600" },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Welcome back, John!</h1>
        <p className="text-muted-foreground">Here's what's happening with your account</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index} className="p-6 border border-border">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${stat.color}`}>
                <Icon size={24} />
              </div>
              <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-foreground">{stat.value}</p>
            </Card>
          )
        })}
      </div>

      {/* Quick Actions */}
      <Card className="p-8 border border-border">
        <h2 className="text-2xl font-bold text-foreground mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
            <Link href="/designers">Browse Designers</Link>
          </Button>
          <Button variant="outline" className="bg-transparent" asChild>
            <Link href="/style-assistant">Get Style Advice</Link>
          </Button>
          <Button variant="outline" className="bg-transparent" asChild>
            <Link href="/dashboard?tab=settings">Update Profile</Link>
          </Button>
        </div>
      </Card>

      {/* Recent Activity */}
      <Card className="p-8 border border-border">
        <h2 className="text-2xl font-bold text-foreground mb-6">Recent Activity</h2>
        <div className="space-y-4">
          {[
            { action: "Booked appointment with Priya Sharma", date: "Oct 15, 2024" },
            { action: "Left a 5-star review for Zara Khan", date: "Oct 10, 2024" },
            { action: "Saved Arjun Kapoor to favorites", date: "Oct 5, 2024" },
          ].map((activity, index) => (
            <div key={index} className="flex justify-between items-center pb-4 border-b border-border last:border-b-0">
              <p className="text-foreground">{activity.action}</p>
              <p className="text-sm text-muted-foreground">{activity.date}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
