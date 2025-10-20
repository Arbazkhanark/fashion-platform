"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Sparkles,
  Loader,
  ArrowRight,
  Star,
  Users,
  Palette,
  Zap,
  Brain,
  Wand2,
} from "lucide-react";
import Link from "next/link";
import { mockExperts } from "@/lib/mock-data";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";

interface StylePreferences {
  occasion: string[];
  bodyType: string;
  skinTone: string;
  budget: string;
  style: string[];
  colors: string[];
  concerns: string[];
}

interface Recommendation {
  expertId: string;
  expertName: string;
  title: string;
  reason: string;
  match: number;
  aiAdvice: string;
}

interface FashionAdvice {
  title: string;
  description: string;
  tips: string[];
  colors: string[];
  styles: string[];
}

export default function StyleAssistantPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [preferences, setPreferences] = useState<StylePreferences>({
    occasion: [],
    bodyType: "",
    skinTone: "",
    budget: "",
    style: [],
    colors: [],
    concerns: [],
  });
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [customQuestion, setCustomQuestion] = useState("");
  const [fashionAdvice, setFashionAdvice] = useState<FashionAdvice | null>(
    null
  );
  const [showAdvice, setShowAdvice] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const occasions = [
    "Wedding",
    "Party",
    "Office",
    "Casual",
    "Special Event",
    "Date Night",
  ];
  const bodyTypes = [
    "Petite",
    "Average",
    "Tall",
    "Curvy",
    "Athletic",
    "Pear-shaped",
  ];
  const skinTones = ["Fair", "Medium", "Olive", "Deep", "Warm", "Cool"];
  const budgets = [
    "Budget (₹5K-15K)",
    "Mid-range (₹15K-50K)",
    "Premium (₹50K-1L)",
    "Luxury (₹1L+)",
  ];
  const styles = [
    "Classic",
    "Trendy",
    "Bohemian",
    "Minimalist",
    "Glamorous",
    "Casual",
    "Ethnic",
    "Fusion",
  ];
  const colors = [
    "Neutrals",
    "Pastels",
    "Bright",
    "Earth Tones",
    "Jewel Tones",
    "Monochrome",
  ];
  const concerns = [
    "Comfort",
    "Durability",
    "Sustainability",
    "Uniqueness",
    "Versatility",
    "Confidence",
  ];

  const handleOccasionToggle = (occasion: string) => {
    setPreferences((prev) => ({
      ...prev,
      occasion: prev.occasion.includes(occasion)
        ? prev.occasion.filter((o) => o !== occasion)
        : [...prev.occasion, occasion],
    }));
  };

  const handleStyleToggle = (style: string) => {
    setPreferences((prev) => ({
      ...prev,
      style: prev.style.includes(style)
        ? prev.style.filter((s) => s !== style)
        : [...prev.style, style],
    }));
  };

  const handleColorToggle = (color: string) => {
    setPreferences((prev) => ({
      ...prev,
      colors: prev.colors.includes(color)
        ? prev.colors.filter((c) => c !== color)
        : [...prev.colors, color],
    }));
  };

  const handleConcernToggle = (concern: string) => {
    setPreferences((prev) => ({
      ...prev,
      concerns: prev.concerns.includes(concern)
        ? prev.concerns.filter((c) => c !== concern)
        : [...prev.concerns, concern],
    }));
  };

  const generateFashionAdvice = (prefs: StylePreferences): FashionAdvice => {
    const advice: FashionAdvice = {
      title: "Personalized Style Guide",
      description:
        "Based on your preferences, here's what would work best for you:",
      tips: [],
      colors: [],
      styles: [],
    };

    // Body type advice
    if (prefs.bodyType === "Petite") {
      advice.tips.push(
        "Opt for vertical lines and monochrome outfits to create height illusion"
      );
      advice.tips.push(
        "Choose fitted clothing that doesn't overwhelm your frame"
      );
    } else if (prefs.bodyType === "Curvy") {
      advice.tips.push("Emphasize your waist with belts and tailored pieces");
      advice.tips.push("A-line silhouettes and wrap dresses work beautifully");
    } else if (prefs.bodyType === "Tall") {
      advice.tips.push("Experiment with bold patterns and horizontal lines");
      advice.tips.push(
        "Layered looks and statement accessories complement your height"
      );
    }

    // Skin tone color recommendations
    if (prefs.skinTone === "Fair" || prefs.skinTone === "Cool") {
      advice.colors = ["Navy Blue", "Emerald Green", "Ruby Red", "Silver Gray"];
    } else if (prefs.skinTone === "Medium" || prefs.skinTone === "Warm") {
      advice.colors = ["Terracotta", "Olive Green", "Mustard Yellow", "Cream"];
    } else {
      advice.colors = ["Royal Blue", "Fuchsia", "Gold", "White"];
    }

    // Style combinations
    if (prefs.occasion.includes("Wedding")) {
      advice.styles.push("Elegant Lehenga with intricate embroidery");
      advice.styles.push("Contemporary Saree with modern blouse");
    }
    if (prefs.occasion.includes("Office")) {
      advice.styles.push("Tailored blazers with straight-cut trousers");
      advice.styles.push("Pencil skirts with silk blouses");
    }
    if (prefs.occasion.includes("Party")) {
      advice.styles.push("Sequined cocktail dresses");
      advice.styles.push("Statement jumpsuits with bold accessories");
    }

    return advice;
  };

  const generateRecommendations = async () => {
    setLoading(true);

    // Generate fashion advice first
    const advice = generateFashionAdvice(preferences);
    setFashionAdvice(advice);

    // Simulate AI processing
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // Mock AI recommendations based on preferences
    const mockRecommendations: Recommendation[] = [];

    if (preferences.occasion.includes("Wedding")) {
      mockRecommendations.push({
        expertId: "1",
        expertName: "Priya Sharma",
        title: "Wedding Designer",
        reason:
          "Perfect for your wedding styling needs with 12 years of experience in bridal wear",
        match: 95,
        aiAdvice:
          "Specializes in custom bridal wear that complements your body type and skin tone",
      });
    }

    if (
      preferences.occasion.includes("Party") ||
      preferences.occasion.includes("Special Event")
    ) {
      mockRecommendations.push({
        expertId: "3",
        expertName: "Neha Patel",
        title: "Makeup Artist",
        reason:
          "Expert in party makeup with glamorous looks matching your style preferences",
        match: 92,
        aiAdvice:
          "Creates stunning party looks that enhance your natural features",
      });
    }

    if (preferences.occasion.includes("Office")) {
      mockRecommendations.push({
        expertId: "2",
        expertName: "Arjun Verma",
        title: "Casual Wear Designer",
        reason:
          "Specializes in professional and minimalist styles perfect for office wear",
        match: 88,
        aiAdvice:
          "Designs office wear that balances professionalism with personal style",
      });
    }

    if (preferences.occasion.includes("Casual")) {
      mockRecommendations.push({
        expertId: "4",
        expertName: "Vikram Singh",
        title: "Hair Stylist",
        reason:
          "Expert in casual styling and modern haircuts for everyday looks",
        match: 85,
        aiAdvice: "Creates low-maintenance styles that suit your lifestyle",
      });
    }

    // Add more recommendations if needed
    if (mockRecommendations.length < 3) {
      mockRecommendations.push({
        expertId: "2",
        expertName: "Arjun Verma",
        title: "Casual Wear Designer",
        reason: "Great for versatile styling options matching your preferences",
        match: 82,
        aiAdvice:
          "Versatile designer who can adapt to multiple style preferences",
      });
    }

    setRecommendations(mockRecommendations.slice(0, 4));
    setLoading(false);
    setStep(3);
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-white to-rose-50/30 dark:from-gray-900 dark:to-rose-900/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div
            className={`text-center mb-12 transition-all duration-1000 ${
              isVisible ? "animate-glow-in" : "opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 px-4 py-2 rounded-full text-sm mb-6">
              <Sparkles className="w-4 h-4 animate-pulse" />
              AI-Powered Styling
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              AI Style
              <span className="block bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">
                Assistant
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Get personalized fashion advice and expert recommendations powered
              by artificial intelligence
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Brain, value: "AI Powered", label: "Smart Analysis" },
              { icon: Users, value: "10K+", label: "Style Profiles" },
              { icon: Star, value: "95%", label: "Accuracy" },
              { icon: Palette, value: "500+", label: "Style Combinations" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 animate-fade-in-up hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="w-8 h-8 text-rose-500 mx-auto mb-2" />
                <div className="text-lg font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Step 1: Preferences */}
          {step === 1 && (
            <div className="space-y-6 animate-slide-up">
              {/* Occasion */}
              <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
                    <Zap className="w-5 h-5 text-rose-500" />
                    What&apos;s the occasion?
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    Select all that apply
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {occasions.map((occasion, index) => (
                      <div
                        key={occasion}
                        className="flex items-center gap-3 p-3 rounded-lg bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 hover:border-rose-300 dark:hover:border-rose-500 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        <Checkbox
                          id={`occasion-${occasion}`}
                          checked={preferences.occasion.includes(occasion)}
                          onCheckedChange={() => handleOccasionToggle(occasion)}
                          className="data-[state=checked]:bg-rose-500 data-[state=checked]:border-rose-500"
                        />
                        <label
                          htmlFor={`occasion-${occasion}`}
                          className="text-sm cursor-pointer text-gray-700 dark:text-gray-300 font-medium"
                        >
                          {occasion}
                        </label>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Body Type & Skin Tone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card
                  className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl animate-fade-in-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
                      <Users className="w-5 h-5 text-blue-500" />
                      Body Type
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {bodyTypes.map((type, index) => (
                        <div
                          key={type}
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                        >
                          <Checkbox
                            id={`body-${type}`}
                            checked={preferences.bodyType === type}
                            onCheckedChange={() =>
                              setPreferences((prev) => ({
                                ...prev,
                                bodyType: type,
                              }))
                            }
                            className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                          />
                          <label
                            htmlFor={`body-${type}`}
                            className="text-sm cursor-pointer text-gray-700 dark:text-gray-300"
                          >
                            {type}
                          </label>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card
                  className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl animate-fade-in-up"
                  style={{ animationDelay: "0.3s" }}
                >
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
                      <Palette className="w-5 h-5 text-amber-500" />
                      Skin Tone
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {skinTones.map((tone, index) => (
                        <div
                          key={tone}
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                        >
                          <Checkbox
                            id={`skin-${tone}`}
                            checked={preferences.skinTone === tone}
                            onCheckedChange={() =>
                              setPreferences((prev) => ({
                                ...prev,
                                skinTone: tone,
                              }))
                            }
                            className="data-[state=checked]:bg-amber-500 data-[state=checked]:border-amber-500"
                          />
                          <label
                            htmlFor={`skin-${tone}`}
                            className="text-sm cursor-pointer text-gray-700 dark:text-gray-300"
                          >
                            {tone}
                          </label>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Budget */}
              <Card
                className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
                    <Sparkles className="w-5 h-5 text-green-500" />
                    Budget Range
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {budgets.map((budget, index) => (
                      <div
                        key={budget}
                        className="flex items-center gap-3 p-3 rounded-lg bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 hover:border-green-300 dark:hover:border-green-500 transition-all duration-300 hover:scale-105"
                      >
                        <Checkbox
                          id={`budget-${budget}`}
                          checked={preferences.budget === budget}
                          onCheckedChange={() =>
                            setPreferences((prev) => ({ ...prev, budget }))
                          }
                          className="data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
                        />
                        <label
                          htmlFor={`budget-${budget}`}
                          className="text-sm cursor-pointer text-gray-700 dark:text-gray-300 font-medium"
                        >
                          {budget}
                        </label>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Style Preferences */}
              <Card
                className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl animate-fade-in-up"
                style={{ animationDelay: "0.5s" }}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
                    <Wand2 className="w-5 h-5 text-purple-500" />
                    Style Preferences
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    Select all that resonate with you
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {styles.map((style, index) => (
                      <div
                        key={style}
                        className="flex items-center gap-3 p-3 rounded-lg bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 hover:border-purple-300 dark:hover:border-purple-500 transition-all duration-300 hover:scale-105"
                      >
                        <Checkbox
                          id={`style-${style}`}
                          checked={preferences.style.includes(style)}
                          onCheckedChange={() => handleStyleToggle(style)}
                          className="data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-500"
                        />
                        <label
                          htmlFor={`style-${style}`}
                          className="text-sm cursor-pointer text-gray-700 dark:text-gray-300"
                        >
                          {style}
                        </label>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Navigation */}
              <div
                className="flex gap-3 pt-6 animate-fade-in-up"
                style={{ animationDelay: "0.6s" }}
              >
                <Link href="/" className="flex-1">
                  <Button
                    variant="outline"
                    className="w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 hover:bg-rose-50 dark:hover:bg-rose-900/20"
                  >
                    Back to Home
                  </Button>
                </Link>
                <Button
                  className="flex-1 bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white py-3 rounded-xl transition-all duration-300 hover:scale-105 group"
                  onClick={() => setStep(2)}
                  disabled={
                    !preferences.occasion.length ||
                    !preferences.bodyType ||
                    !preferences.budget
                  }
                >
                  Continue
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Additional Questions */}
          {step === 2 && (
            <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl animate-slide-up">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  Additional Details
                </CardTitle>
                <CardDescription className="text-lg text-gray-600 dark:text-gray-400">
                  Help us understand your unique style needs better
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="animate-fade-in-up">
                  <label className="text-sm font-medium mb-3 block text-gray-700 dark:text-gray-300">
                    Any specific requirements or questions?
                  </label>
                  <Textarea
                    value={customQuestion}
                    onChange={(e) => setCustomQuestion(e.target.value)}
                    placeholder="E.g., I have sensitive skin, I prefer sustainable fashion, I need something for a specific event, etc."
                    rows={5}
                    className="bg-white/50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-600 focus:border-rose-300 dark:focus:border-rose-500"
                  />
                </div>

                <div className="flex gap-3 pt-6">
                  <Button
                    variant="outline"
                    className="flex-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 hover:bg-rose-50 dark:hover:bg-rose-900/20"
                    onClick={() => setStep(1)}
                  >
                    Back
                  </Button>
                  <Button
                    className="flex-1 bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white py-3 rounded-xl transition-all duration-300 hover:scale-105 group"
                    onClick={generateRecommendations}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Loader className="w-4 h-4 animate-spin mr-2" />
                        AI is analyzing your style...
                      </>
                    ) : (
                      <>
                        <Brain className="w-4 h-4 mr-2" />
                        Get AI Recommendations
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Recommendations */}
          {step === 3 && (
            <div className="space-y-8 animate-slide-up">
              {/* AI Fashion Advice */}
              {fashionAdvice && (
                <Card className="border-0 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 shadow-2xl">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="font-bold text-xl text-gray-900 dark:text-white">
                            AI Style Analysis
                          </h3>
                          <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Personalized
                          </span>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                          {/* Colors */}
                          <div className="space-y-3">
                            <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                              <Palette className="w-4 h-4 text-rose-500" />
                              Recommended Colors
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {fashionAdvice.colors.map((color, index) => (
                                <span
                                  key={color}
                                  className="bg-gradient-to-r from-rose-500 to-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-fade-in-up"
                                  style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                  {color}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Tips */}
                          <div className="space-y-3">
                            <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                              <Sparkles className="w-4 h-4 text-amber-500" />
                              Style Tips
                            </h4>
                            <ul className="space-y-2">
                              {fashionAdvice.tips.map((tip, index) => (
                                <li
                                  key={index}
                                  className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2 animate-fade-in-up"
                                  style={{
                                    animationDelay: `${index * 0.1 + 0.3}s`,
                                  }}
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                                  {tip}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Styles */}
                          <div className="space-y-3">
                            <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                              <Wand2 className="w-4 h-4 text-purple-500" />
                              Suggested Styles
                            </h4>
                            <ul className="space-y-2">
                              {fashionAdvice.styles.map((style, index) => (
                                <li
                                  key={index}
                                  className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2 animate-fade-in-up"
                                  style={{
                                    animationDelay: `${index * 0.1 + 0.6}s`,
                                  }}
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                                  {style}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Expert Recommendations */}
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    Perfect Matches for You
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Based on your style profile and AI analysis
                  </p>
                </div>

                {recommendations.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {recommendations.map((rec, index) => {
                      const expert = mockExperts.find(
                        (e) => e.id === rec.expertId
                      );
                      return (
                        <Card
                          key={rec.expertId}
                          className="overflow-hidden border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-card-float"
                          style={{
                            animationDelay: `${index * 0.1}s`,
                            animationDuration: "8s",
                          }}
                        >
                          <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-600 dark:to-gray-700">
                            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700" />
                            <div className="absolute top-4 right-4 bg-gradient-to-r from-rose-500 to-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                              {rec.match}% Match
                            </div>
                          </div>
                          <CardContent className="pt-6 space-y-4">
                            <div>
                              <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-1">
                                {rec.expertName}
                              </h3>
                              <p className="text-rose-600 dark:text-rose-400 font-medium">
                                {rec.title}
                              </p>
                            </div>

                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                              {rec.reason}
                            </p>

                            <div className="bg-rose-50 dark:bg-rose-900/20 rounded-xl p-4">
                              <p className="text-sm text-rose-700 dark:text-rose-300 font-medium">
                                AI Insight:
                              </p>
                              <p className="text-sm text-rose-600 dark:text-rose-400 mt-1">
                                {rec.aiAdvice}
                              </p>
                            </div>

                            <Link href={`/expert/${rec.expertId}`}>
                              <Button className="w-full bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white transition-all duration-300 hover:scale-105">
                                View Profile & Book
                              </Button>
                            </Link>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                ) : (
                  <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl">
                    <CardContent className="pt-6 text-center py-12">
                      <Sparkles className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                      <p className="text-gray-600 dark:text-gray-400 text-lg">
                        No recommendations found. Please try different
                        preferences.
                      </p>
                    </CardContent>
                  </Card>
                )}

                {/* Navigation */}
                <div className="flex gap-3 pt-8">
                  <Button
                    variant="outline"
                    className="flex-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 hover:bg-rose-50 dark:hover:bg-rose-900/20"
                    onClick={() => setStep(2)}
                  >
                    Back
                  </Button>
                  <Button
                    className="flex-1 bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white py-3 rounded-xl transition-all duration-300 hover:scale-105 group"
                    onClick={() => {
                      setStep(1);
                      setPreferences({
                        occasion: [],
                        bodyType: "",
                        skinTone: "",
                        budget: "",
                        style: [],
                        colors: [],
                        concerns: [],
                      });
                      setCustomQuestion("");
                      setRecommendations([]);
                      setFashionAdvice(null);
                    }}
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    Start New Analysis
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        <style jsx>{`
          @keyframes glow-in {
            0% {
              opacity: 0;
              transform: translateY(20px);
              filter: blur(10px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
              filter: blur(0);
            }
          }
          @keyframes fade-in-up {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes slide-up {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes card-float {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-5px);
            }
          }
          .animate-glow-in {
            animation: glow-in 1.2s ease-out forwards;
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
            opacity: 0;
          }
          .animate-slide-up {
            animation: slide-up 0.6s ease-out forwards;
          }
          .animate-card-float {
            animation: card-float 8s ease-in-out infinite;
          }
        `}</style>
      </main>
      <Footer />
    </>
  );
}
