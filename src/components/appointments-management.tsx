"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Video, Check } from "lucide-react";

interface Appointment {
  id: number;
  designer: string;
  specialty: string;
  date: string;
  time: string;
  type: "in-person" | "video";
  location: string;
  status: "upcoming" | "completed" | "cancelled";
  notes?: string;
}

const appointments: Appointment[] = [
  {
    id: 1,
    designer: "Priya Sharma",
    specialty: "Bridal & Wedding",
    date: "2025-10-25",
    time: "10:00 AM",
    type: "in-person",
    location: "Mumbai",
    status: "upcoming",
    notes: "Bridal consultation for wedding in December",
  },
  {
    id: 2,
    designer: "Zara Khan",
    specialty: "Party & Evening Wear",
    date: "2025-10-28",
    time: "02:00 PM",
    type: "video",
    location: "Online",
    status: "upcoming",
    notes: "Party outfit styling session",
  },
  {
    id: 3,
    designer: "Arjun Kapoor",
    specialty: "Corporate & Formal",
    date: "2024-09-15",
    time: "03:00 PM",
    type: "in-person",
    location: "Delhi",
    status: "completed",
  },
  {
    id: 4,
    designer: "Vikram Singh",
    specialty: "Casual & Street Style",
    date: "2024-08-20",
    time: "11:00 AM",
    type: "video",
    location: "Online",
    status: "completed",
  },
];

export default function AppointmentsManagement() {
  const [selectedAppointment, setSelectedAppointment] =
    useState<Appointment | null>(null);
  const [showRescheduleModal, setShowRescheduleModal] = useState(false);

  const upcomingAppointments = appointments.filter(
    (a) => a.status === "upcoming"
  );
  const completedAppointments = appointments.filter(
    (a) => a.status === "completed"
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Manage Appointments
        </h1>
        <p className="text-lg text-muted-foreground">
          View, reschedule, or cancel your appointments
        </p>
      </div>

      {/* Upcoming Appointments */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Upcoming Appointments
        </h2>

        {upcomingAppointments.length > 0 ? (
          <div className="space-y-4">
            {upcomingAppointments.map((appointment) => (
              <Card
                key={appointment.id}
                className="p-6 border border-border hover:shadow-lg transition"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {appointment.designer}
                    </h3>
                    <p className="text-accent font-semibold mb-3">
                      {appointment.specialty}
                    </p>

                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-accent" />
                        {new Date(appointment.date).toLocaleDateString(
                          "en-US",
                          {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-accent" />
                        {appointment.time}
                      </div>
                      <div className="flex items-center gap-2">
                        {appointment.type === "video" ? (
                          <>
                            <Video size={16} className="text-accent" />
                            Video Call
                          </>
                        ) : (
                          <>
                            <MapPin size={16} className="text-accent" />
                            {appointment.location}
                          </>
                        )}
                      </div>
                    </div>

                    {appointment.notes && (
                      <p className="text-sm text-muted-foreground mt-3 italic">
                        Note: {appointment.notes}
                      </p>
                    )}
                  </div>

                  <div className="flex gap-2 w-full md:w-auto">
                    <Button
                      variant="outline"
                      className="flex-1 md:flex-none bg-transparent"
                      onClick={() => setShowRescheduleModal(true)}
                    >
                      Reschedule
                    </Button>
                    <Button
                      className="flex-1 md:flex-none bg-accent hover:bg-accent/90 text-accent-foreground"
                      onClick={() => setSelectedAppointment(appointment)}
                    >
                      {appointment.type === "video" ? "Join Call" : "Confirm"}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="p-12 text-center border border-border">
            <p className="text-lg text-muted-foreground mb-4">
              No upcoming appointments
            </p>
            <Button
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              asChild
            >
              <a href="/designers">Browse Designers</a>
            </Button>
          </Card>
        )}
      </div>

      {/* Completed Appointments */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Completed Appointments
        </h2>

        {completedAppointments.length > 0 ? (
          <div className="space-y-4">
            {completedAppointments.map((appointment) => (
              <Card
                key={appointment.id}
                className="p-6 border border-border opacity-75"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {appointment.designer}
                    </h3>
                    <p className="text-accent font-semibold mb-3">
                      {appointment.specialty}
                    </p>

                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-accent" />
                        {new Date(appointment.date).toLocaleDateString(
                          "en-US",
                          {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-accent" />
                        {appointment.time}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Check size={20} className="text-green-600" />
                    <span className="font-semibold text-green-600">
                      Completed
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="p-12 text-center border border-border">
            <p className="text-lg text-muted-foreground">
              No completed appointments yet
            </p>
          </Card>
        )}
      </div>

      {/* Reschedule Modal */}
      {showRescheduleModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="max-w-md w-full p-8 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Reschedule Appointment
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  New Date
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-2 rounded-lg bg-secondary border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  New Time
                </label>
                <select className="w-full px-4 py-2 rounded-lg bg-secondary border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-accent">
                  <option>10:00 AM</option>
                  <option>11:00 AM</option>
                  <option>02:00 PM</option>
                  <option>03:00 PM</option>
                  <option>04:00 PM</option>
                </select>
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1 bg-transparent"
                  onClick={() => setShowRescheduleModal(false)}
                >
                  Cancel
                </Button>
                <Button
                  className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
                  onClick={() => {
                    alert("Appointment rescheduled successfully!");
                    setShowRescheduleModal(false);
                  }}
                >
                  Confirm
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
