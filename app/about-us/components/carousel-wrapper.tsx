import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';


interface CarouselProps {
    children: React.ReactNode;
  onPageChange?: (pageIndex: number) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
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
    onPageChange,
    currentPage,
    setCurrentPage 
  }) => {
    const pages = React.Children.toArray(children);
  
    const nextPage = (): void => {
      if (currentPage < pages.length - 1) {
        setCurrentPage(currentPage + 1);
        onPageChange?.(currentPage + 1);
      }
    };
  
    const goToPage = (pageIndex: number): void => {
      setCurrentPage(pageIndex);
      onPageChange?.(pageIndex);
    };
  
    return (
      <div className="relative min-h-screen">
        <div className="w-full">
          {pages[currentPage]}
        </div>
  
        {currentPage < pages.length - 1 && (
          <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-8 z-[999]">
            <NavigationDots
              totalPages={pages.length}
              currentPage={currentPage}
              onPageChange={goToPage}
            />
            <NavigationArrow onNext={nextPage} />
          </div>
        )}
      </div>
    );
  };
  
  export default Carousel;