import  { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides, dashboardCards } from '../constants/index'; // Import configuration arrays

/**
 * HeroSection Component
 * Features an interactive state-controlled background slider carousel panel
 * overlayed by a full-width 4-column responsive category dashboard card container grid.
 */
export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Navigates to the previous slide item with loop fallback protection
  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  // Navigates to the next slide item with loop fallback protection
  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full relative bg-gray-200 min-h-screen">
      
      
      <div className={`w-full relative h-[250px] sm:h-[350px] lg:h-[440px] bg-gradient-to-r ${heroSlides[currentSlide].bgClass} transition-all duration-700 ease-in-out overflow-hidden`}>
        
        {/* Dynamic Image / Content layer rendering based on selected index slider state */}
        <div className="w-full h-full flex flex-row items-start justify-between px-6 sm:px-16 pt-8 sm:pt-14 select-none">
          
          {/* Active slide typography content */}
          <div className="max-w-md md:max-w-xl z-10 animate-fadeIn">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tight">
              {heroSlides[currentSlide].title}
            </h2>
          </div>

          {/* Dynamic Mock Visual Backdrop Graphics Panel */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden md:block">
            <img 
              src={heroSlides[currentSlide].image} 
              alt="Promotion showcase graphic illustration" 
              className="w-full h-full object-cover opacity-90 transition-opacity duration-500" 
            />
            {/* Soft gradient fade overlay to blend with the block color */}
            <div className={`absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-transparent to-transparent`}></div>
          </div>

        </div>

        {/* Action Carousel Control Buttons */}
        <button 
          onClick={handlePrevSlide} 
          className="absolute left-0 top-0 bottom-0 px-4 bg-transparent hover:bg-black/5 hover:ring-2 hover:ring-inset hover:ring-amber-500 text-slate-800 transition-all duration-150 z-30 group"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-10 h-10 stroke-[1.5] group-active:scale-90 transition-transform" />
        </button>

        <button 
          onClick={handleNextSlide} 
          className="absolute right-0 top-0 bottom-0 px-4 bg-transparent hover:bg-black/5 hover:ring-2 hover:ring-inset hover:ring-amber-500 text-slate-800 transition-all duration-150 z-30 group"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-10 h-10 stroke-[1.5] group-active:scale-90 transition-transform" />
        </button>

        {/* Ambient bottom shield masking overlay creating a fade down directly into the content container grid */}
        <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-gray-200 to-transparent pointer-events-none z-10"></div>
      </div>

      {/* =========================================================================
          PART 2: OVERLAPPING CATEGORY INTERACTION GRID (2x2 SUB-ITEMS STRUCTURE)
         ========================================================================= */}
      <div className="relative z-20 max-w-[1440px] mx-auto px-4 -mt-20 sm:var(--negative-margin) lg:-mt-36 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {dashboardCards.map((card) => (
            <div key={card.id} className="bg-white p-5 rounded-none shadow-md flex flex-col text-gray-900 min-h-[400px]">
              <h3 className="text-base sm:text-lg font-bold tracking-tight text-gray-900 mb-3 leading-snug min-h-[48px]">
                {card.title}
              </h3>
              
              {/* Variant Style A: Standard Full-Width Single Feature Card Component */}
              {card.type === 'single' && (
                <div className="w-full flex-1 overflow-hidden cursor-pointer group">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-cover max-h-[260px] group-hover:opacity-95 transition-opacity"
                  />
                </div>
              )}

              {/* Variant Style B: 4 Quadrant Split Grid Component Layout (2x2 Display Matrix) */}
              {card.type === 'grid-2x2' && (
                <div className="grid grid-cols-2 gap-x-3 gap-y-4 flex-1 my-1">
                  {card.items.map((subItem, index) => (
                    <div key={index} className="flex flex-col cursor-pointer group justify-between">
                      <div className="w-full h-[100px] overflow-hidden bg-gray-100 flex items-center justify-center">
                        <img 
                          src={subItem.image} 
                          alt={subItem.name} 
                          className="w-full h-full object-cover group-hover:scale-102 transition duration-200"
                        />
                      </div>
                      <span className="text-[11px] font-medium text-gray-700 mt-1 block truncate leading-none">
                        {subItem.name}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Sub-Card Footer Redirection Link */}
              <a 
                href={`#explore-${card.id}`} 
                className="text-xs font-semibold text-teal-700 hover:text-orange-600 hover:underline pt-4 mt-auto block decoration-none"
              >
                {card.linkText}
              </a>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}
