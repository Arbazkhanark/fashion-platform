"use client";

import type React from "react";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Upload, Check } from "lucide-react";

const categories = [
  { id: "wedding", label: "Wedding" },
  { id: "casual", label: "Casual Wear" },
  { id: "corporate", label: "Corporate" },
  { id: "party", label: "Party & Events" },
  { id: "birthday", label: "Birthday" },
];

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

export default function DesignerRegistrationForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",

    // Professional Info
    specialties: [] as string[],
    experience: "",
    bio: "",

    // Pricing
    minPrice: "",
    maxPrice: "",

    // Availability
    availableDays: [] as string[],
    availableHours: { start: "", end: "" },

    // Portfolio
    portfolioImages: [] as File[],

    // Social Links
    instagram: "",
    facebook: "",
    pinterest: "",

    // Credentials
    certifications: "",
    freeTrial: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSpecialtyChange = (specialty: string) => {
    setFormData((prev) => ({
      ...prev,
      specialties: prev.specialties.includes(specialty)
        ? prev.specialties.filter((s) => s !== specialty)
        : [...prev.specialties, specialty],
    }));
  };

  const handleDayChange = (day: string) => {
    setFormData((prev) => ({
      ...prev,
      availableDays: prev.availableDays.includes(day)
        ? prev.availableDays.filter((d) => d !== day)
        : [...prev.availableDays, day],
    }));
  };

  const handlePortfolioUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev) => ({
        ...prev,
        portfolioImages: [
          ...prev.portfolioImages,
          ...Array.from(e.target.files || []),
        ],
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) {
      setStep(step + 1);
    } else {
      setSubmitted(true);
      console.log("Form submitted:", formData);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return (
          formData.firstName &&
          formData.lastName &&
          formData.email &&
          formData.phone &&
          formData.location
        );
      case 2:
        return (
          formData.specialties.length > 0 && formData.experience && formData.bio
        );
      case 3:
        return (
          formData.minPrice &&
          formData.maxPrice &&
          formData.availableDays.length > 0
        );
      case 4:
        return true;
      default:
        return false;
    }
  };

  if (submitted) {
    return (
      <Card className="p-12 text-center border border-border">
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check size={40} className="text-green-600" />
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Registration Successful!
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Thank you for joining StyleConnect. Our team will review your
          application and contact you within 24 hours.
        </p>
        <Button
          className="bg-accent hover:bg-accent/90 text-accent-foreground"
          onClick={() => (window.location.href = "/")}
        >
          Back to Home
        </Button>
      </Card>
    );
  }

  return (
    <Card className="p-8 border border-border">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex justify-between mb-4">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex flex-col items-center flex-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mb-2 transition ${
                  s <= step
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-muted-foreground"
                }`}
              >
                {s}
              </div>
              <span className="text-xs text-muted-foreground text-center">
                {s === 1 && "Personal"}
                {s === 2 && "Professional"}
                {s === 3 && "Availability"}
                {s === 4 && "Portfolio"}
              </span>
            </div>
          ))}
        </div>
        <div className="h-1 bg-secondary rounded-full overflow-hidden">
          <div
            className="h-full bg-accent transition-all"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Step 1: Personal Information */}
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">
              Personal Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  First Name *
                </label>
                <Input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Enter your first name"
                  className="bg-secondary border-border"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Last Name *
                </label>
                <Input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Enter your last name"
                  className="bg-secondary border-border"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Email Address *
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                className="bg-secondary border-border"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Phone Number *
              </label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+91 XXXXX XXXXX"
                className="bg-secondary border-border"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Location *
              </label>
              <Input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="City, State"
                className="bg-secondary border-border"
              />
            </div>
          </div>
        )}

        {/* Step 2: Professional Information */}
        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">
              Professional Information
            </h2>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">
                Specialties *
              </label>
              <div className="grid grid-cols-2 gap-3">
                {categories.map((cat) => (
                  <label
                    key={cat.id}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <Checkbox
                      checked={formData.specialties.includes(cat.id)}
                      onCheckedChange={() => handleSpecialtyChange(cat.id)}
                    />
                    <span className="text-sm text-foreground">{cat.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Years of Experience *
              </label>
              <Input
                type="number"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                placeholder="e.g., 5"
                className="bg-secondary border-border"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Professional Bio *
              </label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                placeholder="Tell us about your experience and expertise..."
                rows={5}
                className="w-full px-4 py-2 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Certifications & Credentials
              </label>
              <Input
                type="text"
                name="certifications"
                value={formData.certifications}
                onChange={handleInputChange}
                placeholder="e.g., Fashion Design Diploma, Styling Certificate"
                className="bg-secondary border-border"
              />
            </div>

            <label className="flex items-center gap-3 cursor-pointer">
              <Checkbox
                checked={formData.freeTrial}
                onCheckedChange={(checked) =>
                  setFormData((prev) => ({
                    ...prev,
                    freeTrial: checked as boolean,
                  }))
                }
              />
              <span className="text-sm text-foreground">
                Offer free trial consultation
              </span>
            </label>
          </div>
        )}

        {/* Step 3: Pricing & Availability */}
        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">
              Pricing & Availability
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Minimum Price (₹) *
                </label>
                <Input
                  type="number"
                  name="minPrice"
                  value={formData.minPrice}
                  onChange={handleInputChange}
                  placeholder="e.g., 20000"
                  className="bg-secondary border-border"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Maximum Price (₹) *
                </label>
                <Input
                  type="number"
                  name="maxPrice"
                  value={formData.maxPrice}
                  onChange={handleInputChange}
                  placeholder="e.g., 200000"
                  className="bg-secondary border-border"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">
                Available Days *
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {days.map((day) => (
                  <label
                    key={day}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <Checkbox
                      checked={formData.availableDays.includes(day)}
                      onCheckedChange={() => handleDayChange(day)}
                    />
                    <span className="text-sm text-foreground">{day}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Available From
                </label>
                <select
                  value={formData.availableHours.start}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      availableHours: {
                        ...prev.availableHours,
                        start: e.target.value,
                      },
                    }))
                  }
                  className="w-full px-4 py-2 rounded-lg bg-secondary border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="">Select time</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Available Until
                </label>
                <select
                  value={formData.availableHours.end}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      availableHours: {
                        ...prev.availableHours,
                        end: e.target.value,
                      },
                    }))
                  }
                  className="w-full px-4 py-2 rounded-lg bg-secondary border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="">Select time</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Portfolio & Social Links */}
        {step === 4 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">
              Portfolio & Social Links
            </h2>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">
                Portfolio Images
              </label>
              <label className="border-2 border-dashed border-border rounded-lg p-8 cursor-pointer hover:border-accent transition text-center">
                <Upload
                  size={32}
                  className="mx-auto mb-2 text-muted-foreground"
                />
                <p className="text-sm font-semibold text-foreground mb-1">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-muted-foreground">
                  PNG, JPG, GIF up to 10MB
                </p>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handlePortfolioUpload}
                  className="hidden"
                />
              </label>
              {formData.portfolioImages.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm font-semibold text-foreground mb-2">
                    {formData.portfolioImages.length} image(s) selected
                  </p>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Instagram Profile
              </label>
              <Input
                type="url"
                name="instagram"
                value={formData.instagram}
                onChange={handleInputChange}
                placeholder="https://instagram.com/yourprofile"
                className="bg-secondary border-border"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Facebook Profile
              </label>
              <Input
                type="url"
                name="facebook"
                value={formData.facebook}
                onChange={handleInputChange}
                placeholder="https://facebook.com/yourprofile"
                className="bg-secondary border-border"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Pinterest Profile
              </label>
              <Input
                type="url"
                name="pinterest"
                value={formData.pinterest}
                onChange={handleInputChange}
                placeholder="https://pinterest.com/yourprofile"
                className="bg-secondary border-border"
              />
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex gap-4 pt-6 border-t border-border">
          <Button
            type="button"
            variant="outline"
            className="flex-1 bg-transparent"
            onClick={handleBack}
            disabled={step === 1}
          >
            Back
          </Button>
          <Button
            type="submit"
            className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
            disabled={!isStepValid()}
          >
            {step === 4 ? "Submit Application" : "Next"}
          </Button>
        </div>
      </form>
    </Card>
  );
}
