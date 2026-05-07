"use client";

import { useState } from "react";
import { Flag, Lock, ArrowRight, ArrowLeft } from "lucide-react";

export default function ChapterTestPage() {
  const [selectedOption, setSelectedOption] = useState<string | null>("B");

  // Grid items 1-25
  const grid = Array.from({ length: 25 }, (_, i) => {
    const num = i + 1;
    let state = "unanswered";
    if (num < 7) state = "answered";
    if (num === 7) state = "current";
    if (num === 8) state = "flagged";
    return { num, state };
  });

  return (
    <div className="min-h-screen bg-[#F5F7F9] font-sans text-gray-900 flex flex-col">
      
      {/* Top Navigation Bar */}
      <header className="bg-white border-b border-gray-200 px-6 sm:px-8 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex-1">
          <h1 className="text-xl sm:text-2xl font-bold text-[#1E293B]">
            Class 10 Science — <br className="sm:hidden" /> Chapter Test (Hard)
          </h1>
        </div>
        
        <div className="flex-1 flex justify-center">
          <div className="text-4xl font-bold text-[#DC2626] font-mono tracking-wider">
            24:17
          </div>
        </div>

        <div className="flex-1 flex justify-end items-start gap-4">
          <div className="text-2xl font-bold mt-1">
            Q 7 / 25
          </div>
          <div className="hidden sm:grid grid-cols-6 gap-1 border p-1 rounded bg-white">
            {grid.map((item) => {
              let classes = "w-6 h-6 flex items-center justify-center text-[10px] font-bold rounded-sm border ";
              if (item.state === "answered") classes += "bg-[#2563EB] text-white border-[#2563EB]";
              else if (item.state === "current") classes += "bg-blue-50 text-[#2563EB] border-[#2563EB]";
              else if (item.state === "flagged") classes += "bg-white text-gray-600 border-gray-200 relative";
              else classes += "bg-white text-gray-600 border-gray-200";

              return (
                <div key={item.num} className={classes}>
                  {item.num}
                  {item.state === "flagged" && <div className="absolute -top-1 -right-1 text-yellow-500 text-[10px]">★</div>}
                </div>
              );
            })}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4 py-12">
        <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden flex flex-col">
          
          <div className="p-8 sm:p-10 flex-1">
            <div className="flex justify-between items-start mb-8">
              <h2 className="text-xl sm:text-2xl font-medium text-gray-900 leading-relaxed">
                Which lens is used to correct myopia?
              </h2>
              <div className="w-3 h-3 rounded-full bg-red-500 shrink-0 mt-2"></div>
            </div>

            <div className="space-y-3">
              {[
                { id: "A", text: "Convex lens" },
                { id: "B", text: "Concave lens" },
                { id: "C", text: "Bifocal lens" },
                { id: "D", text: "Cylindrical lens" },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedOption(opt.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-lg border text-left transition-colors ${selectedOption === opt.id ? "border-[#2563EB] bg-blue-50" : "border-gray-200 hover:bg-gray-50 bg-white"}`}
                >
                  <span className="w-6 font-semibold text-gray-800">{opt.id}</span>
                  <span className="text-gray-700">{opt.text}</span>
                </button>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 font-medium">
                Flag for Review <Flag className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Bottom Controls */}
          <div className="grid grid-cols-2 border-t border-gray-200 divide-x divide-gray-200">
            <button className="flex items-center justify-center gap-2 py-4 text-gray-600 hover:bg-gray-50 font-medium">
              <ArrowLeft className="w-4 h-4" /> PREV
            </button>
            <button className="flex items-center justify-center gap-2 py-4 text-gray-900 hover:bg-gray-50 font-medium">
              NEXT <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </main>

      {/* Fixed Submit Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-[#DC2626] hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold shadow-lg flex items-center gap-2 transition-transform hover:scale-105">
          Submit Test <Lock className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
