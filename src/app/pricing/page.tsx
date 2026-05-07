"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Lock, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function PricingPage() {
  const [audience, setAudience] = useState<"teachers" | "students">("teachers");

  const faqs = [
    "What are consumers with Pro?",
    "How do the right mame to payment?",
    "What is a neponsible for Peud?",
    "How do I emance from Peuz UPI?",
    "What are ontiups for whear skprted?",
  ];

  return (
    <div className="min-h-screen bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] font-sans pb-20">


      <main className="max-w-4xl mx-auto pt-16 px-4">
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#111827]">
            Choose Your Plan / <span className="font-sans">अपनी योजना चुनें</span>
          </h1>
          
          <div className="inline-flex bg-white rounded-full p-1 border shadow-sm">
            <button 
              onClick={() => setAudience("teachers")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${audience === "teachers" ? "bg-gray-100 text-gray-900" : "text-gray-500 hover:text-gray-900"}`}
            >
              For Teachers
            </button>
            <div className="w-[1px] bg-gray-200 my-2 mx-1"></div>
            <button 
              onClick={() => setAudience("students")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${audience === "students" ? "bg-gray-100 text-gray-900" : "text-gray-500 hover:text-gray-900"}`}
            >
              For Students
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16 relative">
          
          {/* Free Plan */}
          <div className="bg-[#FAF9F6] border-2 border-dashed border-gray-300 rounded-2xl p-8 relative shadow-sm transform -rotate-1 hover:rotate-0 transition-transform bg-[url('https://www.transparenttextures.com/patterns/notebook.png')]">
            <div className="absolute top-4 right-4 border-2 border-red-500 text-red-500 font-bold px-3 py-1 rounded text-sm transform rotate-12 opacity-80">
              FREE
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">मुफ़्त / Free</h2>
            <div className="text-5xl font-extrabold text-gray-900 mb-8">₹0 <span className="text-2xl font-bold">forever</span></div>
            
            <ul className="space-y-4">
              {["Denical schooliss", "Free education kseusing", "Free science ed headers"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <div className="bg-green-100 rounded-full p-1"><Check className="w-4 h-4 text-green-600" /></div>
                  {item}
                </li>
              ))}
              {["Easy to enunning", "Simply seolutions", "Recunntents with support"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-400">
                  <div className="bg-gray-100 rounded-full p-1"><Lock className="w-4 h-4 text-gray-400" /></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Pro Plan */}
          <div className="bg-[#1D4ED8] rounded-2xl p-8 relative shadow-2xl text-white transform rotate-1 hover:rotate-0 transition-transform">
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-bold px-8 py-2 text-sm transform rotate-45 shadow-md">
              Most Popular
            </div>
            <h2 className="text-2xl font-bold mb-2">प्रो / Pro</h2>
            <div className="text-white/80 text-sm mb-1">Monthly ₹499 → <span className="line-through">₹5,988/yr</span></div>
            <div className="text-5xl font-extrabold mb-8 flex items-baseline">
              ₹4,999<span className="text-2xl font-bold ml-1">/yr</span>
            </div>
            
            <ul className="space-y-4 mb-8">
              {["Denical schoolist", "Free education keeusing", "Free science ad headers", "Easy to enooping", "Simply endutions"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white">
                  <div className="bg-yellow-400 rounded-full p-1"><Check className="w-4 h-4 text-[#1D4ED8]" /></div>
                  {item}
                </li>
              ))}
            </ul>

            <Button className="w-full bg-[#FBBF24] hover:bg-[#F59E0B] text-black font-bold text-lg py-6 rounded-xl">
              Get Started with Pro
            </Button>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-2xl mx-auto space-y-3 mb-12">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white border-l-4 border-[#1D4ED8] shadow-sm p-4 rounded-r-lg flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors">
              <span className="font-medium text-gray-800">{faq}</span>
              <ChevronDown className="w-5 h-5 text-gray-400" />
            </div>
          ))}
        </div>

        <div className="text-center text-sm text-gray-500">
          Razorpay Secured • UPI / Card / Net Banking • Cancel Anytime
        </div>

      </main>
    </div>
  );
}
