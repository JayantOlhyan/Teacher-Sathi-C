"use client";

import Link from "next/link";
import { Play, CheckSquare, MessageSquare, Download, Lock, FileText, BrainCircuit, MonitorSmartphone, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ChapterHubPage({ params }: { params: { grade: string, subject: string, chapter: string } }) {
  
  const resources = [
    {
      title: "AI Chapter Video",
      subtitle: "",
      icon: Play,
      iconColor: "text-[#3B82F6]",
      bgColor: "bg-[#1E293B]",
      borderColor: "border-blue-500",
      cta: "Watch Video",
      badge: "18 min",
      locked: false,
    },
    {
      title: "Quick MCQ Quiz",
      subtitle: "30 Questions · Instant Feedback",
      icon: CheckSquare,
      iconColor: "text-[#8B5CF6]",
      bgColor: "bg-[#1E293B]",
      borderColor: "border-purple-500",
      cta: "Take Quiz",
      locked: false,
    },
    {
      title: "Short & Long Q&A bank",
      subtitle: "Comprehensive question bank",
      icon: MessageSquare,
      iconColor: "text-[#10B981]",
      bgColor: "bg-[#1E293B]",
      borderColor: "border-emerald-500",
      cta: "View Q&A",
      locked: false,
    },
    {
      title: "Summary Video",
      subtitle: "5 min recap",
      icon: Play,
      iconColor: "text-[#F59E0B]",
      bgColor: "bg-[#1E293B]",
      borderColor: "border-amber-500",
      cta: "Watch Summary",
      locked: false,
    },
    {
      title: "Customised Test",
      subtitle: <span className="flex gap-1"><span className="text-green-500 bg-green-500/10 px-1 rounded">Easy</span>/<span className="text-yellow-500 bg-yellow-500/10 px-1 rounded">Medium</span>/<span className="text-red-500 bg-red-500/10 px-1 rounded">Hard</span></span>,
      icon: FileText,
      iconColor: "text-[#EF4444]",
      bgColor: "bg-[#1E293B]",
      borderColor: "border-red-500",
      cta: "Start Test",
      locked: true,
    },
    {
      title: "Mind Map",
      subtitle: "Visual overview",
      icon: BrainCircuit,
      iconColor: "text-[#10B981]",
      bgColor: "bg-[#1E293B]",
      borderColor: "border-emerald-500",
      cta: "View Mind Map",
      locked: true,
      hasPreview: true,
    },
    {
      title: "Cheat Sheet",
      subtitle: "1-page · Print-ready",
      icon: FileText,
      iconColor: "text-[#EC4899]",
      bgColor: "bg-[#1E293B]",
      borderColor: "border-pink-500",
      cta: "Get Cheat Sheet",
      locked: false,
    },
    {
      title: "Full PDF Download",
      subtitle: "Complete chapter notes",
      icon: Download,
      iconColor: "text-white",
      bgColor: "bg-[#1E293B]",
      borderColor: "border-gray-500",
      cta: "Download PDF",
      locked: false,
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans pb-20">
      <div className="max-w-5xl mx-auto pt-16 px-4">
        
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6 flex gap-2">
          <span>Class 10</span> &gt; <span>Science</span> &gt; <span>Chapter 10</span>
        </div>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0F172A] leading-tight mb-2">
            Light — Reflection & Refraction
          </h1>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#334155] leading-tight">
            प्रकाश — परावर्तन तथा अपवर्तन
          </h2>
          
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border shadow-sm text-sm font-medium">
              <Clock className="w-4 h-4 text-gray-500" />
              Total Study Time: 2h 40min
            </div>
            <Button className="bg-[#2563EB] text-white rounded-lg flex items-center gap-2">
              <Download className="w-4 h-4" /> Download Full Pack
            </Button>
            <Button variant="outline" className="bg-white border-gray-300 text-gray-700 rounded-lg flex items-center gap-2">
              <MonitorSmartphone className="w-4 h-4" /> Smart Screen Mode
            </Button>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {resources.map((res, idx) => (
            <div 
              key={idx} 
              className={`${res.bgColor} rounded-xl p-5 border-l-4 ${res.borderColor} relative overflow-hidden group hover:-translate-y-1 transition-transform flex flex-col justify-between min-h-[160px] shadow-lg`}
            >
              {/* Premium Lock Badge */}
              {res.locked && (
                <div className="absolute top-3 right-3 bg-white/10 backdrop-blur text-white text-xs px-2 py-1 rounded flex items-center gap-1 z-10">
                  <Lock className="w-3 h-3" /> Go Pro
                </div>
              )}

              {/* Top Section */}
              <div className="relative z-10">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-3">
                  <res.icon className={`w-5 h-5 ${res.iconColor}`} />
                </div>
                <h3 className="text-white font-bold text-lg leading-tight mb-1">{res.title}</h3>
                {res.subtitle && <div className="text-gray-400 text-xs">{res.subtitle}</div>}
              </div>

              {/* Decorative elements */}
              {res.badge && (
                <div className="absolute top-4 right-4 bg-white/10 text-white text-xs px-2 py-1 rounded-full backdrop-blur">
                  {res.badge}
                </div>
              )}
              {res.hasPreview && (
                <div className="absolute right-[-20px] bottom-12 w-24 h-16 bg-white/5 rounded rotate-12 border border-white/10 backdrop-blur-sm"></div>
              )}
              
              {/* Overlay for locked items */}
              {res.locked && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none z-0"></div>
              )}

              {/* Action Button */}
              <button className="w-full mt-4 py-2 rounded-lg border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-colors relative z-10">
                {res.cta}
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
