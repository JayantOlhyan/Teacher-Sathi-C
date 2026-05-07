"use client";

import { useState } from "react";
import Link from "next/link";
import { Play, Pause, Volume2, Maximize, Keyboard, MonitorSmartphone, ChevronDown, Share2, Clock } from "lucide-react";

export default function VideoPlayerPage() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-[#0F172A] text-white font-sans flex flex-col h-screen overflow-hidden">
      {/* Top Nav */}
      <header className="flex items-center justify-between px-6 py-4 bg-[#1E293B] border-b border-white/10 shrink-0">
        <div className="text-sm text-gray-400 flex gap-2 items-center">
          <Link href="/content/class-10" className="hover:text-white transition-colors">Class 10</Link>
          <span>&gt;</span>
          <Link href="/content/class-10" className="hover:text-white transition-colors">Science</Link>
          <span>&gt;</span>
          <Link href="/content/class-10/science/chapter-10" className="hover:text-white transition-colors">Chapter 10</Link>
          <span>&gt;</span>
          <span className="text-white font-medium">Video</span>
        </div>
        <div className="flex bg-white/10 rounded-full px-1 py-0.5 text-xs">
          <button className="px-3 py-1 rounded-full bg-white/20 text-white font-medium">EN</button>
          <button className="px-3 py-1 rounded-full text-gray-400 hover:text-white">हिं</button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:flex-row gap-6 p-6 overflow-y-auto">
        
        {/* Left: Video Player */}
        <div className="flex-1 flex flex-col">
          <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden border border-white/10 flex flex-col group shadow-2xl">
            {/* Top Overlay */}
            <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/80 to-transparent flex justify-between items-start z-10 opacity-0 group-hover:opacity-100 transition-opacity">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1">
                   <div className="w-full h-full bg-[#E1A140] rounded-full flex items-center justify-center text-white">🎓</div>
                 </div>
                 <h2 className="text-lg font-medium text-white shadow-sm">Light Reflection | Physics Classroom Classroom</h2>
               </div>
               <div className="flex gap-4">
                 <button className="flex flex-col items-center gap-1 text-xs text-white/80 hover:text-white">
                   <Clock className="w-5 h-5" /> Watch later
                 </button>
                 <button className="flex flex-col items-center gap-1 text-xs text-white/80 hover:text-white">
                   <Share2 className="w-5 h-5" /> Share
                 </button>
               </div>
            </div>

            {/* Mock Video Area */}
            <div className="flex-1 bg-[#1A4150] flex items-center justify-center relative">
               <div className="text-white text-3xl font-bold opacity-30">Video Content Placeholder</div>
               {/* YouTube watermark mock */}
               <div className="absolute bottom-16 right-4 text-white/50 text-xl font-bold flex items-center gap-1">
                 ▶ YouTube
               </div>
            </div>

            {/* Custom Controls Bottom Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent flex flex-col gap-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
              {/* Progress */}
              <div className="flex items-center gap-3">
                <div className="w-full h-1.5 bg-white/20 rounded-full cursor-pointer relative">
                  <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-red-500 rounded-full"></div>
                  <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-3 h-3 bg-red-500 rounded-full shadow"></div>
                </div>
              </div>
              
              {/* Controls Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button onClick={() => setIsPlaying(!isPlaying)} className="hover:text-gray-300">
                    {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 fill-current" />}
                  </button>
                  <span className="text-sm text-gray-300 font-medium tracking-wide">0:00 / 3:34</span>
                  
                  <div className="hidden md:flex gap-4 text-xs text-gray-400 font-medium ml-4">
                    <span className="hover:text-white cursor-pointer">Introduction</span> · 
                    <span className="hover:text-white cursor-pointer text-white">Concept</span> · 
                    <span className="hover:text-white cursor-pointer">Examples</span> · 
                    <span className="hover:text-white cursor-pointer">Summary</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="hidden sm:flex bg-white/10 rounded-full text-xs font-medium">
                    <button className="px-3 py-1 rounded-full hover:bg-white/20">0.75x</button>
                    <button className="px-3 py-1 rounded-full bg-white text-black">1x</button>
                    <button className="px-3 py-1 rounded-full hover:bg-white/20">1.25x</button>
                    <button className="px-3 py-1 rounded-full hover:bg-white/20">1.5x</button>
                  </div>
                  
                  <button className="hover:text-gray-300"><Volume2 className="w-5 h-5" /></button>
                  <button className="hover:text-gray-300"><Maximize className="w-5 h-5" /></button>
                  
                  <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors">
                    <MonitorSmartphone className="w-4 h-4" /> Classroom Mode
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Keyboard Shortcuts */}
          <div className="mt-6 flex justify-center">
            <div className="bg-[#1E293B] border border-white/5 rounded-full px-6 py-2 flex items-center gap-4 text-xs text-gray-400 font-mono">
              <span><strong className="text-white bg-white/10 px-2 py-0.5 rounded">SPACE</strong> = Play/Pause</span>
              <span><strong className="text-white bg-white/10 px-2 py-0.5 rounded">→</strong> = +10s</span>
              <span><strong className="text-white bg-white/10 px-2 py-0.5 rounded">←</strong> = -10s</span>
              <span><strong className="text-white bg-white/10 px-2 py-0.5 rounded">F</strong> = Fullscreen</span>
              <span><strong className="text-white bg-white/10 px-2 py-0.5 rounded">C</strong> = Classroom Mode</span>
            </div>
          </div>
        </div>

        {/* Right: Sidebar Content */}
        <div className="w-full lg:w-[340px] shrink-0 space-y-4">
          
          {/* Jump To */}
          <div className="bg-[#1E293B] rounded-xl p-5 border border-white/5 shadow-lg">
            <h3 className="font-semibold text-lg mb-4 text-white">Jump To</h3>
            <div className="space-y-1">
              {[
                { time: "0:00:00", label: "Light Reflection", active: true },
                { time: "0:07:03", label: "Concept Election", active: false },
                { time: "0:02:58", label: "Light Exanation", active: false },
                { time: "0:13:34", label: "Examples · Summary", active: false },
                { time: "0:35:29", label: "Summar Int", active: false },
              ].map((item, idx) => (
                <div key={idx} className={`flex items-center gap-4 p-2 rounded-lg cursor-pointer text-sm transition-colors ${item.active ? "bg-white/10 text-white font-medium" : "text-gray-400 hover:bg-white/5 hover:text-gray-200"}`}>
                  <span className="font-mono">{item.time}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Concepts */}
          <div className="bg-[#1E293B] rounded-xl p-5 border border-white/5 shadow-lg">
            <h3 className="font-semibold text-lg mb-4 text-white">Key Concepts</h3>
            <div className="space-y-2">
              {[
                "Reflection | परावर्तन",
                "Reflection | उत्साहित",
                "Reflections | सामान्य",
              ].map((concept, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 cursor-pointer hover:bg-white/10 transition-colors text-sm">
                  <span>{concept}</span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
              ))}
            </div>
          </div>

          {/* Next Up */}
          <div className="bg-[#1E293B] rounded-xl p-5 border border-white/5 shadow-lg relative overflow-hidden group cursor-pointer">
            <h3 className="font-semibold text-sm mb-3 text-white">Next Up</h3>
            <div className="flex gap-3 items-center">
              <div className="w-24 h-14 bg-black rounded-md border border-white/10 shrink-0"></div>
              <div>
                <div className="text-xs text-gray-400 mb-0.5">Chapter 10</div>
                <div className="text-sm font-medium text-white line-clamp-2 leading-tight">Class 10 | Science | Light Reflection | P...</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
