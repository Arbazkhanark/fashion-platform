"use client";

import { useState } from "react";
import { Calendar, Clock, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Designer {
  id: number;
  name: string;
  availableSlots: Array<{
    date: string;
    time: string;
    available: boolean;
  }>;
}

export default function AppointmentBooking({
  designer,
}: {
  designer: Designer;
}) {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [bookingStep, setBookingStep] = useState<
    "select" | "confirm" | "success"
  >("select");

  const handleBooking = () => {
    if (selectedSlot) {
      setBookingStep("confirm");
    }
  };

  const handleConfirm = () => {
    setBookingStep("success");
    setTimeout(() => {
      setBookingStep("select");
      setSelectedSlot(null);
    }, 3000);
  };

  // Group slots by date
  const slotsByDate = designer.availableSlots.reduce((acc, slot) => {
    if (!acc[slot.date]) acc[slot.date] = [];
    acc[slot.date].push(slot);
    return acc;
  }, {} as Record<string, typeof designer.availableSlots>);

  return (
    <Card className="p-6 border border-border">
      <h3 className="text-xl font-bold text-foreground mb-6">
        Book an Appointment
      </h3>

      {bookingStep === "select" && (
        <div className="space-y-4">
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {Object.entries(slotsByDate).map(([date, slots]) => (
              <div key={date}>
                <p className="text-sm font-semibold text-muted-foreground mb-2 flex items-center gap-2">
                  <Calendar size={16} />
                  {new Date(date).toLocaleDateString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {slots.map((slot) => {
                    const slotId = `${slot.date}-${slot.time}`;
                    return (
                      <button
                        key={slotId}
                        onClick={() =>
                          slot.available && setSelectedSlot(slotId)
                        }
                        disabled={!slot.available}
                        className={`p-3 rounded-lg text-sm font-semibold transition flex items-center justify-center gap-2 ${
                          !slot.available
                            ? "bg-muted text-muted-foreground cursor-not-allowed opacity-50"
                            : selectedSlot === slotId
                            ? "bg-accent text-accent-foreground"
                            : "bg-secondary text-foreground hover:bg-secondary/80"
                        }`}
                      >
                        <Clock size={14} />
                        {slot.time}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <Button
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
            disabled={!selectedSlot}
            onClick={handleBooking}
          >
            Continue
          </Button>
        </div>
      )}

      {bookingStep === "confirm" && (
        <div className="space-y-4">
          <div className="bg-secondary/50 p-4 rounded-lg">
            <p className="text-sm text-muted-foreground mb-2">Selected Slot</p>
            <p className="font-bold text-foreground">{selectedSlot}</p>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Designer: {designer.name}
            </p>
            <p className="text-sm text-muted-foreground">
              Duration: 1 hour consultation
            </p>
          </div>

          <div className="space-y-2">
            <Button
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={handleConfirm}
            >
              Confirm Booking
            </Button>
            <Button
              variant="outline"
              className="w-full bg-transparent"
              onClick={() => {
                setBookingStep("select");
                setSelectedSlot(null);
              }}
            >
              Back
            </Button>
          </div>
        </div>
      )}

      {bookingStep === "success" && (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check size={32} className="text-green-600" />
          </div>
          <p className="font-bold text-foreground mb-2">Booking Confirmed!</p>
          <p className="text-sm text-muted-foreground">
            Check your email for confirmation details
          </p>
        </div>
      )}
    </Card>
  );
}
