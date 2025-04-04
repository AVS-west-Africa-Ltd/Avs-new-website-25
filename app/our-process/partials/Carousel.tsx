import React, { useState, useEffect, useRef } from "react";

interface CarouselProps {
  // Array of slide objects with title, description, and image URL
  slides: {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
  }[];
  autoScrollInterval?: number; // Time in ms between auto-scrolls
}

const Carousel: React.FC<CarouselProps> = ({
  slides,
  autoScrollInterval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState(1); // -1 for left, 1 for right, 0 for no direction
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const carouselRef = useRef<HTMLDivElement>(null);

  // Handle window resize for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Determine number of visible slides based on screen size
  const getVisibleSlidesCount = () => {
    if (windowWidth < 640) return 1; // Mobile
    if (windowWidth < 1024) return 3; // Tablet
    return 5; // Desktop
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (isHovering || isTransitioning) return; // Pause auto-scroll when hovering or during transitions

    const interval = setInterval(() => {
      goToNext();
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, [slides.length, autoScrollInterval, isHovering, isTransitioning]);

  // Handle manual navigation
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToNext = () => {
    setDirection(1);
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setIsTransitioning(false);
    }, 300);
  };

  const goToPrev = () => {
    setDirection(-1);
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 300);
  };

  // Create visible slides array based on screen size
  const getVisibleSlides = () => {
    const visibleCount = getVisibleSlidesCount();
    const visibleItems = [];
    const offset = Math.floor(visibleCount / 2);

    // Generate items centered around the current index
    for (let i = -offset; i <= offset; i++) {
      // For mobile (1 slide), only show current slide
      if (visibleCount === 1 && i !== 0) continue;
      
      // For tablet (3 slides), show prev, current, next
      if (visibleCount === 3 && (i < -1 || i > 1)) continue;
      
      const slideIndex = (currentIndex + i + slides.length) % slides.length;
      const isCenter = i === 0;
      
      visibleItems.push({
        slide: slides[slideIndex],
        isCenter,
        offset: i,
        position: i + offset, // Adjust position for CSS transform
      });
    }

    return visibleItems;
  };

  const getTransitionClass = (offset: number) => {
    const visibleCount = getVisibleSlidesCount();
    
    if (!isTransitioning) return "";
    
    // Mobile transitions (simpler)
    if (visibleCount === 1) {
      if (direction === 1) return "translate-x-[-100%] opacity-0";
      if (direction === -1) return "translate-x-[100%] opacity-0";
      return "";
    }
    
    // Tablet transitions
    if (visibleCount === 3) {
      if (direction === 1) {
        if (offset === -1) return "opacity-0 scale-75 -translate-x-full";
        if (offset === 0) return "translate-x-[-50%] scale-90";
        if (offset === 1) return "translate-x-[-100%] scale-95";
      }
      
      if (direction === -1) {
        if (offset === -1) return "translate-x-[100%] scale-95";
        if (offset === 0) return "translate-x-[50%] scale-90";
        if (offset === 1) return "opacity-0 scale-75 translate-x-full";
      }
    }
    
    // Desktop transitions
    if (visibleCount === 5) {
      if (direction === 1) {
        if (offset === -2) return "opacity-0 scale-75 -translate-x-full";
        if (offset === -1) return "translate-x-[-50%] scale-90";
        if (offset === 0) return "translate-x-[-100%] scale-95";
        if (offset === 1) return "translate-x-[-150%] scale-100";
        if (offset === 2) return "translate-x-[-50%] scale-95";
      }
      
      if (direction === -1) {
        if (offset === -2) return "translate-x-[50%] scale-95";
        if (offset === -1) return "translate-x-[150%] scale-100";
        if (offset === 0) return "translate-x-[100%] scale-95";
        if (offset === 1) return "translate-x-[50%] scale-90";
        if (offset === 2) return "opacity-0 scale-75 translate-x-full";
      }
    }
    
    return "";
  };

  // Navigation buttons
  const renderNavButtons = () => (
    <>
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white rounded-full p-2 z-20"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white rounded-full p-2 z-20"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </>
  );

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      ref={carouselRef}
    >
      {/* Main carousel */}
      <div className="flex items-center justify-center">
        <div className="relative overflow-hidden w-full">
          <div className="flex justify-center items-center transition-all duration-500 ease-in-out">
            {getVisibleSlides().map(({ slide, isCenter, offset, position }) => {
              // Define styling based on position and screen size
              const visibleCount = getVisibleSlidesCount();
              
              // Width calculation based on device
              let width = 30; // Desktop center default
              if (visibleCount === 5) {
                width = isCenter ? 30 : 17.5; // Desktop
              } else if (visibleCount === 3) {
                width = isCenter ? 50 : 30; // Tablet
              } else {
                width = 80; // Mobile (single slide)
              }
              
              const zIndex = isCenter ? 10 : 5;
              const opacity = isCenter ? 1 : 0.7;
              const scale = isCenter ? 1 : 0.85;
              
              // Adjust styles for different layouts
              let style = "";
              
              if (visibleCount === 5) {
                // Desktop styles (trapezoid effect)
                style = offset === -2
                  ? "h-[460px] trapezoidB my-4"
                  : offset === -1
                  ? "h-[386px] trapezoidB"
                  : offset === 0
                  ? "h-[346px]"
                  : offset === 1
                  ? "h-[386px]  trapezoid"
                  : "h-[460px] trapezoid my-4";
              } else if (visibleCount === 3) {
                // Tablet styles (simpler trapezoid)
                style = offset === -1
                  ? "h-[386px] trapezoidB"
                  : offset === 0
                  ? "h-[346px]"
                  : "h-[386px] trapezoid";
              } else {
                // Mobile style (single slide)
                style = "h-[346px]";
              }
              
              const transitionClass = getTransitionClass(offset);

              return (
                <div
                  key={`${slide.id}-${offset}`}
                  className={`px-1 transition-all duration-500 ease-in-out `}
                  style={{
                    width: `${width}%`,
                    zIndex,
                  }}
                >
                  <div
                    className={`bg-white rounded-2xl overflow-hidden ${style}`}
                    style={{
                      backgroundImage: `url(${slide.imageUrl})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {/* <div className="flex flex-col justify-end h-full bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{slide.title}</h3>
                      <p className="text-sm md:block">{slide.description}</p>
                    </div> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Navigation buttons */}
      {renderNavButtons()}
      
      {/* Dots indicator */}
      <div className="flex justify-center mt-4">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 mx-1 rounded-full ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;