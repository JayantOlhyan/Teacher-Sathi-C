"use client";

import React, { useState, useEffect } from "react";

export default function SkeletonLoader() {
  const [showSkeleton, setShowSkeleton] = useState(false);

  useEffect(() => {
    // Wait 300ms before showing skeleton to prevent flashing on fast connections
    const delayTimeoutId = setTimeout(() => {
      setShowSkeleton(true);
    }, 300);
    
    return () => {
      clearTimeout(delayTimeoutId);
    };
  }, []);

  if (!showSkeleton) {
    return null; // Return empty until 300ms passes
  }

  return (
    <div className="relative w-full min-h-[calc(100vh-64px)] bg-[#F7F9F4] animate-in fade-in duration-300">
      {/* SHIMMER ANIMATION STYLES */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmerSweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .skeleton-block {
          position: relative;
          overflow: hidden;
          background-color: #E2E8DE; /* Base: slightly darker than #F7F9F4 */
        }
        @media (prefers-reduced-motion: no-preference) {
          .skeleton-block::after {
            content: '';
            position: absolute;
            inset: 0;
            transform: translateX(-100%);
            background: linear-gradient(
              90deg,
              transparent 0%,
              rgba(22, 101, 52, 0.06) 50%, /* Highlight: Subtle brand accent (#166534) */
              transparent 100%
            );
            animation: shimmerSweep 1.5s ease-in-out infinite;
          }
        }
      `}} />

      {/* SKELETON LAYER */}
      <div className="w-full">
        {/* HERO SECTION */}
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-12">
          <div className="max-w-2xl">
            <div className="skeleton-block w-[85%] h-12 md:h-14 rounded-lg mb-4"></div>
            <div className="skeleton-block w-full h-5 rounded-md mb-3"></div>
            <div className="skeleton-block w-[70%] h-5 rounded-md"></div>
          </div>
        </div>

        {/* CARD GRID SECTION */}
        <div className="max-w-6xl mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white border border-[#DCE4D7] rounded-2xl p-6 h-[240px] flex flex-col shadow-sm">
                <div className="skeleton-block w-14 h-14 rounded-xl mb-5"></div>
                <div className="skeleton-block w-3/4 h-6 rounded-md mb-3"></div>
                <div className="skeleton-block w-1/2 h-4 rounded-md mb-auto"></div>
                <div className="skeleton-block w-full h-10 mt-6 rounded-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
