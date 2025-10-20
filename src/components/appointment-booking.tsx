"use client";

import { useState } from "react";
import { Calendar, Clock, Check, MapPin, Video, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface Slot {
  date: string;
  time: string;
  available: boolean;
}

interface Designer {
  id: number;
  name: string;
  availableSlots: Slot[];
  location: string;
}

export default function AppointmentBooking({
  designer,
}: {
  designer: Designer;
}) {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [bookingStep, setBookingStep] = useState<"select" | "confirm" | "success">("select");
  const [consultationType, setConsultationType] = useState<"virtual" | "in-person">("virtual");

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
  const slotsByDate = (designer?.availableSlots || []).reduce((acc, slot) => {
    if (!acc[slot.date]) acc[slot.date] = [];
    acc[slot.date].push(slot);
    return acc;
  }, {} as Record<string, Slot[]>);

  const availableDates = Object.keys(slotsByDate);

  if (!designer) {
    return (
      <Card className="p-6 border-rose-200 dark:border-rose-800 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        <div className="text-center text-gray-500 dark:text-gray-400">
          <Calendar className="w-12 h-12 mx-auto mb-3 opacity-50" />
          <p>Designer information not available</p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6 border-rose-200 dark:border-rose-800 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg">
      <motion.h3 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2"
      >
        <Calendar className="w-5 h-5 text-rose-500" />
        Book Your Consultation
      </motion.h3>

      <AnimatePresence mode="wait">
        {bookingStep === "select" && (
          <motion.div
            key="select"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            {/* Consultation Type */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Consultation Type</h4>
              <div className="grid grid-cols-2 gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setConsultationType("virtual")}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-3 ${
                    consultationType === "virtual"
                      ? "border-rose-500 bg-rose-50 dark:bg-rose-900/20"
                      : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 hover:border-rose-300"
                  }`}
                >
                  <Video className={`w-5 h-5 ${consultationType === "virtual" ? "text-rose-500" : "text-gray-400"}`} />
                  <div className="text-left">
                    <p className={`font-semibold ${consultationType === "virtual" ? "text-rose-600 dark:text-rose-400" : "text-gray-900 dark:text-white"}`}>
                      Virtual
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Video Call</p>
                  </div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setConsultationType("in-person")}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-3 ${
                    consultationType === "in-person"
                      ? "border-amber-500 bg-amber-50 dark:bg-amber-900/20"
                      : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 hover:border-amber-300"
                  }`}
                >
                  <Users className={`w-5 h-5 ${consultationType === "in-person" ? "text-amber-500" : "text-gray-400"}`} />
                  <div className="text-left">
                    <p className={`font-semibold ${consultationType === "in-person" ? "text-amber-600 dark:text-amber-400" : "text-gray-900 dark:text-white"}`}>
                      In-Person
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">At Studio</p>
                  </div>
                </motion.button>
              </div>
            </div>

            {/* Date Selection */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Select Date</h4>
              {availableDates.length > 0 ? (
                <div className="grid grid-cols-2 gap-3">
                  {availableDates.map((date) => (
                    <motion.button
                      key={date}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedSlot(date)}
                      className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                        selectedSlot === date
                          ? "border-rose-500 bg-rose-500 text-white"
                          : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 hover:border-rose-300"
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-lg font-bold">
                          {new Date(date).getDate()}
                        </div>
                        <div className="text-sm">
                          {new Date(date).toLocaleDateString('en-US', { month: 'short' })}
                        </div>
                        <div className="text-xs opacity-75 mt-1">
                          {new Date(date).toLocaleDateString('en-US', { weekday: 'short' })}
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6 text-gray-500 dark:text-gray-400">
                  <Clock className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p>No available slots at the moment</p>
                </div>
              )}
            </div>

            {/* Time Slots */}
            {selectedSlot && slotsByDate[selectedSlot] && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="space-y-3"
              >
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Available Times for {new Date(selectedSlot).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {slotsByDate[selectedSlot]
                    .filter((slot) => slot.available)
                    .map((slot) => (
                      <motion.button
                        key={slot.time}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedSlot(`${selectedSlot}-${slot.time}`)}
                        className={`p-3 rounded-xl border transition-all duration-200 flex items-center justify-center gap-2 ${
                          selectedSlot === `${selectedSlot}-${slot.time}`
                            ? "bg-amber-500 text-white border-amber-500"
                            : "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-amber-300"
                        }`}
                      >
                        <Clock className="w-4 h-4" />
                        <span className="font-medium">{slot.time}</span>
                      </motion.button>
                    ))}
                </div>
              </motion.div>
            )}

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                className="w-full bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white py-3 rounded-xl font-bold shadow-lg"
                disabled={!selectedSlot}
                onClick={handleBooking}
              >
                Continue to Book
              </Button>
            </motion.div>

            {/* Location Info */}
            <div className="p-3 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-100 dark:border-rose-800">
              <div className="flex items-center gap-2 text-rose-700 dark:text-rose-300">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">
                  {consultationType === "virtual" ? "Virtual consultation via video call" : `In-person at ${designer.location}`}
                </span>
              </div>
            </div>
          </motion.div>
        )}

        {bookingStep === "confirm" && (
          <motion.div
            key="confirm"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="bg-rose-50 dark:bg-rose-900/20 p-4 rounded-xl border border-rose-100 dark:border-rose-800">
              <p className="text-sm text-rose-700 dark:text-rose-300 mb-2">Appointment Details</p>
              <p className="font-bold text-gray-900 dark:text-white text-lg">
                {selectedSlot && new Date(selectedSlot.split('-')[0]).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                at {selectedSlot && selectedSlot.split('-')[1]} • {consultationType === "virtual" ? "Virtual" : "In-Person"}
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Designer: <span className="font-semibold text-gray-900 dark:text-white">{designer.name}</span>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Duration: <span className="font-semibold text-gray-900 dark:text-white">1 hour consultation</span>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Type: <span className="font-semibold text-gray-900 dark:text-white">
                  {consultationType === "virtual" ? "Video Call" : "Studio Visit"}
                </span>
              </p>
            </div>

            <div className="space-y-3">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  className="w-full bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white py-3 rounded-xl font-bold shadow-lg"
                  onClick={handleConfirm}
                >
                  Confirm Booking
                </Button>
              </motion.div>
              <Button
                variant="outline"
                className="w-full bg-transparent border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-900/20"
                onClick={() => {
                  setBookingStep("select");
                  setSelectedSlot(null);
                }}
              >
                Back to Selection
              </Button>
            </div>
          </motion.div>
        )}

        {bookingStep === "success" && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-center py-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Check size={32} className="text-green-600" />
            </motion.div>
            <p className="font-bold text-gray-900 dark:text-white mb-2 text-lg">Booking Confirmed!</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Your consultation has been scheduled successfully
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Check your email for confirmation details and meeting link
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}