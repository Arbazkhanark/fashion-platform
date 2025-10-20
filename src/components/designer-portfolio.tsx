// "use client";

// import { useState } from "react";
// import { ChevronLeft, ChevronRight, X } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";

// interface PortfolioItem {
//   id: number;
//   title: string;
//   image: string;
// }

// export default function DesignerPortfolio({
//   portfolio,
// }: {
//   portfolio: PortfolioItem[];
// }) {
//   const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(
//     null
//   );
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrevious = () => {
//     setCurrentIndex((prev) => (prev === 0 ? portfolio.length - 1 : prev - 1));
//     setSelectedImage(
//       portfolio[currentIndex === 0 ? portfolio.length - 1 : currentIndex - 1]
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev === portfolio.length - 1 ? 0 : prev + 1));
//     setSelectedImage(
//       portfolio[currentIndex === portfolio.length - 1 ? 0 : currentIndex + 1]
//     );
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-bold text-foreground mb-6">Portfolio</h2>

//       {/* Gallery Grid */}
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
//         {portfolio.map((item, index) => (
//           <div
//             key={item.id}
//             className="relative overflow-hidden rounded-lg h-48 bg-muted cursor-pointer group"
//             onClick={() => {
//               setSelectedImage(item);
//               setCurrentIndex(index);
//             }}
//           >
//             <Image
//               src={item.image || "/placeholder.svg"}
//               width={400}
//               height={192}
//               alt={item.title}
//               className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//             />
//             <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
//               <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
//                 View
//               </span>
//             </div>
//             <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
//               <p className="text-white text-sm font-semibold">{item.title}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Lightbox Modal */}
//       {selectedImage && (
//         <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
//           <div className="relative max-w-4xl w-full">
//             <Image
//               width={800}
//               height={600}
//               src={selectedImage.image || "/placeholder.svg"}
//               alt={selectedImage.title}
//               className="w-full h-auto rounded-lg"
//             />

//             {/* Navigation */}
//             <Button
//               size="icon"
//               variant="ghost"
//               className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white"
//               onClick={handlePrevious}
//             >
//               <ChevronLeft size={24} />
//             </Button>

//             <Button
//               size="icon"
//               variant="ghost"
//               className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white"
//               onClick={handleNext}
//             >
//               <ChevronRight size={24} />
//             </Button>

//             {/* Close Button */}
//             <Button
//               size="icon"
//               variant="ghost"
//               className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white"
//               onClick={() => setSelectedImage(null)}
//             >
//               <X size={24} />
//             </Button>

//             {/* Title */}
//             <div className="text-center mt-4 text-white">
//               <p className="text-lg font-semibold">{selectedImage.title}</p>
//               <p className="text-sm text-white/70">
//                 {currentIndex + 1} of {portfolio.length}
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


















"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X, Heart, Eye, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface PortfolioItem {
  id: number;
  title: string;
  image: string;
  category: string;
  likes: number;
  description: string;
}

export default function DesignerPortfolio({
  portfolio,
}: {
  portfolio: PortfolioItem[];
}) {
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const openModal = (item: PortfolioItem, index: number) => {
    setSelectedImage(item);
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const handlePrevious = () => {
    const newIndex = currentIndex === 0 ? portfolio.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(portfolio[newIndex]);
  };

  const handleNext = () => {
    const newIndex = currentIndex === portfolio.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(portfolio[newIndex]);
  };

  // Handle click outside modal to close
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Creative Portfolio
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Explore {portfolio.length} stunning designs and transformations
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group cursor-pointer"
              onClick={() => openModal(item, index)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-rose-100 to-amber-100 dark:from-gray-700 dark:to-gray-800 h-64">
                {/* Actual Image with Fallback */}
                <div className="w-full h-full relative">
                  <Image
                    src={item.image || "/api/placeholder/400/400"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      // If image fails to load, show fallback
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  
                  {/* Fallback Content - Shows if image fails to load */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-rose-200 to-amber-200 dark:from-gray-600 dark:to-gray-800">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-white text-2xl">👗</span>
                      </div>
                      <span className="text-gray-600 dark:text-gray-300 font-medium">{item.category}</span>
                    </div>
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-center">
                    <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-4 mx-4 shadow-lg">
                      <h3 className="font-bold text-gray-900 dark:text-white mb-1 text-sm">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-xs mb-2 line-clamp-2">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-rose-500 font-semibold bg-rose-50 dark:bg-rose-900/30 px-2 py-1 rounded-full">
                          {item.category}
                        </span>
                        <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                          <Heart className="w-3 h-3" />
                          <span>{item.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {isModalOpen && selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={handleBackdropClick}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-6xl w-full max-h-[90vh] bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
              >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {selectedImage.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      {selectedImage.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                      onClick={closeModal}
                    >
                      <X size={24} />
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col lg:flex-row">
                  {/* Image Section */}
                  <div className="flex-1 p-8 flex items-center justify-center bg-gradient-to-br from-rose-50 to-amber-50 dark:from-gray-800 dark:to-gray-900 min-h-[500px]">
                    <div className="relative w-full h-96 max-w-2xl">
                      <Image
                        src={selectedImage.image || "/api/placeholder/600/400"}
                        alt={selectedImage.title}
                        fill
                        className="object-contain rounded-2xl shadow-lg"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                      
                      {/* Fallback if image fails */}
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-rose-200 to-amber-200 dark:from-gray-700 dark:to-gray-800 rounded-2xl">
                        <div className="text-center">
                          <div className="w-32 h-32 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-white text-4xl">👑</span>
                          </div>
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            {selectedImage.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300">
                            {selectedImage.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Info Section */}
                  <div className="lg:w-96 p-8 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700">
                    <div className="space-y-6">
                      {/* Category & Stats */}
                      <div>
                        <span className="inline-flex items-center gap-2 bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 px-4 py-2 rounded-full font-semibold text-sm">
                          {selectedImage.category}
                        </span>
                        <div className="flex items-center gap-6 mt-4 text-gray-600 dark:text-gray-400">
                          <div className="flex items-center gap-2">
                            <Heart className="w-5 h-5" />
                            <span>{selectedImage.likes} likes</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Eye className="w-5 h-5" />
                            <span>1.2k views</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          About this Design
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                          {selectedImage.description}
                        </p>
                      </div>

                      {/* Actions */}
                      <div className="space-y-3">
                        <Button className="w-full bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white">
                          <Heart className="w-4 h-4 mr-2" />
                          Like Design
                        </Button>
                        <Button variant="outline" className="w-full border-gray-300 dark:border-gray-600">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 text-gray-900 dark:text-white backdrop-blur-sm border border-gray-300 dark:border-gray-600 shadow-lg"
                  onClick={handlePrevious}
                >
                  <ChevronLeft size={24} />
                </Button>

                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 text-gray-900 dark:text-white backdrop-blur-sm border border-gray-300 dark:border-gray-600 shadow-lg"
                  onClick={handleNext}
                >
                  <ChevronRight size={24} />
                </Button>

                {/* Counter */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                  <span className="text-sm font-medium">
                    {currentIndex + 1} of {portfolio.length}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Add CSS for line clamp */}
      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
}