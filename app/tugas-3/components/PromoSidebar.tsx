"use client";

import { useState, useEffect } from "react";

export default function PromoSidebar() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const bannerImages = [
    "/banner.png",
    "/banner.png",
    "/banner.png",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [bannerImages.length]);

  return (
    <aside className="w-full lg:w-80 space-y-6 shrink-0 mt-4 lg:mt-0">
      <div className="bg-gradient-to-br from-[#FF8A3D] to-orange-400 rounded-3xl p-5 text-white shadow-xl flex flex-row items-center gap-3 overflow-hidden relative">
        <div className="relative flex-shrink-0 w-12 h-12 flex items-center justify-center mx-1 lg:mx-2">
          <div className="absolute w-[180%] h-[180%] bg-white/10 rounded-full"></div>
          <div className="absolute w-[140%] h-[140%] bg-white/20 rounded-full"></div>
          <div className="absolute w-full h-full bg-white/30 rounded-full"></div>
          <span className="text-2xl relative z-10">🏆</span>
        </div>

        <div className="flex-grow flex flex-col items-start">
          <p className="text-xs font-medium leading-snug text-left">
            Take your learning to the next level with Hamim
          </p>
          <span className="font-black bg-white text-[#FF8A3D] px-2 py-0.5 rounded text-[10px] mt-1.5 shadow-sm tracking-wide">
            PRO
          </span>
        </div>

        <button className="flex-shrink-0 bg-white text-[#FF8A3D] font-bold py-2.5 px-4 lg:px-5 rounded-2xl shadow-sm hover:bg-orange-50 transition text-xs lg:text-sm">
          Start
        </button>
      </div>

      <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col relative group cursor-pointer h-48 sm:h-56 lg:h-64">
        
        <div 
          className="flex w-full h-full transition-transform duration-500 ease-out" 
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {bannerImages.map((src, idx) => (
            <div key={idx} className="w-full h-full flex-shrink-0 relative">
              <img 
                src={src} 
                alt={`Iklan Banner ${idx + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        
        <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2 z-10">
          {bannerImages.map((_, idx) => (
            <button 
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentSlide(idx);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentSlide === idx ? "w-4 bg-[#FF8A3D]" : "w-1.5 bg-white/70 hover:bg-white"
              }`}
              aria-label={`Pindah ke banner ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </aside>
  );
}