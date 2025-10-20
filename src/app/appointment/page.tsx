"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import AppointmentsManagement from "@/components/appointments-management"

export default function AppointmentsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <AppointmentsManagement />
      <Footer />
    </main>
  )
}
