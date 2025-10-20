"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface PortfolioItem {
  id: number;
  title: string;
  image: string;
}

export default function DesignerPortfolio({
  portfolio,
}: {
  portfolio: PortfolioItem[];
}) {
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(
    null
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? portfolio.length - 1 : prev - 1));
    setSelectedImage(
      portfolio[currentIndex === 0 ? portfolio.length - 1 : currentIndex - 1]
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === portfolio.length - 1 ? 0 : prev + 1));
    setSelectedImage(
      portfolio[currentIndex === portfolio.length - 1 ? 0 : currentIndex + 1]
    );
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-6">Portfolio</h2>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {portfolio.map((item, index) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg h-48 bg-muted cursor-pointer group"
            onClick={() => {
              setSelectedImage(item);
              setCurrentIndex(index);
            }}
          >
            <Image
              src={item.image || "/placeholder.svg"}
              width={400}
              height={192}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                View
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
              <p className="text-white text-sm font-semibold">{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <Image
              width={800}
              height={600}
              src={selectedImage.image || "/placeholder.svg"}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />

            {/* Navigation */}
            <Button
              size="icon"
              variant="ghost"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white"
              onClick={handlePrevious}
            >
              <ChevronLeft size={24} />
            </Button>

            <Button
              size="icon"
              variant="ghost"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white"
              onClick={handleNext}
            >
              <ChevronRight size={24} />
            </Button>

            {/* Close Button */}
            <Button
              size="icon"
              variant="ghost"
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </Button>

            {/* Title */}
            <div className="text-center mt-4 text-white">
              <p className="text-lg font-semibold">{selectedImage.title}</p>
              <p className="text-sm text-white/70">
                {currentIndex + 1} of {portfolio.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
