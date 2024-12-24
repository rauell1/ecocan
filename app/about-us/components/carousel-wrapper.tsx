import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';

interface CarouselProps {
  children: React.ReactNode;
  showArrow?: Boolean;
  onPageChange?: (pageIndex: number) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  autoScrollInterval?: number;
  autoScroll?: boolean;
  enableScrollTracking?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  showArrow = true,
  onPageChange,
  currentPage,
  setCurrentPage,
  autoScrollInterval = 5000,
  autoScroll = true,
  enableScrollTracking = true,
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const pages = React.Children.toArray(children);
  const scrollTimeout = useRef<NodeJS.Timeout>();
  const lastScrollTime = useRef<number>(0);

  const nextPage = useCallback((): void => {
    if (currentPage < pages.length - 1 && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentPage(currentPage + 1);
      onPageChange?.(currentPage + 1);
      
      // Reset transition lock after animation
      setTimeout(() => setIsTransitioning(false), 1000);
    }
  }, [currentPage, pages.length, setCurrentPage, onPageChange, isTransitioning]);

  const prevPage = useCallback((): void => {
    if (currentPage > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentPage(currentPage - 1);
      onPageChange?.(currentPage - 1);
      
      // Reset transition lock after animation
      setTimeout(() => setIsTransitioning(false), 1000);
    }
  }, [currentPage, setCurrentPage, onPageChange, isTransitioning]);

  const handleScroll = useCallback(
    (event: WheelEvent) => {
      const now = Date.now();
      const content = document.querySelector('.carousel-content') as HTMLElement;
      
      // Prevent scroll handling during transitions
      if (isTransitioning) {
        event.preventDefault();
        return;
      }

      // Throttle scroll events
      if (now - lastScrollTime.current < 1000) {
        event.preventDefault();
        return;
      }

      // Clear any existing timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      const isAtTop = content.scrollTop <= 0;
      const isAtBottom = 
        Math.abs(content.scrollHeight - content.scrollTop - content.clientHeight) < 1;

      scrollTimeout.current = setTimeout(() => {
        if (event.deltaY > 0 && isAtBottom) {
          // Scrolling down and at bottom of content
          nextPage();
          lastScrollTime.current = now;
        } else if (event.deltaY < 0 && isAtTop) {
          // Scrolling up and at top of content
          prevPage();
          lastScrollTime.current = now;
        }
      }, 50); // Small delay to ensure smooth scrolling
    },
    [nextPage, prevPage, isTransitioning]
  );

  useEffect(() => {
    if (enableScrollTracking) {
      window.addEventListener('wheel', handleScroll, { passive: false });
      return () => {
        window.removeEventListener('wheel', handleScroll);
        if (scrollTimeout.current) {
          clearTimeout(scrollTimeout.current);
        }
      };
    }
  }, [handleScroll, enableScrollTracking]);

  useEffect(() => {
    if (!autoScroll || isPaused) return;

    const interval = setInterval(() => {
      nextPage();
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, [autoScroll, isPaused, nextPage, autoScrollInterval]);

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        className="w-full h-full carousel-content overflow-y-auto"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.8 }}
        key={currentPage}
      >
        {pages[currentPage]}
      </motion.div>

      <div className="absolute bottom-24 lg:bottom-8 left-0 right-0 flex justify-center items-center gap-8 z-[999]">
        <div className="flex gap-1">
          {pages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentPage === index ? 'bg-green-500 w-16' : 'bg-gray-300 w-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={currentPage === index ? 'true' : 'false'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;