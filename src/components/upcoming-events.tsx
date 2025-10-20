"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Video } from "lucide-react"

const upcomingAppointments = [
  {
    id: 1,
    designer: "Priya Sharma",
    specialty: "Bridal & Wedding",
    date: "2025-10-25",
    time: "10:00 AM",
    type: "In-person",
    location: "Mumbai",
    status: "confirmed",
  },
  {
    id: 2,
    designer: "Zara Khan",
    specialty: "Party & Evening Wear",
    date: "2025-10-28",
    time: "02:00 PM",
    type: "Video Call",
    location: "Online",
    status: "confirmed",
  },
  {
    id: 3,
    designer: "Arjun Kapoor",
    specialty: "Corporate & Formal",
    date: "2025-11-02",
    time: "03:00 PM",
    type: "In-person",
    location: "Delhi",
    status: "pending",
  },
]

export default function UpcomingAppointments() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Upcoming Appointments</h1>
        <p className="text-muted-foreground">You have {upcomingAppointments.length} upcoming appointments</p>
      </div>

      <div className="space-y-4">
        {upcomingAppointments.map((appointment) => (
          <Card key={appointment.id} className="p-6 border border-border hover:shadow-lg transition">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2">{appointment.designer}</h3>
                <p className="text-accent font-semibold mb-3">{appointment.specialty}</p>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-accent" />
                    {new Date(appointment.date).toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                    })}{" "}
                    at {appointment.time}
                  </div>
                  <div className="flex items-center gap-2">
                    {appointment.type === "Video Call" ? (
                      <>
                        <Video size={16} className="text-accent" />
                        {appointment.type}
                      </>
                    ) : (
                      <>
                        <MapPin size={16} className="text-accent" />
                        {appointment.location}
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex gap-2 w-full md:w-auto">
                <Button
                  variant="outline"
                  className="flex-1 md:flex-none bg-transparent"
                  onClick={() => alert("Rescheduling appointment...")}
                >
                  Reschedule
                </Button>
                <Button
                  className="flex-1 md:flex-none bg-accent hover:bg-accent/90 text-accent-foreground"
                  onClick={() => alert("Joining appointment...")}
                >
                  {appointment.type === "Video Call" ? "Join Call" : "Confirm"}
                </Button>
              </div>
            </div>

            {/* Status Badge */}
            <div className="mt-4 pt-4 border-t border-border">
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                  appointment.status === "confirmed"
                    ? "bg-green-500/20 text-green-700"
                    : "bg-yellow-500/20 text-yellow-700"
                }`}
              >
                {appointment.status === "confirmed" ? "✓ Confirmed" : "⏳ Pending Confirmation"}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
