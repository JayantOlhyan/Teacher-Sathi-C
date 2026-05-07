"use client";

import { useState } from "react";
import { ArrowRight, Check, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function QuickQuizPage() {
  const [selectedOption, setSelectedOption] = useState<string | null>("B");

  return (
    <div className="min-h-screen bg-[#10142A] text-white font-sans flex flex-col items-center py-10 px-4">
      
      {/* Top Progress Bar */}
      <div className="w-full max-w-4xl flex items-center justify-between text-sm font-medium mb-2">
        <span className="text-gray-300">Progress 23%</span>
        <span className="text-gray-300">Q 7 of 30</span>
        <div className="bg-[#1E293B] border border-white/10 px-3 py-1 rounded flex items-center gap-2">
          <span className="text-gray-400">Live score</span>
          <span className="flex items-center text-success"><span className="font-bold mr-0.5">7</span><Check className="w-3 h-3 stroke-[3]" /></span>
          <span className="flex items-center text-danger"><span className="font-bold mr-0.5">2</span><X className="w-3 h-3 stroke-[3]" /></span>
        </div>
      </div>
      <div className="w-full max-w-4xl h-2 bg-[#1E293B] rounded-full overflow-hidden mb-16">
        <div className="h-full bg-[#3B82F6] rounded-full w-[23%]"></div>
      </div>

      {/* Quiz Card */}
      <div className="w-full max-w-3xl relative">
        {/* Floating Q Badge */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#5B50A1] text-white text-xl font-bold px-6 py-2 rounded-full border-4 border-[#10142A] z-10 shadow-lg">
          Q07
        </div>

        <div className="bg-[#1C203B] border border-white/5 rounded-3xl p-8 sm:p-12 shadow-2xl relative">
          
          {/* Difficulty Badge */}
          <div className="absolute top-6 right-8 bg-[#D97706]/20 text-[#D97706] text-xs font-bold px-3 py-1 rounded-full">
            Medium
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-center mt-6 mb-10 text-balance">
            Which of the following correctly describes the law of reflection?
          </h2>

          <div className="space-y-4 mb-8">
            {/* Option A - Incorrect */}
            <div>
              <div className="flex items-center gap-4 bg-danger/10 border border-danger p-4 rounded-2xl cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-danger/20 text-danger flex items-center justify-center font-bold shrink-0">A</div>
                <div className="text-danger font-medium text-lg">The angle of incidence always equals the corrects of reflection.</div>
              </div>
              <div className="text-danger font-medium text-sm flex items-center gap-1 mt-2 ml-2">
                <X className="w-4 h-4 stroke-[3]" /> Incorrect
              </div>
            </div>

            {/* Option B - Correct */}
            <div>
              <div className="flex items-center gap-4 bg-success/10 border border-success p-4 rounded-2xl cursor-pointer relative overflow-hidden">
                {/* Simulated Confetti behind text */}
                <div className="absolute right-0 top-0 w-32 h-32 bg-[url('https://cdn-icons-png.flaticon.com/512/3253/3253018.png')] bg-contain bg-no-repeat bg-right opacity-20 pointer-events-none"></div>
                <div className="w-8 h-8 rounded-full bg-success text-white flex items-center justify-center font-bold shrink-0 relative z-10 shadow-sm">B</div>
                <div className="text-white font-medium text-lg relative z-10">The angle of incidence always equals the angle of reflection.</div>
              </div>
              <div className="text-success font-medium text-sm flex items-center gap-1 mt-2 ml-2">
                <Check className="w-4 h-4 stroke-[3]" /> Correct! Well done 🎉
              </div>
            </div>

            {/* Option C - Default */}
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl cursor-pointer hover:bg-white/10 transition-colors">
              <div className="w-8 h-8 rounded-full bg-white/10 text-gray-300 flex items-center justify-center font-bold shrink-0">C</div>
              <div className="text-gray-300 font-medium text-lg">The angle of incidence always thts angle of reflection, measurmal.</div>
            </div>

            {/* Option D - Default */}
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl cursor-pointer hover:bg-white/10 transition-colors">
              <div className="w-8 h-8 rounded-full bg-white/10 text-gray-300 flex items-center justify-center font-bold shrink-0">D</div>
              <div className="text-gray-300 font-medium text-lg">The angle of incidence always equalt angle of reflection.</div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-6 pt-6 border-t border-white/10">
            <p className="text-gray-400 text-sm flex-1 leading-relaxed">
              The angle of incidence always equals the angle of reflection, measured from the normal.
            </p>
            <Button className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-6 py-6 rounded-xl text-lg font-bold shrink-0 flex items-center gap-2 shadow-lg">
              Next Question <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}
