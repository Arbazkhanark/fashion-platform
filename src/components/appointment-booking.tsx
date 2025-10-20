// "use client";

// import { useState } from "react";
// import { Calendar, Clock, Check, MapPin, Video, Users } from "lucide-react";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { motion, AnimatePresence } from "framer-motion";

// interface Slot {
//   date: string;
//   time: string;
//   available: boolean;
// }

// interface Designer {
//   id: number;
//   name: string;
//   availableSlots: Slot[];
//   location: string;
// }

// export default function AppointmentBooking({
//   designer,
// }: {
//   designer: Designer;
// }) {
//   const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
//   const [bookingStep, setBookingStep] = useState<"select" | "confirm" | "success">("select");
//   const [consultationType, setConsultationType] = useState<"virtual" | "in-person">("virtual");

//   const handleBooking = () => {
//     if (selectedSlot) {
//       setBookingStep("confirm");
//     }
//   };

//   const handleConfirm = () => {
//     setBookingStep("success");
//     setTimeout(() => {
//       setBookingStep("select");
//       setSelectedSlot(null);
//     }, 3000);
//   };

//   // Group slots by date
//   const slotsByDate = (designer?.availableSlots || []).reduce((acc, slot) => {
//     if (!acc[slot.date]) acc[slot.date] = [];
//     acc[slot.date].push(slot);
//     return acc;
//   }, {} as Record<string, Slot[]>);

//   const availableDates = Object.keys(slotsByDate);

//   if (!designer) {
//     return (
//       <Card className="p-6 border-rose-200 dark:border-rose-800 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
//         <div className="text-center text-gray-500 dark:text-gray-400">
//           <Calendar className="w-12 h-12 mx-auto mb-3 opacity-50" />
//           <p>Designer information not available</p>
//         </div>
//       </Card>
//     );
//   }

//   return (
//     <Card className="p-6 border-rose-200 dark:border-rose-800 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg">
//       <motion.h3 
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2"
//       >
//         <Calendar className="w-5 h-5 text-rose-500" />
//         Book Your Consultation
//       </motion.h3>

//       <AnimatePresence mode="wait">
//         {bookingStep === "select" && (
//           <motion.div
//             key="select"
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -20 }}
//             className="space-y-6"
//           >
//             {/* Consultation Type */}
//             <div>
//               <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Consultation Type</h4>
//               <div className="grid grid-cols-2 gap-3">
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={() => setConsultationType("virtual")}
//                   className={`p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-3 ${
//                     consultationType === "virtual"
//                       ? "border-rose-500 bg-rose-50 dark:bg-rose-900/20"
//                       : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 hover:border-rose-300"
//                   }`}
//                 >
//                   <Video className={`w-5 h-5 ${consultationType === "virtual" ? "text-rose-500" : "text-gray-400"}`} />
//                   <div className="text-left">
//                     <p className={`font-semibold ${consultationType === "virtual" ? "text-rose-600 dark:text-rose-400" : "text-gray-900 dark:text-white"}`}>
//                       Virtual
//                     </p>
//                     <p className="text-xs text-gray-500 dark:text-gray-400">Video Call</p>
//                   </div>
//                 </motion.button>

//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={() => setConsultationType("in-person")}
//                   className={`p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-3 ${
//                     consultationType === "in-person"
//                       ? "border-amber-500 bg-amber-50 dark:bg-amber-900/20"
//                       : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 hover:border-amber-300"
//                   }`}
//                 >
//                   <Users className={`w-5 h-5 ${consultationType === "in-person" ? "text-amber-500" : "text-gray-400"}`} />
//                   <div className="text-left">
//                     <p className={`font-semibold ${consultationType === "in-person" ? "text-amber-600 dark:text-amber-400" : "text-gray-900 dark:text-white"}`}>
//                       In-Person
//                     </p>
//                     <p className="text-xs text-gray-500 dark:text-gray-400">At Studio</p>
//                   </div>
//                 </motion.button>
//               </div>
//             </div>

//             {/* Date Selection */}
//             <div>
//               <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Select Date</h4>
//               {availableDates.length > 0 ? (
//                 <div className="grid grid-cols-2 gap-3">
//                   {availableDates.map((date) => (
//                     <motion.button
//                       key={date}
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                       onClick={() => setSelectedSlot(date)}
//                       className={`p-4 rounded-xl border-2 transition-all duration-200 ${
//                         selectedSlot === date
//                           ? "border-rose-500 bg-rose-500 text-white"
//                           : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 hover:border-rose-300"
//                       }`}
//                     >
//                       <div className="text-center">
//                         <div className="text-lg font-bold">
//                           {new Date(date).getDate()}
//                         </div>
//                         <div className="text-sm">
//                           {new Date(date).toLocaleDateString('en-US', { month: 'short' })}
//                         </div>
//                         <div className="text-xs opacity-75 mt-1">
//                           {new Date(date).toLocaleDateString('en-US', { weekday: 'short' })}
//                         </div>
//                       </div>
//                     </motion.button>
//                   ))}
//                 </div>
//               ) : (
//                 <div className="text-center py-6 text-gray-500 dark:text-gray-400">
//                   <Clock className="w-8 h-8 mx-auto mb-2 opacity-50" />
//                   <p>No available slots at the moment</p>
//                 </div>
//               )}
//             </div>

//             {/* Time Slots */}
//             {selectedSlot && slotsByDate[selectedSlot] && (
//               <motion.div
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: "auto" }}
//                 className="space-y-3"
//               >
//                 <h4 className="font-semibold text-gray-900 dark:text-white">
//                   Available Times for {new Date(selectedSlot).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
//                 </h4>
//                 <div className="grid grid-cols-2 gap-2">
//                   {slotsByDate[selectedSlot]
//                     .filter((slot) => slot.available)
//                     .map((slot) => (
//                       <motion.button
//                         key={slot.time}
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         onClick={() => setSelectedSlot(`${selectedSlot}-${slot.time}`)}
//                         className={`p-3 rounded-xl border transition-all duration-200 flex items-center justify-center gap-2 ${
//                           selectedSlot === `${selectedSlot}-${slot.time}`
//                             ? "bg-amber-500 text-white border-amber-500"
//                             : "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-amber-300"
//                         }`}
//                       >
//                         <Clock className="w-4 h-4" />
//                         <span className="font-medium">{slot.time}</span>
//                       </motion.button>
//                     ))}
//                 </div>
//               </motion.div>
//             )}

//             <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//               <Button
//                 className="w-full bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white py-3 rounded-xl font-bold shadow-lg"
//                 disabled={!selectedSlot}
//                 onClick={handleBooking}
//               >
//                 Continue to Book
//               </Button>
//             </motion.div>

//             {/* Location Info */}
//             <div className="p-3 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-100 dark:border-rose-800">
//               <div className="flex items-center gap-2 text-rose-700 dark:text-rose-300">
//                 <MapPin className="w-4 h-4" />
//                 <span className="text-sm">
//                   {consultationType === "virtual" ? "Virtual consultation via video call" : `In-person at ${designer.location}`}
//                 </span>
//               </div>
//             </div>
//           </motion.div>
//         )}

//         {bookingStep === "confirm" && (
//           <motion.div
//             key="confirm"
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -20 }}
//             className="space-y-6"
//           >
//             <div className="bg-rose-50 dark:bg-rose-900/20 p-4 rounded-xl border border-rose-100 dark:border-rose-800">
//               <p className="text-sm text-rose-700 dark:text-rose-300 mb-2">Appointment Details</p>
//               <p className="font-bold text-gray-900 dark:text-white text-lg">
//                 {selectedSlot && new Date(selectedSlot.split('-')[0]).toLocaleDateString('en-US', {
//                   weekday: 'long',
//                   year: 'numeric',
//                   month: 'long',
//                   day: 'numeric'
//                 })}
//               </p>
//               <p className="text-gray-600 dark:text-gray-400">
//                 at {selectedSlot && selectedSlot.split('-')[1]} • {consultationType === "virtual" ? "Virtual" : "In-Person"}
//               </p>
//             </div>

//             <div className="space-y-3">
//               <p className="text-sm text-gray-600 dark:text-gray-400">
//                 Designer: <span className="font-semibold text-gray-900 dark:text-white">{designer.name}</span>
//               </p>
//               <p className="text-sm text-gray-600 dark:text-gray-400">
//                 Duration: <span className="font-semibold text-gray-900 dark:text-white">1 hour consultation</span>
//               </p>
//               <p className="text-sm text-gray-600 dark:text-gray-400">
//                 Type: <span className="font-semibold text-gray-900 dark:text-white">
//                   {consultationType === "virtual" ? "Video Call" : "Studio Visit"}
//                 </span>
//               </p>
//             </div>

//             <div className="space-y-3">
//               <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//                 <Button
//                   className="w-full bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white py-3 rounded-xl font-bold shadow-lg"
//                   onClick={handleConfirm}
//                 >
//                   Confirm Booking
//                 </Button>
//               </motion.div>
//               <Button
//                 variant="outline"
//                 className="w-full bg-transparent border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-900/20"
//                 onClick={() => {
//                   setBookingStep("select");
//                   setSelectedSlot(null);
//                 }}
//               >
//                 Back to Selection
//               </Button>
//             </div>
//           </motion.div>
//         )}

//         {bookingStep === "success" && (
//           <motion.div
//             key="success"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.8 }}
//             className="text-center py-8"
//           >
//             <motion.div
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ type: "spring", stiffness: 200 }}
//               className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
//             >
//               <Check size={32} className="text-green-600" />
//             </motion.div>
//             <p className="font-bold text-gray-900 dark:text-white mb-2 text-lg">Booking Confirmed!</p>
//             <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
//               Your consultation has been scheduled successfully
//             </p>
//             <p className="text-xs text-gray-500 dark:text-gray-400">
//               Check your email for confirmation details and meeting link
//             </p>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </Card>
//   );
// }





















"use client";

import { useState } from "react";
import { Calendar, Clock, Check, MapPin, Video, Users, CreditCard, ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  price: { min: number; max: number };
  image: string;
  specialty: string;
}

interface PaymentDetails {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  name: string;
}

export default function AppointmentBooking({
  designer,
}: {
  designer: Designer;
}) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookingStep, setBookingStep] = useState<"select" | "details" | "payment" | "success">("select");
  const [consultationType, setConsultationType] = useState<"virtual" | "in-person">("virtual");
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    notes: ""
  });
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails>({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    name: ""
  });
  const [isProcessing, setIsProcessing] = useState(false);

  // Get current month and next 3 months
  const getMonths = () => {
    const months = [];
    const currentDate = new Date();
    
    for (let i = 0; i < 3; i++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth() + i, 1);
      months.push({
        name: date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
        value: `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}`
      });
    }
    
    return months;
  };

  // Generate available slots for testing
  const generateAvailableSlots = () => {
    const slots: Slot[] = [];
    const currentDate = new Date();
    
    // Generate slots for next 30 days
    for (let i = 1; i <= 30; i++) {
      const date = new Date(currentDate);
      date.setDate(currentDate.getDate() + i);
      const dateString = date.toISOString().split('T')[0];
      
      // Add 3-4 time slots per day
      const times = ['10:00 AM', '02:00 PM', '04:00 PM', '06:00 PM'];
      times.forEach(time => {
        // Make some slots unavailable randomly for testing
        const available = Math.random() > 0.3; // 70% slots available
        slots.push({
          date: dateString,
          time: time,
          available: available
        });
      });
    }
    
    return slots;
  };

  // Use generated slots or designer's slots
  const availableSlots = generateAvailableSlots();

  const [selectedMonth, setSelectedMonth] = useState(getMonths()[0].value);

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      setBookingStep("details");
    }
  };

  const handleDetailsSubmit = () => {
    if (userDetails.name && userDetails.email && userDetails.phone) {
      setBookingStep("payment");
    }
  };

  // Convert time from 12-hour to 24-hour format
    const convertTo24Hour = (time12h: string) => {
      const [time, modifier] = time12h.split(' ');
      const parts = time.split(':');
      let hours = parts[0];
      const minutes = parts[1];
      
      if (hours === '12') {
        hours = '00';
      }
      
      if (modifier === 'PM') {
        hours = String(parseInt(hours, 10) + 12);
      }
      
      return `${hours.padStart(2, '0')}:${minutes}`;
    };

  // Format date for Google Calendar
  const formatDateForCalendar = (date: string, time: string) => {
    try {
      const time24h = convertTo24Hour(time);
      const dateTimeString = `${date}T${time24h}:00`;
      const startTime = new Date(dateTimeString);
      
      if (isNaN(startTime.getTime())) {
        throw new Error('Invalid date/time');
      }
      
      const endTime = new Date(startTime.getTime() + 60 * 60 * 1000); // 1 hour duration
      
      // Format for Google Calendar (YYYYMMDDTHHmmssZ)
      const formatTime = (dateObj: Date) => {
        return dateObj.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
      };
      
      return {
        start: formatTime(startTime),
        end: formatTime(endTime)
      };
    } catch (error) {
      console.error('Error formatting date for calendar:', error);
      // Return fallback dates
      const fallbackStart = new Date();
      fallbackStart.setDate(fallbackStart.getDate() + 1);
      const fallbackEnd = new Date(fallbackStart.getTime() + 60 * 60 * 1000);
      
      return {
        start: fallbackStart.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z',
        end: fallbackEnd.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
      };
    }
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setBookingStep("success");
      
      // Add to calendar and send notifications
      addToCalendar();
      sendNotifications();
      
      setTimeout(() => {
        // Reset form
        setBookingStep("select");
        setSelectedDate(null);
        setSelectedTime(null);
        setUserDetails({ name: "", email: "", phone: "", notes: "" });
        setPaymentDetails({ cardNumber: "", expiryDate: "", cvv: "", name: "" });
      }, 5000);
    }, 2000);
  };

  const addToCalendar = () => {
    if (!selectedDate || !selectedTime) return;
    
    try {
      const { start, end } = formatDateForCalendar(selectedDate, selectedTime);
      
      const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Consultation with ${encodeURIComponent(designer.name)}&dates=${start}/${end}&details=Design consultation with ${encodeURIComponent(designer.name)}&location=${consultationType === 'virtual' ? 'Video Call' : encodeURIComponent(designer.location)}`;
      
      window.open(calendarUrl, '_blank');
    } catch (error) {
      console.error('Error creating calendar event:', error);
      // Fallback calendar URL
      const fallbackUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Consultation with ${encodeURIComponent(designer.name)}&details=Design consultation&location=${consultationType === 'virtual' ? 'Video Call' : encodeURIComponent(designer.location)}`;
      window.open(fallbackUrl, '_blank');
    }
  };

  const sendNotifications = () => {
    // In real app, send emails/SMS to both client and designer
    console.log("Sending notifications to:", {
      client: userDetails.email,
      designer: designer.name,
      appointment: {
        date: selectedDate,
        time: selectedTime,
        type: consultationType
      }
    });
  };

  // Group slots by date and filter by selected month
  const slotsByDate = availableSlots.reduce((acc, slot) => {
    const slotMonth = slot.date.substring(0, 7); // YYYY-MM
    if (slotMonth === selectedMonth) {
      if (!acc[slot.date]) acc[slot.date] = [];
      acc[slot.date].push(slot);
    }
    return acc;
  }, {} as Record<string, Slot[]>);

  const availableDates = Object.keys(slotsByDate).sort();

  const months = getMonths();

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

  const consultationPrice = consultationType === 'virtual' ? designer.price.min : designer.price.min + 2000;

  // Safe calendar URL generation
  const getCalendarUrl = () => {
    if (!selectedDate || !selectedTime) return '#';
    
    try {
      const { start, end } = formatDateForCalendar(selectedDate, selectedTime);
      return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Consultation with ${encodeURIComponent(designer.name)}&dates=${start}/${end}&details=Design consultation with ${encodeURIComponent(designer.name)}&location=${consultationType === 'virtual' ? 'Video Call' : encodeURIComponent(designer.location)}`;
    } catch (error) {
      return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Consultation with ${encodeURIComponent(designer.name)}&details=Design consultation&location=${consultationType === 'virtual' ? 'Video Call' : encodeURIComponent(designer.location)}`;
    }
  };

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
                    <p className="text-sm font-bold text-rose-500 mt-1">₹{designer.price.min}</p>
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
                    <p className="text-sm font-bold text-amber-500 mt-1">₹{designer.price.min + 2000}</p>
                  </div>
                </motion.button>
              </div>
            </div>

            {/* Month Selection */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Select Month</h4>
              <div className="grid grid-cols-3 gap-2">
                {months.map((month) => (
                  <motion.button
                    key={month.value}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setSelectedMonth(month.value);
                      setSelectedDate(null);
                      setSelectedTime(null);
                    }}
                    className={`p-3 rounded-xl border transition-all duration-200 ${
                      selectedMonth === month.value
                        ? "border-rose-500 bg-rose-500 text-white"
                        : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 hover:border-rose-300"
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-sm font-medium">
                        {month.name.split(' ')[0]}
                      </div>
                      <div className="text-xs opacity-75">
                        {month.name.split(' ')[1]}
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Date Selection */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                Available Dates - {months.find(m => m.value === selectedMonth)?.name}
              </h4>
              {availableDates.length > 0 ? (
                <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto p-1">
                  {availableDates.map((date) => {
                    const availableSlotsForDate = slotsByDate[date].filter(slot => slot.available);
                    const hasAvailableSlots = availableSlotsForDate.length > 0;
                    
                    return (
                      <motion.button
                        key={date}
                        whileHover={{ scale: hasAvailableSlots ? 1.02 : 1 }}
                        whileTap={{ scale: hasAvailableSlots ? 0.98 : 1 }}
                        onClick={() => hasAvailableSlots && setSelectedDate(date)}
                        className={`p-3 rounded-xl border transition-all duration-200 ${
                          selectedDate === date
                            ? "border-rose-500 bg-rose-500 text-white"
                            : hasAvailableSlots
                            ? "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 hover:border-rose-300"
                            : "border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 opacity-50 cursor-not-allowed"
                        }`}
                        disabled={!hasAvailableSlots}
                      >
                        <div className="text-center">
                          <div className="text-lg font-bold">
                            {new Date(date).getDate()}
                          </div>
                          <div className="text-sm">
                            {new Date(date).toLocaleDateString('en-US', { month: 'short' })}
                          </div>
                          <div className="text-xs opacity-75">
                            {new Date(date).toLocaleDateString('en-US', { weekday: 'short' })}
                          </div>
                          {!hasAvailableSlots && (
                            <div className="text-xs text-red-500 mt-1">Full</div>
                          )}
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-6 text-gray-500 dark:text-gray-400">
                  <Clock className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p>No available slots for {months.find(m => m.value === selectedMonth)?.name}</p>
                </div>
              )}
            </div>

            {/* Time Slots */}
            {selectedDate && slotsByDate[selectedDate] && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="space-y-3"
              >
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Available Times for {new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {slotsByDate[selectedDate]
                    .filter((slot) => slot.available)
                    .map((slot) => (
                      <motion.button
                        key={slot.time}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedTime(slot.time)}
                        className={`p-3 rounded-xl border transition-all duration-200 flex items-center justify-center gap-2 ${
                          selectedTime === slot.time
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

            {/* Summary */}
            {(selectedDate && selectedTime) && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-rose-50 dark:bg-rose-900/20 p-4 rounded-xl border border-rose-100 dark:border-rose-800"
              >
                <h4 className="font-semibold text-rose-700 dark:text-rose-300 mb-2">Appointment Summary</h4>
                <div className="space-y-1 text-sm">
                  <p><span className="font-medium">Date:</span> {new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
                  <p><span className="font-medium">Time:</span> {selectedTime}</p>
                  <p><span className="font-medium">Type:</span> {consultationType === 'virtual' ? 'Video Call' : 'In-Person'}</p>
                  <p><span className="font-medium">Duration:</span> 1 hour</p>
                  <p><span className="font-medium">Price:</span> <span className="font-bold text-rose-600">₹{consultationPrice}</span></p>
                </div>
              </motion.div>
            )}

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                className="w-full bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white py-3 rounded-xl font-bold shadow-lg"
                disabled={!selectedDate || !selectedTime}
                onClick={handleBooking}
              >
                Continue to Details
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

        {bookingStep === "details" && (
          <motion.div
            key="details"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <Button
              variant="ghost"
              onClick={() => setBookingStep("select")}
              className="p-0 text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Selection
            </Button>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Your Details</h4>
              <div className="space-y-4">
                <Input
                  placeholder="Full Name"
                  value={userDetails.name}
                  onChange={(e) => setUserDetails({...userDetails, name: e.target.value})}
                  className="border-rose-200 dark:border-rose-800"
                />
                <Input
                  placeholder="Email Address"
                  type="email"
                  value={userDetails.email}
                  onChange={(e) => setUserDetails({...userDetails, email: e.target.value})}
                  className="border-rose-200 dark:border-rose-800"
                />
                <Input
                  placeholder="Phone Number"
                  type="tel"
                  value={userDetails.phone}
                  onChange={(e) => setUserDetails({...userDetails, phone: e.target.value})}
                  className="border-rose-200 dark:border-rose-800"
                />
                <Input
                  placeholder="Additional Notes (Optional)"
                  value={userDetails.notes}
                  onChange={(e) => setUserDetails({...userDetails, notes: e.target.value})}
                  className="border-rose-200 dark:border-rose-800"
                />
              </div>
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                className="w-full bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white py-3 rounded-xl font-bold shadow-lg"
                disabled={!userDetails.name || !userDetails.email || !userDetails.phone}
                onClick={handleDetailsSubmit}
              >
                Continue to Payment
              </Button>
            </motion.div>
          </motion.div>
        )}

        {bookingStep === "payment" && (
          <motion.div
            key="payment"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <Button
              variant="ghost"
              onClick={() => setBookingStep("details")}
              className="p-0 text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Details
            </Button>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                Payment Details
              </h4>
              
              <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl border border-amber-200 dark:border-amber-800 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-amber-700 dark:text-amber-300">Total Amount:</span>
                  <span className="text-2xl font-bold text-amber-600">₹{consultationPrice}</span>
                </div>
              </div>

              <div className="space-y-4">
                <Input
                  placeholder="Card Number"
                  value={paymentDetails.cardNumber}
                  onChange={(e) => setPaymentDetails({...paymentDetails, cardNumber: e.target.value})}
                  className="border-rose-200 dark:border-rose-800"
                  maxLength={16}
                />
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    placeholder="MM/YY"
                    value={paymentDetails.expiryDate}
                    onChange={(e) => setPaymentDetails({...paymentDetails, expiryDate: e.target.value})}
                    className="border-rose-200 dark:border-rose-800"
                    maxLength={5}
                  />
                  <Input
                    placeholder="CVV"
                    value={paymentDetails.cvv}
                    onChange={(e) => setPaymentDetails({...paymentDetails, cvv: e.target.value})}
                    className="border-rose-200 dark:border-rose-800"
                    maxLength={3}
                  />
                </div>
                <Input
                  placeholder="Name on Card"
                  value={paymentDetails.name}
                  onChange={(e) => setPaymentDetails({...paymentDetails, name: e.target.value})}
                  className="border-rose-200 dark:border-rose-800"
                />
              </div>
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                className="w-full bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white py-3 rounded-xl font-bold shadow-lg"
                disabled={!paymentDetails.cardNumber || !paymentDetails.expiryDate || !paymentDetails.cvv || !paymentDetails.name || isProcessing}
                onClick={handlePayment}
              >
                {isProcessing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Processing Payment...
                  </>
                ) : (
                  <>
                    <CreditCard className="w-4 h-4 mr-2" />
                    Pay ₹{consultationPrice}
                  </>
                )}
              </Button>
            </motion.div>

            <div className="text-center text-xs text-gray-500 dark:text-gray-400">
              Your payment is secure and encrypted
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
              Your consultation with {designer.name} has been scheduled
            </p>
            
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border border-green-200 dark:border-green-800 mb-4">
              <p className="text-sm text-green-700 dark:text-green-300 mb-2">Appointment Details:</p>
              <p className="font-semibold text-gray-900 dark:text-white">
                {selectedDate && new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                at {selectedTime} • {consultationType === 'virtual' ? 'Video Call' : 'In-Person'}
              </p>
            </div>

            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
              Calendar invitation and meeting details have been sent to your email
            </p>

            <div className="space-y-2">
              <Button
                onClick={() => window.open(getCalendarUrl(), '_blank')}
                variant="outline"
                className="w-full border-green-200 dark:border-green-800 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Add to Calendar
              </Button>
              
              <Button
                onClick={() => {
                  setBookingStep("select");
                  setSelectedDate(null);
                  setSelectedTime(null);
                  setUserDetails({ name: "", email: "", phone: "", notes: "" });
                  setPaymentDetails({ cardNumber: "", expiryDate: "", cvv: "", name: "" });
                }}
                className="w-full bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white"
              >
                Book Another Appointment
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}
