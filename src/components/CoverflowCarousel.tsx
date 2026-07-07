"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselItem {
  title: string;
  description: string;
  img: string;
}

const items: CarouselItem[] = [
  {
    title: "Residential Masterpieces",
    description: "Experience unparalleled comfort and elegance in our residential projects.",
    img: "/projects/Tuljai.png",
  },
  {
    title: "Commercial Hubs",
    description: "State-of-the-art office spaces designed to foster innovation and growth.",
    img: "/Hero.jpg",
  },
  {
    title: "Retail Experiences",
    description: "Vibrant shopping destinations that redefine the retail landscape.",
    img: "/About.jpg",
  },
  {
    title: "Smart City Integration",
    description: "Building the future with sustainable and intelligent urban planning.",
    img: "/projects/Sohamdhwani.png",
  },
  {
    title: "Premium Estates",
    description: "Exclusive properties offering luxury, privacy, and exceptional views.",
    img: "/projects/Audumbar.png",
  },
];

export default function CoverflowCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Autoplay functionality
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered, nextSlide]);

  return (
    <section className="py-32 bg-gray-50 border-y border-gray-200 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16 relative z-20">
          <h3 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] max-w-2xl font-heading">
            We are more than what you know
          </h3>
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="w-12 h-12 border border-gray-300 bg-white/50 backdrop-blur-sm flex items-center justify-center hover:bg-white hover:shadow-md transition-all rounded-full"
            >
              <ChevronLeft className="w-5 h-5 text-gray-800" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 border border-gray-300 bg-white/50 backdrop-blur-sm flex items-center justify-center hover:bg-white hover:shadow-md transition-all rounded-full"
            >
              <ChevronRight className="w-5 h-5 text-gray-800" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative h-[500px] w-full flex gap-4 overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {items.map((item, index) => {
            const isActive = index === currentIndex;

            return (
              <motion.div
                layout
                key={item.title}
                initial={false}
                animate={{
                  width: isActive ? "55%" : "calc((100% - 55% - 4rem) / 4)",
                }}
                transition={{
                  width: { 
                    duration: isActive ? 0.35 : 0.5, 
                    delay: isActive ? 0.15 : 0, 
                    ease: [0.25, 1, 0.5, 1] 
                  },
                  layout: { 
                    duration: 0.5, 
                    ease: [0.25, 1, 0.5, 1] 
                  }
                }}
                className="relative h-full rounded-2xl overflow-hidden cursor-pointer shrink-0 snap-center group shadow-xl"
                onClick={() => setCurrentIndex(index)}
              >
                {/* Background Image with Parallax / Zoom */}
                <motion.div
                  className="absolute inset-0 w-full h-full origin-center"
                  initial={false}
                  animate={{
                    scale: isActive ? 1 : 1.08,
                  }}
                  transition={{
                    duration: 0.25,
                    delay: isActive ? 0.25 : 0,
                    ease: "easeOut"
                  }}
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                
                {/* Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 mix-blend-multiply"
                  animate={{ opacity: isActive ? 1 : 0.3 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end w-full h-full z-10 pointer-events-none">
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        key={`content-${index}`}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { 
                            opacity: 1, 
                            transition: { 
                              delayChildren: 0.35, 
                              staggerChildren: 0.1 
                            } 
                          },
                          exit: { 
                            opacity: 0, 
                            transition: { duration: 0.15 } 
                          }
                        }}
                        className="flex flex-col justify-end h-full w-full max-w-lg pointer-events-auto"
                      >
                        <motion.h4 
                          variants={{
                            hidden: { opacity: 0, y: -20 },
                            visible: { 
                              opacity: 1, 
                              y: 0, 
                              transition: { duration: 0.15, ease: "easeOut" } 
                            },
                            exit: { 
                              opacity: 0, 
                              y: -20, 
                              transition: { duration: 0.15, ease: "easeIn" } 
                            }
                          }}
                          className="text-white font-bold text-3xl sm:text-4xl font-heading mb-4 drop-shadow-md"
                        >
                          {item.title}
                        </motion.h4>

                        <motion.p 
                          variants={{
                            hidden: { opacity: 0, y: -20 },
                            visible: { 
                              opacity: 1, 
                              y: 0, 
                              transition: { duration: 0.15, ease: "easeOut" } 
                            },
                            exit: { 
                              opacity: 0, 
                              y: -20, 
                              transition: { duration: 0.15, ease: "easeIn" } 
                            }
                          }}
                          className="text-gray-200 text-sm sm:text-base mb-8 leading-relaxed line-clamp-2 drop-shadow"
                        >
                          {item.description}
                        </motion.p>

                        <motion.div
                          variants={{
                            hidden: { opacity: 0, y: -20 },
                            visible: { 
                              opacity: 1, 
                              y: 0, 
                              transition: { duration: 0.15, ease: "easeOut" } 
                            },
                            exit: { 
                              opacity: 0, 
                              y: -20, 
                              transition: { duration: 0.15, ease: "easeIn" } 
                            }
                          }}
                        >
                          <button className="group/btn flex items-center text-white text-xs sm:text-sm font-bold uppercase tracking-widest hover:text-orange-400 transition-colors bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-none w-fit cursor-pointer">
                            Explore Project 
                            <ArrowRight className="w-4 h-4 ml-3 transform transition-transform duration-300 group-hover/btn:translate-x-2.5" />
                          </button>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
        <style jsx global>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>
    </section>
  );
}
