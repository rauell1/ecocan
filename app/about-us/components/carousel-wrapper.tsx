import React, { useState, useEffect, useCallback } from 'react';
import { ChevronRight } from 'lucide-react';

interface CarouselProps {
  children: React.ReactNode;
  showArrow?: Boolean;
  onPageChange?: (pageIndex: number) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  autoScrollInterval?: number; // Time in milliseconds between slides
  autoScroll?: boolean; // Enable/disable auto-scroll
}

interface NavigationDotsProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (pageIndex: number) => void;
}

interface NavigationArrowProps {
  onNext: () => void;
  ariaLabel?: string;
}

const NavigationDots: React.FC<NavigationDotsProps> = ({ 
  totalPages, 
  currentPage, 
  onPageChange 
}) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index)}
          className={`h-2 rounded-full transition-all duration-300 ${
            currentPage === index 
              ? 'bg-green-500 w-16' 
              : 'bg-gray-300 w-2'
          }`}
          aria-label={`Go to slide ${index + 1}`}
          aria-current={currentPage === index ? 'true' : 'false'}
        />
      ))}
    </div>
  );
};

const NavigationArrow: React.FC<NavigationArrowProps> = ({ 
  onNext, 
  ariaLabel = "Next slide" 
}) => {
  return (
    <button
      onClick={onNext}
      className="absolute right-8 p-2 rounded-full bg-gray-200/80 hover:bg-gray-300/80 transition-colors"
      aria-label={ariaLabel}
    >
      <ChevronRight className="w-6 h-6" />
    </button>
  );
};

const Carousel: React.FC<CarouselProps> = ({ 
  children,
  showArrow = true, 
  onPageChange,
  currentPage,
  setCurrentPage,
  autoScrollInterval = 2000,
  autoScroll = true
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const pages = React.Children.toArray(children);

  const nextPage = useCallback((): void => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
      onPageChange?.(currentPage + 1);
    } else {
      // Reset to first page when reaching the end
      setCurrentPage(0);
      onPageChange?.(0);
    }
  }, [currentPage, pages.length, setCurrentPage, onPageChange]);

  const goToPage = (pageIndex: number): void => {
    setCurrentPage(pageIndex);
    onPageChange?.(pageIndex);
  };

  // Auto-scroll effect
  useEffect(() => {
    if (!autoScroll || isPaused) return;

    const interval = setInterval(() => {
      nextPage();
    }, autoScrollInterval);

    // Cleanup interval on component unmount or when dependencies change
    return () => clearInterval(interval);
  }, [autoScroll, isPaused, nextPage, autoScrollInterval]);

  return (
    <div 
      className="relative min-h-screen"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="w-full">
        {pages[currentPage]}
      </div>

      <div className="absolute bottom-24 lg:bottom-8 left-0 right-0 flex justify-center items-center gap-8 z-[999]">
        <NavigationDots
          totalPages={pages.length}
          currentPage={currentPage}
          onPageChange={goToPage}
        />
        {showArrow && currentPage < pages.length - 1 && (
          <NavigationArrow onNext={nextPage} />
        )}
      </div>
    </div>
  );
};

export default Carousel;