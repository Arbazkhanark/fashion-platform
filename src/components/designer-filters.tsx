"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

// Define the shape of your filters clearly
export interface Filters {
  category: string;
  minPrice: number;
  maxPrice: number;
  minRating: number;
  minExperience: number;
  freeTrial: boolean;
}

interface DesignerFiltersProps {
  filters: Filters;
  setFilters: (filters: Filters) => void;
}

const categories = [
  { id: "wedding", label: "Wedding" },
  { id: "casual", label: "Casual Wear" },
  { id: "corporate", label: "Corporate" },
  { id: "party", label: "Party & Events" },
  { id: "birthday", label: "Birthday" },
];

export default function DesignerFilters({
  filters,
  setFilters,
}: DesignerFiltersProps) {
  const handleCategoryChange = (categoryId: string) => {
    setFilters({
      ...filters,
      category: filters.category === categoryId ? "" : categoryId,
    });
  };

  const handlePriceChange = (value: number[]) => {
    setFilters({
      ...filters,
      minPrice: value[0],
      maxPrice: value[1],
    });
  };

  const handleRatingChange = (rating: number) => {
    setFilters({
      ...filters,
      minRating: filters.minRating === rating ? 0 : rating,
    });
  };

  const handleExperienceChange = (years: number) => {
    setFilters({
      ...filters,
      minExperience: filters.minExperience === years ? 0 : years,
    });
  };

  return (
    <Card className="p-6 space-y-6">
      {/* Category Filter */}
      <div>
        <h3 className="font-bold text-foreground mb-4">Category</h3>
        <div className="space-y-3">
          {categories.map((cat) => (
            <label
              key={cat.id}
              className="flex items-center gap-3 cursor-pointer"
            >
              <Checkbox
                checked={filters.category === cat.id}
                onCheckedChange={() => handleCategoryChange(cat.id)}
              />
              <span className="text-sm text-foreground">{cat.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="border-t border-border pt-6">
        <h3 className="font-bold text-foreground mb-4">Price Range</h3>
        <div className="space-y-4">
          <Slider
            min={0}
            max={250000}
            step={10000}
            value={[filters.minPrice, filters.maxPrice]}
            onValueChange={handlePriceChange}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>₹{filters.minPrice.toLocaleString()}</span>
            <span>₹{filters.maxPrice.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Rating Filter */}
      <div className="border-t border-border pt-6">
        <h3 className="font-bold text-foreground mb-4">Rating</h3>
        <div className="space-y-2">
          {[4.5, 4.0, 3.5].map((rating) => (
            <button
              key={rating}
              onClick={() => handleRatingChange(rating)}
              className={`w-full text-left px-3 py-2 rounded text-sm transition ${
                filters.minRating === rating
                  ? "bg-accent text-accent-foreground"
                  : "hover:bg-secondary text-foreground"
              }`}
            >
              ⭐ {rating}+ ({Math.floor(Math.random() * 100) + 50} reviews)
            </button>
          ))}
        </div>
      </div>

      {/* Experience Filter */}
      <div className="border-t border-border pt-6">
        <h3 className="font-bold text-foreground mb-4">Experience</h3>
        <div className="space-y-2">
          {[5, 8, 10].map((years) => (
            <button
              key={years}
              onClick={() => handleExperienceChange(years)}
              className={`w-full text-left px-3 py-2 rounded text-sm transition ${
                filters.minExperience === years
                  ? "bg-accent text-accent-foreground"
                  : "hover:bg-secondary text-foreground"
              }`}
            >
              {years}+ years
            </button>
          ))}
        </div>
      </div>

      {/* Free Trial Filter */}
      <div className="border-t border-border pt-6">
        <label className="flex items-center gap-3 cursor-pointer">
          <Checkbox
            checked={filters.freeTrial}
            onCheckedChange={(checked) =>
              setFilters({
                ...filters,
                freeTrial: Boolean(checked),
              })
            }
          />
          <span className="text-sm text-foreground">Free Trial Available</span>
        </label>
      </div>

      {/* Reset Button */}
      <Button
        variant="outline"
        className="w-full bg-transparent"
        onClick={() =>
          setFilters({
            category: "",
            minPrice: 0,
            maxPrice: 250000,
            minRating: 0,
            minExperience: 0,
            freeTrial: false,
          })
        }
      >
        Reset Filters
      </Button>
    </Card>
  );
}
